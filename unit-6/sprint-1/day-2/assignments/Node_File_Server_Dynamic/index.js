const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 8080;

const server = http.createServer((req, res) => {
  //checking the url for root or any other url
  const url = req.url === "/" ? "" : req.url;

  //getting the current file path based on url
  const filePath = path.join(__dirname, url);

  //checking the requested file exists or not
  fs.exists(filePath, (exists) => {
    if (exists) {
      //checking the stat of file
      fs.stat(filePath, (err, stats) => {
        if (err) {
          res.end("Something went wrong");
        } else {
          //if the requested file is directory then we need to read all the file of that folder
          if (stats.isDirectory()) {
            //read all the file of that folder
            const files = fs.readdirSync(filePath);

            //creating HTML string to sent back as response to display on webpage
            let htmlString = "<ul>";

            files.map((file) => {
              const currFilePath = path.join(filePath, file);
              const fileType = fs.statSync(currFilePath);

              //   if (fileType.isDirectory()) {
              //     htmlString += `<li><a href = "${url}/${file}">&#128193; ${file}</a></li>`;
              //   } else {
              //     htmlString += `<li><a href = "${url}/${file}">&#128441; ${file}</a></li>`;
              //   }

              const isDirectory = fileType.isDirectory();

              htmlString += `<li><a href = "${url}/${file}">${
                isDirectory ? "&#128193;" : "&#128441;"
              } ${file}</a></li>`;
            });

            htmlString += "</ul>";

            res.setHeader("Content-type", "text/html");
            res.writeHead(200);
            res.end(htmlString);
          } else {
            // if requested file is not directory the we need to read the content of that file and send back as response
            const fileContent = fs.readFileSync(filePath, "utf-8");
            res.writeHead(200);
            res.end(fileContent);
          }
        }
      });
    } else {
      res.writeHead(404);
      res.end("404 Not Found");
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server is running at port : ${PORT}`);
});

module.exports = server;
