const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const expressAsync = require("express-async-handler");

//method to get all product in db
const getProducts = expressAsync(async (req, res) => {
  res.send(`getProducts working`);
});

//method to create a new product
const createProduct = expressAsync(async (req, res) => {
  res.send(`createProduct working`);
});

//method to update product in db
const updateProduct = expressAsync(async (req, res) => {
  res.send(`updateProducts working id: ${req.params.id}`);
});

//method to delete product in db
const deleteProduct = expressAsync(async (req, res) => {
  res.send(`deleteProduct working id ${req.params.id}`);
});

module.exports = { getProducts, createProduct, updateProduct, deleteProduct };
