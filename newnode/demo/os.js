const os = require('os');

console.log('Operating system: ', os.platform());

console.log('architecture processer : ', os.arch());

console.log('Info for processor: ', os.cpus());

console.log('Fre memory: ', os.freemem());

console.log('Total Memory: ', os.totalmem());

console.log('Real directory: ', os.homedir());

console.log('Uptime time: ', os.uptime());