export default function Video() {
	// Query Selector
	const videoBody = document.querySelector('.video-section__thumbnail');

	// Event Listener
	videoBody.addEventListener('click', handleVideoBodyClick);

	// Handlers
	function handleVideoBodyClick() {
		hideVideoThumbnail();
	}
	
	// Methods
	function hideVideoThumbnail() {
		videoBody.classList.add('video-section__thumbnail--hidden');
	}
}
