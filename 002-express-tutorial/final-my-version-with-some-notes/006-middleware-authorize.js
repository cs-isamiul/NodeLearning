//you can send info back from the middleware by setting values on req
function authorize(req, res, next) {
    const {user} = req.query;

    if(user === "eupho"){
        req.user = {name:"Eupho", id:9};
    }
    else{
        res.status(401).send("unauthorized");
    }
    next();
}

module.exports = authorize; 