const express = require('express');
const app = express();
const{products} = require("./data");

app.get("/",(req,res)=>{
    res.send('<h1>Home Page</h1><a href="/api/products">Products</a>');
});

app.get("/api/products",(req,res)=>{
    const newProducts = products.map((product)=>{
        //return only id, name, image and NOT description
        const {id,name,image} = product;
        return {id, name, image};
    });

    res.json(newProducts);
});

//these are route params, you can nest them /api/products/:productID/review/:reviewID note that /review is a static path
app.get("/api/products/:productID",(req,res)=>{
    //:productID means we are looking for a param called productID. Note these params are returned as strings
    //console.log(req.params);
    const {productID} = req.params;
    const singleProduct = products.find((product)=> product.id === Number(productID));

    //if product does not exist
    if(!singleProduct){
        return res.status(404).send("Product Does Not Exist");
    }

    res.json(singleProduct);
});

//there are also query strings added usually to the end of a url. ?queryString=something will set queryString as something
//you can do ?varA=1&varB=2 to set multiple query strings
app.get("/api/v1/query",(req,res)=>{
    //console.log(req.query);
    const {search, limit} = req.query;

    let sortedProducts = [...products];

    if(search){
        sortedProducts = sortedProducts.filter((product)=>{
            return product.name.startsWith(search);
        });
    }

    if(limit){
        sortedProducts = sortedProducts.slice(0, Number(limit));
    }

    if(sortedProducts.length === 0){
        return res.status(200).json({success:true,data:[]});
    }

    res.json(sortedProducts);
});

app.listen(5000, ()=>{
    console.log(">>Server listening on port 5000");
});