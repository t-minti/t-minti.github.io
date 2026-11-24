var col = 3;
var row = 3;
const grid = document.getElementById("playGrid");
const playGrid = [];
var round = document.getElementById("roundCount").textContent;
var rt = document.querySelector(':root');
const cc = document.documentElement.style.setProperty('--col', col);
const cr = document.documentElement.style.setProperty('--row', row);
function createGrid(c, r){
  playGrid.length = 0;
  if (!grid) return;
  grid.innerHTML = "";
  for (let i = 0; i < r; i++) {  
    playGrid[i] = [];    
    for (let j = 0; j < c; j++) {
      const sqr = document.createElement("button");
      sqr.classList.add("sqr");
      sqr.textContent = `(${i}, ${j})`;
      playGrid[i][j] = sqr;
      grid.appendChild(sqr);
    }
  }
}
createGrid(col, row)
