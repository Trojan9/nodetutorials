const {readFile,writeFile}=require('fs')

const getFile=(path)=>{
    return new Promise((resolve,reject)=>{
        readFile(path,'utf8',(err,data)=>{
            if(err){
                reject(err)
            }else{
                resolve(data)
            }
        })
    });
}
const start=async()=>{
    try{
        const first=await getFile('./content/first.txt')
        const second=await getFile('./content/subfolder/second.txt')
        console.log(first,second)
    }catch(error){
        console.log(error);
    }
}

start();