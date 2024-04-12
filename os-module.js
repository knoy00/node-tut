const os = require("os");
//info about current user

const user = os.userInfo()

//method reurns the system uptime in seconds

const uptime = os.uptime()
console.log(`This PC has run for ${uptime} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS)