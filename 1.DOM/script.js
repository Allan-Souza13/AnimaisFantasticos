const titulo = document.querySelector('h1');

titulo.innerText; 
titulo.classList;
titulo.id; 
titulo.offsetHeight;  

function callbackh1(){
  console.log('clicou em ', titulo);
}

// titulo.addEventListener('click',callbackh1);
//*-------------------------------------------------*

//Exercicio

const urlPagina = window.location.href;

console.log(urlPagina);
//--------------------------

const ativada = document.querySelector('.ativo');
console.log(ativada);


//----------------------------
const linguagem = window.navigator.language;
console.log('A linguagem do site é: ',linguagem);

//---------------------------

const larguraTela= window.innerWidth;
console.log('A largura da pagina é: ', larguraTela);