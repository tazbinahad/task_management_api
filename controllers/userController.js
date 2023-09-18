const { getAllUsers, createUserModel } = require("../models/userModel");

// Implement logic to get all users
async function getUsers(req, res) {
  try {
    const userList = await getAllUsers();
    res.send(userList);
  } catch (error) {
    res.status(500).send(error?.message || "Internal Server Error");
  }
}

async function createUser(req, res) {
  // Implement logic to create a user
  const user = req.body;
  // Validate user data
  if (!user) {
    return res.status(400).json({ error: "User data is required" });
  }
  try {
    const newUser = await createUserModel(user);
    res.status(200).json({ message: "User create succesfull" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Internal Server Error", message: error.message });
  }
}

module.exports = { getUsers, createUser };
