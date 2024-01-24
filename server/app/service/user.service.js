const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../model/user.model");

const signup = async (param) => {
  try {
    let { email, password, name } = param;

    let salt = await bcrypt.genSalt(12);
    let hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    if (user) {
      return user;
    }

    return false;
  } catch (err) {
    return err;
  }
};

const loginUser = async (param) => {
  try {
    let { email, password } = param;

    const user = await User.findOne({
      email,
    });

    if (!user) {
      return false;
    }

    const checkPassword = await bcrypt.compare(password, user.password);

    if (!checkPassword) {
      return false;
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_TOKEN_KEY, {
      expiresIn: process.env.JWT_EXPIRY_TIME,
    });

    return {
      token,
      email: user.email,
      id: user.id,
      name: user.name,
    };
  } catch (err) {
    return err;
  }
};

module.exports = {
  signup,
  loginUser,
};
