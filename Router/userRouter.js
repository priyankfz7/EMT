const express = require("express");
let userRouter = express();
const jwt = require("jsonwebtoken");
const { UserModel } = require("../Model/UserModel");

userRouter.post("/login", async (req, res) => {
  const { username, password } = req.body;
  if (username && password) {
    let user = await UserModel.find({ username, password });
    const token = jwt.sign({ userId: user[0]._id }, "priyank");
    res.json({ token: token });
  } else {
    res.json({ msg: "Wrong Creds" });
  }
});
userRouter.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  let user = new UserModel({ username, password });
  await user.save();
  res.send({ msg: "user registered" });
});
module.exports = { userRouter };
