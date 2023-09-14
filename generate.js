const swaggerAutogen = require("swagger-autogen")();
const fs = require("fs");
const configFile = "./swaggerConfig.json";
const config = JSON.parse(fs.readFileSync(configFile, "utf8"));

const outputFile = "./swagger-output.json";
const endpointsFiles = ["./routes/index.js"]; // Add all your route files

swaggerAutogen(outputFile, endpointsFiles, config);
