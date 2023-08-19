const fs = require("fs");
let sanitizedData = "";

fs.readFile("../easy/example.txt", "utf8", (err, data) => {
    if(err){
        console.log("Something went wrong");
    }else{
        sanitizedData = data.replace(/\s+/g, " ");
        console.log("File is read and cleaned");
        console.log(sanitizedData);

        fs.writeFile("exampleCleaned.txt", sanitizedData, "utf8", (err) =>{
            if(err){
                console.log("Something went wrong");
            }else{
                console.log("File is written");
            }
        });
    }

});

