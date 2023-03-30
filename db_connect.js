const mongoose = require("mongoose");

const URL = process.env.MONGODB_URL;
const db_connect = async () => {
  try {
    await mongoose.connect(URL);
  } catch (error) {
    console.log(error);
  }
};

module.exports=db_connect;