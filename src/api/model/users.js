/*
 * Title: User Routes
 * Description: Application User Routes
 * Author: Tazbin Ahad
 * Date: 11/15/2020
 */

// Require dependencies
const sql = require("mssql");
const { dbConfig } = require("../../config");
const { validateEmail } = require("../../utils/utilityFunctions");

// Module scaffolding

// Get User List
class User {
  static async getUserList() {
    try {
      const pool = await sql.connect(dbConfig);
      const request = pool.request();

      const query = `SELECT * FROM task.users`;
      const result = await request.query(query);
      return result.recordset;
    } catch (error) {
      throw new Error(`Error retrieving users: ${error.message}`);
    }
  }
  // Create User
  static async createUser(user) {
    try {
      const pool = await sql.connect(dbConfig);
      const request = pool.request();

      // validate email
      const isValidEmail = validateEmail(user.email);
      if (!isValidEmail) {
        throw new Error("Invalid email address");
      }

      // Check if username or email already exists
      const checkQuery = `SELECT COUNT(*) AS count FROM task.users WHERE username = @username OR email = @email`;
      request.input("username", sql.VarChar, user.username);
      request.input("email", sql.VarChar, user.email);

      const checkResult = await request.query(checkQuery);
      const duplicateCount = checkResult.recordset[0].count;

      if (duplicateCount > 0) {
        throw new Error("Username or email already exists");
      }

      // Insert user
      const insertQuery = `INSERT INTO task.users (name, username, password, email, created_by, created_at, role_id) 
      VALUES (@name, @username, @password, @email, @created_by, @created_at, @role_id)`;

      request.input("name", sql.VarChar, user.name);
      request.input("username", sql.VarChar, user.username);
      request.input("password", sql.VarChar, user.password);
      request.input("email", sql.VarChar, user.email);
      request.input("created_by", sql.Int, user.created_by);
      request.input("created_at", sql.DateTime, user.created_at);
      request.input("role_id", sql.Int, user.role_id);

      const result = await request.query(insertQuery);
      return result.recordset;
    } catch (error) {
      throw new Error(`Error creating user: ${error.message}`);
    }
  }
}
// Export module
module.exports = User;
