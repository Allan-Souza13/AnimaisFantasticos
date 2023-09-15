const menu = document.querySelector(".menu");

menu.classList.add("ativo");
menu.classList.remove("azul");
menu.classList.toggle("azul");
if (menu.classList.contains("azul")) {
  menu.classList.add("possui-azul");
} else {
  menu.classList.add("não-possui-azul");
}
//---

const animais = document.querySelector('.animais');

animais.attributes;
animais.attributes[0];

console.log(animais.attributes['data-texto']);

//
const img = document.querySelector('img');

const srcImg = img.setAttribute('alt','É uma raposa');
const possuiAlt = img.hasAttribute('alt');

console.log(possuiAlt);
console.log(srcImg);

//

const carro = {
  portas : 4, 
  andar : function(km){
    console.log(`Andou ${km}km/h`);
  },
 

}