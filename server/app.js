const express = require("express");
const app = express();
require("dotenv").config();
require("./app/config/db").connect();
const cors = require("cors")

// Parser
app.use(express.json());

// CORS
app.use(cors())

// Routers
const homeRouter = require("./app/router/home.router");
const userRouter = require("./app/router/user.router");

app.use("", homeRouter);
app.use("/api/users/", userRouter);

app.get("*", (_req, res) => {
  res.status(404).json({ message: "Route not found" });
});

module.exports = app;
