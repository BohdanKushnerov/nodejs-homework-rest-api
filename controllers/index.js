// const {
//   getAll,
//   getById,
//   addContact,
//   updateContactById,
//   deleteContactById,
//   updateStatusContact,
// } = require("./contacts/contacts");

// const { getAll } = require("./contacts/getAll");
// const { getById } = require("./contacts/getById");
// const { addContact } = require("./contacts/addContact");
// const { deleteContactById } = require("./contacts/deleteContactById");
// const { updateContactById } = require("./contacts/updateContactById");
// const { updateStatusContact } = require("./contacts/updateStatusContact");

const {
  getAll,
  getById,
  addContact,
  updateContactById,
  deleteContactById,
  updateStatusContact,
} = require("./contacts");

const {
  register,
  login,
  getCurrent,
  logout,
  subscriptionUpdate,
} = require("./users");

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
