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

// ===== TRANSLATE FUNCTION =====
var _tLang = 'en';
var _tCache = null;

async function toggleTranslate() {
  var btn = document.getElementById('translateBtn');
  if (!btn) return;
  
  if (_tLang === 'vi') { 
    location.reload(); 
    return; 
  }

  var originalText = btn.innerHTML;
  btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Đang dịch...';
  btn.disabled = true;

  var selectors = [
    'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
    'p', '.section-subtitle', '.quote-line', '.sub-quote',
    '.post-excerpt', '.service-intro p', '.detail-content p',
    '.featured-desc', '.testimonial-text', '.rating-text',
    '.hero-tag', '.section-tag', '.about-tag',
    '.stat-label', '.author-info p', '.featured-tag',
    '.post-category', '.post-date', '.read-more',
    '.btn-slide', '.btn-dark', '.btn-featured', '.btn-project',
    '.service-hover p', '.service-hover h3',
    '.info-item span', '.contact-info h3', '.contact-info p',
    '.breadcrumb span', '.breadcrumb a',
    '.category-title h3', '.caption',
    '.drawing-placeholder p', '.latest-overlay h4', '.latest-overlay p'
  ];

  var nodes = [];
  var texts = [];

  selectors.forEach(function(sel) {
    document.querySelectorAll(sel).forEach(function(el) {
      if (el.closest('script,style,.header-translate-btn,#pdfModal,.project-modal')) return;
      var text = el.textContent.trim();
      if (!text || text.length < 2) return;
      if (el.dataset.translated === 'true') return;
      if (/^[\d\s\+%]+$/.test(text)) return;
      
      nodes.push(el);
      texts.push(text);
      el.dataset.original = text;
    });
  });

  if (_tCache) {
    applyTranslation(nodes, _tCache);
    _tLang = 'vi';
    btn.innerHTML = '<i class="fas fa-globe"></i> English';
    btn.disabled = false;
    return;
  }

  try {
    var translated = [];
    var CHUNK = 25;
    
    for (var i = 0; i < texts.length; i += CHUNK) {
      var chunk = texts.slice(i, i + CHUNK);
      
      var results = await Promise.all(chunk.map(async function(text) {
        var url = 'https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=vi&dt=t&q=' + encodeURIComponent(text);
        var res = await fetch(url);
        if (!res.ok) throw new Error('API error: ' + res.status);
        var data = await res.json();
        if (data && data[0]) {
          var result = '';
          for (var j = 0; j < data[0].length; j++) {
            if (data[0][j] && data[0][j][0]) {
              result += data[0][j][0];
            }
          }
          return result.trim() || text;
        }
        return text;
      }));
      
      translated = translated.concat(results);
    }

    _tCache = translated;
    applyTranslation(nodes, translated);
    _tLang = 'vi';
    btn.innerHTML = '<i class="fas fa-globe"></i> English';
  } catch(e) {
    console.error('Translate error:', e);
    btn.innerHTML = originalText;
    alert('Lỗi dịch: ' + e.message + '\nVui lòng thử lại sau.');
  }
  btn.disabled = false;
}

function applyTranslation(nodes, translations) {
  nodes.forEach(function(el, i) {
    if (translations[i] !== undefined && translations[i].trim()) {
      var hasIcon = el.querySelector('i, .fas, .far, .fab, svg');
      if (hasIcon) {
        var clone = el.cloneNode(true);
        var walker = document.createTreeWalker(clone, NodeFilter.SHOW_TEXT, null, false);
        var textNodes = [];
        while (walker.nextNode()) {
          textNodes.push(walker.currentNode);
        }
        textNodes.forEach(function(node) {
          node.textContent = '';
        });
        var newText = document.createTextNode(translations[i]);
        clone.appendChild(newText);
        el.innerHTML = clone.innerHTML;
      } else {
        el.textContent = translations[i];
      }
      el.dataset.translated = 'true';
    }
  });
}