const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    itemName: {
      type: String,
      required: true,
      unique: true,
    },
    price: {
      type: Number,
      required: true,
    },
    tax: {
      type: Number,
      required: true,
      default: 12,
    },
    quantity: {
      type: Number,
      default: 0,
    },
    size: {
      type: Number,
      default: 0,
    },
    categories: [
      {
        type: String,
      },
    ],
    image: {
      type: String,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const productModel = mongoose.model("Product", productSchema);

module.exports = productModel;
