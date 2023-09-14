const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
require("dotenv").config();
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger-output.json");

const app = express();

app.use(bodyParser.json());

// Use the routes defined in index.js
app.use(routes);

// Swagger for API documentation
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
