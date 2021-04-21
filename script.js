const hamburger = document.getElementById('hamburger');

hamburger.addEventListener('click', ()=> {
  let hidden = document.querySelector('.hidden');
  hidden.classList.toggle('open');

  if(hidden.classList.contains('open')){
    hamburger.src = 'images/icon-close.svg';
  } else {
    hamburger.src = 'images/icon-hamburger.svg';
  }
})
