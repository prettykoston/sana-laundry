const servicesButton =
  document.querySelector(".header-nav__list").childNodes[1];
const menuElement = document.querySelector(".services-drop-menu");

function dropEvent() {
  menuElement.classList.toggle("services-drop-menu--active");
  console.log("sadasd");
}

export default function initDrop() {
  servicesButton.addEventListener("click", dropEvent);
  console.log(servicesButton);
}
