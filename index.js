var fs = require("fs");
var http = require("http");
var server = http.createServer(function (req, res) {
 
  if (req.url == "/") {
    
    fs.readFile("Home.html", function (error, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  }
 
  if (req.url == "/cProgram") {
   
    fs.readFile("cProgram.html", function (error, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  }

  if (req.url == "/javaProgram") {
   
    fs.readFile("javaProgram.html", function (error, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  }


  if (req.url == "/javascriptProgram") {
   
    fs.readFile("javascriptProgram.html", function (error, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  }
 
  if (req.url == "/pythonProgram") {
    
    fs.readFile("pythonProgram.html", function (error, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
      
    });
    
    
  }
  if (req.url == "/others") {
    
    fs.readFile("others.html", function (error, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
      
    });
    
     

  }
});
server.listen(5050);
console.log("Server Run Success");
