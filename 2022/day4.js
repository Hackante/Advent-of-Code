const { readFileSync } = require("fs");

let input = readFileSync("2022/day4.input", "utf-8").replace(/\r/g, "");

let args = input.split("\n");
let counter = 0;
let negCounter = 0;

args.forEach((e) => {
    [a, b] = e.split(",");
    let str1 = " ";
    let str2 = " ";

    for (let i = parseInt(a.split("-")[0]); i <= parseInt(a.split("-")[1]); i++) {
        str1 += `${i} `;
    }
    for (let i = parseInt(b.split("-")[0]); i <= parseInt(b.split("-")[1]); i++) {
        str2 += `${i} `;
    }

    if (str1.includes(str2) || str2.includes(str1)) counter++;
    [a1, a2, b1, b2] = [parseInt(a.split("-")[0]), parseInt(a.split("-")[1]), parseInt(b.split("-")[0]), parseInt(b.split("-")[1])];
    if (a1 > b2 || b1 > a2) negCounter++;
});

console.log(counter);
console.log(args.length - negCounter);