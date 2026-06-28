// ============================================================
// BLOG DETAIL - JS CHUNG CHO CẢ 3 BÀI VIẾT
// ============================================================

(function() {
  'use strict';

  function applyBlogLang(lang) {
    document.querySelectorAll('.blog-detail').forEach(function(container) {
      // Update lang buttons
      container.querySelectorAll('.lang-btn').forEach(function(b) {
        b.classList.toggle('active', b.getAttribute('data-lang') === lang);
      });

      // Toggle titles
      var titleEn = container.querySelector('.post-title-en');
      var titleVi = container.querySelector('.post-title-vi');
      if (titleEn && titleVi) {
        titleEn.style.display = lang === 'en' ? 'block' : 'none';
        titleVi.style.display = lang === 'vi' ? 'block' : 'none';
      }

      // Toggle content blocks
      container.querySelectorAll('.post-content-lang').forEach(function(c) {
        c.classList.toggle('active', c.getAttribute('data-lang') === lang);
      });
    });
  }

  // Wire up the EN/VI buttons inside blog articles
  document.querySelectorAll('.lang-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var lang = this.getAttribute('data-lang');
      applyBlogLang(lang);
      // Sync with global language state
      localStorage.setItem('hatd_lang', lang);
      // Sync the header button label
      var headerBtn = document.getElementById('translateBtn');
      if (headerBtn) {
        headerBtn.innerHTML = lang === 'vi'
          ? '<i class="fas fa-globe"></i> English'
          : '<i class="fas fa-globe"></i> Tiếng Việt';
      }
    });
  });

  // Auto-apply on load if user previously chose VI
  document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('hatd_lang') === 'vi') {
      applyBlogLang('vi');
    }
  });

  console.log('📝 Blog detail language toggle initialized');

})();
