const imageModel = require("../model/imageModel");

exports.input = (data) =>
  new Promise((resolve, reject) => {
    imageModel
      .create(data)
      .then(() => {
        resolve({
          status: true,
          msg: "Berhasil Input Gambar",
        });
      })
      .catch((err) => {
        reject({
          status: false,
          msg: "Terjadi kesalahan Pada Server",
        });
      });
  });
