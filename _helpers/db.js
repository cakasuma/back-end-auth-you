import config from "config.json";
import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_URI || config.connectionString);
mongoose.Promise = global.Promise;

module.exports = {
  User: import("../users/user.model")
};
