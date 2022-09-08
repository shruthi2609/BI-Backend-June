function authenticate(req,res,next){
    const data=req.body
    if(data.role==="admin"){
       next() 
    }
    else{
        res.send('you are not an admin')
    }

}
module.exports=authenticate