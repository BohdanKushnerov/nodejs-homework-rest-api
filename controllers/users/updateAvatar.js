const { ctrlWrapper } = require("../../helpers");
const fs = require("fs/promises");
const path = require("path");

const avatarsDir = path.join(__dirname, "..", "..", "public", "avatars");
console.log(avatarsDir);

const updateAvatar = async (req, res) => {
  const { path: tempUpload, originalname } = req.file;
  const resultUpload = path.join(avatarsDir, originalname);

  await fs.rename(tempUpload, resultUpload);
};

module.exports = { updateAvatar: ctrlWrapper(updateAvatar) };
