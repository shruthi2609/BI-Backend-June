const express=require('express')
const router=express.Router()
const UserDetails=require('../models/UserModel')
router.post('/updatepassword',async (req,res)=>{
    const data=req.body
    try{
        const result=await UserDetails.findOne({username:data.username})
        if(result.password===data.password){
           const updated=await UserDetails.findOneAndUpdate({username:data.username},{password:data.newpassword})
           if(updated){
            res.send('you password is updated successfully')
           }
           else{
            res.send('some err occured')
           }
        }
        else{
            res.send('you are not autheticated')
        }
    }
    catch(e){
        res.send('some error occured')
    }
})

router.get('/updatePhone/:phone/:id',async (req,res)=>{
    const data=req.params
    try{
        const result=await UserDetails.findByIdAndUpdate({_id:data.id},{phone:data.phone})
        if(result){
            res.send('number updated')
        }
        else{
            res.send('npt updated')
        }
    }
    catch(e){
        res.send('some err occured')
    }
})
module.exports=router