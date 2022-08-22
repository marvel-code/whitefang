import { Swiper } from 'swiper'
import $ from 'jquery';

const SLIDE_STOP_TIME_MS = 1000;

$(window).on('load', () => {

    // Initialize
    const slider = $('.slider__animals');
    const slides = slider.children('.animal-slide');
    slides[0].classList.add('left');
    slides[1].classList.add('center');
    slides[2].classList.add('right');
    let leftSlideIndex = 0;
    let centerSlideIndex = 1;
    let rightSlideIndex = 2;

    // Slide loop
    setInterval(() => {
        slides[leftSlideIndex].classList.remove('left');
        slides[centerSlideIndex].classList.remove('center');
        slides[rightSlideIndex].classList.remove('right');
        leftSlideIndex = (leftSlideIndex + 1) % slides.length;
        centerSlideIndex = (centerSlideIndex + 1) % slides.length;
        rightSlideIndex = (rightSlideIndex + 1) % slides.length;
        slides[leftSlideIndex].classList.add('left');
        slides[centerSlideIndex].classList.add('center');
        slides[rightSlideIndex].classList.add('right');
        const zeroSlide = slides[0];
        zeroSlide.remove();
        slider.append(zeroSlide);
    }, SLIDE_STOP_TIME_MS);
});
