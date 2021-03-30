const path = require('path');

var myPath=C://Desktop/CBC11/Week 8/Week8;

/* #10 - Make sure you declare your myPath variable as a string.

var myPath = 'C://Desktop/CBC11/Week8/some_folder/hello.txt';

*/


var pathObject = path.parse(myPath);
console.log(pathObject);