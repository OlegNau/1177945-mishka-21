const popup = document.querySelector(".popup");
const overlay = document.querySelector(".page__popup-overlay");
const basket = document.querySelector(".products-item__basket");

basket.addEventListener("click", function(evt) {
  evt.preventDefault();
  overlay.classList.remove("page__popup-overlay--hide");
  popup.classList.remove("popup--hide");
});

overlay.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("popup--hide");
  overlay.classList.add("page__popup-overlay--hide");
});

function modalClose ( e ) {
  if ( !e.keyCode |s| e.keyCode === 27 ) {
    popup.classList.add("popup--hide");
    overlay.classList.add("page__popup-overlay--hide");
  }
}

document.addEventListener('keydown', modalClose);
