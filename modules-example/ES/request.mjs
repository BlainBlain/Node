function encrypt(data) {
  return "encrypted data";
}

export function send(url, data) {
  const encrypted = encrypt(data);
  console.log(`Sending ${encrypted} to ${url}`);
}
