// Бургер-меню кнопка
document
  .querySelector(".menu-list__button")
  .addEventListener("click", () =>
    document.querySelector(".menu-list").classList.toggle("menu-list-enable")
  );

const scrollDown = () => window.pageYOffset >= header.offsetTop ? header.classList.add("sticky") : header.classList.remove("sticky");

// Header Sticky
let header = document.querySelector("#header");
window.addEventListener("scroll", scrollDown);