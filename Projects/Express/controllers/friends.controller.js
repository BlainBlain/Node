const model = require("../models/friends.model");

function getFriends(req, res) {
  res.json(model);
}

function getFriend(req, res) {
  const friendId = Number(req.params.id);
  const friend = model[friendId];
  if (!friend) {
    return res.status(404).json({
      error: "Friend not found",
    });
  }
  res.status(200).json(friend);
}

function postFriend(req, res) {
  if (!req.body.name) {
    return res.status(400).json({
      error: "Missing name",
    });
  }

  const friend = { id: model.length, name: req.body.name };
  model.push(friend);
  res.status(201).json(friend);
}

module.exports = {
  getFriends,
  getFriend,
  postFriend,
};
