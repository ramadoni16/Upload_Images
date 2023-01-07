const router = require("express").Router();
const imageController = require("../controller/ImageController");

const utilApps = require("../utils/utils_apps");
const multer = require("multer");
const uploadFile = multer({
  storage: utilApps.uploadFile,
}).single("gambar");

router.post("/input", uploadFile, (req, res) => {
  if (req.file === undefined) {
    res.json({
      status: false,
      msg: "File Tidak Boleh Kosong",
    });
  } else {
    req.body.gambar = req.file.filename;
  }

  imageController
    .input(req.body)
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.json(error);
    });
});

module.exports = router;
