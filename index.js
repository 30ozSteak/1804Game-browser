let slideIndex = 1;
showSlides(slideIndex);

let plusSlides = (currentSlide) => showSlides(slideIndex += currentSlide);

function showSlides(currentSlide){
  let slides = document.querySelectorAll('.hero-section-literal');


  if(currentSlide > slides.length){
    slideIndex = 1
  }

  if(currentSlide < 1){
    slideIndex = slides.length;
  }

  for(let i = 0; i < slides.length; i++){
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
};

showSlides(slideIndex);