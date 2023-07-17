/*
 * Title: Task Management Application
 * Description: A RESTFul API to manage tasks
 * Author: Tazbin Ahad
 * Date: 15.07.2023
 */

// Require Dependencies
const url = require("url");
const routes = require("./routes");
const { StringDecoder } = require("string_decoder");

// api object - Module scaffolding
const api = {};

// Api handler
api.handler = (req, res) => {
  // Get the url and parse it
  const parsedUrl = url.parse(req.url, true); // true means parse the query string

  // Get the path
  const parsedPath = parsedUrl.pathname; // pathname is the path without query string
  const path = parsedPath.replace(/^\/+|\/+$/g, ""); // remove slashes from the path
  const basePath = path.split("/")[0]; // base path is the first part of the path
  const apiPath = path.split("/").slice(1); // api path is the rest of the path except the first part

  // Get the request method
  const method = req.method.toLowerCase();

  // Get the headers as an object
  const headers = req.headers;

  // Get the query string as an object
  const queryString = parsedUrl.query;

  // Generate the request properties
  const requestProperties = {
    path,
    basePath,
    apiPath,
    method,
    headers,
    queryString,
  };
  // Choose the route handler
  const chosenRoute = routes(basePath, apiPath);

  // Call the route handler
  chosenRoute(requestProperties, (statusCode, payload) => {
    statusCode = typeof statusCode === "number" ? statusCode : 500;
    payload = typeof payload === "object" ? payload : {};

    const payloadString = JSON.stringify(payload);

    // return the final response
    res.writeHead(statusCode);
    res.end(payloadString);
  });

  // const decoder = new StringDecoder("utf-8");
  // let realData = "";
  // req.on("data", (buffer) => {
  //   realData += decoder.write(buffer);
  // });

  // req.on("end", () => {
  //   realData += decoder.end();
  //   console.log(realData, 'Real Data');
  //   // response handle
  //   res.end("Hello world");
  // });
};

// export module
module.exports = api;
