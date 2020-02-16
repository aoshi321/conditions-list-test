const express = require("express");
const routes = require("./routes");
const app = express();
const cors = require("cors");

app.use(cors());

routes(app);

module.exports = app;
