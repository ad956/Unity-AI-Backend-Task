const Catalog = require("../models/catalog");
const Order = require("../models/order");
const User = require("../models/user");

async function getListOfSellers(req, res) {
  try {
    const sellers = await User.find({ type: "seller" }).select("-password");
    res.json({ sellers });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

async function getSellerCatalog(req, res) {
  const { seller_id } = req.params;

  try {
    // finding the catalog
    const catalog = await Catalog.findOne({ sellerId: seller_id });

    if (catalog) {
      res.json({ catalog });
    } else {
      res.status(404).json({ message: "Catalog not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

async function createOrder(req, res) {
  const { seller_id } = req.params;
  const { products } = req.body;
  const buyerId = req.user.username;

  try {
    // finding the catalog
    const catalog = await Catalog.findOne({ sellerId: seller_id });

    if (!catalog) {
      return res.status(404).json({ message: "Catalog not found" });
    }

    // creating a new order using the Order model
    const order = new Order({ buyerId, sellerId: seller_id });

    // finding products in the catalog and adding them to the orders
    for (const item of products) {
      const product = catalog.products.find(
        (p) => p.name === item.name && p.price === item.price
      );

      if (product) {
        order.products.push(product);
      }
    }

    await order.save();

    res.json({ message: "Order created successfully", order });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

module.exports = { getListOfSellers, getSellerCatalog, createOrder };
