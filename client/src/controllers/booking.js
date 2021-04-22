const Booking = require("../models/booking");

// GET api/booking

exports.index = async function (req, res) {
  try {
    const booking = await Booking.find();

    res.status(200).json({ booking: booking });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//  POST api/booking

exports.store = async (req, res) => {
  try {
    const newBooking = new Booking({ ...req.body });

    const booking = await newBooking.save();

    res
      .status(200)
      .json({ booking: booking, message: "Objednávka byla vytvořena." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//  GET api/booking/:email
//  get a single booking by email provided by auth

exports.show = async function (req, res) {
  try {
    const email = req.params.email;

    const booking = await Booking.find({ email: email });

    if (!booking)
      return res
        .status(401)
        .json({ message: `Nemáte žádné vytvořené objednávky. ` });

    res.status(200).json({ booking });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//  DESTROY api/booking/{id}

exports.destroy = async function (req, res) {
  try {
    const id = req.params.id;

    await Booking.findOneAndDelete({ _id: id });

    res.status(200).json({ message: "Objednávka byla smazána" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
