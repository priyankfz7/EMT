const express = require("express");
const { authentication } = require("./Middleware/auth.middleware");
const { cartRouter } = require("./Router/cart.Router");
const { connection } = require("./Config/db");
const { userRouter } = require("./Router/userRouter");
let server = express();

server.get("/", (req, res) => {
  res.send("hello world");
});
server.use(express.json());

server.use("/user", userRouter);

server.use(authentication);
server.use("/cart", cartRouter);

server.listen(8080, () => {
  try {
    connection;
    console.log("connected to db");
  } catch (e) {
    console.log("something went wrong");
  }
  console.log("server is running at http://localhost:8080");
});
