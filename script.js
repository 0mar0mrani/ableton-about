const menuButton = document.querySelector('.main-navigation__menu-button');
const mainNavigation = document.querySelectorAll('.main-navigation__menu');
const moreNavigation = document.querySelector('.main-navigation__more');
const moreButton = document.querySelector('.main-navigation__more-button');
const logoNavigation = document.querySelector('.main-navigation__logo');

// Menu button
menuButton.addEventListener('click', handleMenuButtonClick);

moreButton.addEventListener('click', handleMoreButtonClick);

// Handlers
function handleMenuButtonClick() {
  toggleMenu();
}

function handleMoreButtonClick() {
  toggleMore();
}

// Functions
function toggleMenu() {
  for (let i = 0; i < mainNavigation.length; i++) {
    mainNavigation[i].classList.toggle('main-navigation__menu--open');
  }

  moreNavigation.classList.toggle('main-navigation__more--open');
  logoNavigation.classList.toggle('main-navigation__logo--open');
  menuButton.classList.toggle('main-navigation__menu-button--open');
}

function toggleMore() {
  moreNavigation.classList.toggle('main-navigation__more--open');
  moreButton.classList.toggle('main-navigation__more-button--open');
}



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

// If more window is open when lower than 1100 px --> closes
window.addEventListener('resize', function () {
  if (
    // if lower than 1100 px, More is open and mobile nav is not open
    window.innerWidth < 1100 &&
    moreNavigation.classList.contains('main-navigation__more--open') &&
    !mainNavigation[0].classList.contains('main-navigation__menu--open')
  ) {
    // Reset More button and it's features
    moreNavigation.classList.remove('main-navigation__more--open');
    moreButton.classList.remove('main-navigation__more-button--open');
  }
});
