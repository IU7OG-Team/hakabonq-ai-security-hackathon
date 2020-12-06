const path = require("path");

const express = require("express");

const app = express();

app.set("view engine", "pug");
app.set("views", "views");

app.use(express.static(path.join(__dirname, "public")));

app.use("/", (_req, res, _next) => {
  res.render("index", { pageTitle: "WineChecker" });
});

app.listen(3000);
