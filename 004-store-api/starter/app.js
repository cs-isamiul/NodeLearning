//these are npm packages
require("dotenv").config();
require("express-async-errors");

//basic stuff to start app
const express = require('express');
const app = express();
const connectDB = require("./db/connect");

const productsRoute = require("./routes/products");

//middleware
app.use(express.json());

//routes
app.get("/", (req, res) => {
    res.send('<h1>Store API</h1><a href="/api/v1/products">Products route</a>');
});

app.use("/api/v1/products", productsRoute);

//products route

//error handling middleware
const notFoundMiddleware = require("./middleware/not-found");
const errorHandler = require("./middleware/error-handler");

app.use(notFoundMiddleware);
app.use(errorHandler);

const port = process.env.PORT || 5000;

const start = async () => {
    try {
        //connect to db
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log("Server is listening on port " + port));
    } catch (error) {
        console.log(error);
    }
}

start();