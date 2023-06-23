const {
  getAll,
  getById,
  addContact,
  updateContactById,
  deleteContactById,
  updateStatusContact,
} = require("./contacts/contacts");

const {
  register,
  login,
  getCurrent,
  logout,
  subscriptionUpdate,
} = require("./auth/auth");

module.exports = {
  getAll,
  getById,
  addContact,
  updateContactById,
  deleteContactById,
  updateStatusContact,
  register,
  login,
  getCurrent,
  logout,
  subscriptionUpdate,
};
