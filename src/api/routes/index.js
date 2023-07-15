/*
 * Title: Routes
 * Description: Application Routes
 * Author: Tazbin Ahad
 * Date: 15.07.2023
 */

// Require dependencies
const { notFound } = require("./modules/error");
const usersRoute = require("./modules/users");

// Module scaffolding
const routes = (basePath, apiPath) => {
  // Handle All Users Route
  if (basePath === "users") {
    return usersRoute[apiPath] ? usersRoute[apiPath] : notFound;
  } else {
    return notFound;
  }
};

// const routes = {
//   users: usersRoute,
// };

// Export module
module.exports = routes;
