const os = require('os');

//os.type() is a method that returns the operating system name as a string 
// (e.g., 'Windows_NT', 'Darwin', 'Linux').
console.log('Operating System:', os.type()); 

//os.version() returns a string representing the operating system version.
console.log('OS Version:', os.version());

//os.homedir() returns the path to the current user's home directory as a string.
console.log('Home Directory:', os.homedir());

//os.arch() returns a string representing the CPU architecture (e.g., 'x64', 'arm64').
console.log('CPU Architecture:', os.arch());

//os.cpus() returns an array of objects, where each object contains information about a CPU core.
console.log('CPU Cores:', os.cpus());

//os.totalmem() returns the total amount of system memory in bytes.
console.log('Total Memory (bytes):', os.totalmem());

//os.freemem() returns the amount of free system memory in bytes.
console.log('Free Memory (bytes):', os.freemem());