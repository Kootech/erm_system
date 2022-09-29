const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    itemName: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      default: 0,
    },
    size: {
      type: Number,
      default: 0,
    },
    quantity: [
      {
        type: String,
      },
    ],
    quantity: {
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
