const express = require("express");
const sellerController = require("../controllers/sellerController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.use(authMiddleware.authenticate);

router.post("/create-catalog", sellerController.createCatalog);
router.get("/orders", sellerController.getOrders);

module.exports = router;
