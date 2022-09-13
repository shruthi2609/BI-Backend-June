const express=require('express')
const router=express.Router()
const UserDetails=require('../models/UserModel')
router.get('/search/:username',async (req,res)=>{
    const ip_username=req.params.username
    try{
      const result=await UserDetails.findOne({username:ip_username},{password:0,admin:0})
      
      res.send(result)
    }
    catch(e){
        res.send('some err occured')
    }
})
router.get('/email/:useremail',async (req,res)=>{
    const ip_email=req.params.useremail
    try{
        const result=await UserDetails.findOne({email:ip_email},{phone:1})
        if(result){
            res.send(result)
        }
        else{
            res.send("sorry the user data is not found")
        }
        
    }
    catch(e){
        res.send('some err occured')
    }
})

module.exports=router