const inputSlider = document.getElementById("inputSlider");
const sliderValue = document.getElementById("sliderValue");

const passBox = document.getElementById("passBox");
const lowercaseEl = document.getElementById("Lowcase");
const uppercaseEl = document.getElementById("Uppercase");
const numbersEl = document.getElementById("Numbers");
const symbolEl = document.getElementById("symbols");

const generateBtn = document.getElementById("genBtn");
const copyBtn = document.getElementById("copyIcon");
const passIndicator = document.getElementById("passIndicator");

const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const Numbers = "0123456789";
const symbols = `!@#$%^&*()_+-=[]{}/|:;'",.<>?/"`;

sliderValue.textContent = inputSlider.value;

inputSlider.addEventListener("input", () => {
  sliderValue.textContent = inputSlider.value;
});

function generatePass() {
  const length = inputSlider.value;
  let characters = "";
  let password = "";

  characters += lowercaseEl.checked ? lowercaseLetters : "";
  characters += uppercaseEl.checked ? uppercaseLetters : "";
  characters += numbersEl.checked ? Numbers : "";
  characters += symbolEl.checked ? symbols : "";

  for (let i = 0; i < length; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  passBox.value = password;
  updatePassIndicator();
  //   passBox.textContent = password;
}

generateBtn.addEventListener("click", () => {
  generatePass();
});

updatePassIndicator = () => {
  const passStrength = getpassStrength(passBox.value);
  passIndicator.className = `pass-indicator + ${passStrength}`;
};

function getpassStrength(x) {
  if (x.length <= 10) {
    return "weak";
  } else if (x.length <= 18) {
    return "medium";
  } else {
    return "strong";
  }
}

window.addEventListener("DOMContentLoaded", () => {
  updatePassIndicator();
});

copyBtn.addEventListener("click", () => {
  if (passBox.value != "" || passBox.value >= 1) {
    navigator.clipboard.writeText(passBox);
    copyBtn.innerText = "check";

    setTimeout(() => {
      copyBtn.innerHTML = "content_copy";
    }, 3000);
  }
});
