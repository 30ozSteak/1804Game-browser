let slideIndex = 1;
showSlides(slideIndex)

let plusSlides = (n) => showSlides(slideIndex += n);

function showSlides(n){
  let slides = document.querySelectorAll('.hero-section-literal');


  if(n > slides.length){
    slideIndex = 1
  }

  if(n < 1){
    slideIndex = slides.length;
    console.log(n);
  }

  for(let i = 0; i < slides.length; i++){
    slides[i].style.display = "none";
    console.log(n);
  }
  slides[slideIndex - 1].style.display = "block"
}

showSlides(slideIndex);