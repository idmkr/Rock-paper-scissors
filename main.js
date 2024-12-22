const items = [
  { item: "r", pic: "https://i.imgur.com/M2AjtR4.png" },
  { item: "s", pic: "https://i.imgur.com/1d4sNJb.png" },
  { item: "p", pic: "https://i.imgur.com/vjqMLU3.png" },
];

let player,
  computer,
  win = 0,
  loose = 0;

document.getElementById("r").addEventListener("click", () => play(items[0]));
document.getElementById("s").addEventListener("click", () => play(items[1]));
document.getElementById("p").addEventListener("click", () => play(items[2]));

function randomItem() {
  let item = items[Math.floor(Math.random() * items.length)];
  return item;
}

function playRound(player, computer) {
  if (player == computer) {
    console.log("ничья");
  }
  if (
    (player == "r" && computer == "s") ||
    (player == "p" && computer == "r") ||
    (player == "s" && computer == "p")
  ) {
    console.log("победа");
    win += 1;
  }
  if (
    (player == "s" && computer == "r") ||
    (player == "r" && computer == "p") ||
    (player == "p" && computer == "s")
  ) {
    console.log("поражение");
    loose += 1;
  }
}

function play(player) {
  computer = randomItem();
  console.log(computer);
  playRound(player.item, computer.item);
  display(player.pic, computer.pic);
}

function display(player, computer) {
  document.getElementById("win").textContent = win;
  document.getElementById("loose").textContent = loose;
  document.getElementById("comp").src = computer;
  document.getElementById("player").src = player;
}
