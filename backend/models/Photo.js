const mongoose = require("mongoose");

const photoSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    photoUrl: { type: String, required: true },
    userID: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Photo", photoSchema);
