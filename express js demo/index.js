const express=require('express')
const server=express()
const data=require('../node js demo/data/userDetails')

server.get('/home',(req,res)=>{
res.status(200).send("home is hit")
//res.send()
})
server.get('/users',(req,res)=>{
    res.status(200).send(JSON.stringify(data))
})

server.get('/search',(req,res)=>{
    const searchEmail=req.query.email
    console.log(searchEmail)
    const user=data.find((item)=>item.email===searchEmail)
    console.log(user)
    res.status(200).send(JSON.stringify(user))
})

server.get('/find/:email/:username',(req,res)=>{
    //http://localhost:3001/find/john@gmail.com/john
    console.log(req.params)
    const searchEmail=req.params.email
    const searchUsername=req.params.username
    const user=data.find((item)=>item.email===searchEmail&&item.username===searchUsername)
    console.log(user)
    res.status(200).send(JSON.stringify(user))
})

server.listen(3001,()=>console.log('server started'))
