const fs = require("fs");
// fs.writeFile("message.txt", "my first message", (err) => {

//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("success");
//     }
// });

fs.readFile("message.txt","utf8", (err, data)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(data);
    }
});