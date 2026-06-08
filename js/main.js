// ================================================
// CHORALE SAINT PADRE PIO — Main JS v2
// ================================================

document.addEventListener('DOMContentLoaded', () => {

  // ── Language init ──
  Lang.init();

  // ── Language toggle ──
  document.addEventListener('click', e => {
    if (e.target && e.target.id === 'lang-toggle') {
      Lang.set(Lang.current === 'en' ? 'fr' : 'en');
    }
  });

  // ── Navbar scroll effect ──
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 10);
    }, { passive: true });
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
  document.addEventListener('click', e => {
    const btn = e.target.closest('#hamburger-btn');
    const navLinks = document.getElementById('nav-links-list');
    if (!btn || !navLinks) return;
    const isOpen = navLinks.classList.toggle('open');
    btn.classList.toggle('open', isOpen);
    btn.setAttribute('aria-expanded', isOpen);
    // Prevent body scroll when menu open
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close menu on nav link click
  document.addEventListener('click', e => {
    const navLinks = document.getElementById('nav-links-list');
    const btn = document.getElementById('hamburger-btn');
    if (e.target.closest('#nav-links-list a') && navLinks) {
      navLinks.classList.remove('open');
      if (btn) { btn.classList.remove('open'); btn.setAttribute('aria-expanded', false); }
      document.body.style.overflow = '';
    }
  });

  // Close menu on outside click
  document.addEventListener('click', e => {
    const navLinks = document.getElementById('nav-links-list');
    const btn = document.getElementById('hamburger-btn');
    if (navLinks && navLinks.classList.contains('open')) {
      if (!e.target.closest('.navbar')) {
        navLinks.classList.remove('open');
        if (btn) { btn.classList.remove('open'); btn.setAttribute('aria-expanded', false); }
        document.body.style.overflow = '';
      }
    }
  });

  // ── Scroll reveal ──
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length) {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
      });
    }, { threshold: 0.10, rootMargin: '0px 0px -30px 0px' });
    revealEls.forEach(el => obs.observe(el));
  }

  // ── Counter animation ──
  const counters = document.querySelectorAll('.stat-number[data-target]');
  if (counters.length) {
    const counterObs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { animateCounter(e.target); counterObs.unobserve(e.target); }
      });
    }, { threshold: 0.5 });
    counters.forEach(c => counterObs.observe(c));
  }

  function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-target'));
    const suffix = el.getAttribute('data-suffix') || '';
    const duration = 1800;
    const start = performance.now();
    const update = now => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(eased * target) + suffix;
      if (p < 1) requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
  }

  // ── Form handling ──
  document.querySelectorAll('.js-form').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const successMsg = form.querySelector('.form-success');
      const submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) { submitBtn.disabled = true; submitBtn.style.opacity = '0.65'; }
      // Simulate async (replace with Firebase later)
      setTimeout(() => {
        form.querySelectorAll('input, textarea').forEach(f => f.value = '');
        if (successMsg) successMsg.classList.add('show');
        if (submitBtn) { submitBtn.disabled = false; submitBtn.style.opacity = ''; }
        setTimeout(() => { if (successMsg) successMsg.classList.remove('show'); }, 5000);
      }, 900);
    });
  });

  // ── Footer newsletter ──
  document.querySelectorAll('.newsletter-form').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const input = form.querySelector('input');
      const btn = form.querySelector('button');
      if (input && btn && input.value.trim()) {
        btn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>';
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
