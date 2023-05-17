const stripe = require("stripe")(
  "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"
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
