const http=require('http')
const url=require('url')
const server=http.createServer((req,res)=>{
const parsedURL=url.parse(req.url,true)
if(parsedURL.pathname='/signin'&&req.method==='POST'){
   let reqdata=''
   req.on('data',(chunk)=>{
    //console.log(chunk.toString())
    reqdata+=chunk.toString()
   })
   req.on('end',()=>{
    const data=JSON.parse(reqdata)
    console.log(data)
   if(data.username==="john@gmail.com"&&data.password==="john@123"){
    res.writeHead(200)
    res.end("you are authenticated")
   }
   else{
    res.writeHead(404)
    res.end('you are not authenticated')
   }
   })

   req.on('close',()=>{
    console.log('req data is read ... done !')
   })
   
}
})
server.listen(3001,()=>console.log('server has started'))