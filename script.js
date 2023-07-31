const container = document.querySelector(".container");
const Hover = document.querySelector(".hover");
const Normal = document.querySelector(".normal");
const Grid = prompt("Enter number of Grid's");
let gridNum = Grid * Grid;

let isDrawing = false;

document.addEventListener("mousedown", () => {
  isDrawing = true;
});

document.addEventListener("mouseup", () => {
  isDrawing = false;
});

let hoverFunction = (event) => {
  event.target.style.backgroundColor = "green";
};

for (let i = 0; i < gridNum; i++) {
  let item = document.createElement("div");
  item.classList.add("item");
  item.style.width = 500 / Grid + "px";
  item.style.height = 500 / Grid + "px";
  item.addEventListener("mouseover", function () {
    if (isDrawing) {
      item.style.backgroundColor = "black";
    }
  });

  document.getElementById("hover").addEventListener("click", function () {
    item.addEventListener("mouseover", hoverFunction);
  });

  document.getElementById("clear").addEventListener("click", function () {
    item.style.backgroundColor = "";
  });

  document.getElementById("normal").addEventListener("click", function () {
    item.removeEventListener("mouseover", hoverFunction);
    item.addEventListener("mouseover", function () {
      if (isDrawing) {
        item.style.backgroundColor = "black";
      }
    });
  });

  function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  let randomColor = getRandomColor();

  document.getElementById("random").addEventListener("click", function () {
    item.removeEventListener("mouseover", hoverFunction);
    item.addEventListener("mouseover", function () {
      if (isDrawing) {
        item.style.backgroundColor = randomColor;
      }
    });
  });

  container.appendChild(item);
}
