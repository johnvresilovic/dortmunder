const mongoose = require("mongoose");

const dortmunderSchema = new mongoose.Schema({
  title: { type: String, required: true },
  year: { type: Number, required: true },
  synopsis: { type: String, required: true },
})

const dortmunder = mongoose.model("Dortmunder", dortmunderSchema)

module.exports = dortmunder