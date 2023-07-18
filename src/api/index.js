/*
 * Title: Task Management Application
 * Description: A Restfull API to manage tasks
 * Author: Tazbin Ahad
 * Date: 15.07.2023
 */

// Require Dependencies
const url = require("url");
const routes = require("./routes");
const { StringDecoder } = require("string_decoder");
const { parseJSON } = require("../utils/utilityFunctions");

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

  // Get the payload if any
  let realData = "";
  const decoder = new StringDecoder("utf-8");
  req.on("data", (buffer) => {
    realData += decoder.write(buffer);
  });

  req.on("end", () => {
    realData += decoder.end();
    requestProperties.body = parseJSON(realData);

    // Call the route handler
    chosenRoute(requestProperties, (statusCode, payload) => {
      statusCode = typeof statusCode === "number" ? statusCode : 500;
      payload = typeof payload === "object" ? payload : {};

      const payloadString = JSON.stringify(payload);

      // return the final response
      res.setHeader("Content-Type", "application/json");
      res.writeHead(statusCode);
      res.end(payloadString);
    });
  });
};

// export module
module.exports = api;
