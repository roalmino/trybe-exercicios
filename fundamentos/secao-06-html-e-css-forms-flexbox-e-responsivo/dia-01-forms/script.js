const button = document.querySelector("#btn-enviar");
button.addEventListener("click", function () {
  event.preventDefault();
  const texto = document.querySelector("#texto").value;

  console.log(texto.length);
});
