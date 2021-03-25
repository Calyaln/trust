const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "user", required: true },
    physicainId: {
      type: Schema.Types.ObjectId,
      ref: "physiciain",
      required: true,
    },
  },
  { timestamps: true }
);

const CommentModel = mongoose.model("comment", commentSchema);

module.exports = CommentModel;
