import { Swiper } from 'swiper'
import $ from 'jquery';

const SLIDE_TRANSITION_TIME_MS = 4000;
const SLIDE_STOP_TIME_MS = 5000;

$(window).on('load', () => {

    // Initialize
    const slider = $('.slider__animals');
    const slides = slider.children('.animal-slide');
    let left = 0;
    slides[left + 0].classList.add('left');
    slides[left + 1].classList.add('center');
    slides[left + 2].classList.add('right');
    slides[left + 3].classList.add('right-2');
    function nextSlide() {
        if (!document.hasFocus())
            return;
        slides.addClass('transition');
        slides[(slides.length + left - 1) % slides.length].classList.remove('left-2')
        slides[(left + 0) % slides.length].classList.remove('left');
        slides[(left + 1) % slides.length].classList.remove('center');
        slides[(left + 2) % slides.length].classList.remove('right');
        slides[(left + 3) % slides.length].classList.remove('right-2');
        left = (left + 1) % slides.length;
        slides[(slides.length + left - 1) % slides.length].classList.add('left-2')
        slides[(left + 0) % slides.length].classList.add('left');
        slides[(left + 1) % slides.length].classList.add('center');
        slides[(left + 2) % slides.length].classList.add('right');
        slides[(left + 3) % slides.length].classList.add('right-2');
    }

    // Slide loop
    setInterval(nextSlide, SLIDE_STOP_TIME_MS);
    setTimeout(nextSlide, SLIDE_STOP_TIME_MS - SLIDE_TRANSITION_TIME_MS);
});
