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
  const { items, total, user } = req.body;

  if (!items || !total || !user) {
    return res.status(400).json({ message: "transaction was not completed" });
  }
  //slice square brackets
  const arr = items.slice(1, -1).split(",");
  console.log();
  console.log(Array.isArray(items.split(",")));
  console.log(items.split(","));
  //   console.log(user);
  console.log(items.slice(1, -1));

  const soldItems = await Sold.create(
    // { $push: { items: { $each: arr } }, total }
    {
      items: arr,
      total,
    }

    // { total }
    // { user }
  );

  res.status(201).json(soldItems);
});

module.exports = { getSoldProducts, addToSold };
