const { readFileSync } = require("fs");

let input = readFileSync("2022/day2.input", "utf-8").replace(/\r/g, "");

let score = 0;

let sheet = {
    X: 1,
    Y: 2,
    Z: 3,
    a: { lose: "Y", draw: "X", win: "Z" },
    b: { lose: "Z", draw: "Y", win: "X" },
    c: { lose: "X", draw: "Z", win: "Y" },
};

/**
 * Adds 1, 2 or 3 points to your total sum. Depending on the choice you made.
 * @param {String} choise
 */
function addChoisePoints(choise) {
    score += sheet[choise];
}

/**
 * Line of the input
 * @param {String} inputLine
 */
function checkWin(inputLine) {
    let [enemy, team] = inputLine.split(" ");
    addChoisePoints(team);
    switch (enemy) {
        case "A": {
            if (["X", "A"].includes(team)) score += 3;
            else if (["Y", "B"].includes(team)) score += 6;
            break;
        }
        case "B": {
            if (["Y", "B"].includes(team)) score += 3;
            else if (["Z", "C"].includes(team)) score += 6;
            break;
        }
        case "C": {
            if (["Z", "C"].includes(team)) score += 3;
            else if (["X", "A"].includes(team)) score += 6;
            break;
        }
    }
}
input.split("\n").forEach((e) => {
    checkWin(e);
});
console.log(score);
score = 0;

function changeTeam() {
    input.split("\n").forEach((e) => {
        let [enemy, form] = e.split(" ");
        let team = "";
        switch (form) {
            case "X": {
                team = sheet[enemy.toLowerCase()].win;
                break;
            }
            case "Y": {
                team = sheet[enemy.toLowerCase()].draw;
                break;
            }
            case "Z": {
                team = sheet[enemy.toLowerCase()].lose;
                break;
            }
        }
        checkWin(enemy + " " + team);
    });
}

changeTeam();
console.log(score);
