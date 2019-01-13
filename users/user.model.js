import mongoose from "mongoose";

const Schema = mongoose.Schema;

const schema = new Schema({
  username: { type: string, unique: true, required: true },
  hash: { type: string, unique: true, required: true },
  first_name: { type: string, unique: true, required: true },
  last_name: { type: string, unique: true, required: true },
  createdDate: { type: Date, default: Date.now }
});

schema.set("toJson", { virtuals: true });

module.exports = mongoose.model("User", schema);
