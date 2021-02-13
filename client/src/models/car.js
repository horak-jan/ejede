const mongoose = require("mongoose");

const CarSchema = new mongoose.Schema(
  {
    make: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    seats: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    doors: {
      type: String,
      required: true,
    },
    range: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: [
      {
        type: Number,
      },
    ],
    image: [
      {
        type: String,
      },
    ],
    booked: [
      {
        type: Date,
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Car", CarSchema);
