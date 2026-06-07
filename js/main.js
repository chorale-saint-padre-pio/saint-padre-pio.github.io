// ================================================
// CHORALE SAINT PADRE PIO — Main JavaScript
// ================================================

document.addEventListener('DOMContentLoaded', () => {

  // ── Language init ──
  Lang.init();

  // ── Language toggle ──
  const langToggle = document.getElementById('lang-toggle');
  if (langToggle) {
    langToggle.addEventListener('click', () => {
      Lang.set(Lang.current === 'en' ? 'fr' : 'en');
    });
  }

  // ── Navbar scroll effect ──
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    const onScroll = () => {
      navbar.classList.toggle('scrolled', window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ── Active nav link ──
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // ── Hamburger menu ──
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      const open = navLinks.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', open);
      // animate bars
      const bars = hamburger.querySelectorAll('span');
      if (open) {
        bars[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        bars[1].style.opacity = '0';
        bars[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
      } else {
        bars[0].style.transform = '';
        bars[1].style.opacity = '';
        bars[2].style.transform = '';
      }
    });
    // Close on link click
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        navLinks.classList.remove('open');
        hamburger.setAttribute('aria-expanded', false);
        const bars = hamburger.querySelectorAll('span');
        bars[0].style.transform = '';
        bars[1].style.opacity = '';
        bars[2].style.transform = '';
      });
    });
  }

  // ── Scroll reveal ──
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    revealEls.forEach(el => observer.observe(el));
  }

  // ── Counter animation (stats) ──
  const counters = document.querySelectorAll('.stat-number[data-target]');
  if (counters.length > 0) {
    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            counterObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach(c => counterObserver.observe(c));
  }

  function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-target'));
    const suffix = el.getAttribute('data-suffix') || '';
    const duration = 1800;
    const start = performance.now();
    const update = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target) + suffix;
      if (progress < 1) requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
  }

  // ── Form handling ──
  document.querySelectorAll('.js-form').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const successMsg = form.querySelector('.form-success');
      const submitBtn = form.querySelector('button[type="submit"]');

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.style.opacity = '0.6';
      }

      // Simulate submission (replace with Firebase later)
      setTimeout(() => {
        form.querySelectorAll('input, textarea, select').forEach(field => field.value = '');
        if (successMsg) successMsg.classList.add('show');
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.style.opacity = '';
        }
        setTimeout(() => {
          if (successMsg) successMsg.classList.remove('show');
        }, 5000);
      }, 800);
    });
  });

  // ── Footer newsletter ──
  document.querySelectorAll('.newsletter-form').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input');
      const btn = form.querySelector('button');
      if (input && btn && input.value.trim()) {
        btn.textContent = '✓';
        btn.style.background = '#4aaa80';
        input.value = '';
        setTimeout(() => {
          btn.textContent = Lang.get('footer_newsletter_btn');
          btn.style.background = '';
        }, 3000);
      }
    });
  });

});
