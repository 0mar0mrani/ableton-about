export default function Video() {
	const videoBody = document.querySelector('.video-section__thumbnail');

	videoBody.addEventListener('click', handleVideoBodyClick);

	function handleVideoBodyClick() {
		hideVideoThumbnail();
	}
	
	function hideVideoThumbnail() {
		videoBody.classList.add('video-section__thumbnail--hidden');
	}
}
