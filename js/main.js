



const iconMenu = document.querySelector('.burger');
const menuMenu = document.querySelector('.menu__list');
if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle('lock');
    iconMenu.classList.toggle('active');
    menuMenu.classList.toggle('active');
  });
}


var mixer = mixitup('.portfolio__content');