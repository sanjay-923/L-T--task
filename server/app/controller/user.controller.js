const userService = require("../service/user.service");

// Create User
const signup = async (req, res) => {
  let user = await userService.signup(req.body);

  if (!user) {
    return res.status(400).json({ message: "Something went wrong" });
  }

  return res.status(201).json({
    message: "User created successfully",
    data: user,
  });
};

// Login User
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await userService.loginUser({ email, password });

  if (!user) {
    return res.status(400).json({ message: "Something went wrong" });
  }

  return res.json({
    message: "Successfull Login",
    data: { id: user.id, email: user.email, token: user.token },
  });
};

module.exports = {
  signup,
  loginUser,
};
