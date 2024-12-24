const express = require("express");

const converterController = require("../controllers/converterController");
const validateConversionParams = require("../middlewares/converterMiddleware");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello");
});

router.post("/converter/comprimento", converterController.handle);

module.exports = router;