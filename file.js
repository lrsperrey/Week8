const fs = require('fs');

const path = require('path');

fs.mkdir("./myNewFolder",function(err){
    if(err) {
        console.log(err)
    } else  {
        console.log("New directory successfully created.");
    }
});

fs.writeFile('hello.txt', 'Why hello there', function (err) {
    if (err) throw err;
    console.log('File successfully created');
});


fs.readFile('./file.js', function read(err, data) {
    if (err) {
        throw err;
    }
});

const content = data;
console.log(content);