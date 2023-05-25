const button = document.querySelector(".button");
const box = document.querySelector(".box");
box.style.gridTemplateColumns = "repeat(16, 1fr)";
box.style.gridTemplateRows = "repeat(16, 1fr)";

//deleting divs from box
function removeSquares() {
  while (box.firstChild) {
    box.removeChild(box.lastChild);
  }
}

//1) deletes old sketch 2)fill box with divs accordingly to what user will choose
button.addEventListener("click", () => {
  removeSquares();
  let answer = prompt(
    "How many squares per side you want? \n(Type one number more than 2 and less than 101)"
  );
  if (answer > 2 && answer < 101) {
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
    alert("Please, choose right proportions!");
  }
});
