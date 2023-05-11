const express = require("express");
const cors = require("cors");
const fs = require("fs");
const app = express();

app.use(express.json());

app.use(cors());

const product = require("./routes/ProductRoutes");
const email = require("./routes/EmailRoutes");

app.use("/api/product/V1", product);
app.use("/api/email/V1", email);

module.exports = app;
