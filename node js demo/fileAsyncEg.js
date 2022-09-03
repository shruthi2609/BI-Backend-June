const fs=require('fs')
/*fs.readFile('./files/four.txt','utf-8',(err,data)=>{
if(err){
    console.log(err)
}
else{
    console.log(data)
}
})

fs.writeFile('./files/four.txt','this is fresh data',(err)=>{
    if(err){
        console.log(err)
    }
})*/

fs.appendFile('./files/five.txt','this is fresh data',(err)=>{
    if(err){
        console.log(err)
    }
})