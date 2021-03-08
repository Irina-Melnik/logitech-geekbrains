const togglerElem = document.querySelector('.toggler');
const bodyElem = document.querySelector('body');
const linksElem = document.querySelector('.menu-links');
const logoDark = document.querySelector('.header__logo_dark');
const logoWhite = document.querySelector('.header__logo_white');

togglerElem.addEventListener('change', togglerHandler);
linksElem.addEventListener('click', linksHandler);

function togglerHandler(e) {
  if (togglerElem.checked) {
    bodyElem.style.overflow = 'hidden';
  } else {
    bodyElem.style.overflow = 'visible';
  }
}

function linksHandler(e) {
  if (togglerElem.checked) {
    togglerElem.checked = false;
    bodyElem.style.overflow = 'visible';
  }
}
