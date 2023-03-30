const User = require("../models/user");
const { hash } = require("bcryptjs");
const register = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    // check if user already exists
    const user = await user.findOne({ email: email });
    if (user) {
      throw new Error({
        message: "User already exists! Try logging in. 😄",
        status: 500,
      });
    }
      // if user doesn't exit, create a new user
      // hashing the password
      const passwordHashed = await hash(password, 10);
      const newUser = new User({
        email: email,
        password: passwordHashed,
      });
      // save user to db
      await newUser.save();
      return res.status(200).json({
        message: "User created successfully!",
      });
  } catch (error) {
    next(error);
  }
};

const login = (req, res) => {};

const logout = (req, res) => {};

module.exports = { register, login, logout };
