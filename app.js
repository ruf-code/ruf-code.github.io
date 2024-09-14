document.addEventListener("DOMContentLoaded", () => {
    let slideIndex = 0;
    showSlides();
  
    function plusSlides(n) {
        slideIndex += n;
        showSlides();
    }
  
    function currentSlide(n) {
        slideIndex = n - 1;
        showSlides();
    }
  
    function showSlides() {
        let i;
        let slides = document.getElementsByClassName("slide");
        let dots = document.getElementsByClassName("dot");
  
        if (slideIndex >= slides.length) {
          slideIndex = 0;
        } 
        if (slideIndex < 0) {
          slideIndex = slides.length - 1;
        }
  
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
  
        slides[slideIndex].style.display = "block";
        dots[slideIndex].className += " active";
    }
  
    setInterval(() => {
        slideIndex++;
        showSlides();
    }, 5000);
  
    // Expose functions for external calls
    window.plusSlides = plusSlides;
    window.currentSlide = currentSlide;
  });