const mongoose = require("mongoose");

const soldSchema = mongoose.Schema(
  {
    items: [
      {
        name: { type: String, required: true },
        qty: { type: Number, required: true },
        price: { type: Number, required: true },
        // product: {
        //   type: mongoose.Schema.Types.ObjectId,
        //   ref: "Product",
        //   required: true,
        // },
      },
    ],
    taxPrice: { type: Number, default: 0 },
    totalPrice: { type: Number, required: true },
    // user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  },
  {
    timestamps: true,
  }
);

const soldModel = mongoose.model("Sold", soldSchema);

module.exports = soldModel;
