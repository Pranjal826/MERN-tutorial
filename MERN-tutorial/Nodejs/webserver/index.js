const http=require("http");

const server=http.createServer((req,res)=>{
  //  console.log(req.url);
  if(req.url=="/"){
    res.end('Hello from other sides');
  }else if(req.url=="/about"){
     './about';
  }

});
server.listen(8000,"127.0.0.1",()=>{console.log("Listening to port no 8000");
});