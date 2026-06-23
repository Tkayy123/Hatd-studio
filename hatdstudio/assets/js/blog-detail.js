// ============================================================
// BLOG DETAIL - JS CHUNG CHO CẢ 3 BÀI VIẾT
// ============================================================

(function() {
  'use strict';

  var langBtns = document.querySelectorAll('.lang-btn');

  langBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      var lang = this.getAttribute('data-lang');

      var container = this.closest('.blog-detail');
      if (!container) return;
      
      var buttons = container.querySelectorAll('.lang-btn');
      buttons.forEach(function(b) {
        b.classList.remove('active');
      });
      this.classList.add('active');

      var titleEn = container.querySelector('.post-title-en');
      var titleVi = container.querySelector('.post-title-vi');
      if (titleEn && titleVi) {
        if (lang === 'en') {
          titleEn.style.display = 'block';
          titleVi.style.display = 'none';
        } else {
          titleEn.style.display = 'none';
          titleVi.style.display = 'block';
        }
      }

      var contents = container.querySelectorAll('.post-content-lang');
      contents.forEach(function(c) {
        c.classList.remove('active');
        if (c.getAttribute('data-lang') === lang) {
          c.classList.add('active');
        }
      });
    });
  });

  console.log('📝 Blog detail language toggle initialized');

})();