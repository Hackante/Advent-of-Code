const { readFileSync } = require("fs");

let input = readFileSync("2022/day5.input", "utf-8").replace(/\r/g, "");

function task(task = 1) {
    let lines = input.split("\n");

    let layers = 0;
    let pillars = 0;

    for (let l of lines) {
        if (!l.startsWith("[")) break;
        layers++;
    }
    pillars = lines[layers].match(/ \d{1,2} /g).length;

    let grid = new Array(pillars);
    let rows = new Array(layers);

    for (let i = 0; i < pillars; i++) {
        grid[i] = [];
    }

    for (let i = 0; i < layers; i++) {
        lines[i] = lines[i].replace(/(.{3})./g, "$1");
        rows[i] = lines[i];
    }

    rows.reverse();
    rows = rows.map((r) => r.replace(/(\[)|(\])/g, "").replace(/\s{3}/g, " "));

    rows.forEach((e) => {
        for (let i = 0; i < e.length; i++) {
            if (e[i] != " ") grid[i].push(e[i]);
        }
    });

    lines = lines.slice(layers + 2);
    lines = lines.map((l) => l.match(/\d{1,2}/g).map((val) => parseInt(val)));

    lines.forEach((line) => {
        let amount = line[0];
        let origin = line[1];
        let destination = line[2];

        let selection = grid[origin - 1].splice(
            grid[origin - 1].length - amount,
            amount
        );

        if (task != 2) selection.reverse();

        grid[destination - 1].push(...selection);
    });

    let solution = "";
    grid.forEach((element) => {
        solution += element[element.length - 1];
    });

    console.log(solution);
}

task();
task(2);