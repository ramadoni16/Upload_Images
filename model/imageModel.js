const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ImageSchma = new Schema({
  gambar: {
    type: String,
  },
  waktu: {
    type: String,
    // default: new Date().getFullYear().toString,
    default: new Date(),
    // default: "2023",
  },
});

module.exports = mongoose.model("image", ImageSchma);
