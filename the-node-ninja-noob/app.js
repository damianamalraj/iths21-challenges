const fs = require("fs");
const path = require("path");

let codeLines = 0,
  comments = 0,
  emptyLines = 0,
  numFunctions = 0,
  lines = 0;

const file = fs.readFileSync(process.argv[2], "utf-8");
file.split(/\r?\n/).forEach((line) => {
  lines = lines + 1;

  if (line.length == 0) {
    emptyLines = emptyLines + 1;
  }
  if (line.includes("//")) {
    comments = comments + 1;
  }

  if (line.includes("function") || line.includes("=>")) {
    numFunctions = numFunctions + 1;
  }
  if (line.length > 0 && !line.includes("//")) {
    codeLines = codeLines + 1;
  }
});

console.log({
  "Num code lines": codeLines,
  "Num comments": comments,
  "Empty lines": emptyLines,
  "Num functions": numFunctions,
  "Num Total lines": lines,
});
