const qrForm = document.getElementById("qr-form");
const qrCode = document.getElementById("qr-code");
const downloadButton = document.getElementById("download-button");
const errorMessage = document.getElementById("error-message");

qrForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const website = document.getElementById("website").value;
  if (!website) {
    errorMessage.style.display = "block";
    return;
  }

  errorMessage.style.display = "none";
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=${website}`;
  qrCode.innerHTML = `<img src="${qrUrl}">`;
  downloadButton.href = qrUrl;
  downloadButton.style.display = "inline-block";
  qrCode.style.display = "block";
});

downloadButton.addEventListener("click", () => {
  downloadButton.style.display = "none";
});
