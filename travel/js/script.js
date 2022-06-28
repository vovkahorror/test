"use strict";

const burgerOn = () => {
  burgerMenu.style.right = "0";
};

const burgerOff = () => {
  burgerMenu.style.right = "-165px";
};

burger.onclick = burgerOn;
burgerCross.onclick = burgerOff;

const burgerLinks = document.querySelectorAll(".burger-menu__link");
for (let i = 0; i < burgerLinks.length; i++) {
  burgerLinks[i].onclick = burgerOff;
}

window.addEventListener("click", (outsideBurger) => {
  const target = outsideBurger.target;
  if (!target.closest(".burger-menu") && !target.closest("#burger")) {
    burgerOff();
  }
});
