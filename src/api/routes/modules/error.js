/*
 * Title: Error Handling Routes
 * Description: Application User Controller
 * Author: Tazbin Ahad
 * Date: 11/15/2020
 */

// Require dependencies

// Module scaffolding
const errorRoute = {
  notFound: (requestProperties, callback) => {
    callback(404, {
      message: "Your requested url was not found!",
    });
  },
};

// Export module
module.exports = errorRoute;
