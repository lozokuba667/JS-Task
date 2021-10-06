let turn = "x"; //tura
let symbols = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

const board = document.querySelector(".board"); //przypisz pierwszy element z klasą "board" pod zmienną board
const tiles = Array.from(document.querySelectorAll(".tile")); // przypisz wszystkie elementy z klasą tile pod tablice Tiles

board.addEventListener("click", ({target}) => {
  const classes = Array.from(target.classList);
  if (classes.includes("tile") && classes.length !== 1) return;

  const idx = tiles.indexOf(target);

  target.classList.add(`tile-${turn}`);
  symbols[idx % 3][Math.floor(idx / 3)] = turn;
  turn = turn === "x" ? "o" : "x";

  displayTurn(turn);

  checkWin();
});

function displayTurn(turn) {
  // 1. zmień text elementu h1 z klasą "turn" zależnie od tego, czyja jest aktualnie tura
  var myTurnDisplay = document.querySelector(".turn");
  if (turn == "x") {
    myTurnDisplay.innerHTML = "X turn";
  } else if (turn == "o") {
    myTurnDisplay.innerHTML = "O turn";
  }
}

function checkWin() {
  // 2. sprawdź czy któryś z graczy wygrał pojedynek - jeśli tak wyświetla komunikat (możesz użyć np. funkcji "alert(...)")
  if (
    (symbols[0][0] == "x" && symbols[1][0] == "x" && symbols[2][0] == "x") ||
    (symbols[0][1] == "x" && symbols[1][1] == "x" && symbols[2][1] == "x") ||
    (symbols[0][2] == "x" && symbols[1][2] == "x" && symbols[2][2] == "x") ||
    (symbols[0][1] == "x" && symbols[0][1] == "x" && symbols[0][2] == "x") ||
    (symbols[1][0] == "x" && symbols[1][1] == "x" && symbols[1][2] == "x") ||
    (symbols[2][0] == "x" && symbols[2][1] == "x" && symbols[2][2] == "x") ||
    (symbols[0][0] == "x" && symbols[1][1] == "x" && symbols[2][2] == "x") ||
    (symbols[2][0] == "x" && symbols[1][1] == "x" && symbols[0][2] == "x")
  ) {
    alert("X PLAYER HAS WON!");
    reset();
  } else if (
    (symbols[0][0] == "o" && symbols[1][0] == "o" && symbols[2][0] == "o") ||
    (symbols[0][1] == "o" && symbols[1][1] == "o" && symbols[2][1] == "o") ||
    (symbols[0][2] == "o" && symbols[1][2] == "o" && symbols[2][2] == "o") ||
    (symbols[0][1] == "o" && symbols[0][1] == "o" && symbols[0][2] == "o") ||
    (symbols[1][0] == "o" && symbols[1][1] == "o" && symbols[1][2] == "o") ||
    (symbols[2][0] == "o" && symbols[2][1] == "o" && symbols[2][2] == "o") ||
    (symbols[0][0] == "o" && symbols[1][1] == "o" && symbols[2][2] == "o") ||
    (symbols[2][0] == "o" && symbols[1][1] == "o" && symbols[0][2] == "o")
  ) {
    alert("O PLAYER HAS WON");
    reset();
  }
}

document.querySelector(".reset").addEventListener("click", reset);
function reset() {
  turn = "x";
  document.querySelector(".turn").innerHTML = "X turn";
  var myBoard = document.getElementsByClassName("tile");
  for (let i = 0; i < myBoard.length; i++) {
    myBoard[i].classList.remove("tile-x", "tile-o");
  }
  symbols = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
}

console.table(symbols);
