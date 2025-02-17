const path = require("path");

function getMessages(req, res) {
  res.render("messages", {
    title: "Messages to my friends",
    friend: "John",
  });
}

function postMessage(req, res) {
  res.send("Got a POST request");
}

module.exports = {
  getMessages,
  postMessage,
};
