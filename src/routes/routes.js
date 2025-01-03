const express = require("express");

const converterController = require("../controllers/converterController");
const validateConversionParams = require("../middlewares/converterMiddleware");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Sistema de Conversão de Unidades Físicas");
});

router.post(
  "/converter/unidade",
  validateConversionParams,
  converterController.handle
);

module.exports = router;
