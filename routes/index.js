const express = require("express");
const router = express.Router();

// Include user routes
const userRoutes = require("./userRoutes");

router.use("/users", userRoutes);

module.exports = router;
