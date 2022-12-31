// Initialize the ACE editor
var editor = ace.edit("editor");
editor.session.setMode("ace/mode/javascript");
editor.setOptions({
  enableBasicAutocompletion: true,
  enableLiveAutocompletion: true,
});

document.getElementById("editor").addEventListener("keydown", function (event) {
  if (event.shiftKey && event.key === "Enter") {
    document.getElementById("run").click();
  }
});

document.getElementById("clear-output").addEventListener("click", function () {
  document.getElementById("output").innerHTML = "";
});

function compile() {
  // Highlight keywords, strings, and comments in the code
  // Get the code from the editor
  var code = document.getElementById("editor").innerText;

  // Redirect console.log() output to the output element
  var output = document.getElementById("output");
  console.log = function (str) {
    output.innerHTML += str + "<br>";
  };

  eval(code);
}

document.getElementById("run").addEventListener("click", compile);
