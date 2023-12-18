/**
 * express
 * dotenv
 * nodemon
 * mongoose
 */

// import express from "express";
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
// import dotenv from "dotenv";
const todoRoute = require("./routes/todo.route");
const userRoute = require("./routes/user.route");

const app = express();
dotenv.config();

// http://localhost:3000/todo

mongoose
  .connect(process.env.MONGODB_STRING)
  .then(() => console.log("DB connection established"))
  .catch((error) => console.log(error));

app.use(express.json());
app.use("/todo", todoRoute);
app.use("/user", userRoute);
// Logicall or ( || )
app.listen(process.env.PORT || 5000, function () {
  console.log("Listening on port 5000");
});
