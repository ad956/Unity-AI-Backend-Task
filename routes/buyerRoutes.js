const express = require("express");
const buyerController = require("../controllers/buyerController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.use(authMiddleware.authenticate);

router.get("/list-of-sellers", buyerController.getListOfSellers);
router.get("/seller-catalog/:seller_id", buyerController.getSellerCatalog);
router.post("/create-order/:seller_id", buyerController.createOrder);

module.exports = router;
