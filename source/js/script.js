const menuButton = document.querySelector(".page-navigation__toggle");
const closeMenuButton = document.querySelector(".page-navigation__toggle-close");
const staticElements = document.querySelector(".page-navigation__static-elements");
const mainElements = document.querySelector(".page-navigation__main-elements");

$(function () {
  $('.staticElements').addClass("hpage-navigation__hide");
});

menuButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  staticElements.remove("page-navigation__hide");
  mainElements.remove("page-navigation__hide");
}
