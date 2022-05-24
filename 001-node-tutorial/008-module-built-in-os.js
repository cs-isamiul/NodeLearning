//importing built in module, so no need to use ./
const os = require("os");

//get user info
const user = os.userInfo();
console.log(user);

//returns system uptime in seconds
console.log("The system uptime in seconds is " + os.uptime());

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
}

console.log("\n");
console.log(currentOS);