const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51LEzvSIkYK3bUsO5gKXB750upIrn8FsMEVBuqaPWko27J6hrTvcCuVknKRjIBoLs0oRZ3kniyh4i2QxhIPUNQqc5004rFAc3VY"
);
const { v4: uuidv4 } = require("uuid");
const app = express();
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Welcome");
});
app.post("/payment", async (req, res) => {
  let error;
  let status;
  try {
    const { product, token } = req.body;
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });
    const key = uuidv4();
    const charge = await stripe.charges.create(
      {
        amount: product.price * 100,
        currency: "usd",
        customer: customer.id,
        receipt_email: token.email,
        description: `All products description`,
        shipping: {
          name: token.card.name,
          address: {
            line1: token.card.address_line1,
            line2: token.card.address_line2,
            city: token.card.address_city,
            country: token.card.address_country,
            postal_code: token.card.address_zip,
          },
        },
      },
      { idempotencyKey: key }
    );
    status = "success";
  } catch (error) {
    console.log(error);
    status = "failure";
  }
  res.json({ error, status });
});
app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
