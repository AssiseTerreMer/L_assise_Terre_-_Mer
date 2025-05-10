let slideIndex = [1, 1, 1]; // Un tableau avec un index pour chaque carrousel
let slideId = ["carousel1", "carousel2", "carousel3"]; // Identifiants de chaque carrousel

function showSlides(n, no) {
  let i;
  let slides = document.getElementById(slideId[no - 1]).getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) { slideIndex[no - 1] = 1 }
  if (n < 1) { slideIndex[no - 1] = slides.length }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex[no - 1] - 1].style.display = "block";
  dots[slideIndex[no - 1] - 1].className += " active";
}

function plusSlides(n, no) {
  showSlides(slideIndex[no - 1] += n, no);
}

function currentSlide(n, no) {
  showSlides(slideIndex[no - 1] = n, no);
}

document.addEventListener("DOMContentLoaded", function() {
  showSlides(slideIndex[0], 1);
  showSlides(slideIndex[1], 2);
  showSlides(slideIndex[2], 3);
});
