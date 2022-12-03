const { readFileSync } = require("fs");

let input = readFileSync("2022/day3.input", "utf-8").replace(/\r/g, "");

let bags = input.split("\n");

let all = [];

function findChar() {
    bags.forEach((bag, i) => {
        let coms = [bag.slice(0, bag.length / 2), bag.slice(bag.length / 2)];
        for (let char of coms[0]) {
            if (coms[1].includes(char)) {
                all.push(char);
                break;
            }
            continue;
        }
    });
}

/**
 *
 * @param {String} str1
 * @param {String} str2
 * @param {String} str3
 */
function findTeam(str1, str2, str3) {
    for (let char of str1) {
        if (str2.includes(char) && str3.includes(char)) return char;
    }
}

/**
 * @param {String} a
 */
function getValue(a) {
    return a.charCodeAt(0) - 96 + (a == a.toUpperCase() ? 58 : 0);
}

let teams = new Array(100);
bags.forEach((bg, i) => {
    if (teams[Math.floor(i / 3)]) teams[Math.floor(i / 3)].push(bg);
    else teams[Math.floor(i / 3)] = [bg];
});

// task 1
let val = 0;
findChar();
all.forEach((e) => (val += getValue(e)));
console.log(val);

// task 2
val = 0;
teams.forEach((t) => {
    val += getValue(findTeam(...t));
});
console.log(val);
