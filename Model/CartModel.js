const mongoose = require("mongoose");
const cartSchema = mongoose.Schema({
  userId: String,
  title: String,
  price: Number,
  quantity: Number,
});

const cartItemModel = mongoose.model("cartitem", cartSchema);
module.exports = { cartItemModel };
