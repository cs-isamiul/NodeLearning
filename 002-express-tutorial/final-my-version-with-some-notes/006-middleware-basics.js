const express = require('express');
const app = express();
const logger = require("./final-my-version-with-some-notes/006-middleware-logger");
const authorize = require('./final-my-version-with-some-notes/006-middleware-authorize');

/**
 * request -> middleware -> response
 * note that the middleware function littererly sits in the middle of the path, and the req,res
 * You MUST pass any middleware you call directly req,res,next. Then you should call next() at the end. Otherwise the app will freeze.
 * app.get("/", middleware, anotherMiddleware, (req,res)=>{...})
 */

/**
 * Note that the middlewares you can use are [your own, express, third party]
 * remember in 005 that we used app.use(express.static("./public")); this is an example of a built in express middleware
 * Remember. Middleware is essentially just your own custom methods
 */

// if you want the middleware to be used in EVERY route, then put it in app.use
// putting a path before the middleware means that the middleware is only applied to ALL paths after the specified path
// so only /contact and /contact/usa would invoke logger if the below were uncommented, and /contact would show up as the root / path
// app.use("/contact",logger);
//if there is only one middleware for app.use then you can do app.use(middleware); else do the below
app.use([logger, authorize]);

app.get("/", (req,res)=>{
    res.send("Home");
});

app.get("/about", (req,res)=>{
    res.send("about");
    console.log(req.user);
});

app.get("/contact", (req,res)=>{
    res.send("Contact");
});

app.get("/contact/USA", (req,res)=>{
    res.send("USA Contact");
});

app.listen(5000, ()=>{
    console.log(">>Server listening on port 5000");
});