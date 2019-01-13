import config from "../config.json";
import mongoose from "mongoose";

mongoose.connect((process.env.MONGODB_URI || config.connectionString), { useNewUrlParser: true });
mongoose.set('useCreateIndex', true);
mongoose.Promise = global.Promise;

module.exports = {
  User: require("../users/user.model")
};
