const { readFileSync } = require("fs");

let input = readFileSync("2022/day6.input", "utf-8").replace(/\r/g, "");

function hasEqual(array) {
    return array.join("").match(/^(?!.*(.).*\1)[a-z]+$/)?.length ?? false;
}

function uniqueChars(amount) {
    let indices = [];
    let current = input.split("").splice(0, amount - 1);
    for (let i = amount - 1; i < input.length; i++) {
        current.push(input[i]);
        if (hasEqual(current)) indices.push(i + 1);
        current.shift();
    }
    return indices;
}

console.log(uniqueChars(4)[0]);
console.log(uniqueChars(14)[0]);
