const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const physicainSchema = new Schema(
  {
    name: { type: String, required: true },
    location: {
      type: {
        type: String,
        enum: ["Point"],
      },
      coordinates: {
        type: [Number],
      },
    },
    phone: { type: String, required: true },
    price: { type: String, required: true },
    schedule: { type: String, required: true },
    socials: { type: String, required: true }, // checked
    type: { type: String, required: true }, // checked
    tags: { type: String, required: true }, // checked
    badges: { type: String, required: true }, // checked
    comments: { type: String, required: true },
  },
  { timestamps: true }
);

const PhysicainModel = mongoose.model("physicain", physicainSchema);
module.exports = PhysicainModel;
