const express = require("express");
const path = require("path");

const friendsRouter = "./routes/friends.router";
const messagesRouter = "./routes/messages.router";

const app = express();

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

const PORT = 8080;

app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.baseUrl} ${req.url} ${delta}ms`);
});

app.use("/site", express.static(path.join(__dirname, "public")));
app.use(express.json());

app.get("/", (req, res) =>
  res.render("index", { title: "Skiing Trip", caption: "Skiing was amazing!" })
);
app.use("/friends", require(friendsRouter));
app.use("/messages", require(messagesRouter));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
