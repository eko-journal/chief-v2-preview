/* ============================================================
   CHIEF v2 — App Router · Bölüm 1: Altyapı
   mega menü · footer · drawer · router · header scroll
   ============================================================ */
'use strict';

/* ---- YARDIMCI ---- */
const I = {
  mail:     '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 5L2 7"/>',
  whatsapp: '<path d="M17.5 14.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.46-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.07c.15.2 2.1 3.2 5.08 4.49.7.3 1.26.49 1.7.62.7.23 1.36.2 1.87.12.57-.08 1.76-.72 2-1.41.25-.7.25-1.29.18-1.41-.08-.13-.27-.2-.57-.35z"/><path d="M20.5 3.5A11 11 0 0 0 3.2 16.8L2 22l5.3-1.4A11 11 0 1 0 20.5 3.5z"/>',
  db:       '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5"/><path d="M3 12a9 3 0 0 0 18 0"/>',
  users:    '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
  doc:      '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M16 13H8M16 17H8M10 9H8"/>',
  cal:      '<rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>',
  iot:      '<circle cx="12" cy="12" r="2"/><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"/>',
  phone:    '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>',
  chat:     '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
  check:    '<polyline points="20 6 9 17 4 12"/>',
  shield:   '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>',
  bolt:     '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
  bars:     '<line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/>',
  target:   '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
  layers:   '<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>',
  wrench:   '<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2-2 2.6-2.6z"/>',
  factory:  '<path d="M2 20h20M4 20V8l6 4V8l6 4V4h4v16"/>',
  truck:    '<path d="M1 3h15v13H1z"/><path d="M16 8h4l3 3v5h-7"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>',
  cpu:      '<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/>',
  flow:     '<rect x="3" y="3" width="6" height="6" rx="1"/><rect x="15" y="15" width="6" height="6" rx="1"/><path d="M9 6h6a3 3 0 0 1 3 3v6"/>',
  spark:    '<path d="M12 2v4M12 18v4M2 12h4M18 12h4"/><circle cx="12" cy="12" r="4"/>',
  handshake:'<path d="M11 17l2 2 4-4M2 12l4-4 5 5M14 9l3-3 5 5-5 5"/>',
  arrow:    '<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>',
  clock:    '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
  map:      '<polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/>',
  star:     '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
  quote:    '<path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/>',
};
const ico = (n, s) => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="' + (s || 20) + '" height="' + (s || 20) + '">' + (I[n] || I.flow) + '</svg>';
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

/* ================================================================
   MEGA MENÜ VERİSİ
   Platform ▾ → 2 sütun: Ürün / Kurumsal
   Çözümler ▾ → 2 sütun: Departman / Sektör
   ================================================================ */
const MEGA = {
  platform: {
    cols: [
      { label: 'Ürün', items: [
        { href: '#/platform/nasil-calisir',  title: 'Nasıl Çalışır',       desc: 'Sinyalden aksiyona 5 adım' },
        { href: '#/platform/komuta-merkezi', title: 'Komuta Merkezi',      desc: 'Tüm işler tek ekranda, gerçek zamanlı' },
        { href: '#/platform/ai-yetenekleri', title: 'AI Yetenekleri',      desc: 'Açıklanabilir, insan denetimli karar desteği' },
      ]},
      { label: 'Kurumsal', items: [
        { href: '#/platform/guvenlik',   title: 'Güvenlik & Uyumluluk', desc: 'KVKK, GDPR, rol bazlı erişim' },
        { href: '#/platform/devreye-alma', title: 'Devreye Alma',         desc: '4 haftada canlıya alın' },
        { href: '#/platform/partnerler',  title: 'Partner Ekosistemi',   desc: 'Sertifikalı çözüm ortakları' },
      ]},
    ],
  },
  'is-surecleri': {
    cols: [
      { label: 'Satış & Teklif', items: [
        { href: '#/is-surecleri/talep-potansiyel-musteri', title: 'Talep ve Fırsat Yönetimi',     desc: 'Gelen ilgiyi nitelikli fırsata çevirin' },
        { href: '#/is-surecleri/satis-ekibi-ziyaret',      title: 'Satış Ekibi ve Ziyaret',       desc: 'Ziyareti fırsata ve teklife bağlayın' },
        { href: '#/is-surecleri/teklif-talebi-bilgi',      title: 'Teklif Talebi ve Bilgi',       desc: 'Eksik talebi teklife hazır dosyaya çevirin' },
        { href: '#/is-surecleri/fiyatlama-marj-onay',      title: 'Fiyatlama, Marj ve Onay',      desc: 'Fiyat kararı kontrollü ve izlenebilir' },
        { href: '#/is-surecleri/tekliften-siparise',        title: 'Tekliften Siparişe Geçiş',     desc: 'Onaylı teklifi operasyona kayıpsız taşıyın' },
      ]},
      { label: 'Operasyon & Üretim', items: [
        { href: '#/is-surecleri/is-emri-saha-planlama',             title: 'İş Emri ve Saha Planlama',       desc: 'Doğru ekip, SLA, kanıtlı kapanış' },
        { href: '#/is-surecleri/bakim-ariza-teknik-servis',          title: 'Bakım, Arıza ve Teknik Servis',  desc: 'Ekipman geçmişi, kök neden, iyileştirme' },
        { href: '#/is-surecleri/uretim-planlama-kapasite',           title: 'Üretim Planlama ve Kapasite',    desc: 'Gerçekçi termin, görünür darboğaz' },
        { href: '#/is-surecleri/stok-yedek-parca-tedarik',           title: 'Stok ve Tedarik',                desc: 'Kritik stok bağlamıyla izlenir' },
        { href: '#/is-surecleri/fatura-tahsilat-is-kapanisi',         title: 'Fatura ve Tahsilat',             desc: 'İşten faturaya, tahsilata tek zincir' },
      ]},
    ],
  },
};
/* Eski cozumler mega menü verisi — yönlendirme için korunuyor */
const _MEGA_COZUMLER_LEGACY = {
  cols: [
    { label: 'Departman', items: [
      { href: '#/cozumler/satis-ve-teklif', title: 'Satış & Teklif',          desc: '' },
      { href: '#/cozumler/saha-operasyon',  title: 'Saha Operasyon & Servis', desc: '' },
      { href: '#/cozumler/imalat-bakim',    title: 'İmalat & Bakım',          desc: '' },
      { href: '#/cozumler/yonetim-kpi',     title: 'Yönetim & KPI',           desc: '' },
    ]},
    { label: 'Sektör', items: [
      { href: '#/sektorler/endustriyel-saha', title: 'Endüstriyel Saha', desc: '' },
      { href: '#/sektorler/imalat-uretim',    title: 'İmalat & Üretim',  desc: '' },
      { href: '#/sektorler/b2b-dagitim',      title: 'B2B Satış',        desc: '' },
    ]},
  ],
};

/* ================================================================
   FOOTER VERİSİ
   ================================================================ */
const FOOTER_COLS = {
  'fc-platform': ['Platform', [
    ['#/platform/nasil-calisir',  'Nasıl Çalışır'],
    ['#/platform/komuta-merkezi', 'Komuta Merkezi'],
    ['#/platform/ai-yetenekleri', 'AI Yetenekleri'],
    ['#/platform/guvenlik',       'Güvenlik & Uyumluluk'],
    ['#/platform/devreye-alma',   'Devreye Alma'],
  ]],
  'fc-is-surecleri': ['İş Süreçleri', [
    ['#/is-surecleri/yonetimsel-dogal-dil',    'Yönetim Katmanı'],
    ['#/is-surecleri/talep-potansiyel-musteri','Talep ve Fırsat'],
    ['#/is-surecleri/is-emri-saha-planlama',   'İş Emri & Saha'],
    ['#/is-surecleri/bakim-ariza-teknik-servis','Bakım & Teknik Servis'],
    ['#/is-surecleri/fatura-tahsilat-is-kapanisi','Fatura & Tahsilat'],
  ]],
  'fc-kaynaklar': ['Kaynaklar', [
    ['#/entegrasyonlar', 'Entegrasyonlar'],
    ['#/fiyatlandirma',  'Fiyatlandırma'],
    ['#/blog',           'Blog'],
    ['#/guvenlik',       'Güvenlik'],
    ['#/hakkimizda',     'Hakkımızda'],
  ]],
  'fc-kurum': ['İletişim', [
    ['#/demo-talep-et',               'Demo Talep Et'],
    ['tel:+902166062209',             '+90 216 606 22 09'],
    ['mailto:info@chiefai.com.tr',    'info@chiefai.com.tr'],
    ['#/hakkimizda',                  'Kandilli Teknopark'],
  ]],
};

/* ================================================================
   BLOG VERİSİ — statik, 3 makale
   ================================================================ */
const BLOG_POSTS = [
  {
    slug:    'tak-saha-servis-vakasi',
    eyebrow: 'Müşteri Hikâyesi',
    title:   'TAK-Umwelt saha servis taleplerini nasıl %65 daha hızlı kapattı',
    lead:    'WhatsApp, e-posta ve portal kanallarından gelen servis taleplerini Chief tek akışa bağladığında ne değişti.',
    date:    '2026-05-12',
    readMin: 5,
    tag:     'Saha Operasyon',
  },
  {
    slug:    'whatsapp-erp-otomasyonu',
    eyebrow: 'Rehber',
    title:   "WhatsApp'tan gelen satış talebi ERP'ye nasıl otomatik düşer",
    lead:    'Manuel veri girişi olmadan, insan denetiminde — sinyalden aksiyona döngüsünü adım adım anlıyoruz.',
    date:    '2026-04-28',
    readMin: 7,
    tag:     'Entegrasyon',
  },
  {
    slug:    'saha-gorunurlugu-haftalik-rapor',
    eyebrow: 'Analiz',
    title:   'Saha ekibi görünürlüğü neden haftalık raporla çözülmez',
    lead:    'Geç gelen rapor, geç kalan karar demektir. Gerçek zamanlı operasyonel görünürlük nasıl kurulur?',
    date:    '2026-04-10',
    readMin: 6,
    tag:     'Yönetim & KPI',
  },
];

/* ================================================================
   MEGA MENÜ — RENDER + EVENTS
   ================================================================ */
const megaC = document.getElementById('megaContainer');

function buildMega(key) {
  const m = MEGA[key]; if (!m) return '';
  return '<div class="mega" data-mega-panel="' + key + '">' +
    '<div class="mega-inner mega-2col">' +
    m.cols.map(col =>
      '<div class="mega-col">' +
      '<span class="mega-col-label">' + esc(col.label) + '</span>' +
      col.items.map(it =>
        '<a class="mega-link" href="' + it.href + '">' +
        '<span class="mt">' + esc(it.title) + '</span>' +
        '</a>'
      ).join('') +
      '</div>'
    ).join('') +
    '</div></div>';
}

let megaTimer;
document.querySelectorAll('.nav-item[data-mega]').forEach(item => {
  const key = item.getAttribute('data-mega');
  item.addEventListener('mouseenter', () => { clearTimeout(megaTimer); openMega(key, item); });
  item.addEventListener('mouseleave', () => { megaTimer = setTimeout(closeMega, 160); });
});

function openMega(key, item) {
  megaC.innerHTML = buildMega(key);
  const panel = megaC.querySelector('.mega');
  if (!panel) return;
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('open'));
  item.classList.add('open');
  requestAnimationFrame(() => panel.classList.add('show'));
  panel.addEventListener('mouseenter', () => clearTimeout(megaTimer));
  panel.addEventListener('mouseleave', () => { megaTimer = setTimeout(closeMega, 160); });
}

function closeMega() {
  const p = megaC.querySelector('.mega');
  if (p) p.classList.remove('show');
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('open'));
  setTimeout(() => { if (!megaC.querySelector('.mega.show')) megaC.innerHTML = ''; }, 220);
}

/* ================================================================
   FOOTER
   ================================================================ */
function fillFooter() {
  Object.keys(FOOTER_COLS).forEach(id => {
    const [title, links] = FOOTER_COLS[id];
    const el = document.getElementById(id);
    if (!el) return;
    el.innerHTML = '<h5>' + esc(title) + '</h5>' +
      links.map(([u, t]) => '<a href="' + u + '">' + esc(t) + '</a>').join('');
  });
}

/* ================================================================
   MOBILE DRAWER — slide-in panel pattern
   root → Platform veya Çözümler → back
   ================================================================ */
const drawer  = document.getElementById('mobileDrawer');
const mToggle = document.getElementById('mobileToggle');
let _drawerState   = 'root';
let _drawerGoBack  = false;

function _drawerRoot() {
  return '<button class="m-nav-btn" data-panel="platform">Platform <span class="m-chev">›</span></button>' +
    '<button class="m-nav-btn" data-panel="is-surecleri">İş Süreçleri <span class="m-chev">›</span></button>' +
    '<a class="m-flat" href="#/entegrasyonlar">Entegrasyonlar</a>' +
    '<a class="m-flat" href="#/fiyatlandirma">Fiyatlandırma</a>' +
    '<a class="m-flat" href="#/blog">Blog</a>' +
    '<div style="margin-top:22px"><a href="#/demo-talep-et" class="btn btn-clay btn-lg" style="width:100%;justify-content:center">Demo Talep Et</a></div>';
}

function _drawerPanel(key) {
  const m = MEGA[key];
  const label = key === 'platform' ? 'Platform' : 'İş Süreçleri';
  let h = '<button class="m-back" id="mDrawerBack">' +
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><polyline points="15 18 9 12 15 6"/></svg>' +
    label + '</button>';
  m.cols.forEach(col => {
    h += '<span class="m-panel-label">' + esc(col.label) + '</span>';
    col.items.forEach(it => { h += '<a class="m-flat-link" href="' + it.href + '">' + esc(it.title) + '</a>'; });
  });
  return h;
}

function buildDrawer() {
  const inner = _drawerState === 'root' ? _drawerRoot() : _drawerPanel(_drawerState);
  drawer.innerHTML = '<div class="m-panel' + (_drawerGoBack ? ' going-back' : '') + '">' + inner + '</div>';
  _drawerGoBack = false;

  drawer.querySelectorAll('.m-nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      _drawerState  = btn.getAttribute('data-panel');
      _drawerGoBack = false;
      buildDrawer();
    });
  });

  const backBtn = document.getElementById('mDrawerBack');
  if (backBtn) backBtn.addEventListener('click', () => {
    _drawerGoBack = true;
    _drawerState  = 'root';
    buildDrawer();
  });

  drawer.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      drawer.classList.remove('show');
      _drawerState = 'root';
    });
  });
}

if (mToggle) {
  mToggle.addEventListener('click', () => {
    if (!drawer.classList.contains('show')) {
      _drawerState = 'root';
      buildDrawer();
    }
    drawer.classList.toggle('show');
    mToggle.setAttribute('aria-label', drawer.classList.contains('show') ? 'Menüyü kapat' : 'Menüyü aç');
  });
}

/* ================================================================
   HEADER SCROLL
   ================================================================ */
(function () {
  const hdr = document.getElementById('siteHeader');
  if (!hdr) return;
  let lastY = 0;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    hdr.classList.toggle('scrolled', y > 40);
    hdr.classList.toggle('hidden', y > lastY + 60 && y > 240);
    lastY = y;
  }, { passive: true });
})();

/* ================================================================
   ROUTER
   ================================================================ */
const app      = document.getElementById('app');
const HOME_HTML = app ? app.innerHTML : '';

function go() {
  const hash  = location.hash.replace(/^#/, '') || '/';
  const parts = hash.replace(/^\//, '').split('/').filter(Boolean);
  if (drawer) drawer.classList.remove('show');
  closeMega();

  if (!parts.length) { renderHome(); window.scrollTo(0, 0); return; }

  const sec = parts[0], slug = parts[1];
  let html, label;

  if      (sec === 'platform'      && slug) { html = renderPlatformPage(slug);     label = 'Platform'; }
  else if (sec === 'platform')              { html = renderPlatformListing();      label = 'Platform'; }
  else if (sec === 'is-surecleri'  && slug) { html = renderIsSureciPage(slug);     label = 'İş Süreçleri'; }
  else if (sec === 'is-surecleri')          { html = renderIsSureciListing();      label = 'İş Süreçleri'; }
  else if (sec === 'cozumler'      && slug) { html = renderCozumlerPage(slug);     label = 'Çözümler'; }
  else if (sec === 'cozumler')              { html = renderCozumlerListing();      label = 'Çözümler'; }
  else if (sec === 'sektorler'     && slug) { html = renderSektorlerPage(slug);    label = 'Sektörler'; }
  else if (sec === 'sektorler')             { html = renderSektorlerListing();     label = 'Sektörler'; }
  else if (sec === 'entegrasyonlar')       { html = renderEntegrasyonlar();    label = 'Entegrasyonlar'; }
  else if (sec === 'fiyatlandirma')        { html = renderFiyatlandirma();     label = 'Fiyatlandırma'; }
  else if (sec === 'guvenlik')             { html = renderGuvenlik();          label = 'Güvenlik'; }
  else if (sec === 'hakkimizda')           { html = renderHakkimizda();        label = 'Hakkımızda'; }
  else if (sec === 'blog' && slug)         { html = renderBlogPost(slug);      label = 'Blog'; }
  else if (sec === 'blog')                 { html = renderBlog();              label = 'Blog'; }
  else if (sec === 'demo-talep-et')        { html = renderDemo();              label = 'Demo Talep Et'; }
  else                                     { html = renderNotFound();          label = '404'; }

  if (app) { app.setAttribute('data-screen-label', label); app.innerHTML = html; }
  window.scrollTo(0, 0);
  if (window.initReveal) window.initReveal();
  bindCalModal();
}

function renderHome() {
  if (!app) return;
  app.setAttribute('data-screen-label', 'Ana Sayfa');
  app.innerHTML = HOME_HTML;
  if (window.initReveal)        window.initReveal();
  if (window.initCounters)      window.initCounters();
  if (window.startSignalFeed)   window.startSignalFeed();
  if (window.initFlowPlayer)    window.initFlowPlayer();
  if (window.initCaseStudyModal) window.initCaseStudyModal();
  bindCalModal();
}

/* ================================================================
   RENDER YARDIMCILARI
   ================================================================ */
function crumb() {
  const parts = Array.from(arguments);
  let h = '<div class="crumbs"><a href="#/">Ana Sayfa</a>';
  parts.forEach(function(p, i) {
    h += '<span class="sep">/</span>';
    if (i < parts.length - 1 && p[1]) h += '<a href="' + p[1] + '">' + esc(p[0]) + '</a>';
    else h += '<span class="current">' + esc(p[0]) + '</span>';
  });
  return h + '</div>';
}

function finalCTA() {
  return '<section class="final-cta"><div class="container">' +
    '<h2>Bir sonraki adım: keşif görüşmesi.</h2>' +
    '<p class="lead">Operasyonunuzdaki en büyük kaybı anlatın. Hangi akışla nerede başlayabileceğinizi birlikte belirleyelim — satış toplantısı değil, gerçek bir planlama oturumu.</p>' +
    '<div class="cta-row">' +
    '<a href="#/demo-talep-et" class="btn btn-clay btn-lg">Keşif Görüşmesi Oluştur ' + ico('arrow', 16) + '</a>' +
    '<a href="#/platform/nasil-calisir" class="btn btn-ghost btn-lg">Platformu incele</a>' +
    '</div></div></section>';
}

function blogStrip(currentSlug) {
  const posts = BLOG_POSTS.filter(p => p.slug !== currentSlug).slice(0, 3);
  if (!posts.length) return '';
  return '<section class="bg-warm"><div class="container">' +
    '<div class="section-head"><span class="eyebrow">Blog</span><h2>Chief\'den son yazılar</h2></div>' +
    '<div class="blog-grid">' +
    posts.map(p =>
      '<a class="blog-card" href="#/blog/' + p.slug + '">' +
      '<span class="blog-card-tag">' + esc(p.eyebrow) + '</span>' +
      '<h4>' + esc(p.title) + '</h4>' +
      '<p class="blog-card-lead">' + esc(p.lead) + '</p>' +
      '<span class="blog-card-meta">' + esc(p.tag) + ' · ' + p.readMin + ' dk okuma</span>' +
      '</a>'
    ).join('') +
    '</div>' +
    '<div style="text-align:center;margin-top:32px"><a href="#/blog" class="btn-link">Tüm yazılar ' + ico('arrow', 15) + '</a></div>' +
    '</div></section>';
}

/* ================================================================
   BÖLÜM 2: PLATFORM SAYFALARI VERİSİ
   ================================================================ */
const PLATFORM_DATA = {
  'nasil-calisir': {
    eyebrow: 'Platform',
    h1: 'Sinyalden aksiyona. 5 adımda.',
    lead: 'WhatsApp\'tan gelen talep, e-postadaki şikayet, ERP\'deki geciken sipariş — Chief hepsini yakalar, analiz eder, doğru kişiye aksiyon olarak iletir.',
    benefitHead: 'Neden işe yarıyor?',
    benefits: [
      { icon:'layers', title:'Kurduğunuz sistemler yerinde kalır', body:'ERP, CRM, WhatsApp — Chief bunların üzerinde çalışır. Değiştirmeniz gereken hiçbir şey yok.' },
      { icon:'bolt',   title:'4 haftada canlıya alırsınız',        body:'TAK-Umwelt 3 haftada aktif oldu. Pilot akış devreye girer, ekip alışır, süreç büyür.' },
      { icon:'spark',  title:'Her öneri açıklanabilir',             body:'Chief neden o kararı önerdiğini gösterir. Kara kutu yok, kararı her zaman insan verir.' },
    ],
    howHead: 'Chief bunu nasıl yapar?',
    howSteps: [
      { num:'01', title:'Bağlan',                body:'E-posta, WhatsApp, ERP ve CRM kanallarınız Chief\'e bağlanır. Veri dışarıya çıkmaz.' },
      { num:'02', title:'Anla',                  body:'Konu, müşteri, aciliyet ve eksik bilgiler otomatik tespit edilir.' },
      { num:'03', title:'Aksiyona Geçir',        body:'Görev oluşur, sorumlu atanır, SLA belirlenir, onay zinciri kurulur.' },
      { num:'04', title:'Takip Et ve İyileştir', body:'Gecikmeler ve riskler komuta merkezinde izlenir. Haftalık özet otomatik hazırlanır.' },
    ],
    featHead: 'Ne sağlar?',
    features: [
      { icon:'mail',  title:'Çok kanallı sinyal yakalama',   body:'E-posta, WhatsApp, SMS, web form, ERP — tüm kaynaklar tek akışta.' },
      { icon:'cpu',   title:'Otomatik içerik analizi',        body:'Müşteri, konu, öncelik ve eksik bilgi otomatik çıkarılır.' },
      { icon:'check', title:'Görev ve onay akışı',            body:'SLA, sorumlu ve onay zinciri otomatik kurulur.' },
      { icon:'bars',  title:'Gerçek zamanlı komuta merkezi', body:'128 açık iş, 14 riskli kayıt, 7 onay bekleyen — tek ekranda.' },
    ],
    caseStudy: {
      logo:'logo-tak.png', company:'TAK-Umwelt GmbH', industry:'Çevre Teknolojisi · Almanya',
      quote:'"Servis talepleri telefon, e-posta ve portaldan aynı anda geliyordu. Her birini manuel olarak takibe almak ekibe büyük yük bindiriyordu. Chief ile hiçbir talep kaybolmuyor, backoffice süreci tamamen görünür hale geldi."',
      results:[{n:'-%65',l:'Manuel veri girişi süresi'},{n:'%100',l:'Talep takip görünürlüğü'},{n:'3 hafta',l:'Devreye alma süresi'},{n:'0',l:'Kayıp talep'}],
    },
    faq:[
      ['Chief hangi kanalları destekler?','E-posta, WhatsApp, SMS, web form, ERP, CRM ve REST API/webhook — mevcut sistemlerinizle doğrudan entegre olur.'],
      ['Kararları AI mi veriyor?','Hayır. Chief açıklanabilir öneriler üretir; her uygulama kararı insan tarafından verilir.'],
      ['Ne kadar sürede devreye alınır?','Hazır akış şablonlarıyla çoğu kurgu 3–4 haftada canlıya alınabilir. TAK-Umwelt 3 haftada aktif oldu.'],
    ],
  },
  'komuta-merkezi': {
    eyebrow:'Platform',
    h1:'Tüm operasyon. Tek ekranda.',
    lead:'Açık işler, gecikmeler, riskler, bekleyen onaylar — gerçek zamanlı. Haftalık rapor beklemeye son.',
    benefitHead:'Neden fark yaratıyor?',
    benefits:[
      { icon:'target', title:'Ne gecikiyor, neden — anında görülür', body:'Veri toplama değil, karar verme. Önemli olan kayıt her zaman önünüzde.' },
      { icon:'users',  title:'Kimin ne yaptığı netleşir',            body:'Görev, sorumlu, SLA ve durum — her kayıt için, gerçek zamanlı.' },
      { icon:'bars',   title:'Yönetim özeti otomatik gelir',          body:'Haftalık brifing Chief tarafından hazırlanır. Toplantıya hazır, manuel derleme yok.' },
    ],
    howHead:'Komuta merkezinde ne görürsünüz?',
    howSteps:[
      { num:'01', title:'Açık İşler',       body:'Tüm aktif görev, talep ve onaylar tek panelde, durumlarıyla birlikte.' },
      { num:'02', title:'Risk ve Gecikme',  body:'SLA aşımı ve yüksek riskli kayıtlar otomatik öne çıkarılır.' },
      { num:'03', title:'Onay Bekleyenler', body:'Onay zincirindeki tıkanıklıklar görünür, sorumluya bildirim gönderilir.' },
      { num:'04', title:'Yönetim Özeti',    body:'KPI, gecikme oranı ve iyileştirme önerileri haftalık raporla sunulur.' },
    ],
    featHead:'Temel özellikler',
    features:[
      { icon:'bars',   title:'Gerçek zamanlı gösterge paneli', body:'128 açık iş, gecikme oranı, onay bekleyenler — canlı.' },
      { icon:'bolt',   title:'Öncelik sıralaması',              body:'Risk skoru ve SLA kalan süresine göre otomatik sıralama.' },
      { icon:'target', title:'Departman bazlı görünüm',         body:'Satış, saha, üretim — her ekip kendi penceresinden görür.' },
      { icon:'doc',    title:'Haftalık yönetim özeti',           body:'Dashboard ve PDF formatında, toplantıya hazır brifing.' },
    ],
    caseStudy:{
      logo:'logo-termoinduktion.jpg', company:'Termo İndüksiyon', industry:'Endüstriyel Isıl İşlem · 1981\'den beri',
      quote:'"Satış ekibinin ziyaret notları farklı kişisel dosyalara dağılmış, doğru veriye anında ulaşmak güçleşmişti. Chief ile tüm satış hattı, toplantı çıktıları ve teklif süreçleri tek ekranda görünür."',
      results:[{n:'%98',l:'Ziyaret notu kayıt oranı'},{n:'7/24',l:'Satış hattı görünürlüğü'},{n:'-%40',l:'Raporlama hazırlık süresi'},{n:'1 ekran',l:'Tüm operasyon'}],
    },
    faq:[
      ['Komuta merkezi hangi verileri gösterir?','Açık işler, gecikme durumu, onay bekleyenler, risk skoru ve departman bazlı KPI — gerçek zamanlı.'],
      ['Mevcut raporlama araçlarımızla çakışır mı?','Chief mevcut sistemlerin üzerinde çalışır. Power BI, Excel veya ERP raporlarınızı tamamlar, değiştirmez.'],
      ['Hangi kullanıcılar erişebilir?','Rol bazlı yetkilendirme — her kullanıcı sadece kendi alanını görür. Yönetim tüm tabloyu görür.'],
    ],
  },
  'ai-yetenekleri': {
    eyebrow:'Platform · AI Native',
    h1:'Açıklanabilir yapay zeka. Kararı siz verirsiniz.',
    lead:'Chief önerir, gerekçesini gösterir. Kara kutu yok — her öneri insan denetimine açık, her karar size ait.',
    benefitHead:'Neden güvenli?',
    benefits:[
      { icon:'spark',  title:'Her öneri gerekçesiyle gelir',           body:'"Bu talep 48 saattir yanıtsız, müşteri risk skoru yüksek" — somut, anlaşılır gerekçe.' },
      { icon:'shield', title:'İnsan denetimi devre dışı bırakılamaz', body:'Chief hiçbir zaman tek başına karar vermez. Her aksiyon için insan onayı zorunludur.' },
      { icon:'layers', title:'Mevcut bilginizle öğrenir',              body:'ERP, CRM ve e-posta geçmişinizden öğrenir. Sıfırdan eğitim yok, kurulum gününden itibaren anlamlı.' },
    ],
    howHead:'AI nasıl çalışır?',
    howSteps:[
      { num:'01', title:'Sinyal Analizi',          body:'Gelen içeriği konu, müşteri, öncelik ve eksik bilgi boyutlarında otomatik yapılandırır.' },
      { num:'02', title:'Bağlam Zenginleştirme',  body:'ERP, CRM ve geçmiş iletişimden ilgili veriyi birleştirir, tam resmi oluşturur.' },
      { num:'03', title:'Açıklanabilir Öneri',     body:'Gerekçesiyle birlikte aksiyon önerir — siz onaylar, reddeder veya değiştirirsiniz.' },
      { num:'04', title:'Süreç Öğrenimi',          body:'Her onayla veya reddle daha isabetli hale gelir. Operasyonunuzu tanır.' },
    ],
    featHead:'AI yetenekleri',
    features:[
      { icon:'cpu',    title:'Doğal dil işleme',               body:'Türkçe, İngilizce ve Almanca metin — dil fark etmez, içerik anlaşılır.' },
      { icon:'target', title:'Öncelik ve risk skorlaması',      body:'Gecikme riski, müşteri değeri ve SLA — otomatik öncelik sıralaması.' },
      { icon:'doc',    title:'Otomatik bilgi tamamlama',        body:'Eksik alan tespit edilir, ilgili kaynaktan tamamlanır veya sorulur.' },
      { icon:'spark',  title:'Süreç olgunlaştırma önerileri',  body:'Tekrarlayan boşluklar tespit edilir, yeni akış önerilir.' },
    ],
    caseStudy:{
      logo:'logo-ikon.png', company:'İkon Araştırma', industry:'Pazar Araştırması & Danışmanlık',
      quote:'"Saha ekibinin anket süreçleri, proje ilerlemeleri ve verilen tekliflerin takibi e-posta ve WhatsApp karmaşasındaydı. Chief ile saha koordinasyonu ve teklif yönetimi tek platforma taşındı."',
      results:[{n:'7/24',l:'Saha ekibi görünürlüğü'},{n:'%100',l:'Teklif takip oranı'},{n:'-%55',l:'Koordinasyon e-postası'},{n:'2 hafta',l:'Devreye alma süresi'}],
    },
    faq:[
      ['Chief hangi yapay zeka modelini kullanıyor?','Chief, operasyonel bağlam için özelleştirilmiş büyük dil modelleri kullanır. Model tercihini kurulum sırasında konuşuruz.'],
      ['Verilerimiz AI eğitimi için kullanılıyor mu?','Hayır. Kurumsal veriniz yalnızca kendi operasyonunuz için kullanılır, asla üçüncü taraflarla paylaşılmaz.'],
      ['Chief mevcut ERP mantığımı bozmaz mı?','Chief karar vermez, önerir. ERP\'nizin iş mantığı değişmez — Chief üstüne görünürlük ve aksiyon katmanı ekler.'],
    ],
  },
  'guvenlik': {
    eyebrow:'Kurumsal',
    h1:'KVKK ve GDPR uyumlu. Veri yerinde kalır.',
    lead:'Kurumsal veriniz kendi altyapınızda. Rol bazlı yetkilendirme, denetim kayıtları ve on-prem kurulum seçeneğiyle.',
    benefitHead:'Güvenliğin temelleri',
    benefits:[
      { icon:'shield', title:'Veri asla dışarıya çıkmaz',  body:'On-prem ve hibrit kurulum seçenekleriyle verileriniz kendi sunucularınızda kalır.' },
      { icon:'check',  title:'KVKK ve GDPR uyumlu',        body:'TAK-Umwelt Almanya operasyonu için GDPR onaylı kurulum yapılandırıldı.' },
      { icon:'users',  title:'Rol bazlı erişim kontrolü',  body:'Kim neyi görebilir, kim ne yapabilir — her yetki açıkça tanımlanır ve denetlenir.' },
    ],
    howHead:'Güvenli kurulum adımları',
    howSteps:[
      { num:'01', title:'Altyapı Seçimi',    body:'Cloud, on-prem veya hibrit — güvenlik gereksinimlerinize göre kurulum mimarisi belirlenir.' },
      { num:'02', title:'Kimlik ve Erişim',  body:'SSO, rol bazlı yetkilendirme ve çok faktörlü doğrulama yapılandırılır.' },
      { num:'03', title:'Denetim ve İzleme', body:'Tüm işlemler kayıt altında. Kim, ne zaman, ne yaptı — tam denetim kaydı.' },
      { num:'04', title:'Uyumluluk Belgesi', body:'KVKK ve GDPR uyumluluk raporu kurulum sonrası hazırlanır.' },
    ],
    featHead:'Güvenlik özellikleri',
    features:[
      { icon:'shield', title:'KVKK & GDPR uyumu',         body:'Veri işleme sözleşmesi, saklama süreleri ve silme politikaları yapılandırılır.' },
      { icon:'layers', title:'On-prem ve hibrit kurulum', body:'Veri kendi sunucularınızda kalır. Bulut bağımlılığı opsiyoneldir.' },
      { icon:'check',  title:'Rol bazlı yetkilendirme',   body:'Departman, görev ve veri türüne göre granüler erişim kontrolü.' },
      { icon:'doc',    title:'Tam denetim kaydı',          body:'Her işlem zaman damgalı, değiştirilemez kayıt altında.' },
    ],
    caseStudy:{
      logo:'logo-tak.png', company:'TAK-Umwelt GmbH', industry:'Çevre Teknolojisi · Almanya',
      quote:'"Almanya operasyonumuz için GDPR uyumluluğu kritikti. Chief\'in on-prem kurulumu ve veri izolasyonu, hukuk biriminin onayını ilk görüşmede aldı."',
      results:[{n:'GDPR',l:'Almanya operasyonu onaylı'},{n:'KVKK',l:'Türkiye uyumlu'},{n:'%100',l:'On-prem veri izolasyonu'},{n:'0',l:'Dışarıya çıkan veri'}],
    },
    faq:[
      ['Veri nerede saklanıyor?','Kurulum tercihine göre kendi sunucularınızda (on-prem), özel bulut ortamınızda veya hibrit yapıda. Veri hiçbir zaman Chief sunucularına geçmez.'],
      ['GDPR uyumluluğu nasıl sağlanıyor?','Veri işleme sözleşmesi, silme ve saklama politikaları kurulum sırasında yapılandırılır. TAK-Umwelt Almanya operasyonu referans alınabilir.'],
      ['SSO entegrasyonu var mı?','Evet. Azure AD, Okta ve SAML 2.0 desteklenir.'],
    ],
  },
  'devreye-alma': {
    eyebrow:'Kurumsal',
    h1:'4 haftada canlıya alırsınız.',
    lead:'Mevcut sistemlerinizle çalışır. Yeni bir ERP veya CRM projesi değil — var olan altyapınızın üzerine karar ve akış katmanı eklenir.',
    benefitHead:'Neden bu kadar hızlı?',
    benefits:[
      { icon:'bolt',      title:'Hazır akış şablonları',     body:'Sektörde test edilmiş kurgu şablonları — günler içinde operasyona geçilir, sıfırdan başlamak yok.' },
      { icon:'layers',    title:'Mevcut sistemler değişmez', body:'SAP, Logo, Netsis, Salesforce — Chief bunların üzerinde çalışır. Hiçbirini değiştirmezsiniz.' },
      { icon:'handshake', title:'Partner ekibi yanınızda',   body:'Sertifikalı çözüm ortağı, ilk akışın canlıya alınmasına kadar destek verir.' },
    ],
    howHead:'4 adımda devreye alma',
    howSteps:[
      { num:'01', title:'Keşif (Hafta 1–2)',          body:'WhatsApp, e-posta, ERP kaynaklarınız haritalandırılır. En çok zaman kaybettiren akış seçilir.' },
      { num:'02', title:'Bağlantı (Hafta 2–3)',        body:'Chief entegrasyonları kurulur. KVKK uyumlu güvenlik yapılandırması tamamlanır.' },
      { num:'03', title:'İlk Akış Canlı (Hafta 3–5)', body:'Pilot akış gerçek veriyle devreye girer. Komuta merkezi aktivasyonu ve ekip eğitimi.' },
      { num:'04', title:'Büyüme (Hafta 6+)',           body:'Her sprintte yeni akışlar eklenir. Chief operasyonunuzu öğrendikçe daha isabetli öneriler üretir.' },
    ],
    featHead:'Devreye almayı kolaylaştıran şeyler',
    features:[
      { icon:'bolt',      title:'Hazır akış kütüphanesi',             body:'20+ sektörle test edilmiş akış şablonu. Sıfırdan tasarım gerekmez.' },
      { icon:'handshake', title:'Sertifikalı partner ağı',             body:'Bölgenizdeki partner kurulum sürecini yönetir, SLA\'yı garanti eder.' },
      { icon:'layers',    title:'Kademeli genişleme',                  body:'Bir akışla başlayın, her ay yenisini ekleyin. Büyük başlangıç maliyeti yok.' },
      { icon:'check',     title:'Başarı kriterleri önceden belirlenir',body:'Ne ölçeceğinizi, ne zaman başarılı saydığınızı kurulumdan önce netleştiririz.' },
    ],
    caseStudy:{
      logo:'logo-tak.png', company:'TAK-Umwelt GmbH', industry:'Çevre Teknolojisi · Almanya',
      quote:'"3 hafta içinde saha servis akışımız canlıya geçti. Beklentimiz 2 aydı. Pilot akışın somut sonuçlarını görünce hemen ikinci akışı planlamaya başladık."',
      results:[{n:'3 hafta',l:'İlk akış canlı'},{n:'2 akış',l:'İlk ayda devreye'},{n:'%100',l:'ERP entegrasyonu korunsun'},{n:'0',l:'Sistem değişikliği'}],
    },
    faq:[
      ['Partner olmadan kurulum yapabilir miyiz?','Evet, teknik ekibiniz varsa doğrudan kurulum yapabilirsiniz. Ancak partner ekosistemi daha hızlı ve garantili sonuç verir.'],
      ['Pilot akış ne kadar sürer?','Bağlantı ve akış yapılandırmasına bağlı olarak 2–4 hafta. Hazır şablon kullanılırsa bu süre kısalır.'],
      ['Mevcut ERP projemiz devam ederken Chief kurulabilir mi?','Evet. Chief, ERP\'nizin üzerinde bağımsız çalışır. ERP projesi tamamlanmadan da devreye alınabilir.'],
    ],
  },
};

/* ================================================================
   SAYFA SENARYOLARI — Ogilvy formülü: Kim + Ne oldu + Süre + Sonuç
   ================================================================ */
const PAGE_SCENARIOS = {
  'nasil-calisir': {
    text: 'Konya\'daki bir üretim tesisinin bakım sorumlusu sabah 07:14\'te WhatsApp\'tan yazdı: "Hat 3 durdu, sızdırmazlık arızası." Chief bu mesajı okudu, ERP\'den ekipman geçmişini çekti, 9 dakika içinde iş emrini oluşturdu ve en yakın teknisyeni atadı. Bakım sorumlusu ekrana bakmadı, sisteme girmedi — sadece mesaj attı.',
    cite: 'TAK-Umwelt GmbH · Çevre Teknolojisi, Almanya',
  },
  'komuta-merkezi': {
    text: 'Termo İndüksiyon\'un satış müdürü Pazartesi sabahı sekiz buçukta ekranını açtı: 47 açık kayıt, 12\'si onay bekliyor, 3\'ü riskli. Toplantıya girmeden önce 4 dakikada tüm satış hattını gördü. Kimseye sormak zorunda kalmadı, hiçbir rapor hazırlamak zorunda kalmadı.',
    cite: 'Termo İndüksiyon · Endüstriyel Isıl İşlem, 1981\'den beri',
  },
  'ai-yetenekleri': {
    text: 'İkon Araştırma\'nın saha koordinatörü her sabah 15-20 WhatsApp mesajını tek tek okuyup hangisinin acil, hangisinin rutin olduğuna karar veriyordu — günde 45 dakika. Chief bu mesajları okudu, proje kodlarıyla eşleştirdi, öncelik sıralamasını hazırladı. Koordinatör sadece onayladı. 45 dakika 6 dakikaya indi.',
    cite: 'İkon Araştırma · Pazar Araştırması & Danışmanlık',
  },
  'guvenlik': {
    text: 'TAK-Umwelt\'in hukuk birimi Chief\'i GDPR uyumluluk raporunu gördükten sonra onayladı — ilk görüşmede. Veriler Frankfurt\'taki kendi sunucularında kalıyor; Chief o sunucuya bağlanıyor ama hiçbir veri dışarıya çıkmıyor. Almanya operasyonu için bu kırılmazdı.',
    cite: 'TAK-Umwelt GmbH · Çevre Teknolojisi, Almanya',
  },
  'devreye-alma': {
    text: 'TAK-Umwelt\'in IT departmanı müdahale etmedi. Birinci haftada WhatsApp ve e-posta kanalları bağlandı, ikinci haftada ERP entegrasyonu tamamlandı, üçüncü haftada gerçek verilerle çalışmaya başlandı. Toplam: 3 hafta. Beklenti 2 aydı.',
    cite: 'TAK-Umwelt GmbH · Çevre Teknolojisi, Almanya',
  },
  'satis-ve-teklif': {
    text: 'Termo İndüksiyon\'un satış temsilcisi müşteriyle görüşmesini bitirdi ve "teklif iste" yazdı. Chief görüşme notunu ERP\'deki müşteri geçmişiyle eşleştirdi, eksik bilgileri sordu, 18 dakika sonra taslak teklif dosyasını hazırladı. Temsilci sadece onayladı.',
    cite: 'Termo İndüksiyon · Endüstriyel Isıl İşlem',
  },
  'saha-operasyon': {
    text: 'TAK-Umwelt\'te Cuma öğleden sonra gelen acil servis talebi hafta sonu kaybolmuyordu artık. Chief talebi aldı, ERP\'den sözleşme koşullarını çekti, en yakın müsait teknisyeni tespit etti ve Pazartesi sabahı ekip çalışmaya hazır halde ofise geldi. 0 manuel takip.',
    cite: 'TAK-Umwelt GmbH · Çevre Teknolojisi, Almanya',
  },
  'imalat-bakim': {
    text: 'Periyodik bakım tarihi geldiğinde TAK-Umwelt\'te kimse hatırlatmak zorunda değildi. Chief ERP\'deki bakım takvimini okudu, teknisyen atamasını önerdi, yedek parça stok durumunu kontrol etti. Bakım tamamlandı, kapanış belgesi sisteme girdi — 0 gecikme.',
    cite: 'TAK-Umwelt GmbH · Endüstriyel Saha Hizmetleri',
  },
  'yonetim-kpi': {
    text: 'Termo İndüksiyon\'un genel müdürü Pazartesi toplantısına hazırlık yapmak zorunda kalmıyordu artık. Chief Pazar gecesi haftalık özeti hazırladı: %94 teklif SLA, 3 riskli müşteri, ortalama onay süresi 4.2 saat. Toplantı 12 dakika sürdü.',
    cite: 'Termo İndüksiyon · Endüstriyel Isıl İşlem',
  },
  'endustriyel-saha': {
    text: 'TAK-Umwelt\'in saha ekibi Frankfurt ve çevresinde 40+ aktif müşteri lokasyonunu yönetiyor. Önceden: telefon + Excel + e-posta. Şimdi: her talep Chief\'e geliyor, her iş emri izleniyor, her kapanış belgeleniyor. Hiçbir talep kaybolmuyor.',
    cite: 'TAK-Umwelt GmbH · Çevre Teknolojisi, Almanya',
  },
  'b2b-dagitim': {
    text: 'Termo İndüksiyon\'un satış ekibi haftada 15-20 müşteri ziyareti yapıyor. Önceden: ziyaret notları kişisel dosyalarda, teklif süreçleri e-postada, sipariş durumu ERP\'de — hiçbiri birbirine bağlı değil. Şimdi hepsi Chief\'te, müdür gerçek zamanlı görüyor.',
    cite: 'Termo İndüksiyon · Endüstriyel Isıl İşlem',
  },
  'imalat-uretim': {
    text: 'İkon Araştırma\'nın saha ekibi 50+ lokasyonda anket yürütüyor. Koordinasyon WhatsApp\'ta, raporlar e-postada, teklif durumu belirsiz. Chief tüm saha akışını tek platforma taşıdı: görev ataması, saha kaydı, onay ve faturalama zinciri. Koordinasyon süresi yarıya indi.',
    cite: 'İkon Araştırma · Pazar Araştırması & Danışmanlık',
  },
};

/* ================================================================
   ORTAK SAYFA RENDERER — 4 ekran, az scroll
   Hero → 3 nokta (narrative) → Müşteri hikayesi → SSS
   ================================================================ */
function renderRichPage(data, parentLabel, parentHref, slug) {
  var cs  = data.caseStudy;
  var sc  = PAGE_SCENARIOS[slug] || null;
  var h   = '';

  // Ekran 1: Hero — eyebrow + h1 + kısa lead + senaryo paragrafı
  h += '<section class="detail-hero"><div class="container">' +
    crumb([parentLabel, parentHref], [data.h1]) +
    '<span class="eyebrow">' + esc(data.eyebrow) + '</span>' +
    '<h1 style="margin-top:16px;max-width:760px">' + esc(data.h1) + '</h1>' +
    '<p class="lead" style="max-width:620px">' + esc(data.lead) + '</p>';
  if (sc) {
    h += '<blockquote class="rp-scenario">' + esc(sc.text) +
      '<cite>' + esc(sc.cite) + '</cite></blockquote>';
  }
  h += '</div></section>';

  // Ekran 2: 3 temel nokta — borderless, icon + başlık + metin
  h += '<section><div class="container">' +
    '<div class="rich-points">' +
    data.benefits.map(function(b, n) {
      return '<div class="rp-item">' +
        '<div class="rp-icon ' + (n===1?'sage':n===2?'blue':'') + '">' + ico(b.icon, 22) + '</div>' +
        '<div><h3>' + esc(b.title) + '</h3><p>' + esc(b.body) + '</p></div>' +
        '</div>';
    }).join('') +
    '</div></div></section>';

  // Ekran 3: Müşteri hikayesi — enhanced case study
  h += '<section class="bg-warm"><div class="container">' +
    '<div class="cs-block">' +
    '<div class="cs-header">' +
    '<div class="sp-logo-img-wrap"><img src="' + cs.logo + '" alt="' + esc(cs.company) + '" class="sp-logo-img"></div>' +
    '<div><div class="sp-company">' + esc(cs.company) + '</div><div class="sp-industry">' + esc(cs.industry) + '</div></div>' +
    '</div>' +
    '<blockquote class="sp-quote">' + esc(cs.quote) + '</blockquote>' +
    '<div class="sp-metrics">' +
    cs.results.map(function(r) {
      return '<div class="sp-metric"><span class="sp-num">' + esc(r.n) + '</span><span class="sp-label">' + esc(r.l) + '</span></div>';
    }).join('') +
    '</div></div></div></section>';

  // Ekran 4: SSS — 2-3 soru
  h += '<section><div class="container narrow">' +
    '<div class="section-head"><span class="eyebrow">SSS</span></div>' +
    data.faq.map(function(f) {
      return '<details class="faq-item"><summary>' + esc(f[0]) + '</summary><p>' + esc(f[1]) + '</p></details>';
    }).join('') +
    '</div></section>';

  return h;
}

/* ================================================================
   PLATFORM SAYFALARI
   ================================================================ */
function renderPlatformPage(slug) {
  var data = PLATFORM_DATA[slug];
  if (!data) return _stub('Platform', slug);
  return renderRichPage(data, 'Platform', '#/platform', slug);
}

/* ================================================================
   BÖLÜM 3: ÇÖZÜMLER SAYFALARI VERİSİ
   ================================================================ */
const COZUMLER_DATA = {
  'satis-ve-teklif': {
    eyebrow: 'Çözüm · Satış',
    h1: 'Teklif süreciniz artık satış ekibine bağlı değil.',
    lead: 'Talep geldi, bilgi toplandı, teklif hazırlandı — temsilci sahada, Chief ofiste çalışıyor.',
    benefitHead: 'Ne değişir?',
    benefits: [
      { icon:'target', title:'Hiçbir talep kaybolmuyor',    body:'WhatsApp, e-posta, web form — her kanal yakalanır. Talep nerede, kim sorumlu, ne aşamada: tek ekranda.' },
      { icon:'doc',    title:'Bilgi tamamlama otomatik',    body:'Chief eksik bilgiyi tespit eder, müşteriden ister veya ERP\'den çeker. Temsilci boş teklif göndermez.' },
      { icon:'check',  title:'Onay zinciri netleşir',       body:'Marj kontrolü, yetki bazlı onay, SLA — her adım kayıt altında. Onay gecikmesi görünür, hesap sorulabilir.' },
    ],
    caseStudy: {
      logo:'logo-termoinduktion.jpg', company:'Termo İndüksiyon', industry:'Endüstriyel Isıl İşlem · 1981\'den beri',
      quote:'"Satış ekibimizin ziyaret notları farklı kişisel dosyalara dağılmış, doğru veriye anında ulaşmak güçleşmişti. Chief ile tüm satış hattı, toplantı çıktıları ve teklif süreçleri tek ekranda görünür. Artık müdür sahadan dönen temsilciyi arayıp sormak zorunda değil."',
      results:[{n:'%98',l:'Ziyaret notu kayıt oranı'},{n:'-%42',l:'Teklif hazırlama süresi'},{n:'7/24',l:'Satış hattı görünürlüğü'},{n:'0',l:'Kayıp talep'}],
    },
    faq:[
      ['Mevcut CRM\'imizle çakışır mı?','Hayır. Chief CRM\'inizin üzerinde çalışır — veriyi oraya yazar, oradan okur. CRM\'i değiştirmeniz gerekmez.'],
      ['Teklif şablonlarımızı kullanabilir miyiz?','Evet. Mevcut Word, Excel veya ERP teklif şablonlarınızla entegre çalışır.'],
      ['Onay yetkisi nasıl tanımlanır?','Marj eşiği, müşteri büyüklüğü veya teklif tutarına göre özelleştirilebilir onay zincirleri kurulur.'],
    ],
  },
  'saha-operasyon': {
    eyebrow: 'Çözüm · Saha Operasyon',
    h1: 'Sahadan gelen her talep göreve dönüşür.',
    lead: 'İş emri oluşturulsun, teknisyen atansın, kapanış belgelensin — kimse manuel takip etmek zorunda kalmasın.',
    benefitHead: 'Ne değişir?',
    benefits: [
      { icon:'phone',  title:'Hiçbir talep kaybolmuyor',     body:'WhatsApp, telefon, e-posta, portal — her kanal tek akışa bağlı. Cuma öğleden sonra gelen talep Pazartesi kayboluyor.' },
      { icon:'wrench', title:'Teknisyen ataması optimize',   body:'En yakın, en müsait, doğru yetkinlikte — Chief öneriyi hazırlar, dağıtım koordinatörü onaylar.' },
      { icon:'check',  title:'Kapanış kanıtlanır',           body:'Fotoğraf, imza, zaman damgası — her iş emri belgelenmiş kapanır. Müşteri itirazı, sigorta talebi, denetim: hepsi hazır.' },
    ],
    caseStudy: {
      logo:'logo-tak.png', company:'TAK-Umwelt GmbH', industry:'Çevre Teknolojisi · Almanya',
      quote:'"Servis talepleri telefon, e-posta ve portaldan aynı anda geliyordu. Her birini manuel olarak takibe almak ve belgelendirmek ekibe büyük yük bindiriyordu. Chief ile hiçbir talep kaybolmuyor, her iş emrinin durumu gerçek zamanlı görünüyor, kapanış belgesi otomatik oluşuyor."',
      results:[{n:'-%65',l:'Manuel veri girişi süresi'},{n:'%100',l:'Talep takip görünürlüğü'},{n:'-%38',l:'Yanıt süresi'},{n:'0',l:'Kayıp talep'}],
    },
    faq:[
      ['Teknisyenler mobil cihazdan kullanabilir mi?','Evet. iOS ve Android saha uygulaması üzerinden iş emri alma, durum güncelleme ve kapanış belgesi yükleme yapılabilir.'],
      ['Müşteriye otomatik bildirim gönderilebilir mi?','Evet. İş emri oluşturulduğunda, teknisyen yola çıktığında ve iş tamamlandığında müşteriye otomatik SMS veya e-posta gönderilir.'],
      ['Birden fazla lokasyonda çalışıyor mu?','Evet. TAK-Umwelt 40+ lokasyonu tek Chief kurulumundan yönetiyor.'],
    ],
  },
  'imalat-bakim': {
    eyebrow: 'Çözüm · İmalat & Bakım',
    h1: 'Makine durmadan önce Chief bilir.',
    lead: 'Periyodik bakım zamanında yapılır, arıza hızla çözülür, yedek parça stoğu kritik eşiğe inmeden uyarı verilir.',
    benefitHead: 'Ne değişir?',
    benefits: [
      { icon:'cal',    title:'Bakım takvimi otomatik yönetilir', body:'ERP\'deki bakım planı Chief\'e bağlı. Son bakım tarihi, bir sonraki görev, sorumlu teknisyen — hatırlatma gerekmez.' },
      { icon:'wrench', title:'Arıza süresini kısaltır',           body:'Teknisyen WhatsApp\'tan yazdığında Chief iş emrini hazır eder. Ekipman geçmişi, yedek parça durumu — 9 dakikada.' },
      { icon:'layers', title:'Stok uyarısı proaktif gelir',      body:'Kritik yedek parça eşiğe yaklaşırken sipariş önerisi üretir. Parça bekleyerek duran hat biter.' },
    ],
    caseStudy: {
      logo:'logo-tak.png', company:'TAK-Umwelt GmbH', industry:'Çevre Teknolojisi · Almanya',
      quote:'"Periyodik bakım tarihleri Excel\'de takip ediliyordu, arada kayıyor ve gecikiyordu. Arıza geldiğinde ise ekipman geçmişini bulmak için 3 farklı sisteme giriyorduk. Chief ile bakım takvimi otomatik, arıza geldiğinde iş emri dakikalar içinde hazır."',
      results:[{n:'-%71',l:'Plansız arıza süresi'},{n:'%100',l:'Zamanında bakım oranı'},{n:'9 dk',l:'Arızadan iş emirine'},{n:'-%28',l:'Yedek parça stok fazlası'}],
    },
    faq:[
      ['ERP\'deki bakım planları otomatik aktarılır mı?','Evet. SAP, Logo ve Netsis entegrasyonu ile mevcut bakım takvimleriniz otomatik senkronize edilir.'],
      ['IoT sensör verisi entegre edilebilir mi?','Evet. Makine verisinden gelen anormal okumalar Chief\'e sinyal olarak iletilir, önleyici bakım önerisi üretilir.'],
      ['Yedek parça siparişi otomatik verilir mi?','Hayır — Chief sipariş önerir, onay insan tarafından verilir. Her aksiyon insan denetiminde.'],
    ],
  },
  'yonetim-kpi': {
    eyebrow: 'Çözüm · Yönetim & KPI',
    h1: 'Haftalık brifing artık kendiliğinden hazır.',
    lead: 'Satış, saha, üretim — tüm operasyonun nabzı, Pazartesi sabahı ekranınızda. Hiç kimseyi aramadan.',
    benefitHead: 'Ne değişir?',
    benefits: [
      { icon:'bars',   title:'Rapor beklemek bitti',          body:'Chief haftalık özeti otomatik hazırlar. Hangi KPI\'lar iyi, nerede gecikme var, ne önlem alınmalı — toplantıya hazır.' },
      { icon:'bolt',   title:'Risk erken görünür',             body:'Gecikme, SLA aşımı, riskli müşteri — olaydan önce görürsünüz. Kriz yönetimi değil, önleyici aksiyon.' },
      { icon:'target', title:'Departman bazlı görünürlük',    body:'Satış müdürü satışı, saha koordinatörü sahayı, üretim müdürü kapasiteyi görür. Herkes kendi tablosuna sahip.' },
    ],
    caseStudy: {
      logo:'logo-termoinduktion.jpg', company:'Termo İndüksiyon', industry:'Endüstriyel Isıl İşlem · 1981\'den beri',
      quote:'"Pazartesi toplantısına her hafta veri toplamak için Cuma günü başlardık — satıştan, sahadan, muhasebeden ayrı ayrı sorardık. Chief ile o toplantı hazırlığı tamamen ortadan kalktı. Pazar gecesi özet geliyor, Pazartesi toplantısı 12 dakika sürüyor."',
      results:[{n:'-%80',l:'Rapor hazırlama süresi'},{n:'12 dk',l:'Ort. yönetim toplantısı'},{n:'7/24',l:'Gerçek zamanlı KPI erişimi'},{n:'3 gün',l:'Risk öncesi uyarı süresi'}],
    },
    faq:[
      ['Hangi KPI\'lar takip edilebilir?','Satış SLA, teklif dönüşüm oranı, saha yanıt süresi, bakım zamanında tamamlanma, NPS — her departman için özelleştirilebilir.'],
      ['Yönetim özeti hangi formatlarda geliyor?','Dashboard (gerçek zamanlı), haftalık PDF özet ve e-posta brifing. Mobil görünüm de desteklenir.'],
      ['Hedef değerler (target) tanımlanabilir mi?','Evet. Her KPI için üst/alt eşik tanımlanır, sapma olduğunda uyarı gönderilir.'],
    ],
  },
};

/* ================================================================
   ÇÖZÜMLER SAYFALARI
   ================================================================ */
function renderCozumlerPage(slug) {
  var data = COZUMLER_DATA[slug];
  if (!data) return _stub('Çözümler', slug);
  return renderRichPage(data, 'Çözümler', '#/cozumler', slug);
}

/* ================================================================
   STUB RENDER FONKSİYONLARI (Bölüm 4–5'te içerik doldurulacak)
   ================================================================ */
/* ================================================================
   BÖLÜM 4: SEKTÖRLER SAYFALARI VERİSİ
   ================================================================ */
const SEKTORLER_DATA = {
  'endustriyel-saha': {
    eyebrow: 'Sektör · Endüstriyel Saha',
    h1: 'Her iş emri izlenir. Her kapanış belgelenir.',
    lead: 'Çevre teknolojisi, tesis bakım, teknik servis — saha operasyonu artık tek merkezden, gerçek zamanlı yönetilir.',
    benefitHead: 'Bu sektörde Chief ne değiştirir?',
    benefits: [
      { icon:'flow',   title:'Talep → iş emri → kapanış otomatik akışta', body:'Telefon, WhatsApp, e-posta, portal — hangi kanaldan gelirse gelsin, talep iş emrine dönüşür, kapanış belgelenir.' },
      { icon:'shield', title:'GDPR ve KVKK uyumlu',                       body:'Almanya operasyonu da dahil. Veri kendi altyapınızda kalır, denetim kaydı tam.' },
      { icon:'map',    title:'Saha ekibi gerçek zamanlı görünür',         body:'Kim nerede, hangi işte, ne aşamada — koordinatör telefon etmek zorunda değil.' },
    ],
    caseStudy: {
      logo:'logo-tak.png', company:'TAK-Umwelt GmbH', industry:'Çevre Teknolojisi · Almanya',
      quote:'"40+ lokasyonda aktif müşterimiz var. Önceden her servis talebini telefon ve e-postayla takip ediyorduk — taleplerin bir kısmı kayboluyordu, kapanış belgesi eksik kalıyordu. Chief ile hiçbir talep kaybolmuyor, her iş emrinin kapanış belgesi otomatik oluşuyor."',
      results:[{n:'40+',l:'Aktif lokasyon'},{n:'-%65',l:'Manuel takip süresi'},{n:'%100',l:'Talep görünürlüğü'},{n:'0',l:'Kayıp talep'}],
    },
    faq:[
      ['Hangi saha hizmet sektörleri için uygundur?','Çevre teknolojisi, tesis yönetimi, teknik servis, güvenlik sistemleri, asansör bakımı — iş emri ve saha ekibi koordinasyonu olan her sektör.'],
      ['Müşteri lokasyon bazlı takip yapılabiliyor mu?','Evet. Her lokasyon, ekipman ve müşteri sözleşmesi Chief\'te tanımlı — geçmiş iş emirleri, SLA performansı ve açık işler lokasyon bazlı görülür.'],
      ['Almanya veya AB\'de kullanım için GDPR uyumu nasıl sağlanır?','On-prem veya AB bulut kurulumu seçeneğiyle veri AB sınırları içinde kalır. TAK-Umwelt referans kurulum için iletişime geçin.'],
    ],
  },
  'b2b-dagitim': {
    eyebrow: 'Sektör · B2B Satış & Dağıtım',
    h1: 'Sahadan teklife, tekliften siparişe — kesintisiz.',
    lead: 'Satış ekibi sahada, yönetim ofiste — herkes aynı anda aynı veriyi görür. Haftalık rapor yerine anlık görünürlük.',
    benefitHead: 'Bu sektörde Chief ne değiştirir?',
    benefits: [
      { icon:'truck',  title:'Ziyaret notu kaybolmuyor',     body:'Temsilci görüşmeden çıkıp WhatsApp\'tan not attı — Chief ERP\'ye bağladı, müşteri dosyasına ekledi, takip görevini oluşturdu.' },
      { icon:'doc',    title:'Teklif süreci şeffaf',         body:'Kim ne teklif verdi, hangi onay aşamasında, müşteri ne yanıt verdi — satış müdürü sormak zorunda değil.' },
      { icon:'bars',   title:'Müdür beklemeden görür',       body:'Haftalık Excel raporu değil. Gerçek zamanlı satış hattı — hangi fırsat sıcak, hangisi soğuyor, hangi temsilci geride.' },
    ],
    caseStudy: {
      logo:'logo-termoinduktion.jpg', company:'Termo İndüksiyon', industry:'Endüstriyel Isıl İşlem · 1981\'den beri',
      quote:'"Satış temsilcilerimizin notları kendi bilgisayarlarındaydı. Biri izne çıktığında o müşterinin geçmişine ulaşamıyorduk. Chief ile tüm satış hattı şirketin ortak hafızasında — temsilci değişse de bilgi kaybolmuyor."',
      results:[{n:'%98',l:'Ziyaret notu kayıt oranı'},{n:'7/24',l:'Satış hattı görünürlüğü'},{n:'-%42',l:'Teklif hazırlama süresi'},{n:'0',l:'Bilgi kaybı'}],
    },
    faq:[
      ['CRM\'imiz varsa Chief ne ekler?','CRM müşteri verisini tutar. Chief sinyalleri yakalar, aksiyona çevirir ve yönetim görünürlüğü sağlar — ikisi birbirini tamamlar.'],
      ['Temsilciler sahadan nasıl veri girer?','WhatsApp ile kısa not, mobil uygulama ile yapılandırılmış ziyaret raporu — iki seçenek de desteklenir.'],
      ['Rakip fiyat ve pazar bilgisi takip edilebilir mi?','Temsilcilerin görüşmelerde not aldığı rakip bilgileri Chief\'e yapılandırılmış veri olarak aktarılabilir.'],
    ],
  },
  'imalat-uretim': {
    eyebrow: 'Sektör · İmalat & Üretim',
    h1: 'Üretim planından teslimat takibine tek platform.',
    lead: 'Saha ekibi, backoffice ve yönetim — aynı anda, aynı veriyle. Koordinasyon e-postası olmadan.',
    benefitHead: 'Bu sektörde Chief ne değiştirir?',
    benefits: [
      { icon:'cpu',    title:'Proje koordinasyonu basitleşir',      body:'Saha, ofis ve müşteri arasındaki iletişim tek kanala taşınır. Kimin ne bilmesi gerektiği, Chief tarafından iletilir.' },
      { icon:'flow',   title:'Teklif–üretim–teslimat zinciri görünür', body:'Her aşama takip edilir. Gecikme nerede başladı, hangi adım tıkandı — kriz olmadan önce görülür.' },
      { icon:'smile',  title:'Müşteri geri bildirimi aksiyona dönüşür', body:'NPS, şikayet, öneri — Chief sıradaki adımı önerir, ilgili ekibe iletir, takibini yapar.' },
    ],
    caseStudy: {
      logo:'logo-ikon.png', company:'İkon Araştırma', industry:'Pazar Araştırması & Danışmanlık',
      quote:'"50+ lokasyonda saha ekibi çalıştırıyoruz. Koordinasyon WhatsApp\'ta, raporlar e-postada, teklif durumu belirsizdi. Chief tüm saha akışını tek platforma taşıdı. Koordinasyon için harcanan süre yarıya indi, teklif takip oranı %100\'e çıktı."',
      results:[{n:'50+',l:'Aktif lokasyon'},{n:'-%50',l:'Koordinasyon süresi'},{n:'%100',l:'Teklif takip oranı'},{n:'2 hafta',l:'Devreye alma'}],
    },
    faq:[
      ['Fason üretim takibi yapılabiliyor mu?','Evet. Fason iş emirleri, teslim tarihleri ve kalite onayları Chief üzerinden takip edilebilir.'],
      ['Üretim kapasitesi planlaması destekleniyor mu?','Chief kapasite planlama yapmaz — ama gelen talebi, onaylı teklifi ve üretim iş emirlerini birbirine bağlayarak görünürlük sağlar.'],
      ['ERP\'deki üretim verileri Chief\'te nasıl görünür?','SAP, Logo, Netsis entegrasyonu ile üretim emirleri, stok ve teslimat verileri Chief\'e çekilir, ekip aksiyon kanalında kullanır.'],
    ],
  },
};

/* ================================================================
   SEKTÖRLER SAYFALARI
   ================================================================ */
function renderSektorlerPage(slug) {
  var data = SEKTORLER_DATA[slug];
  if (!data) return _stub('Sektörler', slug);
  return renderRichPage(data, 'Sektörler', '#/sektorler', slug);
}
/* ================================================================
   ENTEGRASYONLARs
   ================================================================ */
function renderEntegrasyonlar() {
  var cats = [
    { label: 'Mesajlaşma & İletişim', icon: 'chat', items: [
      ['WhatsApp Business API','Müşteri mesajlarını aksiyona çevir'],
      ['E-posta (Gmail / Outlook)','Gelen talepleri otomatik yakala'],
      ['SMS (Twilio / İleti Merkezi)','Saha ve müşteri bildirimleri'],
      ['Telegram','Ekip kanallarından sinyal al'],
      ['Slack / MS Teams','İç bildirim ve görev iletimi'],
    ]},
    { label: 'ERP & Muhasebe', icon: 'db', items: [
      ['SAP ERP','İş emri, stok, cari senkronizasyon'],
      ['Logo ERP','Türkiye\'nin en yaygın ERP\'si — tam entegrasyon'],
      ['Netsis','Sipariş, fatura ve cari bağlantısı'],
      ['Mikro ERP','Üretim ve stok modülü entegrasyonu'],
      ['SAP Business One','Orta ölçekli işletmeler için ERP — iki yönlü veri akışı'],
      ['Luca / e-Fatura','e-Fatura ve muhasebe bağlantısı'],
    ]},
    { label: 'CRM & Satış', icon: 'users', items: [
      ['Salesforce','Fırsat, müşteri ve aktivite senkronu'],
      ['HubSpot','Teklif ve pipeline görünürlüğü'],
      ['Zoho CRM','Satış hattı ve ziyaret takibi'],
      ['Microsoft Dynamics 365','Kurumsal CRM entegrasyonu'],
      ['Pipedrive','Satış ekibi akış yönetimi'],
    ]},
    { label: 'Belgeler & Dosyalar', icon: 'doc', items: [
      ['Google Drive','Döküman arama ve ekleme'],
      ['SharePoint / OneDrive','Microsoft ekosistemi belge yönetimi'],
      ['Dropbox','Dosya depolama entegrasyonu'],
      ['DocuSign','Dijital imza ve onay akışı'],
      ['e-İmza (Türkiye)','Yerel e-imza çözümleri'],
    ]},
    { label: 'Analitik & İş Zekası', icon: 'bars', items: [
      ['Power BI','Yönetim gösterge paneli beslemesi'],
      ['Tableau','Görsel analitik entegrasyonu'],
      ['Google Looker Studio','Ücretsiz BI bağlantısı'],
      ['Excel Online','Otomatik rapor çıktısı'],
    ]},
    { label: 'IoT & Saha', icon: 'iot', items: [
      ['IoT / MQTT','Makine ve sensör sinyalleri'],
      ['iOS Saha Uygulaması','Mobil iş emri ve kapanış'],
      ['Android','Saha teknisyeni uygulaması'],
      ['Harita & Rota (Google Maps)','Saha ziyaret optimizasyonu'],
    ]},
    { label: 'Özel Entegrasyon', icon: 'api', items: [
      ['REST API','Her sisteme bağlanmak için açık API'],
      ['Webhook','Gerçek zamanlı tetikleyici entegrasyon'],
      ['n8n / Zapier','No-code otomasyon köprüsü'],
      ['Dendy AI','Paydaş içgörüsü verisi — Chief ile entegre'],
    ]},
  ];

  var h = '<section class="detail-hero"><div class="container">' +
    crumb(['Entegrasyonlar']) +
    '<span class="eyebrow">Entegrasyonlar</span>' +
    '<h1 style="margin-top:16px;max-width:700px">Kullandığınız her sistemle çalışır.</h1>' +
    '<p class="lead" style="max-width:600px">Chief ERP\'nizin, CRM\'inizin veya WhatsApp\'ınızın yerine geçmez. Bunların üzerine karar ve akış katmanı ekler — hiçbirini değiştirmeden.</p>' +
    '<blockquote class="rp-scenario">TAK-Umwelt, SAP ERP\'sini ve WhatsApp Business\'ını değiştirmedi. Chief her ikisini de okudu, birbirine bağladı. Bakım talebi WhatsApp\'tan geldi, iş emri SAP\'a yazıldı — 9 dakikada.<cite>TAK-Umwelt GmbH · Çevre Teknolojisi, Almanya</cite></blockquote>' +
    '</div></section>';

  h += '<section><div class="container">';
  cats.forEach(function(cat) {
    h += '<div class="integ-cat">' +
      '<div class="integ-cat-head"><span class="integ-cat-ico">' + ico(cat.icon, 18) + '</span><h3>' + esc(cat.label) + '</h3></div>' +
      '<div class="integ-cat-grid">' +
      cat.items.map(function(it) {
        return '<div class="integ-cat-item"><span class="ici-name">' + esc(it[0]) + '</span><span class="ici-desc">' + esc(it[1]) + '</span></div>';
      }).join('') +
      '</div></div>';
  });
  h += '</div></section>';

  h += '<section class="bg-warm"><div class="container narrow">' +
    '<div class="section-head center"><span class="eyebrow">SSS</span></div>' +
    '<details class="faq-item"><summary>Listede olmayan bir sistem var — entegre edilebilir mi?</summary><p>REST API ve Webhook desteğiyle Chief hemen hemen her sisteme bağlanabilir. Özel entegrasyon ihtiyaçlarınız için keşif görüşmesi talep edin.</p></details>' +
    '<details class="faq-item"><summary>Entegrasyon kurulumu ne kadar sürer?</summary><p>Standart entegrasyonlar (WhatsApp, e-posta, Logo ERP) 1-3 günde tamamlanır. Özel ERP veya CRM entegrasyonları pilot akışla birlikte 1-2 haftada devreye alınır.</p></details>' +
    '<details class="faq-item"><summary>Veriler entegrasyon sırasında dışarıya çıkıyor mu?</summary><p>Hayır. Chief entegrasyonlar aracılığıyla sistemlerinizi okur ve yazar — veri Chief altyapısından geçmez, kendi sunucularınızda kalır.</p></details>' +
    '</div></section>';

  return h;
}

/* ================================================================
   FİYATLANDIRMA
   ================================================================ */
function renderFiyatlandirma() {
  var tiers = [
    {
      name: 'Başlangıç',
      tag: null,
      price: '₺4.990',
      period: '/ay · yıllık faturalama',
      desc: '1 akışla başlayın, sonuçları görün.',
      features: [
        '1 aktif akış',
        '3 kanal (WA, e-posta, 1 ERP)',
        '5 kullanıcı',
        'Komuta merkezi',
        'Standart entegrasyonlar',
        'E-posta destek',
      ],
      cta: 'Görüşme Planla',
      featured: false,
    },
    {
      name: 'Büyüme',
      tag: 'En çok tercih edilen',
      price: '₺9.990',
      period: '/ay · yıllık faturalama',
      desc: 'Tüm kanallar, sınırsız akış, AI önerileri.',
      features: [
        'Sınırsız akış',
        'Sınırsız kanal entegrasyonu',
        '15 kullanıcı',
        'AI öneri ve risk skorlaması',
        'Haftalık yönetim özeti',
        'Saha mobil uygulaması',
        'Öncelikli destek',
      ],
      cta: 'Görüşme Planla',
      featured: true,
    },
    {
      name: 'Kurumsal',
      tag: null,
      price: 'Teklif alın',
      period: 'Kuruma özel fiyatlandırma',
      desc: 'On-prem, GDPR/KVKK belgesi, SLA garantisi.',
      features: [
        'On-prem ve hibrit kurulum',
        'Sınırsız kullanıcı',
        'Özel akış tasarımı',
        'GDPR / KVKK uyumluluk belgesi',
        'SLA garantisi (%99.5)',
        'Dedicated partner desteği',
        'ERP/CRM özel entegrasyon',
      ],
      cta: 'Görüşme Planla',
      featured: false,
    },
  ];

  var h = '<section class="detail-hero"><div class="container">' +
    crumb(['Fiyatlandırma']) +
    '<span class="eyebrow">Fiyatlandırma</span>' +
    '<h1 style="margin-top:16px;max-width:700px">Bir akışla başlayın. Büyüdükçe genişleyin.</h1>' +
    '<p class="lead" style="max-width:560px">TAK-Umwelt 3 haftada tek akışla başladı, 3 ayda 4 akışa geçti. Büyük başlangıç yatırımı yok — sonucu görünce ölçeklendirin.</p>' +
    '</div></section>';

  h += '<section><div class="container">' +
    '<div class="pricing-grid">' +
    tiers.map(function(t) {
      var cls = 'price-card' + (t.featured ? ' featured' : '');
      return '<div class="' + cls + '">' +
        '<h3>' + esc(t.name) + '</h3>' +
        '<p style="font-size:13.5px;color:var(--t-muted);margin:6px 0 0">' + esc(t.desc) + '</p>' +
        '<div class="price">' + esc(t.price) + '</div>' +
        '<div class="price-sub">' + esc(t.period) + '</div>' +
        '<ul>' + t.features.map(function(f) { return '<li>' + esc(f) + '</li>'; }).join('') + '</ul>' +
        '<button class="btn ' + (t.featured ? 'btn-clay' : 'btn-ghost') + ' btn-lg" style="width:100%;justify-content:center" onclick="document.getElementById(\'scPanel\').classList.add(\'open\')">' + esc(t.cta) + '</button>' +
        '</div>';
    }).join('') +
    '</div></div></section>';

  h += '<section class="bg-warm"><div class="container narrow">' +
    '<div class="section-head center"><span class="eyebrow">SSS</span></div>' +
    '<details class="faq-item"><summary>Yıllık yerine aylık faturalama mümkün mü?</summary><p>Evet, aylık faturalama seçeneği mevcuttur — %15 daha yüksek ücretle. Keşif görüşmesinde detaylandırıyoruz.</p></details>' +
    '<details class="faq-item"><summary>Başlangıç paketinden Büyüme\'ye geçiş ne zaman yapılabilir?</summary><p>İstediğiniz zaman. Geçiş anında aktif olur, fiyat farkı kalan süre için oranlanarak hesaplanır.</p></details>' +
    '<details class="faq-item"><summary>Pilot veya deneme süresi var mı?</summary><p>Satın almadan önce 30 dakikalık keşif görüşmesiyle gerçek operasyonunuz üzerinden demo yapıyoruz. Ticari taahhüt olmadan neyin mümkün olduğunu görürsünüz.</p></details>' +
    '<details class="faq-item"><summary>Fiyata entegrasyon kurulumu dahil mi?</summary><p>Standart entegrasyonlar (WA, e-posta, Logo/Netsis/SAP) dahildir. Özel geliştirme gerektiren entegrasyonlar ayrıca fiyatlandırılır.</p></details>' +
    '</div></section>';

  return h;
}
function renderGuvenlik() {
  var data = PLATFORM_DATA['guvenlik'];
  if (!data) return _stub('Güvenlik');
  return renderRichPage(data, 'Platform', '#/platform', 'guvenlik');
}

/* ================================================================
   HAKKIMIZDA
   ================================================================ */
function renderHakkimizda() {
  var h = '<section class="detail-hero"><div class="container">' +
    crumb(['Hakkımızda']) +
    '<span class="eyebrow">Hakkımızda</span>' +
    '<h1 style="margin-top:16px;max-width:760px">Operasyonu görünür kılan platform.</h1>' +
    '<p class="lead" style="max-width:600px">Chief, işletmelerin ERP\'sinde, e-postasında ve operasyonel sistemlerinde kaybolan sinyalleri aksiyona çevirmek için tasarlandı.</p>' +
    '<blockquote class="rp-scenario">Her şirketin bir komuta merkezi vardır — ama çoğunun ekranı yoktur. Veriler ERP\'de, kararlar WhatsApp\'ta, sorumluluk belirsizdir. Chief bu boşluğu kapatır.<cite>Chief · Native AI Operasyon Platformu</cite></blockquote>' +
    '</div></section>';

  // Değerler
  h += '<section><div class="container">' +
    '<div class="section-head"><span class="eyebrow">Nasıl çalışırız</span></div>' +
    '<div class="rich-points">' +
    '<div class="rp-item"><div class="rp-icon">' + ico('spark', 22) + '</div><div>' +
    '<h3>İnsan denetimi her zaman</h3>' +
    '<p>Chief hiçbir zaman tek başına karar vermez. Her öneri gerekçesiyle sunulur, uygulama kararı insana aittir. Kara kutu yoktur.</p>' +
    '</div></div>' +
    '<div class="rp-item"><div class="rp-icon sage">' + ico('layers', 22) + '</div><div>' +
    '<h3>Mevcut sistemlerin üzerinde</h3>' +
    '<p>ERP değiştirmek yok, CRM geçişi yok. Chief kurduğunuz altyapının üzerinde çalışır — değer gününden itibaren eklenir.</p>' +
    '</div></div>' +
    '<div class="rp-item"><div class="rp-icon blue">' + ico('handshake', 22) + '</div><div>' +
    '<h3>Gerçek operasyondan öğrenir</h3>' +
    '<p>Her müşteri farklı çalışır. Hazır şablonlar başlangıç noktasıdır — asıl değer operasyonunuzu tanıdıktan sonra üretilir.</p>' +
    '</div></div>' +
    '</div></div></section>';

  // Kimiz
  h += '<section class="bg-warm"><div class="container">' +
    '<div class="section-head"><span class="eyebrow">Ekip</span><h2>Chief\'i kim geliştiriyor?</h2></div>' +
    '<div style="max-width:720px">' +
    '<p style="font-size:16px;line-height:1.8;color:var(--t-body);margin:0 0 20px">Chief, yapay zeka, optimizasyon, istatistik ve IoT alanlarından akademisyen ve profesyonellerden oluşan disiplinlerarası bir ekip tarafından geliştirilmektedir. Ekibimizin araştırma altyapısı Boğaziçi Üniversitesi JEDI Araştırma Merkezi ve Atatürk Üniversitesi işbirlikleriyle desteklenmektedir.</p>' +
    '<p style="font-size:16px;line-height:1.8;color:var(--t-body);margin:0 0 32px">Operasyonel AI gerçek dünya koşullarında çalışır — teorik derinlik ile saha deneyimini birleştiriyoruz. Chief bu yaklaşımın ürünüdür: akademik titizlikle, kurumsal pratikle.</p>' +
    '<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:20px;margin-bottom:32px">' +
    '<div style="padding:18px 20px;background:var(--ivory);border-radius:var(--r-md);border:1px solid var(--border)">' +
    '<div style="font-size:11px;font-weight:700;letter-spacing:.07em;text-transform:uppercase;color:var(--t-muted);margin-bottom:6px">Araştırma Ortağı</div>' +
    '<div style="font-size:14px;font-weight:600;color:var(--ink)">Boğaziçi Üniversitesi</div>' +
    '<div style="font-size:12.5px;color:var(--t-muted);margin-top:2px">JEDI Araştırma Merkezi</div>' +
    '</div>' +
    '<div style="padding:18px 20px;background:var(--ivory);border-radius:var(--r-md);border:1px solid var(--border)">' +
    '<div style="font-size:11px;font-weight:700;letter-spacing:.07em;text-transform:uppercase;color:var(--t-muted);margin-bottom:6px">Araştırma Ortağı</div>' +
    '<div style="font-size:14px;font-weight:600;color:var(--ink)">Atatürk Üniversitesi</div>' +
    '<div style="font-size:12.5px;color:var(--t-muted);margin-top:2px">Erzurum</div>' +
    '</div>' +
    '<div style="padding:18px 20px;background:var(--ivory);border-radius:var(--r-md);border:1px solid var(--border)">' +
    '<div style="font-size:11px;font-weight:700;letter-spacing:.07em;text-transform:uppercase;color:var(--t-muted);margin-bottom:6px">Ekip Uzmanlığı</div>' +
    '<div style="font-size:14px;font-weight:600;color:var(--ink)">AI · Optimizasyon</div>' +
    '<div style="font-size:12.5px;color:var(--t-muted);margin-top:2px">İstatistik · IoT</div>' +
    '</div>' +
    '</div>' +
    '<div style="display:flex;flex-wrap:wrap;gap:24px;align-items:center">' +
    '<div><div style="font-size:12px;font-weight:700;letter-spacing:.07em;text-transform:uppercase;color:var(--t-muted);margin-bottom:4px">Konum</div>' +
    '<div style="font-size:15px;color:var(--ink)">Kandilli Teknopark, İstanbul</div></div>' +
    '<div><div style="font-size:12px;font-weight:700;letter-spacing:.07em;text-transform:uppercase;color:var(--t-muted);margin-bottom:4px">İletişim</div>' +
    '<a href="mailto:info@chiefai.com.tr" style="font-size:15px;color:var(--clay);text-decoration:none">info@chiefai.com.tr</a></div>' +
    '<div><div style="font-size:12px;font-weight:700;letter-spacing:.07em;text-transform:uppercase;color:var(--t-muted);margin-bottom:4px">Telefon</div>' +
    '<a href="tel:+902166062209" style="font-size:15px;color:var(--clay);text-decoration:none">+90 216 606 22 09</a></div>' +
    '</div></div></div></section>';

  return h;
}

/* ================================================================
   DEMO TALEP ET
   ================================================================ */
function renderDemo() {
  var h = '<section class="detail-hero"><div class="container">' +
    crumb(['Keşif Görüşmesi']) +
    '<span class="eyebrow">Demo Talep Et</span>' +
    '<h1 style="margin-top:16px;max-width:720px">Operasyonunuzu birlikte inceleyelim.</h1>' +
    '<p class="lead" style="max-width:580px">Satış toplantısı değil — gerçek bir planlama oturumu. En büyük kayıp noktanızı anlatın, hangi akışla nerede başlayabileceğinizi 30 dakikada netleştirelim.</p>' +
    '</div></section>';

  h += '<section><div class="container">' +
    '<div class="demo-layout">' +

    // Sol: beklentiler
    '<div>' +
    '<div class="section-head"><span class="eyebrow">Görüşmede ne olur?</span></div>' +
    '<div style="display:flex;flex-direction:column;gap:20px;margin-top:4px">' +
    [
      ['clock',  '30 dakika',               'Zaman kutsal. Fazla uzatmıyoruz.'],
      ['target', 'Operasyonunuzu dinleriz', 'En çok zaman kaybettiren akışı birlikte tespit ederiz.'],
      ['bolt',   'Canlı demo',              'Benzer sektörden gerçek bir kurguyu ekranınızda gösteririz.'],
      ['check',  'Somut öneri',             'Görüşme sonunda hangi akışla başlayabileceğinizi net söyleriz.'],
    ].map(function(it) {
      return '<div style="display:flex;gap:16px;align-items:flex-start">' +
        '<div class="rp-icon" style="flex-shrink:0">' + ico(it[0], 20) + '</div>' +
        '<div><div style="font-weight:600;font-size:15px;color:var(--ink);margin-bottom:3px">' + esc(it[1]) + '</div>' +
        '<div style="font-size:13.5px;color:var(--t-muted);line-height:1.5">' + esc(it[2]) + '</div></div>' +
        '</div>';
    }).join('') +
    '</div>' +
    '<div style="margin-top:36px;padding:20px 22px;background:var(--warm);border-radius:var(--r-lg)">' +
    '<div style="font-size:12px;font-weight:700;letter-spacing:.07em;text-transform:uppercase;color:var(--t-muted);margin-bottom:8px">Doğrudan iletişim</div>' +
    '<a href="mailto:info@chiefai.com.tr" style="display:block;font-size:15px;color:var(--clay);text-decoration:none;margin-bottom:4px">info@chiefai.com.tr</a>' +
    '<a href="tel:+902166062209" style="display:block;font-size:15px;color:var(--clay);text-decoration:none">+90 216 606 22 09</a>' +
    '</div></div>' +

    // Sağ: form
    '<div class="form-card" style="margin:0">' +
    '<h2 style="font-size:22px;margin-bottom:6px">Görüşme talep et</h2>' +
    '<p style="font-size:14px;color:var(--t-muted);margin-bottom:24px">En kısa sürede size dönüp uygun zaman dilimleri göndereceğiz.</p>' +
    '<form id="demoForm" onsubmit="return chiefDemoSubmit(event)">' +
    '<div class="form-row">' +
    '<div class="form-group"><label>Ad Soyad *</label><input type="text" name="name" placeholder="Adınız Soyadınız" required autocomplete="name"></div>' +
    '<div class="form-group"><label>Şirket *</label><input type="text" name="company" placeholder="Şirket adı" required autocomplete="organization"></div>' +
    '</div>' +
    '<div class="form-row">' +
    '<div class="form-group"><label>E-posta *</label><input type="email" name="email" placeholder="ornek@sirket.com" required autocomplete="email"></div>' +
    '<div class="form-group"><label>Telefon</label><input type="tel" name="phone" placeholder="+90 5__ ___ __ __" autocomplete="tel"></div>' +
    '</div>' +
    '<div class="form-group"><label>Sektör</label>' +
    '<select name="sector"><option value="">Seçin (opsiyonel)</option>' +
    '<option>Endüstriyel Saha Hizmetleri</option>' +
    '<option>İmalat & Üretim</option>' +
    '<option>B2B Satış & Dağıtım</option>' +
    '<option>Tesis Yönetimi</option>' +
    '<option>Diğer</option>' +
    '</select></div>' +
    '<div class="form-group"><label>Operasyonunuzdaki en büyük zorluk nedir?</label>' +
    '<textarea name="message" rows="3" placeholder="Örn: Saha ekibinin talep takibi e-posta ve WhatsApp\'a dağılmış, hiçbir şey sisteme girmiyor..."></textarea></div>' +
    '<button type="submit" class="btn btn-clay btn-lg" style="width:100%;justify-content:center;margin-top:8px">Görüşme Talep Et ' + ico('arrow', 16) + '</button>' +
    '</form>' +
    '<div id="demoSuccess" style="display:none;text-align:center;padding:32px 0">' +
    ico('check', 32) +
    '<h3 style="margin:16px 0 8px;color:var(--sage)">Talebiniz alındı.</h3>' +
    '<p style="color:var(--t-muted);font-size:14px">En kısa sürede size dönüp uygun zaman dilimleri göndereceğiz.</p>' +
    '</div>' +
    '</div>' +

    '</div></div></section>';

  return h;
}
function renderNotFound()          { return _stub('Sayfa Bulunamadı'); }

/* ---- Listing sayfaları ---- */
function _listing(label, eyebrow, h1, lead, items, slugBase) {
  var h = '<section class="detail-hero"><div class="container">' +
    crumb([label]) +
    '<span class="eyebrow">' + esc(eyebrow) + '</span>' +
    '<h1 style="margin-top:16px;max-width:760px">' + esc(h1) + '</h1>' +
    '<p class="lead" style="max-width:600px">' + esc(lead) + '</p>' +
    '</div></section>' +
    '<section><div class="container"><div class="cards-grid">' +
    items.map(function(it, n) {
      return '<a class="card" href="#/' + slugBase + '/' + it[0] + '">' +
        '<div class="card-ico ' + (n%3===1?'sage':n%3===2?'blue':'') + '">' + ico(it[2]||'flow', 22) + '</div>' +
        '<h4>' + esc(it[1]) + '</h4><p>' + esc(it[3]||'') + '</p>' +
        '<span class="card-foot btn-link">İncele ' + ico('arrow',15) + '</span></a>';
    }).join('') +
    '</div></div></section>' + finalCTA();
  return h;
}

function renderPlatformListing() {
  return _listing('Platform','Platform','Chief nasıl çalışır?',
    'Operasyonel zekadan güvenliğe, devreye almadan partner ekosistemine — platformun tüm boyutları.',
    [
      ['nasil-calisir','Nasıl Çalışır','flow','Sinyalden aksiyona 5 adım'],
      ['komuta-merkezi','Komuta Merkezi','bars','Tüm işler tek ekranda, gerçek zamanlı'],
      ['ai-yetenekleri','AI Yetenekleri','spark','Açıklanabilir, insan denetimli'],
      ['guvenlik','Güvenlik & Uyumluluk','shield','KVKK, GDPR, on-prem kurulum'],
      ['devreye-alma','Devreye Alma','bolt','4 haftada canlıya alın'],
      ['partnerler','Partner Programı','handshake','Teknik kurulumdan stratejik ortaklığa'],
    ], 'platform');
}

function renderCozumlerListing() {
  return _listing('Çözümler','Çözümler','Hangi operasyonel sorunu çözüyorsunuz?',
    'Satıştan saha operasyonuna, üretimden yönetime — her departman için hazır kurgu.',
    [
      ['satis-ve-teklif','Satış & Teklif','target','Talepten onaya, tekliften takibe'],
      ['saha-operasyon','Saha Operasyon & Servis','wrench','İş emri, arıza ve kapanış akışı'],
      ['imalat-bakim','İmalat & Bakım','factory','Periyodik bakım ve servis operasyonu'],
      ['yonetim-kpi','Yönetim & KPI','bars','Haftalık özet, gerçek zamanlı gösterge'],
    ], 'cozumler');
}

function renderSektorlerListing() {
  return _listing('Sektörler','Sektörler','Hangi sektörde çalışıyorsunuz?',
    'Endüstriyel saha hizmetlerinden B2B satışa, üretimden dağıtıma.',
    [
      ['endustriyel-saha','Endüstriyel Saha Hizmetleri','wrench','İş emri ve saha kapanışı'],
      ['b2b-dagitim','B2B Satış & Dağıtım','truck','Satış ekibi ve ziyaret yönetimi'],
      ['imalat-uretim','İmalat & Üretim','factory','Üretim, bakım ve kalite operasyonu'],
    ], 'sektorler');
}

/* ================================================================
   İŞ SÜREÇLERİ — VERİ + RENDER
   ================================================================ */
const IS_SURECLERI_DATA = {
  'yonetimsel-dogal-dil': {
    featured: true, cat: 'YÖNETİM', catKey: 'yonetim', icon: 'spark',
    eyebrow: 'Yönetim Katmanı',
    cardTitle: 'Yönetimsel Doğal Dil, Veri ve Stratejik Aksiyon',
    cardDesc: 'Yönetim seviyesinde doğal dille veriye ulaşın, strateji geliştirin ve ilgili alanlarda aksiyon başlatın.',
    cardSub: 'Chief; veriyi kaynak kayıtlarıyla açıklar, karar seçenekleri üretir, görev/onay/bilgi talebi açar.',
    h1: 'Yönetim kararı sormakla başlar.',
    lead: 'Chief\'e iş diliyle soru sorun; veriyi kaynak kayıtlarıyla açıklasın, strateji seçenekleri üretsin, ilgili ekiplere görev açsın.',
    problem: 'Yönetim çoğu zaman raporları, ERP ekranlarını, toplantı notlarını ve saha verilerini ayrı ayrı inceler. Kararlar gecikmez, sorumluluk dağılır, stratejik konular aksiyona dönüşmez. Chief yönetim katmanı — doğal dil sorgusundan görev açmaya kadar her adımı aynı akışta birleştirir.',
    steps: [
      { num: '01', title: 'Soru sor', body: 'Yönetici doğal dilde sorar: "Satış neden hedefin altında?" veya "Hangi saha işleri tahsilatı geciktiriyor?"' },
      { num: '02', title: 'Chief veriyi bulur', body: 'Yetki sınırları içinde ilgili teklif, iş emri, fatura, stok ve geri bildirim kayıtları getirilir; iş diliyle özetlenir.' },
      { num: '03', title: 'Açıklar ve önerir', body: 'KPI sapması, trend veya risk kaynak kayıtlarıyla açıklanır. Strateji seçenekleri ve senaryo önerileri üretilir.' },
      { num: '04', title: 'Aksiyon başlatır', body: 'Yönetici karar verdiğinde Chief ilgili ekibe görev/onay açar veya bilgi talebi başlatır. Her adım denetim izine bağlanır.' },
    ],
    nlQueries: [
      'Bu ay satış neden hedefin altında kaldı? Kanal, bölge ve temsilci bazında açıkla.',
      'Geciken saha işlerinin müşteri memnuniyetine ve tahsilata etkisini göster.',
      'Bu hafta yönetim toplantısı için karar bekleyen ilk 10 konuyu hazırla.',
    ],
    metrics: [{ n:'Anlık', l:'Veri erişimi' },{ n:'%100', l:'Kaynak kayıt bağlantısı' },{ n:'< 1 saat', l:'KPI\'dan aksiyona' },{ n:'Tam', l:'Denetim izi' }],
    faq: [
      ['Hangi veriye erişilebilir?', 'ERP, CRM, finans, üretim, saha, stok, geri bildirim — yetki sınırları içinde tüm bağlı sistemler. Her kullanıcı yalnızca kendi alanını görür.'],
      ['AI karar veriyor mu?', 'Hayır. Chief açıklanabilir öneri ve senaryo üretir; karar, görev başlatma ve onay her zaman insan tarafından verilir.'],
      ['Toplantı notları nasıl yönetiliyor?', 'Toplantı içerikleri, kararlar ve aksiyon durumları Chief\'te aranabilir. Kapanmayan aksiyonlar otomatik takip listesine girer.'],
    ],
  },
  'talep-potansiyel-musteri': {
    featured: false, cat: 'SATIŞ VE TEKLİF', catKey: 'satis', icon: 'target',
    eyebrow: 'Satış & Teklif',
    cardTitle: 'Talep, Potansiyel Müşteri ve Fırsat Yönetimi',
    cardDesc: 'Gelen ilgiyi doğru müşteri, ihtiyaç ve fırsatla eşleştirin.',
    cardSub: 'Web formu, e-posta, WhatsApp veya CRM — Chief içinde nitelikli fırsata ve izlenebilir aksiyona dönüşür.',
    h1: 'Hiçbir fırsat kaybolmadan satış hattına girer.',
    lead: 'Farklı kanallardan gelen müşteri ilgisini kaybetmeden yakalayın; gerçek ihtiyacı, satış potansiyelini ve bir sonraki doğru aksiyonu görünür kılın.',
    problem: 'Web formu, e-posta, WhatsApp ve fuar gibi kanallardan gelen talepler farklı yerlerde kaldığında fırsatlar geç işlenir, sahiplik belirsizleşir ve satış ekibi düşük öncelikli kayıtlarla zaman kaybeder.',
    steps: [
      { num: '01', title: 'Sinyali yakala', body: 'Bağlı kanaldan gelen talep kayıt altına alınır; müşteri, kanal ve niyet bağlamı eşleştirilir.' },
      { num: '02', title: 'Sınıflandır', body: 'Talep niyeti belirlenir: yeni teklif, bilgi alma, fiyat güncelleme, servis veya şikayet.' },
      { num: '03', title: 'Eksik bilgiyi tamamla', body: 'Karar verici, bütçe, ihtiyaç veya teknik kapsam eksikse doğal diyalogla tamamlanır.' },
      { num: '04', title: 'Atama ve aksiyon', body: 'Fırsat önceliği ve segmentine göre sorumluya atanır; ilk temas veya ziyaret görevi başlatılır.' },
    ],
    nlQueries: [
      'Bu hafta kaynağı web formu olan yüksek potansiyelli fırsatlar hangileri?',
      'İlk temas SLA dışına çıkan potansiyel müşterileri listele ve ilgili yöneticiye takip görevi aç.',
      'Kaybedilen fırsatlarda en sık tekrar eden nedenleri özetle.',
    ],
    metrics: [{ n:'< 2 saat', l:'İlk yanıt SLA' },{ n:'%0', l:'Sahipsiz talep' },{ n:'Her kanal', l:'Tek akışta' },{ n:'Anlık', l:'Fırsat skoru' }],
    faq: [
      ['Hangi kanallardan talep gelir?', 'Web formu, e-posta, WhatsApp, SMS, telefon özeti, fuar kaydı, saha notu ve CRM kaydı — tüm kanallar tek akışta izlenir.'],
      ['Mevcut CRM\'imizdeki fırsatlar çakışır mı?', 'Chief CRM\'inizin üzerinde çalışır; veriyi oraya yazar ve oradan okur. Mevcut fırsat kayıtlarınız değişmez.'],
      ['Öncelik nasıl belirleniyor?', 'Potansiyel tutar, aciliyet, müşteri segmenti ve stratejik değer — Chief bir öncelik skoru üretir, son karar satış yöneticisine aittir.'],
    ],
  },
  'satis-ekibi-ziyaret': {
    featured: false, cat: 'SATIŞ VE TEKLİF', catKey: 'satis', icon: 'map',
    eyebrow: 'Satış & Teklif',
    cardTitle: 'Satış Ekibi ve Ziyaret Yönetimi',
    cardDesc: 'Hedefleri, müşteri temaslarını ve saha ziyaretlerini aynı satış akışında yönetin.',
    cardSub: 'Ziyaret sayısını değil, ziyaretin fırsata, teklife ve müşteri aksiyonuna etkisini görünür kılar.',
    h1: 'Ziyaret verisi satış kararına dönüşür.',
    lead: 'Saha satış ziyaretlerini yalnızca raporlanan aktivite olmaktan çıkarın; fırsat üreten, takip edilen ve sonuçla ölçülen satış ritmine dönüştürün.',
    problem: 'Satış hedefleri, müşteri görüşmeleri, ziyaret notları ve takip görevleri farklı araçlarda tutulduğunda yöneticiler yalnızca sonuçları görür; geciken temasları, zayıflayan fırsatları ve destek gereken temsilcileri zamanında fark edemez.',
    steps: [
      { num: '01', title: 'Ziyaret planla', body: 'Açık fırsatlar ve geçmiş temaslara göre öncelikli müşteri listesi ve rota önerisi oluşturulur.' },
      { num: '02', title: 'Görüşmeyi kaydet', body: 'Satış temsilcisi görüşme notunu doğal dille kaydeder; Chief not içinden ihtiyaç, itiraz ve sonraki adımı ayrıştırır.' },
      { num: '03', title: 'Aksiyonu aç', body: 'Takip görevi, teklif ihtiyacı veya yönetici destek uyarısı otomatik açılır.' },
      { num: '04', title: 'Yönetimi bilgilendir', body: 'Ziyaret sonucu satış hattına işlenir; yönetim fırsat ilerleme etkisini görür.' },
    ],
    nlQueries: [
      'Bu hafta ziyaret edilmesi gereken ama temassız kalan yüksek değerli müşterileri göster.',
      'Rakip tehdidi geçen görüşmeleri özetle ve satış yöneticisine aksiyon listesi hazırla.',
      'Bu ay ziyaretlerden kaç tanesi teklif veya siparişe dönüştü?',
    ],
    metrics: [{ n:'%98+', l:'Görüşme kayıt oranı' },{ n:'Anlık', l:'Satış hattı görünürlüğü' },{ n:'-%40', l:'Raporlama hazırlık süresi' },{ n:'Sıfır', l:'Kayıp ziyaret notu' }],
    faq: [
      ['Görüşme notları nasıl kaydediliyor?', 'Satış temsilcisi serbest metin veya WhatsApp ile kaydeder. Chief içerikten ihtiyaç, taahhüt ve sonraki adımı otomatik ayrıştırır.'],
      ['Rota optimizasyonu nasıl çalışıyor?', 'Açık fırsat değeri, lokasyon, müşteri önceliği ve takvim müsaitliği birlikte değerlendirilir. Öneri sunulur, son karar temsilciye aittir.'],
      ['Yönetici neler görüyor?', 'Ekip bazlı ziyaret sayısı, fırsata dönüşüm oranı, temassız yüksek değerli müşteriler ve destek gerektiren temsilciler — tek panelde.'],
    ],
  },
  'teklif-talebi-bilgi': {
    featured: false, cat: 'SATIŞ VE TEKLİF', catKey: 'satis', icon: 'doc',
    eyebrow: 'Satış & Teklif',
    cardTitle: 'Teklif Talebi ve Bilgi Tamamlama',
    cardDesc: 'Eksik veya dağınık talebi, teklif hazırlanabilir nitelikte doğrulanmış iş tanımına dönüştürün.',
    cardSub: 'Chief gerekli teknik, ticari, lokasyon ve belge alanlarını kontrol eder; eksik bilgiyi doğal diyalogla tamamlatır.',
    h1: 'Eksik talep teklif hazırlanabilir dosyaya dönüşür.',
    lead: 'Eksik veya dağınık teklif taleplerini; teknik, ticari ve operasyonel açıdan teklif hazırlanabilir nitelikte doğrulanmış iş dosyasına dönüştürün.',
    problem: 'Teklif talepleri çoğu zaman teknik özellik, miktar, teslim yeri, takvim veya ticari koşullar bakımından eksik gelir. Teklif ekibi bilgi toplamak için tekrar tekrar yazışır; süre uzar, kapsam hatası ve yanlış fiyat riski artar.',
    steps: [
      { num: '01', title: 'Talebi yakala', body: 'Mesaj, form, belge veya görüşme özetinden talep alınır; ürün, hizmet ve niyet sınıflandırılır.' },
      { num: '02', title: 'Eksikleri tespit et', body: 'Chief talep türüne göre zorunlu bilgi setini belirler; eksik veya çelişkili alanlar tespit edilir.' },
      { num: '03', title: 'Tamamlat', body: 'Chief müşteriye veya iç kullanıcıya hedefli sorular yöneltir; yanıtlar kayıt altına alınır.' },
      { num: '04', title: 'Devret', body: 'Teknik değerlendirme gerekiyorsa görev açılır; doğrulanan talep fiyatlama sürecine devredilir.' },
    ],
    nlQueries: [
      'Teklife hazır bekleyen talepleri ve eksik bilgi nedenlerini göster.',
      'Teknik değerlendirme bekleyen talepler için ilgili ekiplerden bilgi talep et.',
      'Bu hafta bilgi tamamlama nedeniyle geciken teklifleri listele.',
    ],
    metrics: [{ n:'-%60', l:'Yazışma süresi' },{ n:'%0', l:'Eksik bilgiyle açılan teklif' },{ n:'Anlık', l:'Hazır olma durumu' },{ n:'Tam', l:'Kaynak bağlantısı' }],
    faq: [
      ['Hangi bilgiler zorunlu olarak kontrol ediliyor?', 'Talep türüne göre değişir: ürün/hizmet, miktar, lokasyon, tarih, kalite standardı ve teknik kapsam. Chief sektöre göre özelleştirilebilir.'],
      ['Müşteriye otomatik soru sorulabiliyor mu?', 'Evet. WhatsApp, e-posta veya web formu üzerinden müşteriye yönlendirilmiş soru gönderilir; yanıt otomatik teklif dosyasına eklenir.'],
      ['Benzer geçmiş tekliflerden yararlanabiliyor mu?', 'Evet. Benzer kapsam veya müşteri segmentinden geçmiş teklifler referans olarak teklif ekibine sunulur.'],
    ],
  },
  'fiyatlama-marj-onay': {
    featured: false, cat: 'SATIŞ VE TEKLİF', catKey: 'satis', icon: 'target',
    eyebrow: 'Satış & Teklif',
    cardTitle: 'Fiyatlama, Marj ve Onay',
    cardDesc: 'Fiyat kurallarını, kârlılık sınırlarını ve yetkili onaylarını kontrollü biçimde çalıştırın.',
    cardSub: 'Teklif fiyatı yalnızca tabloyla değil; maliyet, marj, stok, müşteri koşulu ve yetki matrisiyle birlikte değerlendirilir.',
    h1: 'Doğru fiyat, doğru onay, kayıt altında.',
    lead: 'Fiyat kararlarını hızlandırırken kârlılık sınırlarını, iskonto yetkilerini, riskleri ve onay gerekçelerini izlenebilir şekilde yönetin.',
    problem: 'Fiyatlar tablo, e-posta ve kişisel deneyim üzerinden belirlendiğinde aynı işe farklı fiyatlar verilebilir; maliyet değişimleri gözden kaçar, marj dışı teklifler geç fark edilir ve onay süreci kişiye bağlı kalır.',
    steps: [
      { num: '01', title: 'Bileşenleri belirle', body: 'Teklif kapsamı ürün, hizmet, işçilik, malzeme ve lojistik bileşenlerine ayrılır.' },
      { num: '02', title: 'Fiyat ve marj hesapla', body: 'Chief fiyat listesi, maliyet, stok ve müşteri koşulunu getirir; önerilen fiyat ve beklenen marj hesaplanır.' },
      { num: '03', title: 'Kontrol et', body: 'Marj sınırı, iskonto eşiği, kredi riski ve özel koşullar kontrol edilir; uyarılar görünür hale gelir.' },
      { num: '04', title: 'Onayla ve belgele', body: 'Yetki sınırı aşılırsa onay zinciri başlatılır; gerekçe ve onay kararı kayıt altında tutulur.' },
    ],
    nlQueries: [
      'Marj sınırının altında bekleyen teklifleri göster ve ilgili yöneticilere onay görevi aç.',
      'Bu ay en çok iskonto kullanılan ürün/hizmet gruplarını özetle.',
      'Kazandığımız ve kaybettiğimiz tekliflerde marj farkını göster.',
    ],
    metrics: [{ n:'-%45', l:'Onay bekleme süresi' },{ n:'%100', l:'Marj görünürlüğü' },{ n:'Sıfır', l:'Yetki dışı fiyat' },{ n:'Tam', l:'Karar izi' }],
    faq: [
      ['Onay seviyeleri nasıl tanımlanıyor?', 'Marj eşiği, iskonto oranı ve teklif tutarına göre özelleştirilebilir onay zincirleri kurulur. Her seviye için onaylayan kişi veya rol tanımlanır.'],
      ['Kur veya maliyet değişince ne oluyor?', 'Chief bekleyen teklifleri değişen maliyet parametrelerine göre uyarır. Revizyon ihtiyacı olan teklifler için güncelleme görevi açılır.'],
      ['Müşterinin kredi riski fiyatlamayı etkiliyor mu?', 'Cari bakiye, vade gecikmesi ve müşteri segment kurallarına göre uyarı üretilir. Blokaj kararı her zaman insan onayıyla çalışır.'],
    ],
  },
  'tekliften-siparise': {
    featured: false, cat: 'SATIŞ VE TEKLİF', catKey: 'satis', icon: 'arrow',
    eyebrow: 'Satış & Teklif',
    cardTitle: 'Tekliften Siparişe Geçiş',
    cardDesc: 'Onaylanan teklifi siparişe, üretime veya saha operasyonuna kayıpsız aktarın.',
    cardSub: 'Kapsam, fiyat, termin, kalite ve müşteri taahhütleri operasyon başlamadan önce doğrulanır.',
    h1: 'Onaylanan teklif bilgi kaybı olmadan operasyona geçer.',
    lead: 'Onaylanan teklifin kapsamını, terminini, fiyatını ve müşteri taahhütlerini kaybetmeden siparişe, üretime veya saha iş emrine dönüştürün.',
    problem: 'Teklif onaylandıktan sonra kapsam, termin, fiyat ve teknik detaylar operasyon sistemlerine manuel aktarıldığında bilgi kaybı, gecikme ve yanlış üretim ya da uygulama riski oluşur.',
    steps: [
      { num: '01', title: 'Kabulü doğrula', body: 'Müşteri kabulü alınır; kabul edilen kayıt teklif sürümüyle eşleştirilir.' },
      { num: '02', title: 'Kapsamı kontrol et', body: 'Kapsam, miktar, fiyat, teslimat ve ödeme koşulları doğrulanır; eksik veya uyumsuz bilgi varsa tamamlanır.' },
      { num: '03', title: 'Akış seç', body: 'İşin niteliğine göre üretim, montaj, proje, saha servis veya standart sipariş akışı seçilir.' },
      { num: '04', title: 'Operasyonu başlat', body: 'Sorumlular, kritik tarihler ve kontrol noktaları atanır; üretim/saha/servis süreci başlatılır.' },
    ],
    nlQueries: [
      'Onaylanmış ama operasyona aktarılmamış teklifleri listele.',
      'Kapsam uyumsuzluğu nedeniyle bekleyen siparişler için sorumlulara bilgi talebi aç.',
      'Başlatılamayan işlerin ana nedenlerini yönetim brifingine ekle.',
    ],
    metrics: [{ n:'%0', l:'Manuel veri aktarımı' },{ n:'Sıfır', l:'Kapsam kaybı' },{ n:'< 1 gün', l:'Devir süresi' },{ n:'%100', l:'Taahhüt görünürlüğü' }],
    faq: [
      ['Kapsam değişikliği olursa ne oluyor?', 'Kabul aşamasında kapsam farkı tespit edilirse yeni onay veya fiyat revizyonu akışı başlatılır. Fark kayıt altına alınır.'],
      ['Kısmi sipariş kabulü yönetilebiliyor mu?', 'Evet. Kısmi kabul bildirilirse ilgili iş paketi operasyona geçerken kalan kısım takipte kalır.'],
      ['Finansal ön bilgi ne zaman oluşuyor?', 'Operasyon başlatıldığında fatura ve faturalama için ön kapanış bilgisi otomatik oluşturulur.'],
    ],
  },
  'is-emri-saha-planlama': {
    featured: false, cat: 'OPERASYON VE SAHA', catKey: 'operasyon', icon: 'wrench',
    eyebrow: 'Operasyon & Saha',
    cardTitle: 'İş Emri ve Saha Planlama',
    cardDesc: 'İşi doğru ekibe atayın; öncelik, rota, SLA ve kapanışı birlikte yönetin.',
    cardSub: 'Saha işi; lokasyon, ekip yetkinliği, malzeme, zaman penceresi ve kapanış kanıtıyla birlikte planlanır.',
    h1: 'Doğru iş, doğru ekip, kanıtlı kapanış.',
    lead: 'Saha işlerini doğru ekip, doğru zaman, doğru lokasyon ve gerekli kanıt koşullarıyla planlayın; gecikmeleri ve açık işleri tek görünümde izleyin.',
    problem: 'Saha işleri telefon ve mesajlarla dağıtıldığında öncelikler karışır; ekiplerin konumu, yetkinliği, malzeme ihtiyacı ve SLA süreleri birlikte değerlendirilemez. Kapanışta işin gerçekten yapıldığını kanıtlayan bilgi eksik kalabilir.',
    steps: [
      { num: '01', title: 'İş emri oluştur', body: 'Talep veya onaylı sipariş iş emrine dönüştürülür; iş türü, aciliyet ve SLA belirlenir.' },
      { num: '02', title: 'Ekip ve rota ata', body: 'Yetkinlik, bölge, iş yükü, takvim ve malzeme ihtiyacı değerlendirilir; atama ve rota önerilir.' },
      { num: '03', title: 'Sahayı izle', body: 'İlerleme, gecikme ve istisnalar izlenir; gerektiğinde öncelik veya atama güncellenir.' },
      { num: '04', title: 'Kanıtlı kapat', body: 'Fotoğraf, form, imza, ölçüm veya müşteri onayıyla iş belgelenmiş kapanır.' },
    ],
    nlQueries: [
      'Bugün SLA riski taşıyan açık saha işlerini göster.',
      'Eksik parça nedeniyle bekleyen iş emirlerini listele ve satın almaya görev aç.',
      'Kanıtı eksik kapatılmaya çalışılan işleri göster.',
    ],
    metrics: [{ n:'%100', l:'SLA takibi' },{ n:'-%65', l:'Manuel veri girişi' },{ n:'Anlık', l:'Saha görünürlüğü' },{ n:'Sıfır', l:'Kanıtsız kapanış' }],
    faq: [
      ['Teknisyenler mobil cihazdan kullanabilir mi?', 'Evet. iOS ve Android saha uygulaması üzerinden iş emri alma, durum güncelleme ve kapanış belgesi yükleme yapılabilir.'],
      ['Müşteriye otomatik bildirim gidiyor mu?', 'Evet. İş emri oluşturulduğunda, teknisyen yola çıktığında ve iş tamamlandığında müşteriye SMS veya e-posta gönderilebilir.'],
      ['Birden fazla lokasyonda çalışıyor mu?', 'Evet. TAK-Umwelt 40+ lokasyonu tek Chief kurulumundan yönetiyor.'],
    ],
  },
  'bakim-ariza-teknik-servis': {
    featured: false, cat: 'OPERASYON VE SAHA', catKey: 'operasyon', icon: 'clock',
    eyebrow: 'Operasyon & Saha',
    cardTitle: 'Bakım, Arıza ve Teknik Servis',
    cardDesc: 'Planlı bakım ve arıza taleplerini ekip, parça, kanıt ve servis geçmişiyle yönetin.',
    cardSub: 'Tekil arıza ile tekrar eden kök sorun ayrılır; servis kararı ekipman geçmişiyle desteklenir.',
    h1: 'Bakım takviminden kök neden analizine tek süreç.',
    lead: 'Planlı bakım, arıza bildirimi, IoT uyarısı ve servis müdahalesini aynı yaşam döngüsünde yönetin; tekrar eden sorunları kök neden aksiyonuna bağlayın.',
    problem: 'Bakım takvimleri ve arıza kayıtları ayrık tutulduğunda aynı sorunlar tekrarlanır, kritik ekipman riski görünmez ve servis ekipleri geçmiş müdahaleye ulaşamaz. Öncelik yanlış belirlenebilir ve ekip sahaya eksik bilgiyle çıkabilir.',
    steps: [
      { num: '01', title: 'Süreci başlat', body: 'Bakım zamanı, arıza bildirimi veya IoT alarmı süreci başlatır. Chief ekipman geçmişi ve SLA\'ya göre öncelik belirler.' },
      { num: '02', title: 'Ekip ve parça hazırla', body: 'Teknisyen, zaman ve parça ihtiyacı önerilir; servis iş emri mobil saha akışına aktarılır.' },
      { num: '03', title: 'Müdahale et ve kaydet', body: 'Teknisyen teşhis, işlem, parça, süre, fotoğraf ve ölçüm bilgilerini kaydeder.' },
      { num: '04', title: 'Kapat veya iyileştir', body: 'Servis raporu oluşturulur. Tekrar eden arıza varsa kök neden analizi ve iyileştirme görevi başlatılır.' },
    ],
    nlQueries: [
      'Kritik ekipmanlarda tekrar eden arızaları kök nedenleriyle özetle.',
      'Parça beklediği için SLA riski taşıyan servisleri listele.',
      'Tekrar eden arıza için kalite ve bakım ekiplerine ortak aksiyon aç.',
    ],
    metrics: [{ n:'-%71', l:'Plansız arıza süresi' },{ n:'%100', l:'Zamanında bakım' },{ n:'9 dk', l:'Arızadan iş emirine' },{ n:'Tam', l:'Ekipman geçmişi' }],
    faq: [
      ['IoT sensör verisi entegre edilebilir mi?', 'Evet. Makine verisinden gelen anormal okumalar Chief\'e sinyal olarak iletilir, önleyici bakım önerisi üretilir.'],
      ['Tekrar eden arıza nasıl tespit ediliyor?', 'Chief benzer ekipman, semptom ve lokasyondaki geçmiş arızaları ilişkilendirir. Tekrar eşiği aşılınca kök neden vakası açılır.'],
      ['ERP\'deki bakım planları aktarılıyor mu?', 'Evet. SAP, Logo ve Netsis entegrasyonu ile mevcut bakım takvimleriniz otomatik senkronize edilir.'],
    ],
  },
  'montaj-proje-uygulama': {
    featured: false, cat: 'OPERASYON VE SAHA', catKey: 'operasyon', icon: 'layers',
    eyebrow: 'Operasyon & Saha',
    cardTitle: 'Montaj ve Proje Uygulama',
    cardDesc: 'Teknik resim, malzeme, ekipman ve işçilik gereksinimlerini sahadaki uygulamayla birleştirin.',
    cardSub: 'Teknik kapsam; iş paketi, kaynak, kontrol listesi, kanıt, eksik iş ve kabul akışına bağlanır.',
    h1: 'Kapsam sahada kaybolmaz.',
    lead: 'Teknik kapsamı; malzeme, ekipman, işçilik, saha koşulları ve kabul kriterleriyle kontrollü bir uygulama planına dönüştürün.',
    problem: 'Montaj ve proje işlerinde teknik resim, malzeme tedariki, ekipman ve işçilik birbirinden kopuk yönetildiğinde teslim süresi uzar, kalite riski artar ve ek işlerin etkisi geç fark edilir.',
    steps: [
      { num: '01', title: 'Projeyi kur', body: 'Onaylı teknik doküman ve teslim kriterleri proje dosyasında birleştirilir; iş paketleri oluşturulur.' },
      { num: '02', title: 'Kaynakları kontrol et', body: 'Chief tedarik, ekip, saha ve ekipman uygunluğunu kontrol eder; uygulama planı belirlenir.' },
      { num: '03', title: 'Sahayı izle', body: 'Kontrol listeleri, fotoğraf, ölçüm ve tutanaklarla ilerleme takip edilir; eksiklikler hemen görünür olur.' },
      { num: '04', title: 'Kapat', body: 'Geçici/kesin kabul süreci yönetilir; kapanış finans, garanti ve müşteri geri bildirimiyle bağlanır.' },
    ],
    nlQueries: [
      'Planlanan-gerçekleşen ilerleme sapmalarını proje bazında göster.',
      'Ek iş talebi açılan projelerde marj etkisini özetle.',
      'Kabul bekleyen işlerin eksiklerini ilgili ekiplere görev olarak aç.',
    ],
    metrics: [{ n:'Anlık', l:'Proje görünürlüğü' },{ n:'%0', l:'Kapsam kaybı' },{ n:'Otomatik', l:'Kabul takibi' },{ n:'Tam', l:'Kanıt arşivi' }],
    faq: [
      ['Teknik revizyon nasıl yönetiliyor?', 'Revizyon sinyali geldiğinde Chief etkilenen iş paketlerini tespit eder; onay ve fiyat etkisi sorulur, güncel dokümanla devam edilir.'],
      ['Hakediş süreci destekleniyor mu?', 'Evet. Aşamalı hakediş takibi, tamamlanan iş paketi bazında ilerler ve fatura sürecine otomatik bilgi aktarır.'],
      ['Eksik iş nasıl takip ediliyor?', 'Kabul aşamasında eksik iş listesi oluşturulur; her madde sorumlu ve kapanış tarihiyle izlenir.'],
    ],
  },
  'uretim-planlama-kapasite': {
    featured: false, cat: 'ÜRETİM, TEDARİK VE KALİTE', catKey: 'uretim', icon: 'factory',
    eyebrow: 'Üretim, Tedarik & Kalite',
    cardTitle: 'Üretim Planlama ve Kapasite',
    cardDesc: 'Siparişleri kapasite, termin, malzeme ve iş yüküyle uyumlu üretim planına dönüştürün.',
    cardSub: 'Chief ERP/MRP/MES verilerinin yerine geçmez; üretim kararlarını görev, risk ve yönetim içgörüsüne bağlar.',
    h1: 'Gerçekçi teslim tarihi, görünür darboğaz.',
    lead: 'Onaylı siparişleri kapasite, termin, malzeme, makine, vardiya ve kalite koşullarıyla uyumlu uygulanabilir üretim planına dönüştürün.',
    problem: 'Sipariş, kapasite, stok ve termin bilgisi birlikte değerlendirilmediğinde gerçekçi olmayan teslim sözleri verilir; darboğazlar geç fark edilir ve üretim planı sık sık bozulur.',
    steps: [
      { num: '01', title: 'Üretim ihtiyacını belirle', body: 'Onaylı sipariş; ürün ağacı, operasyon, miktar ve kalite koşullarıyla eşleştirilir.' },
      { num: '02', title: 'Kapasiteyi kontrol et', body: 'Makine, hat, vardiya, personel ve malzeme uygunluğu değerlendirilir.' },
      { num: '03', title: 'Planı öner', body: 'Kapasite kısıtlarına göre üretim sırası ve alternatif planlar önerilir; darboğaz varsa aksiyon başlatılır.' },
      { num: '04', title: 'Gerçekleşeni izle', body: 'Üretim ilerlemesi, fire, duruş ve kalite sonuçları plana geri beslenir; sapmalar yönetim için görünür hale getirilir.' },
    ],
    nlQueries: [
      'Termin riski taşıyan siparişleri nedenleriyle göster.',
      'Malzeme açığı nedeniyle bekleyen üretim emirleri için satın almaya görev aç.',
      'Kapasite artışı, dış kaynak veya termin revizyonu senaryolarını karşılaştır.',
    ],
    metrics: [{ n:'Anlık', l:'Kapasite görünürlüğü' },{ n:'-%30', l:'Plansız duruş' },{ n:'%0', l:'Sürpriz darboğaz' },{ n:'Gerçek zamanlı', l:'Plan-gerçekleşen' }],
    faq: [
      ['Chief ERP/MRP sisteminin yerine geçiyor mu?', 'Hayır. Chief ERP/MRP verilerini okur; üretim kararlarını görev, risk ve yönetim görünürlüğüne bağlar. Mevcut sisteminiz değişmez.'],
      ['IoT/makine verileri entegre edilebilir mi?', 'Evet. OEE, duruş ve üretim hızı gibi makine verileri Chief\'e sinyal olarak iletilir; sapma oluştuğunda ilgili ekibe görev açılır.'],
      ['Termin değişikliği müşteriye nasıl yansıyor?', 'Termin riski tespit edildiğinde satış ekibine uyarı ve müşteri iletişim görevi açılır. Karar insan onayıyla ilerler.'],
    ],
  },
  'stok-yedek-parca-tedarik': {
    featured: false, cat: 'ÜRETİM, TEDARİK VE KALİTE', catKey: 'uretim', icon: 'db',
    eyebrow: 'Üretim, Tedarik & Kalite',
    cardTitle: 'Stok, Yedek Parça ve Tedarik',
    cardDesc: 'Kritik stokları görünür kılın; ihtiyaç, rezervasyon ve tedarik aksiyonlarını zamanında başlatın.',
    cardSub: 'Stok miktarı tek başına değil, hangi iş için kritik olduğu ve ne zaman gerekli olduğu bağlamıyla izlenir.',
    h1: 'Stok miktarı değil, bağlamı yönetilir.',
    lead: 'Üretim, servis, bakım ve saha operasyonlarının ihtiyaç duyduğu malzeme ve parçaları zamanında görünür kılın; eksiklik oluşmadan tedarik, transfer veya rezervasyon aksiyonu başlatın.',
    problem: 'Stok miktarı tek başına yeterli değildir. Hangi parçanın hangi iş, bakım veya sipariş için gerekli olduğu bilinmediğinde kritik eksikler son anda ortaya çıkar; gereksiz stok ve operasyon kesintisi birlikte oluşur.',
    steps: [
      { num: '01', title: 'İhtiyacı bağla', body: 'Üretim, servis ve bakım ihtiyaçları stok kodlarıyla ilişkilendirilir; hangi parçanın hangi iş için kritik olduğu belirlenir.' },
      { num: '02', title: 'Riski hesapla', body: 'Mevcut, rezerve ve yoldaki stok; minimum seviye, tüketim hızı ve teslim süresiyle birlikte değerlendirilir.' },
      { num: '03', title: 'Aksiyonu öner', body: 'Transfer, rezervasyon, satın alma veya alternatif parça aksiyonu önerilir; yetki gerektiriyorsa onay akışı başlatılır.' },
      { num: '04', title: 'Tedariki izle', body: 'Tedarik süreci izlenir; malzeme geldiğinde ilgili iş emri veya üretim planı güncellenir.' },
    ],
    nlQueries: [
      'Stok nedeniyle bekleyen işleri önem sırasına göre göster.',
      'Tedarikçi gecikmelerinin üretim ve servis üzerindeki etkisini özetle.',
      'Fazla ve yavaş hareket eden stokları finansal etkiyle göster.',
    ],
    metrics: [{ n:'%0', l:'Son anda eksiklik' },{ n:'Anlık', l:'Kritik stok görünürlüğü' },{ n:'Proaktif', l:'Tedarik aksiyonu' },{ n:'-%28', l:'Stok fazlası' }],
    faq: [
      ['ERP stok verileriyle nasıl entegre oluyor?', 'Chief ERP\'deki stok, rezervasyon ve sipariş verilerini okur; ihtiyaçla bağlamı kurar. Stok güncellemesi ERP\'de yapılmaya devam eder.'],
      ['Alternatif parça önerisi nasıl çalışıyor?', 'Uyumlu parça veritabanı tanımlanmışsa Chief alternatifi önerir; teknik onay gerektiren durumlarda görev açılır.'],
      ['Minimum stok seviyeleri nasıl ayarlanıyor?', 'ERP\'deki min/max seviyeleri okunur veya Chief içinde tanımlanabilir. Eşik yaklaşınca uyarı ve satın alma talebi oluşturulur.'],
    ],
  },
  'kalite-uygunsuzluk-duzeltici-faaliyet': {
    featured: false, cat: 'ÜRETİM, TEDARİK VE KALİTE', catKey: 'uretim', icon: 'check',
    eyebrow: 'Üretim, Tedarik & Kalite',
    cardTitle: 'Kalite Uygunsuzluk ve Düzeltici Faaliyet',
    cardDesc: 'Uygunsuzluğu kanıtıyla kaydedin; kök neden, sorumluluk ve düzeltici aksiyonu izleyin.',
    cardSub: 'Kalite kaydı raporda kalmaz; kök neden, düzeltici faaliyet, doğrulama ve tekrar riskine bağlanır.',
    h1: 'Uygunsuzluk raporda değil, kapalı döngüde.',
    lead: 'Üretim, saha, tedarikçi veya müşteri kaynaklı uygunsuzlukları kök neden, sorumlu aksiyon ve etkinlik doğrulamasıyla kapalı döngüye alın.',
    problem: 'Uygunsuzluklar yalnızca kayıt altına alındığında gerçek nedenler tekrarlanır. Kaynak netleşmezse düzeltici faaliyet geç kalır ve müşteri etkisi büyür.',
    steps: [
      { num: '01', title: 'Uygunsuzluğu kaydet', body: 'Sinyal üretim, saha, müşteri veya denetim kanalından gelir; ürün, iş emri ve lot ile ilişkilendirilir.' },
      { num: '02', title: 'Sınıflandır ve eskalasyonu başlat', body: 'Etki, aciliyet, güvenlik riski ve tekrar ihtimali değerlendirilir; durdurma veya eskalasyon görevi açılır.' },
      { num: '03', title: 'Kök neden analizi yap', body: 'Sorumlu atanır; kök neden analizi ve düzeltici faaliyet gerçekleştirilir.' },
      { num: '04', title: 'Doğrula ve kapat', body: 'Kanıt toplanır, etkinlik kontrol edilir. Tekrar eden uygunsuzluk yönetim içgörüsüne dönüşür.' },
    ],
    nlQueries: [
      'Tekrar eden uygunsuzlukları kök neden ve sorumlularıyla göster.',
      'Müşteri şikayetiyle bağlantılı kalite kayıtlarını özetle.',
      'Etkinliği doğrulanmamış düzeltici faaliyetleri listele.',
    ],
    metrics: [{ n:'-%60', l:'Tekrar eden uygunsuzluk' },{ n:'%100', l:'Kök neden bağlantısı' },{ n:'Anlık', l:'Açık CAPA sayısı' },{ n:'Kapalı döngü', l:'Her uygunsuzluk' }],
    faq: [
      ['ISO 9001 gerekliliklerini karşılıyor mu?', 'Chief uygunsuzluk kaydı, kök neden, düzeltici faaliyet, doğrulama ve etkinlik takibi adımlarını ISO 9001 çerçevesiyle destekler. Denetim izi tamamen korunur.'],
      ['Tedarikçi kaynaklı uygunsuzluklar nasıl yönetiliyor?', 'Tedarikçi aksiyonu ayrı bir alt vaka olarak açılır; bağlantılı sipariş, lot ve fatura kayıtlarıyla ilişkilendirilir.'],
      ['Müşteriye telafi süreci entegre mi?', 'Evet. Kritik uygunsuzluklarda telafi onay süreci ve müşteri geri dönüş görevi otomatik tetiklenebilir.'],
    ],
  },
  'fatura-tahsilat-is-kapanisi': {
    featured: false, cat: 'FİNANSAL KAPANIŞ', catKey: 'finans', icon: 'doc',
    eyebrow: 'Finansal Kapanış',
    cardTitle: 'Fatura, Tahsilat ve İş Kapanışı',
    cardDesc: 'Teslim ve hakedişten faturaya, tahsilattan mali kapanışa kadar süreci izleyin.',
    cardSub: 'İşin yapılması, fatura kesilmesi ve tahsil edilmesi aynı zincirde görünür olur.',
    h1: 'İş yapıldı — fatura, tahsilat, kapanış.',
    lead: 'Operasyonun kapanışını fatura, vade, tahsilat ve nakit riski görünürlüğüyle birlikte yönetin.',
    problem: 'Satış gerçekleşir ve iş yapılır; ancak fatura, hakediş, tahsilat, gecikme ve kapanış bilgisi farklı ekiplerde kalabilir. Bu durum nakit akışını, kârlılığı ve müşteri yönetimini etkiler.',
    steps: [
      { num: '01', title: 'Kapanış sinyalini al', body: 'İş, servis veya üretim kapanış sinyali alınır; faturaya hazır olma kontrol edilir.' },
      { num: '02', title: 'Eksik tamamla', body: 'Kapanış kanıtı, müşteri onayı, miktar veya fiyat eksikse görev açılır; ilgili ekipten bilgi istenir.' },
      { num: '03', title: 'Vadeyi izle', body: 'Fatura muhasebe sistemiyle ilişkilendirilir; vade ve tahsilat durumu izlenir.' },
      { num: '04', title: 'Gecikmede eskalasyon', body: 'Vade yaklaşınca otomatik takip başlatılır; gecikme satış/finans/yönetici kanalına eskalasyon edilir.' },
    ],
    nlQueries: [
      'Faturalanmamış işleri tutar ve sorumlu ekip bazında göster.',
      'Vadesi yaklaşan ve yüksek riskli alacaklar için satış/finans ekiplerine takip görevi aç.',
      'Tahsilat gecikmelerinin müşteri segmentine göre nedenlerini özetle.',
    ],
    metrics: [{ n:'Anlık', l:'Faturalanmamış iş' },{ n:'-%35', l:'Fatura kesme süresi' },{ n:'%100', l:'Vade görünürlüğü' },{ n:'Proaktif', l:'Tahsilat uyarısı' }],
    faq: [
      ['Muhasebe/e-fatura sistemiyle entegrasyon var mı?', 'Evet. Logo, Netsis, SAP ve e-fatura sistemlerine bağlanır; fatura tetikleyicisi ve onay akışı Chief\'ten yönetilir.'],
      ['Kısmi hakediş nasıl işleniyor?', 'Hakediş aşamaları ayrı ayrı takip edilir; her aşama kapandığında ilgili tutar fatura sürecine aktarılır.'],
      ['Nakit riski nasıl görünüyor?', 'Vadesi geçmiş alacaklar, müşteri segmenti ve geçmiş gecikme geçmişiyle birlikte yönetim özeti olarak sunulur.'],
    ],
  },
  'musteri-geri-bildirimi-iyilestirme': {
    featured: false, cat: 'PAYDAŞ DENEYİMİ', catKey: 'paydas', icon: 'star',
    eyebrow: 'Paydaş Deneyimi',
    cardTitle: 'Müşteri Geri Bildirimi ve İyileştirme',
    cardDesc: 'Geri bildirimi yalnızca skor olarak değil, sorumlusu ve sonucu olan iyileştirme aksiyonuna dönüştürün.',
    cardSub: 'Dendy gibi geri bildirim kanallarından gelen içgörü, Chief içinde görev ve kapanış takibine bağlanır.',
    h1: 'Müşteri sesi aksiyona dönüşür.',
    lead: 'Müşteri sesini skorla sınırlamayın; konu, duygu, kök neden, sorumlu aksiyon ve kapanış etkisiyle yönetin.',
    problem: 'Memnuniyet anketleri, NPS, şikayetler ve açık uçlu yorumlar çoğu zaman rapor olarak kalır. Hangi konunun acil olduğu, kimin aksiyon alacağı ve kapanışın nasıl ölçüleceği netleşmez.',
    steps: [
      { num: '01', title: 'Geri bildirimi topla', body: 'NPS, CSAT, WhatsApp, e-posta veya Dendy kanalından geri bildirim alınır.' },
      { num: '02', title: 'Analiz et', body: 'Chief skor, duygu, tema, konu ve müşteri segmentine göre değerlendirir; ilgili sipariş veya servis kaydıyla ilişkilendirir.' },
      { num: '03', title: 'Aksiyon aç', body: 'Kritik kayıt varsa eskalasyon başlatılır; geri dönüş, telafi, inceleme veya süreç iyileştirme görevi atanır.' },
      { num: '04', title: 'Ölç ve kapat', body: 'Aksiyon kapanışı izlenir; tekrar eden temalar yönetim içgörüsüne dönüşür.' },
    ],
    nlQueries: [
      'Düşen NPS\'in operasyonel nedenlerini müşteri segmentine göre özetle.',
      'Kritik şikayetleri ilgili süreç sahiplerine görev olarak aç.',
      'Riskli müşteriler için iyileştirme planı öner.',
    ],
    metrics: [{ n:'Anlık', l:'Kritik şikayet uyarısı' },{ n:'%100', l:'Aksiyon takibi' },{ n:'-%50', l:'Şikayet kapanış süresi' },{ n:'Kapalı döngü', l:'Her geri bildirim' }],
    faq: [
      ['Dendy entegrasyonu nasıl çalışıyor?', 'Dendy\'den gelen NPS, CSAT ve açık uçlu yanıtlar Chief\'e otomatik aktarılır. Tema analizi, kritik uyarı ve aksiyon takibi Chief içinde yönetilir.'],
      ['Şikayet hangi süreçlere dallanabiliyor?', 'Chief şikayeti konu ve kaynağa göre teknik servis, kalite, satış veya finans sürecine bağlar. Her süreç kendi sorumlusuna taşınır.'],
      ['Anonimlik korunuyor mu?', 'Evet. Anket tasarımına göre kimlik bilgisi maskelenir; yönetim tema ve trend analizini anonim görür.'],
    ],
  },
  'calisan-deneyimi-ik-aksiyonlari': {
    featured: false, cat: 'PAYDAŞ DENEYİMİ', catKey: 'paydas', icon: 'users',
    eyebrow: 'Paydaş Deneyimi',
    cardTitle: 'Çalışan Deneyimi ve İK Aksiyonları',
    cardDesc: 'Çalışan sesini güvenli biçimde analiz edin; tekrar eden sorunları ve gelişim alanlarını aksiyona bağlayın.',
    cardSub: 'Geri bildirim anonimlik, minimum örneklem ve yetki kurallarıyla yönetimsel aksiyona dönüştürülür.',
    h1: 'Çalışan geri bildirimi gerçek aksiyona dönüşür.',
    lead: 'Çalışan geri bildirimlerini güvenli, anlamlı ve aksiyon alınabilir şekilde yönetin; tekrar eden sorunları İK ve yönetim aksiyonlarına bağlayın.',
    problem: 'Çalışan memnuniyeti, bağlılık, eğitim ihtiyacı ve iç iletişim problemleri çoğu zaman periyodik anketlerde kalır. Yönetim gerçek sinyali geç görür; İK aksiyonlarının etkisi düzenli takip edilemez.',
    steps: [
      { num: '01', title: 'Geri bildirimi topla', body: 'Periyodik veya olay bazlı geri bildirim akışı başlatılır; çalışan yanıtları uygun kanallardan alınır.' },
      { num: '02', title: 'Güvenli analiz et', body: 'Chief tema, duygu, ihtiyaç ve risk konularını analiz eder; gizlilik ve minimum örneklem kuralları korunur.' },
      { num: '03', title: 'Aksiyon öner', body: 'İK veya yönetim için eğitim, iletişim, iş yükü veya liderlik aksiyonları önerilir.' },
      { num: '04', title: 'İzle ve ölç', body: 'Aksiyonların kapanışı ve etkisi izlenir; sonraki ölçümle iyileşme değerlendirilir.' },
    ],
    nlQueries: [
      'Çalışan bağlılığı düşen ekiplerde tekrar eden temaları anonim şekilde özetle.',
      'İş yükü ve vardiya kaynaklı riskleri operasyon verisiyle birlikte göster.',
      'Son nabız ölçümüne göre yönetim toplantısı için öncelikli 5 konuyu hazırla.',
    ],
    metrics: [{ n:'Anonim', l:'Gizlilik koruması' },{ n:'Anlık', l:'Kritik tema uyarısı' },{ n:'%100', l:'Aksiyon takibi' },{ n:'Kapalı döngü', l:'Her sinyal' }],
    faq: [
      ['Anonimlik nasıl sağlanıyor?', 'Minimum örneklem kuralları aktif olduğunda bireysel yanıt tanımlanamaz. Hassas konular anonim vaka olarak özel yetkili kanala yönlenebilir.'],
      ['Dendy entegrasyonu var mı?', 'Evet. Dendy çalışan deneyimi verisi Chief\'e aktarılır; tema analizi, kritik uyarı ve İK aksiyon takibi Chief içinde yönetilir.'],
      ['İSG ve etik bildirimler nasıl ele alınıyor?', 'Bu bildirimler ayrı yetkili kanala yönlendirilir; normal yönetim görünümünden izole edilir.'],
    ],
  },
};

/* ---- Kategori filtre ---- */
window.isCatFilter = function(btn, cat) {
  document.querySelectorAll('.is-cat').forEach(function(b) { b.classList.remove('active'); });
  btn.classList.add('active');
  document.querySelectorAll('#isSureciGrid .card').forEach(function(card) {
    card.style.display = (cat === '*' || card.getAttribute('data-cat') === cat) ? '' : 'none';
  });
};

/* ---- Listing ---- */
function renderIsSureciListing() {
  var CAT_LABELS = [
    { key: 'satis',    label: 'Satış & Teklif' },
    { key: 'operasyon',label: 'Operasyon & Saha' },
    { key: 'uretim',   label: 'Üretim, Tedarik & Kalite' },
    { key: 'finans',   label: 'Finansal Kapanış' },
    { key: 'paydas',   label: 'Paydaş Deneyimi' },
  ];
  var feat = IS_SURECLERI_DATA['yonetimsel-dogal-dil'];
  var slugs = Object.keys(IS_SURECLERI_DATA).filter(function(k) { return !IS_SURECLERI_DATA[k].featured; });

  var h = '<section class="detail-hero"><div class="container">' +
    crumb(['İş Süreçleri']) +
    '<span class="eyebrow">AI-NATIVE SÜREÇ KATMANI</span>' +
    '<h1 style="margin-top:16px;max-width:720px">İş Süreçlerinizi Sinyalden Sonuca Yönetin</h1>' +
    '<p class="lead" style="max-width:620px">Yönetimsel doğal dil veri erişiminden satışa, operasyondan üretime, finansal kapanıştan paydaş deneyimine — 15 süreç, tek işletme akışında.</p>' +
    '</div></section>';

  h += '<section class="tight"><div class="container">';

  // Featured card
  h += '<a class="is-feat" href="#/is-surecleri/yonetimsel-dogal-dil">' +
    '<span class="eyebrow on-dark">' + esc(feat.cat) + '</span>' +
    '<h3>' + esc(feat.cardTitle) + '</h3>' +
    '<p>' + esc(feat.cardDesc) + '</p>' +
    '<p class="is-feat-sub">' + esc(feat.cardSub) + '</p>' +
    '<span class="btn-link">İncele ' + ico('arrow', 15) + '</span>' +
    '</a>';

  // Category filter
  h += '<div class="is-cats">' +
    '<button class="is-cat active" onclick="window.isCatFilter(this,\'*\')">Tümü</button>';
  CAT_LABELS.forEach(function(c) {
    h += '<button class="is-cat" onclick="window.isCatFilter(this,\'' + c.key + '\')">' + esc(c.label) + '</button>';
  });
  h += '</div>';

  // Cards
  h += '<div class="cards-grid" id="isSureciGrid">';
  slugs.forEach(function(slug, n) {
    var d = IS_SURECLERI_DATA[slug];
    h += '<a class="card" href="#/is-surecleri/' + slug + '" data-cat="' + d.catKey + '">' +
      '<div class="card-ico ' + (n%3===1?'sage':n%3===2?'blue':'') + '">' + ico(d.icon, 22) + '</div>' +
      '<span style="font-size:11px;font-weight:600;color:var(--t-muted);text-transform:uppercase;letter-spacing:.06em;display:block;margin-bottom:10px">' + esc(d.cat) + '</span>' +
      '<h4>' + esc(d.cardTitle) + '</h4>' +
      '<p>' + esc(d.cardDesc) + '</p>' +
      '<span class="card-foot btn-link">İncele ' + ico('arrow', 15) + '</span>' +
      '</a>';
  });
  h += '</div></div></section>' + finalCTA();
  return h;
}

/* ---- Detay sayfası ---- */
function renderIsSureciPage(slug) {
  var d = IS_SURECLERI_DATA[slug];
  if (!d) return renderNotFound();

  var h = '<section class="detail-hero"><div class="container">' +
    crumb(['İş Süreçleri', '#/is-surecleri'], [d.cardTitle]) +
    '<span class="eyebrow">' + esc(d.eyebrow) + '</span>' +
    '<h1 style="margin-top:16px;max-width:760px">' + esc(d.h1) + '</h1>' +
    '<p class="lead" style="max-width:640px">' + esc(d.lead) + '</p>' +
    '<p class="rp-scenario" style="font-style:normal;background:rgba(0,0,0,.04)">' + esc(d.problem) + '</p>' +
    '</div></section>';

  // Akış adımları
  h += '<section style="padding:52px 0"><div class="container">' +
    '<div class="section-head" style="margin-bottom:24px"><span class="eyebrow">Chief bu süreci nasıl yönetir?</span></div>' +
    '<div class="proc-steps-grid">';
  d.steps.forEach(function(s) {
    h += '<div class="proc-step">' +
      '<div class="proc-step-num">' + esc(s.num) + '</div>' +
      '<div><h4>' + esc(s.title) + '</h4><p>' + esc(s.body) + '</p></div>' +
      '</div>';
  });
  h += '</div></div></section>';

  // NL Queries
  h += '<section class="bg-warm" style="padding:40px 0"><div class="container">' +
    '<div class="nl-block">' +
    '<div class="nl-block-label">' + ico('chat', 14) + ' Yönetici Chief\'e sorar</div>';
  d.nlQueries.forEach(function(q) {
    h += '<div class="nl-item"><div class="nl-dot"></div><p>' + esc(q) + '</p></div>';
  });
  h += '</div></div></section>';

  // Metrikler + SSS
  h += '<section style="padding:56px 0"><div class="container">' +
    '<div class="sp-metrics" style="margin-bottom:32px">';
  d.metrics.forEach(function(m) {
    h += '<div class="sp-metric"><span class="sp-num">' + esc(m.n) + '</span><span class="sp-label">' + esc(m.l) + '</span></div>';
  });
  h += '</div>' +
    '<div class="section-head" style="margin-top:0;margin-bottom:0"><span class="eyebrow">SSS</span></div>';
  d.faq.forEach(function(f) {
    h += '<details class="faq-item"><summary>' + esc(f[0]) + '</summary><p>' + esc(f[1]) + '</p></details>';
  });
  h += '</div></section>';

  return h + finalCTA();
}

function _stub(label, slug) {
  return '<section class="detail-hero"><div class="container">' +
    crumb([label]) +
    '<span class="eyebrow">Hazırlanıyor</span>' +
    '<h1 style="margin-top:16px">' + esc(label) + (slug ? ' — ' + esc(slug) : '') + '</h1>' +
    '<p class="lead">Bu içerik yakında eklenecek.</p>' +
    '</div></section>' + blogStrip('') + finalCTA();
}

/* ================================================================
   BLOG RENDER
   ================================================================ */
function renderBlog() {
  return '<section class="detail-hero"><div class="container">' +
    crumb(['Blog']) +
    '<span class="eyebrow">Blog</span>' +
    '<h1 style="margin-top:16px">Chief\'den yazılar</h1>' +
    '<p class="lead">Operasyonel verimlilik, AI-native sistemler ve kurumsal operasyon yönetimi üzerine içerikler.</p>' +
    '</div></section>' +
    '<section><div class="container"><div class="blog-grid">' +
    BLOG_POSTS.map(p =>
      '<a class="blog-card" href="#/blog/' + p.slug + '">' +
      '<span class="blog-card-tag">' + esc(p.eyebrow) + '</span>' +
      '<h4>' + esc(p.title) + '</h4>' +
      '<p class="blog-card-lead">' + esc(p.lead) + '</p>' +
      '<span class="blog-card-meta">' + esc(p.tag) + ' · ' + p.readMin + ' dk</span>' +
      '</a>'
    ).join('') +
    '</div></div></section>' + finalCTA();
}

function renderBlogPost(slug) {
  const p = BLOG_POSTS.find(x => x.slug === slug);
  if (!p) return renderNotFound();
  return '<section class="detail-hero"><div class="container">' +
    crumb(['Blog', '#/blog'], [p.title]) +
    '<span class="eyebrow">' + esc(p.eyebrow) + '</span>' +
    '<h1 style="margin-top:16px;max-width:760px">' + esc(p.title) + '</h1>' +
    '<p class="lead">' + esc(p.lead) + '</p>' +
    '<p style="margin-top:18px;font-size:13px;color:var(--t-muted)">' + esc(p.tag) + ' · ' + p.readMin + ' dk okuma</p>' +
    '</div></section>' +
    '<section><div class="container narrow">' +
    '<p class="lead" style="color:var(--t-muted);font-style:italic">Bu yazının tam içeriği yakında eklenecek.</p>' +
    '</div></section>' +
    blogStrip(slug) + finalCTA();
}

/* duplicate renderDemo kaldırıldı — yukarıdaki tam versiyon aktif */

/* ================================================================
   TAKVİM MODALi — tam çalışan implementasyon
   calOverlay body-level, tüm sayfalarda kalıcı
   ================================================================ */
function initCalModal() {
  var overlay  = document.getElementById('calOverlay');
  if (!overlay || overlay._calInit) return;
  overlay._calInit = true;

  var MONTHS = ['Ocak','Şubat','Mart','Nisan','Mayıs','Haziran','Temmuz','Ağustos','Eylül','Ekim','Kasım','Aralık'];
  var SLOTS   = ['09:00','10:00','11:00','14:00','15:00','16:00'];
  var cur     = new Date();
  cur.setDate(1);
  var selectedDate = null;
  var selectedTime = null;

  function isAvailable(d) {
    var now  = new Date();
    var min  = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 2);
    var max  = new Date(now.getFullYear(), now.getMonth() + 2, 0);
    var day  = d.getDay();
    return d >= min && d <= max && day !== 0 && day !== 6;
  }

  function renderCal() {
    var label = document.getElementById('calMonthLabel');
    var grid  = document.getElementById('calDays');
    if (!label || !grid) return;
    label.textContent = MONTHS[cur.getMonth()] + ' ' + cur.getFullYear();
    var first   = new Date(cur.getFullYear(), cur.getMonth(), 1);
    var last    = new Date(cur.getFullYear(), cur.getMonth() + 1, 0);
    var startDay = (first.getDay() + 6) % 7; // Pazartesi=0
    var html = '';
    for (var i = 0; i < startDay; i++) html += '<div></div>';
    for (var d = 1; d <= last.getDate(); d++) {
      var date = new Date(cur.getFullYear(), cur.getMonth(), d);
      var avail = isAvailable(date);
      var sel   = selectedDate && date.toDateString() === selectedDate.toDateString();
      html += '<button class="cal-day' + (avail ? ' available' : ' unavailable') + (sel ? ' selected' : '') + '"' +
              (avail ? '' : ' disabled') + ' data-date="' + date.toISOString() + '">' + d + '</button>';
    }
    grid.innerHTML = html;
    grid.querySelectorAll('.cal-day.available').forEach(function(btn) {
      btn.addEventListener('click', function() {
        selectedDate = new Date(this.getAttribute('data-date'));
        selectedTime = null;
        renderCal();
        renderSlots();
      });
    });
  }

  function renderSlots() {
    // Calendly stili: takvim GİZLENİR, sadece slotlar gösterilir
    var calNav  = document.querySelector('.cal-month-nav');
    var calWds  = document.querySelector('.cal-weekdays');
    var calDaysEl = document.getElementById('calDays');
    var wrap    = document.getElementById('calTimes');
    var lbl     = document.getElementById('calTimesLabel');
    var grid    = document.getElementById('calTimeGrid');
    var title   = document.querySelector('.cal-right-title');
    if (!wrap || !grid) return;
    if (!selectedDate) {
      if (calNav)   calNav.style.display = '';
      if (calWds)   calWds.style.display = '';
      if (calDaysEl) calDaysEl.style.display = '';
      wrap.style.display = 'none';
      if (title) title.textContent = 'Bir tarih seçin';
      return;
    }
    // Takvimi gizle, slotları göster
    if (calNav)   calNav.style.display = 'none';
    if (calWds)   calWds.style.display = 'none';
    if (calDaysEl) calDaysEl.style.display = 'none';
    var days = ['Pazar','Pazartesi','Salı','Çarşamba','Perşembe','Cuma','Cumartesi'];
    var dateStr = days[selectedDate.getDay()] + ', ' + selectedDate.getDate() + ' ' + MONTHS[selectedDate.getMonth()];
    if (title) title.textContent = dateStr + ' — saat seçin';
    lbl.textContent = 'Müsait saatler';
    grid.innerHTML = SLOTS.map(function(t) {
      return '<button class="cal-time-btn" data-time="' + t + '">' + t + '</button>';
    }).join('');
    wrap.style.display = '';
    // Geri butonu ile takvime dön
    var backToCalBtn = document.getElementById('calBackToCal');
    if (!backToCalBtn) {
      backToCalBtn = document.createElement('button');
      backToCalBtn.id = 'calBackToCal';
      backToCalBtn.className = 'cal-back-btn';
      backToCalBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" width="13" height="13"><polyline points="15 18 9 12 15 6"/></svg> Tarihi değiştir';
      wrap.insertBefore(backToCalBtn, wrap.firstChild);
      backToCalBtn.addEventListener('click', function() {
        selectedDate = null;
        renderCal();
        renderSlots();
      });
    }
    grid.querySelectorAll('.cal-time-btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        selectedTime = this.getAttribute('data-time');
        setTimeout(goStep2, 150);
      });
    });
  }

  function goStep2() {
    var days = ['Pazar','Pazartesi','Salı','Çarşamba','Perşembe','Cuma','Cumartesi'];
    document.getElementById('calStep1').style.display = 'none';
    document.getElementById('calStep2').style.display = '';
    var slot = document.getElementById('calSelectedSlot');
    if (slot) slot.textContent = days[selectedDate.getDay()] + ', ' + selectedDate.getDate() + ' ' +
      MONTHS[selectedDate.getMonth()] + ' · ' + selectedTime + ' (Online)';
  }

  function goStep3(name) {
    var days = ['Pazar','Pazartesi','Salı','Çarşamba','Perşembe','Cuma','Cumartesi'];
    document.getElementById('calStep2').style.display = 'none';
    document.getElementById('calStep3').style.display = '';
    var info = document.getElementById('calConfirmedInfo');
    if (info) info.textContent = days[selectedDate.getDay()] + ', ' + selectedDate.getDate() + ' ' +
      MONTHS[selectedDate.getMonth()] + ' · ' + selectedTime + ' · Emre Kaya ile · Google Meet';
  }

  function resetCal() {
    selectedDate = null; selectedTime = null;
    document.getElementById('calStep1').style.display = '';
    document.getElementById('calStep2').style.display = 'none';
    document.getElementById('calStep3').style.display = 'none';
    var backBtn = document.getElementById('calBackToCal');
    if (backBtn) backBtn.remove();
    renderCal();
    renderSlots(); // takvimi geri göster
  }

  // İlk render
  renderCal();

  // Ay navigasyonu
  var prev = document.getElementById('calPrev');
  var next = document.getElementById('calNext');
  if (prev) prev.addEventListener('click', function() {
    cur.setMonth(cur.getMonth() - 1);
    renderCal();
  });
  if (next) next.addEventListener('click', function() {
    cur.setMonth(cur.getMonth() + 1);
    renderCal();
  });

  // Geri butonu
  var back = document.getElementById('calBack');
  if (back) back.addEventListener('click', function() {
    document.getElementById('calStep2').style.display = 'none';
    document.getElementById('calStep1').style.display = '';
  });

  // Form submit
  var form = document.getElementById('calForm');
  if (form) form.addEventListener('submit', function(e) {
    e.preventDefault();
    var name = (this.querySelector('[name="name"]') || {}).value || '';
    goStep3(name);
  });

  // Kapat
  var closeBtn = document.getElementById('calClose');
  if (closeBtn) closeBtn.addEventListener('click', function() {
    overlay.classList.remove('open');
    setTimeout(resetCal, 350);
  });
  overlay.addEventListener('click', function(e) {
    if (e.target === overlay) {
      overlay.classList.remove('open');
      setTimeout(resetCal, 350);
    }
  });
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && overlay.classList.contains('show')) {
      overlay.classList.remove('open');
      setTimeout(resetCal, 350);
    }
  });
}

function bindCalModal() {
  var overlay = document.getElementById('calOverlay');
  if (!overlay) return;
  document.querySelectorAll('[data-cal="open"]').forEach(function(btn) {
    btn.addEventListener('click', function(e) { e.preventDefault(); overlay.classList.add('open'); });
  });
}

/* ================================================================
   STICKY CONTACT WIDGET — her sayfada sabit, sağ alt köşe
   Tab 1: Keşif Görüşmesi (takvim) | Tab 2: Hızlı Soru Sor (form)
   ================================================================ */
function injectStickyContact() {
  if (document.getElementById('scWrap')) return; // zaten enjekte edildi

  var wrap = document.createElement('div');
  wrap.className = 'sc-wrap';
  wrap.id = 'scWrap';
  wrap.innerHTML =
    '<div class="sc-panel" id="scPanel">' +
      '<div class="sc-tabs">' +
        '<button class="sc-tab active" data-tab="cal">' + ico('cal', 14) + ' Görüşme Planla</button>' +
        '<button class="sc-tab" data-tab="ask">' + ico('chat', 14) + ' Hızlı Soru</button>' +
      '</div>' +
      '<div class="sc-body">' +
        // Calendar tab
        '<div id="scTabCal">' +
          '<button class="sc-cal-btn" id="scCalBtn" data-cal="open">' + ico('cal', 16) + ' 30 dk Keşif Görüşmesi</button>' +
        '</div>' +
        // Quick question tab
        '<div id="scTabAsk" style="display:none">' +
          '<form class="sc-form" id="scAskForm">' +
            '<input type="text" class="sc-input" placeholder="Adınız" required>' +
            '<input type="email" class="sc-input" placeholder="E-posta adresiniz" required>' +
            '<textarea class="sc-textarea" placeholder="Sorunuzu yazın..." required></textarea>' +
            '<button type="submit" class="sc-send">Gönder ' + ico('arrow', 14) + '</button>' +
          '</form>' +
        '</div>' +
      '</div>' +
    '</div>' +
    '<button class="sc-toggle" id="scToggle">' + ico('cal', 18) + ' Görüşme Planla</button>';

  document.body.appendChild(wrap);

  // Toggle panel
  document.getElementById('scToggle').addEventListener('click', function() {
    document.getElementById('scPanel').classList.toggle('open');
  });

  // Tab switching
  wrap.querySelectorAll('.sc-tab').forEach(function(tab) {
    tab.addEventListener('click', function() {
      wrap.querySelectorAll('.sc-tab').forEach(function(t) { t.classList.remove('active'); });
      tab.classList.add('active');
      var which = tab.getAttribute('data-tab');
      document.getElementById('scTabCal').style.display = which === 'cal' ? '' : 'none';
      document.getElementById('scTabAsk').style.display = which === 'ask' ? '' : 'none';
    });
  });

  // Calendar button — data-cal="open" ile chief-animations.js'in openCal()'ını tetikler
  // scPanel'i kapat, gerisini global handler halleder
  document.getElementById('scCalBtn').addEventListener('click', function() {
    document.getElementById('scPanel').classList.remove('open');
  });

  // Quick question form submit
  document.getElementById('scAskForm').addEventListener('submit', function(e) {
    e.preventDefault();
    this.innerHTML = '<p class="sc-success">' + ico('check', 16) + ' Sorunuz alındı, 24 saat içinde yanıt vereceğiz.</p>';
  });

  // Close panel on outside click
  document.addEventListener('click', function(e) {
    if (!wrap.contains(e.target)) {
      document.getElementById('scPanel').classList.remove('open');
    }
  });
}

/* ================================================================
   DEMO FORM HANDLER
   ================================================================ */
window.chiefDemoSubmit = function(e) {
  e.preventDefault();
  document.getElementById('demoForm').style.display = 'none';
  document.getElementById('demoSuccess').style.display = 'block';
  return false;
};

/* ================================================================
   INIT
   ================================================================ */
fillFooter();
injectStickyContact();
window.addEventListener('hashchange', go);
window.addEventListener('load', go);
