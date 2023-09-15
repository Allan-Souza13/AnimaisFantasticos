const linkExterno = document.querySelector('a[href^="http"]');

function handleLinkExterno(event){
  event.preventDefault();
    console.log('Clicou');
}

linkExterno.addEventListener('click',handleLinkExterno);

const imgs = document.querySelectorAll('img');

function handleImg(event){
  console.log(event.currentTarget);
}


imgs.forEach((img)=>{
  img.addEventListener('click',handleImg)
})
