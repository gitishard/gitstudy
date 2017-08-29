    //app=module.exports=express.createServer(),
	// app=require('express').createServer(),
	var app= require('express')();
	var server= require('http').Server(app);
	var io = require('socket.io')(server);
// apps = require('http').createServer(),
// 	io=require('socket.io').listen(apps),
// 	express=require('express'),
// 	app=express(),
	var nicknames=[];
server.listen(3000);
app.get('/',function(req,res){
	res.sendfile(__dirname + '/index.html');
});
io.sockets.on('connection',function(socket){
	socket.on('nickname',function(data,callback){
		if(nicknames.indexOf(data)!=-1){
			callback(false);
		}else {
			callback(true);
			nicknames.push(data);
			socket.nickname=data;
			console.log("Nicknames are "+nicknames+", ");
			io.sockets.emit("nicknames",nicknames);
		}
	});
	socket.on('user message',function(data){
		io.sockets.emit('user message',{
			nick:socket.nickname,
			message:data
		});
	});
	socket.on('disconnect',function(){
		if(!socket.nickname) return;
		if(nicknames.indexOf(socket.nickname)>-1){
			nicknames.splice(nicknames.indexOf(socket.nickname),1);
		}
		console.log("Nicknames are "+nicknames+", ");
		io.sockets.emit('nicknames',nicknames);
	});
});