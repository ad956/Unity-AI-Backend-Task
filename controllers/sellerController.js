const Catalog = require("../models/catalog");
const Product = require("../models/product");
const Order = require("../models/order");
const User = require("../models/user");

async function createCatalog(req, res) {
  const { products } = req.body;
  const sellerId = req.user.username;

  try {
    // checking if a catalog already exists for the seller
    const existingCatalog = await Catalog.findOne({ sellerId });

    if (existingCatalog) {
      return res
        .status(400)
        .json({ message: "Catalog already exists for this seller" });
    }

    const catalog = new Catalog({ sellerId });

    // adding products to the catalog
    for (const item of products) {
      const product = new Product({ name: item.name, price: item.price });
      await product.save();
      catalog.products.push(product);
    }

    await catalog.save();

    res.json({ message: "Catalog created successfully", catalog });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

async function getOrders(req, res) {
  const sellerId = req.user.username;

  try {
    // finding orders for the sellerId
    const sellerOrders = await Order.find({ sellerId });
    res.json({ orders: sellerOrders });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

module.exports = { createCatalog, getOrders };
