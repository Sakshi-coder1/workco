const box = document.getElementById("box");
const reactionTimeText = document.getElementById("reaction-time");

let startTime;

function showBox() {
  const maxWidth = window.innerWidth - 100;
  const maxHeight = window.innerHeight - 100;
  const randomX = Math.floor(Math.random() * maxWidth);
  const randomY = Math.floor(Math.random() * maxHeight);

  box.style.left = `${randomX}px`;
  box.style.top = `${randomY}px`;
  box.style.backgroundColor = getRandomColor();
  box.style.display = "block";

  startTime = Date.now();
}

function getRandomColor() {
  const colors = ["red", "blue", "green", "purple", "orange"];
  return colors[Math.floor(Math.random() * colors.length)];
}

function appearAfterDelay() {
  setTimeout(showBox, 1000);
}

box.addEventListener("click", () => {
  const endTime = Date.now();
  const reactionTime = (endTime - startTime) / 1000;
  reactionTimeText.textContent = `Reaction Time: ${reactionTime.toFixed(1)} seconds`;

  box.style.display = "none";
  appearAfterDelay(); 
});


appearAfterDelay();
