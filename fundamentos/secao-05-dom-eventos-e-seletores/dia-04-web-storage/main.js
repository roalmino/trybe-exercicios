const mainContainer = document.querySelector(".main-container");
const texts = document.getElementsByClassName("text");

function changeBackground() {
  const inputColor = document.querySelector("#input-background").value;

  mainContainer.style.backgroundColor = inputColor;
  localStorage.setItem("backgroundColor", inputColor);
}

function changeText() {
  const inputColor = document.querySelector("#input-text-color").value;
  localStorage.setItem("textColor", inputColor);
  const inputFontSize = document.querySelector("#input-font-size").value;
  localStorage.setItem("textSize", inputFontSize);
  const inputLineHeight = document.querySelector("#input-line-height").value;
  localStorage.setItem("textLineHeight", inputLineHeight);

  for (let index in texts) {
    texts[index].style.color = inputColor;
    texts[index].style.fontSize = inputFontSize + "px";
    texts[index].style.lineHeight = inputLineHeight + "px";
  }
}

function inicializacao() {
  const savedBackground = localStorage.getItem("backgroundColor");
  const savedTextColor = localStorage.getItem("textColor");
  const savedTextSize = localStorage.getItem("textSize");
  const savedTextLineHeight = localStorage.getItem("textLineHeight");

  mainContainer.style.backgroundColor = savedBackground;
  for (let index in texts) {
    texts[index].style.color = savedTextColor;
    texts[index].style.fontSize = savedTextSize + "px";
    texts[index].style.lineHeight = savedTextLineHeight + "px";
  }
}

const button = document.querySelector(".main-button");
button.addEventListener("click", alterarPref);

function alterarPref() {
  changeBackground();
  changeText();
}

// Chamada das funções
inicializacao();
