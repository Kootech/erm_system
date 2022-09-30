const expressAsync = require("express-async-handler");

const Product = require("../models/product");
const User = require("../models/user");

//method to get all product in db
const getProducts = expressAsync(async (req, res) => {
  const products = await Product.find();
  res.status(200).json(products);
});

//method to create a new product
const createProduct = expressAsync(async (req, res) => {
  const { itemName, price, quantity, categories, user } = req.body;

  if (!itemName || !price || !quantity || !categories) {
    res.status(400).json({ messsage: "all fields required" });
  }
  const product = await Product.create({
    itemName,
    price,
    quantity,
    categories,
  });
  res.status(201).json(product);
  res.send(`successful`);
});

//method to update product in db
const updateProduct = expressAsync(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    res.status(400);
    throw new Error("Product Unavailable");
  }

  const updatedProduct = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json(updateProduct);
});

//method to delete product in db
const deleteProduct = expressAsync(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    res.status(400);
    throw new Error("Product Unavailable");
  }

  await product.remove();
  res.status(200).json({ id: req.params.id });
});

module.exports = { getProducts, createProduct, updateProduct, deleteProduct };
