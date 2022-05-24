const {createReadStream} = require("fs");

const stream = createReadStream("./content/big.txt", {encoding:"utf-8"});

//by default the streams buffer is 64kb
//you can add a flag {highWaterMark: n, encoding: "..."} highWaterMark is how many bytes are in each chunk

stream.on("data", (result)=>{
    console.log(result);
});

stream.on("error", (err)=>{
    console.log(">>" + err);
});