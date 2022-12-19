const mongoose = require("mongoose");

const dortmunderSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  synopsis: { type: String, required: true },
  price: { type: String, required: true },
  quantity: { type: Number, required: true },
});

const dortmunder = mongoose.model("Dortmunder", dortmunderSchema);

module.exports = dortmunder;
