// ================================================================
// CHORALE SAINT PADRE PIO — CONTENT FILE
// ================================================================
// Edit this file to update your site content WITHOUT touching HTML.
//
// HOW TO EDIT:
//   1. Open this file in any text editor (Notepad, VS Code, etc.)
//   2. Change the values between the quote marks " "
//   3. Save, re-upload to GitHub — done!
//
// SECTIONS YOU CAN EDIT:
//   - SITE INFO    : email, phone, address, rehearsal time
//   - EVENTS       : add, remove or edit upcoming & past events
//   - STATS        : the 4 numbers on the homepage
//   - SOCIAL LINKS : Facebook, YouTube, Instagram URLs
// ================================================================

const SITE_CONTENT = {

  // ── Contact Information ──────────────────────────────────────
  // Change these to your real details
  email:     "chorale.spp@gmail.com",
  phone:     "+256 700 000 000",
  address:   "Kampala, Uganda",
  rehearsal_en: "Every Tuesday & Thursday, 5:15 PM",
  rehearsal_fr: "Chaque Mardi & Jeudi, 17h15",

  // ── Social Media Links ───────────────────────────────────────
  // Paste your full URL, e.g. "https://facebook.com/yourpage"
  // Leave as "#" if you don't have that account yet
  facebook:  "#",
  youtube:   "#",
  instagram: "#",

  // ── Homepage Stats ───────────────────────────────────────────
  stat_years:    5,   // Years of music
  stat_members:  24,   // Active members
  stat_events:   23,   // Events per year
  stat_parishes:  6,   // Parishes served

  // ── Upcoming Events ──────────────────────────────────────────
  // Add as many events as you like. They appear on the Events page
  // and the first one shows as a teaser on the homepage.
  //
  // FIELDS:
  //   day        : number (1-31)
  //   month_en   : month name in English (e.g. "Aug")
  //   month_fr   : month name in French  (e.g. "Août")
  //   title_en   : event title in English
  //   title_fr   : event title in French
  //   time       : e.g. "6:00 PM to 8:30 PM"
  //   location   : venue name
  //   desc_en    : short description in English (1-2 sentences)
  //   desc_fr    : short description in French
  //   category   : "Liturgical", "Feast Day", or "Community"
  //   free       : true = "Free Entry", false = hide badge
  //   featured   : true = highlighted button, false = outline

  upcoming_events: [
    {
      day: 15,
      month_en: "Aug",
      month_fr: "Août",
      title_en: "Concert de l'Assomption de Marie",
      title_fr: "Concert de l'Assomption de Marie",
      time: "6:00 PM to 8:30 PM",
      location: "Cathédrale Rubaga, Kampala",
      desc_en: "A solemn evening concert for the Feast of the Assumption. Sacred polyphony and Marian hymns.",
      desc_fr: "Un concert solennel pour la fête de l'Assomption. Polyphonie sacrée et hymnes mariales.",
      category: "Liturgical",
      free: true,
      featured: true,
    },
    {
      day: 23,
      month_en: "Sep",
      month_fr: "Sep",
      title_en: "Fête de Saint Padre Pio",
      title_fr: "Fête de Saint Padre Pio",
      time: "4:00 PM to 7:00 PM",
      location: "Kansanga Parish, Kampala",
      desc_en: "Annual celebration of our patron saint's feast day with special liturgy, concert and community gathering.",
      desc_fr: "Célébration annuelle de la fête de notre saint patron avec liturgie, concert et rassemblement communautaire.",
      category: "Feast Day",
      free: true,
      featured: false,
    },
    {
      day: 12,
      month_en: "Oct",
      month_fr: "Oct",
      title_en: "Sacred Music Concert: World Mission Sunday",
      title_fr: "Concert de Musique Sacrée: Dimanche de la Mission",
      time: "5:00 PM",
      location: "Kampala City Hall",
      desc_en: "Joining choirs from across the diocese for a grand sacred music concert for World Mission Sunday.",
      desc_fr: "Rejoindre des chorales du diocèse pour un grand concert de musique sacrée pour le Dimanche de la Mission.",
      category: "Community",
      free: true,
      featured: false,
    },
    {
      day: 25,
      month_en: "Dec",
      month_fr: "Déc",
      title_en: "Concert de Noël: Christmas Night Mass",
      title_fr: "Concert de Noël: Messe de Minuit",
      time: "11:30 PM to 2:00 AM",
      location: "Cathédrale Rubaga, Kampala",
      desc_en: "Our beloved annual Christmas Night Mass concert. Carols, hymns and celestial music.",
      desc_fr: "Notre concert annuel de la Messe de Minuit. Cantiques, hymnes et musique céleste.",
      category: "Liturgical",
      free: true,
      featured: true,
    },
  ],

  // ── Past Events ──────────────────────────────────────────────
  // These appear in the "Past Performances" tab on the Events page.
  past_events: [
    {
      day: 19,
      month_en: "May",
      month_fr: "Mai",
      title_en: "Pentecost Sunday Concert",
      title_fr: "Concert du Dimanche de Pentecôte",
      location: "Cathédrale Rubaga",
      category: "Liturgical",
    },
    {
      day: 9,
      month_en: "Apr",
      month_fr: "Avr",
      title_en: "Easter Vigil Mass and Concert",
      title_fr: "Messe de la Vigile Pascale et Concert",
      location: "Paroisse Saint Padre Pio",
      category: "Liturgical",
    },
    {
      day: 25,
      month_en: "Dec",
      month_fr: "Déc",
      title_en: "Christmas Night Mass Concert 2024",
      title_fr: "Concert de la Messe de Minuit 2024",
      location: "Cathédrale Rubaga, Kampala",
      category: "Liturgical",
    },
    {
      day: 23,
      month_en: "Sep",
      month_fr: "Sep",
      title_en: "Fête de Saint Padre Pio 2024",
      title_fr: "Fête de Saint Padre Pio 2024",
      location: "Paroisse Saint Padre Pio, Kampala",
      category: "Feast Day",
    },
  ],

};

// ================================================================
// DO NOT EDIT BELOW THIS LINE
// This code reads the content above and builds the page.
// ================================================================

function buildEventsHTML(lang) {
  const events = SITE_CONTENT.upcoming_events;
  if (!events.length) {
    return `<p style="color:var(--ink-muted);padding:32px 0;" data-i18n="events_no_events"></p>`;
  }
  return events.map((ev, i) => {
    const title = lang === 'fr' ? ev.title_fr : ev.title_en;
    const desc  = lang === 'fr' ? ev.desc_fr  : ev.desc_en;
    const month = lang === 'fr' ? ev.month_fr : ev.month_en;
    const freeLabel = lang === 'fr' ? 'Entrée Libre' : 'Free Entry';
    const registerLabel = lang === 'fr' ? "S'inscrire" : 'Register';
    const delay = i > 0 ? ` reveal-delay-${Math.min(i,4)}` : '';
    return `
    <div class="event-card reveal${delay}">
      <div class="event-date-block">
        <span class="day">${ev.day}</span>
        <span class="month">${month}</span>
      </div>
      <div class="event-info">
        <span class="category-badge">${ev.category}</span>
        <h3>${title}</h3>
        <div class="event-meta">
          <span class="event-meta-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            ${ev.time}
          </span>
          <span class="event-meta-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            ${ev.location}
          </span>
          ${ev.free ? `<span class="event-meta-item" style="color:var(--blue-primary);font-weight:600;">${freeLabel}</span>` : ''}
        </div>
        <p style="font-size:0.85rem;margin-top:10px;color:var(--ink-soft);">${desc}</p>
      </div>
      <div style="flex-shrink:0;">
        <a href="contact.html" class="btn ${ev.featured ? 'btn-primary' : 'btn-outline'}" style="padding:10px 18px;font-size:0.75rem;">${registerLabel}</a>
      </div>
    </div>`;
  }).join('');
}

function buildPastEventsHTML(lang) {
  return SITE_CONTENT.past_events.map((ev, i) => {
    const title = lang === 'fr' ? ev.title_fr : ev.title_en;
    const month = lang === 'fr' ? ev.month_fr : ev.month_en;
    const delay = i > 0 ? ` reveal-delay-${Math.min(i,4)}` : '';
    return `
    <div class="past-event reveal${delay}">
      <div class="past-date-block">
        <span class="day">${String(ev.day).padStart(2,'0')}</span>
        <span class="month">${month}</span>
      </div>
      <div>
        <span class="category-badge">${ev.category}</span>
        <h3 style="font-size:1rem;color:var(--ink);">${title}</h3>
        <div class="event-meta">
          <span class="event-meta-item">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            ${ev.location}
          </span>
        </div>
      </div>
    </div>`;
  }).join('');
}

function buildHomepageTeaserEvent(lang) {
  const ev = SITE_CONTENT.upcoming_events[0];
  if (!ev) return '';
  const title = lang === 'fr' ? ev.title_fr : ev.title_en;
  const month = lang === 'fr' ? ev.month_fr : ev.month_en;
  return `
  <div class="event-card" style="margin:20px 0;">
    <div class="event-date-block">
      <span class="day">${ev.day}</span>
      <span class="month">${month}</span>
    </div>
    <div class="event-info">
      <h3>${title}</h3>
      <div class="event-meta">
        <span class="event-meta-item">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          ${ev.time}
        </span>
        <span class="event-meta-item">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          ${ev.location}
        </span>
      </div>
    </div>
  </div>`;
}

// Inject contact info from SITE_CONTENT into DOM
function applyContactInfo() {
  document.querySelectorAll('[data-contact="email"]').forEach(el => el.textContent = SITE_CONTENT.email);
  document.querySelectorAll('[data-contact="phone"]').forEach(el => el.textContent = SITE_CONTENT.phone);
  document.querySelectorAll('[data-contact="address"]').forEach(el => el.textContent = SITE_CONTENT.address);
  document.querySelectorAll('[data-contact="rehearsal"]').forEach(el => {
    el.textContent = Lang.current === 'fr' ? SITE_CONTENT.rehearsal_fr : SITE_CONTENT.rehearsal_en;
  });

  // Social links
  const fb = document.querySelectorAll('[data-social="facebook"]');
  const yt = document.querySelectorAll('[data-social="youtube"]');
  const ig = document.querySelectorAll('[data-social="instagram"]');
  fb.forEach(el => el.href = SITE_CONTENT.facebook);
  yt.forEach(el => el.href = SITE_CONTENT.youtube);
  ig.forEach(el => el.href = SITE_CONTENT.instagram);
}

// Inject stats
function applyStats() {
  const map = {
    stat_years:    SITE_CONTENT.stat_years,
    stat_members:  SITE_CONTENT.stat_members,
    stat_events:   SITE_CONTENT.stat_events,
    stat_parishes: SITE_CONTENT.stat_parishes,
  };
  document.querySelectorAll('.stat-number[data-stat]').forEach(el => {
    const key = el.getAttribute('data-stat');
    if (map[key] !== undefined) {
      el.setAttribute('data-target', map[key]);
    }
  });
}

// Inject events on events.html
function applyEvents() {
  const upcomingEl = document.getElementById('events-upcoming-list');
  const pastEl     = document.getElementById('events-past-list');
  const teaserEl   = document.getElementById('homepage-event-teaser');
  const lang = Lang.current;
  if (upcomingEl) upcomingEl.innerHTML = buildEventsHTML(lang);
  if (pastEl)     pastEl.innerHTML     = buildPastEventsHTML(lang);
  if (teaserEl)   teaserEl.innerHTML   = buildHomepageTeaserEvent(lang);
}

// Run after components + translations are ready
document.addEventListener('content-ready', () => {
  applyContactInfo();
  applyStats();
  applyEvents();
});
