const fs = require("fs");
//location of directory
const loc = "/mnt/c/Users/saiak/OneDrive/Desktop/DD/";
//read files
const files = fs.readdirSync(loc);
for (const file of files) {
  fs.rename(
    loc + file,
    loc +
      "New__" +
      file.split(".").slice(0, -1).join(".") +
      "__" +
      Math.random().toString(36).substring(2, 10) +
      Math.random().toString(36).substring(2, 10) +
      "." +
      file.split(".").pop(),
    (err) => {
      if (err) throw err;
      console.log("Rename complete!");
    }
  );
}
