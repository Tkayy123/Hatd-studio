// Gallery floor-plan lightbox + category filter.
// Previously inline in gallery.html using onclick="..." attributes; moved
// here so the site can run without 'unsafe-inline' in script-src (see
// vercel.json Content-Security-Policy).
(function () {
  'use strict';

  var fpList = [];
  var fpIndex = 0;
  var fpOverlay = document.getElementById('fpOverlay');
  var fpImg = document.getElementById('fpImg');

  function refreshFPList() {
    var visibleItems = Array.prototype.filter.call(
      document.querySelectorAll('.fp'),
      function (el) { return el.offsetParent !== null; }
    );
    fpList = visibleItems.map(function (el) {
      return el.querySelector('img').getAttribute('src');
    });
  }

  function openFP(src) {
    refreshFPList();
    fpIndex = fpList.indexOf(src);
    if (fpIndex === -1) fpIndex = 0;
    fpImg.src = src;
    fpOverlay.classList.add('on');
    document.body.style.overflow = 'hidden';
  }

  function closeFP() {
    fpOverlay.classList.remove('on');
    document.body.style.overflow = '';
  }

  function navFP(dir) {
    if (!fpList.length) return;
    fpIndex = (fpIndex + dir + fpList.length) % fpList.length;
    fpImg.src = fpList[fpIndex];
  }

  // Open the popup for any .fp tile (event delegation instead of a
  // per-tile onclick attribute)
  document.addEventListener('click', function (e) {
    var tile = e.target.closest('.fp');
    if (tile) {
      var img = tile.querySelector('img');
      if (img) openFP(img.getAttribute('src'));
    }
  });

  if (fpOverlay) {
    fpOverlay.addEventListener('click', closeFP);
  }
  var fpCloseBtn = document.getElementById('fpCloseBtn');
  var fpPrevBtn = document.getElementById('fpPrevBtn');
  var fpNextBtn = document.getElementById('fpNextBtn');
  if (fpCloseBtn) {
    fpCloseBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      closeFP();
    });
  }
  if (fpPrevBtn) {
    fpPrevBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      navFP(-1);
    });
  }
  if (fpNextBtn) {
    fpNextBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      navFP(1);
    });
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeFP();
    if (e.key === 'ArrowLeft') navFP(-1);
    if (e.key === 'ArrowRight') navFP(1);
  });

  // ===== FILTER =====
  var filterBtns = document.querySelectorAll('.gallery-filter');
  var catSections = document.querySelectorAll('.cat-section');
  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filterBtns.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      var filter = btn.getAttribute('data-filter');
      catSections.forEach(function (sec) {
        var show = filter === 'all' || sec.getAttribute('data-cat') === filter;
        sec.style.display = show ? '' : 'none';
        var divider = sec.nextElementSibling;
        if (divider && divider.classList.contains('divider')) {
          divider.style.display = show ? '' : 'none';
        }
      });
    });
  });
})();
