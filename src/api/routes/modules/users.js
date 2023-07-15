/*
 * Title: User Routes
 * Description: Application User Routes
 * Author: Tazbin Ahad
 * Date: 11/15/2020
 */

const { getAllUsers } = require("../../controllers/userController");

// Require dependencies

// Module scaffolding
const usersRoute = {
  getAllUsers: getAllUsers,
};

// Export module
module.exports = usersRoute;
