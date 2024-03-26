// rewriting using Express
import express from "express";
import fs from "node:fs";
import path from "path";

const app = express();
const port = 3000;
const __dirname = path.resolve();

app.get("/", (req, res) => {
  const filePath = path.join(__dirname, "index.html");
  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send("Internal Server Error");
    } else {
      res.status(200).type("text/html").send(data);
    }
  });
});

app.get("/about", (req, res) => {
  const filePath = path.join(__dirname, "about.html");
  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send("Internal Server Error");
    } else {
      res.status(200).type("text/html").send(data);
    }
  });
});

app.get("/contact-me", (req, res) => {
  const filePath = path.join(__dirname, "contact-me.html");
  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send("Internal Server Error");
    } else {
      res.status(200).type("text/html").send(data);
    }
  });
});

app.use((req, res) => {
  const filePath = path.join(__dirname, "404.html");
  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send("Internal Server Error");
    } else {
      res.status(404).type("text/html").send(data);
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
