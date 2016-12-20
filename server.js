var express=require('express');
var app=express();
app.get('*',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");  
    res.header("Access-Control-Allow-Headers", "X-Requested-With");  
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
	     res.sendFile(__dirname + req.path);

}).listen(8888,'localhost',function(){
	console.log('启动');
})
