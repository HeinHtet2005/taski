const generateToken = require("../helpers/generateToken");
const User = require("../models/User");

const UserController = {
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.login(email, password);
      const token = generateToken(user._id);

      res.cookie("jwt", token, {
        httpOnly: true,
        maxAge: 3 * 24 * 60 * 60 * 1000,
      });
      return res.status(200).json({
        user,
        token,
        msg: "user login successfully",
      });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },
  register: async (req, res) => {
    try {
      const { name, email, password } = req.body;
      const user = await User.register(name, email, password);
      const token = generateToken(user._id);

      res.cookie("jwt", token, {
        httpOnly: true,
        maxAge: 3 * 24 * 60 * 60 * 1000,
      });
      return res.status(201).json({
        user,
        token,
        msg: "user created successfully",
      });
    } catch (error) {
      console.log(error.message);
      return res.status(400).json({ error: error.message });
    }
  },
};
module.exports = UserController;
