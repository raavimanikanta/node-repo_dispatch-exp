var express=require("express");

var server=express();

server.get("/",(req,res)=>{
     res.send("<h1>Hello-world!!</h1>")
})

server.listen(3001,()=>{
    console.log("server is running at port 3001")
  })