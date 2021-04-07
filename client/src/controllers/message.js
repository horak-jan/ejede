const Message = require("../models/message");

// GET api/message
//  Returns all messages

exports.index = async function (req, res) {
  try {
    const message = await Message.find();

    res.status(200).json({ message: message });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//  GET api/message/:id
//  get a single message

exports.show = async function (req, res) {
  try {
    const id = req.params.id;

    const message = await Message.findById(id);

    if (!message)
      return res.status(401).json({ message: "Otázka s tí­mto ID neexistuje" });

    res.status(200).json({ message });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//  POST api/message
//  creating new message

exports.store = async (req, res) => {
  try {
    const newMessage = new Message({ ...req.body });

    const message = await newMessage.save();

    res
      .status(200)
      .json({
        message: message,
        message: `Děkujeme Vám, budeme Vás kontaktovat co nejdříve na telefon ${message.mobil}`,
      });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
