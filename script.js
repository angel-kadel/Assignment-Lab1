// importing inbuilt node.js function (fs) using CJ method
const fs = require('node:fs');

// Non-blocking operation to read the file => readFile
fs.readFile('./node.txt','utf-8',(err,data)=>{
    if(err){
        console.log(err);
        return;
    }
    // if no error the data (text from node.text file is printed in terminal)
    console.log(data);
});

// console log to test non-blocking operation
console.log("Test: This statement should print before the text from node.txt!\n")

