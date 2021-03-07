var chrs = [
  { name: "Optimus Prime", class: "leader", afl: "autobot", vehicle: "truck" },
  { name: "Megatron", class: "leader", afl: "decepticon", vehicle: "tank" },
  { name: "Bumblebee", class: "scout", afl: "autobot", vehicle: "car" },
  { name: "Starscream", class: "scout", afl: "decepticon", vehicle: "plane" },
  { name: "Ironhide", class: "soldier", afl: "autobot", vehicle: "truck" },
  { name: "Brawl", class: "soldier", afl: "decepticon", vehicle: "tank" }
];

function transformer(chrs) {
  var character = document.createElement("div");
  character.classList.add("character");
  var cname = document.createElement("div");
  cname.innerHTML = "Name: " + chrs.name;
  var alliance = document.createElement("div");
  alliance.innerHTML = "Affiliation: " + chrs.afl;
  var vcolor = document.createElement("div");
  vcolor.innerHTML = "Vehicle: " + chrs.vehicle;
  var rank = document.createElement("div");
  rank.innerHTML = "Class: " + chrs.class.toUpperCase();
  var emblem = document.createElement("img");

  if (chrs.afl == "autobot") {
    character.classList.add("autobot");
    emblem.src =
      "https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Autobot-512.png";
  } else {
    character.classList.add("decepticon");
    emblem.src =
      "https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Decepticon-512.png";
  }

  if (chrs.vehicle == "truck") {
    vcolor.style.color = "blue";
  } else if (chrs.vehicle == "car") {
    vcolor.style.color = "gold";
  } else if (chrs.vehicle == "plane") {
    vcolor.style.color = "white";
  } else if (chrs.vehicle == "tank") {
    vcolor.style.color = "green";
  }
  character.appendChild(cname);
  character.appendChild(alliance);
  character.appendChild(vcolor);
  character.appendChild(rank);
  character.appendChild(emblem);
  document.body.appendChild(character);
}

for (var i = 0; i < chrs.length; i++) {
  transformer(chrs[i]);
}