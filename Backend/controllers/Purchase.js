const stripe = require("stripe")(
  "sk_test_51MbQxgIpk2q02uGFo9Dvoo0iN9GILgrxYwYuA0P4dJGiHuTQY8qgXKoLCRnM5xXWVAM8Yl33RJp8ARbfreC5SY3m00xn9XYUrg"
);

const mongoose = require("mongoose");
const asyncHandler = require("express-async-handler");
const querystring = require("querystring");

exports.getCheckout = async (req, res, next) => {
  try {
    const { amount, product, quantity } = req.body;
    const queryParams = querystring.stringify({ product, amount });

    const lineItems = {
      price_data: {
        currency: "usd",
        product_data: {
          name: product,
        },
        unit_amount: amount * 100,
      },
      quantity: quantity,
    };

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [lineItems],
      mode: "payment",
      // success_url: `${req.protocol}://localhost:3000/`,
      success_url: `${req.protocol}://thelogoalchemy.com/api/email/V1/sendEmailFromServer?${queryParams}`,
      cancel_url: `${req.protocol}://${req.get("host")}/cancel`,
    });
    res.status(201).json({
      success: true,
      sessionId: session.id,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "An error occurred while creating the Checkout session.",
    });
  }
};

exports.getCheckoutSuccess = (req, res, next) => {
  return res.status(201).json({
    success: true,
  });
};
