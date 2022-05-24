const secret = "I am not exported";
//these will be exported
const user = "Eupho";
const realName = "Samiul";

//export module so it can be accessed elsewhere
module.exports = { user, realName };

//the below will let you see information about the module, such as what is being exported
//console.log(module);