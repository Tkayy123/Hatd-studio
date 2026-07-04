// ============================================================
// HATd STUDIO — MOTION LAYER (site-wide)
// Loaded on every page, after main.js.
// Adds: light scroll-reveal for sections not already animated,
// plus magnetic hover and image tilt on larger showcase visuals.
// ============================================================
(function () {
  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var hasFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  // ===== SCROLL REVEAL (curated, non-intrusive) =====
  if (!prefersReducedMotion) {
    var revealGroups = [
      { selector: '.detail-block', cls: 'reveal-fade' },
      { selector: '.blog-post', cls: 'reveal-fade' },
      { selector: '.related-item', cls: 'reveal-fade' },
      { selector: '.info-item', cls: 'reveal-fade' },
      { selector: '.service-intro', cls: 'reveal-fade' },
      { selector: '.featured-tip', cls: 'reveal-fade' }
    ];

    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

    revealGroups.forEach(function (group) {
      var els = document.querySelectorAll(group.selector);
      els.forEach(function (el, i) {
        if (el.classList.contains('reveal-fade') || el.classList.contains('reveal-scale')) return;
        el.classList.add(group.cls);
        el.style.transitionDelay = Math.min(i % 5, 4) * 0.07 + 's';
        revealObserver.observe(el);
      });
    });
  }

  // ===== MAGNETIC HOVER (extra CTAs beyond main.js's .btn-slide) =====
  if (!prefersReducedMotion && hasFinePointer) {
    document.querySelectorAll('.btn-dark, .gallery-cta a, .service-cta a').forEach(function (btn) {
      btn.addEventListener('mousemove', function (e) {
        var rect = btn.getBoundingClientRect();
        var x = e.clientX - rect.left - rect.width / 2;
        var y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = 'translate(' + (x * 0.2) + 'px,' + (y * 0.3 - 2) + 'px)';
      });
      btn.addEventListener('mouseleave', function () {
        btn.style.transform = '';
      });
    });
  }

  // ===== IMAGE TILT (larger showcase images only) =====
  if (!prefersReducedMotion && hasFinePointer) {
    document.querySelectorAll('.service-gallery img, .blog-post-image img, .post-featured-image img').forEach(function (img) {
      var parent = img.parentElement;
      parent.addEventListener('mousemove', function (e) {
        var rect = parent.getBoundingClientRect();
        var x = (e.clientX - rect.left) / rect.width - 0.5;
        var y = (e.clientY - rect.top) / rect.height - 0.5;
        img.style.transform = 'perspective(900px) rotateY(' + (x * 4) + 'deg) rotateX(' + (y * -4) + 'deg) scale(1.03)';
      });
      parent.addEventListener('mouseleave', function () {
        img.style.transform = '';
      });
    });
  }
})();
