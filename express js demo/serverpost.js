const express=require('express')
const server=express()
const bp=require('body-parser')
server.use(bp.json())
const morgan=require('morgan')
//server.use(morgan('tiny'))
server.use(mylogger)
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

function mylogger(req,res,next){
    console.log(req.url,req.method)
    next()
}
server.listen(3001,()=>console.log('server started'))


