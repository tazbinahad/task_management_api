/*
 * Title: Task Management Configuration
 * Description: A RESTFul API to manage tasks
 * Author: Tazbin Ahad
 * Date: 15.07.2023
 */

// Config object - module scaffolding
const config = {};

// Port Configuration
config.port = 6000;
// Database Configuration
config.dbConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_DATABASE,
  options: {
    encrypt: false, // Disable SSL verification
  },
};

// Export Module
module.exports = config;
