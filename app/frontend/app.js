const path = require("path");

const express = require("express");

const app = express();

app.set("view engine", "pug");
app.set("views", "views");

app.use(express.static(path.join(__dirname, "public")));

app.get("/about", (_req, res, _next) => {
  res.render("about", { pageTitle: "About project" });
});

app.get("/", (_req, res, _next) => {
  res.render("index", { pageTitle: "WineChecker" });
});

app.use((_req, res, _next) => {
  res.render("404", { pageTitle: "Wine Not Found" });
});

app.listen(3000);
