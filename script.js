const upButton = document.querySelector('.up-button'); 
const downButton = document.querySelector('.down-button');
const sidebar = document.querySelector('.sidebar')
const mainSld = document.querySelector('.main-slide');
const slidesCnt = mainSld.querySelectorAll('div').length;
const container = document.querySelector('.container')
let activeSlideIndex = 0;


sidebar.style.top = `-${(slidesCnt - 1) * 100}vh`;

upButton.addEventListener('click', () => {
	changeSlide('up');
})
	
downButton.addEventListener('click', () => {
	changeSlide('down')
})

function changeSlide(direction) {
	if (direction === 'up') {
		activeSlideIndex++;
		if (activeSlideIndex === slidesCnt) {
			activeSlideIndex = 0;[]
		}
	} else if (direction === 'down') {
		activeSlideIndex--;
		if (activeSlideIndex < 0) {
			activeSlideIndex = slidesCnt - 1;
		}
	}

	const height = container.clientHeight;

	mainSld.style.transform = `translateY(-${activeSlideIndex * height}px)`

	sidebar.style.transform = `translateY(${activeSlideIndex * height}px)` 
}