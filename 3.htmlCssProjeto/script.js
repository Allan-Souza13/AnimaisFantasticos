const animaisSection = document.getElementById('animais');
const contatoSection = document.getElementById('contato');

const naoExiste = document.getElementById('teste');

console.log(animais);
console.log(contatoSection);
console.log(naoExiste);
//-----------------------------------//

//getElementByClassName
const gridSection = document.getElementsByClassName('grid-section');
const contato = document.getElementsByClassName('grid-section contato');
const ul = document.getElementsByClassName('ul');
console.log(gridSection[0]);


//querySelector
const primeiraLi = document.querySelector('li');
console.log(primeiraLi);

const primeiraUl = document.querySelector('ul');
console.log(primeiraUl);

const linksInterno = document.querySelector('[href^="#"]');
console.log(linksInterno);


//-----------------------------//
//querySelectorAll
const animaisImg = document.querySelectorAll('.animais img');
console.log(animaisImg[2]);
//-----------------------//

const gridSectionHTML =  document.getElementsByClassName('grid-section');

const gridSectionNode = document.querySelectorAll('.grid-section');

primeiraUl.classList.add('grid-section');

console.log(gridSectionHTML[0]);
console.log(gridSectionNode[0]);


gridSectionNode.forEach(function(item,index){
  console.log(item);
});

const arrayGrid = Array.from(gridSectionHTML);

arrayGrid.forEach(function(item){
  console.log(item);
})