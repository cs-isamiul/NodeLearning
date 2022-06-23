const Product = require("../models/product");

const getAllProductsStatic = async(req,res) => {
    const products = await Product.find({
        name:"vase table",
    });
    res.status(200).json({nbHits:products.length, products});
};

const getAllProducts = async(req,res) => {
    //we are doing this to make sure our passed in queries are the correct
    //type and that we are only using the values we want
    const {featured, company, name, sort, fields, numericFilters} = req.query;
    const queryObject = {};

    //filtering products
    if(featured) {
        //if featured === true, then return true, else false
        queryObject.featured = featured === 'true' ? true : false;
    }
    if(company) {
        queryObject.company = company;
    }
    if(name) {
        //search for items that include name in them, check out mongodb query options for more
        queryObject.name = {$regex: name, $options: "i"};
    }

    //sorting filters with numbers involved
    if(numericFilters){
        //the ones on the left are what mongoose needs
        const operatorMap ={
            ">":"$gt",
            ">=":"$gte",
            "=":"$eq",
            "<":"$lt",
            "<=":"$lte",
        };

        //find >,>=,=,<,<= and replace them with the above
        const regex = /\b(<|>|>=|=|<|<=)\b/g;
        let filters = numericFilters.replace(regex, (match)=>`-${operatorMap[match]}-`);

        //make sure only the fields we want to filter are filtered
        const options = ["price", "rating"];
        filters = filters.split(",").forEach((item)=>{
            //processing and adding to queryObject
            const [field, operator, value] = item.split("-");
            if(options.includes(field)){
                queryObject[field] = {[operator]:Number(value)};
            }
        });
    }

    //console.log(queryObject);
    //sorting products
    let result = Product.find(queryObject);

    if(sort) {
        const sortList = sort.split(",").join(" ");
        result = result.sort(sortList);
    } else {
        result = result.sort("name");
    }

    //send back data with only specified fields showing
    if(fields) {
        const fieldsList = fields.split(",").join(" ");
        result = result.select(fieldsList);
    }

    //limit how many products are shown per page
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    //skip lets us shift what the first element is
    const skip = (page -1) * limit;

    result = result.skip(skip).limit(limit);

    const products = await result;
    res.status(200).json({nbHits:products.length, products});
};

module.exports = {getAllProducts, getAllProductsStatic};