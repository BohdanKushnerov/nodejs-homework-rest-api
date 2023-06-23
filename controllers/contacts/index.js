const { getAll } = require("./getAll");
const { getById } = require("./getById");
const { addContact } = require("./addContact");
const { deleteContactById } = require("./deleteContactById");
const { updateContactById } = require("./updateContactById");
const { updateStatusContact } = require("./updateStatusContact");

module.exports = {
  getAll,
  getById,
  addContact,
  deleteContactById,
  updateContactById,
  updateStatusContact,
};
