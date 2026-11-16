var col = 3;
var row = 3;
const grid = document.getElementById("playGrid");
var round = document.getElementById("roundCount").textContent;
var r = document.querySelector(':root');

function createGrid(c, r){
  if (!grid) return;
  grid.innerHTML = "";
  
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      const sqr = document.createElement("button");
      sqr.classList.add("sqr");
      grid.appendChild(sqr);
    }
    const newRow = document.createElement("br");
    grid.appendChild(newRow);
  }
}
createGrid(col, row)
