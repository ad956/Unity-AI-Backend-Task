const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
});

const catalogSchema = new mongoose.Schema({
  sellerId: { type: String, required: true },
  products: [productSchema],
});

const Catalog = mongoose.model("Catalog", catalogSchema);

module.exports = Catalog;
