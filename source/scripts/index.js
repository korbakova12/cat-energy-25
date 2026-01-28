/* в этот файл добавляет скрипты*/
const navToggle = document.querySelector('.main-header__toggle');
const mainNav = document.querySelector('.main-navigation');

navToggle.classList.remove('main-header__toggle--nojs');
mainNav.classList.remove('main-navigation--nojs');

navToggle.addEventListener('click', () => {
  if (mainNav.classList.contains('main-navigation--closed')) {
    mainNav.classList.remove('main-navigation--closed');
    mainNav.classList.add('main-navigation--opened');

    navToggle.classList.remove('main-header__toggle--closed');
    navToggle.classList.add('main-header__toggle--opened');
  } else {
    mainNav.classList.remove('main-navigation--opened');
    mainNav.classList.add('main-navigation--closed');

    navToggle.classList.remove('main-header__toggle--opened');
    navToggle.classList.add('main-header__toggle--closed');
  }
});
