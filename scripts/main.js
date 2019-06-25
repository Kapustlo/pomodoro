// Бургер-меню кнопка
document
  .querySelector(".menu-list__button")
  .addEventListener("click", () =>
    document.querySelector(".menu-list").classList.toggle("menu-list-enable")
  );

// Header Sticky
const header = document.querySelector("#header");

const scrollDown = () => window.pageYOffset >= header.offsetTop ? header.classList.add("sticky") : header.classList.remove("sticky");

window.addEventListener("scroll", scrollDown);