// ================================================
// CHORALE SAINT PADRE PIO — Main JS v4
// ================================================

document.addEventListener('DOMContentLoaded', () => {

  // ── Language init ──
  Lang.init();

  // content-ready is fired by components.js after navbar+footer are injected.
  // Re-fire on language change only:

  // ── Language toggle ──
  document.addEventListener('click', e => {
    if (e.target && e.target.id === 'lang-toggle') {
      Lang.set(Lang.current === 'en' ? 'fr' : 'en');
      document.dispatchEvent(new Event('content-ready'));
    }
  });

  // ── Navbar scroll ──
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 10);
    }, { passive: true });
  }

  // ── Active nav link ──
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    if (link.getAttribute('href') === currentPage || (currentPage === '' && link.getAttribute('href') === 'index.html')) {
      link.classList.add('active');
    }
  });

  // ── Hamburger: open menu ──
  function openMenu() {
    const navLinks = document.getElementById('nav-links-list');
    const btn = document.getElementById('hamburger-btn');
    if (!navLinks) return;
    navLinks.classList.add('open');
    if (btn) { btn.classList.add('open'); btn.setAttribute('aria-expanded', true); }
    document.body.style.overflow = 'hidden';
  }

  // ── Close menu ──
  function closeMenu() {
    const navLinks = document.getElementById('nav-links-list');
    const btn = document.getElementById('hamburger-btn');
    if (!navLinks) return;
    navLinks.classList.remove('open');
    if (btn) { btn.classList.remove('open'); btn.setAttribute('aria-expanded', false); }
    document.body.style.overflow = '';
  }

  document.addEventListener('click', e => {
    // Hamburger button opens menu
    if (e.target.closest('#hamburger-btn')) { openMenu(); return; }
    // Close button (X) closes menu
    if (e.target.closest('#nav-close-btn')) { closeMenu(); return; }
    // Clicking a nav link closes menu
    if (e.target.closest('#nav-links-list a')) { closeMenu(); return; }
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

  document.addEventListener('content-ready', () => {
    setTimeout(() => {
      document.querySelectorAll('.reveal:not(.visible)').forEach(el => {
        const o = new IntersectionObserver(entries => {
          entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); o.unobserve(e.target); } });
        }, { threshold: 0.10 });
        o.observe(el);
      });
    }, 50);
  });

  // ── Counter animation ──
  function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-target'));
    const suffix = el.getAttribute('data-suffix') || '';
    if (isNaN(target)) return;
    const duration = 1800;
    const start = performance.now();
    const update = now => {
      const p = Math.min((now - start) / duration, 1);
      el.textContent = Math.round((1 - Math.pow(1 - p, 3)) * target) + suffix;
      if (p < 1) requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
  }
  const counterObs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { animateCounter(e.target); counterObs.unobserve(e.target); } });
  }, { threshold: 0.5 });
  function observeCounters() {
    document.querySelectorAll('.stat-number[data-target]').forEach(c => counterObs.observe(c));
  }
  observeCounters();
  document.addEventListener('content-ready', observeCounters);

  // ── Form handling ──
  document.querySelectorAll('.js-form').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const successMsg = form.querySelector('.form-success');
      const submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) { submitBtn.disabled = true; submitBtn.style.opacity = '0.65'; }
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
        setTimeout(() => { btn.textContent = Lang.get('footer_newsletter_btn'); btn.style.background = ''; }, 3000);
      }
    });
  });

});
