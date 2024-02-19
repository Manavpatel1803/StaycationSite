const navSlide = ()=> {
    const lines=document.querySelector('.threelines');
    const nav= document.querySelector('.nav-links');
    const navLinks= document.querySelectorAll('.nav-links li');
    //Toogle Nav
    lines.addEventListener('click', ()=> {
         nav.classList.toggle('nav-active');
    //Animate Links
         navLinks.forEach((link,index) =>{
            if(link.style.animation)
            {
                link.style.animation= '';
            }
            else{
                link.style.animation=`navLinkFade 0.5s ease forwards ${index/7 +0.3}s`;
            }
        });
         //Threelines animation
        lines.classList.toggle('toggle');
    });
   
        
}
navSlide();

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("imgdot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
// slides for quotes.
 var index = 1;
displaySlides(index);

function plusSlides(n) {
  displaySlides(index += n);
}

function currentSlide(n) {
  displaySlides(index = n);
}

function displaySlides(n) {
  var i;
  var slides = document.getElementsByClassName("myQuotes");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {index = 1}    
  if (n < 1) {index = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[index-1].style.display = "block";  
  dots[index-1].className += " active";
}
