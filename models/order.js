const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
});

const orderSchema = new mongoose.Schema({
  buyerId: { type: String, required: true },
  sellerId: { type: String, required: true },
  products: [productSchema],
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
