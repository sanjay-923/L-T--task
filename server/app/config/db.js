const mongoose = require("mongoose");

exports.connect = async () => {
  const { MONGODB_URL } = process.env;

  try {
    const connection = await mongoose.connect(MONGODB_URL);

    if (connection) {
      console.log("Mongo DB connected");
    }
  } catch (err) {
    console.log(err);
  }
};
