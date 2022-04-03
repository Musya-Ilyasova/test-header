function toggleBurger() {
  let burger = document.querySelector('.header-burger');
  let menu = document.querySelector('.header-links__wrapper');
  let close = document.querySelector('.header-links__close');
  burger.addEventListener('click', () => {
    menu.classList.add('open');
    body.style.overflow="hidden";
  })
  close.addEventListener('click', () => {
    menu.classList.remove('open');
    body.style.overflow="";
  })
}

function toggleSearch() {
  let search = document.querySelector('.menu-search__btn');
  let input = document.querySelector('.menu-search__input');
  search.addEventListener('click', () => {
    input.focus();
  })
  input.addEventListener('focus', () => {
    input.classList.add('show');
    console.log('xxxx');
  })

  input.addEventListener('blur', () => {
    input.classList.remove('show');
    console.log('jjjj');
  })

}

toggleBurger();
toggleSearch();

