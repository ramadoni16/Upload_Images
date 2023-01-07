const express = require("express");
const app = express();
const dbConfig = require("./config/db_config.js");
const mongoose = require("mongoose");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// koneksi ke database
mongoose
  .connect(dbConfig.mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Berhasil konek ke database");
  })
  .catch((err) => {
    console.log(err);
    console.log("gagal konek ke database");
  });

// list route
app.use("/gambar", require("./routes/imageRoutes"));

app.listen(5000, function () {
  console.log("Server Telah di Jalankan di Port 5000");
});
