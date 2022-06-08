const express = require('express');
const app = express();
let {people} = require("./data");

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

app.get("/api/people", (req, res)=>{
    res.status(200).json({success:true, data:people})
});

//POST with javascript version which uses axios
app.post("/api/people", (req, res)=>{
    const {name} = req.body;
    if(!name) {
        return res.status(400).json({success:false, msg:"Please provide name value"});
    }

    res.status(201).json({success:true, person:name});
});

//POST test with POSTMAN
app.post("/api/postman/people", (req,res)=>{
    const {name} = req.body;
    if(!name) {
        return res.status(400).json({success:false, msg:"Please provide name value"});
    }

    res.status(201).send({success:true, data: [...people, name]});
});

//POST with an html form
app.post("/login", (req,res)=>{
    const {name} = req.body;
    
    if(!name) {
        res.status(401).send("Please enter name");
    } else {
        res.status(200).send("Welcome " + name);
    }
});

//note, use postman to see results, we did not make a front end for this
app.put("/api/people/:id", (req,res)=>{
    const {id} = req.params;
    const {name} = req.body;

    const person = people.find((person)=> person.id === Number(id));

    if(!person){
        return res.status(404).json({success:false, msg:"Person not found with id " + id});
    }

    const newPeople = people.map((person => {
        if(person.id === Number(id)){
            person.name = name;
        }

        return person;
    }));

    res.status(200).json({success:true, data:newPeople});
});

app.delete("/api/people/:id", (req,res)=>{

    const person = people.find((person)=> person.id === Number(req.params.id));

    if(!person){
        return res.status(404).json({success:false, msg:"Person not found with id " + req.params.id});
    }

    const newPeople = people.filter((person)=> person.id !== Number(req.params.id));

    res.status(200).json({success:true, data:newPeople});
});

app.listen(5000, ()=>{
    console.log(">>Server listening on port 5000");
});