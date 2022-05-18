// GLOBALS  - NO WINDOW !!!!

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed

console.log(__dirname);

const test = setInterval(hello, 1000);
function hello() {
    console.log("hello");
}

const stop = setTimeout(stopper, 10000);
function stopper() {
    clearInterval(test);
}

console.log("setInterval will run every n seconds, yes you can have multiple of these going. \nsetTimeout makes a function run after n seconds. \nYou can use clearInterval or clearTimeout to stop these");

/** 
 * Examples of how you might want to do this
 * 
 * say hello every 1 second
 * const interval = setInterval(hello, 1000);
 * 
 * function hello() {}
 * 
 * set off alarm after 10 seconds
 * const timer = setTimeout(alarm, 10000);
 * 
 * function alarm() {}
 */