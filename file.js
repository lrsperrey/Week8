const fs = require('fs');

const path = require('path');

fs.mkdir("./myNewFolder",function(err){
    if(err) {
        console.log(err)
    } else  {
        console.log("New directory successfully created.");
    }
});


/* #14 - Good job with your mkdir() on question 13. I will post the code for #14 here and try to explain briefly below the code.

file.access(
  path.join(__dirname, "myNewFolderII"),
  file.constants.F_OK,
  (err) => {
    if (err) {
      file.mkdir(path.join(__dirname, "myNewFolderII"), (err) => {
        if (err) {
          console.log("Whoops!");
        } else {
          console.log("Success! File Created.");
        }
      });
    } else {
      console.log("Success!");
    }
  }
);

--- So this code will read as follows: 
- file.access checks to see if the folder/file exists
- We pass the path of the folder we want to check using path.join
- if there is an error (the folder does not exist), we THEN use the mkdir method to create the folder.
- Inside console log your results if you'd like

*/




fs.writeFile('hello.txt', 'Why hello there', function (err) {
    if (err) throw err;
    console.log('File successfully created');
});


fs.readFile('./file.js', function read(err, data) {
    if (err) {
        throw err;
    }
});

// # 16 - You want to read the hello.txt file here, not the file.js



//const content = data;
//console.log(content);