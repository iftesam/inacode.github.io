// JavaScript to show and hide the pop-up and modal
document.getElementById("popup").addEventListener("click", function () {
  // show the modal element when the pop-up is clicked
  document.getElementById("modal").style.display = "block";
});

document.getElementById("close-button").addEventListener("click", function () {
  // hide the modal element when the close button is clicked
  document.getElementById("modal").style.display = "none";
});

// get the modal element
const modal = document.getElementById("modal");

// store the mouse position relative to the modal element
let isDragging = false;
let currentMousePos = { x: 0, y: 0 };
let initialMousePos = { x: 0, y: 0 };
let initialModalPos = { x: 0, y: 0 };

// handle mousedown events on the modal element
modal.addEventListener("mousedown", (event) => {
  isDragging = true;
  // store the current mouse position
  currentMousePos.x = event.clientX;
  currentMousePos.y = event.clientY;
  // store the initial mouse position and modal position
  initialMousePos.x = event.clientX;
  initialMousePos.y = event.clientY;
  initialModalPos.x = modal.offsetLeft;
  initialModalPos.y = modal.offsetTop;
});

// handle mousemove events on the document
document.addEventListener("mousemove", (event) => {
  if (isDragging) {
    // update the current mouse position
    currentMousePos.x = event.clientX;
    currentMousePos.y = event.clientY;
    // calculate the change in mouse position
    const dx = currentMousePos.x - initialMousePos.x;
    const dy = currentMousePos.y - initialMousePos.y;
    // update the modal element's position based on the change in mouse position
    modal.style.left = `${initialModalPos.x + dx}px`;
    modal.style.top = `${initialModalPos.y + dy}px`;
  }
});
// handle mouseup events on the document
document.addEventListener("mouseup", (event) => {
  isDragging = false;
});
document
  .getElementById("minimize-button")
  .addEventListener("click", function () {
    var modal = document.getElementById("modal");
    if (modal.style.display === "none") {
      modal.style.display = "block";
    } else {
      modal.style.display = "none";
    }
  });
document
  .getElementById("minimize-button")
  .addEventListener("click", function () {
    document.getElementById("modal").style.display = "none";
    document.querySelector(".bubble").style.display = "block";
  });
document.querySelector(".bubble").addEventListener("click", function () {
  document.getElementById("modal").style.display = "block";
  this.style.display = "none";
});
