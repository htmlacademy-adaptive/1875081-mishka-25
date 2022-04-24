let button = document.querySelector('.main-nav__toggle');
let wrapper = document.querySelector('.main-nav__menu');

button.classList.remove("main-nav__toggle--nojs");
wrapper.classList.add("main-nav__menu--js");
wrapper.classList.add("main-nav__menu--hidden");

button.onclick = function () {
  button.classList.toggle("main-nav__toggle--close");
  wrapper.classList.toggle('main-nav__menu--hidden');
}
