const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  titre: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    max: 1000,
  },
  image: {
    type: String,
    // required: true,
  },
  prix: {
    type: Number,
    required: true,
    min: 0,
  },
  quantite: {
    type: Number,
    required: true,
    min: 0,
  },
});

module.exports = mongoose.model("Product", productSchema);
