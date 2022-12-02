const { readFileSync } = require("fs");

let input = readFileSync("2022/day1.input", "utf-8").replace(/\r/g, "");

let res = [];

input.split("\n\n").forEach((block) => {
    let current = 0;
    block.split("\n").forEach((cal) => {
        current += parseInt(cal);
    });
    res.push(current);
});

res.sort((a, b) => b - a);
console.log("Most calories: " + res[0]);
console.log("Total of top 3: " + (res[0] + res[1] + res[2]))
