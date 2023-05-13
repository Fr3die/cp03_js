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
};


function validar(){

  let q1 = document.querySelector('input[name="q1"]:checked').value;
  let q2 = document.querySelector('input[name="q2"]:checked').value;
  let q3 = document.querySelector('input[name="q3"]:checked').value;
  let score = 0;
  if (q1 == 'd') {
    score++;
  };
  if (q2 == 'c') {
    score++;;
  };
  if (q3 == 'c') {
    score++;
  };
 alert(`Sua pontuação final é ${score} de 3.`);
};

function redirectToCompra(link) {
  window.location.href = link;
};

var imagens = {
  'fidelito': './imagens/fidelito.jpg',
  'omanifesto': './imagens/omanifesto.jpg',
  'marxismo': './imagens/marxismo.jpg',
  'obra1': './imagens/obra1.jpg',
  'votos': './imagens/votos.jpg',
  'arte2': './imagens/arte2.jpg'
};

var index = 0;
var time = 4000;

function slideShow(){
  document.getElementById('slide').src = imagens[Object.keys(imagens)[index]];
  index++;
  if (index == Object.keys(imagens).length){index = 0;}
  setTimeout(slideShow, time);
}

function enviarFormulario(){
  let usuario=document.getElementById("usuario").value
  let email=document.getElementById('email').value
  let telefone=document.getElementById('telefone').value
  const validateEmail = (email) => {
      return email.match(
       /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      );
    };
  if (email == (email)){
      alert("mail invalido")    
  
  }
  else{
      alert("email invalido")
  }
  if(usuario =="" && email ==""){
  alert ('Preencha todos os campos')
  } 
  else{
      alert("Informações enviadas")
      console.log(usuario, email, telefone)
  }
}

slideShow();




