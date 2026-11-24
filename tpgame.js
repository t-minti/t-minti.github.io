var col = 3;
var row = 3;
const grid = document.getElementById("playGrid");
const playGrid = [];
var round = document.getElementById("roundCount").textContent;
var r = document.querySelector(':root');

function createGrid(c, r){
  if (!grid) return;
  grid.innerHTML = "";
  for (let i = 0; i < r; i++) {  
    playGrid[i] = [];
    const rowDiv = document.createElement('div');    
    for (let j = 0; j < c; j++) {
      const sqr = document.createElement("button");
      sqr.classList.add("sqr");
      sqr.textContent = `(${i}, ${j})`;
      grid.appendChild(sqr);
      playGrid[i][j] = sqr;
      rowDiv.appendChild(sqr);
    }
    grid.appendChild(rowDiv);
  }
}
createGrid(col, row)
