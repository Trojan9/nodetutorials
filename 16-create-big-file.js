const {writeFileSync, writeFile}=require('fs')

for(let i=0;i<1000000;i++){
    writeFileSync('./content/big.txt',`hello boys whats going on ${i}\n`,{flag:'a'})
}