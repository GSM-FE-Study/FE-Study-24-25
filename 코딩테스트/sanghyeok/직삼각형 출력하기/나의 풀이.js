const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = "";

rl.on("line", function (line) {
  input = line;
}).on("close", function () {
  const star = "*";
  for (let i = 0; i < input; i++) {
    let stack = [];
    for (let j = 0; j <= i; j++) {
      stack.push(star);
    }
    console.log(stack.join(""));
  }
});
