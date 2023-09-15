// Document Object Model(DOM)

//Interface que representa o documento HTML ou XML ATRAVES DE OBJETOS.

console.log(window);
//window é o objseto global do browser
//possui diferentes métodos e propiedades

window.innerHeight// retorna a altura do browser

//*----------------------------------------------*
//Node

//Toda tag html é representada pelo objeto Element e por isso herda os seus métodos e propiedades. Element é um tipo de objeto Node.

const titulo = document.querySelector('h1');

titulo.innerText; // retorna o texto
titulo.classList;// retorna as classes;
titulo.id; // retorna o id;
titulo.offsetHeight; //retorna a altura do elemento;

titulo.addEventListener('click', callback);
//ativa a função callback ao click no titulo;[

// /--------------------------------------------------------/

// EXERCICIO 1

// Retorne o url da página atual utilizando o objeto window
window.location.href


// Seleciona o primeiro elemento da página que
// possua a classe ativo
const ativada = document.querySelector('.ativo');


// Retorne a linguagem do navegador
const linguagem = window.navigator.language;
console.log(linguagem);


// Retorne a largura da janela 
const larguraTela= window.innerWidth;
console.log('A largura da pagina é: ', larguraTela);
//*----------------------------------------/

//ID

//getElementById Seleciona e retorna elementos do DOM

//Seleciona pelo ID
const animaisSection = document.getElementById('animais');
const contatoSection = document.getElementById('contato');

//Retorna null caso não exista
const naoExiste = document.getElementById('teste');

//Classe e Tag

// 'getElementByClassName' e 'getElementByTagName'
//Seleciona e retornam uma lista de elementos do DOM. A lista retornada está ao vivo, significa que se elementos forem adicionados, ela será automaticamente atualizada.

//seleciona pela classe, retorna uma HTMLCollection
const gridSection = document.getElementsByClassName('grid-section');
const contato = document.getElementsByClassName('grid-section contato');

//seleciona todas as UL's, retorna uma HTMLCollection
const ul = document.getElementsByClassName('ul');

// Retorna o primeiro elemento
console.log(gridSection[0]);


//------------------------------------//

//ARRAY-Like

//HTMLCollection e NodeList são array-like, parecem uma array mas não são. O método de Array "forEach()" por exemplo, existe apenas em NodeList

const gridSection1 = document.querySelectorAll('.grid-section');

gridSection.forEach(function(gridItem, index, array){
gridItem.classList.add('azul');
console.log(index);//index do item do array
console.log(array);// a array completa
});

// é possivel transformar array-like em uma Array releaseEvents, utilizando o metodo "Array.from(gridSection".

// /------------------------------------------------

// EXERCICIO

// Retorne no console todas as imagens do site

// Retorne no console apenas as imagens que começaram com a palavra imagem

// Selecione todos os links internos (onde o href começa com #)

// Selecione o primeiro h2 dentro de .animais-descricao

// Selecione o último p do site


//*---------------------------------/

//ForEach
//Constatemente vamos selecionar uma lista de itens do DOM. A melhor forma para interagirmos com os mesmos é utilizando o método forEach.
// const imgs = document.querySelectorAll('img');
// imgs.forEach(function(item) {
//   console.log(item);
// });

//Parâmetros do forEach

// Oprimeiro parâmetro é o callBack, ou seja, a função que será ativada a cada item. Esse função pode receber três parametros: valorAtual, index e array:

const imgs = document.querySelectorAll('img');

imgs.forEach(function(item, index, array) {
  console.log(item);// o item atual no loop
  console.log(index);//o numero do index;
  console.log(array);// a Array  completa
}); 


//--------------------------*
//Arrow Function

// Sintaxe curta em relação a "function expression". Basta remover a palavra chave function e adicionar a far arraw "=>" após os argumentos.

const  img = document.querySelectorAll('img');
img.forEach((item) => {
  console.log(item);
})

///------------------------------

//EXERCICIO

// Mostre no console cada parágrado do site

// Mostre o texto dos parágrafos no console

// // Como corrigir os erros abaixo:
// const imgs1 = document.querySelectorAll('img');

// imgs.forEach(item, index => {
//   console.log(item, index);
// });

// let i = 0;
// imgs.forEach( => {
//   console.log(i++);
// });

// imgs.forEach(() => i++);

//*-------------------------------------------//

//classList 
//Retorna uma lista com as classes do elemento. Permite adicionar, remover e verificar se contem.

const menu = document.querySelector('.menu');

menu.className; //string
menu.classList;// lista de classes
menu.classList.add('ativo');//
menu.classList.add('ativo', 'mobile'); //duas classes
menu.classList.remove('ativo');
menu.classList.toggle('ativo'); //adiciona/remove a classe
menu.classList.contains('ativo');//true ou false
menu.classList.replace('ativo', 'inativo');
 

//---------
//attributes
//Retorna uma array-like com os atributos do elemento.
const animais  = document.querySelector('.animais');
animais.attributes; // retorna todos os atributos
animais.attributes[0];// retorna o primeiro atributo

//getAttribute e setAttribute

// Métodos que retornam ou define de acordo com o atributo selecionado

const img1 = document.querySelector('img');

img1.getAttribute('src'); // valor do src
img1.setAttribute('alt', 'Texto Alternativo'); //muda o alt
img1.hasAttribute('id'); //true / false
img1.removeAttribute('alt');// remove o alt
img1.hasAttribute();// true / false se tem algum atributo
//é muito comum métodos de get e set;


//Read Only vc Writable
//Existem propiedades que não permitem a mudança de seus valores, essas são considerados Read Only, ou seja, apenas leitura.

const animais1 = document.querySelector('.animais');

animais1.className; // STRING COM O NOME DAS CLASSES
animais1.className = 'azul'// SUBSTITUI COMPLETAMENTE A STRING
animais1.className += ' vermelho'; //ADICIONA VERMELHO Á STRING
animais1.attributes = 'class="ativo"'; //NÃO FUNCIONA, read-only
//Lembre-se que podemos modificar o valor de uma propiedade "objeto.propiedade = '' "

//EXERCICIO 5

// Adicione a classe ativo a todos os itens do menu

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro

// Verifique se as imagens possuem o atributo alt

// Modifique o href do link externo no menu

//--------*-*-*-*-*-*-*-*-*-**-*-*-*-*-*--*-*-*-*-*-*-*-*

//**Height e Width

//Estas são propiedades e métodos dos objetos "Element" e "HTMLElement", a maioria delas são Read Only

const section = document.querySelector('.animais');

section.clientHeight; // height + padding
section.offsetHeight; // height + padding + border
section.scrollHeight; // height total, mesmo dentro de scroll

// Mesma coisa para o innerWidth, "clientWidth"...

//**offSetTop e offSettLeft
const section2 = document.querySelector('.animais');

//Distancia entre o topo do elemento e o topo da pagina
section2.offsetTop;

//Distância entre o canto esquerdo do elemento
//e o canto esquerdo da pagina
section2.offsetLeft;

//**getBoundingClientRect()
// Método que retorna um objeto com valores de width, height, distancia do elemento e mais.

const section3 = document.querySelector('.animais');

const rect = section3.getBoundingClientRect();
rect.height; //height do elemento
rect.width; // width do elemento
rect.top; // distancia entre o topo do elemento e o scroll

//**WINDOW

window.innerWidth; //width da janela
window.outerWidth; //soma a dev tools tambem
window.innerHeight;// height da janela
window.outerHeight;// soma a varra de endereço

window.scrollY; //distancia total do scroll horizontal
window.scrollX; // distancia total do scroll vertical

if(window.innerWidth < 600) {
  console.log('Tela menor que 600px');
}

//**matchMedia():
//Utilize um media-query como no CSS para verificar a largura do browser
const small = window.matchMedia('(max-width: 600px)');
if(small.matches){
  console.log('Tela menor que 600px')
}else{
  console.log('Tela maior que 600px')
}

//EXERCICIO 6

// Verifique a distância da primeira imagem
// em relação ao topo da página

// Retorne a soma da largura de todas as imagens

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

//***addEventListener

//Adicionar uma função ao elemento, esta chamada de "callback",que será ativada assim que certo "evento" ocorrer neste elemento.

const img4 = document.querySelector('img');

//elemento.addEventListener(event, callback, options)
img4.addEventListener('click', function(){
  console.log('clicou');
})
//ou
function callback(){
  console.log('clicou');
}

img4.addEventListener('click',callback);


//*Propiedades do Event

const animaisLista = document.querySelectorAll('.animais-lista');

function executarCallback(event){
  const currentTarget = event.currentTarget; //this
  const target = event.target;//onde o clique ocorreu
  const type = event.type;// tipo do evento
  const path = event.path; 
  console.log(currentTarget, target, type, path);
}

animaisLista.addEventListener('click', executarCallback);


//*forEach e Eventos

//O método "addEventListener" é adicionado a um unico elemento, então é necessario um loop entre elementos de uma lista, para adicionarmos á cada um deles.

const imgs1 = document.querySelector('img');

function imgSrc(event){
  const src = event.currentTarget.getAttribute('src');
  console.log(src);
}

imgs1.forEach((img)=>{
  img.addEventListener('click', imgSrc);
});

//EXERCICIO 7

// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

// Se o usuário clicar na tecla (t), aumente todo o texto do site. 

//*---------------------------------*/

//outerHTML, innerHTML e innerText

// Propiedades que retornam uma string contendo o html ou texto. É possivel atribuir um novo valor para as mesmas
// "element.innerText = 'Novo texto'"

const menu9 = document.querySelector('.menu');

menu.outerHTML; //todo  o html do elemento
menu.innerHTML;// html interno
menu.innerText; //texto sem tags

menu.innerText = '<p>Textp</p>'; //a tag como texto
menu.innerHTML = '<p>Texto</p>';//a tag é renderizada

//*Transversing
//como navegar pelo DOM, utilizando suas propiedades e métodos.

const lista = document.querySelector('.animais-lista');

lista.parentElement; //pai
lista.parentElement.parentElement;// pai do pai
lista.previousElementSibling; //elemento acima
lista.nextElementSibling;//elemento abaixo

lista.children; //HTMLCollection com os filhos
lista.children[0]; //primeiro Filho
lista.children[--lista.children.length];//ultimo filho

lista.querySelectorAll('li');//todas as LI's
lista.querySelector('li:last-child');//ultimo filho

//**Manipulando Elementos
// É possível mover elementos no dom com métodos de Node.
const lista2 = document.querySelector('.animais-lista');
const contato2 = document.querySelector('.contato');
const titulo2 = contato.querySelector('.titulo');

contato.appendChild(lista2); // move lista2 para o final de contato
contato.insertBefore(lista2, titulo); // insere a lista2 antes de titulo
contato.removeChild(titulo); // remove titulo de contato
contato.replaceChild(lista2, titulo); // substitui titulo por lista2

//*-----*-
//Novos Elemenetos

//Podemos criar novos elementos com o metodo
// "CreateElement()"

const animais2 = document.querySelector('.animais');

const novoH1 = document.querySelector('h1');
novoH1.innerText = 'Titulo novo';
novoH1.classList.add('titulo');

animais.appendChild(novoH1);

//***---
//Clonar Elementos
//Todo elemento selecionado é unico. Para criarmos um novo elemento baseado no anterior, é necessario utilizar o metodo "cloneNode()"

const titulo1 = document.querySelector('h1');
const titulo3 = document.querySelector('h1');
const novoTitulo = title;
//titulo, titulo2 e novoTitulo são iguais

const cloneTitulo = titulo.cloneNode(true);
const contato1 =   document.querySelector('.contato');
contato1.appendChild(cloneTitulo);


//EXERCICIO 9
// Duplique o menu e adicione ele em copy

// Selecione o primeiro DT da dl de Faq

// Selecione o DD referente ao primeiro DT

// Substitua o conteúdo html de .faq pelo de .animais
