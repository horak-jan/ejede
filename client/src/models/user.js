const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
    },

    username: {
      type: String,
      required: true,
    },

    password: {
      type: String,
      required: true,
      max: 100,
    },

    firstName: {
      type: String,
      required: true,
      max: 100,
    },

    lastName: {
      type: String,
      required: true,
      max: 100,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Users", UserSchema);
