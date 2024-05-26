let slides = document.querySelectorAll('.slide .slide-item');
let currentSlide = 0;
let pre = document.querySelector('.btns .Previous');
let next = document.querySelector('.btns .next');

function showSlideOnPage(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.style.display = "block";
        } else {
            slide.style.display = "none";
        }
    });
}

function updateButtonOnPage() {
    if (currentSlide === 0) {
        pre.style.display = "none";
    } else {
        pre.style.display = "block";
    }

    if (currentSlide === slides.length - 1) {
        next.style.display = "none";
    } else {
        next.style.display = "block";
    }
}

function changeSlide(direction) {
    currentSlide += direction;
    showSlideOnPage(currentSlide);
    updateButtonOnPage();
}

pre.addEventListener('click', () => {
    changeSlide(-1);
});

next.addEventListener('click', () => {
    changeSlide(1);
});

showSlideOnPage(currentSlide);
updateButtonOnPage();