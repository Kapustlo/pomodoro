// Preloader

// document.body.addEventListener("load", () => {
//   setTimeout(() => {
// 	let preloader = document.querySelector(".preloader");
// 	console.log('debug');
	
//     if (!preloader.classList.contains("done")) {
//       preloader.classList.add("done");
//     }
//   }, 1000);
// });

// Бургер-меню кнопка
document.querySelector(".menu-list__button").addEventListener("click", () => {
  document.querySelector(".menu-list").classList.toggle("menu-list-enable");
});
