// ===== SERVICES PAGE =====
(function() {
  const dropdownLinks = document.querySelectorAll('.dropdown-menu a');

  dropdownLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          const offset = 100;
          const offsetPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      }
    });
  });
})();