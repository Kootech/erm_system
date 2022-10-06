const asyncHandler = require("express-async-handler");

const Sold = require("../models/sold");
const User = require("../models/user");

//access transacted Items
const getSoldProducts = asyncHandler(async (req, res) => {
  const sold = await Sold.find();
  res.status(200).json(sold);
});

// add transcacted items to DB
const addToSold = asyncHandler(async (req, res) => {
  const { items, taxPrice, totalPrice } = req.body;

  console.log(items[0].name);
  console.log(taxPrice);
  console.log(totalPrice);

  if (!items || !taxPrice || !totalPrice) {
    return res.status(400).json({ message: "transaction was not completed" });
  }

  const response = await Sold.create({
    items: items.map((item) => ({
      name: item.name,
      qty: item.qty,
      price: item.price,
    })),
    totalPrice,
    taxPrice,
  });

  res.status(201).json({ response });
});

module.exports = { getSoldProducts, addToSold };
