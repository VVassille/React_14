const fs = require("fs");

fs.writeFile("info.txt", "Node.js is awesome!", (err) => {
  if (err) {
    console.error("Error write file:", err.message);
  } else {
    console.log(" Write file ! I ");

    fs.readFile("info.txt", "utf8", (err) => {
      if (err) {
        console.error("Error write file:", err.message);
      } else {
        console.log("Write file ! II ");
      }
    });
  }
});
