//This is kind of like c#'s event where you subscribe to events and then can activate them via emit
const EventEmitter = require('events');

const customEmiiter = new EventEmitter();

//here you are basically subscribing this event to "response" in customEmitter
customEmiiter.on("response", (message, id)=>{
    console.log(">>data recieved :\n" + id + ", " + message);
});

//note you can give events parameters that they get when an event is emitted, but it is not required
customEmiiter.on("response", ()=>{
    console.log(">>you can have multiple methods subscribed to the same event");
});

customEmiiter.emit("response", "you can pass in arguments as well", 15);