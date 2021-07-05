const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const multer = require("multer");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.send("upload file");
});

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname + "-" + Date.now());
  },
});

let upload = multer({ storage: storage });

app.post("/upload", upload.single("avatar"), (req, res) => {
  console.log(req.file);
  res.send("ok");
});

app.listen(3000, () => {
  console.log("app listening on port : 3000");
});
