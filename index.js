const express = require("express");
const jsonFile = require("jsonfile");
const dotenv = require("dotenv");
dotenv.config();

const server = express();
server.use(express.urlencoded({ extended: true }));
server.use(express.json());
const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log("server running on port 3000");
});
server.get("/", (req, res) => {
  res.status(200).json("server running");
});
server.post("/validate", async (req, res) => {
  try {
    const {
      remote_transaction_id,
      phonenumber,
      reference,
      amount,
      currency_code,
    } = req.body;
    if (req.body) {
      console.log(req.body);
      res.status(200).json(`ACCEPT ${remote_transaction_id}`);
    } else {
      res.status(400).json(`Reject ${remote_transaction_id}`);
    }
  } catch (err) {
    console.log({ error: err });
    res.status(400).json(`error: ${err.toString()}`);
  }
});
