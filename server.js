// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const app = express();
var bodyParser = require("body-parser");

app.set("view engine", "pug");
app.set("views", "./views");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var todos = [
  { id: 1, item: "di cho" },
  { id: 2, item: "rua bat" },
  { id: 3, item: "nau com" },
  { id: 4, item: "hoc code tai codersx" }
];

// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (req, res) => {
  res.send("I love CodersX");
});

app.get("/todos", (req, res) => {
  res.render("index", { todos: todos });
});

app.get("/todos/search", function(req, res) {
  var q = req.query.q;
  var matchedItems = todos.filter(function(todo) {
    return todo.item.indexOf(q) !== -1;
  });
  res.render("index", {
    todos: matchedItems
  });
});

app.get("/todos/create", function(req, res) {
  res.render("create");
});
app.post("/todos/create", function(req, res) {
  todos.push(req.body);
  res.redirect("/todos");
});

// listen for reqs :)
app.listen(process.env.PORT, () => {
  console.log("Server listening on port " + process.env.PORT);
});
