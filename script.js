'use strict';

// Hide sub bar on scroll down and show on scroll up
const subNav = document.querySelector('.sub-navigation');
let lastScroll = 0;
let minimumScroll = 150;

window.addEventListener('scroll', function () {
  const currentScroll = window.pageYOffset;

  //   Scroll down
  if (
    currentScroll > lastScroll &&
    currentScroll > minimumScroll &&
    !subNav.classList.contains('sub-navigation--hidden')
  ) {
    subNav.classList.add('sub-navigation--hidden');
  } else {
  }

  //   Scroll up
  if (
    currentScroll < lastScroll &&
    subNav.classList.contains('sub-navigation--hidden')
  ) {
    subNav.classList.remove('sub-navigation--hidden');
  }

  lastScroll = currentScroll;
});
