let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("box1");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}



document.addEventListener("DOMContentLoaded", function() {
    let button = document.querySelectorAll('.btn');
    button.forEach(function(btn) {
        btn.addEventListener("click", function () {
            showRandomSlide();
        });
    });
    function showRandomSlide() {
        let boxes = document.querySelectorAll('.box1');
        let randomIndex = Math.floor(Math.random() * boxes.length);
        boxes.forEach(function(box) {
            box.style.display = "none";
        });
        boxes[randomIndex].style.display = "block";
    }
});


