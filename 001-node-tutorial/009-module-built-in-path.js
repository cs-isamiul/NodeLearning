const path = require("path");

console.log(path.sep);

//we do this so regardless of os we can get to the approrpiate path
const filePath = path.join("/content//","subfolder","///test.txt");
console.log(filePath);

//gets the final file name
const base = path.basename(filePath);
console.log(base);

//get absolute path. Like from C:/...
const absolute = path.resolve(__dirname, "content","subfolder","test.txt");
console.log(absolute);