const path=require("path")

//to get path separator

console.log(path.sep)

//to join path together
const filepath=path.join("/content",'subfolder','test.txt')
console.log(filepath)

//to get basename from a path
const base=path.basename(filepath)
console.log(base);

//to get absolute path
const absolute=path.resolve(__dirname,'content','subfolder','text.txt')
console.log(absolute)