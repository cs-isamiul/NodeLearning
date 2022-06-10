const express = require('express');
const app = express();
const tasksRoute = require("./routes/tasks");
const connectDB = require("./db/connect");
//access database .env file
require("dotenv").config();

//connect to database
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        //in future dynamically choose an open port
        let port = 5000;
        app.listen(port, () => {
            console.log(">>Server is listening on port " + port);
        });
    } catch(error) {
        console.log(">>Error:\n" + error);        
    }
}

//middleware
app.use(express.json());
//routes
app.use("/api/v1/tasks", tasksRoute);

start();