let slideIndex = [1, 1, 1, 1];
let slideId = ["carousel1", "carousel2", "carousel3", "carousel4"];

function showSlides(n, no) {
  let i;
  const carousel = document.getElementById(slideId[no - 1]);
  const slides = carousel.getElementsByClassName("mySlides");
  const dots = carousel.getElementsByClassName("dot");

  if (n > slides.length) slideIndex[no - 1] = 1;
  if (n < 1) slideIndex[no - 1] = slides.length;

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex[no - 1] - 1].style.display = "block";
  if (dots.length > 0) {
    dots[slideIndex[no - 1] - 1].className += " active";
  }
}

function plusSlides(n, no) {
  showSlides(slideIndex[no - 1] += n, no);
}

function currentSlide(n, no) {
  showSlides(slideIndex[no - 1] = n, no);
}

document.addEventListener("DOMContentLoaded", function() {
  for (let i = 0; i < slideId.length; i++) {
    showSlides(1, i + 1);
  }
});
