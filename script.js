const box = document.querySelector(".box");
box.style.gridTemplateColumns = "repeat(16, 1fr)";
box.style.gridTemplateRows = "repeat(16, 1fr)";
const button = document.querySelector(".button");
let gridCount = 0;

for (let i = 0; i < 256; i++) {
  let square = document.createElement("div");
  square.style.cssText = "background: white";
  box.insertAdjacentElement("beforeend", square);
  square.addEventListener("click", () => {
    square.style.background = "black";
  });
}

function removeSquares() {
  while (box.firstChild) {
    box.removeChild(box.lastChild);
  }
}

button.addEventListener("click", () => {
  removeSquares();
  let answer = prompt("How many squares in line you want?(more than 2 and less than 101)");
  if(answer > 2 && answer < 101){
    box.style.gridTemplateColumns = `repeat(${answer}, 1fr)`;
    box.style.gridTemplateRows = `repeat(${answer}, 1fr)`;
    for (let i = 0; i < answer * answer; i++) {
      let square = document.createElement("div");
      square.style.cssText = "background: white";
      box.insertAdjacentElement("beforeend", square);
      square.addEventListener("mouseover", () => {
        square.style.background = "black";
      });
    }
  } else {
    alert("Choose right proportions");
  }
});


