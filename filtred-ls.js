var fs = require("fs");
var dir = process.argv[2];
var ext = process.argv[3];
fs.readdir(dir, (err, files) => {
 
  var filtered = files.filter((file) => file.endsWith("." + ext));
  filtered.forEach((file) => console.log(file));
});