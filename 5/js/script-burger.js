let button = document.querySelector('.main-nav__toggle');
let wrapper = document.querySelector('.main-nav__menu');

button.onclick = function () {
  button.classList.toggle("main-nav__toggle--close");
  wrapper.classList.toggle('main-nav__menu--hidden');
}
