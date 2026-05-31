// ==========================================
// ApexRow — Brand Kit Scripts v2
// ==========================================

// --- Active nav link on scroll ---
(function initNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.sidebar-nav a');
  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + entry.target.id) {
          link.classList.add('active');
        }
      });
    });
  }, { rootMargin: '-25% 0px -55% 0px' });

  sections.forEach(s => observer.observe(s));
})();

// --- Scroll Reveal ---
(function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  els.forEach(el => observer.observe(el));
})();

// --- Copy Hex to Clipboard ---
(function initCopy() {
  const swatches = document.querySelectorAll('.color-swatch');
  if (!swatches.length) return;

  const toast = document.getElementById('toast');

  swatches.forEach(swatch => {
    swatch.addEventListener('click', function (e) {
      const hex = this.dataset.hex;
      if (!hex) return;

      navigator.clipboard.writeText(hex).then(() => {
        const copyBadge = this.querySelector('.swatch-copy');
        if (copyBadge) {
          const orig = copyBadge.textContent;
          copyBadge.textContent = 'Copied!';
          copyBadge.style.background = 'rgba(205,127,50,0.7)';
          setTimeout(() => {
            copyBadge.textContent = orig;
            copyBadge.style.background = '';
          }, 1200);
        }
        if (toast) {
          toast.textContent = 'Copied ' + hex + ' to clipboard';
          toast.classList.add('show');
          setTimeout(() => toast.classList.remove('show'), 2000);
        }
      }).catch(() => {});
    });
  });
})();

// --- Motion card hover replay ---
(function initMotionCards() {
  const cards = document.querySelectorAll('.motion-card');
  if (!cards.length) return;

  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      const targets = card.querySelectorAll('.motion-box, .stagger-dot');
      targets.forEach(el => {
        el.style.animation = 'none';
        void el.offsetHeight;
      });
      // Use requestAnimationFrame to ensure reflow completes
      requestAnimationFrame(() => {
        targets.forEach(el => {
          if (card.dataset.anim === 'fade-up') {
            el.style.animation = 'fadeUpAnim 1.5s ease-in-out';
          } else if (card.dataset.anim === 'scale-in') {
            el.style.animation = 'scaleAnim 1.5s ease-in-out';
          } else if (card.dataset.anim === 'stagger') {
            el.style.animation = 'staggerAnim 1.5s ease-in-out';
          }
        });
      });
    });
  });
})();

// --- Glass card hover demo ---
(function initGlassDemo() {
  const hoverDemo = document.querySelector('.hover-demo');
  if (!hoverDemo) return;

  const textEl = hoverDemo.querySelector('span');
  if (!textEl) return;

  hoverDemo.addEventListener('mouseenter', () => { textEl.textContent = '✨ Glowing!'; textEl.style.color = '#cd7f32'; });
  hoverDemo.addEventListener('mouseleave', () => { textEl.textContent = 'Hover me'; textEl.style.color = ''; });
})();

// --- Keyboard navigation for sidebar ---
(function initKeyboardNav() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const toast = document.getElementById('toast');
      if (toast) toast.classList.remove('show');
    }
  });
})();
