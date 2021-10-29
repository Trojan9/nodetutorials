//we can also use destructuring method to import it
const {readFileSync,writeFileSync}=require('fs')

const first =readFileSync("./content/first.txt","utf8");
const second=readFileSync("./content/subfolder/second.txt","utf8")

console.log(first,second)

//to write to a file
writeFileSync('./content/result-sync.txt',`Here is the result: ${first},${second}`,{flag:'a'})//add flag to prevent overwrite of contents in it before