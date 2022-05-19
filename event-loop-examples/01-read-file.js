const { readFile } = require('fs');

console.log("\n\n>started first task");

//check file path
readFile("./content/first.txt", "utf-8", (err, result) => {
    if(err) {
        console.log(err);
        return;
    }

    console.log("first task result is : " + result);
    console.log(">completed first task");
});

console.log(">onto the next task");