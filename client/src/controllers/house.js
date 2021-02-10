const User = require("../models/user");
const House = require("../models/house");

const limit_ = 5;

// GET api/house
//  Returns all houses with pagination

exports.index = async function (req, res) {
  let aggregate_options = [];

  //pagination
  let page = parseInt(req.query.page) || 1;
  let limit = parseInt(req.query.limit) || limit_;

  //set the options for pagination
  const options = {
    page,
    limit,
    collation: { locale: "cz" },
    customLabels: {
      totalDocs: "totalResults",
      docs: "ev",
    },
  };

  //sorting
  let sortOrder =
    req.query.sort_order && req.query.sort_order === "desc" ? -1 : 1;
  aggregate_options.push({ $sort: { "data.start_date": sortOrder } });

  //  aggregation
  const myAggregate = House.aggregate(aggregate_options);
  const result = await House.aggregatePaginate(myAggregate, options);
  res.status(200).json(result);
};

//  POST api/house
//  creating new house

exports.store = async (req, res) => {
  try {
    const userId = req.user._id;
    const newHouse = new House({ ...req.body, userId });

    const house = await newHouse.save();

    //if there is no image, return success message
    if (!req.file)
      return res.status(200).json({ house, message: "House added" });

    //upload to mongo
    const result = await uploader(req);
    const house_ = await House.findByIdAndUpdate(
      house._id,
      { $set: { image: result.url } },
      { new: true }
    );

    res.status(200).json({ house: house_, message: "House added" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//  GET api/house/:id
//  get a single house

exports.show = async function (req, res) {
  try {
    const id = req.params.id;

    const house = await House.findById(id);

    if (!house)
      return res
        .status(401)
        .json({ message: "House with this id does not exist" });

    res.status(200).json({ house });
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
    const userId = req.user._id;

    const house = await House.findOneAndUpdate(
      { _id: id, userId },
      { $set: update },
      { new: true }
    );

    if (!house)
      return res
        .status(401)
        .json({ message: "House with this id does not exist" });

    if (!req.file)
      return res.status(200).json({ house, message: "House has been updated" });

    // upload to cloud
    const result = await uploader(req);
    const house_ = await House.findOneAndUpdate(
      { _id: id, userId },
      { $set: { image: result.url } },
      { new: true }
    );

    res.status(200).json({ house: house_, message: "House has been updated" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//  DESTROY api/house/{id}
//  Delete house

exports.destroy = async function (req, res) {
  try {
    const id = req.params.id;
    const userId = req.user._id;

    await House.findOneAndDelete({ _id: id, userId });

    res.status(200).json({ message: "House has been deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
