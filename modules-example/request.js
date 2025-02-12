function encrypt(data) {
  return "encrypted data";
}

function send(url, data) {
  const encrypted = encrypt(data);
  console.log(`Sending ${encrypted} to ${url}`);
}

module.exports = { send };

console.log("Hello");
