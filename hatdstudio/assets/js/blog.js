// ============================================================
// BLOG / RESOURCES PAGE
// ============================================================

(function() {
  'use strict';

  var filterButtons = document.querySelectorAll('.filter-btn');
  var posts = document.querySelectorAll('.blog-post');

  if (filterButtons.length > 0 && posts.length > 0) {
    filterButtons.forEach(function(btn) {
      btn.addEventListener('click', function() {
        var category = this.getAttribute('data-category');
        
        filterButtons.forEach(function(b) { b.classList.remove('active'); });
        this.classList.add('active');
        
        posts.forEach(function(post) {
          var postCategory = post.getAttribute('data-category');
          
          if (category === 'all' || postCategory === category) {
            post.style.display = 'block';
            setTimeout(function() {
              post.style.opacity = '1';
              post.style.transform = 'translateY(0)';
            }, 100);
          } else {
            post.style.opacity = '0';
            post.style.transform = 'translateY(20px)';
            setTimeout(function() {
              post.style.display = 'none';
            }, 300);
          }
        });
      });
    });
  }

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    posts.forEach(function(post) {
      post.style.opacity = '0';
      post.style.transform = 'translateY(40px)';
      post.style.transition = 'opacity 0.7s cubic-bezier(0.2, 0.9, 0.4, 1.1), transform 0.7s cubic-bezier(0.2, 0.9, 0.4, 1.1)';
      observer.observe(post);
    });
  }

  console.log('📝 Blog page initialized');
})();