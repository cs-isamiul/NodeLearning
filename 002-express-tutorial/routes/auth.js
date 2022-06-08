const express = require('express');
const router = express.Router();

//POST with an html form
router.post("/", (req,res)=>{
    const {name} = req.body;
    
    if(!name) {
        res.status(401).send("Please enter name");
    } else {
        res.status(200).send("Welcome " + name);
    }
});

module.exports = router;