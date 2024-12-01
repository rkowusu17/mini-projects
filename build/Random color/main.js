const containerEl = document.querySelector(".container");
const inputEl = document.getElementById("number");
const runBtn = document.getElementById("run");
const output = document.getElementById("outcome");
// const deleteBtn = document.getElementById("delete");

// deleteBtn.addEventListener("click", () => {

// });

runBtn.addEventListener("click", () => {
  containerEl.textContent = "";
  containerEl.style.backgroundColor = "white";

  const num = inputEl.value;
  let numInt = parseInt(num);
  console.log(numInt);

  // function show() {
  // console.log(numInt);
  for (let index = 0; index < numInt; index++) {
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
    numInt = 0;
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
});
