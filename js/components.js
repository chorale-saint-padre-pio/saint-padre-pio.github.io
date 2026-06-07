// ================================================
// CHORALE SAINT PADRE PIO — Shared Components
// Injects navbar and footer into every page
// ================================================

function buildNavbar() {
  const pages = [
    { key: 'nav_home',    href: 'index.html' },
    { key: 'nav_about',   href: 'about.html' },
    { key: 'nav_events',  href: 'events.html' },
    { key: 'nav_join',    href: 'join.html' },
    { key: 'nav_contact', href: 'contact.html' },
  ];

  const linksHTML = pages.map(p =>
    `<a href="${p.href}" data-i18n="${p.key}"></a>`
  ).join('');

  return `
  <nav class="navbar" role="navigation" aria-label="Main navigation">
    <a href="index.html" class="nav-logo" aria-label="Chorale Saint Padre Pio — Home">
      <span class="nav-logo-name">Chorale Saint Padre Pio</span>
      <span class="nav-logo-sub">Sacred Music · Uganda</span>
    </a>
    <ul class="nav-links" role="menubar">
      ${pages.map(p => `<li role="none"><a href="${p.href}" data-i18n="${p.key}" role="menuitem"></a></li>`).join('')}
    </ul>
    <div class="nav-actions">
      <button id="lang-toggle" aria-label="Toggle language">FR</button>
      <a href="join.html" class="btn nav-cta" data-i18n="nav_join"></a>
    </div>
    <button class="hamburger" aria-label="Toggle menu" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
  </nav>`;
}

function buildFooter() {
  return `
  <footer role="contentinfo">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="nav-logo">
            <span class="nav-logo-name">Chorale Saint Padre Pio</span>
            <span class="nav-logo-sub">Sacred Music · Uganda</span>
          </div>
          <p data-i18n="footer_tagline"></p>
        </div>
        <div class="footer-col">
          <h5 data-i18n="footer_links"></h5>
          <ul>
            <li><a href="index.html" data-i18n="nav_home"></a></li>
            <li><a href="about.html" data-i18n="nav_about"></a></li>
            <li><a href="events.html" data-i18n="nav_events"></a></li>
            <li><a href="join.html" data-i18n="nav_join"></a></li>
            <li><a href="contact.html" data-i18n="nav_contact"></a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h5 data-i18n="footer_contact"></h5>
          <p>📧 chorale.spp@gmail.com</p>
          <p>📞 +256 700 000 000</p>
          <p>📍 Kampala, Uganda</p>
        </div>
        <div class="footer-col">
          <h5 data-i18n="footer_newsletter"></h5>
          <form class="footer-newsletter-form newsletter-form" aria-label="Newsletter signup">
            <input type="email" data-i18n-placeholder="footer_newsletter_placeholder" required aria-label="Email for newsletter">
            <button type="submit" data-i18n="footer_newsletter_btn"></button>
          </form>
          <div style="margin-top:20px;">
            <h5 data-i18n="footer_follow" style="margin-bottom:10px;"></h5>
            <div class="footer-socials">
              <a href="#" aria-label="Facebook">f</a>
              <a href="#" aria-label="YouTube">▶</a>
              <a href="#" aria-label="Instagram">◉</a>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© ${new Date().getFullYear()} Chorale Saint Padre Pio. <span data-i18n="footer_rights"></span></span>
        <span>Made with ♥ in Kampala</span>
      </div>
    </div>
  </footer>`;
}

// Auto-inject on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  // Inject navbar
  const navPlaceholder = document.getElementById('navbar-placeholder');
  if (navPlaceholder) {
    navPlaceholder.outerHTML = buildNavbar();
  }
  // Inject footer
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) {
    footerPlaceholder.outerHTML = buildFooter();
  }
});
