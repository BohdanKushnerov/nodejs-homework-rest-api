const { HttpError, ctrlWrapper } = require("../../helpers");
const { Contact } = require("../../models");

const deleteContactById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndRemove(contactId);
  if (!result) {
    throw HttpError(404, "Not found");
  }

  res.status(200).json({ message: "Contact deleted" });
};

module.exports = { deleteContactById: ctrlWrapper(deleteContactById) };
