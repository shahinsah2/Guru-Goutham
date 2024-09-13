const mongoose = require("mongoose");

const leadSchema = new mongoose.Schema(
  {
    lead_code: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    lead_type: {
      type: String,
      required: true,
      trim: true,
    },
    customer_code: {
      type: String,
      required: true,
      trim: true,
    },
    generated_by: {
      type: String,
      required: true,
      trim: true,
    },
    lead_mode: {
      type: String,
      required: true,
      trim: true,
    },
    lead_date: {
      type: Date,
      required: true,
    },
    lead_title: {
      type: String,
      required: true,
      trim: true,
    },
    lead_details: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      enum: ["open", "in progress", "closed", "cancelled"],
      default: "open",
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

// Virtual association with Customer
leadSchema.virtual("customer", {
  ref: "Customer", // The name of the model to reference
  localField: "customer_code", // The field in Lead schema
  foreignField: "customer_code", // The field in Customer schema
  justOne: true,
});

module.exports = mongoose.model("Lead", leadSchema);
