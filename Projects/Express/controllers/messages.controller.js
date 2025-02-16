function getMessages(req, res) {
  res.send("How are you!");
}

function postMessage(req, res) {
  res.send("Got a POST request");
}

module.exports = {
  getMessages,
  postMessage,
};
