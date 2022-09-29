const mongoose = require("mongoose");

const soldSchema = mongoose.Schema(
  {
    items: [
      {
        name: String,
        quantity: Number,
      },
    ],
    total: {
      type: Number,
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
