const Car = require("../models/car");

// GET api/car
//  Returns all cars

exports.index = async function (req, res) {
  try {
    const car = await Car.find();

    res.status(200).json({ car: car });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//  PUT api/car/{id}
//  Update car

exports.update = async function (req, res) {
  try {
    const update = req.body;
    const id = req.params.id;

    const car = await Car.findOneAndUpdate(
      { _id: id },
      { $set: update },
      { new: true }
    );

    if (!car)
      return res.status(401).json({ message: "Vozidlo s tímto ID neexistuje" });

    if (!req.file)
      return res.status(200).json({ car, message: "Vozidlo bylo upraveno" });

    res.status(200).json({
      car: car,
      message: "Vozidlo bylo upraveno",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//  GET api/car/:id
//  get a single car

exports.show = async function (req, res) {
  try {
    const id = req.params.id;

    const car = await Car.findById(id);

    if (!car)
      return res.status(401).json({ message: "Vozidlo s tímto ID neexistuje" });

    res.status(200).json({ car });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//  POST api/car
//  creating new car

exports.store = async (req, res) => {
  try {
    const newCar = new Car({ ...req.body });

    const car = await newCar.save();

    res.status(200).json({ car: car, message: "Vozidlo přidáno" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//  DESTROY api/car/{id}
//  Delete car

exports.destroy = async function (req, res) {
  try {
    const id = req.params.id;

    await Car.findOneAndDelete({ _id: id });

    res.status(200).json({ message: "Vozidlo smazáno." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
