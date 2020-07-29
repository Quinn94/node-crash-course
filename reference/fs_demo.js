const fs = require("fs"); //File system
const path = require("path");

//Create folder
// fs.mkdir(path.join(__dirname, "./test"), {}, (err) => {
//   if (err) throw err;
//   console.log("Folder created..");
// });

//Create and write file (overwrite file)
fs.writeFile(
  path.join(__dirname, "./test", "hello.txt"),
  "Hello World!",
  (err) => {
    if (err) throw err;
    console.log("File created and written to..");

    //File append (Since this is asynchronous, callback)
    fs.appendFile(
      path.join(__dirname, "./test", "hello.txt"),
      " I love Node.js",
      (err) => {
        if (err) throw err;
        console.log("File created and written to..");
      }
    );
  }
);

//Read File
fs.readFile(
  path.join(__dirname, "./test", "hello.txt"),
  "utf8",
  (err, data) => {
    if (err) throw err;
    console.log(data);
  }
);
