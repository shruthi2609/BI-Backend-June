const express=require('express')
const server=express()
const dummy=require('./controllers/simpleRoute')
const signup=require('./controllers/SignUp')
const signin=require('./controllers/Signin')
const bp=require('body-parser')
server.use(bp.json())
server.use('/',dummy)
server.use('/',signup)
server.use('/',signin)

server.listen(3001,()=>console.log('server started'))


