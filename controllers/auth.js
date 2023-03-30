const User = require('../models/user');
const { hash } = require("bcryptjs");
const register = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    // check if user already exists
    const user = await User.findOne({ email: email });
    if (user) {
     return res.status(500).json({
       message: "User already exists! Try logging in."
     });
    }
      // if user doesn't exist, create a new user
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
