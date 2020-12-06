const express = require("express");
const bodyParser = require("body-parser");
const helmet = require("helmet");

const wineRoutes = require("./routes/wine");

const app = express();

app.use(bodyParser.json());
app.use(helmet());

app.use((_req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use("/wine", wineRoutes);

app.use((error, _req, res, _next) => {
  console.log(error);
  const status = error.statusCode;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message, data });
});

app.listen(8080);
