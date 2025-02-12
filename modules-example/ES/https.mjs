import { send } from "./request.mjs";
import { read } from "./response.mjs";

function request(url, data) {
  send(url, data);
  return read();
}

const Response = request("http://www.google.com", "data");
console.log(Response);
