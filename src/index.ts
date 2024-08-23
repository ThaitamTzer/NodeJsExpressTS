import express from "express";
import morgan from "morgan";
import path from "path";
import { engine } from "express-handlebars";

const app = express();
const port = 3030;

// logger
app.use(morgan("combined"));

// static file
app.use(express.static(path.join(__dirname, "./public")));

// timeplate engine
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "./resources/views"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/news", (req, res) => {
  res.render("news");
});

app.listen(port, () => {
  console.log(`Server is running on localhost:${port}`);
});
