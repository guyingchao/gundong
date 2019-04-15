/**
 * Created by win10 on 2018/12/10.
 */
exports.formatMoney = (value) => {
  if (value) {
    value = Number(value);
    return '￥ ' + value.toFixed(2);
  }
}

exports.statusName = (val) => {
  let statusName = '';
  switch (val) {
    case 0: {
      statusName = '已取消';
      break;
    }
    case 10: {
      statusName = '未付款'
      break
    }
    case 20: {
      statusName = '已付款'
      break
    }
  }
  return statusName
}
