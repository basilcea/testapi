const express = require("express");
const jsonFile = require("jsonfile");

const server = express();
server.use(express.urlencoded({extended:true}))

server.listen(3000, () => {
  console.log("server running on port 3000");
});
server.get('/', (req,res)=> {
    res.status(200).json('server running')
})
server.post("/validate", async (req, res) => {
  try {
    const {
      api_key,
      api_signature,
      api_type,
      transaction_reference,
      transaction_status,
      transaction_status_code,
      transaction_status_description,
      transaction_account,
      transaction_mobile,
      trasaction_status_action,
      transaction_country,
      transaction_amount,
      transaction_method,
      transaction_paybill,
      transaction_code,
      transaction_date,
    } = req.body;
    if (req.body) {
      console.log(req.body);
      res.status(200).json({
        message: "response reached server",
        data: req.body,
      });
    }
  } catch (err) {
    console.log({ error: err });
  }
});
