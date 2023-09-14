const { getAllUsers } = require("../models/userModel");

async function getUsers(req, res) {
  try {
    const userList = await getAllUsers();
    res.send(userList);
  } catch (error) {
    res.status(500).send(error?.message || "Internal Server Error");
  }
}

function createUser(req, res) {
  // Implement logic to create a user
}

module.exports = { getUsers, createUser };
