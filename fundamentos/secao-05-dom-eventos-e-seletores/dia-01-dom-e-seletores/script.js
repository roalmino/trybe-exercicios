const title = document.getElementById("header-container");
title.style.backgroundColor = "#23B5D3";
title.style.color = "#001021";

// const emergency = document.getElementsByClassName("emergency-tasks");
// for (let index = 0; index < emergency.length; index += 1) {
//   console.log(emergency.length);
//   console.log(index);
//   emergency[index].style.background = "#7F7CAF";
//   emergency[index].children[0].children[0].style.backgroundColor = "#E83F6F";
// }

const urgente = document.querySelectorAll(".emergency-tasks div");
for (let index = 0; index < urgente.length; index += 1) {
  urgente[index].style.backgroundColor = "#7F7CAF";
  urgente[index].children[0].style.backgroundColor = "#E83F6F";
}

const naoUrgente = document.querySelectorAll(".no-emergency-tasks div");
for (let index = 0; index < urgente.length; index += 1) {
  naoUrgente[index].style.backgroundColor = "#98CE00";
  naoUrgente[index].children[0].style.backgroundColor = "#4F7F02";
}
