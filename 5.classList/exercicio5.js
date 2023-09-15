// Adicione a classe ativo a todos os itens do menu
const itensMenu = document.querySelectorAll('.menu a');
itensMenu.forEach((item)=>{
  item.classList.add("ativo");
});

//// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
itensMenu.forEach((remove)=>{
  remove.classList.remove("ativo");
});
itensMenu[0].classList.add('ativo');

// Verifique se as imagens possuem o atributo alt
const imagem = document.querySelectorAll('img');
imagem.forEach((img)=>{
  const possuiAlt = img.hasAttribute('alt');
console.log(`${possuiAlt} todas possuiem alt`);
});

// Modifique o href do link externo no menu
const link = document.querySelector('a[href^="http"]');
link.setAttribute('href', 'https://www.linkedin.com/in/allan-souza-7106381a4/');

