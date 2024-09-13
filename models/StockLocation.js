const mongoose = require("mongoose");

const stockLocationSchema = new mongoose.Schema(
  {
    location_code: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    location_name: {
      type: String,
      required: true,
      trim: true,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("StockLocation", stockLocationSchema);
