const express = require("express");
const app = express();
const fs = require("fs");
const multer = require("multer");
const { TesseractWorker } = require("tesseract.js");
