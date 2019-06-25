// Бургер-меню кнопка
document
  .querySelector(".menu-list__button")
  .addEventListener("click", () =>
    document.querySelector(".menu-list").classList.toggle("menu-list-enable")
  );

// Header Sticky
let header = document.querySelector("#header");
window.addEventListener("scroll", scrollDown);

function scrollDown() {
  if (window.pageYOffset >= header.offsetTop) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
