const http = require("http");

const PORT = 3000;

const users = [
  { id: 0, name: "John Doe" },
  { id: 1, name: "Jane Doe" },
  { id: 2, name: "Jim Doe" },
];

const server = http.createServer((req, res) => {
  const items = req.url.split("/");
  if (req.method === "POST" && items[1] === "users") {
    req.on("data", (data) => {
      const user = data.toString();
      console.log("Data: ", user);
      users.push(JSON.parse(user));
    });
    req.pipe(res);
  } else if (req.method === "GET" && items[1] === "users") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    if (items.length === 3) {
      const userindex = parseInt(items[2]);
      res.end(JSON.stringify(users[userindex]));
    } else {
      res.end(JSON.stringify(users));
    }
  } else if (req.method === "GET" && items[1] === "messages") {
    res.setHeader("Content-Type", "text/html");
    res.write("<h1>Hello World</h1>");
    res.write("<p>This is a message</p>");
    res.write("<p>This is another message</p>");
    res.write("<li>First item on the list</li>");
    res.end();
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); //127.0.0.1 => localhost
