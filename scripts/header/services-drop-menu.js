/* Element selection */
const servicesButton =
  document.querySelector(".header-nav__list").childNodes[1];
const menuElement = document.querySelector(".services-drop-menu");
const navElement = document.querySelector(".header-nav");
const burgerButton = document.querySelector(".header__burger");
const mobileBackButton = document.querySelector(
  ".services-drop-menu__back-icon"
);

/* Burger click */
function burgerEvent() {
  navElement.classList.toggle("header-nav--active");
}

/* Downdrop of 'services' <li> */
function dropEvent() {
  menuElement.classList.toggle("services-drop-menu--active");
}

/* Click outside of mobile menu */
function outsideClickEvent(e) {
  if (
    e.target.closest(".header-nav") ||
    e.target.closest(".services-drop-menu") ||
    e.target.closest(".header__burger")
  )
    return;
  menuElement.classList.remove("services-drop-menu--active");

  navElement.classList.remove("header-nav--active");
}

export default function initHeaderNav() {
  servicesButton.addEventListener("click", dropEvent);
  mobileBackButton.addEventListener("click", dropEvent);
  burgerButton.addEventListener("click", burgerEvent);
  document.addEventListener("click", outsideClickEvent);
}
