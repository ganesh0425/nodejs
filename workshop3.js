var http = require('http');
var a =20;
var b =30;
var c = a+b;
var msg = "Sum is"+c;
if(c==30){
    msg +="<br/> C is 30";
}
else{
msg += "C is not 30";
}
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end("welcome to <br/> Node JS");
}).listen(3000);

console.log("server is listening on http://127.0.01:3000");