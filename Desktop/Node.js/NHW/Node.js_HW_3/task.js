const fs = require("fs");

fs.mkdir("myFolder", (err) => {
  if (err) {
    console.error("Error creating folder:", err.message);
  } else {
    console.log("Folder created");

    fs.rmdir("myFolder", (err) => {
      if (err) {
        console.error("Error deleting folder:", err.message);
      } else {
        console.log("Folder deleted");
      }
    });
  }
});
