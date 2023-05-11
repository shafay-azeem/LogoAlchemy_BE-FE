const express = require("express");
const { getCheckout, getCheckoutSuccess } = require("../controllers/Purchase");

const router = express.Router();

//products
router.route("/checkout").post(getCheckout);
router.route("/success").post(getCheckoutSuccess);
router.route("/cancel").post(getCheckout);

module.exports = router;
