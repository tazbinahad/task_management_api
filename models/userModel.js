const config = require("../config/db");
const sql = require("mssql");

async function getAllUsers() {
  try {
    const pool = await sql.connect(config);
    const result = await pool.request().query("SELECT * FROM Users");
    return result.recordset; // Return the first user (assuming userId is unique)
  } catch (error) {
    console.error("Error fetching user by ID:", error);
    throw error; // Rethrow the error to be handled by the calling function
  }
}

function createUser(user) {
  // Implement logic to create a new user in the database
}

module.exports = { getAllUsers, createUser };
