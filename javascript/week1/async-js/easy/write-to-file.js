const fs = require("fs");

fs.appendFile("example.txt", "\n This line was put here by the write-to-file gang.", "utf8", (err) => {
    if(err){
        console.error('Error appending to file:', err);
    }else{
        console.log("Content added to file");
    }
})