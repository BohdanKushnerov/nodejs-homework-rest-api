const bcrypt = require("bcrypt");

const { HttpError, ctrlWrapper, sendEmail } = require("../../helpers");
const { User } = require("../../models");

const gravatar = require("gravatar");
const { v4: uuidv4 } = require("uuid");

require("dotenv").config();

const { BASE_URL } = process.env;

const register = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    throw HttpError(409, "Email in use");
  }
  const hashPassword = await bcrypt.hash(password, 10);

  const verificationToken = uuidv4();

  const newUser = await User.create({
    ...req.body,
    password: hashPassword,
    avatarURL: gravatar.url(email),
    verificationToken,
  });

  const verifyEmail = {
    to: email,
    subject: "Verify email",
    html: `<a
        target="_blanc"
        href="${BASE_URL}/users/verify/${verificationToken}"
      >
        Click verify email
      </a>`,
  };

  await sendEmail(verifyEmail);

  res.status(201).json({
    email: newUser.email,
    subscription: newUser.subscription,
  });
};

module.exports = { register: ctrlWrapper(register) };
