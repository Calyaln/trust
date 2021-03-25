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
    socials: { type: String, required: true },
    type: { type: String, required: true },
    tags: { type: String, required: true },
    badges: { type: String, required: true },
    comments: { type: String, required: true },
    userId: { type: Schema.Types.ObjectId, ref: "user", required: true },
  },
  { timestamps: true }
);

const PhysicainModel = mongoose.model("physicain", physicainSchema);
module.exports = PhysicainModel;
