let modalButtons=document.querySelectorAll(".product__button"),modalWindow=document.querySelector(".modal"),modalContent=modalWindow.querySelector(".modal__content");for(let o of modalButtons)modalContent.onclick=function(o){o.stopPropagation()},modalWindow.onclick=function(o){modalWindow.classList.add("modal--close")},o.onclick=function(){o.removeAttribute("href"),modalWindow.classList.remove("modal--close")};