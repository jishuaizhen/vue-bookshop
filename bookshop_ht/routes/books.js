var express = require('express');
var router = express.Router();
// 解析文件需要引入
var fs = require("fs");


var mysql=require('mysql');
var connection=mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'123456',
  database:'bookshop'
});
connection.connect();
/* GET home page. */
router.get('/', function(req, res, next) {
  // res.send('this is book api');
  var page = parseInt(req.query.page)
  var pagenum = parseInt(req.query.pagenum)
  var start = (page-1) * pagenum
  console.log(start)
  console.log(pagenum)
  connection.query(`select * from books limit ${start},${pagenum}`,function(err,rows,fields){
    if(err)throw err;
    res.send(rows);
  })
});
//接到前台axios的请求，删除带有指定id的数据
router.delete('/:id', function (req, res, next) {
  connection.query(`delete from books where id=${req.params.id}`, function (err, rows, fields) {
    if (err) {
      // throw err;
      res.send({
        status: 0,
        err: err
      })
    } else {
      res.send({
        status: 1,
        info: {

        }
      })
    }
  });
});

// 获取单个书籍信息
router.get('/:id', function (req, res, next) {
  connection.query(`select * from books where id=${req.params.id}`, function (err, rows, fields) {
    if (err) throw err;
    res.send(rows[0])
  });
});

//接到前台axios的请求，更新指定id的数据
router.put('/:id', function (req, res, next) {
  var bookName = req.body.bookName;
  var bookDescript = req.body.bookDescript;
  var bookPrice = req.body.bookPrice;
  var id = req.params.id;
  connection.query(`update books set bookName='${bookName}',bookDescript='${bookDescript}',bookPrice=${bookPrice} where id=${id}`, function (err, data) {
    if (err) {
      // throw err;
      res.send({
        status: 0,
        err: err
      })
    } else {
      res.send({
        status: 1,
        info: {
          data:data.insertId
        }
      })
    }
  });
})

// 添加图书
router.post('/', function (req, res, next) {
  var bookName = req.body.bookName;
  var bookDescript = req.body.bookDescript;
  var bookPrice = req.body.bookPrice;
  var bookCover = req.body.bookCover;

  // 1.将base64转换成地址，并且将图片保存到本地
  var base64Data = bookCover.replace(/^data:image\/\w+;base64,/, '')
  var dataBuffer = new Buffer(base64Data, 'base64')
  var mydate = new Date();
  var string32 = "bookshop"+mydate.getDay()+ mydate.getHours()+ mydate.getMinutes()+mydate.getSeconds()+mydate.getMilliseconds() + ".png";//根据时间来自动生成uuid，保证生成的id是唯一的
  var bookurl = "./public/images/" + string32

  fs.writeFile(bookurl, dataBuffer, function(err) {
    if (err) {
      console.log(err);
      res.send({
        status: 0
      })
    }
    
    var bookCover = "http://127.0.0.1:3000/images/" + string32;

  // 2.将图片的本地地址存储到数据库

  connection.query(`insert into books (bookName, bookDescript, bookPrice, bookCover) values('${bookName}', '${bookDescript}', ${bookPrice}, '${bookCover}')`, function (err, data) {
    if (err) {
      // throw err;
      res.send({
        status: 0,
        err: err
      })
    } else {
      res.send({
        status: 1,
        info: {
          id: data.insertId
        }
      })
    }
  });

  });
  
});
module.exports = router;
