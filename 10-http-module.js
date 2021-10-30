const http=require('http');
const server=http.createServer((req,res)=>{
    if(req.url==="/"){
        res.end("WELCOME TO OUR HOME PAGE");
    }
    if (req.url==="/about"){
        res.end("here is our short story");
    }
    // res.write("hello first server")
    res.end(`<h1>oopps!!!</h1><p>we can't seem to find the page you are looking for</p><a href="/">back home</a>`
        );
})
server.listen(5000);