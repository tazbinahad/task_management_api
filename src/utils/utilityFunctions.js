/*
 * Title: Task Management Application
 * Description: All utility functions are here
 * Author: Tazbin Ahad
 * Date: 15.07.2023
 */

// Dependencies

// Module scaffolding
const utility = {};

// Parse JSON string to object
utility.parseJSON = (jsonString) => {
  let output;
  try {
    output = JSON.parse(jsonString);
  } catch {
    output = {};
  }
  return output;
};

// Validate email
utility.validateEmail = (email) => {
  // Regular expression pattern for email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // Test the email against the pattern
  return emailPattern.test(email);
};

// Export module
module.exports = utility;
