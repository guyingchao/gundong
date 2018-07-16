/**
 * Created by win10 on 2018/7/4.
 */
import axios from 'axios'
import cookies from 'vue-cookies'
var GO_UTIL = {}
axios.defaults.baseURL = 'http://api.gogotrade.info'
GO_UTIL.baseURL = axios.defaults.baseURL
GO_UTIL.setBaseURLInDevelop = function () {
  // 判断是否是 localhost、192*
  var hostName = window.location.hostname
  if (hostName == 'localhost' || hostName.split(".")[0] == "192") {
    var baseUrl = cookies.get('hostname')
    if (baseUrl && baseUrl != '') {
      axios.defaults.baseURL = baseUrl
      GO_UTIL.baseURL = baseUrl
    }
  }
}
GO_UTIL.setBaseURLInDevelop()
GO_UTIL.ajax = function (method, url, data, cb) {
  console.log(new Date(),method,url,data);
  //开启加密
  data.cipher = 0;
  let token = cookies.get('token')
  if (token) {
    url += '?token=' + token
  }
  var config = {
    method: method,
    url: url
  }
  if (method === 'post' || method === 'POST' || method === 'put' || method === 'PUT') {
    config.data = data
  } else {
    config.params = data
  }

  function data_back(res_data){
    if(!res_data.error) {
      console.log("back:",method,url)
      cb(null, res_data);
    } else {
      switch (res_data.error) {
        case 'PLEASE_LOGIN':
          window.GOEVENT.$emit('LOGIN_SHOW',{needReload:true})
          if (token) { // 被顶掉后删除本地token
            cookies.remove('token')
          }
          break;
        case 'NO_DATA_ACCESS':
          if (!window.showingNoAccessDialog) {
            window.showingNoAccessDialog = true;
            window.ROOT.$alert(window.ROOT.$t('userAdd.tip_content'), window.ROOT.$fut('userAdd.tip_title'), {
              confirmButtonText: '确定',
              callback: action => {
                setTimeout(function () {
                  window.showingNoAccessDialog = false;
                },1000)
              }
            })
          }
          break;
        default: cb(null, res_data);
      }
    }
  }
  axios(config)
    .then(function (response) {
      let cipher = data.cipher || 0
      let algorithm = 'aes-256-cbc';
      if (cipher === 1) {
        // 需要解密
        data_back(JSON.parse(decipher(algorithm, null, response.data)));
      } else {
        data_back(response.data);
      }
    })
    .catch(function (error) {
      if (cb) {
        cb(error, {error: error})
      }
    })
}
export default GO_UTIL
