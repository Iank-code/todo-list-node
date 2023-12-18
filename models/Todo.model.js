const mongoose = require("mongoose");
const User = require("./User.model");

const todoSchema = new mongoose.Schema(
  {
    todo: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: User,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Todo", todoSchema);
