var express = require('express');

var app = express();

app.use(express.static('public'));

//响应客户端的POST请求

//以 UTF-8的形式也就是 body以字符串的形式
app.post('/home',function (req,res) {
    // console.log(req);
    var jsonString = req.body.json;
    var jsonObj = JSON.parse(jsonString);
    console.log(jsonObj);
    var json = {
        msg:'POST Success'
    }
    res.send(JSON.stringify(json));
});


//POST body 以JSON的形式访问
app.post('/json',function (req,res) {
    if (!req.body){
        var json = {
            msg:'body 数据格式不正确'
        }
        res.send(JSON.stringify(json));
        return;
    }

   console.log(req.body);
    var json = {
        msg:'POST Success!!'
    }
    res.send(JSON.stringify(json));
});


//get
app.get('/get',function (req,res) {
   var json = {
       msg:{
           name:req.query.name,
           pw:req.query.pw
       }
   }
    res.send(JSON.stringify(json));
});
app.listen(9004,function (req,res) {
   console.log('Server is runing ! port:9004');
   
});

























