const Product = require("../models/Product");

exports.getAllProducts = async (req, res) => {
  try {
    const product = await Product.find();
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ message: "cannot get products" });
  }
};
exports.getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ message: "cannot get product" });
  }
};

exports.createProduct = async (req, res) => {
  const { titre, description, prix, quantite } = req.body;
  try {
    const product = await Product.create({
      titre,
      description,
      prix,
      quantite,
    });
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ message: "cannot create product" });
  }
};
exports.updateProduct = async (req, res) => {
  const { id } = req.params;
  const { titre, description, prix, quantite } = req.body;
  try {
    const product = await Product.findByIdAndUpdate(
      id,
      {
        titre,
        description,
        prix,
        quantite,
      },
      { new: true }
    );
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ message: "cannot update product" });
  }
};

exports.deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findByIdAndDelete(id);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ message: "cannot delete product" });
  }
};
