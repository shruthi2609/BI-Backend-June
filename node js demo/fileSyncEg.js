const fs=require('fs')
console.log(fs.readFileSync('./files/one.txt','utf-8'))
/*console.log(fs.readFileSync('./files/two.txt','utf-8'))
console.log(fs.readFileSync('./files/three.txt','utf-8'))


const data='new data to add in the file'
fs.writeFileSync('./files/three.txt',data)*/

fs.appendFileSync('./files/three.txt','this data is appended data')


