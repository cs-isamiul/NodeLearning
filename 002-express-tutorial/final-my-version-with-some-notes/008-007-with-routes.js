const express = require('express');
const app = express();

const people = require("./routes/people");
const login = require("./routes/auth");

/**
 * req.body will have things that are sent as json from things like forms
 * req.params and other such things from 005 are in the url itself
 */

//static assets to add some functionality to web pages
app.use(express.static("./methods-public"));

//parse data from html forms
app.use(express.urlencoded({extended:false}));

//parse json data for json forms
app.use(express.json());

//enable routes
app.use("/api/people", people);
app.use("/login", login);

app.listen(5000, ()=>{
    console.log(">>Server listening on port 5000");
});