const { readFile, writeFile } = require('fs').promises;
// const util = require('util');
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

//Promises are how you do async without the mess seen in 011. Look! try-catch blocks!
const start = async() => {
    try{
        const first = await readFile("./content/first.txt", "utf-8");
        const second = await readFile("./content/second.txt", "utf-8");

        await writeFile("./content/result-await-pattern.txt", "Writing first and second\n" + first + "\n" + second);
        console.log(">>" + first, "\n>>" + second);
    } catch(error) {
        console.log(">>" + error);
    }
}

start();

// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf-8', (err, data) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(data);
//             }
//         });
//     });
// };

//getText("./content/first.txt").then(result => console.log(result)).catch(err => console.log(err));