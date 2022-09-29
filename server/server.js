const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const _ = require("dotenv").config();

const connectDB = require("./models/configDB");
const productRouter = require("./routers/product");

const PORT = process.env.PORT || 5000;
const app = express();
connectDB();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send(`home route`);
});

app.use("products/", productRouter);

app.listen(PORT, () => console.log(`server listening on port: ${PORT}`));
