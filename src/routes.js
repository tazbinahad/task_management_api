/*
 * Title: Routes
 * Description: Application Routes
 * Author: Tazbin Ahad
 * Date: 11/15/2020
 *
 */

const { userController } = require("./controllers/userController");

// dependencies

const routes = {
  user: userController,
};

module.exports = routes;
