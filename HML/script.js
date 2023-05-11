// Exemplo simples de alerta na página inicial
window.onload = function() {
  alert("Seja bem-vindo!");
};

var isBackgroundVisible = false;

function changeBackground() {
  var body = document.getElementsByTagName("body")[0];
  var imagemDiv = document.getElementById("imagem");

  isBackgroundVisible = !isBackgroundVisible;

  body.classList.toggle("light-blue-background");
  imagemDiv.style.display = isBackgroundVisible ? "block" : "none";
}