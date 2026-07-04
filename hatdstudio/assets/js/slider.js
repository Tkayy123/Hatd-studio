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

    const prevBtn = document.getElementById('sliderPrev');
    const nextBtn = document.getElementById('sliderNext');

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        clearInterval(slideInterval);
        showSlide((currentSlide - 1 + slides.length) % slides.length);
        resetAndStart();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        clearInterval(slideInterval);
        showSlide((currentSlide + 1) % slides.length);
        resetAndStart();
      });
    }
    
    const slider = document.querySelector('.hero-slider');
    if (slider) {
      // Mouse hover pause
      slider.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
        if (progressBar) progressBar.style.transition = 'none';
      });
      slider.addEventListener('mouseleave', () => {
        resetAndStart();
      });

      // Touch swipe support
      let touchStartX = 0;
      let touchEndX = 0;
      const SWIPE_THRESHOLD = 50;

      slider.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
      }, { passive: true });

      slider.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        const diff = touchStartX - touchEndX;
        if (Math.abs(diff) < SWIPE_THRESHOLD) return;
        clearInterval(slideInterval);
        if (diff > 0) {
          // swipe left -> next slide
          showSlide((currentSlide + 1) % slides.length);
        } else {
          // swipe right -> prev slide
          showSlide((currentSlide - 1 + slides.length) % slides.length);
        }
        resetAndStart();
      }, { passive: true });
    }
  }
})();

// ===== TESTIMONIAL SLIDER =====
(function() {
  const track = document.querySelector('.testimonial-track');
  const wrapper = document.querySelector('.testimonial-track-wrapper');
  const tSlides = document.querySelectorAll('.testimonial-slide');
  const tDots = document.querySelectorAll('.testimonial-dot');
  const tPrevBtn = document.getElementById('testimonialPrev');
  const tNextBtn = document.getElementById('testimonialNext');

  if (!track || !wrapper || !tSlides.length) return;

  let currentT = 0;
  let visibleCount = getVisibleCount();

  function getVisibleCount() {
    const w = window.innerWidth;
    if (w <= 768) return 1;
    if (w <= 992) return 2;
    return 2;
  }

  function maxIndex() {
    return Math.max(0, tSlides.length - visibleCount);
  }

  function updateSlider() {
    const slideWidth = tSlides[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${currentT * slideWidth}px)`;

    // Looping slider: arrows stay active so the user can cycle endlessly
    if (tPrevBtn) tPrevBtn.disabled = false;
    if (tNextBtn) tNextBtn.disabled = false;
    if (tPrevBtn) tPrevBtn.style.opacity = '1';
    if (tNextBtn) tNextBtn.style.opacity = '1';

    tDots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentT);
      dot.style.display = i <= maxIndex() ? '' : 'none';
    });
  }

  function goTo(index) {
    const max = maxIndex();
    if (index > max) {
      currentT = 0; // reached the last customer, loop back to the first
    } else if (index < 0) {
      currentT = max; // before the first, loop to the last
    } else {
      currentT = index;
    }
    updateSlider();
  }

  function next() {
    goTo(currentT + 1);
  }

  function prev() {
    goTo(currentT - 1);
  }

  tDots.forEach((dot, index) => {
    dot.addEventListener('click', () => goTo(index));
  });

  if (tPrevBtn) tPrevBtn.addEventListener('click', prev);
  if (tNextBtn) tNextBtn.addEventListener('click', next);

  // Touch swipe support (mobile)
  let touchStartX = 0;
  let touchEndX = 0;
  const SWIPE_THRESHOLD = 40;

  wrapper.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  wrapper.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) < SWIPE_THRESHOLD) return;
    if (diff > 0) next(); else prev();
  }, { passive: true });

  window.addEventListener('resize', () => {
    visibleCount = getVisibleCount();
    goTo(Math.min(currentT, maxIndex()));
  });

  updateSlider();
})();

// ===== TYPING ANIMATION =====
const TYPING_WORDS = {
  en: ['Architecture', 'Design', 'Space', 'Contemporary'],
  vi: ['Kiến Trúc', 'Thiết Kế', 'Không Gian', 'Hiện Đại']
};
let currentTypingLang = (localStorage.getItem('hatd_lang') === 'vi') ? 'vi' : 'en';
let words = TYPING_WORDS[currentTypingLang];
let i = 0, j = 0, isDeleting = false;
const typingElement = document.getElementById('typing1');

// Allows translate.js to switch the typing words instantly when the
// user toggles EN/VI, without needing a page reload.
window.setTypingLanguage = function (lang) {
  if (!TYPING_WORDS[lang] || !typingElement) return;
  currentTypingLang = lang;
  words = TYPING_WORDS[lang];
  i = 0;
  j = 0;
  isDeleting = false;
  typingElement.textContent = '';
};

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
