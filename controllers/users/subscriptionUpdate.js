const { HttpError, ctrlWrapper } = require("../../helpers");
const { User } = require("../../models");

const subscriptionUpdate = async (req, res) => {
  const { _id } = req.user;

  const result = await User.findByIdAndUpdate(_id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!result) {
    throw HttpError(404, "Not found");
  }

  res.status(200).json(result);
};

module.exports = { subscriptionUpdate: ctrlWrapper(subscriptionUpdate) };
