const express = require('express');

const app = express();

//express automatically sends status codes, but its good practice to do res.satus(code).send(...);

app.get("/", (req,res)=>{
    res.status(200).send("Home Page");
});

app.get("/about", (req,res)=>{
    res.status(200).send("About Page");
});

//default 404 response, but you can modify it
app.all("*", (req,res)=>{
    res.status(404).send("<h1>resource not found</h1>");
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