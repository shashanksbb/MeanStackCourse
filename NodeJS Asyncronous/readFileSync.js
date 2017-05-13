var fs  = require('fs');

console.log("Going to get the file");

var file = fs.readFileSync('readFileSync.js');
console.log("Got the file");

console.log("App Continues...");