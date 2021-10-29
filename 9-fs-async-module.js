const{readFile,writeFile}=require("fs")
readFile("./content/first.txt","utf8",(err,result)=>{
    if(err){return}else{
        const first=result;
        readFile("./content/subfolder/second.txt","utf8",(err,result2)=>{
            if(err){return}else{
                const second=result2;
                writeFile("./content/result-async.txt",`Here is my async result:${first},${second}`,(err,result)=>{})
            }

        })
    }
})