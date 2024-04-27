const http = require("http");
const fs = require("fs");
const PORT = 7700;

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    const dirFile = fs.readdirSync(__dirname, "utf-8");

    // console.log(dirFile);

    let resultString = "<ul>";
    dirFile.map((file) => {
      resultString += `<li><a href="${file}">${file}</a></li>`;
    });

    resultString += "</ul>";

    // console.log(resultString);

    res.setHeader("Content-type", "text/html");

    res.end(resultString);
  } else if (req.url == "/.gitignore") {
    const dirFile = fs.readFileSync(`${__dirname}${req.url}`, "utf-8");

    res.end(dirFile);
  } else if (req.url == "/editorial.md") {
    const dirFile = fs.readFileSync(`${__dirname}${req.url}`, "utf-8");

    res.end(dirFile);
  } else if (req.url == "/index.js") {
    const dirFile = fs.readFileSync(`${__dirname}${req.url}`, "utf-8");

    res.end(dirFile);
  } else if (req.url == "/package-lock.json") {
    const dirFile = fs.readFileSync(`${__dirname}${req.url}`, "utf-8");

    res.end(dirFile);
  } else if (req.url == "/package.json") {
    const dirFile = fs.readFileSync(`${__dirname}${req.url}`, "utf-8");

    res.end(dirFile);
  } else if (req.url == "/README.md") {
    const dirFile = fs.readFileSync(`${__dirname}${req.url}`, "utf-8");

    res.end(dirFile);
  } else if (req.url == "/public") {
    const dirFile = fs.readdirSync(`${__dirname}${req.url}`, "utf-8");

    let resultString = "<ul>";

    dirFile.map((file) => {
      resultString += `<li><a href="${req.url}/${file}">${file}</a></li>`;
    });

    resultString += "</ul>";

    res.setHeader("Content-type", "text/html");

    res.end(resultString);
  } else if (req.url == "/public/others") {
    const dirFile = fs.readdirSync(`${__dirname}${req.url}`, "utf-8");

    let resultString = "<ul>";

    dirFile.map((file) => {
      resultString += `<li><a href="${req.url}/${file}">${file}</a></li>`;
    });

    resultString += "</ul>";

    res.setHeader("Content-type", "text/html");

    res.end(resultString);
  } else if (req.url == "/public/others/test.txt") {
    const dirFile = fs.readFileSync(`${__dirname}${req.url}`, "utf-8");

    res.end(dirFile);
  } else if (req.url == "/__tests__") {
    const dirFile = fs.readdirSync(`${__dirname}${req.url}`, "utf-8");

    let resultString = "<ul>";

    dirFile.map((file) => {
      resultString += `<li><a href="${req.url}/${file}">${file}</a></li>`;
    });

    resultString += "</ul>";

    res.setHeader("Content-type", "text/html");

    res.end(resultString);
  } else if (req.url == "/__tests__/app.test.js") {
    const dirFile = fs.readFileSync(`${__dirname}${req.url}`, "utf-8");

    res.end(dirFile);
  } else {
    res.end("404 Not Found");
  }
});

server.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});

module.exports = server;
// export your server
