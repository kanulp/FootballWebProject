//Dynamic header
let headerData = [
    { href: "/index.html", name: "Matches" },
    { href: "/news/news.html", name: "News" },
    { href: "/matches/table.html", name: "Table" },
    { href: "/players/players.html", name: "Players" },
    { href: "/var/VAR.html", name: "VAR" },
    { href: "/women/wfootball.html", name: "Women's Football" },
    { href: "/refree/refereePage.html", name: "Referee Page" },
    { href: "/awards/awardpage.html", name: "Award Page" },
    { href: "/merchandise/merchandise.html", name: "Merchandise" },
    { href: "/leagues/legues.html", name: "Leagues" },
    { href: "/highlights/highlights.html", name: "Highlights" },
    { href: "comment/commentpagenew.html", name: "Comments" }
]

let header = document.getElementById('headerNav');
let ul = document.createElement("ul");
ul.className = "navigation-link";
headerData.forEach(element => {
    let li = document.createElement("li");
    li.className = "navigation-link-items";
    li.style = "padding-right:10px;"
    let anchor = document.createElement("a");
    anchor.href = element["href"];
    anchor.innerText = element["name"];
    li.appendChild(anchor);
    ul.appendChild(li);
});
header.appendChild(ul);