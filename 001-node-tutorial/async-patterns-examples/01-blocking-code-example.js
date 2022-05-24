const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("Home page");
    }
    else if (req.url === "/about") {
        //Blocking code example
        for (let i = 0; i < 100; i++) {
            for(let j = 0; j < 200; j++) {
                console.log(i + "," + j);
            }
        }

        res.end("About page");
    }
    else {
        res.end("Error");
    }


});

server.listen(5000, () => {
    console.log("Server is listening on port 5000");
});