// const close = document.querySelectorAll("a.menu__link");

const sub = document.querySelectorAll("ul.menu_sub");
const menuAll = Array.from(document.querySelectorAll("li.menu__item"));
const stopLink = document.querySelectorAll("a.menu__link");

stopLink.addEventListener("click", function(event) {
  event.preventDefault();
}, false);

menuAll.forEach(element => {
    element.querySelector("a").onclick = () => {
        sub.forEach(elementUl => elementUl.className = "menu menu_sub");
        element.querySelector("ul").className = "menu menu_sub menu_active";
        return false;
    }
});


