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
      { label: 'Platform Temelleri', items: [
        { href: '#/platform/chief-nedir',                 title: 'Chief Nedir?',                desc: 'Akıllı işletme katmanının konumu' },
        { href: '#/platform/chief-nasil-calisir',         title: 'Chief Nasıl Çalışır?',        desc: 'Sinyalden aksiyona 5 temel adım' },
        { href: '#/platform/akilli-isletme-katmani',      title: 'Akıllı İşletme Katmanı',      desc: 'ERP/CRM üzerinde süreç ve karar katmanı' },
        { href: '#/platform/sinyalden-aksiyona',          title: 'Sinyalden Aksiyona',           desc: 'Her sinyal takip edilebilir iş akışına' },
        { href: '#/platform/mevcut-sistemlerle-calisir',  title: 'Mevcut Sistemlerle Çalışır',   desc: 'Sistemleri değiştirmeden değer üretir' },
        { href: '#/platform/is-nesnesi-ve-veri-katmani',  title: 'İş Nesnesi ve Veri Katmanı',   desc: 'Müşteri, teklif, iş emri tek modelde' },
      ]},
      { label: 'Yetenekler', items: [
        { href: '#/platform/ai-ajanlar-ve-gorev-yonetimi', title: 'AI Ajanlar ve Görev Yönetimi', desc: 'Koordineli ajanlar, insan kontrolü' },
        { href: '#/platform/gorev-onay-ve-takip',           title: 'Görev, Onay ve Takip',         desc: 'SLA, sorumlu ve kapanış kriteri' },
        { href: '#/platform/surecler-arasi-devir-teslim',   title: 'Süreçler Arası Devir Teslim',  desc: 'Satıştan sahaya bilgi kayıpsız' },
        { href: '#/platform/yonetim-paneli-ve-dashboard',   title: 'Yönetim Paneli ve Dashboard',  desc: 'Risk ve ilerleme gerçek zamanlı' },
        { href: '#/platform/rol-bazli-yetkilendirme',        title: 'Rol Bazlı Yetkilendirme',      desc: 'Granüler erişim, denetim izi' },
        { href: '#/platform/guvenlik-ve-veri-yaklasimi',     title: 'Güvenlik ve Veri Yaklaşımı',   desc: 'KVKK, GDPR, on-prem seçenekleri' },
      ]},
    ],
  },
  'kullanim-alanlari': {
    cols: [
      { label: 'İş Süreçlerine Göre', items: [
        { href: '#/kullanim-alanlari/is-sureclerine-gore/yonetim-katmani', title: 'Yönetim Katmanı',              desc: '' },
        { href: '#/is-surecleri',                                              title: 'Satış ve Teklif',              desc: '' },
        { href: '#/is-surecleri',                                              title: 'Operasyon ve Saha',            desc: '' },
        { href: '#/is-surecleri',                                              title: 'Üretim, Tedarik ve Kalite',    desc: '' },
        { href: '#/kullanim-alanlari/is-sureclerine-gore/finans',                  title: 'Finans',                       desc: '' },
        { href: '#/is-surecleri',                                              title: 'Paydaş Deneyimi',              desc: '' },
      ]},
      { label: 'Sektörlere Göre', items: [
        { href: '#/kullanim-alanlari/sektorlere-gore/uretim-ve-sanayi', title: 'Üretim ve Sanayi',               desc: '' },
        { href: '#/kullanim-alanlari/sektorlere-gore/hizmet-ve-saha-operasyonlari', title: 'Hizmet ve Saha Operasyonları',   desc: '' },
        { href: '#/kullanim-alanlari/sektorlere-gore/perakende-ve-dagitim', title: 'Perakende ve Dağıtım',           desc: '' },
        { href: '#/kullanim-alanlari/sektorlere-gore/kamu-ve-yerel-yonetimler', title: 'Kamu ve Yerel Yönetimler',       desc: '' },
        { href: '#/kullanim-alanlari/sektorlere-gore/kurumsal-hizmetler', title: 'Kurumsal Hizmetler',             desc: '' },
        { href: '#/kullanim-alanlari/sektorlere-gore/kobi-ve-buyuyen-isletmeler', title: 'KOBİ ve Büyüyen İşletmeler',    desc: '' },
      ]},
      { label: 'İşletme Ölçeğine Göre', items: [
        { href: '#', title: 'Mikro İşletme / Girişim',           desc: '' },
        { href: '#', title: 'Küçük İşletme / KOBİ',             desc: '' },
        { href: '#', title: 'Orta Ölçekli İşletme',             desc: '' },
        { href: '#/kullanim-alanlari/isletme-olcegine-gore/buyuk-kurumsal-grup-sirketleri', title: 'Büyük Kurumsal / Grup Şirketleri', desc: '' },
      ]},
      { label: 'Kullanım Senaryoları', items: [
        { href: '#', title: 'Talep Karşılama',         desc: '' },
        { href: '#', title: 'Teklif Hazırlama',        desc: '' },
        { href: '#', title: 'İş Emri ve Operasyon',    desc: '' },
        { href: '#', title: 'Toplantıdan Göreve',      desc: '' },
        { href: '#', title: 'Saha Bildirimi',          desc: '' },
        { href: '#', title: 'Müşteri Geri Bildirim',   desc: '' },
        { href: '#', title: 'Onay ve SLA Takibi',      desc: '' },
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
    ['#/platform/chief-nedir',                   'Chief Nedir?'],
    ['#/platform/chief-nasil-calisir',           'Chief Nasıl Çalışır?'],
    ['#/platform/akilli-isletme-katmani',        'Akıllı İşletme Katmanı'],
    ['#/platform/yonetim-paneli-ve-dashboard',   'Yönetim Paneli'],
    ['#/platform/guvenlik-ve-veri-yaklasimi',    'Güvenlik ve Veri'],
  ]],
  'fc-kullanim-alanlari': ['Kullanım Alanları', [
    ['#/kullanim-alanlari/is-sureclerine-gore',      'İş Süreçlerine Göre'],
    ['#/kullanim-alanlari/sektorlere-gore',           'Sektörlere Göre'],
    ['#/kullanim-alanlari/isletme-olcegine-gore',     'İşletme Ölçeğine Göre'],
    ['#/kullanim-alanlari/kullanim-senaryolari',      'Kullanım Senaryoları'],
    ['#/fiyatlandirma',                               'Fiyatlandırma'],
  ]],
  'fc-entegrasyonlar': ['Entegrasyonlar', [
    ['#/entegrasyonlar',                              'Tüm Entegrasyonlar'],
    ['#/entegrasyonlar/erp',                          'ERP'],
    ['#/entegrasyonlar/crm',                          'CRM'],
    ['#/entegrasyonlar/e-posta-ve-whatsapp',          'E-posta ve WhatsApp'],
    ['#/entegrasyonlar/api-ve-veri-tabani',           'API ve Veri Tabanı'],
  ]],
  'fc-sirket': ['Şirket', [
    ['#/partnerlik',                              'Partnerlik'],
    ['#/demo-talep-et',                           'Demo Talep Et'],
    ['https://app.chiefai.com.tr',                'Giriş'],
    ['#/kaynaklar',                               'Kaynaklar'],
    ['#/hakkimizda',                              'Hakkımızda'],
  ]],
  'fc-yasal': ['Yasal', [
    ['#/platform/guvenlik-ve-veri-yaklasimi',     'Güvenlik'],
    ['#/kaynaklar',                               'KVKK'],
    ['#/kaynaklar',                               'Gizlilik Politikası'],
    ['#/kaynaklar',                               'Çerez Politikası'],
    ['mailto:info@chiefai.com.tr',               'İletişim'],
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
  const colClass = m.cols.length >= 4 ? 'mega-4col' : 'mega-2col';
  return '<div class="mega" data-mega-panel="' + key + '">' +
    '<div class="mega-inner ' + colClass + '">' +
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
    '<button class="m-nav-btn" data-panel="kullanim-alanlari">Kullanım Alanları <span class="m-chev">›</span></button>' +
    '<a class="m-flat" href="#/entegrasyonlar">Entegrasyonlar</a>' +
    '<a class="m-flat" href="#/fiyatlandirma">Fiyatlandırma</a>' +
    '<a class="m-flat" href="#/kaynaklar">Kaynaklar</a>' +
    '<a class="m-flat" href="#/partnerlik">Partnerlik</a>' +
    '<div style="margin-top:22px;display:flex;flex-direction:column;gap:10px">' +
    '<a href="https://app.chiefai.com.tr" class="btn btn-ghost btn-lg" style="width:100%;justify-content:center">Giriş</a>' +
    '<a href="#/demo-talep-et" class="btn btn-clay btn-lg" style="width:100%;justify-content:center">Demo Talep Et</a>' +
    '</div>';
}

function _drawerPanel(key) {
  const m = MEGA[key];
  const label = key === 'platform' ? 'Platform' : 'Kullanım Alanları';
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

  if      (sec === 'platform'      && slug) {
    var pSlug = slug;
    if (slug === 'ai-surec-orkestrasyonu') pSlug = 'ai-ajanlar-ve-gorev-yonetimi';
    if (slug === 'karar-destek-guvenlik-ogrenme') pSlug = 'guvenlik-ve-veri-yaklasimi';
    html = PLATFORM_V2_DATA[pSlug] ? renderPlatformV2Page(pSlug) : renderPlatformPage(pSlug);
    label = 'Platform';
  }
  else if (sec === 'platform')              { html = renderPlatformV2Listing();    label = 'Platform'; }
  else if (sec === 'kullanim-alanlari') {
    var subSec = parts[1], subSlug = parts[2];
    if (subSec === 'is-sureclerine-gore' && subSlug) { html = renderIsSureciPage(_kuSlug(subSlug)); label = 'İş Süreçlerine Göre'; }
    else if (subSec === 'is-sureclerine-gore')        { html = renderIsSureciListing();              label = 'İş Süreçlerine Göre'; }
    else if (subSec === 'sektorlere-gore' && subSlug) {
      html = SEKTORLER_V2_DATA[subSlug] ? renderSektorlerV2Page(subSlug) : renderSektorlerPage(subSlug);
      label = 'Sektörlere Göre';
    }
    else if (subSec === 'sektorlere-gore')             { html = renderSektorlerV2Listing();          label = 'Sektörlere Göre'; }
    else if (subSec === 'isletme-olcegine-gore' && subSlug) {
      html = ISLETME_OLCEGI_DATA[subSlug] ? renderIsletmeOlcegiPage(subSlug) : _stub('İşletme Ölçeğine Göre', subSlug);
      label = 'İşletme Ölçeğine Göre';
    }
    else if (subSec === 'isletme-olcegine-gore') { html = renderIsletmeOlcegiListing(); label = 'İşletme Ölçeğine Göre'; }
    else if (subSec === 'kullanim-senaryolari' && subSlug) {
      html = KULLANIM_SENARYOLARI_DATA[subSlug] ? renderKullanimSenaryoPage(subSlug) : _stub('Kullanım Senaryoları', subSlug);
      label = 'Kullanım Senaryoları';
    }
    else if (subSec === 'kullanim-senaryolari') { html = renderKullanimSenaryolariListing(); label = 'Kullanım Senaryoları'; }
    else                                               { html = renderKullanimAlanlariListing();     label = 'Kullanım Alanları'; }
  }
  else if (sec === 'is-surecleri'  && slug) { html = renderIsSureciPage(slug);     label = 'İş Süreçleri'; }
  else if (sec === 'is-surecleri')          { html = renderIsSureciListing();      label = 'İş Süreçleri'; }
  else if (sec === 'partnerlik')            { html = renderPartnerler();           label = 'Partner Ağı'; }
  else if (sec === 'cozumler'      && slug) { html = renderCozumlerPage(slug);     label = 'Çözümler'; }
  else if (sec === 'cozumler')              { html = renderCozumlerListing();      label = 'Çözümler'; }
  else if (sec === 'sektorler'     && slug) { html = renderSektorlerPage(slug);    label = 'Sektörler'; }
  else if (sec === 'sektorler')             { html = renderSektorlerListing();     label = 'Sektörler'; }
  else if (sec === 'entegrasyonlar')       { html = renderEntegrasyonlar();    label = 'Entegrasyonlar'; }
  else if (sec === 'fiyatlandirma')        { html = renderFiyatlandirma();     label = 'Fiyatlandırma'; }
  else if (sec === 'guvenlik')             { html = renderGuvenlik();          label = 'Güvenlik'; }
  else if (sec === 'partnerler')           { html = renderPartnerler();        label = 'Partner Ağı'; }
  else if (sec === 'kaynaklar')             { html = renderKaynaklar();         label = 'Kaynaklar'; }
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

  // Hero — sol: metin, sağ: müşteri kartı
  h += '<section class="detail-hero"><div class="container">' +
    crumb([parentLabel, parentHref], [data.h1]) +
    '<div class="hero-split" style="display:grid;grid-template-columns:1.1fr 1fr;gap:48px 56px;align-items:start">' +
    '<div class="hero-split-left">' +
    '<span class="eyebrow">' + esc(data.eyebrow) + '</span>' +
    '<h1 style="margin-top:16px">' + esc(data.h1) + '</h1>' +
    '<p class="lead">' + esc(data.lead) + '</p>';
  if (sc) {
    h += '<blockquote class="rp-scenario" style="margin-top:20px">' + esc(sc.text) +
      '<cite>' + esc(sc.cite) + '</cite></blockquote>';
  }
  h += '</div>' +
    '<div class="hero-split-right">' +
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
    '</div></div>' +
    '</div>' +
    '</div>' +
    '</div></section>';

  // 3 temel nokta
  h += '<section><div class="container">' +
    '<div class="rich-points">' +
    data.benefits.map(function(b, n) {
      return '<div class="rp-item">' +
        '<div class="rp-icon ' + (n===1?'sage':n===2?'blue':'') + '">' + ico(b.icon, 22) + '</div>' +
        '<div><h3>' + esc(b.title) + '</h3><p>' + esc(b.body) + '</p></div>' +
        '</div>';
    }).join('') +
    '</div></div></section>';

  // SSS
  h += '<section><div class="container narrow">' +
    '<div class="section-head"><span class="eyebrow">SSS</span></div>' +
    data.faq.map(function(f) {
      return '<details class="faq-item"><summary>' + esc(f[0]) + '</summary><p>' + esc(f[1]) + '</p></details>';
    }).join('') +
    '</div></section>';

  return h;
}

/* ================================================================
   PLATFORM V2 — VERİ + RENDER  (doküman birebir)
   ================================================================ */
const PLATFORM_V2_DATA = {

  'chief-nedir': {
    eyebrow: 'Platform',
    cardTitle: 'Chief Nedir?',
    cardDesc: 'Chief\'in işletme içinde nasıl konumlandığını, hangi problemi çözdüğünü ve neden mevcut sistemlerin üzerinde çalışan akıllı işletme katmanı olduğunu anlatır.',
    h1: 'Chief Nedir?',
    lead: 'Chief, mevcut ERP, CRM, muhasebe, saha, üretim, IoT, doküman ve iletişim sistemlerinin yerine geçmez. Bu sistemlerin üzerinde çalışan AI tabanlı akıllı işletme katmanı olarak bilgiyi sorumluluk, karar, aksiyon, kapanış kriteri ve yönetim görünürlüğüyle ilişkilendirir.',
    bolumler: [
      { baslik: 'Bir araç değil, işletme katmanı', metin: 'Chief, tekil bir uygulama veya otomasyon aracı değildir. İşletmede farklı sistemlerde, ekiplerde ve kanallarda dağılmış bilgileri süreç, görev, aksiyon ve yönetim görünürlüğüne dönüştüren kurumsal AI tabanlı işletme katmanıdır.\nChief mevcut sistemlerin yerine geçmez. ERP, CRM, telefon çağrısı, doküman, saha uygulamaları ve iletişim kanallarının üzerinde çalışan akıllı bir operasyon ve karar katmanı oluşturur.' },
      { baslik: 'Hangi problemi çözüyor?', metin: 'İşletmelerde önemli bilgiler çoğu zaman kaybolur. E-postada kalan teklif, WhatsApp\'ta kalan iş emri, toplantı notunda kalan karar... Chief bu dağınık sinyalleri tek bir akışa alır; her birini sorumlu, öncelik, süreç ve kapanış kriteriyle ilişkilendirir.\nBöylece işletme içinde oluşan her talep, kayıt, görüşme, teklif, iş emri veya geri bildirim yalnızca bilgi olarak kalmaz; takip edilebilir bir sürece dönüşür.' },
      { baslik: 'ERP ve CRM\'in yerine geçmiyor', metin: 'Chief, mevcut sistemleri değiştirmez. ERP finansal ve operasyonel kayıtları tutmaya, CRM müşteri ilişkilerini izlemeye devam eder. Chief bu verileri okur ama değiştirmez.\nAsıl işi, bu kayıtları birbirine bağlayan süreç ve karar katmanını oluşturmaktır: Hangi kayıt aksiyon gerektiriyor? Hangi teklif onayda bekledi? Hangi saha işi kapanmadı? Hangi yönetici karar vermeli?' },
      { baslik: 'Kim için?', metin: 'Chief; birden fazla sistemi olan, ekipler arası koordinasyonu yönetmesi gereken ve yönetim görünürlüğüne ihtiyaç duyan işletmeler için tasarlanmıştır. Mikro girişimden büyük kurumsal yapılara kadar, süreç karmaşıklığı olan her organizasyonda değer üretir.' },
    ],
    caseStudy: {
      logo:'logo-tak.png', company:'TAK-Umwelt GmbH', industry:'Çevre Teknolojisi · Almanya',
      quote:'"Servis talepleri telefon, e-posta ve portaldan aynı anda geliyordu. Her birini manuel takibe almak ekibe büyük yük bindiriyordu. Chief ile hiçbir talep kaybolmuyor, her iş emrinin durumu gerçek zamanlı görünüyor, kapanış belgesi otomatik oluşuyor."',
      results:[{n:'-%65',l:'Manuel veri girişi'},{n:'%100',l:'Talep takip görünürlüğü'},{n:'3 hafta',l:'Devreye alma süresi'},{n:'0',l:'Kayıp talep'}],
    },
  },
  'akilli-isletme-katmani': {
    eyebrow: 'Platform',
    cardTitle: 'Akıllı İşletme Katmanı',
    cardDesc: 'ERP/CRM yerine geçmeyen, sistemler arasında anlam, görev, süreç ve yönetim görünürlüğü kuran yapıyı anlatır.',
    h1: 'Akıllı İşletme Katmanı',
    lead: 'Chief, mevcut sistemlerin üzerinde çalışan; iş sinyallerini anlayan, süreçlere bağlayan, görev ve kararlara dönüştüren ve yönetim görünürlüğü sağlayan AI tabanlı akıllı katmandır.',
    bolumler: [
      { baslik: 'Katman nedir?', metin: 'Kurumsal altyapıda "katman", mevcut sistemleri değiştirmeden onların üzerinde çalışan, aralarında anlam ve süreç bağlantısı kuran yapı anlamına gelir. ERP verilerini okur, CRM kayıtlarını anlar, iletişim kanallarını sürece bağlar; ancak hiçbirinin işlevini tekrar etmez.' },
      { baslik: 'Neden akıllı?', metin: 'Chief gelen bilgiyi yalnızca depolamaz. Talebin niyetini, aciliyetini, ilgili süreci ve eksik bilgileri analiz eder. Ardından iş kurallarına göre görev oluşturur, sorumlu atar, onay zinciri kurar ve sonucu izler. Bu döngü her işlemde tekrarlanır; her döngüden öğrenir.' },
      { baslik: 'ERP/CRM\'in üstünde nasıl çalışır?', metin: 'ERP finansal ve operasyonel kayıtları tutarken, CRM müşteri ilişkilerini izler. Chief bu verileri okur ama değiştirmez. Asıl işi, bu kayıtları birbirine bağlayan süreç ve karar katmanını oluşturmaktır.\nHangi kayıt aksiyon gerektiriyor? Hangi teklif onayda kaldı? Hangi saha işi kapanmadı? Hangi süreçte eksik bilgi var? Hangi yönetici karar vermeli?' },
      { baslik: 'Yönetim görünürlüğü nasıl sağlanır?', metin: 'Chief, işlerin ve kararların ilerleyişini yönetim ekranlarında gerçek zamanlı görünür kılar. Gecikme, risk, SLA aşımı ve onay bekleyen konular aksiyon seviyesinde raporlanır. Yönetici gerektiğinde ilgili işe, göreve veya sürece inebilir.' },
    ],
    caseStudy: {
      logo:'logo-termoinduktion.jpg', company:'Termo İndüksiyon', industry:'Endüstriyel Isıl İşlem · 1981\'den beri',
      quote:'"Satış ekibimizin ziyaret notları farklı kişisel dosyalara dağılmış, doğru veriye anında ulaşmak güçleşmişti. Chief ile tüm satış hattı, toplantı çıktıları ve teklif süreçleri tek ekranda görünür. Artık müdür sahadan dönen temsilciyi arayıp sormak zorunda değil."',
      results:[{n:'%98',l:'Ziyaret notu kayıt oranı'},{n:'7/24',l:'Satış hattı görünürlüğü'},{n:'-%40',l:'Raporlama hazırlık süresi'},{n:'1 ekran',l:'Tüm operasyon'}],
    },
  },
  'yonetim-paneli-ve-dashboard': {
    eyebrow: 'Platform',
    cardTitle: 'Yönetim Paneli ve Dashboard',
    cardDesc: 'Hem riskleri hem pozitif operasyonel ilerlemeyi görünür hale getiren yönetim ekranını anlatır.',
    h1: 'Yönetim Paneli ve Dashboard',
    lead: 'Chief yönetim ekranı, yalnızca gecikme ve riski değil; tamamlanan işleri, kapatılan süreçleri ve ilerleyen operasyonu da gerçek zamanlı görünür kılar.',
    bolumler: [
      { baslik: 'Rapor değil, aksiyon ekranı', metin: 'Geleneksel raporlar geç gelir, statiktir ve kararı geciktirir. Chief\'in yönetim paneli gerçek zamanlıdır; hangi işlerin açık olduğunu, hangilerinin geciktiğini, kimin sorumlu olduğunu ve hangi adımın beklediğini anlık gösterir.\nBu görünürlük yalnızca rapor seviyesinde değil, aksiyon seviyesindedir. Yönetici gerektiğinde ilgili işe, göreve, onaya veya sürece inebilir.' },
      { baslik: 'Pozitif ilerleme de görünür', metin: 'Chief yönetim ekranı yalnızca alarm ve riski değil, tamamlanan işleri, kapatılan süreci ve operasyonel ilerlemeyi de gösterir. İşlenen sinyal sayısı, tamamlanan görev, kapanan süreç ve karşılanan SLA hedefleri operasyonun sağlıklı yürüdüğünü doğrular.' },
      { baslik: 'Departman ve süreç bazlı görünüm', metin: 'Satış, operasyon, saha, üretim, finans — her ekip kendi alanını görür. Yönetim ise tüm tabloyu görür. Rol ve yetki bazlı erişim sayesinde herkes kendi ekranına sahip olur; kimse erişmemesi gereken veriye ulaşamaz.' },
      { baslik: 'Özetle başla, detaya in', metin: 'Yönetim özet seviyesinde başlar: kaç iş açık, kaçı SLA riski taşıyor, kaçı gecikiyor. İlgili bir konuya tıklar; göreve, sürece veya onay zincirine iner. Haftalık yönetim brifingi otomatik hazırlanır.' },
    ],
    caseStudy: {
      logo:'logo-termoinduktion.jpg', company:'Termo İndüksiyon', industry:'Endüstriyel Isıl İşlem · 1981\'den beri',
      quote:'"Pazartesi toplantısına her hafta veri toplamak için Cuma günü başlardık. Chief ile o toplantı hazırlığı tamamen ortadan kalktı. Pazar gecesi özet geliyor, Pazartesi toplantısı 12 dakika sürüyor."',
      results:[{n:'-%80',l:'Rapor hazırlama süresi'},{n:'12 dk',l:'Ort. yönetim toplantısı'},{n:'7/24',l:'Gerçek zamanlı KPI erişimi'},{n:'3 gün',l:'Risk öncesi uyarı süresi'}],
    },
  },
  'rol-bazli-yetkilendirme': {
    eyebrow: 'Platform',
    cardTitle: 'Rol Bazlı Yetkilendirme',
    cardDesc: 'Kullanıcıların rol, departman, lokasyon, müşteri ve süreç kapsamına göre erişimini açıklar.',
    h1: 'Rol Bazlı Yetkilendirme',
    lead: 'Chief\'te her kullanıcı yalnızca yetkili olduğu bilgi ve aksiyonlara erişir. Departman, rol, lokasyon, müşteri ve süreç kapsamına göre tanımlanan granüler erişim yapısıyla veri güvenliği ve operasyonel uyum birlikte korunur.',
    bolumler: [
      { baslik: 'Her kullanıcı kendi alanını görür', metin: 'Saha teknisyeni kendi bölgesinin iş emirlerini görür; satış temsilcisi kendi müşterilerinin tekliflerini; yönetici tüm departmanların tablosunu görür. Kimse erişmemesi gereken veriye ulaşamaz.\nBu yapı özellikle kurumsal işletmeler, kamu kurumları ve veri hassasiyeti yüksek organizasyonlar için kritik önem taşır.' },
      { baslik: 'Erişim tanımlama esnekliği', metin: 'Departman, rol, lokasyon, müşteri segmenti, ürün grubu veya süreç alanına göre erişim kurgulanabilir. Bir kullanıcı birden fazla rolde olabilir; her rolün alanı ayrı tanımlanır. Değişiklikler kurulum sırasında ve sonrasında güncellenebilir.' },
      { baslik: 'Denetim izi', metin: 'Her erişim, işlem ve değişiklik kayıt altına alınır. Kim, ne zaman, hangi veriye erişti, hangi kararı verdi — değiştirilemez denetim izi olarak saklanır. Denetim için hazır, yasal uyum belgesi olarak kullanılabilir.' },
      { baslik: 'SSO ve kurumsal kimlik yönetimi', metin: 'Azure AD, Okta ve SAML 2.0 ile SSO entegrasyonu desteklenir. Şirket içi kimlik yönetim sistemleriyle senkronize edilebilir; kullanıcı eklemek ve çıkarmak merkezi yönetimden yapılır.' },
    ],
    caseStudy: {
      logo:'logo-tak.png', company:'TAK-Umwelt GmbH', industry:'Çevre Teknolojisi · Almanya',
      quote:'"Almanya operasyonumuz için GDPR uyumluluğu kritikti. Chief\'in on-prem kurulumu ve veri izolasyonu, hukuk biriminin onayını ilk görüşmede aldı. Mevcut ERP projemize dokunmadan Chief\'i 3 haftada devreye aldık."',
      results:[{n:'GDPR',l:'Almanya operasyonu onaylı'},{n:'%100',l:'On-prem veri izolasyonu'},{n:'3 hafta',l:'Devreye alma süresi'},{n:'0',l:'Sistem değişikliği'}],
    },
  },
  'chief-nasil-calisir': {
    eyebrow: 'Platform',
    cardTitle: 'Chief Nasıl Çalışır?',
    cardDesc: 'Chief, dağınık iş bilgisini yakalar, anlar, ilgili veriyle bağlar, göreve dönüştürür ve sonucu öğrenerek süreci iyileştirir.',
    h1: 'Chief Nasıl Çalışır?',
    lead: 'Chief, işletme içinde farklı kanallardan gelen bilgi ve talepleri yalnızca kaydetmez; onları anlar, sınıflandırır, mevcut verilerle ilişkilendirir ve yönetilebilir aksiyonlara dönüştürür. Chief\'in temel yaklaşımı beş adımdan oluşur: Yakala. Anla. Bağla. Yürüt. Öğren.',
    bolumler: [
      { baslik: 'Yakala: Dağınık sinyalleri tek akışta topla', metin: 'İşletmelerde önemli bilgiler çoğu zaman farklı yerlerde oluşur: toplantı notlarında, e-postalarda, WhatsApp mesajlarında, web formlarında, çağrı özetlerinde, saha formlarında, ERP/CRM kayıtlarında veya müşteri geri bildirimlerinde.\nChief bu sinyalleri tek bir operasyon akışına alır. Böylece kritik bilgiler kişisel hafızada, dağınık mesajlarda veya takip edilmeyen dosyalarda kaybolmaz.' },
      { baslik: 'Anla: Talebin niyetini ve bağlamını çıkar', metin: 'Chief gelen bilgiyi yalnızca metin olarak görmez. Talebin neyle ilgili olduğunu, hangi müşteri veya lokasyona bağlı olduğunu, hangi süreci etkilediğini ve ne kadar acil olduğunu anlamaya çalışır.\nÖrneğin bir müşteri mesajı teklif talebi, servis ihtiyacı, şikayet, satın alma isteği veya finansal onay gerektiren bir konu olabilir. Chief bu ayrımı yaparak işin doğru akışa girmesini sağlar.' },
      { baslik: 'Bağla: Veriyi müşteri, iş, ekip ve süreçle ilişkilendir', metin: 'Bir talebin doğru yönetilebilmesi için yalnızca metin yeterli değildir. Chief talebi ilgili müşteri, lokasyon, ürün, teklif, sözleşme, iş emri, ekip, belge veya geçmiş kayıtlarla bağlar.\nBu sayede ekipler aynı konuya farklı yerlerden bakmak yerine ortak bir iş nesnesi üzerinden çalışır.' },
      { baslik: 'Yürüt: Göreve, onaya ve takip edilebilir sürece dönüştür', metin: 'Chief\'in asıl değeri bilgiyi aksiyona çevirmesidir. Gelen bir talep; görev, onay, teklif hazırlığı, saha planı, servis kaydı, üretim adımı veya yönetim kararı olarak ilerleyebilir.\nHer iş için sorumlu, öncelik, SLA, kapanış kriteri ve takip durumu tanımlanır.' },
      { baslik: 'Öğren: Sonuçlardan süreç içgörüsü üret', metin: 'Chief tamamlanan işlerden öğrenir. Hangi talepler gecikiyor, hangi ekiplerde yoğunluk oluşuyor, hangi müşterilerde risk artıyor, hangi süreçlerde eksik bilgi sık tekrar ediyor gibi konular yönetim için görünür hale gelir.\nBu öğrenme döngüsü Chief\'i yalnızca görev takip aracı değil, işletmenin karar destek katmanı haline getirir.' },
    ],
    caseStudy: {
      logo:'logo-tak.png', company:'TAK-Umwelt GmbH', industry:'Çevre Teknolojisi · Almanya',
      quote:'"Servis talepleri telefon, e-posta ve portaldan aynı anda geliyordu. Her birini manuel takibe almak ekibe büyük yük bindiriyordu. Chief ile hiçbir talep kaybolmuyor, her iş emrinin durumu gerçek zamanlı görünüyor, kapanış belgesi otomatik oluşuyor."',
      results:[{n:'-%65',l:'Manuel veri girişi'},{n:'%100',l:'Talep takip görünürlüğü'},{n:'3 hafta',l:'Devreye alma süresi'},{n:'0',l:'Kayıp talep'}],
    },
  },
  'sinyalden-aksiyona': {
    eyebrow: 'Platform',
    cardTitle: 'Sinyalden Aksiyona',
    cardDesc: 'Toplantı notu, e-posta, WhatsApp, web formu, ERP kaydı veya saha bildirimi Chief içinde takip edilebilir aksiyona dönüşür.',
    h1: 'Sinyalden Aksiyona',
    lead: 'Chief, işletmede oluşan her önemli sinyali takip edilebilir bir iş akışına dönüştürür. Böylece bilgi kaybolmaz, sorumluluk belirsiz kalmaz ve yönetim hangi işin nerede beklediğini görebilir.',
    bolumler: [
      { baslik: 'Sinyal nedir?', metin: 'Chief için sinyal, işletmede aksiyon gerektirebilecek her türlü bilgidir.\nBu sinyal bir müşteri talebi, toplantı notu, satış fırsatı, saha bildirimi, üretim problemi, servis ihtiyacı, fiyat onayı, stok uyarısı, ödeme riski veya çalışan geri bildirimi olabilir.' },
      { baslik: 'Chief sinyali nasıl işler?', metin: 'Chief gelen sinyali önce sınıflandırır. Ardından bu sinyalin hangi süreçle, müşteriyle, lokasyonla, ürünle, ekip ile veya mevcut kayıtla ilişkili olduğunu belirler.\nEksik bilgi varsa tamamlanması gereken alanları çıkarır. Gerekiyorsa kullanıcıya doğal diyalogla soru sorar veya ilgili sistemlerden bilgi çeker.' },
      { baslik: 'Sinyal nasıl aksiyona dönüşür?', metin: 'Chief sinyali uygun iş akışına yönlendirir. Bu akış bir teklif hazırlığı, görev atama, saha operasyonu, onay süreci, finans kontrolü, servis kaydı veya yönetim uyarısı olabilir.\nHer aksiyon izlenebilir hale gelir: kim sorumlu, ne zaman tamamlanmalı, hangi bilgi eksik, hangi onay gerekiyor ve kapanış nasıl yapılacak?' },
      { baslik: 'Yönetim ne kazanır?', metin: 'Yönetim yalnızca rapor görmekle kalmaz; hangi sinyallerin aksiyona dönüştüğünü, hangilerinin beklediğini, nerede darboğaz oluştuğunu ve hangi konuların risk yarattığını görebilir.\nChief bu nedenle işletmeye yalnızca görünürlük değil, aksiyon disiplini kazandırır.' },
    ],
    caseStudy: {
      logo:'logo-ikon.png', company:'İkon Araştırma', industry:'Pazar Araştırması & Danışmanlık',
      quote:'"Saha ekibinin anket süreçleri, proje ilerlemeleri ve verilen tekliflerin takibi e-posta ve WhatsApp karmaşasındaydı. Chief ile saha koordinasyonu ve teklif yönetimi tek platforma taşındı; artık hangi sinyalin aksiyona döndüğünü anlık görüyoruz."',
      results:[{n:'7/24',l:'Saha ekibi görünürlüğü'},{n:'%100',l:'Teklif takip oranı'},{n:'-%55',l:'Koordinasyon e-postası'},{n:'2 hafta',l:'Devreye alma süresi'}],
    },
  },
  'mevcut-sistemlerle-calisir': {
    eyebrow: 'Platform',
    cardTitle: 'Mevcut Sistemlerle Çalışır',
    cardDesc: 'Chief mevcut ERP, CRM, doküman, iletişim ve saha sistemlerinin üzerinde çalışır; sistemleri değiştirmeden akıllı süreç katmanı oluşturur.',
    h1: 'Mevcut Sistemlerle Çalışır',
    lead: 'Chief, işletmenin mevcut ERP, CRM, doküman, iletişim, saha ve veri sistemlerinin yerine geçmez. Bu sistemlerin üzerinde çalışan akıllı bir süreç ve karar katmanı oluşturur.',
    bolumler: [
      { baslik: 'Sistemleri değiştirmeden değer üretir', metin: 'Birçok işletmede veri zaten vardır; fakat bu veri farklı sistemlerde, farklı formatlarda ve farklı ekiplerin kullanımındadır. Chief bu dağınık yapıyı değiştirmeden, sistemler arasında anlam ve süreç bağlantısı kurar.\nERP finansal ve operasyonel kayıtları tutarken, CRM müşteri ilişkilerini izler, e-posta ve WhatsApp iletişimi taşır, saha formları operasyon bilgisini üretir. Chief bu kaynakları iş akışı içinde anlamlandırır.' },
      { baslik: 'ERP/CRM üzerinde operasyon katmanı', metin: 'Chief, ERP veya CRM\'in yaptığı işi tekrar etmez. Onların üzerinde çalışarak şu sorulara cevap verir:', liste: ['Hangi kayıt aksiyon gerektiriyor?','Hangi müşteri talebi bekliyor?','Hangi teklif onayda kaldı?','Hangi saha işi kapanmadı?','Hangi süreçte eksik bilgi var?','Hangi yönetici karar vermeli?'] },
      { baslik: 'İletişim kanalları sürece bağlanır', metin: 'Toplantı notları, e-postalar, WhatsApp mesajları, çağrı özetleri ve web formları çoğu zaman operasyonel sistemlere tam olarak yansımaz. Chief bu iletişimleri süreçlerle bağlayarak kişisel takip yükünü azaltır.' },
      { baslik: 'Entegrasyon değil, işletme aklı', metin: 'Chief\'in farkı yalnızca teknik entegrasyon değildir. Asıl değer, farklı sistemlerden gelen bilgileri işletmenin süreç mantığına göre yorumlaması ve aksiyona çevirmesidir.' },
    ],
    caseStudy: {
      logo:'logo-tak.png', company:'TAK-Umwelt GmbH', industry:'Çevre Teknolojisi · Almanya',
      quote:'"Almanya operasyonumuz için GDPR uyumluluğu kritikti. Chief\'in on-prem kurulumu ve veri izolasyonu, hukuk biriminin onayını ilk görüşmede aldı. Mevcut ERP projemize dokunmadan Chief\'i 3 haftada devreye aldık."',
      results:[{n:'GDPR',l:'Almanya operasyonu onaylı'},{n:'%100',l:'On-prem veri izolasyonu'},{n:'3 hafta',l:'Devreye alma süresi'},{n:'0',l:'Sistem değişikliği'}],
    },
  },
  'is-nesnesi-ve-veri-katmani': {
    eyebrow: 'Platform',
    cardTitle: 'İş Nesnesi ve Veri Katmanı',
    cardDesc: 'Müşteri, lokasyon, teklif, iş emri, görev, ekip, belge ve finansal kayıtlar Chief içinde ortak bir iş modeliyle bağlanır.',
    h1: 'İş Nesnesi ve Veri Katmanı',
    lead: 'Chief, işletmedeki müşteri, lokasyon, teklif, iş emri, görev, ekip, belge ve finansal kayıtları ortak bir iş modeliyle birbirine bağlar.',
    bolumler: [
      { baslik: 'İşletmenin ortak dili', metin: 'Her departman aynı işe farklı açıdan bakar. Satış için müşteri fırsatı olan konu, operasyon için iş emri, finans için tahsilat riski, yönetim için performans göstergesi olabilir.\nChief bu farklı bakışları ortak iş nesneleri üzerinden birleştirir.' },
      { baslik: 'İş nesnesi nedir?', metin: 'Chief içinde iş nesnesi; takip edilmesi, yönetilmesi veya karar verilmesi gereken temel kayıttır.\nBu bir müşteri, lokasyon, teklif, iş emri, proje, servis kaydı, görev, onay, sözleşme, ürün, makine, ekip veya saha noktası olabilir.' },
      { baslik: 'Veri süreçle bağlanır', metin: 'Chief için veri yalnızca raporlama girdisi değildir. Veri, sürecin bağlamıdır.\nBir teklifin hangi müşteriye bağlı olduğu, hangi lokasyonda uygulanacağı, hangi ekip tarafından yürütüleceği, hangi belgeleri gerektirdiği ve hangi finansal koşullara bağlı olduğu Chief içinde birlikte değerlendirilir.' },
      { baslik: 'Tekil görünürlük', metin: 'Bu yapı sayesinde işletme aynı konu için farklı dosya, mesaj ve sistemlerde arama yapmak zorunda kalmaz. Chief ilgili işin geçmişini, açık görevlerini, bekleyen onaylarını, belgelerini ve risklerini tek görünümde sunar.' },
    ],
    caseStudy: {
      logo:'logo-termoinduktion.jpg', company:'Termo İndüksiyon', industry:'Endüstriyel Isıl İşlem · 1981\'den beri',
      quote:'"Satış ekibimizin ziyaret notları farklı kişisel dosyalara dağılmış, doğru veriye anında ulaşmak güçleşmişti. Chief ile tüm satış hattı, toplantı çıktıları ve teklif süreçleri tek ekranda görünür."',
      results:[{n:'%98',l:'Ziyaret notu kayıt oranı'},{n:'7/24',l:'Satış hattı görünürlüğü'},{n:'-%40',l:'Raporlama hazırlık süresi'},{n:'1 ekran',l:'Tüm operasyon'}],
    },
  },
  'ai-ajanlar-ve-gorev-yonetimi': {
    eyebrow: 'Platform · AI Tabanlı',
    cardTitle: 'AI Ajanlar ve Görev Yönetimi',
    cardDesc: 'Chief\'in AI ajanları talebi sınıflandırır, eksik bilgiyi bulur, öneri üretir ve süreci ilgili ekip veya onay noktasına yönlendirir.',
    h1: 'AI Ajanlar ve Görev Yönetimi',
    lead: 'Chief\'in AI ajanları işletme süreçlerini uçtan uca anlamak, yönlendirmek ve takip etmek için birlikte çalışır. AI önerir, sınıflandırır ve hazırlar; kritik kararlarda kontrol insanda kalır.',
    bolumler: [
      { baslik: 'Tek chatbot değil, çoklu ajan yapısı', metin: 'Chief yalnızca soru cevap veren bir yapay zeka ekranı değildir. Farklı görevleri üstlenen ajanlardan oluşan bir süreç orkestrasyon katmanıdır.\nBazı ajanlar gelen talebi sınıflandırır, bazıları eksik bilgiyi tespit eder, bazıları ilgili veriyle eşleştirir, bazıları görev veya onay önerir, bazıları da yönetim için özet ve içgörü üretir.' },
      { baslik: 'Eksik bilgi tamamlanır', metin: 'Bir işin ilerlemesini en çok geciktiren konulardan biri eksik bilgidir. Chief talebin tamamlanması için gereken bilgileri kontrol eder.\nEksik müşteri bilgisi, lokasyon, ürün detayı, fiyat parametresi, tarih, dosya, teknik detay veya onay bilgisi varsa bunu görünür hale getirir.' },
      { baslik: 'AI önerir, insan karar verir', metin: 'Chief\'in yaklaşımı otomatik karar vermek değil, karar kalitesini artırmaktır. AI süreçleri hızlandırır, alternatifleri gösterir, riskleri işaretler ve öneri üretir.\nAncak fiyat onayı, kritik müşteri kararı, finansal kabul, operasyonel öncelik veya yönetim kararı gibi noktalarda insan kontrolü korunur.' },
      { baslik: 'Süreçler koordine edilir', metin: 'Chief farklı ekipler ve sistemler arasında işin ilerlemesini takip eder. Satış, operasyon, saha, üretim, finans ve yönetim aynı akış üzerinde çalışabilir.\nBöylece AI yalnızca bilgi veren bir araç değil, işletmenin süreç koordinasyon katmanı haline gelir.' },
    ],
    caseStudy: {
      logo:'logo-ikon.png', company:'İkon Araştırma', industry:'Pazar Araştırması & Danışmanlık',
      quote:'"Chief\'in AI katmanı saha ekibinin verdiği açık uçlu notları yapılandırıyor, proje aksiyonlarını otomatik çıkarıyor ve teklif sürecindeki eksik bilgileri tespit ediyor. Koordinasyon e-postası yüzde elli beş azaldı, her öneri gerekçesiyle geliyor."',
      results:[{n:'-%55',l:'Koordinasyon e-postası'},{n:'%100',l:'Açıklanabilir öneri'},{n:'7/24',l:'Ajan orkestrasyonu'},{n:'0',l:'Kara kutu karar'}],
    },
  },
  'gorev-onay-ve-takip': {
    eyebrow: 'Platform',
    cardTitle: 'Görev, Onay ve Takip',
    cardDesc: 'Her iş; sorumlu, öncelik, SLA, onay adımı, kapanış kriteri ve yönetim görünürlüğüyle takip edilir.',
    h1: 'Görev, Onay ve Takip',
    lead: 'Chief, her işi sorumlusu, önceliği, SLA\'sı, onay adımı ve kapanış kriteriyle yönetilebilir hale getirir.',
    bolumler: [
      { baslik: 'Her işin sahibi belli olur', metin: 'İşletmelerde birçok konu takip edilecek diye kalır; fakat kimin sorumlu olduğu, ne zaman kapanacağı ve hangi bilgiyle ilerleyeceği net değildir.\nChief her aksiyonu görev veya süreç adımı olarak tanımlar. Böylece işin sahibi, durumu ve bekleyen adımı görünür olur.' },
      { baslik: 'Onay süreçleri netleşir', metin: 'Fiyat, teklif, satın alma, ödeme, iş emri, saha operasyonu veya yönetim kararı gibi konularda onay gerektiren adımlar Chief içinde tanımlanabilir.', liste: ['Kim hangi seviyeye kadar onay verebilir?','Hangi durumda yöneticiye çıkılmalı?','Hangi teklif riskli kabul edilmeli?','Hangi iş SLA dışına çıkıyor?'], metin2: 'Chief bu soruları süreç içinde takip eder.' },
      { baslik: 'SLA ve kapanış kriteri', metin: 'Chief için bir görevin tamamlanması yalnızca yapıldı demek değildir. Her işin kapanış kriteri tanımlanır.\nBu kriter belge yükleme, müşteri onayı, saha formu, fotoğraf, fatura, teknik kontrol, ödeme bilgisi veya yönetici onayı olabilir.' },
      { baslik: 'Yönetilebilir operasyon', metin: 'Görev, onay ve takip yapısı sayesinde işletme işleri kişisel hatırlatmalarla değil, kurumsal süreç disipliniyle yönetir.' },
    ],
    caseStudy: {
      logo:'logo-tak.png', company:'TAK-Umwelt GmbH', industry:'Çevre Teknolojisi · Almanya',
      quote:'"Kırk artı lokasyondaki saha işlerinin takibini tek Chief kurulumundan yönetiyoruz. Her iş emrinin durumu, sahibi ve kapanış kanıtı gerçek zamanlı görünür."',
      results:[{n:'40+',l:'Lokasyon tek akışta'},{n:'%100',l:'İş emri görünürlüğü'},{n:'-%38',l:'Yanıt süresi'},{n:'0',l:'Kanıtsız kapanış'}],
    },
  },
  'surecler-arasi-devir-teslim': {
    eyebrow: 'Platform',
    cardTitle: 'Süreçler Arası Devir Teslim',
    cardDesc: 'Satıştan operasyona, ofisten sahaya, üretimden finansa geçen işlerde bilgi kaybı ve manuel takip yükü azalır.',
    h1: 'Süreçler Arası Devir Teslim',
    lead: 'Chief, satıştan operasyona, ofisten sahaya, üretimden finansa geçen işlerde bilgi kaybını azaltır ve ekipler arasında ortak süreç hafızası oluşturur.',
    bolumler: [
      { baslik: 'En çok kayıp devir teslimde oluşur', metin: 'Bir iş çoğu zaman tek departmanda başlayıp bitmez. Satış ekibi müşteriyle görüşür, teklif hazırlanır, yönetici onayı alınır, operasyon planlanır, saha ekibi işi yapar, finans faturalandırır ve yönetim sonucu izler.\nBu geçişlerde bilgi eksik kalırsa süreç yavaşlar, hata riski artar ve müşteri deneyimi bozulur.' },
      { baslik: 'Chief işin bağlamını taşır', metin: 'Chief yalnızca görevi devretmez; işin bağlamını da taşır.\nMüşteri beklentisi, teklif koşulları, teknik detaylar, önceki görüşmeler, belgeler, onaylar, saha notları ve finansal durum aynı iş akışında korunur.' },
      { baslik: 'Ofis, saha ve yönetim aynı akışta çalışır', metin: 'Saha ekipleri, operasyon yöneticileri, satış ekipleri ve yönetim aynı işin farklı aşamalarını görebilir. Her ekip kendi rolüne uygun bilgiyi alır; fakat süreç bütünlüğü kaybolmaz.' },
      { baslik: 'Kapanış ve geri bildirim', metin: 'İş tamamlandığında Chief kapanış bilgisini, müşteri geri bildirimini, varsa ek maliyeti, gecikmeyi veya kalite sorununu sürece bağlar. Böylece yalnızca iş yapılmaz; süreç öğrenir.' },
    ],
    caseStudy: {
      logo:'logo-termoinduktion.jpg', company:'Termo İndüksiyon', industry:'Endüstriyel Isıl İşlem · 1981\'den beri',
      quote:'"Satış ekibinin müşteriyle mutabık kaldığı koşullar operasyona aktarılırken kayboluyordu. Chief ile tekliften siparişe, siparişten üretime geçiş kayıpsız oluyor."',
      results:[{n:'%0',l:'Manuel aktarım hatası'},{n:'-%42',l:'Teklif-operasyon geçiş süresi'},{n:'%100',l:'Bağlam görünürlüğü'},{n:'1 akış',l:'Satıştan finansala'}],
    },
  },
  'guvenlik-ve-veri-yaklasimi': {
    eyebrow: 'Platform',
    cardTitle: 'Güvenlik ve Veri Yaklaşımı',
    cardDesc: 'Veri erişimi, denetim izi, insan onayı, AI çıktılarının izlenebilirliği ve özel kurulum yaklaşımını açıklar.',
    h1: 'Güvenlik ve Veri Yaklaşımı',
    lead: 'Chief, işletme yönetimine yalnızca veri sunmaz; gecikmeleri, riskleri, fırsatları ve süreç iyileştirme alanlarını açıklanabilir şekilde gösterir.',
    bolumler: [
      { baslik: 'Yönetim için görünürlük', metin: 'Chief yönetim ekranlarında hangi işlerin açık olduğunu, hangi süreçlerin geciktiğini, hangi ekiplerde yoğunluk oluştuğunu ve hangi müşterilerde risk arttığını görünür hale getirir.\nBu görünürlük yalnızca rapor seviyesinde değil, aksiyon seviyesindedir. Yönetici gerektiğinde ilgili işe, göreve, onaya veya sürece inebilir.' },
      { baslik: 'Açıklanabilir öneriler', metin: 'Chief öneri üretirken bu önerinin dayandığı bağlamı da gösterir. Gecikme, SLA ihlali, eksik bilgi, riskli teklif, yüksek maliyet, müşteri memnuniyetsizliği veya operasyonel darboğaz gibi konular açıklanabilir şekilde sunulur.' },
      { baslik: 'Rol bazlı erişim', metin: 'Chief içinde her kullanıcı yalnızca yetkili olduğu bilgi ve aksiyonlara erişir. Departman, rol, süreç, müşteri, lokasyon veya veri tipi bazında erişim kurgulanabilir.\nBu yapı özellikle kurumsal işletmeler, kamu kurumları ve veri hassasiyeti yüksek organizasyonlar için önemlidir.' },
      { baslik: 'Denetim ve süreç hafızası', metin: 'Chief yapılan işlemleri, kararları, onayları ve değişiklikleri kayıt altına alır. Böylece işletme içinde kimin ne zaman hangi kararı verdiği, hangi bilginin hangi aksiyona dönüştüğü ve sürecin nasıl kapandığı izlenebilir.' },
      { baslik: 'Eksik süreç önerileri', metin: 'Chief zamanla işletmede tekrarlayan eksikleri de görünür kılar. Sürekli eksik bilgiyle açılan işler, aynı noktada bekleyen onaylar, sık geciken süreçler veya manuel takip edilen akışlar için iyileştirme önerileri üretir.\nBu nedenle Chief yalnızca mevcut süreci çalıştırmaz; işletmenin süreç olgunluğunu artırır.' },
    ],
    caseStudy: {
      logo:'logo-termoinduktion.jpg', company:'Termo İndüksiyon', industry:'Endüstriyel Isıl İşlem · 1981\'den beri',
      quote:'"Pazartesi toplantısına her hafta veri toplamak için Cuma günü başlardık. Chief ile o toplantı hazırlığı tamamen ortadan kalktı. Pazar gecesi özet geliyor, Pazartesi toplantısı 12 dakika sürüyor."',
      results:[{n:'-%80',l:'Rapor hazırlama süresi'},{n:'12 dk',l:'Ort. yönetim toplantısı'},{n:'7/24',l:'Gerçek zamanlı KPI erişimi'},{n:'3 gün',l:'Risk öncesi uyarı süresi'}],
    },
  },
};

function renderPlatformV2Page(slug) {
  var d = PLATFORM_V2_DATA[slug];
  if (!d) return renderPlatformPage(slug);
  var cs = d.caseStudy;
  var h = '<section class="detail-hero"><div class="container">' +
    crumb(['Platform', '#/platform'], [d.h1]) +
    '<div class="hero-split" style="display:grid;grid-template-columns:1.1fr 1fr;gap:48px 56px;align-items:start">' +
    '<div class="hero-split-left">' +
    '<span class="eyebrow">' + esc(d.eyebrow) + '</span>' +
    '<h1 style="margin-top:16px">' + esc(d.h1) + '</h1>' +
    '<p class="lead">' + esc(d.lead) + '</p>' +
    '</div>' +
    '<div class="hero-split-right">' +
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
    '</div></div>' +
    '</div>' +
    '</div>' +
    '</div></section>';

  // Bölüm sayfaları (doküman metni)
  if (d.bolumler && d.bolumler.length) {
    d.bolumler.forEach(function(b, i) {
      var bg = i % 2 === 0 ? 'bg-warm' : '';
      h += '<section class="' + bg + '" style="padding:52px 0"><div class="container narrow platform-bolum">';
      h += '<h3>' + esc(b.baslik) + '</h3>';
      // Multi-paragraph: split on \n
      if (b.metin) {
        b.metin.split('\\n').forEach(function(para) {
          if (para.trim()) h += '<p>' + esc(para.trim()) + '</p>';
        });
      }
      if (b.liste && b.liste.length) {
        h += '<ul>' + b.liste.map(function(li){ return '<li>' + esc(li) + '</li>'; }).join('') + '</ul>';
      }
      if (b.metin2) h += '<p>' + esc(b.metin2) + '</p>';
      h += '</div></section>';
    });
  }

  return h + finalCTA();
}

function renderPlatformV2Listing() {
  var slugOrder = ['chief-nedir','chief-nasil-calisir','akilli-isletme-katmani','sinyalden-aksiyona','mevcut-sistemlerle-calisir','is-nesnesi-ve-veri-katmani','ai-ajanlar-ve-gorev-yonetimi','gorev-onay-ve-takip','surecler-arasi-devir-teslim','yonetim-paneli-ve-dashboard','rol-bazli-yetkilendirme','guvenlik-ve-veri-yaklasimi'];
  var icons = {'chief-nedir':'spark','chief-nasil-calisir':'flow','akilli-isletme-katmani':'layers','sinyalden-aksiyona':'bolt','mevcut-sistemlerle-calisir':'cpu','is-nesnesi-ve-veri-katmani':'db','ai-ajanlar-ve-gorev-yonetimi':'cpu','gorev-onay-ve-takip':'check','surecler-arasi-devir-teslim':'arrow','yonetim-paneli-ve-dashboard':'bars','rol-bazli-yetkilendirme':'users','guvenlik-ve-veri-yaklasimi':'shield'};

  var h = '<section class="detail-hero"><div class="container">' +
    crumb(['Platform']) +
    '<span class="eyebrow">AI TABANLI İŞLETME ZEKASI KATMANI</span>' +
    '<h1 style="margin-top:16px;max-width:800px">Chief Platformu</h1>' +
    '<p class="lead" style="max-width:720px">Chief; e-posta, toplantı notu, WhatsApp, web formu, ERP/CRM kaydı, saha formu ve sistem verilerinden gelen dağınık iş sinyallerini anlayarak bunları yönetilebilir süreçlere, görevlere, onaylara ve karar aksiyonlarına dönüştüren, öğrenen öngörüler üreten, AI tabanlı olarak tasarlanmış bir işletme zekası katmanıdır.</p>' +
    '<div class="cta-row" style="margin-top:28px">' +
    '<a href="#/platform/chief-nasil-calisir" class="btn btn-ghost btn-lg">Chief Nasıl Çalışır?</a>' +
    '<a href="#/demo-talep-et" class="btn btn-clay btn-lg">Demo Talep Et</a>' +
    '</div></div></section>';

  // 4 alt paragraf
  h += '<section class="bg-warm" style="padding:52px 0"><div class="container"><div class="platform-intro-paras">';
  ['Chief, işletmelerde farklı sistemlerde, ekiplerde ve kanallarda dağınık halde duran bilgileri yönetilebilir süreçlere, görevlere, onaylara ve kararlara dönüştüren, AI tabanlı olarak iş süreçlerini yöneten, operasyonel işletme zekasıdır.',
   'Toplantı notları, e-postalar, WhatsApp mesajları, web formları, ERP/CRM kayıtları, saha formları, dokümanlar ve müşteri geri bildirimleri Chief için yalnızca veri kaynağı değildir. Her biri doğru bağlamla ele alındığında işletme için aksiyon gerektiren bir sinyaldir.',
   'Chief bu sinyalleri yakalar, anlar, mevcut verilerle bağlar, ilgili kişilere görev veya onay olarak yönlendirir ve sürecin sonucunu yönetim için görünür hale getirir.',
   'Bu yapı sayesinde işletmeler yalnızca daha fazla rapor üretmez; işin nerede beklediğini, kimin sorumlu olduğunu, hangi kararın gerektiğini ve hangi süreçlerin iyileştirilmesi gerektiğini daha net görür.'
  ].forEach(function(p){ h += '<p>' + esc(p) + '</p>'; });
  h += '</div></div></section>';

  // 8 kart
  h += '<section class="tight"><div class="container"><div class="cards-grid">';
  slugOrder.forEach(function(slug, n) {
    var d = PLATFORM_V2_DATA[slug];
    if (!d) return;
    h += '<a class="card" href="#/platform/' + slug + '">' +
      '<div class="card-ico ' + (n%3===1?'sage':n%3===2?'blue':'') + '">' + ico(icons[slug]||'flow', 22) + '</div>' +
      '<h4>' + esc(d.cardTitle) + '</h4>' +
      '<p>' + esc(d.cardDesc) + '</p>' +
      '<span class="card-foot btn-link">İncele ' + ico('arrow',15) + '</span></a>';
  });
  h += '</div></div></section>' + finalCTA();
  return h;
}

/* ================================================================
   PLATFORM SAYFALARI (eski — gizli, URL\'ler çalışmaya devam eder)
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
  var h = '';

  /* ---- HERO ---- */
  h += '<section class="detail-hero"><div class="container">' +
    crumb(["Fiyatlandırma"]) +
    '<span class="eyebrow">KULLANIMA GÖRE SAAS FİYATLAMA</span>' +
    '<h1 style="margin-top:16px;max-width:720px">Kullandığınız iş kadar ödeyin</h1>' +
    '<p class="lead" style="max-width:680px">Chief, işletmenizdeki talep, teklif, saha işi, teknik doküman, görüntü analizi, rota planlama, tahmin ve yönetim brifingi gibi işleri yapay zekâ destekli süreçlere dönüştürür. Aylık 500 dolardan başlayan fiyatlarla kullanmaya başlayın; aylık iş/görev yoğunluğunuza göre kullanımınız ölçeklenir.</p>' +
    '<p style="font-size:14px;color:var(--t-muted);margin:14px 0 0">Teknik token detayına girmeden, aylık iş hacminizi üç basit kategoriyle seçin; yaklaşık aylık toplam fiyatınızı görün.</p>' +
    '<div class="cta-row" style="margin-top:28px">' +
    '<a href="#simRef" class="btn btn-clay btn-lg" onclick="document.getElementById(\'chiefSim\').scrollIntoView({behavior:\'smooth\'});return false;">Kullanımınızı Simüle Edin</a>' +
    '<a href="#/demo-talep-et" class="btn btn-ghost btn-lg">Randevu Talep Edin</a>' +
    '</div></div></section>';

  /* ---- HERO ALTI 3 KART ---- */
  h += '<section class="bg-warm" style="padding:48px 0"><div class="container">' +
    '<div class="fiy-3kart">' +
    '<div class="fiy-kart"><div class="fiy-kart-ico">' + ico('bolt',22) + '</div><h4>Başlangıç seviyesinde SaaS</h4><p>Chief\'in temel platform kullanımı, görev/onay akışı, kullanıcı yönetimi ve dashboard erişimi başlangıç bedeliyle sunulur.</p><span class="fiy-kart-alt">Uzun entegrasyonlarla uğraşmadan; hemen başla</span></div>' +
    '<div class="fiy-kart"><div class="fiy-kart-ico sage">' + ico('bars',22) + '</div><h4>Tükettiğiniz kadar ölçeklenir</h4><p>Düşük, orta ve yüksek yoğunluklu iş/görev adetlerinizi seçerek yaklaşık aylık toplam fiyatınızı görün.</p><span class="fiy-kart-alt">Öngörülebilir maliyetlerle işletmenizin tüm süreçlerini Chief yönetin</span></div>' +
    '<div class="fiy-kart"><div class="fiy-kart-ico">' + ico('layers',22) + '</div><h4>Entegrasyon ayrı planlanır</h4><p>ERP, CRM, muhasebe, IoT, WhatsApp veya saha sistemleriyle bağlantılar kapsamına göre tekliflendirilir.</p><span class="fiy-kart-alt">On-premise ve özelleştirilmiş senaryolar için entegrasyon süreci planlanır</span></div>' +
    '</div></div></section>';

  /* ---- FİYATLAMA NASIL ÇALIŞIR? ---- */
  h += '<section style="padding:52px 0"><div class="container">' +
    '<div class="section-head"><span class="eyebrow">Fiyatlama nasıl çalışır?</span>' +
    '<h2>Üç görev yoğunluğu, tek toplam fiyat</h2>' +
    '<p class="lead">Chief fiyatlandırması yalnızca kullanıcı hesabı sayısına göre değil, platformun sizin için yürüttüğü iş hacmine göre şekillenir.</p></div>' +
    '<div class="fiy-kat-grid">' +
    '<div class="fiy-kat-card"><div class="fiy-kat-num">01</div><h3>Düşük yoğunluklu işler</h3><p>Dağınık mesaj, talep, not ve kısa takip işlerini Chief\'e taşıyın.</p><div class="fiy-kat-ornekler">Talep sınıflandırma · Mesajdan görev çıkarma · Görüşme notu özeti · Takip hatırlatması</div><span class="fiy-kat-alt">Aylık düşük yoğunluklu iş adedi</span></div>' +
    '<div class="fiy-kat-card fiy-kat-orta"><div class="fiy-kat-num">02</div><h3>Orta yoğunluklu işler</h3><p>Teklif, onay, iş emri, saha kapanışı ve operasyon takibini tek akışta yönetin.</p><div class="fiy-kat-ornekler">Teklif taslağı · Fiyat/marj kontrolü · İş emri oluşturma · Saha kapanış raporu</div><span class="fiy-kat-alt">Aylık orta yoğunluklu iş adedi</span></div>' +
    '<div class="fiy-kat-card"><div class="fiy-kat-num">03</div><h3>Yüksek yoğunluklu işler</h3><p>Teknik, görsel, planlama ve tahmin gerektiren ileri işleri Chief ile ölçeklendirin.</p><div class="fiy-kat-ornekler">Teknik resim okuma · Görüntü analizi · Rota/dispatch planlama · Talep tahmini</div><span class="fiy-kat-alt">Aylık yüksek yoğunluklu iş adedi</span></div>' +
    '</div></div></section>';

  /* ---- SİMÜLATÖR ---- */
  h += '<section id="chiefSim" class="bg-warm" style="padding:60px 0"><div class="container">' +
    '<div class="section-head"><span class="eyebrow">Kullanım Simülatörü</span>' +
    '<h2>Aylık Chief kullanımınızı simüle edin</h2>' +
    '<p class="lead" style="max-width:600px">Üç görev yoğunluğu için aylık adetleri seçin; temel SaaS bedeli dahil yaklaşık aylık toplam fiyatınızı görün.</p></div>' +
    '<div class="sim-wrap">' +

    /* Sol panel: sliderlar */
    '<div class="sim-sliders">' +

    /* Slider 1: Düşük */
    '<div class="sim-slider-item">' +
    '<div class="sim-slider-head"><span class="sim-slider-label">Düşük yoğunluklu işler</span><span class="sim-slider-val"><span id="simLowVal">400</span> / ay</span></div>' +
    '<p class="sim-slider-hint">Kısa metin, sınıflandırma, özet ve takip işleri.</p>' +
    '<div class="sim-range-wrap"><span class="sim-range-lim">0</span>' +
    '<input type="range" id="simLow" class="sim-range" min="0" max="10000" step="50" value="400" oninput="window.chiefSimUpdate()">' +
    '<span class="sim-range-lim">10.000</span></div>' +
    '</div>' +

    /* Slider 2: Orta */
    '<div class="sim-slider-item">' +
    '<div class="sim-slider-head"><span class="sim-slider-label">Orta yoğunluklu işler</span><span class="sim-slider-val"><span id="simMedVal">150</span> / ay</span></div>' +
    '<p class="sim-slider-hint">Teklif, onay, iş emri, saha kapanış ve operasyon takip işleri.</p>' +
    '<div class="sim-range-wrap"><span class="sim-range-lim">0</span>' +
    '<input type="range" id="simMed" class="sim-range" min="0" max="5000" step="25" value="150" oninput="window.chiefSimUpdate()">' +
    '<span class="sim-range-lim">5.000</span></div>' +
    '</div>' +

    /* Slider 3: Yüksek */
    '<div class="sim-slider-item">' +
    '<div class="sim-slider-head"><span class="sim-slider-label">Yüksek yoğunluklu işler</span><span class="sim-slider-val"><span id="simHighVal">25</span> / ay</span></div>' +
    '<p class="sim-slider-hint">Teknik resim, görüntü analizi, rota planlama, tahmin ve optimizasyon işleri.</p>' +
    '<div class="sim-range-wrap"><span class="sim-range-lim">0</span>' +
    '<input type="range" id="simHigh" class="sim-range" min="0" max="2000" step="10" value="25" oninput="window.chiefSimUpdate()">' +
    '<span class="sim-range-lim">2.000</span></div>' +
    '</div>' +

    /* Entegrasyon + Deploy */
    '<div class="sim-selects">' +
    '<div><label class="sim-sel-label">Entegrasyon kapsamı</label>' +
    '<select id="simInteg" class="sim-select" onchange="window.chiefSimUpdate()">' +
    '<option value="Yok">Yok / Manuel başlangıç</option>' +
    '<option value="Temel" selected>Temel</option>' +
    '<option value="Standart">Standart</option>' +
    '<option value="Gelişmiş">Gelişmiş</option>' +
    '<option value="Özel">Özel / On-Premise</option>' +
    '</select></div>' +
    '<div><label class="sim-sel-label">Kurulum tipi</label>' +
    '<select id="simDeploy" class="sim-select" onchange="window.chiefSimUpdate()">' +
    '<option value="SaaS" selected>SaaS</option>' +
    '<option value="PrivateCloud">Private Cloud</option>' +
    '<option value="OnPremise">On-Premise</option>' +
    '</select></div>' +
    '</div>' +
    '</div>' + /* /sim-sliders */

    /* Sağ panel: sonuç kartı */
    '<div class="sim-result-card">' +
    '<span class="sim-result-label">Yaklaşık aylık toplam</span>' +
    '<div class="sim-price" id="simPrice">667 USD / ay</div>' +
    '<p class="sim-price-sub" id="simPriceSub">Temel başlangıç bedeli dahildir.</p>' +
    '<div class="sim-segment-wrap"><span class="sim-segment-lbl">Önerilen profil</span><span class="sim-segment" id="simSegment">Mikro İşletme / Girişim</span></div>' +
    '<p class="sim-integ-note" id="simIntegNote">Tek seferlik temel kurulum bedeli ayrıca planlanır.</p>' +
    '<a href="#/demo-talep-et" class="btn btn-clay btn-lg sim-cta" id="simCTA">Bu kullanımı birlikte doğrulayalım</a>' +
    '<p class="sim-disclaimer">Simülasyon ve fiyatlandırma değerleri örnektir; gerçek bedel kurulum kapsamı, entegrasyon ihtiyacı, kullanım hacmi, veri yoğunluğu, güvenlik gereksinimleri ve sözleşme şartlarına göre değişkenlik gösterebilir.</p>' +
    '</div>' +

    '</div></div></section>'; /* /sim-wrap /container /section */

  /* ---- SAAS PAKET KARTLARI ---- */
  var saasSegments = [
    { name:'Mikro İşletme / Girişim', fiyatDili:'Başlangıç seviyesinde temel SaaS', kimler:'Freelance, yeni kurulanlar, 1-5 çalışan mikro KOBİ veya ilk süreçlerini Chief\'e taşımak isteyen küçük ekipler.', cta:'Kullanımı Simüle Et', ctaHref:'#chiefSim', featured:false },
    { name:'Küçük İşletme / KOBİ', fiyatDili:'Kullanıma göre ölçeklenir', kimler:'İşini otutmuş, büyüyen ekipler; 5-20 çalışan yapılar. Düzenli satış, teklif, takip ve temel operasyon akışı olan işletmeler.', cta:'Randevu Talep Et', ctaHref:'#/demo-talep-et', featured:true },
    { name:'Orta Ölçekli İşletme', fiyatDili:'Ciddi hacim ve çoklu süreç kullanımı', kimler:'20-100 çalışan, satış + operasyon + saha/servis/üretim süreçlerini birlikte yöneten ticari şirketler.', cta:'Sürecinizi Birlikte Modelleyelim', ctaHref:'#/demo-talep-et', featured:false },
    { name:'Büyük Kurumsal / Grup Şirketleri', fiyatDili:'Kurumsal kullanım ve ileri entegrasyon', kimler:'100+ çalışan, çok lokasyonlu, global yapılar, holdingler veya gelişmiş güvenlik/entegrasyon ihtiyacı olan kurumlar.', cta:'Kurumsal Görüşme Planla', ctaHref:'#/demo-talep-et', featured:false },
  ];

  h += '<section style="padding:60px 0"><div class="container">' +
    '<div class="section-head"><span class="eyebrow">SaaS Paketleri</span>' +
    '<h2>İşletme ölçeğinize göre başlayın</h2></div>' +
    '<div class="fiy-saas-grid">' +
    saasSegments.map(function(s) {
      return '<div class="fiy-saas-card' + (s.featured ? ' fiy-saas-featured' : '') + '">' +
        '<h3>' + esc(s.name) + '</h3>' +
        '<p class="fiy-saas-fiyat">' + esc(s.fiyatDili) + '</p>' +
        '<p class="fiy-saas-kimler">' + esc(s.kimler) + '</p>' +
        '<a href="' + s.ctaHref + '" class="btn ' + (s.featured ? 'btn-clay' : 'btn-ghost') + '" style="width:100%;justify-content:center;margin-top:auto" onclick="if(this.href.indexOf(\'#chiefSim\')>-1){document.getElementById(\'chiefSim\').scrollIntoView({behavior:\'smooth\'});return false;}">' + esc(s.cta) + '</a>' +
        '</div>';
    }).join('') +
    '</div></div></section>';

  /* ---- ENTEGRASYon KAPSAMI ---- */
  h += '<section class="bg-warm" style="padding:52px 0"><div class="container">' +
    '<div class="section-head"><span class="eyebrow">Entegrasyon Kapsamı</span><h2>SaaS kullanımı ile entegrasyon kurulumu ayrıdır</h2>' +
    '<p class="lead">Chief mevcut sistemlerinizi değiştirmeden ERP, CRM, muhasebe, e-posta, WhatsApp, Dendy, saha uygulamaları, doküman yönetimi ve raporlama altyapılarıyla birlikte çalışabilir. Aylık SaaS kullanımı ile entegrasyon kurulumu ayrı değerlendirilir.</p></div>' +
    '<div class="fiy-integ-grid">' +
    [
      ['Yok / Manuel', 'Sınırlı veri girişi, manuel yükleme veya veri kullanımı.', 'Aylık SaaS tahmini fiyat gösterilir; entegrasyon seçilmedi.'],
      ['Temel', 'E-posta, web formu, Excel/CSV, tek yönlü basit veri aktarımı.', 'Tek seferlik temel kurulum bedeli ayrıca planlanır.'],
      ['Standart', 'CRM/ERP okuma-yazma, görev/süreç kayıtları, temel webhook.', 'Kapsam analizi sonrası entegrasyon teklifi gerekir.'],
      ['Gelişmiş', 'Birden fazla sistem, çift yönlü senkronizasyon, Dendy, SSO, özel iş kuralları.', 'Teknik keşif görüşmesi önerilir.'],
      ['Özel / On-Premise', 'Private network, kurum içi sistem, özel güvenlik, veri ambarı, özel API.', 'Fiyat simülasyonu yerine randevu gerekir.'],
    ].map(function(r) {
      return '<div class="fiy-integ-item"><strong>' + esc(r[0]) + '</strong><p>' + esc(r[1]) + '</p><span class="fiy-integ-note">' + esc(r[2]) + '</span></div>';
    }).join('') +
    '</div>' +
    '<div style="margin-top:32px;text-align:center"><a href="#/demo-talep-et" class="btn btn-clay">Entegrasyon Kapsamını Görüşelim</a></div>' +
    '</div></section>';

  /* ---- ON-PREMISE KARTI ---- */
  h += '<section style="padding:52px 0"><div class="container narrow">' +
    '<div class="fiy-onprem">' +
    '<div class="fiy-onprem-icon">' + ico('shield', 28) + '</div>' +
    '<div>' +
    '<h3>Özel güvenlik ve kurum içi kurulum ihtiyacınız mı var?</h3>' +
    '<p>Kamu kurumları, finansal kuruluşlar, büyük kurumsal yapılar, holdingler veya verisini kendi altyapısında tutmak isteyen işletmeler için Chief private cloud, hybrid veya on-premise mimariyle konumlandırılabilir. Bu kurulumlarda fiyat; altyapı, kullanıcı, süreç hacmi, model tercihi, entegrasyon ve bakım kapsamına göre proje bazlı belirlenir.</p>' +
    '<a href="#/demo-talep-et" class="btn btn-clay" style="margin-top:18px">Özel Kurulum İçin Randevu Talep Et</a>' +
    '<p style="font-size:13px;color:var(--t-muted);margin-top:10px">On-premise kurulumlar standart SaaS fiyat simülasyonundan bağımsız değerlendirilir.</p>' +
    '</div></div></div></section>';

  /* ---- SSS ---- */
  var faqItems = [
    ['Chief fiyatı nasıl hesaplanır?', 'Chief temel SaaS bedeliyle başlar. Aylık düşük, orta ve yüksek yoğunluklu iş/görev adetleri arka planda hesaplanır ve kullanıcıya tek bir yaklaşık aylık toplam fiyat gösterilir.'],
    ['Düşük, orta ve yüksek yoğunluklu iş ne demek?', 'Düşük yoğunluklu işler kısa metin, sınıflandırma ve takip işleridir. Orta yoğunluklu işler teklif, onay, iş emri ve süreç yürütme gibi daha fazla bağlam gerektiren işlerdir. Yüksek yoğunluklu işler teknik resim, görüntü analizi, rota planlama, talep tahmini ve optimizasyon gibi ileri işlemlerdir.'],
    ['Simülatör sonucu kesin fiyat mı?', 'Hayır. Simülatör yaklaşık aylık toplam fiyat verir. Simülasyon ve fiyatlandırma değerleri örnektir; net fiyat, kullanım doğrulaması, entegrasyon kapsamı, kurulum ihtiyaçları ve sözleşme şartları görüşüldükten sonra belirlenir.'],
    ['Entegrasyon ücretleri aylık fiyata dahil mi?', 'Hayır. SaaS aylık toplam fiyatı ile entegrasyon kurulum bedeli ayrı değerlendirilir. ERP, CRM, muhasebe, WhatsApp, Dendy veya saha sistemleri kapsamına göre ayrıca tekliflendirilir.'],
    ['Teknik resim okuma ve görüntü analizi neden yüksek yoğunluklu?', 'Bu işler daha fazla bağlam, görsel/doküman analizi, kontrol adımı ve işlem kapasitesi gerektirir. Bu nedenle yüksek yoğunluklu işler kategorisinde simüle edilir.'],
    ['On-premise için neden fiyat gösterilmiyor?', 'On-premise ve private kurulumlarda altyapı, güvenlik, veri yerleşimi, model tercihi, bakım ve entegrasyon kapsamı projeye göre değişir. Bu nedenle randevu ile değerlendirilmelidir.'],
    ['Mikro işletme, KOBİ, orta ölçekli ve büyük kurumsal ayrımı neye göre belirlenir?', 'Bu ayrım ziyaretçiye kendi şirket profilini hızlı eşleştirmesi için verilir. Çalışan sayısı rehberdir: Mikro İşletme / Girişim 1-5, Küçük İşletme / KOBİ 5-20, Orta Ölçekli İşletme 20-100, Büyük Kurumsal / Grup Şirketleri 100+ çalışan yapılar için düşünülür. Simülatörün fiyat hesabı ise çalışan sayısından değil, aylık düşük, orta ve yüksek yoğunluklu iş/görev hacminden oluşur.'],
  ];

  h += '<section class="bg-warm" style="padding:52px 0"><div class="container narrow">' +
    '<div class="section-head"><span class="eyebrow">SSS</span></div>' +
    faqItems.map(function(f) {
      return '<details class="faq-item"><summary>' + esc(f[0]) + '</summary><p>' + esc(f[1]) + '</p></details>';
    }).join('') +
    '</div></section>';

  return h + finalCTA();
}

/* Simulator hesaplama fonksiyonu */
window.chiefSimUpdate = function() {
  var low = parseInt((document.getElementById('simLow') || {}).value) || 0;
  var med = parseInt((document.getElementById('simMed') || {}).value) || 0;
  var high = parseInt((document.getElementById('simHigh') || {}).value) || 0;
  var intScope = (document.getElementById('simInteg') || {}).value || 'Temel';
  var deploy = (document.getElementById('simDeploy') || {}).value || 'SaaS';

  var lowVal = document.getElementById('simLowVal');
  var medVal = document.getElementById('simMedVal');
  var highVal = document.getElementById('simHighVal');
  if (lowVal) lowVal.textContent = low.toLocaleString('tr-TR');
  if (medVal) medVal.textContent = med.toLocaleString('tr-TR');
  if (highVal) highVal.textContent = high.toLocaleString('tr-TR');

  var baseFee = 500;
  var total = Math.round(baseFee + low * 0.09 + med * 0.63 + high * 1.46);

  var segment = 'Mikro İşletme / Girişim';
  if (total > 900 && total <= 2500) segment = 'Küçük İşletme / KOBİ';
  if (total > 2500 && total <= 6000) segment = 'Orta Ölçekli İşletme';
  if (total > 6000) segment = 'Büyük Kurumsal / Grup Şirketleri';

  var showRandevu = deploy !== 'SaaS' || intScope === 'Özel';

  var priceEl = document.getElementById('simPrice');
  var subEl = document.getElementById('simPriceSub');
  var ctaEl = document.getElementById('simCTA');
  var segEl = document.getElementById('simSegment');
  var noteEl = document.getElementById('simIntegNote');

  if (priceEl) priceEl.textContent = showRandevu ? 'Randevu Talep Et' : (total.toLocaleString('tr-TR') + ' USD / ay');
  if (subEl) subEl.textContent = showRandevu ? 'Özel kurulum için fiyat proje bazlı belirlenir.' : 'Temel başlangıç bedeli dahildir.';
  if (ctaEl) ctaEl.textContent = showRandevu ? 'Randevu Talep Edin' : 'Bu kullanımı birlikte doğrulayalım';
  if (segEl) segEl.textContent = segment;

  var notes = {
    'Yok': 'Entegrasyon seçilmedi; manuel başlangıç.',
    'Temel': 'Tek seferlik temel kurulum bedeli ayrıca planlanır.',
    'Standart': 'Kapsam analizi sonrası entegrasyon teklifi gerekir.',
    'Gelişmiş': 'Teknik keşif görüşmesi önerilir.',
    'Özel': 'Fiyat simülasyonu yerine randevu gerekir.'
  };
  if (noteEl) noteEl.textContent = notes[intScope] || '';
};

function renderGuvenlik() {
  var data = PLATFORM_DATA['guvenlik'];
  if (!data) return _stub('Güvenlik');
  return renderRichPage(data, 'Platform', '#/platform', 'guvenlik');
}

/* ================================================================
   PARTNER AĞI
   ================================================================ */
function renderPartnerler() {
  var h = '';

  // HERO
  h += '<section class="detail-hero"><div class="container">' +
    crumb(['Partner Ağı']) +
    '<span class="eyebrow">CHIEF PARTNER AĞI</span>' +
    '<h1 style="margin-top:16px;max-width:780px">Chief ile Kurumsal Yapay Zekâ Dönüşümünü Birlikte Büyütün</h1>' +
    '<p class="lead" style="max-width:720px">Chief Partner Ağı; teknoloji şirketleri, sistem entegratörleri, danışmanlar, sektör uzmanları ve bölgesel büyüme ortakları için tasarlanmış kurumsal iş ortaklığı modelidir. Chief ile işletmelerin satış, operasyon, üretim, finans, saha ekipleri ve yönetim süreçlerinde yapay zekâ destekli dönüşümüne birlikte katkı sağlayın.</p>' +
    '<p style="font-size:15px;color:var(--t-muted);max-width:680px;margin-top:16px;line-height:1.75">Chief, farklı sistemlerden gelen veriyi yalnızca raporlayan bir araç değildir. Gelen iş sinyallerini anlar, eksik bilgiyi tamamlar, ilgili sürece bağlar, görev ve onay akışları oluşturur, yönetime ölçülebilir aksiyon olarak sunar. Partnerlerimiz bu değeri farklı sektörlere, pazarlara ve müşteri ihtiyaçlarına doğru şekilde taşımamıza yardımcı olur.</p>' +
    '<div class="cta-row" style="margin-top:28px">' +
    '<a href="#/demo-talep-et" class="btn btn-clay btn-lg">Chief Partneri Olun</a>' +
    '<a href="#/demo-talep-et" class="btn btn-ghost btn-lg">Partnerlik Başvurusu Yapın</a>' +
    '</div></div></section>';

  // PARTNERLİK YAKLAŞIMI
  h += '<section class="bg-warm" style="padding:52px 0"><div class="container narrow">' +
    '<div class="section-head"><span class="eyebrow">Partnerlik Yaklaşımı</span></div>' +
    '<p style="font-size:16px;color:var(--t-body);line-height:1.8;margin-bottom:16px">Chief partner modeli, klasik bayi veya tek seferlik satış yaklaşımından farklıdır. Temel amaç; müşterinin ihtiyacını doğru anlamak, uygun çözümü konumlandırmak, kurulum ve entegrasyon süreçlerini sağlıklı yürütmek ve müşterinin platformdan sürdürülebilir değer üretmesini sağlamaktır.</p>' +
    '<p style="font-size:16px;color:var(--t-body);line-height:1.8;margin-bottom:16px">Her partner aynı rolde konumlanmaz. Bazı partnerler belirli bir ülke veya bölgenin gelişiminden sorumlu olurken, bazı partnerler çözüm kurulumu, entegrasyon ve proje yönetimi tarafında güçlü rol alır. Bazı partnerler ise satış, iş analizi, sektör uzmanlığı veya müşteri destek süreçlerinde değer üretir.</p>' +
    '<p style="font-size:16px;color:var(--t-body);line-height:1.8;margin:0">Bu yapı sayesinde Chief, merkezi ürün standardını korurken; yerel uzmanlık, sektör bilgisi ve uygulama gücüyle müşteriye daha yakın, daha güvenilir ve daha sürdürülebilir bir hizmet modeli sunar.</p>' +
    '</div></section>';

  // PARTNER MODELLERİ
  h += '<section style="padding:52px 0"><div class="container">' +
    '<div class="section-head"><span class="eyebrow">Partner Modelleri</span>' +
    '<p class="lead" style="max-width:640px">Bu modeller hiyerarşik seviye değildir; partnerin pazara, projeye ve müşteriye nasıl katkı sunduğunu tarif eder.</p></div>' +
    '<div class="partner-modeller-grid">' +
    '<div class="partner-model-kart">' +
    '<span class="eyebrow" style="font-size:11px">01</span>' +
    '<h3>Stratejik Bölge ve Ülke Partnerleri</h3>' +
    '<p class="partner-kart-lead">Belirli bir ülke veya bölgede Chief\'in doğru konumlanmasına, yerel iş ortaklığı yapısının gelişmesine ve kurumsal müşteri ilişkilerinin büyümesine katkı sağlayın.</p>' +
    '<p class="partner-kart-detay">Pazar geliştirme, yerel iş ortaklarının koordinasyonu, büyük müşteri ilişkileri, kanal yapılanması ve bölgesel büyüme stratejisinde aktif rol alırlar.</p>' +
    '</div>' +
    '<div class="partner-model-kart">' +
    '<span class="eyebrow" style="font-size:11px">02</span>' +
    '<h3>Çözüm ve Uygulama Partnerleri</h3>' +
    '<p class="partner-kart-lead">Chief projelerinde ihtiyaç analizi, kurulum, entegrasyon, eğitim ve canlı kullanım süreçlerinde aktif rol alarak müşterinin platformdan gerçek değer üretmesini sağlayın.</p>' +
    '<p class="partner-kart-detay">İhtiyaç analizi, proje kapsamı, sistem entegrasyonları, veri kaynaklarının bağlanması, kullanıcı geçişi, eğitim ve canlı kullanım desteği bu modelin merkezindedir.</p>' +
    '</div>' +
    '<div class="partner-model-kart">' +
    '<span class="eyebrow" style="font-size:11px">03</span>' +
    '<h3>Satış ve Uzmanlık Partnerleri</h3>' +
    '<p class="partner-kart-lead">Sektör bilginiz, müşteri ilişkileriniz veya danışmanlık uzmanlığınızla Chief\'in doğru müşterilerle buluşmasına ve doğru kullanım senaryolarıyla konumlanmasına katkı sağlayın.</p>' +
    '<p class="partner-kart-detay">Yeni müşteri fırsatları, ilk temas, iş analizi, sektör uzmanlığı, teknik ön değerlendirme ve kullanıcı adaptasyonu gibi alanlarda rol alabilirler.</p>' +
    '</div>' +
    '</div></div></section>';

  // SÜRDÜRÜLEBİLİR PARTNER GELİRİ
  h += '<section class="bg-warm" style="padding:52px 0"><div class="container">' +
    '<div class="partner-gelir-blok">' +
    '<span class="eyebrow on-dark">Sürekli Gelir Modeli</span>' +
    '<h2 style="margin-top:14px">Sürdürülebilir Partner Geliri</h2>' +
    '<p>Chief partnerliği, yalnızca tek seferlik satış fırsatı olarak değil; platformun müşteride kullanımı devam ettikçe partner için sürdürülebilir gelir potansiyeli oluşturan bir iş ortaklığı modeli olarak tasarlanır.</p>' +
    '<p>Partner gelir modeli; partnerin üstlendiği rol, müşteri kazanımına katkısı, uygulama ve entegrasyon sorumluluğu, destek kapsamı, portföy büyümesi ve müşteri başarısına sağladığı katkı dikkate alınarak yapılandırılır.</p>' +
    '<p>Bu yaklaşımda partnerler, performanslarına ve projeye kattıkları değere bağlı olarak değişen oranlarda sürekli gelir paylaşımı imkânına sahip olabilir.</p>' +
    '<div class="partner-gelir-kart">Chief, partnerler için yalnızca ilk satış anında değil, müşterinin platform kullanımının sürdürülmesi ve büyümesiyle birlikte devam eden gelir potansiyeli oluşturur.</div>' +
    '</div></div></section>';

  // CHIEF PARTNERLERE NE SAĞLAR
  h += '<section style="padding:52px 0"><div class="container">' +
    '<div class="section-head"><span class="eyebrow">Chief Partnerlerine Ne Sağlar?</span>' +
    '<p class="lead" style="max-width:680px">Chief, partnerlerini yalnızca satış kanalı olarak değil, ekosistemin değer üreten parçası olarak konumlandırır. Partnerlere ürün anlatımı, kullanım senaryoları, satış materyalleri, demo desteği, kurulum yaklaşımı, entegrasyon metodolojisi, proje yönetim çerçevesi ve müşteri başarı süreçlerinde destek sağlanır.</p></div>' +
    '<div class="partner-ne-saglar-list" style="max-width:760px">' +
    ['Kurumsal yapay zekâ platformunu mevcut müşteri portföyüne ekleme imkânı',
     'Satıştan uygulamaya kadar desteklenen iş ortaklığı yaklaşımı',
     'Müşteri başarısı ve kullanım sürekliliğine bağlı büyüme potansiyeli',
     'Farklı sektör ve iş süreçlerine uyarlanabilen çözüm mimarisi',
     'Performansa ve projeye katkıya göre yapılandırılabilen sürekli gelir modeli'].map(function(m) {
      return '<div class="partner-ne-saglar-item">' + esc(m) + '</div>';
    }).join('') +
    '</div></div></section>';

  // MÜŞTERİLER İÇİN DEĞER
  h += '<section class="bg-warm" style="padding:52px 0"><div class="container narrow">' +
    '<div class="section-head"><span class="eyebrow">Müşteriler İçin Değer</span></div>' +
    '<p style="font-size:16px;color:var(--t-body);line-height:1.8;margin-bottom:16px">Chief Partner Ağı, müşterilerin yalnızca merkezi bir yazılım sağlayıcıyla değil, aynı zamanda kendi sektörünü, yerel ihtiyaçlarını ve iş süreçlerini anlayan uzman iş ortaklarıyla çalışmasını sağlar.</p>' +
    '<p style="font-size:16px;color:var(--t-body);line-height:1.8;margin-bottom:16px">Bu yapı müşterilere daha hızlı keşif, daha doğru ihtiyaç analizi, daha sağlıklı entegrasyon, daha güçlü kullanıcı adaptasyonu ve sürdürülebilir destek avantajı sunar.</p>' +
    '<p style="font-size:16px;color:var(--t-body);line-height:1.8;margin:0">Chief\'in merkezi ürün mimarisi korunurken, partnerlerin yerel ve sektörel uzmanlığı projelerin başarı oranını artırır.</p>' +
    '</div></section>';

  // KİMLER OLABİLİR
  h += '<section style="padding:52px 0"><div class="container narrow">' +
    '<div class="section-head"><span class="eyebrow">Kimler Chief Partneri Olabilir?</span></div>' +
    '<p style="font-size:16px;color:var(--t-body);line-height:1.8;margin-bottom:16px">Chief Partner Ağı; teknoloji şirketleri, sistem entegratörleri, ERP ve CRM danışmanları, iş süreçleri danışmanları, sektör odaklı çözüm sağlayıcılar, saha operasyonu uzmanları, kurumsal satış ekipleri, teknik destek sağlayıcıları ve bölgesel büyüme ortakları için uygundur.</p>' +
    '<p style="font-size:16px;color:var(--t-body);line-height:1.8;margin:0">Chief ile birlikte çalışmak isteyen partnerlerde; kurumsal müşteri deneyimi, güvenilir iş yapma kültürü, sürdürülebilir destek yaklaşımı, teknik ve ticari sorumluluk bilinci ve müşteri başarısına odaklı çalışma anlayışı önceliklidir.</p>' +
    '</div></section>';

  // SSS
  var faqItems = [
    ['Chief partnerliği yalnızca satış ortaklığı mıdır?', 'Hayır. Chief partnerliği satışın yanında ihtiyaç analizi, çözüm kurgusu, entegrasyon, uygulama, eğitim, teknik destek, müşteri başarısı ve sürdürülebilir gelir ortaklığı gibi alanları da kapsayabilir.'],
    ['Chief partnerlerine sürekli gelir modeli sunulur mu?', 'Evet. Chief partnerliği, partnerin rolü, performansı, müşteri kazanımına katkısı ve müşteri başarısındaki sorumluluğuna bağlı olarak sürekli gelir potansiyeli sunabilir. Ticari detaylar iş birliği kapsamı ve sözleşme koşullarına göre netleştirilir.'],
    ['Her partner aynı sorumluluğu mu üstlenir?', 'Hayır. Partnerler kendi uzmanlık alanlarına göre Stratejik Bölge ve Ülke Partneri, Çözüm ve Uygulama Partneri veya Satış ve Uzmanlık Partneri olarak konumlanabilir.'],
    ['Chief hangi tür iş ortaklarıyla çalışır?', 'Teknoloji şirketleri, entegratörler, danışmanlık firmaları, sektör uzmanları, kurumsal satış ekipleri, bölgesel büyüme ortakları ve teknik destek sağlayıcıları Chief Partner Ağı için uygun adaylardır.'],
  ];

  h += '<section class="bg-warm" style="padding:52px 0"><div class="container narrow">' +
    '<div class="section-head"><span class="eyebrow">SSS</span></div>' +
    faqItems.map(function(f) {
      return '<details class="faq-item"><summary>' + esc(f[0]) + '</summary><p>' + esc(f[1]) + '</p></details>';
    }).join('') +
    '</div></section>';

  // FINAL CTA
  h += '<section class="final-cta"><div class="container">' +
    '<h2>Chief ile birlikte büyüyün.</h2>' +
    '<p class="lead">Chief ile birlikte işletmelerin yapay zekâ destekli dönüşümünde yer almak, yeni pazarlarda büyümek, mevcut müşteri portföyünüze güçlü bir kurumsal yapay zekâ platformu eklemek ve sürdürülebilir partner geliri oluşturmak için bizimle iletişime geçin.</p>' +
    '<div class="cta-row">' +
    '<a href="#/demo-talep-et" class="btn btn-clay btn-lg">Chief Partneri Olun ' + ico('arrow',16) + '</a>' +
    '<a href="#/demo-talep-et" class="btn on-dark-ghost btn-lg">Ekosistemimize Katılın</a>' +
    '</div></div></section>';

  return h;
}

/* ================================================================
   KAYNAKLAR
   ================================================================ */
function renderKaynaklar() {
  var sections = [
    { icon:'doc',    title:'Blog / İçgörüler',             desc:'Kurumsal AI, süreç yönetimi, operasyon görünürlüğü, entegrasyon ve yönetim karar desteği üzerine içerikler.',              href:'#/blog' },
    { icon:'flow',   title:'Kullanım Senaryoları',          desc:'Chief\'e hangi iş akışından başlayabileceğinizi gösteren örnek senaryolar.',                                               href:'#/kullanim-alanlari/kullanim-senaryolari' },
    { icon:'chat',   title:'Sık Sorulan Sorular',           desc:'Chief\'in konumlandırması, entegrasyon, fiyatlandırma, güvenlik, on-premise ve kullanım yoğunluğu hakkında yanıtlar.',      href:'#/kaynaklar/sss' },
    { icon:'layers', title:'Dokümanlar',                    desc:'Ürün broşürleri, teknik açıklamalar, entegrasyon notları ve kurulum rehberleri.',                                           href:'#/kaynaklar/dokumanlar' },
    { icon:'shield', title:'Güvenlik ve Veri Yaklaşımı',   desc:'Rol bazlı yetkilendirme, veri erişimi, denetim izi, insan onayı ve özel kurulum yaklaşımı.',                               href:'#/platform/guvenlik-ve-veri-yaklasimi' },
    { icon:'phone',  title:'İletişim',                     desc:'Chief ekibiyle görüşmek, demo talep etmek veya partnerlik başvurusu yapmak için iletişim.',                                  href:'#/demo-talep-et' },
  ];

  var h = '<section class="detail-hero"><div class="container">' +
    crumb(['Kaynaklar']) +
    '<span class="eyebrow">KAYNAKLAR</span>' +
    '<h1 style="margin-top:16px;max-width:720px">Chief\'i daha yakından tanıyın</h1>' +
    '<p class="lead" style="max-width:660px">Kullanım senaryoları, sık sorulan sorular, güvenlik ve veri yaklaşımı, ürün dokümanları ve iş süreçleri içgörüleriyle Chief\'in işletmenizde nasıl değer üretebileceğini keşfedin.</p>' +
    '</div></section>';

  h += '<section class="tight"><div class="container"><div class="cards-grid">';
  sections.forEach(function(s, n) {
    h += '<a class="card" href="' + s.href + '">' +
      '<div class="card-ico ' + (n%3===1?'sage':n%3===2?'blue':'') + '">' + ico(s.icon, 22) + '</div>' +
      '<h4>' + esc(s.title) + '</h4>' +
      '<p>' + esc(s.desc) + '</p>' +
      '<span class="card-foot btn-link">İncele ' + ico('arrow',15) + '</span></a>';
  });
  h += '</div></div></section>' + finalCTA();
  return h;
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


const SEKTORLER_V2_DATA = {
  'uretim-ve-sanayi': {
    eyebrow: 'Sektörlere Göre',
    cardTitle: 'Üretim ve Sanayi',
    cardDesc: 'Üretim ve sanayi işletmelerinde teklif, sipariş, teknik doküman, kapasite, malzeme, kalite, termin ve finansal kapanış farklı sistemlerde dağılabilir.',
    h1: 'Üretim ve Sanayi',
    lead: 'Chief, üretim ve sanayi işletmelerinde dağınık sinyalleri mevcut ERP/MRP/MES yapısını değiştirmeden ortak süreç, görev ve yönetim görünürlüğüne bağlar.',
    bolumler: [
      { baslik: 'Tekliften üretime kesintisiz akış', metin: 'Onaylanan teklif, teknik gereksinimleri ve müşteri taahhütleriyle birlikte üretim planına aktarılır. Kapsam kaybı, yeniden veri girişi ve iletişim kopukluğu azalır. Her aşamanın sorumlusu, SLA\'sı ve kapanış kriteri belirlenir.' },
      { baslik: 'Kapasite ve termin görünürlüğü', metin: 'Makine, hat, vardiya ve personel kapasitesi sipariş yüküyle birlikte değerlendirilir. Termin riski önceden tespit edilir; darboğaz oluşmadan aksiyon başlatılır. Üretim ilerlemesi, sapma ve kök neden yönetim ekranında izlenir.' },
      { baslik: 'Kalite ve tedarik takibi', metin: 'Kalite uygunsuzlukları kayıt altına alınır, kök neden belirlenir ve düzeltici faaliyet sürece bağlanır. Kritik malzeme ve yedek parça eksiklikleri oluşmadan tedarik aksiyonu başlatılır.' },
      { baslik: 'Yönetim görünürlüğü', metin: 'Üretim performansı, termin uyumu, fire oranı, kapasite kullanımı ve malzeme durumu yönetim ekranında gerçek zamanlı izlenir. Haftalık brifing otomatik hazırlanır.' },
    ],
    caseStudy: {
      logo:'logo-tak.png', company:'TAK-Umwelt GmbH', industry:'Çevre Teknolojisi · Almanya',
      quote:'"Periyodik bakım tarihleri Excel\'de takip ediliyordu, arada kayıyor ve gecikiyordu. Chief ile bakım takvimi otomatik, arıza geldiğinde iş emri dakikalar içinde hazır, ekipman geçmişiyle."',
      results:[{n:'-%71',l:'Plansız arıza süresi'},{n:'%100',l:'Zamanında bakım'},{n:'9 dk',l:'Arızadan iş emirine'},{n:'Tam',l:'Ekipman geçmişi'}],
    },
  },
  'hizmet-ve-saha-operasyonlari': {
    eyebrow: 'Sektörlere Göre',
    cardTitle: 'Hizmet ve Saha Operasyonları',
    cardDesc: 'Saha ekiplerini, teknik servis kayıtlarını, bakım takvimlerini ve kapanış kanıtlarını tek akışta yönetin.',
    h1: 'Hizmet ve Saha Operasyonları',
    lead: 'Chief, sahadan gelen her sinyali iş emrine, her iş emrini kanıtlı kapanışa dönüştürür. Ekip konumu, yetkinlik, malzeme ve SLA birlikte değerlendirilir.',
    bolumler: [
      { baslik: 'Talep gelir, kaybolmaz', metin: 'WhatsApp, e-posta, telefon veya portal üzerinden gelen servis talepleri tek akışa alınır. Öncelik, lokasyon, ekipman geçmişi ve SLA\'ya göre iş emri oluşturulur; doğru teknisyene atanır.' },
      { baslik: 'Ekip ve rota optimizasyonu', metin: 'Yetkinlik, bölge, iş yükü, takvim ve malzeme ihtiyacı birlikte değerlendirilir. Rota önerisi sunulur; son karar koordinatöre aittir. Müşteriye otomatik bildirim gönderilir.' },
      { baslik: 'Kanıtlı kapanış', metin: 'Fotoğraf, form, imza, ölçüm veya müşteri onayıyla her iş emri belgelenmiş kapanır. Eksik kanıt açık iş bırakmaz. Servis raporu otomatik oluşturulur.' },
      { baslik: 'Tekrar eden sorunlar görünür olur', metin: 'Aynı ekipman, semptom veya lokasyondaki tekrar eden arızalar tespit edilir. Kök neden analizi ve iyileştirme aksiyonu sürece bağlanır.' },
    ],
    caseStudy: {
      logo:'logo-tak.png', company:'TAK-Umwelt GmbH', industry:'Çevre Teknolojisi · Almanya',
      quote:'"Servis talepleri telefon, e-posta ve portaldan aynı anda geliyordu. Her birini manuel takibe almak ekibe büyük yük bindiriyordu. Chief ile hiçbir talep kaybolmuyor, her iş emrinin durumu gerçek zamanlı görünüyor."',
      results:[{n:'-%65',l:'Manuel veri girişi'},{n:'%100',l:'Talep takip görünürlüğü'},{n:'-%38',l:'Yanıt süresi'},{n:'0',l:'Kayıp talep'}],
    },
  },
  'perakende-ve-dagitim': {
    eyebrow: 'Sektörlere Göre',
    cardTitle: 'Perakende ve Dağıtım',
    cardDesc: 'Müşteri taleplerini, tedarik zincirini, stok yönetimini ve lokasyon operasyonlarını birleştirin.',
    h1: 'Perakende ve Dağıtım',
    lead: 'Chief, perakende ve dağıtım işletmelerinde satıştan teslikata, müşteri talebinden tedarike uzanan akışları mevcut sistemleri değiştirmeden tek görünüme bağlar.',
    bolumler: [
      { baslik: 'Satış ve teklif akışı', metin: 'Farklı kanallardan gelen talepler — web, telefon, saha, bayi — tek akışta toplanır. Fırsat önceliklendirilir, teklif hazırlanır, onay zinciri işler. Kayıp fırsat ve sahipsiz talep azalır.' },
      { baslik: 'Stok ve tedarik görünürlüğü', metin: 'Hangi ürünün hangi lokasyonda, ne zaman kritik olacağı önceden görülür. Tedarik aksiyonu erken başlatılır; son anda eksiklik ve operasyon kesintisi önlenir.' },
      { baslik: 'Teslimat ve saha koordinasyonu', metin: 'Sipariş teyidinden teslimat planlamasına, saha ekibi görevlendirmesinden kapanış kanıtına kadar tüm süreç izlenebilir. Müşteriye otomatik bildirim, teslimat belgesi ve fatura hazırlığı bağlantılıdır.' },
      { baslik: 'Müşteri deneyimi ve geri bildirim', metin: 'Servis sonrası memnuniyet takip edilir. Kritik şikayetler anında tespit edilir; aksiyon sürece bağlanır. Tekrar eden tema ve kök nedenler yönetim içgörüsüne dönüşür.' },
    ],
    caseStudy: {
      logo:'logo-termoinduktion.jpg', company:'Termo İndüksiyon', industry:'Endüstriyel Isıl İşlem · 1981\'den beri',
      quote:'"Satış ekibimizin ziyaret notları farklı kişisel dosyalara dağılmıştı. Chief ile tüm satış hattı, toplantı çıktıları ve teklif süreçleri tek ekranda görünür. Artık müdür sahadan dönen temsilciyi arayıp sormak zorunda değil."',
      results:[{n:'%98',l:'Ziyaret notu kayıt oranı'},{n:'7/24',l:'Satış hattı görünürlüğü'},{n:'-%40',l:'Raporlama hazırlık süresi'},{n:'1 ekran',l:'Tüm operasyon'}],
    },
  },
  'kamu-ve-yerel-yonetimler': {
    eyebrow: 'Sektörlere Göre',
    cardTitle: 'Kamu ve Yerel Yönetimler',
    cardDesc: 'Kurumsal süreçleri, başvuru takibini, onay akışlarını ve hizmet kapanışını mevzuat uyumuyla yönetin.',
    h1: 'Kamu ve Yerel Yönetimler',
    lead: 'Chief, kamu kurumları ve yerel yönetimlerde vatandaş başvurularını, iç onay süreçlerini, saha hizmetlerini ve yönetim görünürlüğünü KVKK ve GDPR uyumuyla birlikte yönetir.',
    bolumler: [
      { baslik: 'Başvuru ve talep yönetimi', metin: 'Vatandaş veya kurum başvuruları farklı kanallardan tek akışa alınır. Her başvurunun türü, önceliği, sorumlu birimi ve hedef yanıt süresi belirlenir. Geç yanıt ve sahipsiz talep azalır.' },
      { baslik: 'Onay ve imza süreçleri', metin: 'İç onay zincirleri Chief içinde tanımlanabilir. Kim hangi belgeyi, hangi seviyede onaylar? SLA dışına çıkan onaylar eskalasyona alınır. Tüm işlemler denetim izine bağlanır.' },
      { baslik: 'Saha hizmetleri ve altyapı', metin: 'Bakım, onarım ve altyapı işleri iş emriyle planlanır. Ekip ataması, zaman penceresi ve kapanış kanıtı (fotoğraf, form, imza) ile her iş belgelenir. Yönetim hangi işin ne durumda olduğunu anlık görür.' },
      { baslik: 'Güvenlik ve KVKK uyumu', metin: 'On-premise ve private cloud kurulum seçenekleri mevcuttur. Veri kamu altyapısında kalır. Rol bazlı erişim, denetim kayıtları ve veri maskeleme kurumsal uyumluluk gereksinimlerini karşılar.' },
    ],
    caseStudy: {
      logo:'logo-tak.png', company:'TAK-Umwelt GmbH', industry:'Çevre Teknolojisi · Almanya',
      quote:'"Almanya operasyonumuz için GDPR uyumluluğu kritikti. Chief\'in on-prem kurulumu ve veri izolasyonu, hukuk biriminin onayını ilk görüşmede aldı."',
      results:[{n:'GDPR',l:'Almanya operasyonu onaylı'},{n:'%100',l:'On-prem veri izolasyonu'},{n:'3 hafta',l:'Devreye alma süresi'},{n:'0',l:'Sistem değişikliği'}],
    },
  },
  'kurumsal-hizmetler': {
    eyebrow: 'Sektörlere Göre',
    cardTitle: 'Kurumsal Hizmetler',
    cardDesc: 'Proje yönetimini, müşteri onay süreçlerini, zaman takibini ve faturalamayı tek platformda birleştirin.',
    h1: 'Kurumsal Hizmetler',
    lead: 'Chief, danışmanlık, hukuk, finans ve diğer kurumsal hizmet firmalarında müşteri projelerini, onay süreçlerini, kaynak planlamasını ve finansal kapanışı tek akışta yönetir.',
    bolumler: [
      { baslik: 'Müşteri talebi ve proje başlangıcı', metin: 'Yeni müşteri talebi veya proje başlangıcı farklı kanallardan geldiğinde Chief ihtiyacı sınıflandırır, eksik bilgiyi tamamlar ve ilgili ekibe atama başlatır. Sahipsiz fırsat ve yavaş ilk yanıt azalır.' },
      { baslik: 'Proje yönetimi ve onay akışı', metin: 'Proje kapsamı, dönüm noktaları, sorumlu ekip ve müşteri onay adımları Chief içinde izlenir. Teklif, sözleşme, kapanış ve hakediş belgeleri aynı proje dosyasında toplanır.' },
      { baslik: 'Zaman ve kaynak takibi', metin: 'Ekip çalışma saatleri, uzman yoğunluğu ve proje bazlı karlılık görünür olur. Overcapacity ve beklenen gecikme önceden tespit edilir; müşteri iletişimi zamanında planlanır.' },
      { baslik: 'Faturalama ve tahsilat', metin: 'Tamamlanan proje adımları, müşteri onayları ve hakediş dönümleri otomatik olarak fatura hazırlığına bağlanır. Vadesi yaklaşan alacaklar ve tahsilat riskleri yönetim ekranında görünür.' },
    ],
    caseStudy: {
      logo:'logo-ikon.png', company:'İkon Araştırma', industry:'Pazar Araştırması & Danışmanlık',
      quote:'"Saha ekibinin anket süreçleri, proje ilerlemeleri ve verilen tekliflerin takibi e-posta ve WhatsApp karmaşasındaydı. Chief ile saha koordinasyonu ve teklif yönetimi tek platforma taşındı."',
      results:[{n:'7/24',l:'Saha ekibi görünürlüğü'},{n:'%100',l:'Teklif takip oranı'},{n:'-%55',l:'Koordinasyon e-postası'},{n:'2 hafta',l:'Devreye alma süresi'}],
    },
  },
  'kobi-ve-buyuyen-isletmeler': {
    eyebrow: 'Sektörlere Göre',
    cardTitle: 'KOBİ ve Büyüyen İşletmeler',
    cardDesc: 'Büyük ERP yatırımı yapmadan operasyonel görünürlük, süreç disiplini ve yönetim kontrolü kazanın.',
    h1: 'KOBİ ve Büyüyen İşletmeler',
    lead: 'Chief, büyüyen işletmelerin mevcut araçlarını değiştirmeden operasyonel görünürlük, süreç disiplini ve ölçeklenebilir yönetim altyapısı kazanmasını sağlar.',
    bolumler: [
      { baslik: 'Hızlı başlangıç, ölçeklenebilir yapı', metin: 'Chief, büyük ERP projesi veya uzun kurulum süreci olmadan 3-4 haftada devreye alınabilir. Tek bir akışla başlanır; işletme büyüdükçe yeni süreçler eklenir. Başlangıç maliyeti düşük, büyüme hızlı.' },
      { baslik: 'Mevcut araçlarla çalışır', metin: 'WhatsApp, e-posta, Excel, web formu ve varsa CRM veya ERP sistemiyle birlikte çalışır. Araçlar değişmez; Chief aralarında süreç ve karar katmanı oluşturur. Ekip alıştığı kanalları kullanmaya devam eder.' },
      { baslik: 'Sahipsiz iş kalmaz', metin: 'Her talep, görev ve onayın sahibi, önceliği ve hedef tarihi belirlenir. SLA dışına çıkan işler görünür olur. Yönetici haftalık rapor beklemeden ne durumda olduğunu anlık görür.' },
      { baslik: 'Büyüdükçe güçlenir', metin: 'Ekip sayısı arttıkça, süreç karmaşıklığı büyüdükçe Chief daha fazla değer üretir. Yeni departman, yeni kanal veya yeni entegrasyon; büyük sistem değişikliği olmadan eklenebilir.' },
    ],
    caseStudy: {
      logo:'logo-ikon.png', company:'İkon Araştırma', industry:'Pazar Araştırması & Danışmanlık',
      quote:'"NPS skorlarımızın düştüğünü görüyorduk ama hangi sürecin neden etkilediğini anlayamıyorduk. Chief ile geri bildirim konu, sorumlu ve aksiyona bağlandı; artık skor raporu değil, kapalı döngü görüyoruz."',
      results:[{n:'Anlık',l:'Kritik şikayet uyarısı'},{n:'%100',l:'Aksiyon takibi'},{n:'-%50',l:'Şikayet kapanış süresi'},{n:'Kapalı döngü',l:'Her geri bildirim'}],
    },
  },
};

function renderSektorlerV2Page(slug) {
  var d = SEKTORLER_V2_DATA[slug];
  if (!d) return _stub('Sektörler', slug);

  var cs = d.caseStudy;
  var h = '<section class="detail-hero"><div class="container">' +
    crumb(['Kullanım Alanları', '#/kullanim-alanlari'], ['Sektörlere Göre', '#/kullanim-alanlari/sektorlere-gore'], [d.cardTitle]) +
    '<div style="display:grid;grid-template-columns:1.1fr 1fr;gap:48px 56px;align-items:start">' +
    '<div><span class="eyebrow">' + esc(d.eyebrow) + '</span>' +
    '<h1 style="margin-top:16px">' + esc(d.h1) + '</h1>' +
    '<p class="lead">' + esc(d.lead) + '</p></div>' +
    '<div><div class="cs-block" style="box-shadow:var(--sh-lg)">' +
    '<div class="cs-header"><div class="sp-logo-img-wrap"><img src="' + cs.logo + '" alt="' + esc(cs.company) + '" class="sp-logo-img"></div>' +
    '<div><div class="sp-company">' + esc(cs.company) + '</div><div class="sp-industry">' + esc(cs.industry) + '</div></div></div>' +
    '<blockquote class="sp-quote">' + esc(cs.quote) + '</blockquote>' +
    '<div class="sp-metrics">' + cs.results.map(function(r){ return '<div class="sp-metric"><span class="sp-num">' + esc(r.n) + '</span><span class="sp-label">' + esc(r.l) + '</span></div>'; }).join('') + '</div>' +
    '</div></div></div>' +
    '</div></section>';

  d.bolumler.forEach(function(b, i) {
    var bg = i % 2 === 0 ? 'bg-warm' : '';
    h += '<section class="' + bg + '" style="padding:52px 0"><div class="container narrow platform-bolum">' +
      '<h3>' + esc(b.baslik) + '</h3>' +
      b.metin.split('\\n').map(function(p){ return p.trim() ? '<p>' + esc(p.trim()) + '</p>' : ''; }).join('') +
      '</div></section>';
  });

  return h + finalCTA();
}


function renderSektorlerV2Listing() {
  var slugs = Object.keys(SEKTORLER_V2_DATA);
  var h = '<section class="detail-hero"><div class="container">' +
    crumb(['Kullanım Alanları', '#/kullanim-alanlari'], ['Sektörlere Göre']) +
    '<span class="eyebrow">SEKTÖRLERE GÖRE</span>' +
    '<h1 style="margin-top:16px;max-width:720px">Sektörünüze özel Chief kullanımı</h1>' +
    '<p class="lead" style="max-width:620px">Chief\'in farklı sektörlerde nasıl değer ürettiğini keşfedin. Her sektör için özelleşmiş kullanım senaryoları ve başlangıç noktaları.</p>' +
    '</div></section>';
  h += '<section class="tight"><div class="container"><div class="cards-grid">';
  var icons = {'uretim-ve-sanayi':'factory','hizmet-ve-saha-operasyonlari':'wrench','perakende-ve-dagitim':'truck','kamu-ve-yerel-yonetimler':'shield','kurumsal-hizmetler':'users','kobi-ve-buyuyen-isletmeler':'bolt'};
  slugs.forEach(function(slug, n) {
    var d = SEKTORLER_V2_DATA[slug];
    h += '<a class="card" href="#/kullanim-alanlari/sektorlere-gore/' + slug + '">' +
      '<div class="card-ico ' + (n%3===1?'sage':n%3===2?'blue':'') + '">' + ico(icons[slug]||'flow', 22) + '</div>' +
      '<h4>' + esc(d.cardTitle) + '</h4><p>' + esc(d.cardDesc) + '</p>' +
      '<span class="card-foot btn-link">İncele ' + ico('arrow',15) + '</span></a>';
  });
  h += '</div></div></section>' + finalCTA();
  return h;
}


/* ================================================================
   İŞLETME ÖLÇEĞİNE GÖRE
   ================================================================ */
const ISLETME_OLCEGI_DATA = {
  'mikro-isletme-girisim': {
    cardTitle: 'Mikro İşletme / Girişim',
    cardDesc: 'Freelance çalışanlar, yeni kurulan ekipler, 1-5 çalışan mikro işletmeler ve ilk süreçlerini düzenlemek isteyen girişimler.',
    h1: 'Mikro İşletme / Girişim',
    lead: 'Büyük ERP veya CRM yatırımı yapmadan; gelen talepleri toplamak, mesajdan görev çıkarmak, teklif ve takip akışı kurmak için Chief\'le başlayın.',
    bolumler: [
      { baslik: 'Kimler için?', metin: 'Freelance çalışanlar, yeni kurulan ekipler, 1-5 çalışan mikro işletmeler ve ilk operasyonel süreçlerini düzenlemek isteyen girişimler için tasarlanmıştır.' },
      { baslik: 'Chief ne sağlar?', metin: 'Gelen talepleri toplama ve sınıflandırma.\nMesajdan görev çıkarma ve takip.\nBasit teklif ve onay akışı.\nKısa yönetim özeti.\nTemel görev ve onay düzeni.' },
      { baslik: 'Nasıl başlanır?', metin: 'Mevcut araçlarınızı — WhatsApp, e-posta, web formu — değiştirmeden Chief\'e bağlayın. Tek bir akışla başlayın; sonuçları görünce genişletin. Kurulum haftalar içinde tamamlanır.' },
      { baslik: 'Büyüdükçe ne olur?', metin: 'Ekip büyüdükçe yeni süreçler, kullanıcılar ve entegrasyonlar eklenebilir. Başlangıçta kullandığınız akışlar değişmez; üstüne yenileri gelir. Büyük sistem değişikliği gerekmez.' },
    ],
    caseStudy: {
      logo:'logo-ikon.png', company:'İkon Araştırma', industry:'Pazar Araştırması & Danışmanlık',
      quote:'"Saha ekibinin anket süreçleri, proje ilerlemeleri ve verilen tekliflerin takibi e-posta ve WhatsApp karmaşasındaydı. Chief ile saha koordinasyonu ve teklif yönetimi tek platforma taşındı."',
      results:[{n:'7/24',l:'Saha ekibi görünürlüğü'},{n:'%100',l:'Teklif takip oranı'},{n:'-%55',l:'Koordinasyon e-postası'},{n:'2 hafta',l:'Devreye alma süresi'}],
    },
  },
  'kucuk-isletme-kobi': {
    cardTitle: 'Küçük İşletme / KOBİ',
    cardDesc: 'İşini oturtmuş, büyüyen ekipler; yaklaşık 5-20 çalışan yapılar. Düzenli satış, teklif, takip ve temel operasyon akışı olan işletmeler.',
    h1: 'Küçük İşletme / KOBİ',
    lead: 'Satış, teklif, operasyon ve temel saha akışlarınızı tek platformda yönetin. Departmanlar arasında bilgi kaybı olmadan büyüyün.',
    bolumler: [
      { baslik: 'Kimler için?', metin: 'İşini oturtmuş, büyüyen ekipler; yaklaşık 5-20 çalışan yapılar. Düzenli satış, teklif, takip ve temel operasyon akışı olan işletmeler için uygundur.' },
      { baslik: 'Chief ne sağlar?', metin: 'Satış ve teklif takibi.\nOperasyon görevleri ve atama.\nTemel saha planlama.\nFatura ve tahsilat takibi.\nDepartman bazlı görünürlük.' },
      { baslik: 'Neden önemli?', metin: 'Bu ölçekteki işletmelerde en büyük sorun bilginin kişisel hafızalarda ve mesajlarda kalmasıdır. Chief bu bilgiyi göreve, sorumluya ve sürece dönüştürür. Yönetici haftalık rapor beklemeden ne durumda olduğunu anlık görür.' },
      { baslik: 'Devreye alma', metin: 'Mevcut araçlarla çalışır: WhatsApp, e-posta ve varsa CRM veya ERP. Tek bir süreçle başlanır, büyüdükçe genişlenir. Ortalama 3-4 haftada ilk akış canlıya alınır.' },
    ],
    caseStudy: {
      logo:'logo-termoinduktion.jpg', company:'Termo İndüksiyon', industry:'Endüstriyel Isıl İşlem · 1981\'den beri',
      quote:'"Satış ekibimizin ziyaret notları farklı kişisel dosyalara dağılmış, doğru veriye anında ulaşmak güçleşmişti. Chief ile tüm satış hattı, toplantı çıktıları ve teklif süreçleri tek ekranda görünür."',
      results:[{n:'%98',l:'Ziyaret notu kayıt oranı'},{n:'7/24',l:'Satış hattı görünürlüğü'},{n:'-%40',l:'Raporlama hazırlık süresi'},{n:'1 ekran',l:'Tüm operasyon'}],
    },
  },
  'orta-olcekli-isletme': {
    cardTitle: 'Orta Ölçekli İşletme',
    cardDesc: 'Yaklaşık 20-100 çalışan, ciddi iş hacmi olan ve birden fazla süreci birlikte yöneten ticari şirketler.',
    h1: 'Orta Ölçekli İşletme',
    lead: 'Satış, operasyon, saha, üretim ve finans süreçlerini entegrasyon ve onay akışlarıyla birlikte yönetin. Çoklu departman görünürlüğü ve yönetim brifingleriyle büyük kurumsal altyapı gerektirmeden büyüyün.',
    bolumler: [
      { baslik: 'Kimler için?', metin: 'Yaklaşık 20-100 çalışan, ciddi iş hacmi olan ve birden fazla süreci birlikte yöneten ticari şirketler. Satış, operasyon, saha/servis, üretim veya planlama süreçlerini birlikte yürüten işletmeler için uygundur.' },
      { baslik: 'Chief ne sağlar?', metin: 'Satış, operasyon, saha, üretim ve finans süreçlerinin birlikte yönetimi.\nEntegrasyonlu süreç akışları.\nOnay ve SLA takibi.\nDashboard ve yönetim brifingleri.\nKullanım yoğunluğuna göre ölçeklenen yapı.' },
      { baslik: 'Bu ölçeğin ana sorunları', metin: 'Bu büyüklükteki işletmelerde bilgi birden fazla sistemde dağılır, ekipler arası devir teslim kopuktur ve yönetim gerçek zamanlı görünürlük için haftalarca rapor bekler. Chief bu üç sorunu aynı anda çözer.' },
      { baslik: 'Entegrasyon ve güvenlik', metin: 'Mevcut ERP, CRM ve muhasebe sistemleriyle birlikte çalışır. SSO, rol bazlı yetkilendirme ve denetim izi standart olarak gelir. KVKK ve GDPR uyumu için on-premise seçeneği mevcuttur.' },
    ],
    caseStudy: {
      logo:'logo-tak.png', company:'TAK-Umwelt GmbH', industry:'Çevre Teknolojisi · Almanya',
      quote:'"40+ lokasyondaki saha işlerinin takibini tek Chief kurulumundan yönetiyoruz. Her iş emrinin durumu, sahibi ve kapanış kanıtı gerçek zamanlı görünür."',
      results:[{n:'40+',l:'Lokasyon tek akışta'},{n:'%100',l:'İş emri görünürlüğü'},{n:'-%38',l:'Yanıt süresi'},{n:'0',l:'Kanıtsız kapanış'}],
    },
  },
  'buyuk-kurumsal-grup-sirketleri': {
    cardTitle: 'Büyük Kurumsal / Grup Şirketleri',
    cardDesc: '100+ çalışan, çok lokasyonlu, çok sistemli, global veya holding yapıları. İleri entegrasyon, güvenlik ve ölçeklenebilirlik ihtiyacı yüksektir.',
    h1: 'Büyük Kurumsal / Grup Şirketleri',
    lead: 'Çok sistemli entegrasyon, rol bazlı yetkilendirme, private cloud veya on-premise kurulum ve yönetim katmanıyla büyük kurumsal yapılara özel Chief konumlandırması.',
    bolumler: [
      { baslik: 'Kimler için?', metin: '100+ çalışan, çok lokasyonlu, çok sistemli, global veya holding yapıları. İleri entegrasyon, güvenlik ve ölçeklenebilirlik ihtiyacı yüksek olan kurumsal organizasyonlar için uygundur.' },
      { baslik: 'Chief ne sağlar?', metin: 'Çok sistemli entegrasyon (SAP, Oracle, özel ERP).\nGranüler rol bazlı yetkilendirme.\nPrivate cloud veya on-premise seçenekleri.\nYönetim katmanı ve karar destek.\nÇoklu departman ve lokasyon görünürlüğü.' },
      { baslik: 'Kurumsal güvenlik ve uyumluluk', metin: 'Verinin kendi altyapısında kalması gereken kurumlar için on-premise ve private cloud kurulum seçenekleri sunulmaktadır. KVKK ve GDPR uyumluluğu sertifikalandırılabilir. Rol bazlı erişim, denetim kayıtları ve veri maskeleme standart olarak gelir.' },
      { baslik: 'Proje tabanlı yaklaşım', metin: 'Büyük kurumsal ve grup şirketleri için fiyat; altyapı, kullanıcı, süreç hacmi, model tercihi, entegrasyon ve bakım kapsamına göre proje bazlı belirlenir. Kurumsal görüşme ile başlayın.' },
    ],
    caseStudy: {
      logo:'logo-tak.png', company:'TAK-Umwelt GmbH', industry:'Çevre Teknolojisi · Almanya',
      quote:'"Almanya operasyonumuz için GDPR uyumluluğu kritikti. Chief\'in on-prem kurulumu ve veri izolasyonu, hukuk biriminin onayını ilk görüşmede aldı."',
      results:[{n:'GDPR',l:'Almanya operasyonu onaylı'},{n:'%100',l:'On-prem veri izolasyonu'},{n:'3 hafta',l:'Devreye alma süresi'},{n:'0',l:'Sistem değişikliği'}],
    },
  },
};

function renderIsletmeOlcegiPage(slug) {
  var d = ISLETME_OLCEGI_DATA[slug];
  if (!d) return _stub('İşletme Ölçeğine Göre', slug);
  var cs = d.caseStudy;
  var h = '<section class="detail-hero"><div class="container">' +
    crumb(['Kullanım Alanları', '#/kullanim-alanlari'], ['İşletme Ölçeğine Göre', '#/kullanim-alanlari/isletme-olcegine-gore'], [d.cardTitle]) +
    '<div style="display:grid;grid-template-columns:1.1fr 1fr;gap:48px 56px;align-items:start">' +
    '<div><span class="eyebrow">İŞLETME ÖLÇEĞİNE GÖRE</span>' +
    '<h1 style="margin-top:16px">' + esc(d.h1) + '</h1>' +
    '<p class="lead">' + esc(d.lead) + '</p></div>' +
    '<div><div class="cs-block" style="box-shadow:var(--sh-lg)">' +
    '<div class="cs-header"><div class="sp-logo-img-wrap"><img src="' + cs.logo + '" alt="' + esc(cs.company) + '" class="sp-logo-img"></div>' +
    '<div><div class="sp-company">' + esc(cs.company) + '</div><div class="sp-industry">' + esc(cs.industry) + '</div></div></div>' +
    '<blockquote class="sp-quote">' + esc(cs.quote) + '</blockquote>' +
    '<div class="sp-metrics">' + cs.results.map(function(r){ return '<div class="sp-metric"><span class="sp-num">' + esc(r.n) + '</span><span class="sp-label">' + esc(r.l) + '</span></div>'; }).join('') + '</div>' +
    '</div></div></div></div></section>';
  d.bolumler.forEach(function(b, i) {
    h += '<section class="' + (i%2===0?'bg-warm':'') + '" style="padding:52px 0"><div class="container narrow platform-bolum"><h3>' + esc(b.baslik) + '</h3>';
    b.metin.split('\\n').forEach(function(line){ if (line.trim()) h += '<p>' + esc(line.trim()) + '</p>'; });
    h += '</div></section>';
  });
  return h + finalCTA();
}

function renderIsletmeOlcegiListing() {
  var slugs = Object.keys(ISLETME_OLCEGI_DATA);
  var icons = {'mikro-isletme-girisim':'bolt','kucuk-isletme-kobi':'users','orta-olcekli-isletme':'bars','buyuk-kurumsal-grup-sirketleri':'shield'};
  var h = '<section class="detail-hero"><div class="container">' +
    crumb(['Kullanım Alanları', '#/kullanim-alanlari'], ['İşletme Ölçeğine Göre']) +
    '<span class="eyebrow">İŞLETME ÖLÇEĞİNE GÖRE</span>' +
    '<h1 style="margin-top:16px;max-width:720px">İşletme ölçeğinize göre Chief</h1>' +
    '<p class="lead" style="max-width:620px">Mikro girişimden büyük kurumsal yapılara kadar her ölçek için Chief\'in nasıl değer ürettiğini keşfedin.</p>' +
    '</div></section><section class="tight"><div class="container"><div class="cards-grid cols-2">';
  slugs.forEach(function(slug, n) {
    var d = ISLETME_OLCEGI_DATA[slug];
    h += '<a class="card" href="#/kullanim-alanlari/isletme-olcegine-gore/' + slug + '">' +
      '<div class="card-ico ' + (n%2===1?'sage':'') + '">' + ico(icons[slug]||'users', 22) + '</div>' +
      '<h4>' + esc(d.cardTitle) + '</h4><p>' + esc(d.cardDesc) + '</p>' +
      '<span class="card-foot btn-link">İncele ' + ico('arrow',15) + '</span></a>';
  });
  h += '</div></div></section>' + finalCTA();
  return h;
}


/* ================================================================
   KULLANIM SENARYOLARI
   ================================================================ */
const KULLANIM_SENARYOLARI_DATA = {
  'gelen-talebi-yakala-ve-tamamla': {
    cat: 'TALEP, SATIŞ VE TEKLİF',
    h1: 'Gelen Talebi Yakala ve Tamamla',
    lead: 'E-posta, WhatsApp, web formu veya CRM üzerinden gelen talebi anlayın; eksik bilgiyi doğal diyalogla tamamlayın ve teklif hazırlamaya hazır, yapılandırılmış bir kayda dönüştürün.',
    problem: 'Gelen talepler çoğu zaman farklı kanallara dağılır, eksik bilgiyle gelir ve çalışanların yeniden veri girmesini gerektirir. Bu durum geç yanıt, yanlış sınıflandırma, kayıp fırsat ve teklif süresinin uzamasıyla sonuçlanır.',
    steps: ['Talebi yakalar. E-posta, WhatsApp, web formu, CRM veya diğer bağlı kanallardan gelen kaydı alır ve kaynak bağlantısını korur.','Niyeti ve bağlamı belirler. Talep türünü, müşteriyi, ürün veya hizmeti, lokasyonu, aciliyeti ve ilgili süreci sınıflandırır.','Mevcut veriyi tamamlar. CRM, ERP, ürün kataloğu, sözleşme veya geçmiş iletişim kayıtlarından ilgili bağlamı getirir.','Eksik bilgiyi sorar. Teklif veya işlem için gerekli alanlar eksikse müşteriye ya da iç kullanıcıya doğal diyalogla hedefli sorular yöneltir.','Yapılandırılmış kayıt oluşturur. Talep özeti, ihtiyaçlar, ekler, öncelik, son tarih ve eksik bilgi geçmişini tek dosyada toplar.','Doğru ekibe yönlendirir. Bölge, ürün, müşteri tipi, uzmanlık ve SLA kuralına göre sorumlu kişiyi veya ekibi atar ve takibi başlatır.'],
    ciktilar: ['Eksiksiz ve standartlaştırılmış talep kaydı','Tekrar veri girişinin azalması ve kaynak mesajın korunması','Talep türü, öncelik, sorumlu ve hedef yanıt süresinin belirlenmesi','Teklife, keşfe, teknik değerlendirmeye veya hizmet kaydına hazır iş dosyası','Geciken ve yanıtsız talepler için otomatik hatırlatma ve eskalasyon'],
    yetenekler: ['Çok kanallı sinyal yakalama','Yapay zekâ ile niyet ve içerik sınıflandırma','Doğal diyalogla eksik bilgi tamamlama','ERP/CRM ve ürün verisiyle bağlam kurma','Kural tabanlı yönlendirme, SLA ve denetim izi'],
    kimler: 'Satış, teknik satış, müşteri hizmetleri, proje satış, teklif ve iş geliştirme ekipleri için uygundur.',
  },
  'mesajdan-goreve-ve-takibe': {
    cat: 'TALEP, SATIŞ VE TEKLİF',
    h1: 'Mesajdan Göreve ve Takibe',
    lead: 'E-posta, WhatsApp, kurumsal mesajlaşma veya not içinde kalan yapılacak işi bulun; sorumlu, tarih, öncelik ve kapanış koşuluyla birlikte izlenebilir göreve dönüştürün.',
    problem: 'Operasyonel işler çoğu zaman bir mesajın içinde kalır; kimin yapacağı, ne zaman tamamlanacağı ve tamamlandığının nasıl doğrulanacağı açık değildir.',
    steps: ['Mesajı alır. Bağlı iletişim kanalındaki mesajı, eki ve konuşma bağlamını yakalar.','Aksiyon ifadesini belirler. Yapılacak işi, talebi, soruyu, taahhüdü veya takip gerektiren konuyu metinden çıkarır.','Görev alanlarını oluşturur. Konu, açıklama, öncelik, son tarih, gerekli belge ve kapanış şartlarını yapılandırır.','Sorumluyu atar. Rol, bölge, uzmanlık, iş yükü veya müşteri sorumluluğuna göre doğru kişiyi önerir ya da atar.','Takip ve eskalasyonu çalıştırır. Yaklaşan son tarih, gecikme, yanıtsızlık veya bağımlı iş durumunda bildirim ve eskalasyon üretir.','Kapanışı doğrular. Yanıt, belge, fotoğraf, form, sistem kaydı veya yönetici onayı gibi tanımlı kanıtla görevi kapatır.'],
    ciktilar: ['Mesajlarda kaybolmayan atanmış görevler','Açık sorumluluk, hedef tarih ve öncelik','Gecikme ve bekleyen iş görünürlüğü','Kaynak mesajla görevin aynı denetim izinde tutulması','Kapanış kanıtı ve görev performans verisi'],
    yetenekler: ['Metinden aksiyon ve varlık çıkarımı','Rol ve iş yüküne göre atama','Görev, bildirim, SLA ve eskalasyon motoru','Belge ve kanıt yönetimi','Aktivite geçmişi ve yönetim görünürlüğü'],
    kimler: 'Müşteri hizmetleri, operasyon, satış, satın alma, finans, idari işler ve saha koordinasyon ekiplerinde mesaj trafiğinin yüksek olduğu tüm birimler için uygundur.',
  },
  'gorusmeden-aksiyona': {
    cat: 'TALEP, SATIŞ VE TEKLİF',
    h1: 'Görüşmeden Aksiyona',
    lead: 'Toplantı, müşteri görüşmesi veya telefon notlarını yalnızca arşivlemeyin; kararları, taahhütleri, riskleri ve takip maddelerini sorumlusu belli aksiyonlara dönüştürün.',
    problem: 'Görüşmelerde önemli kararlar alınmasına rağmen aksiyonlar notların içinde kalabilir. Farklı kişiler aynı kararı farklı yorumlayabilir; taahhütlerin sahibi ve tarihi belirsizleşebilir.',
    steps: ['Görüşme kaydını alır. Toplantı özeti, çağrı notu, transkript veya kullanıcı notunu ilgili müşteri, proje ya da süreçle ilişkilendirir.','Karar ve aksiyonları ayırır. Alınan kararları, yapılacak işleri, verilen taahhütleri, açık soruları ve riskleri ayrı ayrı sınıflandırır.','Bağlamı doğrular. İlgili müşteri, proje, teklif, iş emri veya konu kaydıyla eşleşmeyi kontrol eder.','Sorumlu ve tarih önerir. Notta geçen sahiplik ve zaman ifadelerini kullanır; eksikse rol ve süreç kurallarına göre öneri üretir.','Onay sonrası görevleri açar. Kullanıcı doğrulamasından sonra görev, hatırlatma, onay veya takip kaydı oluşturur.','Sonucu görüşmeye bağlar. Tamamlanan işleri, geciken taahhütleri ve yeni riskleri aynı görüşme geçmişinde görünür tutar.'],
    ciktilar: ['Toplantıdan çıkan net karar ve aksiyon listesi','Taahhüt sahibi ve hedef tarih görünürlüğü','Açık sorular ve risklerin ayrı takibi','Görüşme, görev ve sonuç arasında kesintisiz iz','Haftalık takip ve yönetim özetine otomatik veri'],
    yetenekler: ['Not ve transkript analizi','Karar, taahhüt, risk ve aksiyon ayrıştırma','İş nesneleriyle bağlam eşleştirme','Görev ve hatırlatma oluşturma','Denetim izi ve yönetim görünümlüğü'],
    kimler: 'Satış, proje yönetimi, müşteri başarı, teknik danışmanlık, operasyon yönetimi ve üst yönetim ekipleri için uygundur.',
  },
  'teklif-hazirlama-ve-onay': {
    cat: 'TALEP, SATIŞ VE TEKLİF',
    h1: 'Teklif Hazırlama ve Onay',
    lead: 'Tamamlanmış müşteri talebini fiyat, maliyet, stok, teslimat ve sözleşme koşullarıyla birleştirin; teklifi hazırlayın, doğru yetki seviyesinde onaylatın ve sonrasındaki operasyona bağlayın.',
    problem: 'Teklif hazırlarken müşteri talebi, ürün bilgisi, fiyat listesi, maliyet, iskonto, stok ve teslimat koşulları farklı kaynaklarda kalabilir. Manuel kontrol hataya, marj kaybına ve onay gecikmesine neden olur.',
    steps: ['Talep dosyasını açar. Tamamlanmış ihtiyaç, miktar, teknik koşul, teslim yeri ve hedef tarih bilgilerini kullanır.','Ticari bağlamı getirir. ERP/CRM, fiyat listesi, maliyet, stok, müşteri segmenti, sözleşme ve geçmiş teklif verisini bağlar.','Teklif taslağı oluşturur. Kalemleri, miktarları, fiyatları, teslim ve ödeme koşullarını şirket şablonuna göre hazırlar.','Kural kontrollerini uygular. İskonto, marj, kredi riski, teslim süresi, stok uygunluğu ve istisna kurallarını kontrol eder.','Yetkili onayını çalıştırır. Tutar, marj, müşteri veya istisna seviyesine göre doğru onay zincirini başlatır.','Sürüm ve sonucu yönetir. Onaylı teklifi gönderime hazırlar, revizyonları izler; kabul edildiğinde üretim, saha veya sipariş akışını tetikler.'],
    ciktilar: ['Standart ve izlenebilir teklif dosyası','Marj, iskonto ve yetki kurallarına uygunluk','Onay süresinin ve bekleyen onayların görünürlüğü','Teklif sürümleri, gerekçeler ve onay geçmişi','Onaylı tekliften sonraki sürece otomatik devir'],
    yetenekler: ['ERP/CRM, fiyat ve stok entegrasyonu','Teklif taslağı ve belge üretimi','Politika, kural ve onay motoru','İnsan onayı ve istisna yönetimi','Sürüm, denetim izi ve süreç orkestrasyonu'],
    kimler: 'Satış, teknik satış, teklif, finans, ticari kontrol, satın alma ve operasyon planlama ekiplerinin birlikte çalıştığı B2B süreçler için uygundur.',
  },
  'onayli-tekliften-uretim-planina': {
    cat: 'OPERASYON VE SAHA',
    h1: 'Onaylı Tekliften Üretim Planına',
    lead: 'Kabul edilen teklifi yeniden veri girmeden teknik gereksinim, ürün ağacı, malzeme uygunluğu, kapasite ve teslim tarihiyle eşleştirerek üretim veya montaj planına dönüştürün.',
    problem: 'Satıştan üretime devir sırasında teklif detayları, teknik şartlar ve teslim taahhütleri eksik veya farklı formatta aktarılabilir. Bu kopukluk yanlış planlama, malzeme eksiği, gecikme ve yeniden çalışma yaratır.',
    steps: ['Kabul sinyalini alır. Onaylı teklif, sipariş veya sözleşme kaydını üretim sürecinin başlangıcı olarak kullanır.','Teknik kapsamı yapılandırır. Ürün, varyant, miktar, teknik resim, kalite koşulu, montaj gereksinimi ve teslim tarihini tek iş paketinde toplar.','Hazırlık kontrollerini yapar. Ürün ağacı, malzeme, stok, satın alma ihtiyacı, ekipman, işçilik ve kapasite uygunluğunu kontrol eder.','Plan ve iş emirlerini oluşturur. Üretim, montaj, kalite ve ara kontrol adımlarını bağımlılıklarıyla birlikte planlar.','Eksik ve riskleri yönlendirir. Malzeme açığı, kapasite çakışması, teknik belirsizlik veya teslim riski için ilgili ekibe aksiyon açar.','İlerlemeyi siparişe bağlar. Üretim durumu, gecikme, kalite sonucu ve tamamlanma bilgisini satış ve yönetim görünümüne geri taşır.'],
    ciktilar: ['Satıştan üretime eksiksiz ve izlenebilir devir','Teknik iş paketi ve üretim/montaj iş emirleri','Malzeme, kapasite ve teslim risklerinin erken görünürlüğü','Bölümler arası yeniden veri girişinin azalması','Sipariş, üretim, kalite ve teslim durumunun tek zincirde izlenmesi'],
    yetenekler: ['Teklif ve sipariş bağlamı','ERP/MRP, stok ve ürün ağacı entegrasyonu','Kapasite ve kaynak kuralı','İş emri ve bağımlılık yönetimi','Risk, SLA ve yönetim görünürlüğü'],
    kimler: 'Özel üretim, makine ve ekipman, metal işleme, elektromekanik montaj, proje bazlı imalat ve siparişe göre üretim yapan işletmeler için uygundur.',
  },
  'onayli-tekliften-saha-is-emrine': {
    cat: 'OPERASYON VE SAHA',
    h1: 'Onaylı Tekliften Saha İş Emrine',
    lead: 'Kabul edilen hizmet, kurulum veya proje teklifini; lokasyon, kapsam, ekip yetkinliği, ekipman, malzeme ve zaman planıyla birlikte yürütülebilir saha iş emrine dönüştürün.',
    problem: 'Satış ekibinin verdiği kapsam ve taahhütler saha ekibine eksik aktarılırsa yanlış ekip gider, malzeme unutulur veya müşteri beklentisi karşılanmaz.',
    steps: ['Onaylı kaydı alır. Kabul edilen teklif, sipariş veya sözleşmedeki hizmet kalemlerini saha operasyonuna aktarır.','Saha kapsamını netleştirir. Lokasyon, ekipman, yapılacak işler, teknik şartlar, erişim koşulları ve müşteri temasını yapılandırır.','Kaynak uygunluğunu kontrol eder. Yetkinlik, bölge, vardiya, iş yükü, araç, ekipman ve malzeme ihtiyaçlarını eşleştirir.','Plan ve iş emrini oluşturur. Uygun tarih ve ekibi önerir; iş emri, kontrol listesi ve saha talimatını hazırlar.','Müşteri ve ekibi bilgilendirir. Randevu, hazırlık koşulları, sorumlu ekip ve değişiklikleri ilgili taraflara iletir.','Yürütme ve kapanış akışına devreder. İş emrini mobil saha uygulamasına iletir; sonuçları faturalama ve müşteri kaydına bağlar.'],
    ciktilar: ['Satıştan sahaya standart iş devri','Doğru lokasyon, ekip, yetkinlik ve ekipman planı','Eksiksiz saha iş emri ve kontrol listesi','Müşteri randevusu ve operasyon bilgilendirmesi','Saha sonucu, faturalama ve müşteri geçmişi arasında bağlantı'],
    yetenekler: ['Teklif/siparişten iş emrine orkestrasyon','Lokasyon, varlık ve müşteri bağlamı','Yetkinlik ve kaynak eşleştirme','Planlama, bildirim ve mobil görev','ERP/CRM ve finans akışına geri yazma'],
    kimler: 'Kurulum, teknik servis, bakım, enerji, çevre hizmetleri, altyapı, telekom, tesis yönetimi ve proje bazlı saha operasyonları için uygundur.',
  },
  'bakim-ariza-ve-teknik-servis': {
    cat: 'OPERASYON VE SAHA',
    h1: 'Bakım, Arıza ve Teknik Servis',
    lead: 'Periyodik bakım tarihlerini, müşteri arıza bildirimlerini ve IoT uyarılarını tek servis akışında birleştirin; doğru öncelik, ekip, parça ve SLA ile müdahaleyi yönetin.',
    problem: 'Bakım planları ayrı tabloda, arıza bildirimleri mesajlarda, ekipman geçmişi başka sistemde kaldığında servis kararı gecikir. Öncelik yanlış belirlenebilir ve ekip sahaya eksik bilgiyle çıkabilir.',
    steps: ['Bakım veya arıza sinyalini alır. Takvimde yaklaşan bakım, müşteri bildirimi, çağrı merkezi kaydı, saha formu veya IoT alarmı akışı başlatır.','Öncelik ve etkiyi sınıflandırır. Arıza türü, güvenlik etkisi, üretim kaybı, müşteri seviyesi, sözleşme ve SLA\'ya göre öncelik belirler.','Ekipman geçmişini getirir. Varlık, önceki servisler, garanti, kullanılan parçalar ve teknik dokümanları bağlar.','Müdahaleyi planlar. Uzmanlık, bölge, vardiya, ekipman ve parça uygunluğuna göre ekip ve zaman önerir.','Servis iş emrini yürütür. Kontrol listesi, arıza teşhisi, işlem, parça kullanımı, süre ve saha kanıtlarını toplar.','Kapanış ve öğrenmeyi sağlar. Sonucu doğrular; ekipman geçmişini, sonraki bakım tarihini ve kök neden bilgisini günceller.'],
    ciktilar: ['Planlı bakım ve arıza kayıtlarının tek görünümü','SLA ve etki bazlı doğru önceliklendirme','Ekipman geçmişiyle desteklenen servis kararı','Doğru ekip, yedek parça ve saha hazırlığı','Kronik arıza, tekrar servis ve bakım performansı içgörüsü'],
    yetenekler: ['Takvim, çağrı, form ve IoT sinyali yakalama','Varlık ve servis geçmişi bağlamı','Öncelik, SLA ve ekip atama kuralları','Mobil iş emri ve kontrol listesi','Kök neden, kapanış ve bakım planı güncelleme'],
    kimler: 'Teknik servis sağlayıcıları, üretim tesisleri, tesis yönetimi, enerji, makine ve ekipman şirketleri ile bakım sözleşmesi yöneten işletmeler için uygundur.',
  },
  'saha-is-emri-ve-kanitli-kapanis': {
    cat: 'OPERASYON VE SAHA',
    h1: 'Saha İş Emri ve Kanıtlı Kapanış',
    lead: 'Saha iş emrini yalnızca "tamamlandı" durumuna getirmeyin; yapılan işi konum, zaman, kontrol listesi, fotoğraf, ölçüm, parça kullanımı ve müşteri onayıyla doğrulayarak kapatın.',
    problem: 'Sahadaki işin gerçekten kapsamına uygun yapılıp yapılmadığı, hangi parçanın kullanıldığı veya müşterinin onay verip vermediği merkezde görünmeyebilir. Eksik kapanış; yeniden ziyaret, faturalama gecikmesi ve kalite sorununa yol açar.',
    steps: ['İş emrini mobil ekibe iletir. Kapsam, lokasyon, müşteri, talimat, kontrol listesi, güvenlik notu ve gerekli belgeleri sunar.','Başlangıcı kaydeder. Check-in, zaman, konum ve gerekli ön koşulların tamamlandığını doğrular.','Uygulamayı adım adım yönlendirir. Kontrol listesi, ölçüm, form ve teknik talimata göre işin yürütülmesini sağlar.','Kaynak kullanımını toplar. Çalışma süresi, kullanılan parça, ekipman, ek iş ve sahadaki istisnaları kaydeder.','Kapanış kanıtlarını doğrular. Fotoğraf, video, ölçüm, belge, müşteri imzası veya dijital onay gibi zorunlu kanıtları kontrol eder.','Sonraki süreci tetikler. Kapanış sonrası fatura, garanti, stok düşümü, takip ziyareti, memnuniyet veya uygunsuzluk akışını başlatır.'],
    ciktilar: ['Standart saha uygulaması ve eksiksiz iş kaydı','Konum, süre ve görev ilerleme görünürlüğü','Fotoğraf, ölçüm, imza ve belgeyle kanıtlı kapanış','Parça, süre ve ek iş bilgilerinin finans ve stok sistemine aktarılması','Tekrar ziyaret ve eksik kapanış riskinin azalması'],
    yetenekler: ['Mobil görev ve saha kontrol listesi','Konum, zaman ve aktivite kaydı','Medya, form, ölçüm ve imza yönetimi','Kapanış kuralı ve istisna yönetimi','Finans, stok, garanti ve memnuniyet akışlarıyla bağlantı'],
    kimler: 'Saha servis, bakım, kurulum, denetim, montaj, altyapı ve proje ekipleri ile işin yapıldığını kanıtla kapatması gereken tüm operasyonlar için uygundur.',
  },
  'kalite-uygunsuzlugundan-duzeltici-aksiyona': {
    cat: 'KALİTE VE KAYNAK YÖNETİMİ',
    h1: 'Kalite Uygunsuzluğundan Düzeltici Aksiyona',
    lead: 'Üretim, saha, tedarikçi veya müşteri kaynağındaki uygunsuzluğu yalnızca kayıt altına almakla kalmayın; etkiyi sınıflandırın, kök nedeni araştırın, düzeltici faaliyeti yürütün ve etkinliğini doğrulayın.',
    problem: 'Kalite kayıtları aksiyona bağlanmadığında aynı hata tekrar eder. Sorumluluk, hedef tarih, kök neden ve doğrulama adımı net değilse uygunsuzluk yalnızca raporlanmış olur.',
    steps: ['Uygunsuzluğu yakalar. Kalite formu, müşteri şikâyeti, saha kontrolü, üretim ölçümü veya tedarikçi kaydını alır.','Etki ve önceliği belirler. Ürün, parti, müşteri, güvenlik, maliyet, teslimat ve tekrar riskine göre sınıflandırır.','Geçici önlemi başlatır. Karantina, sevkiyat durdurma, müşteri bilgilendirmesi veya yeniden kontrol gibi acil aksiyonları yönlendirir.','Kök neden çalışmasını açar. İlgili ekip, veri, geçmiş olay ve yöntemle kök neden analizini takip eder.','Düzeltici faaliyeti yürütür. Sorumlu, tarih, kaynak ve beklenen sonucu olan aksiyonları oluşturur ve izler.','Etkinliği doğrular ve kapatır. Tekrar kontrol, ölçüm, denetim veya yönetici onayıyla faaliyetin işe yaradığını doğrular.'],
    ciktilar: ['Uygunsuzluk, geçici önlem ve düzeltici faaliyet arasında bağlantı','Kök neden, sorumlu ve hedef tarih görünürlüğü','Ürün, parti, müşteri ve tedarikçi etkisinin izlenmesi','Etkinlik doğrulaması yapılmadan kapanmayan kayıt','Tekrarlayan hata ve iyileştirme performansı içgörüsü'],
    yetenekler: ['Form, ölçüm ve şikâyet sinyali','Etki ve öncelik sınıflandırma','Görev, onay ve CAPA takibi','Varlık, parti, müşteri ve tedarikçi bağlamı','Kanıtlı doğrulama ve denetim izi'],
    kimler: 'Kalite, üretim, tedarikçi kalite, saha servis, müşteri hizmetleri, operasyon ve sürekli iyileştirme ekipleri için uygundur.',
  },
  'kritik-stoktan-tedarik-aksiyonuna': {
    cat: 'KALİTE VE KAYNAK YÖNETİMİ',
    h1: 'Kritik Stoktan Tedarik Aksiyonuna',
    lead: 'Kritik stok seviyesini yalnızca uyarı olarak göstermeyin; beklenen tüketim, açık sipariş, teslim süresi, üretim ve saha ihtiyacını birlikte değerlendirerek satın alma, transfer veya ikame aksiyonu üretin.',
    problem: 'Sabit minimum stok uyarıları gerçek ihtiyacı tek başına açıklamaz. Bir ürün kritik görünse de açık sipariş yolda olabilir; başka bir üründe ise yaklaşan iş emri nedeniyle görünmeyen risk oluşabilir.',
    steps: ['Stok sinyalini izler. Minimum seviye, güvenlik stoğu, beklenen tüketim, rezervasyon veya anormal çıkış durumunu algılar.','Talep bağlamını getirir. Açık satış siparişi, üretim planı, saha iş emri, bakım planı ve tahmin verisini değerlendirir.','Tedarik durumunu kontrol eder. Açık satın alma siparişleri, teslim tarihi, tedarikçi performansı, depo ve lokasyon stoklarını birleştirir.','Aksiyon alternatifleri üretir. Satın alma, depolar arası transfer, ikame ürün, teslimat değişikliği veya yönetici onayı seçeneklerini önerir.','Yetki ve onayı uygular. Tutar, kritik malzeme, tedarikçi ve aciliyet kurallarına göre ilgili onay zincirini çalıştırır.','Sonucu ve riski izler. Sipariş veya transfer gerçekleşene kadar beklenen kapanış tarihini, riskli işleri ve sapmaları takip eder.'],
    ciktilar: ['Bağlamdan kopuk alarm yerine gerekçeli stok aksiyonu','Açık talep, sipariş ve tedarik durumunun birlikte görünmesi','Satın alma, transfer veya ikame önerisi','Onaylı ve izlenebilir tedarik kararı','Stok kaynaklı üretim, saha ve teslimat riskinin erken görünürlüğü'],
    yetenekler: ['ERP/WMS/MRP ve sipariş verisi entegrasyonu','Eşik, tahmin ve tüketim sinyali','Kural tabanlı alternatif ve karar önerisi','Satın alma/transfer görevi ve onay akışı','Risk ve kapanış takibi'],
    kimler: 'Satın alma, depo, üretim planlama, bakım, saha operasyon, tedarik zinciri ve finans ekipleri için uygundur.',
  },
  'servis-sonrasi-memnuniyet-ve-geri-bildirim': {
    cat: 'PAYDAŞ DENEYİMİ',
    h1: 'Servis Sonrası Memnuniyet ve Geri Bildirim',
    lead: 'Tamamlanan servis, kurulum veya teslimattan sonra müşteriye doğru zamanda ulaşın; geri bildirimi yalnızca bir skor olarak değil, ilgili iş emri, ekip, ürün ve hizmet deneyimiyle bağlantılı içgörüye dönüştürün.',
    problem: 'Geri bildirim geç veya bağlamdan kopuk alındığında neyin iyi ya da kötü olduğu anlaşılamaz. Bu akış, hizmet kapanışını otomatik geri bildirim tetikleyicisine dönüştürür.',
    steps: ['Kapanış sinyalini alır. Servis, kurulum, teslimat veya saha iş emri tanımlı koşullarla kapandığında akışı başlatır.','Doğru an ve kanalı seçer. Müşteri tercihi, hizmet tipi ve zaman kuralına göre WhatsApp, SMS, e-posta veya web kanalını kullanır.','Bağlama uygun sorular yöneltir. İlgili hizmet, ekip, zamanlama ve genel deneyim için kısa ve hedefli diyalog kurar.','Yanıtı analiz eder. Skor, duygu, tema, öneri ve açık metindeki risk veya övgü unsurlarını çıkarır.','Sonucu operasyona bağlar. Geri bildirimi müşteri, iş emri, ekip, ürün, lokasyon ve hizmet türüyle ilişkilendirir.','Gerekli aksiyonu tetikler. Düşük skor veya şikâyet durumunda iyileştirme akışı başlatır.'],
    ciktilar: ['Hizmet kapanışıyla zamanlanmış otomatik geri bildirim','Skorun yanında duygu, tema ve açık metin içgörüsü','Müşteri, iş emri, ekip ve hizmet türü bazında analiz','Olumsuz deneyime hızlı müdahale','Servis kalitesi ve ekip performansı için öğrenme döngüsü'],
    yetenekler: ['Kapanış tetikleyicisi ve kanal orkestrasyonu','Diyalog tabanlı geri bildirim','Duygu, tema ve risk analizi','Operasyon verisiyle bağlam eşleştirme','Aksiyon, bildirim ve yönetim görünümü'],
    kimler: 'Teknik servis, kurulum, teslimat, saha hizmeti, bakım, müşteri başarı ve satış sonrası ekipleri için uygundur.',
  },
  'riskli-musteri-iyilestirme-aksiyonu': {
    cat: 'PAYDAŞ DENEYİMİ',
    h1: 'Riskli Müşteri için İyileştirme Aksiyonu',
    lead: 'Düşük skor, tekrar eden şikâyet, geciken servis, açık taahhüt veya olumsuz iletişim sinyalini müşteri kaybından önce tespit edin; sahipliği, yanıt süresi ve çözüm adımları belirli bir iyileştirme akışı başlatın.',
    problem: 'Riskli müşteri yalnızca düşük NPS veren müşteri değildir. Geciken iş, tekrar arıza, uzun yanıt süresi, açık fatura uyuşmazlığı veya olumsuz mesajlar birlikte değerlendirilmelidir.',
    steps: ['Risk sinyalini algılar. Düşük memnuniyet, olumsuz duygu, tekrar şikâyet, SLA ihlali, açık taahhüt veya hizmet tekrarı gibi göstergeleri izler.','Müşteri bağlamını birleştirir. Aktif işler, sözleşme, gelir, geçmiş şikâyet, servis, teklif ve iletişim kayıtlarını getirir.','Risk seviyesini belirler. Etki, müşteri değeri, tekrar sıklığı ve açık sorunlara göre önceliklendirir.','İyileştirme sorumlusunu atar. Müşteri yöneticisi, operasyon sorumlusu veya yönetici seviyesinde sahiplik ve hedef yanıt süresi oluşturur.','Çözüm planını yürütür. İletişim, yeniden servis, telafi, teknik inceleme veya yönetici görüşmesi görevlerini takip eder.','Sonucu ölçer. Sorunun kapandığını, müşterinin bilgilendirildiğini ve risk seviyesinin değiştiğini doğrular.'],
    ciktilar: ['Müşteri riskinin tek skora bağlı kalmadan erken tespiti','Tüm açık sorun ve taahhütlerin müşteri bağlamında görünmesi','Net sorumlu, hedef yanıt ve çözüm planı','Müşteriyle yapılan iletişim ve telafi geçmişi','Kayıp riski, tekrar şikâyet ve iyileştirme başarısı içgörüsü'],
    yetenekler: ['Çoklu sinyal ve duygu analizi','CRM, servis, görev ve finans bağlamı','Risk sınıflandırma ve öncelik kuralı','Görev, SLA, eskalasyon ve yönetici görünümü','Sonuç doğrulama ve kapalı döngü öğrenme'],
    kimler: 'Müşteri deneyimi, müşteri başarı, satış, teknik servis, operasyon ve kilit müşteri yönetimi ekipleri için uygundur.',
  },
  'calisan-geri-bildiriminden-ik-aksiyonuna': {
    cat: 'PAYDAŞ DENEYİMİ',
    h1: 'Çalışan Geri Bildiriminden İK Aksiyonuna',
    lead: 'Çalışan geri bildirimlerindeki tema, risk ve önerileri gizlilik ve anonimlik kurallarını koruyarak anlayın; bireysel ifşaya yol açmadan sorumlusu, hedefi ve ölçümü belli İK aksiyonlarına dönüştürün.',
    problem: 'Anket ve açık uçlu geri bildirimler raporlandıktan sonra aksiyon sahibi ve kapanış ölçütü belirlenmezse çalışanlar değişim görmez. Öte yandan gizlilik yanlış yönetilirse güven zedelenir.',
    steps: ['Geri bildirimi toplar. Belirlenen kanal, dönem ve hedef kitle üzerinden yapılandırılmış veya diyalog tabanlı geri bildirim alır.','Gizlilik kurallarını uygular. Anonimlik, minimum grup büyüklüğü, rol bazlı erişim ve hassas içerik kurallarını gözetir.','Tema ve riski analiz eder. Memnuniyet, bağlılık, yönetim, iş yükü, iletişim, gelişim ve güvenlik temalarını çıkarır.','Öncelik ve sorumluluk belirler. Etki, yaygınlık, trend ve aciliyete göre İK, yönetici veya ilgili birim için aksiyon önerir.','İyileştirme planını izler. Aksiyonun sahibi, hedef tarihi, ölçütü ve çalışanlara yapılacak geri bildirim adımını takip eder.','Değişimi ölçer. Sonraki nabız ölçümü, tema trendi ve aksiyon sonucu üzerinden iyileşmeyi değerlendirir.'],
    ciktilar: ['Gizlilik kurallarına uygun tema ve trend analizi','Raporlanan içgörüden sorumlusu belli aksiyonlara geçiş','Kritik çalışan deneyimi risklerinin erken görünürlüğü','Aksiyon durumu ve çalışanlara geri bildirim şeffaflığı','Dönemler arasında ölçülebilir iyileşme takibi'],
    yetenekler: ['Çok kanallı ve diyalog tabanlı geri bildirim','Anonimlik, erişim ve minimum örneklem politikaları','Tema, duygu, trend ve risk analizi','Aksiyon, onay ve takip yönetimi','Yönetim brifingi ve kapalı döngü ölçüm'],
    kimler: 'İnsan kaynakları, çalışan deneyimi, organizasyonel gelişim, iş sağlığı ve güvenliği ile kurum yönetimi ekipleri için uygundur.',
  },
  'fatura-vade-ve-tahsilat-takibi': {
    cat: 'FİNANS VE YÖNETİM',
    h1: 'Fatura, Vade ve Tahsilat Takibi',
    lead: 'Fatura oluşumundan vade yaklaşımına, gecikmeden tahsilat kapanışına kadar müşteri iletişimini, satış koordinasyonunu ve finans görevlerini aynı izlenebilir akışta yönetin.',
    problem: 'Tahsilat takibi yalnızca hatırlatma göndermek değildir. Faturanın doğru oluşması, müşteriye ulaştığının doğrulanması, itirazların ayrıştırılması ve kredi kurallarının birlikte yönetilmesi gerekir.',
    steps: ['Fatura veya alacak kaydını alır. Muhasebe/ERP sistemindeki fatura, vade, bakiye, müşteri ve ödeme koşullarını izler.','Vade öncesi kontrol yapar. Faturanın iletildiğini, eksik belge veya müşteri itirazı bulunmadığını ve ilgili satış kaydıyla eşleştiğini kontrol eder.','Uygun iletişimi başlatır. Müşteri segmenti, tutar, vade ve tercih edilen kanala göre hatırlatma veya bilgilendirme üretir.','Gecikmeyi sınıflandırır. Ödeme sözü, itiraz, mutabakat farkı, onay bekleme veya finansal risk gibi nedeni ayrıştırır.','İç görev ve eskalasyonu yönetir. Finans, satış, müşteri yöneticisi veya yönetim için görev, son tarih ve yetki bazlı eskalasyon oluşturur.','Tahsilatı kapatır. Ödeme kaydı geldiğinde açık görevi kapatır; söz, itiraz ve gecikme geçmişini müşteri kaydında tutar.'],
    ciktilar: ['Vade öncesi ve sonrası kontrollü tahsilat takibi','Müşteri iletişimi, ödeme sözü ve itiraz geçmişi','Finans ve satış ekipleri arasında net sorumluluk','Geciken ve riskli alacakların yönetim görünürlüğü','Tahsilat kapanışı ve müşteri risk verisinin güncellenmesi'],
    yetenekler: ['ERP/muhasebe ve CRM entegrasyonu','Tarih, tutar, müşteri ve risk kuralları','Çok kanallı bildirim ve iletişim taslağı','Görev, onay, SLA ve eskalasyon','Ödeme sinyaliyle otomatik kapanış'],
    kimler: 'Finans, muhasebe, satış operasyonu, müşteri yönetimi ve kredi risk ekipleri için uygundur.',
  },
  'haftalik-yonetim-brifingi': {
    cat: 'FİNANS VE YÖNETİM',
    h1: 'Haftalık Yönetim Brifingi',
    lead: 'KPI\'ları, açık işleri, gecikmeleri, müşteri ve operasyon risklerini, önemli değişimleri ve karar gerektiren konuları kaynak kayıtlarıyla birlikte kısa, eyleme dönük haftalık yönetim brifingine dönüştürün.',
    problem: 'Yönetim raporları çok sayıda ekran ve tablo içerdiğinde önemli istisnalar görünmez kalabilir. Sadece toplam rakamlar verilmesi de "neden oldu, kim ilgileniyor, ne karar gerekiyor?" sorularını yanıtsız bırakır.',
    steps: ['Dönem verisini toplar. Satış, teklif, operasyon, üretim, saha, bakım, kalite, finans ve geri bildirim kayıtlarından haftalık değişimleri alır.','Önemli sapmaları belirler. Hedef sapması, sıra dışı artış, gecikme, SLA ihlali, blokaj, müşteri riski ve kapasite sorunlarını tespit eder.','Neden ve bağlamı ekler. Her bulguyu ilgili müşteri, proje, iş emri, görev, ekip veya kaynak kayıtlarıyla ilişkilendirir.','Karar gerektiren konuyu ayırır. Yönetim onayı, kaynak değişikliği, öncelik kararı veya risk kabulü isteyen maddeleri öne çıkarır.','Brifingi üretir. Özet, önemli gelişmeler, riskler, açık kararlar ve gelecek hafta önceliklerini kısa bir yapı içinde sunar.','Takip maddelerini açar. Yönetim kararı veya toplantı sonucunu görev, onay ve takip akışına dönüştürür.'],
    ciktilar: ['Rakam yığını yerine eyleme dönük haftalık özet','Hedef sapması, gecikme, risk ve blokaj görünürlüğü','Her bulgunun kaynak kaydına izlenebilir bağlantısı','Karar gerektiren maddelerin ayrı listesi','Yönetim kararlarının görev ve takip akışına dönüşmesi'],
    yetenekler: ['Çoklu sistem ve iş nesnesi bağlamı','KPI, trend, sapma ve istisna analizi','Doğal dilde özet ve gerekçelendirme','Kaynak bağlantısı ve denetim izi','Karardan göreve kapalı döngü yönetim'],
    kimler: 'Üst yönetim, birim yöneticileri, operasyon merkezi, satış ve finans yönetimi ile haftalık performans toplantısı yürüten ekipler için uygundur.',
  },
};

function renderKullanimSenaryoPage(slug) {
  var d = KULLANIM_SENARYOLARI_DATA[slug];
  if (!d) return _stub('Kullanım Senaryoları', slug);

  var h = '<section class="detail-hero"><div class="container">' +
    crumb(['Kullanım Alanları', '#/kullanim-alanlari'], ['Kullanım Senaryoları', '#/kullanim-alanlari/kullanim-senaryolari'], [d.h1]) +
    '<span class="eyebrow">' + esc(d.cat) + ' / KULLANIM SENARYOSU</span>' +
    '<h1 style="margin-top:16px;max-width:760px">' + esc(d.h1) + '</h1>' +
    '<p class="lead" style="max-width:680px">' + esc(d.lead) + '</p>' +
    '</div></section>';

  // Bu akış neyi çözer?
  h += '<section class="bg-warm" style="padding:48px 0"><div class="container narrow">' +
    '<div class="section-head" style="margin-bottom:14px"><span class="eyebrow">Bu akış neyi çözer?</span></div>' +
    '<p style="font-size:16px;color:var(--t-body);line-height:1.8">' + esc(d.problem) + '</p>' +
    '</div></section>';

  // Akış nasıl çalışır?
  h += '<section style="padding:52px 0"><div class="container">' +
    '<div class="section-head"><span class="eyebrow">Akış nasıl çalışır?</span></div>' +
    '<div class="senaryo-steps">';
  d.steps.forEach(function(step, i) {
    // step format: "1. Talebi yakalar. Açıklama..."
    var parts = step.split('. ');
    var title = parts[0] + '. ' + (parts[1] || '');
    var body = parts.slice(2).join('. ');
    h += '<div class="senaryo-step"><div class="senaryo-step-num">0' + (i+1) + '</div>' +
      '<div><p><strong>' + esc(title.trim()) + '</strong>' + (body ? ' ' + esc(body.trim()) : '') + '</p></div></div>';
  });
  h += '</div></div></section>';

  // Akışın ürettiği sonuçlar
  h += '<section class="bg-warm" style="padding:48px 0"><div class="container">' +
    '<div class="section-head"><span class="eyebrow">Akışın ürettiği sonuçlar</span></div>' +
    '<div class="senaryo-ciktilar">';
  d.ciktilar.forEach(function(c){ h += '<div class="senaryo-cikti">' + esc(c) + '</div>'; });
  h += '</div></div></section>';

  // Yetenekler + Kimler için
  h += '<section style="padding:48px 0"><div class="container">' +
    '<div style="display:grid;grid-template-columns:1fr 1fr;gap:40px 56px">' +
    '<div><div class="section-head" style="margin-bottom:16px"><span class="eyebrow">Bu akışta kullanılan Chief yetenekleri</span></div>' +
    '<div class="senaryo-yetenekler">' +
    d.yetenekler.map(function(y){ return '<span class="senaryo-yetenek">' + esc(y) + '</span>'; }).join('') +
    '</div></div>' +
    '<div><div class="section-head" style="margin-bottom:16px"><span class="eyebrow">Kimler için uygundur?</span></div>' +
    '<div class="senaryo-kimler">' + esc(d.kimler) + '</div>' +
    '<div class="senaryo-denetim">AI sınıflandırır, önerir ve takip eder; kritik karar ve onaylarda insan denetimi korunur.</div>' +
    '</div></div></div></section>';

  // CTA
  h += '<section class="final-cta"><div class="container">' +
    '<h2>' + esc(d.h1) + ' akışını Chief ile kurun.</h2>' +
    '<p class="lead">Akışı mevcut sistemlerinize, yetki matrisinize ve operasyon kurallarınıza göre uyarlayarak devreye alın.</p>' +
    '<div class="cta-row"><a href="#/demo-talep-et" class="btn btn-clay btn-lg">Demo Talep Et ' + ico('arrow',16) + '</a>' +
    '<a href="#/kullanim-alanlari/kullanim-senaryolari" class="btn on-dark-ghost btn-lg">Tüm senaryolar</a></div>' +
    '</div></section>';
  return h;
}

function renderKullanimSenaryolariListing() {
  var cats = {
    'TALEP, SATIŞ VE TEKLİF': ['gelen-talebi-yakala-ve-tamamla','mesajdan-goreve-ve-takibe','gorusmeden-aksiyona','teklif-hazirlama-ve-onay'],
    'OPERASYON VE SAHA': ['onayli-tekliften-uretim-planina','onayli-tekliften-saha-is-emrine','bakim-ariza-ve-teknik-servis','saha-is-emri-ve-kanitli-kapanis'],
    'KALİTE VE KAYNAK YÖNETİMİ': ['kalite-uygunsuzlugundan-duzeltici-aksiyona','kritik-stoktan-tedarik-aksiyonuna'],
    'PAYDAŞ DENEYİMİ': ['servis-sonrasi-memnuniyet-ve-geri-bildirim','riskli-musteri-iyilestirme-aksiyonu','calisan-geri-bildiriminden-ik-aksiyonuna'],
    'FİNANS VE YÖNETİM': ['fatura-vade-ve-tahsilat-takibi','haftalik-yonetim-brifingi'],
  };

  var h = '<section class="detail-hero"><div class="container">' +
    crumb(['Kullanım Alanları', '#/kullanim-alanlari'], ['Kullanım Senaryoları']) +
    '<span class="eyebrow">CHIEF KULLANIM SENARYOLARI</span>' +
    '<h1 style="margin-top:16px;max-width:720px">Kullanım Senaryoları</h1>' +
    '<p class="lead" style="max-width:680px">Teklif talebinden saha kapanışına, bakım planından tahsilat takibine kadar yaygın iş senaryoları için tasarlanmış akışlarla daha hızlı başlayın. Her akışı mevcut sistemlerinize, kurallarınıza ve ekip yapınıza göre uyarlayın.</p>' +
    '<div class="cta-row" style="margin-top:24px"><a href="#/demo-talep-et" class="btn btn-clay btn-lg">Demo Talep Et</a></div>' +
    '</div></section>';

  Object.keys(cats).forEach(function(catName) {
    h += '<section style="padding:48px 0"><div class="container">' +
      '<div class="section-head"><span class="eyebrow">' + esc(catName) + '</span></div>' +
      '<div class="cards-grid">';
    cats[catName].forEach(function(slug, n) {
      var d = KULLANIM_SENARYOLARI_DATA[slug];
      if (!d) return;
      h += '<a class="card" href="#/kullanim-alanlari/kullanim-senaryolari/' + slug + '">' +
        '<div class="card-ico ' + (n%3===1?'sage':n%3===2?'blue':'') + '">' + ico('flow', 20) + '</div>' +
        '<h4>' + esc(d.h1) + '</h4>' +
        '<p>' + esc(d.lead.substring(0, 100)) + (d.lead.length > 100 ? '...' : '') + '</p>' +
        '<span class="card-foot btn-link">Akışı İncele ' + ico('arrow',15) + '</span></a>';
    });
    h += '</div></div></section>';
  });

  return h + finalCTA();
}

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
   İŞ SÜREÇLERİ — VERİ + RENDER  (v2 — doküman birebir)
   ================================================================ */
const IS_SURECLERI_DATA = {
  'yonetimsel-dogal-dil-veri-stratejik-aksiyon': {
    featured: true, cat: 'YÖNETİM', catKey: 'yonetim', icon: 'spark',
    eyebrow: 'ÖNE ÇIKAN YÖNETİM KATMANI / İŞ SÜRECİ',
    cardTitle: 'Yönetimsel Doğal Dil, Veri Erişimi ve Stratejik Aksiyon',
    cardDesc: 'Yönetim seviyesinde doğal dille veriye ulaşın, strateji geliştirin ve ilgili alanlarda aksiyon başlatın.',
    cardSub: 'Chief yönetim katmanı; veriyi kaynak kayıtlarıyla açıklar, karar seçenekleri üretir, görev/onay/bilgi talebi açar ve sonuçları takip eder.',
    h1: 'Yönetimsel Doğal Dil, Veri Erişimi ve Stratejik Aksiyon',
    lead: 'Yönetim seviyesinde doğal dil ile veriye anında ulaşın; veriyi bağlamıyla yorumlayın, strateji seçenekleri oluşturun ve ilgili ekiplere görev, onay veya bilgi talebi açın.',
    problem: 'Yönetim çoğu zaman raporları, toplantı notlarını, departman güncellemelerini, ERP/CRM ekranlarını ve saha verilerini ayrı ayrı inceler. Bu da kararların gecikmesine, sorumluluğun dağılmasına ve stratejik konuların aksiyona dönüşmemesine neden olur. Chief yönetim katmanı, doğal dil ile veriye erişimi, açıklanabilir karar desteğini ve aksiyon takibini aynı yönetim sürecinde birleştirir.',
    amac: 'Yönetimin doğal dil ile güvenilir veriye ulaşmasını, veriyi stratejik bağlamda yorumlamasını, karar seçenekleri üretmesini ve ilgili alanlarda görev, onay veya bilgi talebi açmasını sağlamak.',
    girdiler: 'ERP, CRM, finans, üretim, saha, servis, stok, kalite, İK, Dendy geri bildirimleri, KPI veri modeli, toplantı notları, karar kayıtları, hedefler, bütçe ve risk kayıtları.',
    ciktilar: 'Doğal dil veri cevabı, kaynak kayıt bağlantısı, KPI sapma özeti, strateji seçeneği, karar notu, bilgi talebi, görev/onay, yönetim brifingi, aksiyon takip listesi, denetim izi.',
    yone: [
      { label:'Yönetici doğal dilde sorar', text:'Satış neden hedefin altında, hangi üretim hatları darboğazda, hangi saha işleri tahsilatı geciktiriyor, hangi toplantı aksiyonları kapanmadı?' },
      { label:'Chief veriyi kaynak kayıtlarıyla açıklar', text:'Teklif, iş emri, fatura, stok, üretim emri, müşteri geri bildirimi, çalışan geri bildirimi veya toplantı notu ile bağlantı kurar.' },
      { label:'Chief strateji seçenekleri üretir', text:'Kapasite artırımı, fiyat kuralı değişikliği, tahsilat önceliği, müşteri iyileştirme planı veya süreç darboğazı aksiyonu önerir.' },
      { label:'Yönetici aksiyon başlatır', text:'İlgili departmandan/kişiden bilgi talep eder, görev açar, onay süreci başlatır.' },
    ],
    ornekAkis: [
      { num:'01', title:'Yönetici sorar', body:'"Bu ay hedef sapmasının ana nedenleri neler?" diye sorar.' },
      { num:'02', title:'Chief veri birleştirir', body:'Satış, teklif, ziyaret, fiyat, üretim kapasitesi, stok, fatura ve müşteri geri bildirim verisini yetki sınırları içinde birleştirir.' },
      { num:'03', title:'Nedenler açıklanır', body:'Sapmanın nedenlerini kaynak kayıtlarla açıklar.' },
      { num:'04', title:'Eksik veri tespit edilir', body:'Eksik veya çelişkili veri varsa ilgili ekipten bilgi talebi açar.' },
      { num:'05', title:'Aksiyona dönüştürülür', body:'Önerilen aksiyonları görev ve onay akışına dönüştürür.' },
    ],
    steps: [
      'Yönetici doğal dilde soru sorar veya stratejik bir konuyu gündeme getirir.',
      'Chief kullanıcının rolü ve yetkisine göre erişebileceği veri alanlarını belirler.',
      'Soru ilgili iş nesneleriyle eşleştirilir: müşteri, lokasyon, teklif, iş emri, üretim, finans, çalışan, kalite veya geri bildirim.',
      'Chief güvenilir kaynak kayıtlarını getirir; ham veriyi iş diliyle özetler.',
      'KPI sapması, trend, risk, fırsat veya darboğaz varsa açıklanabilir gerekçeyle gösterir.',
      'Yönetici alternatif strateji, senaryo veya kök neden analizi isteyebilir.',
      'Yapılan toplantıların içeriklerini, kararlarını ve aksiyon durumlarını görüntüler; eksik aksiyonlar için bilgi talebi veya takip görevi açabilir.',
      'İlgili süreç, konu veya durum hakkında ilgili departman ya da kişiden bilgi talebi açabilir.',
      'Eksik veri, çelişkili kayıt veya düşük güven skoru varsa Chief ilgili ekipten bilgi talebi ya da veri doğrulama görevi açar.',
      'Karar alınırsa görev, onay, aksiyon planı veya yönetim gündemi oluşturulur.',
      'Aksiyonların sahipleri, tarihleri, SLA\'ları ve kapanış kriterleri takip edilir.',
      'Sonuç yönetim brifingine ve süreç iyileştirme döngüsüne geri beslenir.',
    ],
    kararlar: [
      { nokta:'Yetki ve veri erişimi', girdi:'Kullanıcı rolü, departman, müşteri/lokasyon kapsamı', aksiyon:'Gösterilebilir veri alanı ve maskeleme' },
      { nokta:'KPI sapması', girdi:'Hedef, gerçekleşen, dönem, karşılaştırma', aksiyon:'Normal, uyarı, kritik veya aksiyon gerektirir' },
      { nokta:'Strateji seçeneği', girdi:'Maliyet, kapasite, müşteri riski, satış potansiyeli', aksiyon:'Önerilen senaryo ve beklenen etki' },
      { nokta:'Bilgi talebi', girdi:'Eksik veri, çelişkili kayıt, düşük güven skoru', aksiyon:'İlgili ekipten bilgi talep görevi' },
      { nokta:'Aksiyon başlatma', girdi:'Karar, sorumlu, tarih, kapanış kriteri', aksiyon:'Görev, onay, proje veya iyileştirme vakası' },
    ],
    nlQueries: [
      'Bu ay satış neden hedefin altında kaldı? Kanal, bölge, ürün ve temsilci bazında açıkla.',
      'Bu ay yapılan tüm toplantı notlarını ve aksiyon durumlarını göster.',
      'Geciken saha işlerinin müşteri memnuniyetine ve tahsilata etkisini göster.',
      'Önümüzdeki ay kapasite darboğazı beklenen üretim hatlarını ve önerilen aksiyonları listele.',
      'Marjı düşen teklif gruplarında fiyat kuralı değişikliği öner.',
      'En çok tekrar eden müşteri ve çalışan geri bildirim temalarını süreçlerle ilişkilendir.',
      'Bu hafta yönetim toplantısı için karar bekleyen ilk 10 konuyu hazırla.',
      'İlgili sorgulama konusu için ilgili departman veya kişiden bilgi talebi aç.',
      'Araştırdığım konu, süreç veya durumla ilgili aksiyonları sahipleri ve kapanış tarihleriyle birlikte görev planına dönüştür.',
    ],
    ozelDurumlar: [
      'Yönetici sorusu birden fazla veri domainine yayılabilir; analiz vaka dosyası açılır.',
      'Veri güven skoru düşükse bilgi talebi veya veri doğrulama görevi gerekir.',
      'Stratejik karar için finans, operasyon, satış ve kalite ekiplerinden görüş toplanabilir.',
      'Kritik risk yönetim kurulu veya üst yönetim gündemine alınabilir.',
      'AI önerisi insan onayı olmadan finansal veya organizasyonel karar olarak uygulanmaz.',
    ],
    kpis: [
      'Yönetim sorusuna yanıt süresi','Kaynak kayıtla doğrulanan cevap oranı',
      'Toplantıda çıkan aksiyonların kapanma süresi','Açılan bilgi taleplerinin kapanış süresi',
      'KPI sapmasından aksiyona dönüş oranı','Yönetim kararından görev açılma oranı',
      'Operasyon performansı','Satış ve teklif performansı','Operasyon ve saha performansı',
      'Üretim, tedarik ve kalite performansı','Finansal performans','Paydaş durumu',
      'Aksiyon kapanış oranı','Tekrar eden yönetim riskleri','Strateji senaryosu gerçekleşen etkisi',
      'AI önerisi insan onayı izlenebilirliği',
    ],
    ctaText: 'Yönetimsel Doğal Dil, Veri Erişimi ve Stratejik Aksiyon sürecinizi Chief ile modelleyin; mevcut sistemlerinizi değiştirmeden bilgiyi sorumluluk, karar, aksiyon ve yönetim görünürlüğüyle birleştirin.',
    metrics: [{ n:'Anlık', l:'Veri erişimi' },{ n:'%100', l:'Kaynak kayıt bağlantısı' },{ n:'< 1 saat', l:'KPI\'dan aksiyona' },{ n:'Tam', l:'Denetim izi' }],
  },
  'talep-potansiyel-musteri-firsat-yonetimi': {
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
    amac: 'Dağınık müşteri ilgisini nitelikli fırsata dönüştürmek; sahipliği, önceliği, ilk temas aksiyonunu ve satış hattı bağlantısını netleştirmek.',
    girdiler: 'Web formu, e-posta, WhatsApp, telefon özeti, fuar kaydı, saha satış notu, CRM kaydı, bayi bildirimi, referans talep.',
    ciktilar: 'Nitelikli talep kaydı, müşteri eşleşmesi, fırsat skoru, satış temsilcisi ataması, ilk temas görevi, ziyaret/teklif yönlendirmesi.',
    steps: [
      'Talep veya ilgi sinyali bağlı kanaldan alınır ve kaynak bağlantısı korunur.',
      'Chief müşteri, kontak, kanal, ürün/hizmet ve lokasyon bağlamını eşleştirir.',
      'Talep niyeti sınıflandırılır: yeni teklif, bilgi alma, keşif, fiyat güncelleme, servis talebi, şikayet veya finans konusu.',
      'Eksik iletişim, ihtiyaç, bütçe, zamanlama, karar verici veya teknik kapsam bilgisi tespit edilir.',
      'Eksik bilgiler doğal diyalogla müşteri veya satış temsilcisinden tamamlanır.',
      'Fırsat potansiyeli, aciliyet, stratejik müşteri ve kanal kaynağına göre öncelik verilir.',
      'Kayıt bölge, ürün, segment, iş yükü ve yetki kurallarına göre sorumluya atanır.',
      'İlk temas, ziyaret, teklif hazırlığı veya takip görevi başlatılır; sonuç CRM/fırsat kaydına işlenir.',
    ],
    kararlar: [
      { nokta:'Talep sınıfı', girdi:'Mesaj içeriği, kanal, müşteri geçmişi', aksiyon:'Satış fırsatı, servis, şikayet, finans veya İK sürecine yönlendirme' },
      { nokta:'Fırsat önceliği', girdi:'Potansiyel tutar, aciliyet, segment, stratejik değer', aksiyon:'Öncelik skoru ve ilk temas SLA tanımı' },
      { nokta:'Sahiplik', girdi:'Bölge, ürün, müşteri sorumlusu, iş yükü', aksiyon:'Satış temsilcisi veya satış yöneticisi ataması' },
      { nokta:'Eksik bilgi', girdi:'Karar verici, bütçe, ihtiyaç, termin, teknik kapsam', aksiyon:'Tamamlama sorusu veya iç görev' },
    ],
    nlQueries: [
      'Bu hafta kaynağı web formu olan yüksek potansiyelli fırsatlar hangileri?',
      'İlk temas SLA dışına çıkan potansiyel müşterileri listele ve ilgili satış yöneticisine takip görevi aç.',
      'Kaybedilen fırsatlarda en sık tekrar eden nedenleri özetle.',
      'Bu ay hangi kanaldan gelen talepler daha hızlı teklife dönüştü?',
      'Karar verici bilgisi eksik olan fırsatlar için satış ekibinden bilgi talep et.',
    ],
    ozelDurumlar: [
      'Müşteri henüz bütçe paylaşmamış olabilir; fırsat takipte kalır.',
      'Teknik kapsam belirsizse teknik ön değerlendirme vakası açılır.',
      'Müşteri şikayeti satış sinyali içinde gelirse müşteri deneyimi sürecine dallanır.',
      'Stratejik müşteri düşük tutarlı görünse bile yönetici görünürlüğüne alınabilir.',
    ],
    kpis: [
      'İlk yanıt süresi',
      'Talep nitelendirme süresi',
      'Nitelikli fırsata dönüşüm oranı',
      'Sahipsiz talep sayısı',
      'Kanal bazlı dönüşüm oranı',
      'Kayıp fırsat nedeni',
      'Mükerrer kayıt oranı',
    ],
    ctaText: 'Talep, Potansiyel Müşteri ve Fırsat Yönetimi sürecinizi Chief ile modelleyin; mevcut sistemlerinizi değiştirmeden bilgiyi sorumluluk, karar, aksiyon ve yönetim görünürlüğüyle birleştirin.',
  },
  'satis-ekibi-ziyaret-yonetimi': {
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
    amac: 'Satış hedeflerini, müşteri ziyaretlerini, görüşme sonuçlarını, takip görevlerini ve teklif ihtiyacını tek satış akışında yönetmek.',
    girdiler: 'Satış hedefleri, müşteri listesi, açık fırsatlar, geçmiş ziyaretler, lokasyon, CRM kayıtları, görüşme notları, müşteri talepleri.',
    ciktilar: 'Ziyaret planı, rota önerisi, görüşme özeti, takip görevi, teklif ihtiyacı, yönetici destek uyarısı, temsilci performans görünümü.',
    steps: [
      'Satış hedefleri ekip, bölge, ürün veya müşteri segmentine göre tanımlanır.',
      'Chief açık fırsatlar ve geçmiş temaslara göre öncelikli müşteri listesini önerir.',
      'Lokasyon, rota, takvim, müşteri değeri ve satış önceliği birlikte değerlendirilir.',
      'Satış temsilcisi ziyareti gerçekleştirir ve görüşme notunu doğal dille kaydeder.',
      'Chief not içinden ihtiyaç, itiraz, rakip bilgisi, karar, taahhüt ve sonraki adımı ayrıştırır.',
      'Takip görevi, teklif hazırlığı, demo, keşif veya yönetici desteği açılır.',
      'Ziyaret sonucu satış hattına işlenir.',
      'Yönetim ziyaret sayısından çok fırsat ilerleme etkisini görür.',
    ],
    kararlar: [
      { nokta:'Ziyaret önceliği', girdi:'Açık fırsat, müşteri değeri, temas gecikmesi, potansiyel', aksiyon:'Öncelikli ziyaret listesi' },
      { nokta:'Rota ve takvim', girdi:'Lokasyon, uygunluk, mesafe, müşteri saatleri', aksiyon:'Ziyaret planı ve rota önerisi' },
      { nokta:'Aksiyon çıkarımı', girdi:'Görüşme notu, taahhüt, itiraz, ihtiyaç', aksiyon:'Takip/teklif/demo/keşif görevi' },
      { nokta:'Risk', girdi:'Rakip tehdidi, fiyat baskısı, memnuniyetsizlik', aksiyon:'Yönetici uyarısı veya müşteri iyileştirme aksiyonu' },
    ],
    nlQueries: [
      'Bu hafta ziyaret edilmesi gereken ama temassız kalan yüksek değerli müşterileri göster.',
      'Ziyaretlerden çıkan teklif ihtiyaçlarını satış temsilcilerine göre grupla.',
      'Rakip tehdidi geçen görüşmeleri özetle ve satış yöneticisine aksiyon listesi hazırla.',
      'Ziyaret verimliliği düşük olan bölgelerde nedenleri göster.',
      'Bu ay ziyaretlerden kaç tanesi teklif veya siparişe dönüştü?',
    ],
    ozelDurumlar: [
      'Ziyaret sırasında şikayet, servis veya finans konusu çıkabilir ve ilgili sürece aktarılır.',
      'Yüksek değerli fırsatta yönetici katılımı ad-hoc görev olarak açılabilir.',
      'Müşteri randevu değiştirirse ziyaret planı yeniden optimize edilir.',
      'Rakip tehdidi özel fiyat ve onay sürecine dönüşebilir.',
    ],
    kpis: [
      'Ziyaret verimliliği',
      'Ziyaretten fırsata dönüşüm oranı',
      'Temassız müşteri sayısı',
      'Takip görevi kapanış oranı',
      'Görüşmeden teklife geçiş süresi',
      'Bölge/temsilci hedef gerçekleşme',
      'Geciken fırsat sayısı',
    ],
    ctaText: 'Satış Ekibi ve Ziyaret Yönetimi sürecinizi Chief ile modelleyin; mevcut sistemlerinizi değiştirmeden bilgiyi sorumluluk, karar, aksiyon ve yönetim görünürlüğüyle birleştirin.',
  },
  'teklif-talebi-bilgi-tamamlama': {
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
    amac: 'Eksik ve belirsiz talepleri doğru teklif hazırlanabilir, doğrulanmış ve izlenebilir iş dosyasına dönüştürmek.',
    girdiler: 'E-posta, WhatsApp, web formu, teknik çizim, fotoğraf, ürün listesi, CRM kaydı, geçmiş teklif, sözleşme, ürün/hizmet kataloğu.',
    ciktilar: 'Tamamlanmış teklif talebi, teknik/ticari bilgi seti, eksik bilgi geçmişi, teklif kapsamı, teknik değerlendirme görevi, fiyatlama için hazır dosya.',
    steps: [
      'Talep mesaj, form, belge veya görüşme özetinden yakalanır.',
      'Chief talebin ürün, hizmet, proje, servis veya teknik değerlendirme niyetini sınıflandırır.',
      'Talep türüne göre gerekli bilgi seti belirlenir.',
      'Eksik veya çelişkili alanlar tespit edilir.',
      'Chief müşteriye veya iç kullanıcıya hedefli sorular yöneltir.',
      'Gelen yanıtlar ilgili iş dosyasına işlenir ve kaynakları korunur.',
      'Teknik ekip gerekiyorsa ön değerlendirme görevi açılır.',
      'Doğrulanan talep fiyatlama ve onay sürecine devredilir.',
    ],
    kararlar: [
      { nokta:'Zorunlu bilgi', girdi:'Ürün/hizmet türü, miktar, lokasyon, tarih, kalite şartı', aksiyon:'Tamamlama diyaloğu veya teklif hazırlığı' },
      { nokta:'Teknik değerlendirme', girdi:'Teknik çizim, fotoğraf, sertifika, özel kapsam', aksiyon:'Teknik ekip görevi' },
      { nokta:'Belge ihtiyacı', girdi:'Sözleşme, şartname, teknik föy, fotoğraf', aksiyon:'Belge talep görevi' },
      { nokta:'Hazır olma', girdi:'Ticari ve teknik bilgi tamam mı?', aksiyon:'Fiyatlama/marj sürecine devir' },
    ],
    nlQueries: [
      'Teklife hazır bekleyen talepleri ve eksik bilgi nedenlerini göster.',
      'En sık eksik gelen bilgi alanlarını müşteri segmentine göre özetle.',
      'Teknik değerlendirme bekleyen talepler için ilgili ekiplerden bilgi talep et.',
      'Bu hafta bilgi tamamlama nedeniyle geciken teklifleri listele.',
      'Benzer geçmiş teklifleri bul ve teklif ekibine referans notu oluştur.',
    ],
    ozelDurumlar: [
      'Müşteri bilgiyi aşamalı paylaşabilir; dosya bekleme durumunda kalır.',
      'Teknik kapsam değişirse soru seti güncellenir.',
      'Bazı talepler saha keşif randevusuna dönüşebilir.',
      'Kritik belirsizlik varsa teklif hazırlığı askıya alınır.',
    ],
    kpis: [
      'Teklife hazır talep oranı',
      'Eksik bilgi tamamlama süresi',
      'En sık eksik kalan alanlar',
      'Revizyon sayısı',
      'Yeniden bilgi isteme oranı',
      'Teknik değerlendirme bekleme süresi',
      'Talep kaynağına göre dönüşüm oranı',
    ],
    ctaText: 'Teklif Talebi ve Bilgi Tamamlama sürecinizi Chief ile modelleyin; mevcut sistemlerinizi değiştirmeden bilgiyi sorumluluk, karar, aksiyon ve yönetim görünürlüğüyle birleştirin.',
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
    amac: 'Teklif fiyatını, maliyet bileşenlerini, kârlılık sınırlarını, iskonto yetkilerini ve onay seviyelerini kontrol altında tutmak.',
    girdiler: 'Tamamlanmış teklif talebi, fiyat listesi, maliyet, stok, işçilik, lojistik, kur, müşteri segmenti, geçmiş teklif, sözleşme, iskonto yetkisi.',
    ciktilar: 'Fiyat önerisi, marj görünümü, iskonto uyarısı, onay görevi, revizyon gerekçesi, teklif fiyatı, karar izi.',
    steps: [
      'Teklif kapsamı ürün, hizmet, işçilik, malzeme, ekipman ve lojistik bileşenlerine ayrılır.',
      'Chief fiyat listesi, maliyet, stok, müşteri koşulu ve geçmiş teklif verisini getirir.',
      'Önerilen fiyat, iskonto sınırı ve beklenen marj hesaplanır.',
      'Marj, iskonto, kredi riski, teslim süresi ve özel koşullar kontrol edilir.',
      'Yetki sınırı aşılırsa onay zinciri başlatılır.',
      'Onay veya revizyon gerekçesi kayıt altında tutulur.',
      'Onaylanan fiyat teklif belgesine işlenir.',
      'Teklif sonucu kazanma/kaybetme ve marj analizi için izlenir.',
    ],
    kararlar: [
      { nokta:'Marj kontrolü', girdi:'Maliyet, fiyat, iskonto, işçilik, lojistik', aksiyon:'Minimum marj altı ise yönetici onayı' },
      { nokta:'Yetki sınırı', girdi:'Tutar, iskonto oranı, müşteri tipi', aksiyon:'Doğru onay zinciri' },
      { nokta:'Kredi/tahsilat riski', girdi:'Cari bakiye, vade, geçmiş gecikme', aksiyon:'Finans görüşü veya teklif blokajı' },
      { nokta:'Revizyon', girdi:'Müşteri talebi, kur/maliyet değişimi', aksiyon:'Yeni fiyat sürümü ve gerekçe kaydı' },
    ],
    nlQueries: [
      'Marj sınırının altında bekleyen teklifleri göster ve ilgili yöneticilere onay görevi aç.',
      'Bu ay en çok iskonto kullanılan ürün/hizmet gruplarını özetle.',
      'Kazandığımız ve kaybettiğimiz tekliflerde marj farkını göster.',
      'Kredi riski olan müşterilere verilen açık teklifleri listele.',
      'Fiyat kuralı güncellemesi gerektiren tekrar eden istisnaları raporla.',
    ],
    ozelDurumlar: [
      'Dış tedarik fiyatı beklenirken teklif dosyası ara durumda kalabilir.',
      'Stratejik müşteri için istisna onayı gerekebilir.',
      'Kur veya hammadde değişiminde fiyat revizyonu açılır.',
      'Finansal risk nedeniyle teklif gönderimi bekletilebilir.',
    ],
    kpis: [
      'Teklif hazırlama süresi',
      'Onay bekleme süresi',
      'Marj sapması',
      'İskonto oranı dağılımı',
      'İstisna teklif sayısı',
      'Fiyat revizyon sıklığı',
      'Kazanılan/kaybedilen tekliflerde marj analizi',
    ],
    ctaText: 'Fiyatlama, Marj ve Onay sürecinizi Chief ile modelleyin; mevcut sistemlerinizi değiştirmeden bilgiyi sorumluluk, karar, aksiyon ve yönetim görünürlüğüyle birleştirin.',
  },
  'tekliften-siparise-gecis': {
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
    amac: 'Onaylanan teklifin tekrar veri girişi olmadan doğru operasyon akışına aktarılmasını sağlamak.',
    girdiler: 'Onaylı teklif, müşteri kabulü, sipariş belgesi, sözleşme, teknik kapsam, teslim tarihi, ödeme koşulu, özel şartlar.',
    ciktilar: 'Sipariş kaydı, üretim ihtiyacı, saha iş emri, proje dosyası, operasyon devir notu, kritik taahhüt listesi, finans ön bilgisi.',
    steps: [
      'Müşteri kabulü veya sipariş sinyali alınır.',
      'Kabul edilen kayıt teklif sürümüyle eşleştirilir.',
      'Kapsam, miktar, fiyat, teslimat, kalite ve ödeme koşulları doğrulanır.',
      'İşin niteliğine göre üretim, montaj, proje, saha servis veya standart sipariş akışı seçilir.',
      'Eksik/uyumsuz bilgi varsa satış, müşteri veya teknik ekipten tamamlanır.',
      'Operasyon sorumluları, kritik tarihler ve kontrol noktaları atanır.',
      'Üretim/saha/servis süreci başlatılır.',
      'Finans ve faturalama için ön kapanış bilgisi oluşturulur.',
    ],
    kararlar: [
      { nokta:'Sürüm doğrulama', girdi:'Müşteri kabulü ve teklif revizyonu', aksiyon:'Doğru teklif sürümüyle eşleştirme' },
      { nokta:'Akış seçimi', girdi:'Ürün/hizmet/proje/servis niteliği', aksiyon:'Üretim, saha iş emri veya proje akışı' },
      { nokta:'Kapsam değişikliği', girdi:'Müşteri notu, sözleşme, teknik fark', aksiyon:'Ek onay veya revizyon' },
      { nokta:'Başlatma kontrolü', girdi:'Stok, kapasite, ekip, ödeme koşulu', aksiyon:'Operasyon başlat veya beklet' },
    ],
    nlQueries: [
      'Onaylanmış ama operasyona aktarılmamış teklifleri listele.',
      'Kapsam uyumsuzluğu nedeniyle bekleyen siparişler için sorumlulara bilgi talebi aç.',
      'Tekliften operasyon başlatmaya en uzun süren müşteri gruplarını göster.',
      'Bu hafta üretim ve saha iş emrine dönüşen teklifleri özetle.',
      'Başlatılamayan işlerin ana nedenlerini yönetim brifingine ekle.',
    ],
    ozelDurumlar: [
      'Müşteri kabulü kısmi olabilir.',
      'Kapsam değişikliği yeni fiyat veya yönetici onayı gerektirebilir.',
      'Teknik netleştirme yapılana kadar iş başlatılamayabilir.',
      'Finansal risk nedeniyle sipariş askıya alınabilir.',
    ],
    kpis: [
      'Siparişe dönüşüm oranı',
      'Tekliften operasyon başlatmaya geçen süre',
      'Eksik/uyumsuz sipariş oranı',
      'Kapsam değişikliği sayısı',
      'Başlatılamayan iş nedenleri',
      'Operasyon devir kalitesi',
      'İlk planlama gecikmesi',
    ],
    ctaText: 'Tekliften Siparişe Geçiş sürecinizi Chief ile modelleyin; mevcut sistemlerinizi değiştirmeden bilgiyi sorumluluk, karar, aksiyon ve yönetim görünürlüğüyle birleştirin.',
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
    amac: 'Saha işlerini doğru ekip, zaman, lokasyon, yetkinlik ve malzeme/ekipmanla planlamak ve kanıtla kapatmak.',
    girdiler: 'Onaylı sipariş, servis talebi, müşteri randevusu, lokasyon, ekip müsaitliği, yetkinlik matrisi, araç/ekipman, stok/parça, SLA.',
    ciktilar: 'İş emri, saha planı, ekip ataması, rota önerisi, kontrol listesi, müşteri bilgilendirmesi, SLA takibi, mobil görev, kapanış kanıtı.',
    steps: [
      'Talep veya onaylı sipariş standart iş emrine dönüştürülür.',
      'Chief iş türü, aciliyet, lokasyon, SLA ve müşteri etkisini değerlendirir.',
      'Yetkinlik, ekip uygunluğu, takvim, araç, ekipman ve malzeme ihtiyacı kontrol edilir.',
      'Atama, tarih, rota ve saha talimatı önerilir.',
      'Gerekli onay veya müşteri randevusu alınır.',
      'Mobil saha görevine talimat, belge, kontrol listesi ve müşteri bilgisi aktarılır.',
      'Saha ilerlemesi, gecikme ve istisnalar izlenir.',
      'İş fotoğraf, form, imza, ölçüm veya sistem kaydıyla kapatılır.',
    ],
    kararlar: [
      { nokta:'Öncelik', girdi:'Aciliyet, müşteri etkisi, SLA, güvenlik', aksiyon:'İş önceliği ve eskalasyon' },
      { nokta:'Ekip atama', girdi:'Yetkinlik, bölge, iş yükü, sertifika', aksiyon:'Uygun ekip/teknisyen' },
      { nokta:'Rota/takvim', girdi:'Lokasyon, müşteri zaman penceresi, süre', aksiyon:'Plan ve rota önerisi' },
      { nokta:'Kapanış', girdi:'Fotoğraf, form, imza, ölçüm, müşteri onayı', aksiyon:'Kapat veya eksik kanıt görevi aç' },
    ],
    nlQueries: [
      'Bugün SLA riski taşıyan açık saha işlerini göster.',
      'Eksik parça nedeniyle bekleyen iş emirlerini listele ve satın almaya görev aç.',
      'Hangi ekiplerde kapasite sıkışması var?',
      'Kanıtı eksik kapatılmaya çalışılan işleri göster.',
      'Bu hafta ilk seferde çözülemeyen saha işlerinin nedenlerini özetle.',
    ],
    ozelDurumlar: [
      'Müşteri randevuyu değiştirebilir; plan yeniden optimize edilir.',
      'Parça beklenirse iş emri bekleme durumuna alınır.',
      'Sahada ek iş veya kapsam değişikliği oluşabilir.',
      'İSG riski nedeniyle iş durdurulabilir ve yönetici onayı istenebilir.',
    ],
    kpis: [
      'Açık iş emri sayısı',
      'Zamanında tamamlama oranı',
      'SLA uyum oranı',
      'İlk seferde çözüm oranı',
      'Ortalama müdahale süresi',
      'Rota/verimlilik metriği',
      'Eksik kanıt nedeniyle kapanmayan işler',
      'Tekrar ziyaret oranı',
    ],
    ctaText: 'İş Emri ve Saha Planlama sürecinizi Chief ile modelleyin; mevcut sistemlerinizi değiştirmeden bilgiyi sorumluluk, karar, aksiyon ve yönetim görünürlüğüyle birleştirin.',
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
    amac: 'Planlı bakım, arıza müdahalesi, parça kullanımı, ekipman geçmişi ve servis kapanışını izlenebilir servis yaşam döngüsüne almak.',
    girdiler: 'Bakım takvimi, arıza bildirimi, IoT alarmı, çağrı merkezi kaydı, müşteri mesajı, saha formu, ekipman geçmişi, garanti, SLA, yedek parça.',
    ciktilar: 'Servis kaydı, öncelik, teknik atama, parça ihtiyacı, servis iş emri, teşhis, işlem kaydı, servis raporu, kök neden, sonraki bakım aksiyonu.',
    steps: [
      'Bakım zamanı, arıza bildirimi veya IoT alarmı süreci başlatır.',
      'Chief arıza türü, müşteri etkisi, güvenlik riski, üretim kaybı ve SLA’ya göre öncelik belirler.',
      'Ekipman geçmişi, önceki arızalar, garanti ve kullanılan parçalar getirilir.',
      'Uygun teknisyen, zaman ve parça ihtiyacı önerilir.',
      'Servis iş emri açılır ve mobil saha akışına aktarılır.',
      'Teknisyen teşhis, işlem, parça, süre, fotoğraf ve ölçüm bilgilerini kaydeder.',
      'Kapanışta servis raporu oluşturulur.',
      'Tekrar eden arıza varsa problem/kök neden analizi ve iyileştirme görevi başlatılır.',
    ],
    kararlar: [
      { nokta:'Incident/problem ayrımı', girdi:'Arıza tekrarı, etki, geçmiş kayıt', aksiyon:'Tekil servis veya kök neden vakası' },
      { nokta:'Öncelik', girdi:'Güvenlik, üretim kaybı, müşteri seviyesi, SLA', aksiyon:'Müdahale seviyesi ve eskalasyon' },
      { nokta:'Parça/garanti', girdi:'Stok, garanti, sözleşme, servis tipi', aksiyon:'Ücretli/garanti servis ve parça talebi' },
      { nokta:'Kapanış', girdi:'Teşhis, işlem, ölçüm, müşteri onayı', aksiyon:'Servis raporu veya ek aksiyon' },
    ],
    nlQueries: [
      'Kritik ekipmanlarda tekrar eden arızaları kök nedenleriyle özetle.',
      'Bakım planına uyum oranını lokasyon bazında göster.',
      'Parça beklediği için SLA riski taşıyan servisleri listele.',
      'Garanti kapsamında açılan ama faturalama riski olan kayıtları göster.',
      'Tekrar eden arıza için kalite ve bakım ekiplerine ortak aksiyon aç.',
    ],
    ozelDurumlar: [
      'Arıza sahada farklı çıkabilir ve teşhis süreci genişler.',
      'Parça tedariki beklenebilir.',
      'Garanti/ücretli servis ayrımı müşteri veya finans onayı gerektirebilir.',
      'Tekrarlayan arıza problem yönetimine dönüşebilir.',
    ],
    kpis: [
      'Ortalama müdahale süresi',
      'Ortalama çözüm süresi',
      'İlk seferde çözüm oranı',
      'Tekrar arıza oranı',
      'Bakım uyum oranı',
      'Kritik ekipman risk sayısı',
      'Parça bekleme süresi',
      'Servis maliyeti',
      'Müşteri memnuniyeti',
    ],
    ctaText: 'Bakım, Arıza ve Teknik Servis sürecinizi Chief ile modelleyin; mevcut sistemlerinizi değiştirmeden bilgiyi sorumluluk, karar, aksiyon ve yönetim görünürlüğüyle birleştirin.',
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
    amac: 'Teknik kapsamı, çizimleri, malzeme ihtiyacını, ekipman kullanımını, işçiliği ve kabul kriterlerini kontrollü uygulama planına dönüştürmek.',
    girdiler: 'Onaylı teknik kapsam, teknik resim, proje planı, malzeme listesi, ekipman ihtiyacı, işçilik planı, saha koşulları, müşteri kabul kriteri, İSG şartları.',
    ciktilar: 'Proje/montaj dosyası, iş paketleri, uygulama planı, malzeme/ekipman hazır olma kontrolü, ilerleme kaydı, eksik iş listesi, kabul tutanağı.',
    steps: [
      'Onaylı teklif, teknik doküman ve teslim kriterleri proje dosyasında birleştirilir.',
      'İş paketleri montaj adımları, yetkinlik, ekipman, malzeme ve süre gereksinimine ayrılır.',
      'Chief tedarik, ekip, saha ve ekipman uygunluğunu kontrol eder.',
      'Uygulama planı ve sorumlular belirlenir.',
      'Saha ilerlemesi kontrol listeleri, fotoğraf, ölçüm ve tutanaklarla izlenir.',
      'Eksik iş, uygunsuzluk veya değişiklik talebi ilgili onay akışına taşınır.',
      'Geçici/kesin kabul süreci yönetilir.',
      'Kapanış finans, garanti ve müşteri geri bildirimi akışına bağlanır.',
    ],
    kararlar: [
      { nokta:'Doküman kontrolü', girdi:'Teknik resim, revizyon, kapsam', aksiyon:'Güncel dokümanla başlat veya beklet' },
      { nokta:'Hazır olma', girdi:'Malzeme, ekipman, işçilik, saha koşulu', aksiyon:'Uygulama planı veya eksik hazırlık görevi' },
      { nokta:'Değişiklik', girdi:'Ek iş, müşteri talebi, saha farkı', aksiyon:'Onay ve fiyat etkisi' },
      { nokta:'Kabul', girdi:'Kontrol listesi, ölçüm, fotoğraf, tutanak', aksiyon:'Geçici/kesin kabul veya eksik iş listesi' },
    ],
    nlQueries: [
      'Planlanan-gerçekleşen ilerleme sapmalarını proje bazında göster.',
      'Malzeme veya ekipman eksikliği nedeniyle riskte olan montajları listele.',
      'Ek iş talebi açılan projelerde marj etkisini özetle.',
      'Kabul bekleyen işlerin eksiklerini ilgili ekiplere görev olarak aç.',
      'Teknik revizyon nedeniyle geciken işleri yönetim brifingine ekle.',
    ],
    ozelDurumlar: [
      'Sahada teknik revizyon gerekebilir.',
      'Malzeme gecikmesi proje takvimini etkileyebilir.',
      'Müşteri kapsam değişikliği isteyebilir.',
      'Eksik iş listesi kapanıştan önce ayrı takip edilebilir.',
      'Hakediş/kabul adımları aşamalı ilerleyebilir.',
    ],
    kpis: [
      'Planlanan-gerçekleşen ilerleme',
      'Kritik gecikme nedenleri',
      'Malzeme/ekipman eksikleri',
      'Ek iş ve değişiklik sayısı',
      'Kabulde eksik iş oranı',
      'İşçilik gerçekleşen sapması',
      'Hakediş/fatura hazır olma süresi',
    ],
    ctaText: 'Montaj ve Proje Uygulama sürecinizi Chief ile modelleyin; mevcut sistemlerinizi değiştirmeden bilgiyi sorumluluk, karar, aksiyon ve yönetim görünürlüğüyle birleştirin.',
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
    amac: 'Onaylı siparişleri kapasite, termin, malzeme, makine, vardiya, işçilik ve kalite koşullarıyla uyumlu üretim planına dönüştürmek.',
    girdiler: 'Sipariş, ürün ağacı, reçete, operasyon rotası, stok, hammadde, makine/hat kapasitesi, vardiya, personel, termin, kalite şartı, OEE/duruş bilgisi.',
    ciktilar: 'Üretim ihtiyacı, kapasite görünümü, iş emri önerisi, üretim sırası, darboğaz uyarısı, malzeme açığı görevi, termin riski, plan-gerçekleşen analizi.',
    steps: [
      'Onaylı sipariş üretim ihtiyacına çevrilir.',
      'Chief ürün ağacı, operasyon, miktar, termin ve kalite koşullarını getirir.',
      'Makine, hat, vardiya, personel, kalıp/aparat ve malzeme uygunluğu kontrol edilir.',
      'Kapasite kısıtlarına göre üretim sırası ve alternatif planlar önerilir.',
      'Malzeme veya kapasite açığı varsa satın alma, vardiya, dış kaynak veya termin kararı başlatılır.',
      'Üretim ilerlemesi, fire, duruş ve kalite sonucu plana geri beslenir.',
      'Sapmalar yönetim için görünür hale getirilir.',
      'Tamamlanan üretim teslimat, kalite ve fatura kapanışına bağlanır.',
    ],
    kararlar: [
      { nokta:'Kapasite', girdi:'Makine, hat, vardiya, işçilik, setup', aksiyon:'Üretim planı veya darboğaz uyarısı' },
      { nokta:'Malzeme', girdi:'BOM/reçete, stok, yoldaki sipariş', aksiyon:'Satın alma/rezervasyon görevi' },
      { nokta:'Termin', girdi:'Sipariş teslim tarihi, kapasite, malzeme', aksiyon:'Termin riski veya alternatif plan' },
      { nokta:'Sapma', girdi:'Fire, duruş, kalite, gecikme', aksiyon:'Kök neden ve yönetim aksiyonu' },
    ],
    nlQueries: [
      'Termin riski taşıyan siparişleri nedenleriyle göster.',
      'Bu hafta üretimdeki ana darboğaz kaynaklarını özetle.',
      'Malzeme açığı nedeniyle bekleyen üretim emirleri için satın almaya görev aç.',
      'Plan-gerçekleşen sapması yüksek olan ürün gruplarını göster.',
      'Kapasite artışı, dış kaynak veya termin revizyonu senaryolarını karşılaştır.',
    ],
    ozelDurumlar: [
      'Malzeme tedariki gecikebilir.',
      'Makine duruşu planı bozabilir.',
      'Kalite uygunsuzluğu yeniden işleme gerektirebilir.',
      'Müşteri termin değişikliği isteyebilir.',
      'Öncelik yönetici kararıyla değişebilir.',
    ],
    kpis: [
      'Kapasite kullanım oranı',
      'Termin uyum oranı',
      'Plan sapması',
      'Darboğaz süresi',
      'Fire oranı',
      'Duruş süresi',
      'Malzeme nedeniyle bekleyen iş sayısı',
      'Plan-gerçekleşen maliyet/süre sapması',
    ],
    ctaText: 'Üretim Planlama ve Kapasite sürecinizi Chief ile modelleyin; mevcut sistemlerinizi değiştirmeden bilgiyi sorumluluk, karar, aksiyon ve yönetim görünürlüğüyle birleştirin.',
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
    amac: 'Üretim, servis, bakım ve saha operasyonları için gerekli malzeme ve parçaları kritik hale gelmeden aksiyona bağlamak.',
    girdiler: 'Stok, yedek parça, ürün ağacı, servis iş emri, bakım planı, açık sipariş, tüketim hızı, minimum stok, tedarikçi terminleri, depo lokasyonları.',
    ciktilar: 'Kritik stok uyarısı, rezervasyon, satın alma talebi, transfer önerisi, alternatif parça önerisi, tedarik gecikme uyarısı, stok nedeniyle bekleyen işler.',
    steps: [
      'Üretim, servis ve bakım ihtiyaçları stok kodlarıyla ilişkilendirilir.',
      'Chief mevcut, rezerve, yoldaki ve kritik stok miktarlarını birlikte değerlendirir.',
      'Minimum seviye, tüketim hızı, teslim süresi ve iş önceliğine göre risk hesaplanır.',
      'Transfer, rezervasyon, satın alma veya alternatif parça aksiyonu önerilir.',
      'Yetki veya bütçe gerekiyorsa onay akışı başlatılır.',
      'Tedarik süreci izlenir.',
      'Malzeme geldiğinde ilgili iş emri, üretim planı veya servis kaydı güncellenir.',
      'Tedarik gecikmeleri yönetim görünümüne taşınır.',
    ],
    kararlar: [
      { nokta:'Kullanılabilir stok', girdi:'Mevcut, rezerve, kalite blokajı, lokasyon', aksiyon:'Kullanılabilir miktar' },
      { nokta:'Aksiyon türü', girdi:'İhtiyaç tarihi, depo, maliyet, termin', aksiyon:'Satın alma, transfer, rezervasyon' },
      { nokta:'Alternatif parça', girdi:'Uyumluluk, teknik onay, garanti', aksiyon:'Alternatif öneri veya teknik onay' },
      { nokta:'Risk', girdi:'Tedarik süresi, iş önceliği, SLA/termin', aksiyon:'Gecikme uyarısı ve eskalasyon' },
    ],
    nlQueries: [
      'Stok nedeniyle bekleyen işleri önem sırasına göre göster.',
      'Kritik seviyeye düşecek parçaları 30 günlük tüketim tahminiyle listele.',
      'Alternatif parça onayı bekleyen işleri teknik ekibe görev olarak aç.',
      'Tedarikçi gecikmelerinin üretim ve servis üzerindeki etkisini özetle.',
      'Fazla ve yavaş hareket eden stokları finansal etkiyle göster.',
    ],
    ozelDurumlar: [
      'Alternatif parça teknik onay gerektirebilir.',
      'Satın alma fiyatı bütçe/onay gerektirebilir.',
      'Parça gelene kadar iş beklemeye alınabilir.',
      'Acil durumda farklı lokasyondan transfer yapılabilir.',
    ],
    kpis: [
      'Kritik stok sayısı',
      'Stok nedeniyle bekleyen işler',
      'Parça bulunurluk oranı',
      'Tedarik gecikme süresi',
      'Fazla/yavaş hareket eden stok',
      'Rezervasyon doğruluğu',
      'Satın alma talebi kapanış süresi',
    ],
    ctaText: 'Stok, Yedek Parça ve Tedarik sürecinizi Chief ile modelleyin; mevcut sistemlerinizi değiştirmeden bilgiyi sorumluluk, karar, aksiyon ve yönetim görünürlüğüyle birleştirin.',
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
    amac: 'Uygunsuzlukları etki, kök neden, sorumluluk, düzeltici faaliyet ve doğrulama ile kapalı döngüye almak.',
    girdiler: 'Kalite kontrol kaydı, müşteri şikayeti, saha kanıtı, üretim ölçümü, tedarikçi hatası, iade, fotoğraf, form, denetim bulgusu, İSG/uyum kaydı.',
    ciktilar: 'Uygunsuzluk kaydı, etki sınıflandırması, kök neden analizi, düzeltici faaliyet, sorumlu, son tarih, doğrulama kanıtı, tekrar riski, kalite KPI’ı.',
    steps: [
      'Uygunsuzluk sinyali üretim, saha, müşteri, tedarikçi veya denetim kanalından gelir.',
      'Chief uygunsuzluğu ürün, iş emri, müşteri, lokasyon, ekip, tedarikçi veya parti/lot ile ilişkilendirir.',
      'Etki, aciliyet, güvenlik, müşteri etkisi ve tekrar riski sınıflandırılır.',
      'Gerekli düzeltme, inceleme, durdurma veya eskalasyon görevi açılır.',
      'Kök neden analizi ve düzeltici faaliyet sorumlusu atanır.',
      'Faaliyet tamamlanınca kanıt ve doğrulama bilgisi toplanır.',
      'Etkinlik kontrolü yapılır.',
      'Tekrar eden uygunsuzluk yönetim içgörüsüne dönüşür.',
    ],
    kararlar: [
      { nokta:'Kritiklik', girdi:'Güvenlik, müşteri etkisi, teslimat, yasal risk', aksiyon:'Blokaj, eskalasyon veya normal düzeltme' },
      { nokta:'Kök neden', girdi:'Üretim, tedarikçi, saha, tasarım, süreç', aksiyon:'Sorumlu ekip ve düzeltici aksiyon' },
      { nokta:'Doğrulama', girdi:'Kanıt, ölçüm, müşteri onayı, tekrar kontrol', aksiyon:'Kapat veya tekrar incele' },
      { nokta:'Tekrar riski', girdi:'Benzer kayıt sayısı, kök neden tekrarı', aksiyon:'Süreç iyileştirme görevi' },
    ],
    nlQueries: [
      'Tekrar eden uygunsuzlukları kök neden ve sorumlularıyla göster.',
      'Kapanış tarihi geçmiş düzeltici faaliyetleri ilgili yöneticilere görev olarak aç.',
      'Müşteri şikayetiyle bağlantılı kalite kayıtlarını özetle.',
      'Kalite uygunsuzluğunun teslimat ve maliyet etkisini göster.',
      'Etkinliği doğrulanmamış düzeltici faaliyetleri listele.',
    ],
    ozelDurumlar: [
      'İnceleme sırasında kök neden değişebilir.',
      'Müşteri telafisi veya iade süreci gerekebilir.',
      'Tedarikçi aksiyonu dış bağımlılık yaratabilir.',
      'Kalite kapanışı yönetici onayı gerektirebilir.',
    ],
    kpis: [
      'Uygunsuzluk sayısı',
      'Kritik uygunsuzluk oranı',
      'Düzeltici faaliyet kapanış süresi',
      'Tekrar eden uygunsuzluk oranı',
      'İlk seferde doğru üretim/hizmet oranı',
      'Yeniden işleme maliyeti',
      'Müşteri şikayeti bağlantılı kalite kayıtları',
      'Etkinlik doğrulama oranı',
    ],
    ctaText: 'Kalite Uygunsuzluk ve Düzeltici Faaliyet sürecinizi Chief ile modelleyin; mevcut sistemlerinizi değiştirmeden bilgiyi sorumluluk, karar, aksiyon ve yönetim görünürlüğüyle birleştirin.',
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
    amac: 'İşin yapılması, teslim edilmesi, faturalanması, tahsil edilmesi ve finansal olarak kapatılmasını aynı zincirde görünür hale getirmek.',
    girdiler: 'Teklif, sipariş, iş emri, teslim/servis kapanışı, hakediş, müşteri onayı, fatura, vade, tahsilat, cari hesap, masraf, maliyet merkezi.',
    ciktilar: 'Faturalanmamış iş listesi, fatura tetikleyicisi, tahsilat takip görevi, vade uyarısı, gecikme eskalasyonu, operasyon-finans uyumsuzluğu, nakit riski özeti.',
    steps: [
      'İş, servis, üretim, teslim veya hakediş kapanış sinyali alınır.',
      'Chief kapanışın faturaya hazır olup olmadığını kontrol eder.',
      'Eksik belge, müşteri onayı, miktar, fiyat veya hakediş bilgisi varsa görev açılır.',
      'Fatura kaydı muhasebe/e-fatura sistemiyle ilişkilendirilir.',
      'Vade ve tahsilat durumu izlenir.',
      'Vade yaklaşınca müşteri iletişimi veya iç takip görevi başlatılır.',
      'Gecikme durumunda satış, finans veya yönetici eskalasyonu çalışır.',
      'Tahsilat gerçekleşince iş finansal olarak kapatılır ve yönetim özetine yansır.',
    ],
    kararlar: [
      { nokta:'Faturaya hazır olma', girdi:'Kapanış kanıtı, hakediş, müşteri onayı, fiyat', aksiyon:'Fatura görevi veya eksik bilgi görevi' },
      { nokta:'Vade riski', girdi:'Vade tarihi, müşteri geçmişi, tutar', aksiyon:'Tahsilat hatırlatma veya eskalasyon' },
      { nokta:'İtiraz', girdi:'Müşteri açıklaması, fatura kalemi, sözleşme', aksiyon:'İnceleme ve düzeltme vakası' },
      { nokta:'Mali kapanış', girdi:'Tahsilat, masraf, maliyet merkezi', aksiyon:'İşi finansal kapat veya açık riskte tut' },
    ],
    nlQueries: [
      'Faturalanmamış işleri tutar ve sorumlu ekip bazında göster.',
      'Vadesi yaklaşan ve yüksek riskli alacaklar için satış/finans ekiplerine takip görevi aç.',
      'Operasyon kapanış kanıtı eksik olduğu için fatura kesilemeyen işleri listele.',
      'Tahsilat gecikmelerinin müşteri segmentine göre nedenlerini özetle.',
      'Bu ay iş bazlı kârlılıkta sapma gösteren projeleri göster.',
    ],
    ozelDurumlar: [
      'Müşteri fatura itirazı açabilir.',
      'Kısmi hakediş veya kısmi tahsilat olabilir.',
      'Operasyon eksik kapanış nedeniyle fatura kesilemeyebilir.',
      'Satış ekibi müşteri ilişkisi nedeniyle tahsilat aksiyonuna dahil olabilir.',
    ],
    kpis: [
      'Faturalanmamış iş tutarı',
      'Fatura kesme süresi',
      'Vadesi geçmiş alacak',
      'Ortalama tahsilat süresi',
      'Operasyon-finans uyumsuzluk sayısı',
      'Fatura itiraz oranı',
      'Nakit riski',
      'İş bazlı kârlılık görünürlüğü',
    ],
    ctaText: 'Fatura, Tahsilat ve İş Kapanışı sürecinizi Chief ile modelleyin; mevcut sistemlerinizi değiştirmeden bilgiyi sorumluluk, karar, aksiyon ve yönetim görünürlüğüyle birleştirin.',
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
    amac: 'Müşteri geri bildirimlerini konu, duygu, kök neden, sorumlu ve iyileştirme aksiyonuyla ilişkilendirmek.',
    girdiler: 'NPS, CSAT, anket, WhatsApp/SMS/e-posta geri bildirimi, şikayet, çağrı merkezi kaydı, açık uçlu yorum, servis sonrası değerlendirme, Dendy içgörüsü.',
    ciktilar: 'Tema analizi, duygu analizi, kritik şikayet uyarısı, iyileştirme görevi, müşteri geri dönüş görevi, kök neden, memnuniyet trendi, kapanış etkisi.',
    steps: [
      'Geri bildirim uygun kanaldan toplanır.',
      'Chief yanıtı skor, duygu, tema, konu, aciliyet ve müşteri segmentine göre analiz eder.',
      'Geri bildirim ilgili sipariş, ürün, mağaza, servis, ekip veya lokasyonla ilişkilendirilir.',
      'Kritik kayıt varsa eskalasyon başlatılır.',
      'Geri dönüş, telafi, inceleme veya süreç iyileştirme görevi atanır.',
      'Aksiyon kapanışı izlenir.',
      'Müşteriye kapanış bilgisi verilir.',
      'Tekrar eden temalar yönetim içgörüsüne dönüşür.',
    ],
    kararlar: [
      { nokta:'Kritiklik', girdi:'Duygu, konu, müşteri değeri, tekrar, kamu riski', aksiyon:'Eskalasyon veya normal aksiyon' },
      { nokta:'Sorumlu alan', girdi:'Ürün, servis, mağaza, saha ekibi, finans', aksiyon:'Doğru ekip ve görev' },
      { nokta:'Telafi', girdi:'Sözleşme, müşteri değeri, hata tipi', aksiyon:'Telafi/onay süreci' },
      { nokta:'Yeniden ölçüm', girdi:'Aksiyon kapandı mı, müşteri yanıt verdi mi?', aksiyon:'Memnuniyet etkisi takibi' },
    ],
    nlQueries: [
      'Düşen NPS’in operasyonel nedenlerini müşteri segmentine göre özetle.',
      'Kritik şikayetleri ilgili süreç sahiplerine görev olarak aç.',
      'En çok tekrar eden müşteri temalarını lokasyon ve ürün bazında göster.',
      'Kapandı denilen ama memnuniyet etkisi ölçülmeyen aksiyonları listele.',
      'Riskli müşteriler için iyileştirme planı öner.',
    ],
    ozelDurumlar: [
      'Müşteri şikayeti teknik servis, kalite, satış veya finans sürecine dönebilir.',
      'Telafi onay gerektirebilir.',
      'Kök neden birden fazla departmanı ilgilendirebilir.',
      'Riskli müşteri ayrı iyileştirme vakasına dönüşebilir.',
    ],
    kpis: [
      'NPS / CSAT',
      'Kritik geri bildirim sayısı',
      'Şikayet kapanış süresi',
      'Tekrar şikayet oranı',
      'Tema/kök neden trendi',
      'Geri dönüş süresi',
      'İyileştirme aksiyon kapanış oranı',
      'Aksiyon sonrası memnuniyet değişimi',
    ],
    ctaText: 'Müşteri Geri Bildirimi ve İyileştirme sürecinizi Chief ile modelleyin; mevcut sistemlerinizi değiştirmeden bilgiyi sorumluluk, karar, aksiyon ve yönetim görünürlüğüyle birleştirin.',
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
    amac: 'Çalışan geri bildirimlerini güvenli, anlamlı ve aksiyon alınabilir şekilde analiz ederek İK, eğitim, iş yükü, iletişim ve yönetim aksiyonlarına dönüştürmek.',
    girdiler: 'Çalışan anketi, nabız ölçümü, açık uçlu yorum, eğitim ihtiyacı, iş yükü bildirimi, bağlılık sinyali, İSG bildirimi, yöneticilik geri bildirimi, Dendy çalışan deneyimi verisi.',
    ciktilar: 'Tema ve duygu analizi, riskli konu uyarısı, İK aksiyon listesi, eğitim ihtiyacı, bağlılık trendi, anonim yönetim özeti, iyileştirme takip planı.',
    steps: [
      'Periyodik veya olay bazlı geri bildirim akışı başlatılır.',
      'Çalışan yanıtları uygun kanallardan toplanır.',
      'Chief tema, duygu, ihtiyaç, risk ve tekrar eden konuları analiz eder.',
      'Gizlilik ve minimum örneklem kurallarına göre sonuçlar gruplanır.',
      'İK veya yönetim için aksiyon önerisi oluşturulur.',
      'Eğitim, iletişim, iş yükü, liderlik, bağlılık veya İSG aksiyonları atanır.',
      'Aksiyonların kapanışı ve etkisi izlenir.',
      'Sonraki ölçümle iyileşme değerlendirilir.',
    ],
    kararlar: [
      { nokta:'Anonimlik', girdi:'Konu hassasiyeti, grup büyüklüğü, rol yetkisi', aksiyon:'Anonim özet veya kısıtlı erişim' },
      { nokta:'Kritik risk', girdi:'İSG, etik, mobbing, güvenlik, yoğun olumsuz duygu', aksiyon:'Yetkili kanala eskalasyon' },
      { nokta:'Aksiyon alanı', girdi:'Eğitim, iş yükü, liderlik, iletişim, süreç', aksiyon:'İK/yönetim görevi' },
      { nokta:'Etki', girdi:'Sonraki ölçüm, aksiyon kapanışı, trend', aksiyon:'İyileşme veya yeni aksiyon' },
    ],
    nlQueries: [
      'Çalışan bağlılığı düşen ekiplerde tekrar eden temaları anonim şekilde özetle.',
      'Eğitim ihtiyacı yüksek çıkan alanlar için İK’ya aksiyon planı oluştur.',
      'İş yükü ve vardiya kaynaklı riskleri operasyon verisiyle birlikte göster.',
      'Kapanmamış İK aksiyonlarını sorumlu ve tarihleriyle listele.',
      'Son nabız ölçümüne göre yönetim toplantısı için öncelikli 5 konuyu hazırla.',
    ],
    ozelDurumlar: [
      'Hassas geri bildirim anonim vaka olarak ele alınabilir.',
      'Etik veya güvenlik bildirimi özel yetkili kanala yönlenebilir.',
      'Kök neden İK dışı operasyonel sorun olabilir.',
      'Aksiyonun etkisi sonraki nabız ölçümüyle doğrulanabilir.',
    ],
    kpis: [
      'Katılım oranı',
      'Bağlılık trendi',
      'Kritik tema sayısı',
      'İK aksiyon kapanış oranı',
      'Eğitim ihtiyacı karşılama oranı',
      'Tekrar eden çalışan deneyimi sorunları',
      'Departman bazlı iyileşme trendi',
      'Aksiyon sonrası memnuniyet değişimi',
    ],
    ctaText: 'Çalışan Deneyimi ve İK Aksiyonları sürecinizi Chief ile modelleyin; mevcut sistemlerinizi değiştirmeden bilgiyi sorumluluk, karar, aksiyon ve yönetim görünürlüğüyle birleştirin.',
  },
};

/* ---- Müşteri hikayesi veritabanı ---- */
const IS_SURECLERI_CS = {
  'yonetimsel-dogal-dil-veri-stratejik-aksiyon': {
    logo:'logo-termoinduktion.jpg', company:'Termo İndüksiyon', industry:'Endüstriyel Isıl İşlem · 1981\'den beri',
    quote:'"Pazartesi toplantısına her hafta veri toplamak için Cuma günü başlardık — satıştan, sahadan, muhasebeden ayrı ayrı sorardık. Chief ile o toplantı hazırlığı tamamen ortadan kalktı. Pazar gecesi özet geliyor, Pazartesi toplantısı 12 dakika sürüyor."',
  },
  'talep-potansiyel-musteri-firsat-yonetimi': {
    logo:'logo-ikon.png', company:'İkon Araştırma', industry:'Pazar Araştırması & Danışmanlık',
    quote:'"Pazar araştırması projelerine gelen ilgi talepleri e-posta, web formu ve referanslar üzerinden dağılıyordu. Chief ile her kanal tek akışta toplanıyor; hangi talebin öncelikli, kimin sorumlusu — anında görünür, hiçbir fırsat sessiz kapanmıyor."',
  },
  'satis-ekibi-ziyaret-yonetimi': {
    logo:'logo-termoinduktion.jpg', company:'Termo İndüksiyon', industry:'Endüstriyel Isıl İşlem · 1981\'den beri',
    quote:'"Satış ekibimizin ziyaret notları farklı kişisel dosyalara dağılmış, doğru veriye anında ulaşmak güçleşmişti. Chief ile tüm satış hattı, toplantı çıktıları ve teklif süreçleri tek ekranda görünür. Artık müdür sahadan dönen temsilciyi arayıp sormak zorunda değil."',
  },
  'teklif-talebi-bilgi-tamamlama': {
    logo:'logo-tak.png', company:'TAK-Umwelt GmbH', industry:'Çevre Teknolojisi · Almanya',
    quote:'"Teknik servis teklifleri çoğu zaman eksik bilgiyle geliyordu — lokasyon, ekipman tipi, erişim koşulları. Chief ile bilgi tamamlama akışı sayesinde teklif ekibimiz ilk mesajdan doğrulanmış iş dosyasına geçiyor, yeniden yazışma neredeyse kalmadı."',
  },
  'fiyatlama-marj-onay': {
    logo:'logo-termoinduktion.jpg', company:'Termo İndüksiyon', industry:'Endüstriyel Isıl İşlem · 1981\'den beri',
    quote:'"Aynı iş için farklı fiyatlar verilebiliyordu, marj dışı teklifler geç fark ediliyordu. Chief ile marj kontrolü ve onay zinciri otomatikleşti; yetki dışı fiyat artık çıkmıyor, her karar kayıt altında."',
  },
  'tekliften-siparise-gecis': {
    logo:'logo-tak.png', company:'TAK-Umwelt GmbH', industry:'Çevre Teknolojisi · Almanya',
    quote:'"Onaylanan saha servis kapsamını iş emrine aktarırken teknik detaylar kayboluyordu. Chief ile kapsam, ekipman bilgisi ve müşteri taahhütleri operasyona kayıpsız geçiyor; teknisyen sahaya doğru brief ile çıkıyor."',
  },
  'is-emri-saha-planlama': {
    logo:'logo-tak.png', company:'TAK-Umwelt GmbH', industry:'Çevre Teknolojisi · Almanya',
    quote:'"Servis talepleri telefon, e-posta ve portaldan aynı anda geliyordu. Her birini manuel takibe almak ve belgelendirmek ekibe büyük yük bindiriyordu. Chief ile hiçbir talep kaybolmuyor, her iş emrinin durumu gerçek zamanlı görünüyor, kapanış belgesi otomatik oluşuyor."',
  },
  'bakim-ariza-teknik-servis': {
    logo:'logo-tak.png', company:'TAK-Umwelt GmbH', industry:'Çevre Teknolojisi · Almanya',
    quote:'"Periyodik bakım tarihleri Excel\'de takip ediliyordu, arada kayıyor ve gecikiyordu. Arıza geldiğinde ise ekipman geçmişini bulmak için 3 farklı sisteme giriyorduk. Chief ile bakım takvimi otomatik, arıza geldiğinde iş emri dakikalar içinde hazır."',
  },
  'montaj-proje-uygulama': {
    logo:'logo-ikon.png', company:'İkon Araştırma', industry:'Pazar Araştırması & Danışmanlık',
    quote:'"Saha araştırması projelerinde anketör planlaması, veri toplama adımları ve müşteri kabul kriterleri farklı araçlardaydı. Chief ile uygulama planı, saha ilerlemesi ve kabul süreci tek akışta izleniyor."',
  },
  'uretim-planlama-kapasite': {
    logo:'logo-tak.png', company:'TAK-Umwelt GmbH', industry:'Çevre Teknolojisi · Almanya',
    quote:'"Kapasite kısıtlarını görmeden sipariş alıyorduk; darboğazlar son anda ortaya çıkıyordu. Chief ile termin riski görünür hale geldi, sürpriz duruş kalmadı, müşteriye gerçekçi teslim tarihi veriyoruz."',
  },
  'stok-yedek-parca-tedarik': {
    logo:'logo-ikon.png', company:'İkon Araştırma', industry:'Pazar Araştırması & Danışmanlık',
    quote:'"Saha projelerinde anket materyali, ekipman ve araç ihtiyacını son anda öğreniyorduk. Chief ile hangi projenin ne zaman neye ihtiyacı var — bağlamıyla görünür; eksiklik oluşmadan rezervasyon ve tedarik aksiyonu başlıyor."',
  },
  'kalite-uygunsuzluk-duzeltici-faaliyet': {
    logo:'logo-termoinduktion.jpg', company:'Termo İndüksiyon', industry:'Endüstriyel Isıl İşlem · 1981\'den beri',
    quote:'"Isıl işlem hatalarını kayıt altına alıyorduk ama kök neden bulunana kadar aynı sorunlar tekrarlanıyordu. Chief ile her uygunsuzluk düzeltici aksiyona ve doğrulama adımına bağlandı; tekrar oranı belirgin düştü."',
  },
  'fatura-tahsilat-is-kapanisi': {
    logo:'logo-termoinduktion.jpg', company:'Termo İndüksiyon', industry:'Endüstriyel Isıl İşlem · 1981\'den beri',
    quote:'"Faturalanmamış işleri bulmak için muhasebe ile satış arasında gidip geliyorduk. Chief ile iş kapandığında fatura zinciri otomatik başlıyor; geciken alacaklar görünür, tahsilat aksiyonu zamanında açılıyor."',
  },
  'musteri-geri-bildirimi-iyilestirme': {
    logo:'logo-ikon.png', company:'İkon Araştırma', industry:'Pazar Araştırması & Danışmanlık',
    quote:'"NPS skorlarımızın düştüğünü görüyorduk ama hangi sürecin neden etkilediğini anlayamıyorduk. Chief ile geri bildirim konu, sorumlu ve aksiyona bağlandı; artık skor raporu değil, kapalı döngü görüyoruz."',
  },
  'calisan-deneyimi-ik-aksiyonlari': {
    logo:'logo-ikon.png', company:'İkon Araştırma', industry:'Pazar Araştırması & Danışmanlık',
    quote:'"Çalışan anket sonuçları rapor olarak kalıyordu; İK hangi aksiyonu ne zaman alacak bilemiyordu. Chief ile tekrar eden temalar görünür hale geldi, her sinyal İK aksiyonuna bağlandı."',
  },
};


/* ================================================================
   KULLANIM ALANLARI — Ana listeleme sayfası
   ================================================================ */
function renderKullanimAlanlariListing() {
  var cols = [
    { key:'is-sureclerine-gore', label:'İş Süreçlerine Göre', icon:'flow',
      desc:'Satış, operasyon, üretim, finans ve paydaş deneyimi süreçlerini yönetin.',
      href:'#/kullanim-alanlari/is-sureclerine-gore' },
    { key:'sektorlere-gore', label:'Sektörlere Göre', icon:'factory',
      desc:'Üretim, hizmet, perakende, kamu ve KOBİ için özel kurgu.',
      href:'#/kullanim-alanlari/sektorlere-gore' },
    { key:'isletme-olcegine-gore', label:'İşletme Ölçeğine Göre', icon:'users',
      desc:'Mikro girişimden büyük kurumsal yapılara kadar her ölçek için.',
      href:'#/kullanim-alanlari/isletme-olcegine-gore' },
    { key:'kullanim-senaryolari', label:'Kullanım Senaryoları', icon:'bolt',
      desc:'Talep karşılama, teklif, iş emri, toplantı ve onay akışları.',
      href:'#/kullanim-alanlari/kullanim-senaryolari' },
  ];

  var h = '<section class="detail-hero"><div class="container">' +
    crumb(['Kullanım Alanları']) +
    '<span class="eyebrow">KULLANIM ALANLARI</span>' +
    '<h1 style="margin-top:16px;max-width:720px">Chief ile nerede, nasıl çalışırsınız?</h1>' +
    '<p class="lead" style="max-width:640px">İş süreçlerinize, sektörünüze, işletme ölçeğinize ve kullanım senaryolarınıza göre size özel değeri keşfedin.</p>' +
    '</div></section>';

  h += '<section class="tight"><div class="container"><div class="cards-grid">';
  cols.forEach(function(c, n) {
    h += '<a class="card" href="' + c.href + '">' +
      '<div class="card-ico ' + (n%2===1?'sage':'') + '">' + ico(c.icon, 22) + '</div>' +
      '<h4>' + esc(c.label) + '</h4>' +
      '<p>' + esc(c.desc) + '</p>' +
      '<span class="card-foot btn-link">Keşfet ' + ico('arrow',15) + '</span></a>';
  });
  h += '</div></div></section>' + finalCTA();
  return h;
}

/* ---- Ortak süreç omurgası ve katman helper'ları ---- */
function _isOmurga() {
  var items = [
    ['01','Yakala','Talep, mesaj, form, görüşme özeti, ERP/CRM kaydı, saha bildirimi, IoT uyarısı veya geri bildirim Chief\'e sinyal olarak gelir.'],
    ['02','Anla ve sınıflandır','Chief sinyalin niyetini, konusunu, aciliyetini ve hangi sürece ait olduğunu belirler.'],
    ['03','Veriyle bağla','Sinyal müşteri, teklif, sözleşme, stok, iş emri, ekipman, fatura, çalışan, lokasyon veya geçmiş kayıtlarla ilişkilendirilir.'],
    ['04','Eksik bilgiyi tamamla','Teknik, ticari, lokasyon, tarih, belge, fotoğraf, fiyat, teslimat veya onay bilgisi eksikse doğal diyalog veya iç görevle tamamlatılır.'],
    ['05','Karar ver ve yönlendir','Yetki, fiyat, marj, SLA, kapasite, stok, bölge, uzmanlık, risk ve uyum kuralları değerlendirilir.'],
    ['06','Yürüt ve izle','Görev, teklif, ziyaret, iş emri, üretim planı, servis kaydı, tedarik aksiyonu veya finans görevi ilgili ekiplere taşınır.'],
    ['07','Kanıtla kapat','Süreç belge, fotoğraf, imza, ölçüm, form, sistem kaydı, müşteri onayı, fatura veya tahsilat bilgisiyle doğrulanır.'],
    ['08','Yönetime taşı','Sonuçlar KPI, risk, sapma, fırsat ve aksiyon olarak yönetim katmanına aktarılır.'],
    ['09','Öğren ve iyileştir','Gecikmeler, tekrar eden sorunlar, eksik bilgi nedenleri ve darboğazlar süreç iyileştirme önerisine dönüşür.'],
  ];
  return '<section><div class="container">' +
    '<div class="section-head"><span class="eyebrow">Chief\'in Ortak Süreç Omurgası</span>' +
    '<h2>İşletmedeki her sinyal yönetilebilir bir sürece dönüşür.</h2>' +
    '<p class="lead">Chief\'in temel değeri, işletme içinde oluşan her önemli sinyali yönetilebilir bir iş nesnesine, iş nesnesini de kurallı ve ölçülebilir bir sürece dönüştürmesidir.</p></div>' +
    '<div class="omurga-grid">' +
    items.map(function(it){ return '<div class="omurga-item"><span class="omurga-num">' + it[0] + '</span><h4>' + esc(it[1]) + '</h4><p>' + esc(it[2]) + '</p></div>'; }).join('') +
    '</div></div></section>';
}
function _isKatman() {
  var items = [
    ['Doğal dil ile anlık veri erişimi','Yönetici "Bu ay neden satış hedefinin gerisindeyiz?" veya "Hangi saha işleri tahsilatı geciktiriyor?" gibi sorular sorabilir.'],
    ['Kaynak kayıtla açıklama','Chief yalnızca cevap üretmez; cevabı ilgili teklif, iş emri, fatura, müşteri, stok, üretim veya geri bildirim kayıtlarıyla ilişkilendirir.'],
    ['Strateji ve senaryo desteği','Yönetici kapasite, fiyat, satış, tahsilat, müşteri riski veya operasyon önceliği için alternatif senaryolar isteyebilir.'],
    ['Görev ve onay başlatma','Yönetici karar verdiğinde Chief ilgili satış, operasyon, finans, kalite, İK veya üretim ekibine görev/onay açar.'],
    ['Bilgi talebi','Veri eksik, çelişkili veya düşük güven skorluysa Chief ilgili kişiden bilgi talep eder.'],
    ['Yönetim brifingi','Haftalık veya günlük özetlerde açık işler, riskler, KPI sapmaları, karar bekleyen konular ve önerilen aksiyonlar listelenir.'],
    ['İzlenebilir karar','Her yönetim sorusu, veri kaynağı, öneri, karar ve açılan görev denetim izine bağlanır.'],
  ];
  return '<section class="bg-warm"><div class="container">' +
    '<div class="section-head"><span class="eyebrow">Yönetimsel Doğal Dil Veri ve Aksiyon Katmanı</span>' +
    '<h2>Bu katman ne sağlar?</h2>' +
    '<p class="lead">Chief\'in önemli farklarından biri, yönetim seviyesinde doğal dil ile veriye erişim ve veriden aksiyona geçiş kabiliyetidir. Yönetici, farklı sistemlerdeki veriyi tek tek aramak yerine Chief\'e iş diliyle soru sorabilir; Chief ilgili kaynak kayıtları bulur, veriyi açıklar, risk ve fırsatları özetler, strateji seçenekleri oluşturur ve karar verilen aksiyonları göreve, onaya veya bilgi talebine dönüştürür.</p></div>' +
    '<div class="katman-list">' +
    items.map(function(it){ return '<div class="katman-item"><div class="katman-dot"></div><p><strong>' + esc(it[0]) + ':</strong> ' + esc(it[1]) + '</p></div>'; }).join('') +
    '</div></div></section>';
}


/* ---- URL slug mapping: yeni kısa slug → data key ---- */
var KULLANIM_SLUG_MAP = {
  'yonetim-katmani': 'yonetimsel-dogal-dil-veri-stratejik-aksiyon',
  'finans':          'fatura-tahsilat-is-kapanisi',
};
function _kuSlug(slug) { return KULLANIM_SLUG_MAP[slug] || slug; }

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

  var feat = IS_SURECLERI_DATA['yonetimsel-dogal-dil-veri-stratejik-aksiyon'];
  var slugs = Object.keys(IS_SURECLERI_DATA).filter(function(k){ return !IS_SURECLERI_DATA[k].featured; });

  var h = '<section class="detail-hero"><div class="container">' +
    crumb(['Kullanım Alanları', '#/kullanim-alanlari'], ['İş Süreçlerine Göre']) +
    '<span class="eyebrow">AI TABANLI SÜREÇ VE YÖNETİM KATMANI</span>' +
    '<h1 style="margin-top:16px;max-width:800px">İş Süreçlerinizi Sinyalden Sonuca Yönetin</h1>' +
    '<p class="lead" style="max-width:720px">Chief; yönetim karar süreçlerinden başlayarak satış, teklif, operasyon, üretim, teknik servis, finansal kapanış ve müşteri/çalışan deneyimi süreçlerini tek bir işletme akışında birbirine bağlar. E-posta, WhatsApp, web formu, toplantı notu, ERP/CRM kaydı, saha formu, IoT sinyali veya geri bildirim gibi dağınık iş sinyallerini yakalar; eksik bilgiyi tamamlar, kurallara göre görev ve onay başlatır, süreci izler ve sonucu yönetim seviyesinde sorgulanabilir hale getirir.</p>' +
    '<div class="cta-row" style="margin-top:28px">' +
    '<a href="#/demo-talep-et" class="btn btn-clay btn-lg">Süreçlerinizi Birlikte Modelleyelim</a>' +
    '<a href="#/demo-talep-et" class="btn btn-ghost btn-lg">Demo Talep Edin</a>' +
    '</div></div></section>';

  // Bölüm 3 + Bölüm 4
  h += _isOmurga();
  h += _isKatman();

  // Kartlar
  h += '<section class="tight"><div class="container">';
  h += '<a class="is-feat" href="#/kullanim-alanlari/is-sureclerine-gore/yonetimsel-dogal-dil-veri-stratejik-aksiyon">' +
    '<span class="eyebrow on-dark">' + esc(feat.cat) + '</span>' +
    '<h3>' + esc(feat.cardTitle) + '</h3>' +
    '<p>' + esc(feat.cardDesc) + '</p>' +
    '<p class="is-feat-sub">' + esc(feat.cardSub) + '</p>' +
    '<span class="btn-link">İncele ' + ico('arrow',15) + '</span></a>';
  h += '<div class="is-cats"><button class="is-cat active" onclick="window.isCatFilter(this,\'*\')">Tümü</button>';
  CAT_LABELS.forEach(function(c){ h += '<button class="is-cat" onclick="window.isCatFilter(this,\'' + c.key + '\')">' + esc(c.label) + '</button>'; });
  h += '</div><div class="cards-grid" id="isSureciGrid">';
  slugs.forEach(function(slug,n){
    var d = IS_SURECLERI_DATA[slug];
    h += '<a class="card" href="#/kullanim-alanlari/is-sureclerine-gore/' + slug + '" data-cat="' + d.catKey + '">' +
      '<div class="card-ico ' + (n%3===1?'sage':n%3===2?'blue':'') + '">' + ico(d.icon,22) + '</div>' +
      '<span style="font-size:11px;font-weight:600;color:var(--t-muted);text-transform:uppercase;letter-spacing:.06em;display:block;margin-bottom:10px">' + esc(d.cat) + '</span>' +
      '<h4>' + esc(d.cardTitle) + '</h4><p>' + esc(d.cardDesc) + '</p>' +
      '<p style="font-size:13px;color:var(--t-muted);margin-top:-8px">' + esc(d.cardSub) + '</p>' +
      '<span class="card-foot btn-link">İncele ' + ico('arrow',15) + '</span></a>';
  });
  h += '</div></div></section>';

  // Bölüm 8: Yatay Yönetim Yetenekleri
  h += '<section class="bg-warm"><div class="container">' +
    '<div class="section-head"><span class="eyebrow">Tüm Süreçleri Güçlendiren Yatay Yönetim Yetenekleri</span></div>' +
    '<div style="display:grid;grid-template-columns:1fr 1fr;gap:40px 64px">' +
    '<div><h3 style="font-size:19px;font-weight:700;margin-bottom:14px">Süreç Sağlığı ve Sürekli İyileştirme</h3>' +
    '<p style="font-size:15px;color:var(--t-body);margin:0 0 16px;line-height:1.7">Chief yalnızca tanımlanmış işleri yürütmez; süreçlerdeki bekleme, gecikme, eksik bilgi, onay darboğazı, tekrar eden hata, yeniden iş yapma ve sorumluluk boşluklarını görünür hale getirir. Yönetim doğal dil ile bu sorunların nedenlerini sorgulayabilir ve aksiyon açabilir.</p>' +
    '<ul style="display:flex;flex-direction:column;gap:8px;padding:0;list-style:none">' +
    ['SLA ihlali, bekleme süresi ve darboğaz analizi','Eksik bilgi ve yeniden iş yapma nedenleri','Sık tekrarlanan istisnalar ve manuel müdahaleler','Rol, onay ve sorumluluk boşlukları','Yeni kural, kontrol noktası veya otomasyon önerileri'].map(function(t){ return '<li style="font-size:14px;color:var(--t-muted);display:flex;gap:10px"><span style="color:var(--clay);font-weight:700;flex-shrink:0">—</span>' + esc(t) + '</li>'; }).join('') +
    '</ul></div>' +
    '<div><h3 style="font-size:19px;font-weight:700;margin-bottom:14px">Yönetim Brifingi ve Karar Görünürlüğü</h3>' +
    '<p style="font-size:15px;color:var(--t-body);margin:0 0 16px;line-height:1.7">Chief operasyon kayıtlarını yalnızca raporlamaz; yönetimin dikkat etmesi gereken gelişmeleri bağlamıyla özetler. Haftalık veya günlük brifinglerde sonuçları, riskleri, gecikmeleri, sorumluları, veri eksiklerini ve önerilen aksiyonları tek görünümde sunar.</p>' +
    '<ul style="display:flex;flex-direction:column;gap:8px;padding:0;list-style:none">' +
    ['Ne tamamlandı, ne gecikti, ne risk altında?','Hangi müşteri, sipariş, proje veya servis kaydı kritik?','Hangi onaylar ve kararlar yönetim bekliyor?','Hangi KPI değişimi hangi operasyonel nedenle oluştu?','Hangi alanda bilgi talebi açılmalı?','Bir sonraki dönem için önerilen öncelikli aksiyonlar neler?'].map(function(t){ return '<li style="font-size:14px;color:var(--t-muted);display:flex;gap:10px"><span style="color:var(--clay);font-weight:700;flex-shrink:0">—</span>' + esc(t) + '</li>'; }).join('') +
    '</ul></div></div></div></section>';

  // Bölüm 10: Kapanış
  h += '<div class="is-kapanis"><div class="container">' +
    '<h2>Süreçleriniz ayrı araçlarda kalmasın. Chief ile tek işletme akışına bağlayın.</h2>' +
    '<p>Her işletmede talep, teklif, iş emri, üretim, servis, fatura, tahsilat, geri bildirim ve yönetim kararı farklı sistemlerde iz bırakır. Sorun verinin eksik olması değil; bu verinin çoğu zaman sorumluluk, karar, aksiyon ve kapanış kriteriyle bağlanmamasıdır.</p>' +
    '<p>Chief, mevcut sistemlerinizi değiştirmeden bu dağınık yapının üzerinde çalışır. Sinyalleri yakalar, bağlamı anlar, eksik bilgiyi tamamlar, görev ve onayları yürütür, işi kanıtıyla kapatır ve yönetim için doğal dil ile sorgulanabilir, açıklanabilir ve aksiyona dönüşen bir işletme zekasına dönüştürür.</p>' +
    '<div class="cta-row" style="margin-top:32px">' +
    '<a href="#/demo-talep-et" class="btn btn-clay btn-lg">Sürecinizi Birlikte Modelleyelim</a>' +
    '<a href="#/demo-talep-et" class="btn on-dark-ghost btn-lg">Demo Talep Edin</a>' +
    '</div></div></div>';

  return h;
}

/* ---- Detay sayfası (doküman yapısı) ---- */
function renderIsSureciPage(slug) {
  var d = IS_SURECLERI_DATA[slug];
  if (!d) return renderNotFound();
  var cs = IS_SURECLERI_CS[slug] || IS_SURECLERI_CS[_kuSlug(slug)];
  var isFeatured = d.featured || false;

  // HERO
  var h = '<section class="detail-hero"><div class="container">' +
    crumb(['Kullanım Alanları', '#/kullanim-alanlari'], ['İş Süreçlerine Göre', '#/kullanim-alanlari/is-sureclerine-gore'], [d.cardTitle]) +
    '<div style="display:grid;grid-template-columns:1.1fr 1fr;gap:48px 56px;align-items:start">' +
    '<div><span class="eyebrow">' + esc(d.eyebrow) + '</span>' +
    '<h1 style="margin-top:16px">' + esc(d.h1) + '</h1>' +
    '<p class="lead">' + esc(d.lead) + '</p></div>' +
    '<div>' + (cs ? '<div class="cs-block" style="box-shadow:var(--sh-lg)">' +
      '<div class="cs-header"><div class="sp-logo-img-wrap"><img src="' + cs.logo + '" alt="' + esc(cs.company) + '" class="sp-logo-img"></div>' +
      '<div><div class="sp-company">' + esc(cs.company) + '</div><div class="sp-industry">' + esc(cs.industry) + '</div></div></div>' +
      '<blockquote class="sp-quote">' + esc(cs.quote) + '</blockquote>' +
      '<div class="sp-metrics">' + (d.metrics||[]).map(function(m){ return '<div class="sp-metric"><span class="sp-num">' + esc(m.n) + '</span><span class="sp-label">' + esc(m.l) + '</span></div>'; }).join('') + '</div></div>' : '') +
    '</div></div></div></section>';

  // BU SÜREÇ NEYİ ÇÖZER?
  h += '<section style="padding:52px 0" class="bg-warm"><div class="container narrow">' +
    '<div class="section-head" style="margin-bottom:18px"><span class="eyebrow">Bu süreç neyi çözer?</span></div>' +
    '<p style="font-size:17px;line-height:1.75;color:var(--t-body)">' + esc(d.problem) + '</p></div></section>';

  // Bölüm 3 + 4 (tüm sayfalarda)
  h += _isOmurga();
  h += _isKatman();

  // ÖNE ÇIKAN YÖNETİM DENEYİMİ (sadece featured)
  if (isFeatured && d.yone && d.yone.length) {
    h += '<section style="padding:52px 0"><div class="container">' +
      '<div class="section-head"><span class="eyebrow">Öne çıkan yönetim deneyimi</span></div>' +
      '<div class="yone-grid">' +
      d.yone.map(function(y){ return '<div class="yone-card"><span class="yone-label">' + esc(y.label) + '</span><p>' + esc(y.text) + '</p></div>'; }).join('') +
      '</div></div></section>';
  }

  // ÖRNEK YÖNETİCİ AKIŞI (sadece featured)
  if (isFeatured && d.ornekAkis && d.ornekAkis.length) {
    h += '<section style="padding:52px 0" class="bg-warm"><div class="container">' +
      '<div class="section-head"><span class="eyebrow">Örnek yönetici akışı</span></div>' +
      '<div class="ornek-akis"><span class="akis-label">Yönetici sordu → Chief yanıtladı → Aksiyon başlatıldı</span>' +
      d.ornekAkis.map(function(s){ return '<div class="akis-step"><div class="akis-step-num">' + esc(s.num) + '</div><div class="akis-step-body"><p><strong>' + esc(s.title) + ':</strong> ' + esc(s.body) + '</p></div></div>'; }).join('') +
      '</div></div></section>';
  }

  // SÜREÇ AMACI TABLOSU
  if (d.amac) {
    h += '<section style="padding:52px 0"><div class="container">' +
      '<div class="section-head"><span class="eyebrow">Süreç amacı, girdileri ve çıktıları</span></div>' +
      '<table class="is-amac-table">' +
      '<tr><td>Süreç amacı</td><td>' + esc(d.amac) + '</td></tr>' +
      '<tr><td>Girdiler</td><td>' + esc(d.girdiler) + '</td></tr>' +
      '<tr><td>Çıktılar</td><td>' + esc(d.ciktilar) + '</td></tr>' +
      '</table></div></section>';
  }

  // SÜREÇ AKIŞ ADIMLARI
  if (d.steps && d.steps.length) {
    h += '<section style="padding:52px 0" class="bg-warm"><div class="container">' +
      '<div class="section-head"><span class="eyebrow">Chief bu süreci nasıl yönetir?</span></div>' +
      '<div class="proc-steps-grid">';
    var isNewFormat = typeof d.steps[0] === 'string';
    if (isNewFormat) {
      d.steps.forEach(function(s,i){
        h += '<div class="proc-step"><div class="proc-step-num">0' + (i+1) + '</div><div><p>' + esc(s) + '</p></div></div>';
      });
    } else {
      d.steps.forEach(function(s){
        h += '<div class="proc-step"><div class="proc-step-num">' + esc(s.num) + '</div><div><h4>' + esc(s.title) + '</h4><p>' + esc(s.body) + '</p></div></div>';
      });
    }
    h += '</div></div></section>';
  }

  // KARAR NOKTALARI TABLOSU
  if (d.kararlar && d.kararlar.length) {
    h += '<section style="padding:52px 0"><div class="container">' +
      '<div class="section-head"><span class="eyebrow">Karar noktaları ve iş kuralları</span></div>' +
      '<table class="is-karar-table">' +
      '<tr><th>Karar noktası</th><th>Girdi</th><th>Chief aksiyonu</th></tr>' +
      d.kararlar.map(function(k){ return '<tr><td>' + esc(k.nokta) + '</td><td>' + esc(k.girdi) + '</td><td>' + esc(k.aksiyon) + '</td></tr>'; }).join('') +
      '</table></div></section>';
  }

  // NL SORGU ÖRNEKLERİ (chat bubbles)
  if (d.nlQueries && d.nlQueries.length) {
    h += '<section style="padding:52px 0" class="bg-warm"><div class="container">' +
      '<div class="nl-chat-wrap">' +
      '<span class="nl-chat-intro">Yönetici Chief\'e sorar</span>' +
      '<p class="nl-chat-sub">Yönetici doğal dil ile soru sorabilir, veri üzerinden strateji geliştirebilir, ilgili ekiplerden bilgi talep edebilir veya doğrudan görev/onay açabilir.</p>' +
      '<div class="nl-bubbles">' +
      d.nlQueries.map(function(q){
        return '<div class="nl-bubble"><div class="nl-bubble-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="13" height="13"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></div>' +
        '<div class="nl-bubble-text">' + esc(q) + '</div></div>';
      }).join('') +
      '</div></div></div></section>';
  }

  // ÖZEL DURUMLAR
  if (d.ozelDurumlar && d.ozelDurumlar.length) {
    h += '<section style="padding:52px 0"><div class="container">' +
      '<div class="section-head"><span class="eyebrow">Dikkat edilmesi gereken özel durumlar</span></div>' +
      '<div class="durumlar-grid">' +
      d.ozelDurumlar.map(function(t){ return '<div class="durum-card"><p>' + esc(t) + '</p></div>'; }).join('') +
      '</div></div></section>';
  }

  // KRİTİK KPI
  if (d.kpis && d.kpis.length) {
    h += '<section style="padding:40px 0" class="bg-warm"><div class="container">' +
      '<div class="section-head" style="margin-bottom:18px"><span class="eyebrow">Kritik KPI ve yönetim çıktıları</span></div>' +
      '<div class="kpi-grid">' +
      d.kpis.map(function(t){ return '<div class="kpi-item"><span class="kpi-dash">—</span>' + esc(t) + '</div>'; }).join('') +
      '</div></div></section>';
  }

  // İNSAN DENETİMİ
  h += '<section style="padding:40px 0"><div class="container narrow">' +
    '<div class="denetim-block"><p>Chief sınıflandırma, özetleme, öneri üretme, bilgi tamamlama, görev açma ve karar desteği işlevlerini kurumsal rol ve yetki sınırları içinde yürütür. Fiyat, kapsam, müşteri taahhüdü, finansal kabul, kalite kapanışı, kritik saha ataması, çalışan gizliliği veya stratejik yönetim kararı gibi noktalarda insan denetimi korunur. Tüm öneriler, veri kaynakları, karar gerekçeleri ve açılan görevler denetim izine bağlanır.</p></div>' +
    '</div></section>';

  // KAPANIS CTA
  var ctaText = d.ctaText || (d.cardTitle + ' sürecinizi Chief ile modelleyin; mevcut sistemlerinizi değiştirmeden bilgiyi sorumluluk, karar, aksiyon ve yönetim görünürlüğüyle birleştirin.');
  h += '<section class="final-cta"><div class="container">' +
    '<h2>' + esc(ctaText) + '</h2>' +
    '<div class="cta-row"><a href="#/demo-talep-et" class="btn btn-clay btn-lg">Bu Süreç İçin Demo Talep Edin</a>' +
    '<a href="#/is-surecleri" class="btn on-dark-ghost btn-lg">Tüm süreçlere dön</a></div>' +
    '</div></section>';

  return h;
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
    '<p class="lead">Operasyonel verimlilik, AI tabanlı sistemler ve kurumsal operasyon yönetimi üzerine içerikler.</p>' +
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
