const express = require("express");

const app = express();

const friendsRouter = "./routes/friends.router";
const messagesRouter = "./routes/messages.router";

const PORT = 8080;

app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.baseUrl} ${req.url} ${delta}ms`);
});

app.use(express.json());

app.use("/friends", require(friendsRouter));
app.use("/messages", require(messagesRouter));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
