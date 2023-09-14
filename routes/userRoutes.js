const express = require("express");
const router = express.Router();
const { userController } = require("../controllers"); // Import from controllers/index.js

router.get("/getUsers", userController.getUsers);
router.post("/createUser", userController.createUser);

module.exports = router;
