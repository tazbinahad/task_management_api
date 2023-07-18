/*
 * Title: Task Management Application
 * Description: A RESTFul API to manage tasks
 * Author: Tazbin Ahad
 * Date: 15.07.2023
 */
// Require Dependencies
require("dotenv").config();
const http = require("http");
const { handler } = require("./src/api");


// Port
const port = process.env.PORT || 3000;

// App object - module scaffolding
const app = {};

// Create server
app.createServer = () => {
  const server = http.createServer(handler);
  server.listen(port, () => {
    console.log(`listening to port http://localhost:${port}`);
  });
};

// Start Server
app.createServer();
