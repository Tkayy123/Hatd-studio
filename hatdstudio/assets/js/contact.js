// ===== CONTACT FORM WITH EMAILJS =====

(function() {
  'use strict';
  
  const CONFIG = {
    PUBLIC_KEY: 'cNDVqBUKhUqByXTtY',
    SERVICE_ID: 'service_i57unjc',
    TEMPLATE_ID: 'template_k5kv3zg'
  };
  
  const emailjsReady = typeof emailjs !== 'undefined';
  if (emailjsReady) {
    emailjs.init(CONFIG.PUBLIC_KEY);
  } else {
    console.error('❌ EmailJS library not loaded!');
  }
  
  const contactForm = document.getElementById('contactForm');
  
  let isSubmitting = false;

  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      if (isSubmitting) return;
      
      const honeypot = this.querySelector('input[name="website"]');
      if (honeypot) {
        if (honeypot.value.trim() !== '') {
          console.warn('🛑 Spam bot detected, submission blocked.');
          return;
        }
        honeypot.value = '';
      }
      
      if (!emailjsReady || typeof emailjs === 'undefined') {
        showArtPopup('error', 'Service Unavailable', 'The contact form is temporarily unavailable. Please email us directly.');
        return;
      }
      
      const nameInput = this.querySelector('#nameInput');
      const emailInput = this.querySelector('#emailInput');
      const phoneInput = this.querySelector('#phoneInput');
      const subjectInput = this.querySelector('#subjectInput');
      const messageInput = this.querySelector('#messageInput');
      const submitBtn = this.querySelector('.btn-dark');
      
      let isValid = true;
      const requiredFields = [nameInput, emailInput, messageInput];
      
      requiredFields.forEach(field => {
        if (field) field.style.borderColor = '#ccc';
      });
      if (phoneInput) phoneInput.style.borderColor = '#ccc';
      
      requiredFields.forEach(field => {
        if (field && !field.value.trim()) {
          field.style.borderColor = '#e74c3c';
          isValid = false;
        }
      });
      
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailInput && emailInput.value.trim() && !emailRegex.test(emailInput.value.trim())) {
        emailInput.style.borderColor = '#e74c3c';
        isValid = false;
        showArtPopup('error', 'Invalid Email', 'Please enter a valid email address.');
      }
      
      if (phoneInput && phoneInput.value.trim()) {
        const phoneRegex = /^[\+\d\s\-\(\)]{8,20}$/;
        if (!phoneRegex.test(phoneInput.value.trim())) {
          phoneInput.style.borderColor = '#e74c3c';
          isValid = false;
          showArtPopup('error', 'Invalid Phone', 'Please enter a valid phone number (e.g., +61 434 040 078).');
        }
      }
      
      if (!isValid) {
        showArtPopup('error', 'Missing Fields', 'Please fill in all required fields correctly.');
        return;
      }
      
      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const phone = phoneInput ? phoneInput.value.trim() : 'Not provided';
      const subject = subjectInput.value.trim() || 'No Subject';
      const message = messageInput.value.trim();

      const selectedServices = Array.from(
        this.querySelectorAll('input[name="service"]:checked')
      ).map(cb => cb.value);
      const services = selectedServices.length ? selectedServices.join(', ') : 'Not specified';

      isSubmitting = true;
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;
      submitBtn.style.opacity = '0.7';
      
      const templateParams = {
        name: name,
        email: email,
        phone: phone,
        title: subject,
        message: message,
        services: services
      };
      
      
      emailjs.send(
        CONFIG.SERVICE_ID,
        CONFIG.TEMPLATE_ID,
        templateParams,
        CONFIG.PUBLIC_KEY
      )
      .then(function(response) {
        showArtPopup('success', name, 'Your message has been sent successfully. We will respond within 24 hours.');
        contactForm.reset();
      })
      .catch(function(error) {
        console.error('❌ Email failed:', error);
        showArtPopup('error', 'Something went wrong', 'There was an error sending your message. Please try again later.');
      })
      .finally(function() {
        isSubmitting = false;
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        submitBtn.style.opacity = '1';
      });
    });
    
    contactForm.querySelectorAll('input, textarea').forEach(field => {
      field.addEventListener('focus', function() {
        this.style.borderColor = '#ccc';
      });
    });
    
  } else {
    console.error('❌ Contact form not found!');
  }

  function showArtPopup(type, title, message) {
    const oldPopup = document.querySelector('.art-popup-overlay');
    if (oldPopup) {
      oldPopup.remove();
    }

    const overlay = document.createElement('div');
    overlay.className = 'art-popup-overlay';
    
    const popup = document.createElement('div');
    popup.className = 'art-popup';
    
    let iconHtml = '';
    let iconColor = '';
    if (type === 'success') {
      iconHtml = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
        <polyline points="22 4 12 14.01 9 11.01"/>
      </svg>`;
      iconColor = '#c6a43b';
    } else {
      iconHtml = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="12" y1="8" x2="12" y2="12"/>
        <line x1="12" y1="16" x2="12.01" y2="16"/>
      </svg>`;
      iconColor = '#e74c3c';
    }
    
    popup.innerHTML = `
      <div class="art-popup-icon" style="color: ${iconColor}">
        ${iconHtml}
      </div>
      <div class="art-popup-divider"></div>
      <h3 class="art-popup-title">${title}</h3>
      <p class="art-popup-message">${message}</p>
      <button class="art-popup-btn">Got it</button>
    `;
    
    overlay.appendChild(popup);
    document.body.appendChild(overlay);
    
    requestAnimationFrame(() => {
      overlay.classList.add('active');
      popup.classList.add('active');
    });
    
    const closeBtn = popup.querySelector('.art-popup-btn');
    closeBtn.addEventListener('click', function() {
      overlay.classList.remove('active');
      popup.classList.remove('active');
      setTimeout(() => {
        overlay.remove();
      }, 400);
    });
    
    overlay.addEventListener('click', function(e) {
      if (e.target === overlay) {
        overlay.classList.remove('active');
        popup.classList.remove('active');
        setTimeout(() => {
          overlay.remove();
        }, 400);
      }
    });
    
    document.addEventListener('keydown', function escHandler(e) {
      if (e.key === 'Escape') {
        overlay.classList.remove('active');
        popup.classList.remove('active');
        setTimeout(() => {
          overlay.remove();
        }, 400);
        document.removeEventListener('keydown', escHandler);
      }
    });
  }

  const popupStyles = document.createElement('style');
  popupStyles.textContent = `
    .art-popup-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      z-index: 10000;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity 0.4s cubic-bezier(0.2, 0.9, 0.4, 1.1);
      padding: 20px;
    }
    
    .art-popup-overlay.active {
      opacity: 1;
    }
    
    .art-popup {
      background: #ffffff;
      border-radius: 24px;
      padding: 48px 40px 36px;
      max-width: 440px;
      width: 100%;
      text-align: center;
      transform: scale(0.92) translateY(20px);
      transition: transform 0.5s cubic-bezier(0.2, 0.9, 0.4, 1.1);
      box-shadow: 0 40px 80px rgba(0, 0, 0, 0.15);
      position: relative;
      overflow: hidden;
    }
    
    .art-popup::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: linear-gradient(to right, #c6a43b, #e8d5a0, #c6a43b);
    }
    
    .art-popup.active {
      transform: scale(1) translateY(0);
    }
    
    .art-popup-icon {
      width: 64px;
      height: 64px;
      margin: 0 auto 16px;
      border-radius: 50%;
      background: #f8f6f0;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 32px;
    }
    
    .art-popup-icon svg {
      width: 32px;
      height: 32px;
    }
    
    .art-popup-divider {
      width: 40px;
      height: 2px;
      background: #c6a43b;
      margin: 0 auto 20px;
    }
    
    .art-popup-title {
      font-family: 'Montserrat', sans-serif;
      font-size: 1.3rem;
      font-weight: 400;
      letter-spacing: 2px;
      color: #1a1a1a;
      margin-bottom: 10px;
      text-transform: uppercase;
    }
    
    .art-popup-message {
      font-family: 'Montserrat', sans-serif;
      font-size: 0.95rem;
      font-weight: 300;
      line-height: 1.7;
      color: #666;
      margin-bottom: 28px;
    }
    
    .art-popup-btn {
      font-family: 'Montserrat', sans-serif;
      background: #1a1a1a;
      color: #fff;
      border: none;
      padding: 12px 40px;
      border-radius: 30px;
      font-size: 0.75rem;
      font-weight: 500;
      letter-spacing: 2px;
      text-transform: uppercase;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    
    .art-popup-btn:hover {
      background: #c6a43b;
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(198, 164, 59, 0.3);
    }
    
    .art-popup-btn:active {
      transform: translateY(0);
    }
    
    @media (max-width: 480px) {
      .art-popup {
        padding: 36px 28px 30px;
        border-radius: 20px;
      }
      
      .art-popup-title {
        font-size: 1.1rem;
      }
      
      .art-popup-message {
        font-size: 0.85rem;
      }
      
      .art-popup-btn {
        padding: 10px 32px;
        font-size: 0.7rem;
      }
    }
  `;
  document.head.appendChild(popupStyles);

})();