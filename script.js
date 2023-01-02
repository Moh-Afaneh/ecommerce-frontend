// copy menu for mobile
function copyMenu() {
  var dptPlace = document.querySelector(".departments");
  var dptCategory = document.querySelector(".dpt-cat");
  dptPlace.innerHTML = dptCategory.innerHTML;
  var mainNav = document.querySelector(".header-nav nav");
  var navPlace = document.querySelector(".off-canvas nav");
  navPlace.innerHTML = mainNav.innerHTML;
  var topNav = document.querySelector(".header-top .wrapper");
  var topNavPlace = document.querySelector(".off-canvas .thetop-nav");
  topNavPlace.innerHTML = topNav.innerHTML;
}
copyMenu();
const submenu = document.querySelectorAll(".has-child .icon-small");
submenu.forEach((icon) => icon.addEventListener("click", toggle));
function toggle(e) {
  e.preventDefault();
  submenu.forEach((item) => {
    console.log(item === this);
    item !== this
      ? item.closest(".has-child").classList.remove("expend")
      : null;
  });
  if (this.closest(".has-child").classList !== "expend") {
    this.closest(".has-child").classList.toggle("expend");
  }

  console.log(this);
}
// submenu.style.transform = "rotate(90deg)";
const trigger = document.querySelector(".trigger");
const addClass = document.querySelector(".site");
const triggerClose = document.querySelector(".t-close");
console.log(addClass, triggerClose);
trigger.addEventListener("click", (e) => {
  e.preventDefault();
  addClass.classList.toggle("showMenu");
});
triggerClose.addEventListener("click", (e) => {
  e.preventDefault();
  addClass.classList.remove("showMenu");
});
// Swiper
const swiper = new Swiper(".swiper", {
  // Optional parameters

  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
});
const tClose = document.querySelector(".search-close");
const searchButton = document.querySelector(".t-search");
const showClass = document.querySelector(".site");
searchButton.addEventListener("click", function () {
  showClass.classList.toggle("showSearch");
});
tClose.addEventListener("click", function () {
  showClass.classList.remove("showSearch");
});
const dptButton = document.querySelector(".dpt-cat .dpt-trigger");
const dptClass = document.querySelector(".site");
dptButton.addEventListener("click", function () {
  dptClass.classList.toggle;
});
