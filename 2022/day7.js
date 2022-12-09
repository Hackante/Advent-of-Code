// Partly inspired by https://github.com/ilsubyeega/aoc2022/blob/main/day07.js

const { readFileSync, writeFileSync } = require("fs");

const input = readFileSync("2022/day7.input", "utf-8").replace(/\r/g, "");

let tree = {};
let order = [];

input.split("\n").forEach((line) => {
    if (line.startsWith("$")) {
        if (line.split(" ")[1] == "cd") {
            if (line.split(" ")[2] == "..") {
                order.pop();
            } else if (line.split(" ")[2] == "/") {
                order = [];
            } else {
                order.push(line.split(" ")[2]);
            }
        }
    } else {
        const currPos =
            order.length === 0 ? tree : order.reduce((a, b) => a[b], tree);
        if (line.startsWith("dir")) {
            currPos[line.split(" ")[1]] = {};
        } else {
            currPos[line.split(" ")[1]] = parseInt(line.split(" ")[0]);
        }
    }
});

let task = 0;
let allFolders = [];

/**
 * @param {Object} o
 * @returns {Number}
 */
function m(o) {
    let size = 0;
    for (const key in o) {
        if (typeof o[key] == "number") {
            size += o[key];
        } else {
            size += m(o[key]);
        }
    }
    if (size < 100000) task += size;
    allFolders.push(size);
    return size;
}

const neededSpace = (70000000 - m(tree) - 30000000) * -1;
console.log(task);

const x = allFolders.filter((e) => e > neededSpace).sort((a, b) => a - b);

console.log(x[0]);

writeFileSync("2022/day7.json", JSON.stringify(tree));