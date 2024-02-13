const path = require("path");

console.log(path.sep); // /

// joins a sequence of path segments using that platform specific separator
const filePath = path.join("/content/", "subfolder", "test.txt");
console.log(filePath); // /content/subfolder/text.txt

const base = path.basename(filePath);
console.log(base); // text.txt

const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute); // /Users/hutchrhees/node_js-learning/node-tutorial/content/subfolder/text.txt
