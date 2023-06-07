const mongoose = require("mongoose");

const TipSchema = new mongoose.Schema(
  {
    home: {
      type: String,
      required: true
    },
    away: {
      type: String,
      required: true,
    },
    odd: {
      type: String,
      required: true,
    },
    pick: {
      type: String,
      required: true
    },
    status: {
      type: String,
      required: true,
    },
    won: {
      type: String,
      default: "pending"
    },
    premium: {
      type: Boolean,
      required: false,
    }
  },
  {timestamps: true}
);

module.exports = mongoose.model("Tip", TipSchema);