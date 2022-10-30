const menuButton = document.querySelector('.main-navigation__menu-button');
const mainNavigation = document.querySelectorAll('.main-navigation__menu');
const moreNavigation = document.querySelector('.main-navigation__more');
const moreButton = document.querySelector('.main-navigation__more-button');
const logoNavigation = document.querySelector('.main-navigation__logo');
const subNav = document.querySelector('.sub-navigation');
const videoBody = document.querySelector('.video-section__thumbnail');
const navigation = document.querySelector('.navigation');

// Menu button
menuButton.addEventListener('click', handleMenuButtonClick);
moreButton.addEventListener('click', handleMoreButtonClick);
window.addEventListener('scroll', handleWindowScroll);
videoBody.addEventListener('click', handleVideoBodyClick);
window.addEventListener('resize', handleWindowResize);

// Handlers
function handleMenuButtonClick() {
	toggleMenu();
}

function handleMoreButtonClick() {
	toggleMoreMenu();
}

function handleWindowScroll() {
	toggleSubMenu();
}

function handleVideoBodyClick() {
	hideVideoThumbnail();
}

function handleWindowResize() {
	resetMobileNavigation();
}

// Functions
function toggleMenu() {
	navigation.classList.toggle('navigation--open');

	logoNavigation.classList.toggle('main-navigation__logo--open');
	menuButton.classList.toggle('main-navigation__menu-button--open');
}

function toggleMoreMenu() {
	moreNavigation.classList.toggle('main-navigation__more--open');
	moreButton.classList.toggle('main-navigation__more-button--open');
}

let lastScroll = 0;
let minimumScroll = 150;

function toggleSubMenu() {
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
}

function hideVideoThumbnail() {
	videoBody.classList.add('video-section__thumbnail--hidden');
}

function resetMobileNavigation() {
	// if lower than 1100 px, More is open and mobile nav is not open
	if (
		window.innerWidth < 1100 &&
		moreNavigation.classList.contains('main-navigation__more--open') &&
		!mainNavigation[0].classList.contains('main-navigation__menu--open')
	){
		moreNavigation.classList.remove('main-navigation__more--open');
		moreButton.classList.remove('main-navigation__more-button--open');
	}
	}

