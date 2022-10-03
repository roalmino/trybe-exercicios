function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.
function createDaysoftheMonth() {
  const decemberDaysList = [
    29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];

  const daysList = document.querySelector("#days");
  for (let index in decemberDaysList) {
    const dayLi = document.createElement("li");
    const number = decemberDaysList[index];

    dayLi.innerHTML = number;
    dayLi.className = "day";
    dayLi.addEventListener("mouseenter", aumentarLetra);
    dayLi.addEventListener("mouseleave", diminuirLetra);
    dayLi.addEventListener("click", colocaSelecionado);

    if (number == 24 || number == 25 || number == 31) {
      dayLi.classList.add("holiday");
    }

    if (number == 4 || number == 11 || number == 18 || number == 25) {
      dayLi.classList.add("friday");
    }

    daysList.appendChild(dayLi);
  }
}

createDaysoftheMonth();

function createButton(name, idName) {
  const buttonContainer = document.querySelector(".buttons-container");
  const botao = document.createElement("button");

  botao.innerText = name;
  botao.id = idName;

  buttonContainer.appendChild(botao);
}

createButton("Feriados", "btn-holiday");

const buttonHoliday = document.querySelector("#btn-holiday");

buttonHoliday.addEventListener("click", function () {
  const holiday = document.getElementsByClassName("holiday");
  for (let days of holiday) {
    if (days.style.backgroundColor == "pink")
      days.style.backgroundColor = "rgb(238,238,238)";
    else days.style.backgroundColor = "pink";
  }
});

createButton("Sexta-fera", "btn-friday");

const buttonFriday = document.querySelector("#btn-friday");

const fridayyNumber = [4, 11, 18, 25];
buttonFriday.addEventListener("click", function () {
  const friday = document.getElementsByClassName("friday");
  for (let index in friday) {
    if (friday[index].innerText == fridayyNumber[index])
      friday[index].textContent = "Sextou!";
    else friday[index].innerText = fridayyNumber[index];
  }
});

function aumentarLetra(event) {
  const item = event.target;
  item.style.fontSize = "28px";
}

function diminuirLetra(event) {
  const item = event.target;
  item.style.fontSize = "20px";
}

const buttonAdd = document.querySelector("#btn-add");

const taskContainer = document.querySelector(".my-tasks");

buttonAdd.addEventListener("click", function () {
  const tarefaInput = document.querySelector("#task-input").value;
  const span = document.createElement("span");

  span.innerText = tarefaInput;
  adicionarCor();
  taskContainer.appendChild(span);
});

let cores = [0, "#799496", "#D3FAC7", "#353535", "#51291E"];
function adicionarCor() {
  const div = document.createElement("div");
  div.className = "task";

  let indexA = Math.ceil(Math.random() * 4);
  div.style.backgroundColor = cores[indexA];
  div.addEventListener("click", verificaSelecionado);

  taskContainer.appendChild(div);
}

function verificaSelecionado(event) {
  const item = event.target;
  console.log(item);
  item.classList.toggle("selected");
}

function colocaSelecionado(event) {
  const divSelected = document.querySelector(".selected");
  const dayItem = event.target;

  dayItem.style.backgroundColor = divSelected.style.backgroundColor;
  verificaSelecionado(divSelected);
}
