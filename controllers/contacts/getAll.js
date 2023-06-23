const { Contact } = require("../../models");
const { ctrlWrapper } = require("../../helpers");

const getAll = async (req, res) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 10, favorite = "" } = req.query;
  const skip = (page - 1) * limit;

  const filter = favorite === "" ? { owner } : { owner, favorite };
  const projection = "-createdAt -updatedAt";
  const options = {
    skip,
    limit,
  };

  const result = await Contact.find(filter, projection, options).populate(
    "owner",
    "email subscription"
  );
  res.json(result);
};

module.exports = { getAll: ctrlWrapper(getAll) };
