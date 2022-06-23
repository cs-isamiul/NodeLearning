//setting up database model
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "Name cannot be empty"]
    },
    price:{
        type:Number,
        required:[true, "Price cannot be empty"]
    },
    featured:{
        type:Boolean,
        default:false
    },
    rating:{
        type:Number,
        default:5
    },
    createdAt:{
        type:Date,
        default: Date.now()
    },
    company:{
        type:String,
        enum: {
            values: ["ikea", "liddy", "caressa", "marcos"],
            message: "{VALUE} is not supported"
        }
        //enum:["ikea", "liddy". "caressa", "marcos"]
    }
});

module.exports = mongoose.model("Product", productSchema);