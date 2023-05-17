const express = require("express");
const cors = require("cors");
const fs = require("fs");
const app = express();

app.use(express.json());
const corsOptions = {
    origin: '*',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200,
}
app.use(cors(corsOptions));

const product = require("./routes/ProductRoutes");
const email = require("./routes/EmailRoutes");

app.use("/api/product/V1", product);
app.use("/api/email/V1", email);

module.exports = app;
