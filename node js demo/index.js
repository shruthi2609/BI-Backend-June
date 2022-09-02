const http=require('http')
const userDetails=require('./data/userDetails')
const url=require('url')

const server=http.createServer((req,res)=>{
   const parsedURL=url.parse(req.url,true)
 
if(parsedURL.pathname==='/home'&&req.method==='GET'){
    res.writeHead(200)
    res.end("home page demo")
}
if(parsedURL.pathname==='/index'&&req.method==='GET'){
    res.writeHead(200)
    res.end("<h1>Index Page</h1>")
}
if(parsedURL.pathname==='/users'&&req.method==='GET'){
    res.writeHead(200)
    res.end(JSON.stringify(userDetails))
}
if(parsedURL.pathname==='/search'&&req.method==='GET'){
    const searchvalue=parsedURL.query.email
    const user=userDetails.find((item)=>item.email===searchvalue)
    if(user){
        res.writeHead(200)
        res.end(JSON.stringify(user))
    }
    else{
        res.writeHead(404)
        res.end(JSON.stringify({msg:'the user is not found'}))
    }
   
}
else{
    res.writeHead(404)
    res.end("this resource is not found please check")
}
})
server.listen(3001,()=>console.log('server started ...'))