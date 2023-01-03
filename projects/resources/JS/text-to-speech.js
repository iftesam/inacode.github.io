const textarea = document.getElementById("text");
const speakButton = document.getElementById("speak");
const speedInput = document.getElementById("speed");
const stopButton = document.getElementById("stop");
const voiceSelect = document.getElementById("voice");

speechSynthesis.addEventListener("voiceschanged", populateVoices);

function populateVoices() {
  const voices = speechSynthesis
    .getVoices()
    .filter((voice) => voice.lang.startsWith("en"));
  voiceSelect.innerHTML = "";
  voices.forEach((voice) => {
    const option = document.createElement("option");
    option.textContent = voice.name + " (" + voice.lang + ")";
    option.setAttribute("data-lang", voice.lang);
    option.setAttribute("data-name", voice.name);
    if (voice.name === "Samantha") {
      option.setAttribute("selected", "selected");
    }
    voiceSelect.appendChild(option);
  });
}

populateVoices();

speakButton.addEventListener("click", () => {
  const text = textarea.value;
  const selectedVoice =
    voiceSelect.selectedOptions[0].getAttribute("data-name");
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.voice = speechSynthesis
    .getVoices()
    .find((voice) => voice.name === selectedVoice);
  window.speechSynthesis.speak(utterance);
});
stopButton.addEventListener("click", () => {
  window.speechSynthesis.cancel();
});
