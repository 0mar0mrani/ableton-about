const navigation = document.querySelector('.navigation');
const mainNavigation = document.querySelectorAll('.main-navigation__menu');
const moreNavigation = document.querySelector('.main-navigation__more');
const subNavigation = document.querySelector('.sub-navigation');

const menuButton = document.querySelector('.main-navigation__menu-button');
const moreButton = document.querySelector('.main-navigation__more-button');

const logoNavigation = document.querySelector('.main-navigation__logo');
const videoBody = document.querySelector('.video-section__thumbnail');

// Menu button
menuButton.addEventListener('click', handleMenuButtonClick);
moreButton.addEventListener('click', handleMoreButtonClick);
window.addEventListener('scroll', handleWindowScroll);
videoBody.addEventListener('click', handleVideoBodyClick);
window.addEventListener('resize', handleWindowResize);

// Handlers
function handleMenuButtonClick() {
	toggleMainMenu();
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
	resetMobileMainNavigation()
	resetMoreNavigation();
}

// Functions
let isMainMenuOpen = false;
function toggleMainMenu() {
	navigation.classList.toggle('navigation--open');
	logoNavigation.classList.toggle('main-navigation__logo--open');
	menuButton.classList.toggle('main-navigation__menu-button--open');

	isMainMenuOpen = !isMainMenuOpen;
}

let isMoreMenuOpen = false;
function toggleMoreMenu() {
	moreNavigation.classList.toggle('main-navigation__more--open');
	moreButton.classList.toggle('main-navigation__more-button--open');

	isMoreMenuOpen = !isMoreMenuOpen;
}

let lastScroll = 0;
let minimumScroll = 150;

function toggleSubMenu() {
	const currentScroll = window.pageYOffset;

	//   Scroll down
	if (
		currentScroll > lastScroll &&
		currentScroll > minimumScroll &&
		!subNavigation.classList.contains('sub-navigation--hidden')
	) {
		subNavigation.classList.add('sub-navigation--hidden');
	}

	//   Scroll up
	if (
		currentScroll < lastScroll &&
		subNavigation.classList.contains('sub-navigation--hidden')
	) {
		subNavigation.classList.remove('sub-navigation--hidden');
	}

	lastScroll = currentScroll;
}

function hideVideoThumbnail() {
	videoBody.classList.add('video-section__thumbnail--hidden');
}

function resetMobileMainNavigation() {
	// if greater than 1100 px
	if (window.innerWidth > 1100 && isMainMenuOpen === true){
		navigation.classList.remove('navigation--open');
		logoNavigation.classList.remove('main-navigation__logo--open');
		menuButton.classList.remove('main-navigation__menu-button--open');
	}
}

function resetMoreNavigation() {
	// if lower than 1100 px
	if (window.innerWidth < 1100 && isMoreMenuOpen === true){
		moreNavigation.classList.remove('main-navigation__more--open');
		moreButton.classList.remove('main-navigation__more-button--open');
	}
}

