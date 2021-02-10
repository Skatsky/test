let slides = document.querySelectorAll('.slide');
let slidesDiv= document.querySelector('.slides')
let currentSlide = 0;

function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide active';
}

slidesDiv.addEventListener('click', nextSlide);