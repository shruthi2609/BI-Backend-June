const express=require('express')
const router=express.Router()
const UserDetails=require('../models/UserModel')
router.post('/signup',(req,res)=>{
    let data=req.body
    const user=new UserDetails({
        username:data.username,
        password:data.password,
        email:data.email,
        phone:data.phone,
        admin:data.admin
    })
    user.save().then((result)=>res.send({'msg':'user created'})).then((err)=>res.send('user is not created',err))

})

module.exports=router