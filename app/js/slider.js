/* Индекс слайда по умолчанию */
var slideIndex = 1;
showSlides(slideIndex);

/*
function plusSlide() {
    showSlides(slideIndex += 1);
}


function minusSlide() {
    showSlides(slideIndex -= 1);
}
*/
/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slider__slide");
    var dots = document.getElementsByClassName("slider__dots-item");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
}
