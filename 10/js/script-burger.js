let button = document.querySelector('.main-nav__toggle');
let listTop = document.querySelector('.main-nav__list');
let listBottom = document.querySelector('.main-nav__users-menu');
const mediaQuery = window.matchMedia('screen and (max-width: 767px)');

function handleMobileChange (l) {
  if (l.matches) {
    button.classList.remove('main-nav__toggle--nojs');
    listTop.classList.add('main-nav__list--js');
    listTop.classList.add('main-nav__list--hidden');

    while (listBottom.childNodes.length != 0) listTop.appendChild(listBottom.childNodes[0]);

    button.onclick = function () {
    button.classList.toggle('main-nav__toggle--close');
    listTop.classList.toggle('main-nav__list--hidden');
    }

  } else {
    button.classList.add('main-nav__toggle--nojs');
    listTop.classList.remove('main-nav__list--js');
    listTop.classList.remove('main-nav__list--hidden');
  }
}

mediaQuery.addEventListener('change', handleMobileChange);
handleMobileChange(mediaQuery);
