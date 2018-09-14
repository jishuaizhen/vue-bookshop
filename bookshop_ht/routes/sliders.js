var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
var array = [
    "http://static.winxuancdn.com/topic/subject/201805/mks/640-304.jpg",
    "http://static.winxuancdn.com/topic/subject/201804/17hs/640-304.jpg",
    "http://static.winxuancdn.com/topic/subject/201801/qkl/640-304.jpg",
    "http://static.winxuancdn.com/topic/subject/201804/18dsj/640-304-6.jpg"
];
res.send(array);
});

module.exports = router;
