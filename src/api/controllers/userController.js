/*
 * Title: User Controller
 * Description: Application User Controller
 * Author: Tazbin Ahad
 * Date: 11/15/2020
 */

// Require dependencies

// Module scaffolding
const userController = {};

// Get all users
userController.getAllUsers = (requestProperties, callback) => {
  console.log(requestProperties);

  callback(200, {
    success: true,
    message: "This is getAllUsers",
    data: [],
  });
};

// Export module
module.exports = userController;
