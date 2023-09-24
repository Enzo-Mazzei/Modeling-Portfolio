function updateLayout() {
  const portfolioItems = document.querySelectorAll(".portfolio-item");
  const container = document.querySelector(".container");

  let minColumnWidth = 260;
  const gapSize = 20;

  const screenWidth = window.innerWidth;
  if (screenWidth > 420) {
    minColumnWidth = 400;
  }
  let columnCount = Math.floor(screenWidth / (minColumnWidth + gapSize));
  columnCount = Math.min(columnCount, 3);

  container.innerHTML = "";

  let columns = [];
  for (let i = 0; i < columnCount; i++) {
    const column = document.createElement("div");
    column.classList.add("column");
    column.style.marginRight = gapSize / 2 + "px";
    column.style.marginLeft = gapSize / 2 + "px";
    container.appendChild(column);
    columns.push(column);
  }
  let columnHeights = new Array(columnCount).fill(0);

  portfolioItems.forEach((item, index) => {
    const shortestColumn = columnHeights.indexOf(Math.min(...columnHeights));
    columns[shortestColumn].appendChild(item);
    item.style.marginBottom = gapSize + "px";
    const itemHeight = item.offsetHeight + gapSize;
    columnHeights[shortestColumn] += itemHeight;
  });
}

function shouldUpdateLayout() {
  const screenWidth = window.innerWidth;
  const tabletViewportMinWidth = 768;
  if (screenWidth >= tabletViewportMinWidth) {
    updateLayout();
  }
}

window.addEventListener("load", updateLayout);
window.addEventListener("resize", shouldUpdateLayout);

function zoomMenu(x) {
  x.classList.toggle("change");
}
function showMenu() {
  let x = document.getElementById("navbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}
function checkScreenWidth() {
  let x = document.getElementById("navbar");
  let y = document.querySelector(".menu-icon");
  if (window.innerWidth > 768 && x.classList.contains("responsive")) {
    x.classList.remove("responsive");
    y.classList.remove("change");
  }
}
window.addEventListener("resize", checkScreenWidth);
