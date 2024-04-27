const fs = require("fs");
const path = require("path");

const operation = process.argv[2];
const file = process.argv[3];
const content = process.argv[4]||"";

switch (operation) {
  // complete the fillowing function.
  case "read":
    fs.readFile(file, "utf8", (err, data) => {
      if (err){
        console.log(err);
      }else{
        console.log(data);
      }
    });
    break;
    case "delete":
      fs.unlink(file, (err) => {
        if (err){
          console.log(err);
        }else{
          console.log(`File ${file} deleted`);
        }
      }); 
      break;
    case "create":
      fs.writeFile(file, content, (err) => {
        if (err){
          console.log(err);
        }else{
          console.log(`File ${file} created`);
        }
      });
      break;
    case "append":
      fs.appendFile(file, `\n${content}`, (err) => {
        if (err){
          console.log(err);
        }else{
          console.log(`File ${file} appended`);
        }
      });
      break;
    case "rename":
      fs.rename(file, path.join(path.dirname(file), content), (err) => {
        if (err){
          console.log(err);
        }else{
          console.log(`File ${file} renamed to ${content}`);
        }
      });
      break;
    case "list":
      fs.readdir(file, (err, files) => {
        if (err){
          console.log(err);
        }else{
          console.log(files);
        }
      });

  default:
    console.log(`Invalid operation '${operation}'`);
}
