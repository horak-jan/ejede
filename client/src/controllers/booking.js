const Booking = require("../models/booking");
const User = require("../models/user");

// GET api/booking
//  Returns all bookings

exports.index = async function (req, res) {
  try {
    const booking = await Booking.find();

    res.status(200).json({ booking: booking });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//  POST api/booking
//  creating new booking

exports.store = async (req, res) => {
  try {
    //az budes mit doresene usery

    // const userId = req.user._id;
    // const newBooking = new Booking({ ...req.body, userId });

    const newBooking = new Booking({ ...req.body });

    const booking = await newBooking.save();

    res
      .status(200)
      .json({ booking: booking, message: "Objednávka byla vytvořena." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//  GET api/house/:id
//  get a single house

exports.show = async function (req, res) {
  try {
    const id = req.params.id;

    const booking = await Booking.findById(id);

    if (!house)
      return res
        .status(401)
        .json({ message: `Objednávka číslo ${id} neexistuje. ` });

    res.status(200).json({ booking });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//  PUT api/house/{id}
//  Update house info

exports.update = async function (req, res) {
  try {
    const update = req.body;
    const id = req.params.id;

    const booking = await Booking.findOneAndUpdate(
      { _id: id, userId },
      { $set: update },
      { new: true }
    );

    if (!booking)
      return res
        .status(401)
        .json({ message: `Objednávka číslo ${id} neexistuje.` });

    if (!req.file)
      return res
        .status(200)
        .json({ booking, message: `Objednávka číslo ${id} neexistuje.` });

    // upload to cloud
    const result = await uploader(req);
    const booking_ = await Booking.findOneAndUpdate(
      { _id: id, userId },
      { $set: { image: result.url } },
      { new: true }
    );

    res.status(200).json({ booking, message: "Objednávka byla upravena." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//  DESTROY api/house/{id}
//  Delete house

exports.destroy = async function (req, res) {
  try {
    const id = req.params.id;

    await Booking.findOneAndDelete({ _id: id });

    res.status(200).json({ message: "Objednávka byla smazaná" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
