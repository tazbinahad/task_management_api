const express = require("express");
const router = express.Router();

// Base route
router.get("/", (req, res) => {
  res.send("Welcome to the User Management API");
});

// Include user routes
const userRoutes = require("./userRoutes");
router.use("/users", userRoutes);

module.exports = router;
