/**
 * Created by win10 on 2018/7/29.
 */
var express = require('express');
var router = express.Router();

//对所有新闻的get进行mock
router.get('/all', function(req, res, next) {
  //响应mock数据
  res.json([{
    title: 'news-title-1' ,
    content: 'news-content-1'
  },
    {
      title: 'news-title-2' ,
      content: 'news-content-2'
    }]);
});

module.exports = router;
