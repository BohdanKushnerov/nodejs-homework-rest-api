const {
  getAll,
  getById,
  addContact,
  updateContactById,
  deleteContactById,
  updateStatusContact,
} = require("./contacts/contacts");

const { register, login } = require("./auth/auth");

module.exports = {
  getAll,
  getById,
  addContact,
  updateContactById,
  deleteContactById,
  updateStatusContact,
  register,
  login,
};
