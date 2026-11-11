var width = 3;
var length = 3;
const grid = document.getElementById("playGrid");
var round = document.getElementById("roundCount").textContent;

function createGrid(){
  for (let w = 0; w < width; w++) {
    for (let l = 0; l < length; l++) {
      const sqr = document.createElement("button");
      sqr.classList.add("gridSqr");
      document.body.appendChild(sqr);
    }
    const newRow = document.createElement("tr");
    document.body.appendChild(newRow);
  }
}
