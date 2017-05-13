var fs  = require('fs');

console.log("Going to get the file");

var onFileLoad = function(err, file){
console.log("Got the file");
}

fs.readFile('readFileASync.js',onFileLoad);

//Asynchronous call back function
// fs.readFile('readFileASync.js', function(err, file){
// console.log("Got the file");
// });

console.log("App Continues...");