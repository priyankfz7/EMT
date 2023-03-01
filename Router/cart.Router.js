const express = require("express");
const { cartItemModel } = require("../Model/CartModel");

let cartRouter = express();

cartRouter.post("/", async (req, res) => {
  let cartItem = new cartItemModel(req.body);
  await cartItem.save();
  res.send("item added");
});

cartRouter.get("/", async (req, res) => {
  const userId = req.body.userId;
  try {
    const items = await cartItemModel.find({ userId });
    res.json(items);
  } catch (err) {
    console.log(err);
    res.send({ msg: "Something went Wrong" });
  }
});

module.exports = { cartRouter };
