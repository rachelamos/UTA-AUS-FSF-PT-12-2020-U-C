const http = require('http');

const PORT1 = 7000;

// const PORT2 = 7500;

const handleRequest = (request, response) => {
    response.end(`You've got this! ${request.url}`);
};

// const handleRequest2 = (request, response) => {
//     response.end(`You've got this! ${request.url}`);

const server = http.createServer(handleRequest);



server.listen(PORT1, () => {
    // Log (server-side) when our server has started
    console.log(`Server listening on: http://localhost:${PORT1}`);
  });

// server.listen(PORT2, () => {
//     // Log (server-side) when our server has started
//     console.log(`Server listening on: http://localhost:${PORT2}`);
//   });

