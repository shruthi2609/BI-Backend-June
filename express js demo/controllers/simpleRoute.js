const express=require('express')
const router=express.Router()

router.get('/dummy',(req,res)=>{
    res.send('dummy')
})

module.exports=router