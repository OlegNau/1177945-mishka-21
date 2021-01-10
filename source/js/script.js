const menuButton = document.querySelector(".page-navigation__toggle");
const closeMenuButton = document.querySelector(".page-navigation__toggle-close");
const staticElements = document.querySelector(".page-navigation__static-elements");
const mainElements = document.querySelector(".page-navigation__main-elements");
const weekProductButton = document.querySelector(".week-product__to-order");
const popup = document.querySelector(".popup");
const overlay = document.querySelector(".overlay");

menuButton.classList.add("page-navigation__toggle--show");
staticElements.classList.add("page-navigation__hide");
mainElements.classList.add("page-navigation__hide");

menuButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  staticElements.classList.toggle("page-navigation__hide");
  mainElements.classList.toggle("page-navigation__hide");
  menuButton.classList.toggle("page-navigation__toggle-close");
});

if (weekProductButton) {
  weekProductButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    overlay.classList.remove("overlay--hide");
    popup.classList.remove("popup--hide");
  });
}

overlay.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("popup--hide");
  overlay.classList.add("overlay--hide");
});

function modalClose ( e ) {
  if ( !e.keyCode |s| e.keyCode === 27 ) {
    popup.classList.add("popup--hide");
    overlay.classList.add("overlay--hide");
  }
}

document.addEventListener('keydown', modalClose);

const basket = document.querySelector(".products-item__basket");

if (basket) {
  basket.addEventListener("click", function(evt) {
    evt.preventDefault();
    overlay.classList.remove("overlay--hide");
    popup.classList.remove("popup--hide");
  });
}
