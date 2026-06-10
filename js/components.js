// ================================================
// CHORALE SAINT PADRE PIO — Shared Components v2
// SVG icons, white navbar, logo slot
// ================================================

// SVG icon library (Lucide-style, inline)
const ICONS = {
  music:    `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>`,
  music2:   `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>`,
  heart:    `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
  users:    `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  star:     `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  door:     `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M13 4h3a2 2 0 0 1 2 2v14"/><path d="M2 20h3"/><path d="M13 20h9"/><path d="M10 12v.01"/><path d="M13 4l-6 2v14"/></svg>`,
  church:   `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M18 22H6a2 2 0 0 1-2-2V12"/><path d="m18 22 4-4"/><path d="m2 12 4 4"/><path d="M12 22V8"/><path d="m9 5 3-3 3 3"/><path d="M4 12a8 8 0 0 1 16 0"/></svg>`,
  mic:      `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>`,
  pray:     `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2l-6 6-6-6"/><path d="M12 8v13"/><path d="M5 3l-.5 5.5A2.5 2.5 0 0 0 7 11h0a2.5 2.5 0 0 0 2.5-2.5V8"/><path d="M19 3l.5 5.5A2.5 2.5 0 0 1 17 11h0a2.5 2.5 0 0 1-2.5-2.5V8"/></svg>`,
  calendar: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
  mappin:   `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  clock:    `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  mail:     `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
  phone:    `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.43 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.13 6.13l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
  location: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  repeat:   `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>`,
  chevronDown:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>`,
  arrowDown: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></svg>`,
  check:    `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  facebook: `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>`,
  youtube:  `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58a2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/></svg>`,
  instagram:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>`,
  note:     `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>`,
};

// Logo: checks for logo.png, falls back to music note SVG
const LOGO_IMG = `
<div class="nav-logo-icon">
  <img src="images/logo.png" alt="Chorale Saint Padre Pio logo"
    onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"
    style="width:100%;height:100%;object-fit:contain;">
  <span style="display:none;align-items:center;justify-content:center;width:100%;height:100%;">${ICONS.note}</span>
</div>`;

function buildNavbar() {
  const pages = [
    { key: 'nav_home',    href: 'index.html' },
    { key: 'nav_about',   href: 'about.html' },
    { key: 'nav_events',  href: 'events.html' },
    { key: 'nav_join',    href: 'join.html' },
    { key: 'nav_contact', href: 'contact.html' },
  ];

  const linksHTML = pages.map(p =>
    `<li role="none"><a href="${p.href}" data-i18n="${p.key}" role="menuitem"></a></li>`
  ).join('');

  return `
  <nav class="navbar" role="navigation" aria-label="Main navigation">
    <a href="index.html" class="nav-logo" aria-label="Chorale Saint Padre Pio — Home">
      ${LOGO_IMG}
      <div class="nav-logo-text">
        <span class="nav-logo-name">Chorale Saint Padre Pio</span>
        <span class="nav-logo-sub">Kampala · Uganda</span>
      </div>
    </a>
    <ul class="nav-links" id="nav-links-list" role="menubar">
      ${linksHTML}
    </ul>
    <div class="nav-actions">
      <button id="lang-toggle" aria-label="Toggle language">FR</button>
      <a href="join.html" class="nav-cta" data-i18n="nav_join">${ICONS.music2}</a>
    </div>
    <button class="hamburger" id="hamburger-btn" aria-label="Toggle menu" aria-expanded="false">
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
          <a href="index.html" class="nav-logo" style="margin-bottom:12px;">
            ${LOGO_IMG}
            <div class="nav-logo-text">
              <span class="nav-logo-name">Chorale Saint Padre Pio</span>
              <span class="nav-logo-sub">Kampala · Uganda</span>
            </div>
          </a>
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
          <div class="footer-contact-list">
            <p>${ICONS.mail} <span data-contact="email"></span></p>
            <p>${ICONS.phone} <span data-contact="phone"></span></p>
            <p>${ICONS.location} <span data-contact="address"></span></p>
          </div>
        </div>
        <div class="footer-col">
          <h5 data-i18n="footer_newsletter"></h5>
          <form class="footer-newsletter-form newsletter-form" aria-label="Newsletter signup">
            <input type="email" data-i18n-placeholder="footer_newsletter_placeholder" required aria-label="Email for newsletter">
            <button type="submit" data-i18n="footer_newsletter_btn"></button>
          </form>
          <div style="margin-top:18px;">
            <h5 data-i18n="footer_follow" style="margin-bottom:10px;"></h5>
            <div class="footer-socials">
              <a href="#" data-social="facebook" aria-label="Facebook">${ICONS.facebook}</a>
              <a href="#" data-social="youtube" aria-label="YouTube">${ICONS.youtube}</a>
              <a href="#" data-social="instagram" aria-label="Instagram">${ICONS.instagram}</a>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© ${new Date().getFullYear()} Chorale Saint Padre Pio. <span data-i18n="footer_rights"></span></span>
        <span>Made with ${ICONS.heart.replace('width="20"','width="12"').replace('height="20"','height="12"')} in Kampala</span>
      </div>
    </div>
  </footer>`;
}

document.addEventListener('DOMContentLoaded', () => {
  const navPlaceholder = document.getElementById('navbar-placeholder');
  if (navPlaceholder) navPlaceholder.outerHTML = buildNavbar();

  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) footerPlaceholder.outerHTML = buildFooter();
});
