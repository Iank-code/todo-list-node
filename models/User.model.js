const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    todos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Todo",
        required: false,
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
