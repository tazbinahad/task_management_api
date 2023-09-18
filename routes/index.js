const express = require("express");
const router = express.Router();

const userRoutes = require("./userRoutes");

// Use the routes defined in userRoutes.js
router.use("/users", userRoutes);

module.exports = router;
