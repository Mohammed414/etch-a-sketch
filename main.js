const container = document.querySelector(".container");

function createBox(boxDimension) {
  let box = document.createElement("div");
  box.style.cssText = `width: ${boxDimension}px; height: ${boxDimension}px;`;
  box.className = "box";
  box.style.border = "1px solid black";
  console.log(box);

  return box;
}

function makeGrid(canvas, N) {
  const GRIDSIZE = 512; // 256 * 256 pixels
  const n = N; // 16 * 16 grid
  const boxDimension = GRIDSIZE / n;

  // make a grid
  for (let i = 0; i < n; i++) {
    let row = document.createElement("div");
    row.style.display = "flex";
    for (let i = 0; i < n; i++) {
      row.appendChild(createBox(boxDimension));
    }
    canvas.appendChild(row);
  }
}

makeGrid(container, 16);

function attachHoverEvent() {
  const boxes = document.querySelectorAll(".box");
  boxes.forEach((box) =>
    box.addEventListener("mouseover", function (e) {
      let box = e.target;
      box.classList.add("hovered");
    })
  );
}

attachHoverEvent();

const btn = document.querySelector(".btn");
btn.addEventListener("click", function (e) {
  const n = prompt("Enter the number of boxes N X N. (Max: 100)");
  if (n > 100) {
    alert("Max number of boxes is 100");
    return;
  }
  if (n < 1) {
    alert("Min number of boxes is 1");
    return;
  }
  container.innerHTML = "";
  makeGrid(container, n);
  attachHoverEvent();
});
