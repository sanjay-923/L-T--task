const home = (req, res) => {
  res.json({ message: "Hello World!" });
};

module.exports = {
  home,
};
