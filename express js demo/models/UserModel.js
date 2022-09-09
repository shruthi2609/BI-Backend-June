const mongoose=require('mongoose')

mongoose.connect('mongodb://localhost:27017/bi_june').then((res)=>console.log('db connected')).catch((err)=>console.log(err))

const UserDetails=mongoose.model('UserDetails',{
    username:String,
    password:String,
    email:String,
    phone:Number,
    admin:Boolean
})

module.exports=UserDetails
//creating or inserting the data
/*const user=new UserDetails({
    username:"carry",
    password:"carry@123",
    email:"john@gmail.com",
    address:'IND'   
})

user.save().then((res)=>console.log('user is created')).catch((err)=>console.log('user not created',err))*/







