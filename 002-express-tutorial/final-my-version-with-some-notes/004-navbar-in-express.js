const express = require('express');
const app = express();
const path = require('path');

//setup static and middleware
//static because the path does not change, from here express sets up mime types and pathing
app.use(express.static("./public"));

// you can do this, or you can put all these resources into the public file and have them be static
// app.get("/", (req,res)=>{
//     //you need to send the absolute path
//     res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
// });

app.all("*",(req,res)=>{
    res.status(404).send("Resource not found");
});

app.listen(5000, ()=>{
    console.log(">>Listening on port 5000");
});

/**
 * Most commonly used methods are as follows 
 * app.get : Read data (request from user)
 * app.post :  Insert data (request from user)
 * app.put : Update data (request from user)
 * app.delete : Delete data (request from user)
 * app.all :  (request from user) works with every type of response
 * app.use : middleware, to be covered later
 * app.listen : spin up the server on a specified port
 */