const express=require('express')
const router=express.Router()
const UserDetails=require('../models/UserModel')
router.get('/delete/:username',async (req,res)=>{
    const ip_username=req.params.username
    try{
       const result= await UserDetails.findOneAndDelete({username:ip_username})
       console.log(result)
       res.send('dummy')
    }
    catch(e){
        res.send('some error occured')
    }
})


module.exports=router