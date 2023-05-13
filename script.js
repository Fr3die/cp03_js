// Exemplo simples de alerta na página inicial
function bemvindo(){
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

 function validar(){

  let q1 = document.querySelector('input[name="q1"]:checked').value;
  let q2 = document.querySelector('input[name="q2"]:checked').value;
  let q3 = document.querySelector('input[name="q3"]:checked').value;
  let score = 0;
  if (q1 == 'd') {
    score++;
  }
  if (q2 == 'c') {
    score++;
  }
  if (q3 == 'c') {
    score++;
  }
  alert(`Sua pontuação final é ${score} de 3.`);
}

function redirectToCompra(link) {
  window.location.href = link;
}
