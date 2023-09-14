const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
require('dotenv').config();

const app = express();

app.use(bodyParser.json());

// Use the routes defined in index.js
app.use("/api", routes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
