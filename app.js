// imports

const express = require("express");
const app = express();
const fs = require("fs");
const multer = require("multer");
const { TesseractWorker } = require("tesseract.js");
const worker = new TesseractWorker();

//storage

const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, res, cb) => {
    cb(null, req.file);
  }
});

const upload = multer({ storage: storage }).single("avatar");

// View Engine

app.set("view engine", "ejs");

// Routes

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/upload", (req, res) => {
  console.log("Piyush");
});

const PORT = 5000 || process.env.PORT;
app.listen(PORT, () => console.log("Listening on Port" + PORT));
