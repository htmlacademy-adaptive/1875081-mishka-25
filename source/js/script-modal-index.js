let modalButton = document.querySelector(".product-week__button");
let modalWindow = document.querySelector(".modal");
let modalContent = modalWindow.querySelector(".modal__content");

modalContent.onclick = function(evt) {
  evt.stopPropagation();
}

modalWindow.onclick = function(evt) {
  modalWindow.classList.add('modal--close');
}

modalButton.onclick = function () {
  modalButton.removeAttribute('href');
  modalWindow.classList.remove('modal--close');
}
