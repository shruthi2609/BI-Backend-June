const express=require('express')
const router=express.Router()
const UserDetails=require('../models/UserModel')

router.post('/signin',async (req,res)=>{
    const data=req.body
    try{
        const result=await UserDetails.findOne({username:data.username})
        if(result.password===data.password){
            res.send('you are authenticated')
        }
        else{
            res.send('you are not autheticated')
        }
    }
    catch(err){
        res.send('some err occured')
    }
    
})
module.exports=router