/*
 * Title: User Routes
 * Description: Application User Routes
 * Author: Tazbin Ahad
 * Date: 11/15/2020
 */

// Require dependencies
const { getAllUsers, createUser } = require("../../controllers/userController");

// Module scaffolding
const usersRoute = {
  getAllUsers: getAllUsers,
  createUser: createUser,
};

// Export module
module.exports = usersRoute;
