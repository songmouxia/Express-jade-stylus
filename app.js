var express=require('express');
var app=express();
var routes=require('./routes/index');

app.use('/',routes);
/*app.set('views',path.join(__dirname,'views'));*/
app.set('view engine','jade');
app.use(express.static(__dirname+"/static/"));
app.listen(1337,"127.0.0.1",function(){
	console.log("我要开始监听了。。。。");
})