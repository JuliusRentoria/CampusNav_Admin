const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Account = require("./models/accounts.model");

const PORT = 5000;

const app = express();
app.use(express.json());
app.use(cors());

app.post("/api/account", (req, res) => {
  Account.create(req.body)
    .then((Account) => res.json(Account))
    .catch((err) => err);
});

app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  // First, find the user by email only
  Account.findOne({ email })
    .then((user) => {
      if (user) {
        // Compare the password
        if (user.password === password) {
          res.json("Success");
        } else {
          res.json("Invalid Password");
        }
      } else {
        res.json("No Record");
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Server error" });
    });
});

//SERVER CONNECTION || DATABASE CONNECTION
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

mongoose
  .connect(
    "mongodb+srv://admin:admin@braveroute.4gjla.mongodb.net/admin_accounts?retryWrites=true&w=majority&appName=BraveRoute"
  )
  .then(() => {
    console.log("Connected to Database");
  })
  .catch(() => {
    console.log("Error connecting to Database!");
  });
