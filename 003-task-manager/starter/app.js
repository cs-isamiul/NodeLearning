const express = require('express');
const app = express();

const tasksRoute = require("./routes/tasks");
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");
const connectDB = require("./db/connect");
//access database .env file
require("dotenv").config();

const port = process.env.PORT || 5000;

//connect to database
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log(">>Server is listening on port " + port);
        });
    } catch(error) {
        console.log(">>Error:\n" + error);        
    }
}

//middleware
app.use(express.static("./public"));
app.use(express.json());
//routes
app.use("/api/v1/tasks", tasksRoute);
app.use(notFound);
app.use(errorHandlerMiddleware);

start();