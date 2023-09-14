require("dotenv").config();
const config = {
  user: process.env.user,
  password: process.env.password,
  server: process.env.server, // This could be an IP address or a domain name
  database: process.env.database,
  options: {
    encrypt: false, // Use SSL encryption
  },
};

module.exports = config;
