const hamburgerButton = document.querySelector('#hamburgerButton');
const navigationDrawer = document.querySelector('.nav');
const mainSection = document.querySelector('main');

hamburgerButton.addEventListener('click', (event) => {
  navigationDrawer.classList.toggle('open');
  event.stopPropagation();
});

mainSection.addEventListener('click', (event) => {
  navigationDrawer.classList.remove('open');
  event.stopPropagation();
});
