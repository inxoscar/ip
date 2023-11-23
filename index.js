// Add Express
const express = require("express");
const PORT = process.env.PORT || 3030;

// Initialize Express
const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "OPTIONS, POST, GET, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

// Create GET request
app.get("/", (req, res) => {
  res.send("Server is ON");
});

app.get("/ip", function (req, res) {
  const ipAddress = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  res.send({ ip: ipAddress });
});

// Initialize server
app.listen(PORT, () => {
  console.log(`Running on port ${PORT}.`);
});
