import express from "express";
import morgan from "morgan";
import path from "path";
import { engine } from "express-handlebars";

const app = express();
const port = 3030;

app.use(morgan("combined"));
app.engine(
  "hds",
  engine({
    extname: ".hds",
    layoutsDir: path.join(__dirname, "./resources/views/layouts"),
    partialsDir: path.join(__dirname, "./resources/views/partials"),
  })
);
app.set("view engine", "hds");
app.set("views", path.join(__dirname, "./resources/views"));

app.get("/", (req, res) => {
  res.render("home", { layout: "main" });
});

app.get("/tin-tuc", (req, res) => {
  res.send("Tin tức");
});

app.listen(port, () => {
  console.log(`Server is running on localhost:${port}`);
});
