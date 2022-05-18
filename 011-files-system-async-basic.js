const { readFile, writeFile} = require('fs');

console.log("starting async fs 011");
//note, the last argument is a callback function, you could make this a seperate function so you only do it once
//the below is the same as 010, but (notes to come later)
readFile("./content/first.txt", "utf-8" ,(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    const first = result;

    readFile("./content/second.txt", "utf-8" ,(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        const second = result;

        writeFile("./content/result-async.txt", "Here is the async result :\n" + first + "\n" + second, (err,result)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log("done with async fs 011");
        });
    });
});

console.log("starting next task");

//notice, the async starts, but the code continues past it