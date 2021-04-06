const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    mobil: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    notes: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Message", MessageSchema);
