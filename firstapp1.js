/*
var http=require('http');
http.createServer(function(request,response){
response.writeHead(200,{'Content-Type':'text/plain'});
response.end('hello world');
}).listen(8081);
console.log('this is my server http://127.0.0.1:8081');
--------------------------------------------------------------------------------
var fs=require('fs');
 fs.readFile('input.txt',function(err,data){
if(err)
	return console.err(err);
console.log(data.toString());
});
console.log('program ended');
------------------------------------------------------------------------------------
var fs = require('fs');
var data=fs.readFileSync('input.txt')
	console.log(data.toString());
console.log("program ended");
-------------------------------------------------------------------------------------
var fs = require('fs');
fs.readFile('input.txt',function(err,data){
	if(err)
	return console.err(err);
	console.log(data.toString());
});
console.log('program ended');
--------------------------------------------------------------------------------------
*/



