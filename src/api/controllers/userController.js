/*
 * Title: User Controller
 * Description: Application User Controller
 * Author: Tazbin Ahad
 * Date: 11/15/2020
 */

const User = require("../model/users");

// Require dependencies

// Module scaffolding
const userController = {};

// Get all users
userController.getAllUsers = async (requestProperties, callback) => {
  try {
    // Fetch all users from the User model
    const users = await User.getUserList();
    callback(200, {
      success: true,
      message: "Successfully retrieved users",
      data: users,
    });
  } catch (error) {
    callback(500, {
      success: false,
      message: "Failed to retrieve users",
      error: error.message,
    });
  }
};
// Create user
userController.createUser = async (requestProperties, callback) => {
  try {
    const method = requestProperties.method.toLowerCase();
    if (method === "post") {
      // Create user from the UserCreate model
      const user = await User.createUser(requestProperties.body);
      callback(200, {
        success: true,
        message: "Successfully created user",
        data: user,
      });
    } else {
      callback(405, {
        success: false,
        message: "Invalid method. Expected POST.",
      });
    }
  } catch (error) {
    callback(500, {
      success: false,
      message: "Failed to create user",
      error: error.message,
    });
  }
};

// Export module
module.exports = userController;
