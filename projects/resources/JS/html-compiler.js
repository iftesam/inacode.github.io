// JavaScript for the compiler
const inputEditor = ace.edit("input");
inputEditor.setTheme("ace/theme/monokai");
inputEditor.getSession().setMode("ace/mode/html");
inputEditor.setValue(``);

const outputFrame = document.getElementById("output");

inputEditor.getSession().on("change", function () {
  // Get the input code and compile it
  const code = inputEditor.getValue();
  outputFrame.srcdoc = code;
});

// Compile the code when the webpage is opened
const code = inputEditor.getValue();
outputFrame.srcdoc = code;
const toggleButton = document.getElementById("toggle-button");

toggleButton.addEventListener("click", function () {
  const input = document.getElementById("input");
  const output = document.getElementById("output");
  const currentState = input.style.display;

  if (currentState === "none") {
    input.style.display = "inline-block";
    output.style.display = "inline-block";
    input.style.display = "600px";
    output.style.height = "600px";
    output.style.width = "50%";
    toggleButton.textContent = "Hide Compiler";
  } else {
    input.style.display = "none";
    output.style.display = "block";
    output.style.height = "600px";
    output.style.width = "300%";
    toggleButton.textContent = "Show Compiler";
  }
});

function toggleSideBySide() {
  document.getElementById("compiler").classList.toggle("Hide Compiler");
}

toggleButton.addEventListener("click", toggleSideBySide);
