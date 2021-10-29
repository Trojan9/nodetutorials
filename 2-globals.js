//commonjs, Every file is module (by default)
//modules- encapsulated code(only share minimum)
const secret="SUPER SECRET"
const john="john";
const susan="susan"

const sayHi=(name)=>{
    console.log(`Hi it's ${name}`);
}

sayHi("peter");
sayHi(john);
sayHi(susan);

//to export a module
module.exports={john,susan,sayHi}