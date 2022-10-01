const mongoose = require("mongoose");

const soldSchema = mongoose.Schema(
  {
    items: {
      type: Array,
    },

    total: {
      type: Number,
    },
    // user: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "User",
    // },
  },
  {
    timestamps: true,
  }
);

const soldModel = mongoose.model("Sold", soldSchema);

module.exports = soldModel;
