//modules
//when using require, if importing a local module, you must start with ./
// ./ is root, ../ is one level up and so on

const names = require("./004-module-test-names");
const sayHi = require("./005-module-test-printer");

//You can also import modules like this, where the two variables on the left map to the variables being exported in order
//const {realName, user} = require("./004-module-test-names");

sayHi("Iona");
sayHi(names.realName);
sayHi(names.user);
// sayHi(realName);
// sayHi(user);

console.log("\n");

//just shows an alternate way to export modules
const alternate = require("./006-module-test-alternate");
console.log(alternate);

console.log("\n");

//shows that the whole module is loaded and run upon import
require("./007-module-test-call-function-in-this");

