const {readFileSync, writeFileSync} = require('fs');


console.log("starting sync fs 010");
const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");

//can use flags to append and so on
writeFileSync("./content/result-sync.txt", "Here is the sync result :\n" + first + "\n" + second);

console.log("done with sync fs 010");
console.log("starting next task");

//notice, this goes line by line