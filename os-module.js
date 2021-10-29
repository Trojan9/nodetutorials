//to grab the module
const os=require("os")

//info about currentuser
const user=os.userInfo()
console.log(user)

//metod to return the system uptime in seconds

console.log(`the uptime is:${os.uptime()/3600} hours`);
//other functions
const currentOS={
    name:os.type(),
    release:os.release(),
    totalmem:os.totalmem(),
    freemem:os.freemem(),
}
console.log(currentOS);