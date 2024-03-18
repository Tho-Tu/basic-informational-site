import http from "node:http";
import fs from "node:fs";
import url from "node:url";

// Create a local server to receive data from
const server = http.createServer();

// Listen to the request event
server.on("request", (request, res) => {
  const q = url.parse(request.url, true);

  let filename;
  if (q.pathname === "/") {
    filename = "./index.html";
  } else if (q.pathname === "/about" || q.pathname === "/contact-me") {
    filename = "." + q.pathname + ".html";
  } else {
    filename = "./404.html";
  }

  fs.readFile(filename, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    res.end();
  });
});

server.listen(8080);
