document.addEventListener("DOMContentLoaded", function() {
  const slides = document.querySelectorAll('.slide');
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });
    currentSlide = index;
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }
  showSlide(0);
  document.querySelector('.prev').addEventListener('click', prevSlide);
  document.querySelector('.next').addEventListener('click', nextSlide);

  setInterval(nextSlide, 3000); // Change slide every 3 seconds
});


// document.addEventListener("DOMContentLoaded", function() {
//   const loginBtn = document.getElementById('login');

//   loginBtn.addEventListener('click', function() {
//     // Open the login form in a new window or tab
//     window.open('login.html', '_blank');
    
//   });
// });