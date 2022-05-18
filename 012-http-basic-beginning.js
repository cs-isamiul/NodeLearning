const http = require('http');

function serverRequestResponse(req, res) {
    //console.log(req);

    if(req.url === "/")
    {
        res.write("Welcome to our home page");
    }
    else if(req.url === "/about"){
        res.write("About : This is just an example about page");
    }
    else {
        res.write("Page not found");
    }
    res.end();
}

const server = http.createServer(serverRequestResponse);
server.listen(5000);

// const http = require('http');

// const server = http.createServer((req, res) =>{
//     console.log(req);

//     if(req.url === "/")
//     {
//         res.write("Welcome to our home page");
//     }
//     else if(req.url === "/about"){
//         res.write("About : This is just an example about page");
//     }
//     else {
//         res.write("Page not found");
//     }
//     res.end();
// });

// server.listen(5000);