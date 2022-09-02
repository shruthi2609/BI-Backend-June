const http=require('http')
const userDetails=require('./data/userDetails')
const server=http.createServer((req,res)=>{
    console.log(req)
if(req.url==='/home'&&req.method==='GET'){
    res.writeHead(200)
    res.end("home page demo")
}
if(req.url==='/index'&&req.method==='GET'){
    res.writeHead(200)
    res.end("<h1>Index Page</h1>")
}
if(req.url==='/users'&&req.method==='GET'){
    res.writeHead(200)
    res.end(JSON.stringify(userDetails))
}
else{
    res.writeHead(404)
    res.end("this resource is not found please check")
}
})
server.listen(3001,()=>console.log('server started ...'))