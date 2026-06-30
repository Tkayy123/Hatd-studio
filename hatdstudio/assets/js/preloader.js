// ===== PRELOADER =====
(function() {
  const path = window.location.pathname;
  const isHomePage = path === '/' || 
                     path === '/index.html' ||
                     path.endsWith('index.html') ||
                     path.split('/').pop() === '' ||
                     path.split('/').pop() === 'index.html';
  
  if (!isHomePage) return;
  
  const navigation = performance.getEntriesByType('navigation')[0];
  const isReload = navigation?.type === 'reload';
  const isFirstVisit = navigation?.type === 'navigate';
  
  const hasVisitedHome = sessionStorage.getItem('hasVisitedHome');
  
  const shouldShowLoader = isReload || (!hasVisitedHome && isFirstVisit);
  
  if (shouldShowLoader) {
    sessionStorage.setItem('hasVisitedHome', 'true');
    
    const logoSrc = 'assets/image/Logo.png';
    
    const preloader = document.createElement('div');
    preloader.id = 'preloader';
    preloader.innerHTML = `
      <div class="preloader-inner">
        <img src="${logoSrc}" alt="HATD Studio" class="preloader-logo">
        <div class="preloader-bar-container">
          <div class="preloader-bar-fill"></div>
        </div>
        <div class="preloader-percent">0%</div>
      </div>
    `;
    document.body.appendChild(preloader);
    
    const style = document.createElement('style');
    style.textContent = `
      #preloader {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #FFFFFF;
        z-index: 99999;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: opacity 0.6s cubic-bezier(0.2, 0.9, 0.4, 1.1);
      }
      #preloader.hide {
        opacity: 0;
        pointer-events: none;
      }
      #preloader .preloader-inner {
        text-align: center;
        width: 400px;
      }
      #preloader .preloader-logo {
        width: 180px;
        height: auto;
        margin-bottom: 40px;
        display: block;
        margin-left: auto;
        margin-right: auto;
        animation: logoPulse 1.2s ease-in-out infinite;
      }
      @keyframes logoPulse {
        0% { opacity: 0.6; transform: scale(0.98); }
        50% { opacity: 1; transform: scale(1); }
        100% { opacity: 0.6; transform: scale(0.98); }
      }
      #preloader .preloader-bar-container {
        width: 100%;
        height: 3px;
        background: #e0e0e0;
        overflow: hidden;
        margin-bottom: 16px;
        border-radius: 2px;
      }
      #preloader .preloader-bar-fill {
        width: 0%;
        height: 100%;
        background: #c6a43b;
        transition: width 0.1s linear;
        border-radius: 2px;
      }
      #preloader .preloader-percent {
        font-size: 1rem;
        letter-spacing: 3px;
        color: #999;
        font-weight: 300;
      }
      .hide-content-on-load header,
      .hide-content-on-load main,
      .hide-content-on-load footer {
        opacity: 0 !important;
        visibility: hidden !important;
      }
    `;
    document.head.appendChild(style);
    
    document.body.classList.add('hide-content-on-load');
    document.body.style.overflow = 'hidden';
    
    let percent = 0;
    const percentElement = preloader.querySelector('.preloader-percent');
    const fillElement = preloader.querySelector('.preloader-bar-fill');
    
    const interval = setInterval(() => {
      percent += Math.floor(Math.random() * 5) + 1;
      if (percent >= 100) {
        percent = 100;
        clearInterval(interval);
        
        setTimeout(() => {
          preloader.classList.add('hide');
          document.body.classList.remove('hide-content-on-load');
          document.body.style.overflow = '';
          
          setTimeout(() => {
            preloader.remove();
          }, 600);
        }, 200);
      }
      
      if (percentElement) percentElement.textContent = percent + '%';
      if (fillElement) fillElement.style.width = percent + '%';
    }, 60);
    
    // Dự phòng - đã sửa từ 5000 xuống 3000
    setTimeout(() => {
      if (percent < 100) {
        clearInterval(interval);
        percent = 100;
        if (percentElement) percentElement.textContent = '100%';
        if (fillElement) fillElement.style.width = '100%';
        
        setTimeout(() => {
          preloader.classList.add('hide');
          document.body.classList.remove('hide-content-on-load');
          document.body.style.overflow = '';
          setTimeout(() => preloader.remove(), 600);
        }, 200);
      }
    }, 3000);
  }
})();