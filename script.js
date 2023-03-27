Q = ["I want a team with over 100 years of history.",
    "I want a team with over 100 years of history in the city they're currently in.",
    "I want a team that could be competitive this year.",
    "I don't want to join a bandwagon team.",
    "I want a team that will score plenty of runs.",
    "I want a team that won't give up lots of runs.",
    "Red and blue are boring colors that I don't want my team to wear.",
    "Orange is a stupid color.",
    "I can't watch any day games and I don't want to miss many games.",
    "Native American themed team names are offensive.",
    "I hate teams that were stolen from another city in the last 50 years.",
    "I like players with beards.",
    "I don't want to cheer for baseball's current villains."];
Q_answers = [["LAA", "TEX", "HOU", "NYM", "KCR", "WSN", "SDP", "SEA", "MIL", "TOR", "COL", "MIA", "ARI", "TBR"],
["OAK", "MIN", "BAL", "ATL", "LAD", "SFG"],
["DET", "OAK", "WSN", "CIN", "PIT", "COL"],
["NYY", "LAD", "HOU", "CLE", "STL", "ATL"],
["OAK", "DET", "WSN", "CIN", "MIA"],
["COL", "CIN", "WSN", "PIT", "KCR"],
["LAD", "CHC", "STL", "CIN", "WSN", "PHI", "ATL", "TEX", "LAA", "CLE", "DET", "KCR", "MIN", "BOS", "TOR", "NYY", "TBR"],
["SFG", "NYM", "HOU", "BAL"],
["CHC"],
["ATL"],
["WSN"],
["NYY"],
["HOU", "NYY", "LAD"]];
i = -1; // Will increment to 0 on begin

div_container = document.querySelector(".grid-container");
list = ["ARI", "ATL", "BAL", "BOS", "CHC", "CHW", "CIN", "CLE", "COL", "DET", "HOU", "KCR", "LAA", "LAD", "MIA", "MIL", "MIN", "NYM", "NYY", "OAK", "PHI", "PIT", "SDP", "SEA", "SFG", "STL", "TBR", "TEX", "TOR", "WSN"];
list.forEach((abb) => {
    new_div = document.createElement("div");
    new_div.classList.add("square");
    new_div.id = abb;
    new_div.innerHTML = "<img src=\"logos/" + abb + ".png\" alt=\"" + abb + "\" width =\"100\">";
    div_container.appendChild(new_div);
})

document.querySelectorAll("button").forEach((btn) => btn.addEventListener("click", e => {
    if (e.target.id == "Y") {
        fade();
    }
    next();
}))

function fade() {
    Q_answers[i].forEach((sq) => {
        document.getElementById(sq).classList.add("faded");
    })
}

function next() {
    i++;
    question = document.querySelector(".question");
    question.textContent = Q[i];
}

// Initial update
next();