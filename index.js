// Add Express
const express = require("express");

// Initialize Express
const app = express();

// Create GET request
app.get("/", (req, res) => {
  res.send("Server is ON");
});

app.get("/ip", function (req, res) {
  const ipAddress = req.socket.remoteAddress;
  res.send({ ip: ipAddress });
});

// Initialize server
app.listen(5000, () => {
  console.log("Running on port 5000.");
});
