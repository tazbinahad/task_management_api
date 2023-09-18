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

async function createUserModel(user) {
  try {
    const pool = await sql.connect(config);
    await pool
      .request()
      .input("username", sql.NVarChar(50), user.username)
      .input("password", sql.NVarChar(50), user.password)
      .input("firstName", sql.NVarChar(50), user.firstName)
      .input("lastName", sql.NVarChar(50), user.lastName)
      .input("email", sql.NVarChar(100), user.email)
      .input("phoneNumber", sql.NVarChar(20), user.phoneNumber)
      .input("genderId", sql.Int, user.genderId)
      .execute("InsertUser");

    await sql.close();
  } catch (error) {
    throw error;
  }
}

module.exports = { getAllUsers, createUserModel };
