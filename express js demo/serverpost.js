const express=require('express')
const server=express()
const mylogger=require('./middleware/logger')
const authenticate=require('./middleware/authenticate')
const bp=require('body-parser')
server.use(bp.json())
const morgan=require('morgan')
//server.use(morgan('tiny'))
server.use(mylogger)
server.use(authenticate)
server.post('/signin',bp.json(),(req,res)=>{
    const data=req.body
    res.send('dummy')
    //try validation here
})

server.post('/signup',(req,res)=>{
    
    res.send('dummy')
})

server.get('/seemiddleware',(req,res)=>{
    res.send('dummy')
})

server.post('/login',(req,res)=>{
    const userdata=req.body
    if(userdata.username==='john'&&userdata.password==="john@123"){
        res.send('you are authenticated')
    }
    else{
        res.send('check your username or password')
    }
})



server.listen(3001,()=>console.log('server started'))


