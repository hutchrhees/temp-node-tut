const { readFileSync, writeFileSync } = require("fs");

console.log("start");

const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");

// console.log(first, second);
// if the file isnt there, node will create one. If the file is there node will overwrite it
writeFileSync(
  "./content/result-sync.txt",
  `Here is the result: ${first}, ${second}`,
  { flag: "a" } // setting flag to 'a' will tell node to append this
);
console.log("done witht this task");
console.log("starting the next one");
