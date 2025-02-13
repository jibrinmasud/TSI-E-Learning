const User = require("../models/User");
exports.signup = async (req, res) => {
  const user = await User.create(req.body);

  res.json({ user });
};
