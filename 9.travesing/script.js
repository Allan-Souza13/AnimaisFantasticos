// const h1 = document.querySelector('h1');
// console.log(h1.outerHTML);
// console.log(h1.innerHTML);
// h1.innerHTML = '<p>Texto Novo</p>';

// const lista = document.querySelector('.animais-lista');

// const animais = document.querySelector('.animais')
// const contato = document.querySelector('.contato');
// const titulo = contato.querySelector('.titulo');

const h1 = document.querySelector('h1');

const faq = document.querySelector('.faq');

const cloneH1 = h1.cloneNode(true);

faq.appendChild(cloneH1);