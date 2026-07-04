// ===== MOBILE MENU - FIXED =====

const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

if (menuToggle && navMenu) {
  // Toggle menu
  menuToggle.addEventListener('click', function(e) {
    e.stopPropagation();
    navMenu.classList.toggle('active');

    const icon = menuToggle.querySelector('i');
    if (icon) {
      icon.classList.toggle('fa-bars');
      icon.classList.toggle('fa-times');
    }
  });

  // Close menu when clicking outside
  document.addEventListener('click', function(e) {
    const isMenuOpen = navMenu.classList.contains('active');
    const isClickInside = navMenu.contains(e.target) || menuToggle.contains(e.target);
    
    if (isMenuOpen && !isClickInside) {
      navMenu.classList.remove('active');
      const icon = menuToggle.querySelector('i');
      if (icon) {
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-times');
      }
    }
  });

  // Close menu when clicking a link (mobile)
  // Exclude: dropdown toggle links (they open submenus) and dropdown-menu child links (let them navigate first)
  const navLinks = navMenu.querySelectorAll('a');
  navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      if (window.innerWidth <= 768) {
        // If this link is a dropdown toggle (parent), don't close the menu
        if (link.closest('.dropdown') && !link.closest('.dropdown-menu')) {
          return;
        }
        // If this link is inside a dropdown submenu, close menu after a tiny delay so navigation can happen
        if (link.closest('.dropdown-menu')) {
          setTimeout(function() {
            navMenu.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            if (icon) {
              icon.classList.add('fa-bars');
              icon.classList.remove('fa-times');
            }
          }, 50);
          return;
        }
        navMenu.classList.remove('active');
        const icon = menuToggle.querySelector('i');
        if (icon) {
          icon.classList.add('fa-bars');
          icon.classList.remove('fa-times');
        }
      }
    });
  });

  // Close menu on resize to desktop
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
      navMenu.classList.remove('active');
      const icon = menuToggle.querySelector('i');
      if (icon) {
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-times');
      }
    }
  });
}

// ===== LENIS SMOOTH SCROLL =====
if (typeof Lenis !== 'undefined') {
  const lenis = new Lenis({
    duration: 1.2,
    smoothWheel: true,
    wheelMultiplier: 1
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  // Recalculate scroll height whenever content size changes (images/fonts
  // loading late, sliders resizing, orientation change on mobile, etc.)
  // Without this, Lenis' virtual scroll height can drift out of sync with
  // the real page height, which visually breaks/squishes the end of the
  // page (typically the footer) once the user scrolls past where the
  // stale height thought the page ended.
  window.addEventListener('load', () => lenis.resize());

  window.addEventListener('resize', () => lenis.resize());

  document.querySelectorAll('img').forEach((img) => {
    if (!img.complete) {
      img.addEventListener('load', () => lenis.resize(), { once: true });
    }
  });

  if ('ResizeObserver' in window) {
    const ro = new ResizeObserver(() => lenis.resize());
    ro.observe(document.body);
  }
} else {
  console.warn('⚠️ Lenis not loaded, smooth scroll disabled');
}

// ===== HEADER HIDE/SHOW =====
(function() {
  const header = document.querySelector('header');
  if (!header) return;

  let lastScrollY = window.scrollY;
  let ticking = false;

  function updateHeader() {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      header.classList.add('header-hidden');
    } 
    else if (currentScrollY < lastScrollY || currentScrollY < 50) {
      header.classList.remove('header-hidden');
    }

    lastScrollY = currentScrollY;
  }

  window.addEventListener('scroll', function() {
    if (!ticking) {
      window.requestAnimationFrame(function() {
        updateHeader();
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  setTimeout(updateHeader, 50);
})();

// ===== SET ACTIVE MENU =====
const currentPath = window.location.pathname;
const currentPage = currentPath.split('/').pop() || 'index.html';
const isInServicesFolder = currentPath.includes('/services/');
const navLinksAll = document.querySelectorAll('.nav-menu > li > a');

navLinksAll.forEach(link => {
  const linkPage = link.getAttribute('href');
  const linkPageName = linkPage ? linkPage.split('/').pop() : '';
  if (isInServicesFolder && (linkPage === '../services.html' || linkPage === 'services.html')) {
    link.classList.add('active');
  } else if (linkPageName === currentPage || (currentPage === '' && linkPageName === 'index.html')) {
    link.classList.add('active');
  } else if (linkPage !== '#' && !isInServicesFolder) {
    link.classList.remove('active');
  }
});

// ===== DROPDOWN MENU MOBILE - FIXED V4 =====
(function() {
  // Kiểm tra nếu đang ở mobile
  function isMobile() {
    return window.innerWidth <= 768;
  }

  // Xử lý click trên dropdown
  function handleDropdownClick(e) {
    if (!isMobile()) return;
    
    e.preventDefault();
    e.stopPropagation();
    
    var dropdown = this.closest('.dropdown');
    if (!dropdown) return;
    
    // Toggle class open
    dropdown.classList.toggle('open');
    
    // Đóng các dropdown khác
    document.querySelectorAll('.dropdown.open').forEach(function(d) {
      if (d !== dropdown) {
        d.classList.remove('open');
      }
    });
  }

  // Gán sự kiện click cho tất cả dropdown > a
  var dropdownLinks = document.querySelectorAll('.dropdown > a');
  dropdownLinks.forEach(function(link) {
    link.removeEventListener('click', handleDropdownClick);
    link.addEventListener('click', handleDropdownClick);
  });
  
  // Đóng dropdown khi click ra ngoài
  document.addEventListener('click', function(e) {
    if (!isMobile()) return;
    
    var isDropdown = e.target.closest('.dropdown');
    if (!isDropdown) {
      document.querySelectorAll('.dropdown.open').forEach(function(drop) {
        drop.classList.remove('open');
      });
    }
  });

  // Submenu links: navigate normally (no preventDefault), menu closes via navLinks handler above
  
  // Đóng dropdown khi resize lên desktop
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
      document.querySelectorAll('.dropdown.open').forEach(function(drop) {
        drop.classList.remove('open');
      });
    }
  });
})();

// ===== PROGRESS BAR =====
const progressBar = document.createElement('div');
progressBar.className = 'scroll-progress';
progressBar.setAttribute('aria-label', 'Scroll progress');
document.body.appendChild(progressBar);

window.addEventListener('scroll', function() {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  progressBar.style.width = scrolled + '%';
});

// ===== BACK TO TOP BUTTON =====
const backToTop = document.createElement('button');
backToTop.className = 'back-to-top';
backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
backToTop.setAttribute('aria-label', 'Back to top');
document.body.appendChild(backToTop);

window.addEventListener('scroll', function() {
  if (window.scrollY > 500) {
    backToTop.classList.add('show');
  } else {
    backToTop.classList.remove('show');
  }
});

backToTop.addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== SCROLL REVEAL ANIMATION =====
(function() {
  const revealElements = document.querySelectorAll('.gallery-item, .service-item, .contact-wrapper, .services-grid .service-item');
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  
  revealElements.forEach(function(el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(40px)';
    el.style.transition = 'opacity 0.7s cubic-bezier(0.2, 0.9, 0.4, 1.1), transform 0.7s cubic-bezier(0.2, 0.9, 0.4, 1.1)';
    observer.observe(el);
  });
})();

// ===== SMOOTH SCROLL CHO ANCHOR LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ===== HOMEPAGE ENHANCEMENTS (reveal-up, counters, image tilt, magnetic buttons) =====
(function() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const genericReveal = document.querySelectorAll(
    '.about-tag, .about-content h3, .about-desc, .about-stats, .about-image, ' +
    '.section-header .section-tag, .section-header h3, .testimonial-slider, .testimonial-dots'
  );
  if (!prefersReducedMotion && genericReveal.length) {
    const revealObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

    genericReveal.forEach(function(el, i) {
      el.classList.add('reveal-up');
      el.style.transitionDelay = (i % 4) * 0.08 + 's';
      revealObserver.observe(el);
    });
  } else {
    genericReveal.forEach(function(el) { el.classList.add('is-revealed'); });
  }

  const statNumbers = document.querySelectorAll('.stat-number');
  if (statNumbers.length) {
    const counterObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        counterObserver.unobserve(el);

        const raw = el.textContent.trim();
        const match = raw.match(/^([\d.]+)(.*)$/);
        if (!match) return;

        const end = parseFloat(match[1]);
        const suffix = match[2] || '';

        if (prefersReducedMotion) {
          el.textContent = raw;
          return;
        }

        const duration = 1400;
        const startTime = performance.now();
        const isDecimal = match[1].includes('.');

        function tick(now) {
          const progress = Math.min((now - startTime) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = end * eased;
          el.textContent = (isDecimal ? current.toFixed(1) : Math.round(current)) + suffix;
          if (progress < 1) {
            requestAnimationFrame(tick);
          } else {
            el.textContent = raw;
          }
        }
        requestAnimationFrame(tick);
      });
    }, { threshold: 0.6 });

    statNumbers.forEach(function(el) { counterObserver.observe(el); });
  }

  if (!prefersReducedMotion && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    document.querySelectorAll('.about-image img').forEach(function(img) {
      const parent = img.parentElement;
      parent.addEventListener('mousemove', function(e) {
        const rect = parent.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        img.style.transform = 'perspective(800px) rotateY(' + (x * 5) + 'deg) rotateX(' + (y * -5) + 'deg) scale(1.02)';
      });
      parent.addEventListener('mouseleave', function() {
        img.style.transform = '';
      });
    });

    document.querySelectorAll('.btn-slide').forEach(function(btn) {
      btn.addEventListener('mousemove', function(e) {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = 'translate(' + (x * 0.25) + 'px, ' + (y * 0.35 - 3) + 'px)';
      });
      btn.addEventListener('mouseleave', function() {
        btn.style.transform = '';
      });
    });
  }

  const testimonialTrack = document.querySelector('.testimonial-track');
  if (testimonialTrack) {
    testimonialTrack.classList.add('has-fade-transition');
  }
})();

// toggleTranslate is defined in translate.js

// ===== STICKY MOBILE CTA BAR =====
(function () {
  if (window.innerWidth > 768) return;
  if (document.querySelector('.mobile-cta-bar')) return;

  const bar = document.createElement('div');
  bar.className = 'mobile-cta-bar';
  bar.innerHTML =
    '<a href="tel:+61434040078" class="mobile-cta-btn mobile-cta-call">' +
      '<i class="fas fa-phone"></i><span>Gọi ngay</span>' +
    '</a>' +
    '<a href="https://wa.me/61434040078" target="_blank" rel="noopener" class="mobile-cta-btn mobile-cta-whatsapp">' +
      '<i class="fab fa-whatsapp"></i><span>WhatsApp</span>' +
    '</a>';
  document.body.appendChild(bar);
})();
