const express = require("express");
const router = express.Router();
const { userController } = require("../controllers"); // Import from controllers/index.js
const { userModel } = require("../models"); // Import from models/index.js

router.get("/getUsers", userController.getUsers);
router.post("/users", userController.createUser);

module.exports = router;
