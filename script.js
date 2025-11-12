//your JS code here. If required.
const gridContainer = document.getElementById("grid-container");
const changeButton = document.getElementById("change_button");
const resetButton = document.getElementById("Reset");

// Create 3x3 grid with ids 1–9
for (let i = 1; i <= 9; i++) {
  const div = document.createElement("div");
  div.classList.add("grid-item");
  div.id = i;
  div.textContent = i;
  gridContainer.appendChild(div);
}

// Change color logic
changeButton.addEventListener("click", () => {
  const blockId = document.getElementById("block_id").value;
  const color = document.getElementById("colour_id").value;

  // Reset all grid colors to transparent
  const items = document.querySelectorAll(".grid-item");
  items.forEach(item => item.style.backgroundColor = "transparent");

  // Change selected block’s color
  const block = document.getElementById(blockId);
  if (block) {
    block.style.backgroundColor = color;
  } else {
    alert("Invalid block ID! Please enter a number between 1 and 9.");
  }
});

// Reset button logic
resetButton.addEventListener("click", () => {
  const items = document.querySelectorAll(".grid-item");
  items.forEach(item => item.style.backgroundColor = "transparent");
  document.getElementById("block_id").value = "";
  document.getElementById("colour_id").value = "";
});
