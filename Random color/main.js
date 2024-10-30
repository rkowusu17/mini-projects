const containerEl = document.querySelector(".container");

for (let index = 0; index < 24; index++) {
  const colorContainerEl = document.createElement(`div`);
  colorContainerEl.classList.add("color-container");

  const colorCodeEl = document.createElement(`span`);
  colorCodeEl.classList.add("color-code");

  colorContainerEl.appendChild(colorCodeEl);
  const copyBtn = document.createElement("button");
  copyBtn.innerText = "Copy";
  colorContainerEl.appendChild(copyBtn);

  containerEl.appendChild(colorContainerEl);
}

function randomColor() {
  const chars = "0123456789BCDEF";
  const colorCodeLength = 6;

  let colorCode = "";

  for (let index = 0; index < colorCodeLength; index++) {
    const randomNumber = Math.floor(Math.random() * chars.length);
    colorCode += chars.substring(randomNumber, randomNumber + 1); // Substring will give you the sub of a string indexing from (a,b)
  }
  return colorCode;
}

const mainColorContainerEls = document.querySelectorAll(".color-container");

function generateColor() {
  for (let i = 0; i < mainColorContainerEls.length; i++) {
    const colorContainerEl = mainColorContainerEls[i];
    const newcolorCode = randomColor();
    const colorCodeEl = colorContainerEl.querySelector(".color-code");

    colorContainerEl.style.backgroundColor = "#" + newcolorCode;

    colorCodeEl.innerText = "#" + newcolorCode;
  }
}

generateColor();

mainColorContainerEls.forEach((colorContainerEl) => {
  const copyBtn = colorContainerEl.querySelector("button");
  const colorCodeEl = colorContainerEl.querySelector(".color-code");

  copyBtn.addEventListener("click", () => {
    const colorCode = colorCodeEl.innerText;
    copyClipBoard(colorCode);
  });
});

function copyClipBoard(text) {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      alert(`Color code ${text} has been copied to clipboard`);
    })
    .catch((error) => {
      console.log("failed to copy to clipboard", error);
    });
}
