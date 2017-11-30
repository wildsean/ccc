

// 原生ajax

var data = 'name=yang';
var xhr = new XMLHttpRequest(); //创建一个ajax对象
var url  = 'http://127.0.0.1:9003' + '/home';      
xhr.onreadystatechange = function(event){    //对ajax对象进行监听
    if(xhr.readyState == 4){    //4表示解析完毕
        if(xhr.status == 200){    //200为正常返回
            console.log(xhr)
        }
    }
};
xhr.open('POST','url',true);    //建立连接，参数一：发送方式，二：请求地址，三：是否异步，true为异步
xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');    //可有可无
xhr.send(data);




// jQuery的ajax方法：

$.ajax({
    url:'/comm/test1.php',
    type:'POST', //GET
    async:true,    //或false,是否异步
    data:{
        name:'yang',age:25
    },
    dataType:'json',    //返回的数据格式：json/xml/html/script/jsonp/text
    
    success:function(data,textStatus,jqXHR){
        console.log(data)
        console.log(textStatus)
        console.log(jqXHR)
    },
    error:function(xhr,textStatus){
        console.log('错误')
        console.log(xhr)
        console.log(textStatus)
    }
    
})


// angular  

var uapp = angular.module('Myservice',[]);

uapp.factory('UserService',function($http){
    return {
        getdatas:function(callback){
            return $http.get('http://qd.bokanedu.com/tgr/api/index.aspx?day=82&type=search')
        }
    }
})


app2.factory('service',function($http){
        return {
        getdishlist:function(datas){
            return $http({
                url:'./php/index.php?c=Login&a=reg',
                method:'post',
                 data:datas,
                 headers:{'Content-Type': 'application/x-www-form-urlencoded'},
                transformRequest: function(obj) {
                    var str = [];
                    for(var p in obj){
                    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                    }
                    return str.join("&");
                    }
            });
        },
        getdishbyid:function(start){
            console.log(2222);
            return $http.get('./php/index.php?c=shop&a=shop&start='+start);
        }
    }
})



// Promise对象   有效的
// UserService.getdatas().then(callback);










