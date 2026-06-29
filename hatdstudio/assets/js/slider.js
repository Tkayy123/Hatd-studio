// ===== HERO SLIDER =====
(function() {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  let currentSlide = 0;
  let slideInterval;
  
  const sliderContainer = document.querySelector('.hero-slider');
  if (sliderContainer && !document.querySelector('.slider-progress')) {
    const progressBar = document.createElement('div');
    progressBar.className = 'slider-progress';
    sliderContainer.style.position = 'relative';
    sliderContainer.appendChild(progressBar);
  }
  const progressBar = document.querySelector('.slider-progress');
  
  function showSlide(index) {
    if (!slides.length) return;
    
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
      if (dots[i]) dots[i].classList.remove('active');
    });
    
    slides[index].classList.add('active');
    if (dots[index]) dots[index].classList.add('active');
    currentSlide = index;
    
    if (progressBar) {
      progressBar.style.transition = 'none';
      progressBar.style.width = '0%';
      setTimeout(() => {
        progressBar.style.transition = 'width 5s linear';
        progressBar.style.width = '100%';
      }, 50);
    }
  }
  
  function nextSlide() {
    let next = (currentSlide + 1) % slides.length;
    showSlide(next);
  }
  
  function startSlider() {
    if (slides.length <= 1) return;
    if (slideInterval) clearInterval(slideInterval);
    
    if (progressBar) {
      progressBar.style.transition = 'none';
      progressBar.style.width = '0%';
      setTimeout(() => {
        progressBar.style.transition = 'width 5s linear';
        progressBar.style.width = '100%';
      }, 50);
    }
    
    slideInterval = setInterval(nextSlide, 5000);
  }
  
  function resetAndStart() {
    if (slideInterval) clearInterval(slideInterval);
    startSlider();
  }
  
  if (slides.length > 0) {
    startSlider();
    
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        clearInterval(slideInterval);
        showSlide(index);
        resetAndStart();
      });
    });
    
    const slider = document.querySelector('.hero-slider');
    if (slider) {
      slider.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
        if (progressBar) progressBar.style.transition = 'none';
      });
      slider.addEventListener('mouseleave', () => {
        resetAndStart();
      });
    }
  }
})();

// ===== TYPING ANIMATION =====
const words = ['Architecture', 'Design', 'Space', 'Minimalism'];
let i = 0, j = 0, isDeleting = false;
const typingElement = document.getElementById('typing1');

if (typingElement) {
  typingElement.style.display = 'inline-block';
  typingElement.style.minWidth = '280px';
  typingElement.style.textAlign = 'center';
  
  function typeEffect() {
    const currentWord = words[i];
    if (isDeleting) {
      typingElement.textContent = currentWord.substring(0, j - 1);
      j--;
    } else {
      typingElement.textContent = currentWord.substring(0, j + 1);
      j++;
    }
    
    if (!isDeleting && j === currentWord.length) {
      isDeleting = true;
      setTimeout(typeEffect, 2000);
      return;
    }
    
    if (isDeleting && j === 0) {
      isDeleting = false;
      i = (i + 1) % words.length;
    }
    
    setTimeout(typeEffect, isDeleting ? 80 : 120);
  }
  typeEffect();
}