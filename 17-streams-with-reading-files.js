const {createReadStream}=require('fs')
const stream=createReadStream('./content/big.txt',{highWaterMark:90000,encoding:'utf8'})//to increase the size of buffer and specify encoding
stream.on('data',(result)=>{console.log(result);});
stream.on('error',(error)=>{
    console.log(error)
})