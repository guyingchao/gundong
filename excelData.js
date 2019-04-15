/**
 * Created by win10 on 2018/9/20.
 */
var XLSX = require('xlsx');
var workbook = XLSX.readFile('./Australian Iron Ore Schedule.xlsx');
var sheet_name_list = workbook.SheetNames;
var array = []
sheet_name_list.forEach(function(y) {
  console.log('name',y)
  var worksheet = workbook.Sheets[y];
  // var worksheet = workbook.Sheets[sheet_name_list[1]]
  var headers = {};
  var data = [];
  // console.log('HAHHA',worksheet['A6'],worksheet['A7'],worksheet['B8'])

  for(z in worksheet) {
    if(z[0] === '!') continue;
    //parse out the column, row, and value
    var col = z.substring(0,1);
    var row = parseInt(z.substring(1));
    var value = worksheet[z].w;
    // console.log('zzzz',z, col, row, value)
    if(value.toLowerCase() == 'vessel' || value.toLowerCase() == 'eta' ||
      value.toLowerCase() == 'etb' || value.toLowerCase() == 'etd'|| value.toLowerCase() == 'waiting time'
      || value.toLowerCase() == 'cargo ' || value.toLowerCase() == 'cargo' || value.toLowerCase()== 'destination' ||
      value.toLowerCase()=='shipper' || value.toLowerCase()== 'quantity' ||
      value.toLowerCase() == 'tonnage' || value.toLowerCase() == 'qty'){
      if(value.toLowerCase() == 'vessel'){
        headers[col] = 'VESSEL';
      }else if (value.toLowerCase() == 'cargo ' || value.toLowerCase() == 'cargo'){
        headers[col] = 'Cargo';
      } else if(value.toLowerCase()=='shipper'){
        headers[col] = 'SHIPPER';
      } else if(value.toLowerCase() == 'tonnage' || value.toLowerCase() == 'qty'){
        headers[col] = 'Quantity';
      } else if(value.toLowerCase()== 'destination'){
        headers[col] = 'Destination';
      } else {
        headers[col] = value;
      }
      continue;
    }

    if(!data[row]) data[row]={};
    data[row]['port'] = y
    data[row][headers[col]] = value;
  }
  //drop those first two rows which are empty
  data.shift();
  data.shift();
  console.log(data);
  for(let i = 0; i < data.length; i++){
    let item = data[i]
    // console.log(item)
      if(item && item['VESSEL'] && item['ETA'] && item['ETA'] != ' '){
        array.push(item)
      }
  }
});
// console.log(array,array.length)


/*//在excel表格中输出
var _headers = ['port', 'VESSEL', 'ETA', 'ETB', 'ETD', 'Waiting Time', 'Quantity', 'Cargo', 'Destination', 'SHIPPER']
var _data = array
var headers = _headers
  .map((v, i) => Object.assign({}, {v: v, position: String.fromCharCode(65+i) + 1 }))
  .reduce((prev, next) => Object.assign({}, prev, {[next.position]: {v: next.v}}), {});
var dataout = _data
  .map((v, i) => _headers.map((k, j) => Object.assign({}, { v: v[k], position: String.fromCharCode(65+j) + (i+2) })))
  .reduce((prev, next) => prev.concat(next))
  .reduce((prev, next) => Object.assign({}, prev, {[next.position]: {v: next.v}}), {});
// 合并 headers 和 data
var output = Object.assign({}, headers, dataout);
// 获取所有单元格的位置
var outputPos = Object.keys(output);
// 计算出范围
var ref = outputPos[0] + ':' + outputPos[outputPos.length - 1];
// 构建 workbook 对象
var wb = {
  SheetNames: ['mySheet'],
  Sheets: {
    'mySheet': Object.assign({}, output, { '!ref': ref })
  }
};
// 导出 Excel
XLSX.writeFile(wb, './out.xlsx');*/
