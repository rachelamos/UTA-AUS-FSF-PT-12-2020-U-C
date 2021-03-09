// Dependencies
const http = require('http');
const fs = require('fs');

// Set our port to 8080
const PORT = 8080;

// Create a function for handling the requests and responses coming into our server
const displayFoods = (res) => {
    // Here we use the fs package to read our index.html file
    fs.readFile(`${__dirname}/foods.html`, (err, data) => {
        if (err) throw err;
        // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
        // an html file.
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });
};

const displayMovies = (res) => {
    // Here we use the fs package to read our index.html file
    fs.readFile(`${__dirname}/movies.html`, (err, data) => {
        if (err) throw err;
        // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
        // an html file.
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });
};

const displayFrameworks = (res) => {
    // Here we use the fs package to read our index.html file
    fs.readFile(`${__dirname}/frameworks.html`, (err, data) => {
        if (err) throw err;
        // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
        // an html file.
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });
};

const handleRequest = (req, res) => {
    // Capture the url the request is made to
    const path = req.url;

    // Depending on the URL, display a different HTML file.
    switch (path) {
        case '/':
            return displayRoot(res);

        case '/foods':
            return displayFoods(res);

        case '/movies':
            return displayMovies(res);

        case '/frameworks':
            return displayFrameworks(res);

        default:
            return display404(path, res);
    }
};


// Create our server
const server = http.createServer(handleRequest);

// Starts our server
server.listen(PORT, () => {
    console.log(`Server is listening on PORT: ${PORT}`);
});
