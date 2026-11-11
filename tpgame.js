var width = 3;
var length = 3;
const grid = document.getElementById("playGrid");
var round = document.getElementById("roundCount").textContent;

function createGrid(w, l){
  for (let i = 0; i < l; i++) {
    for (let j = 0; j < w; j++) {
      const sqr = document.createElement("button");
      sqr.classList.add("gridSqr");
      sqr.innertext("0")
      document.body.appendChild(sqr);
    }
    const newRow = document.createElement("<br>");
    document.body.appendChild(newRow);
  }
}
createGrid.call(width, length)
