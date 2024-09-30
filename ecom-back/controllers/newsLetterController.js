const Newsletter = require("../models/NewsLetter");

exports.subscribe = async (req, res) => {
  const { email } = req.body;
  try {
    const newsletter = await Newsletter.create({ email });
    res.status(201).json(newsletter);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.unsubscribe = async (req, res) => {
  const { email } = req.body;
  try {
    const newsletter = await Newsletter.findOneAndDelete({ email });
    res.status(200).json(newsletter);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllSubscribers = async (req, res) => {
  try {
    const subscribers = await Newsletter.find();
    res.status(200).json(subscribers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
