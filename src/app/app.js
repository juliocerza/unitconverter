const express = require("express");
const swagger = require("swagger-ui-express");
const swaggerDocs = require("../docs/swagger.json");
const cors = require("cors");
const router = require("../routes/routes");

const app = express();

app.use(express.json());

app.use(cors());

app.use(router);

app.use("/docs", swagger.serve, swagger.setup(swaggerDocs));

module.exports = app;
