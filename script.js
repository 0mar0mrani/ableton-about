'use strict';
// More button
const moreButton = document.querySelector('.main-navigation__more-button');
const moreNavigation = document.querySelector('.main-navigation__more');

moreButton.addEventListener('click', function () {
  moreNavigation.classList.toggle('main-navigation__more--open');

  const text = moreButton.textContent === 'More +' ? 'More -' : 'More +';

  moreButton.textContent = text;
});

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

// Hide thumbnail and play-svg
const playBody = document.querySelector('.video-section__thumbnail');

playBody.addEventListener('click', function () {
  playBody.classList.add('video-section__thumbnail--hidden');
});
