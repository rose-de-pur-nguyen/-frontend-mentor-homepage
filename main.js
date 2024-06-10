const menuIcon = document.querySelector('.menu-toggler');
const menu = document.querySelector('.menu');
const closeBtn = document.querySelector('.closeBtn');
const backgroundFilter = document.querySelector('.background-filter');

menuIcon.addEventListener('click', () => {
  menu.classList.toggle('active');
  backgroundFilter.classList.toggle('active');
})

closeBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
  backgroundFilter.classList.toggle('active');
})