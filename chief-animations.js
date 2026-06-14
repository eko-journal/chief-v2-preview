(function () {
  'use strict';

  /* ============================================================
     1. SCROLL REVEAL — IntersectionObserver
     ============================================================ */
  function initReveal() {
    var els = document.querySelectorAll('.reveal');
    if (!els.length) return;

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        var delay = el.getAttribute('data-delay');
        if (delay) el.style.transitionDelay = delay + 'ms';
        el.classList.add('revealed');
        io.unobserve(el);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    els.forEach(function (el) { io.observe(el); });
  }

  /* ============================================================
     2. KPI / HERO COUNTER
     ============================================================ */
  function easeOutQuart(t) {
    return 1 - Math.pow(1 - t, 4);
  }

  function animateCounter(el) {
    var target = parseFloat(el.getAttribute('data-target'));
    if (isNaN(target)) return;
    var duration = 1200;
    var start = null;
    var suffix = el.getAttribute('data-suffix') || '';
    var decimals = (String(target).split('.')[1] || '').length;

    function step(ts) {
      if (!start) start = ts;
      var progress = Math.min((ts - start) / duration, 1);
      var value = easeOutQuart(progress) * target;
      el.textContent = value.toFixed(decimals) + suffix;
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target.toFixed(decimals) + suffix;
    }
    requestAnimationFrame(step);
  }

  function initCounters() {
    var els = document.querySelectorAll('.kpi-counter');
    if (!els.length) return;

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        animateCounter(entry.target);
        io.unobserve(entry.target);
      });
    }, { threshold: 0.3 });

    els.forEach(function (el) { io.observe(el); });
  }

  /* ============================================================
     3. HERO DASHBOARD — SIGNAL FEED ROTATION
     ============================================================ */
  var SIGNAL_MESSAGES = [
    { label: 'Chief Önerisi', text: 'Teklif onayında bekleyen <b>3 kayıt</b> önceliklendirildi; marj riski ve yanıt süresi birlikte yükseliyor.' },
    { label: 'Aksiyon Gerekli', text: 'Müşteri şikayeti <b>SLA sınırına</b> yaklaştı — atanmış sorumlu henüz yanıt vermedi.' },
    { label: 'Saha Bildirimi', text: 'İzmir lokasyonunda <b>bakım talebi</b> açıldı; ekipman durumu kırmızı seviyede.' },
    { label: 'Chief Önerisi', text: '<b>5 fatura</b> 30+ gün vadesi geçmiş — tahsilat aksiyonu başlatılabilir.' },
    { label: 'Onay Bekliyor', text: 'Depo çıkış izni için <b>Ahmet Bey\'in</b> onayı bekleniyor; sevkiyat durdu.' },
    { label: 'Chief Önerisi', text: 'Bu hafta <b>3 müşteride</b> benzer sorun görüldü — kök neden analizi öneriliyor.' },
    { label: 'Aksiyon Gerekli', text: 'Saha ekibi <b>2 saattir</b> konum güncellemesi yapmadı; ziyaret tamamlandı mı?' },
  ];

  function startSignalFeed() {
    var feed = document.getElementById('ccSignalFeed');
    if (!feed) return;

    var idx = 0;

    // Başlangıç içeriği yerleştir
    function renderMessage(msg, visible) {
      feed.innerHTML =
        '<div class="cc-rec-feed" style="transition:opacity .4s;opacity:' + (visible ? '1' : '0') + '">' +
        '<span class="badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v4M12 18v4M2 12h4M18 12h4"/><circle cx="12" cy="12" r="4"/></svg></span>' +
        '<div><div class="rl">' + msg.label + ' · Açıklanabilir</div>' +
        '<div class="rt">' + msg.text + '</div></div></div>';
    }

    renderMessage(SIGNAL_MESSAGES[0], true);

    setInterval(function () {
      var el = feed.querySelector('.cc-rec-feed');
      if (!el) return;

      // Fade out
      el.style.opacity = '0';
      setTimeout(function () {
        idx = (idx + 1) % SIGNAL_MESSAGES.length;
        renderMessage(SIGNAL_MESSAGES[idx], false);
        // Tick after render so transition fires
        requestAnimationFrame(function () {
          requestAnimationFrame(function () {
            var newEl = feed.querySelector('.cc-rec-feed');
            if (newEl) newEl.style.opacity = '1';
          });
        });
      }, 420);
    }, 3000);
  }

  /* ============================================================
     4. HEADER SCROLL STATE
     ============================================================ */
  (function initHeaderScroll() {
    var header = document.querySelector('.site-header');
    if (!header) return;

    var ticking = false;

    function update() {
      if (window.scrollY > 20) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
      ticking = false;
    }

    window.addEventListener('scroll', function () {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    }, { passive: true });

    // Initial check
    update();
  }());

  /* ============================================================
     5. CURSOR GLOW — desktop only
     ============================================================ */
  (function initCursorGlow() {
    if (window.innerWidth <= 1024) return;

    var glow = document.createElement('div');
    glow.className = 'cursor-glow';
    glow.style.cssText = [
      'position:fixed',
      'pointer-events:none',
      'z-index:9999',
      'width:380px',
      'height:380px',
      'border-radius:50%',
      'transform:translate(-50%,-50%)',
      'background:radial-gradient(circle,rgba(217,119,87,.07) 0%,transparent 70%)',
      'transition:opacity .3s',
      'opacity:0',
      'top:0',
      'left:0',
      'will-change:transform,top,left',
    ].join(';');
    document.body.appendChild(glow);

    var mouseX = 0, mouseY = 0;
    var rafPending = false;

    document.addEventListener('mousemove', function (e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!rafPending) {
        rafPending = true;
        requestAnimationFrame(function () {
          glow.style.left = mouseX + 'px';
          glow.style.top = mouseY + 'px';
          glow.style.opacity = '1';
          rafPending = false;
        });
      }
    }, { passive: true });

    document.addEventListener('mouseleave', function () {
      glow.style.opacity = '0';
    });
  }());

  /* ============================================================
     6. FLOW STEP ANİMASYONU
     ============================================================ */
  (function initFlowSteps() {
    var steps = document.querySelectorAll('.flow-step');
    var connectors = document.querySelectorAll('.flow-connector');
    if (!steps.length) return;

    var activated = false;

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting || activated) return;
        activated = true;
        io.disconnect();

        // Activate steps sequentially
        steps.forEach(function (step, i) {
          setTimeout(function () {
            step.classList.add('active');
          }, i * 200);
        });

        // Animate connectors: width 0 → 100%
        connectors.forEach(function (conn, i) {
          conn.style.width = '0';
          conn.style.transition = 'width 0.4s ease';
          setTimeout(function () {
            conn.style.width = '100%';
          }, i * 200 + 100);
        });
      });
    }, { threshold: 0.15 });

    // Observe the first step (container trigger)
    io.observe(steps[0]);
  }());

  /* ============================================================
     GLOBAL EXPORTS (router integration)
     ============================================================ */
  /* ============================================================
     7. FLOW PLAYER — adım adım senaryo animasyonu
     ============================================================ */
  function initFlowPlayer() {
    var player = document.getElementById('flowPlayer');
    if (!player) return;

    var steps  = player.querySelectorAll('.fp-step');
    var cards  = player.querySelectorAll('.fp-card');
    var fill   = document.getElementById('fpBarFill');
    var current = 0;
    var timer;
    var DURATION = 3200;

    function goTo(i) {
      current = i;
      steps.forEach(function(s, idx) {
        s.classList.toggle('fp-active', idx === i);
      });
      cards.forEach(function(c, idx) {
        c.classList.toggle('fp-visible', idx === i);
      });
      if (fill) fill.style.width = ((i + 1) / steps.length * 100) + '%';
    }

    function next() { goTo((current + 1) % steps.length); }

    steps.forEach(function(s, idx) {
      s.addEventListener('click', function() {
        clearInterval(timer);
        goTo(idx);
        timer = setInterval(next, DURATION);
      });
    });

    // IntersectionObserver ile başlat — görünce otomatik döngü
    var io = new IntersectionObserver(function(entries) {
      entries.forEach(function(e) {
        if (e.isIntersecting) {
          goTo(0);
          clearInterval(timer);
          timer = setInterval(next, DURATION);
        } else {
          clearInterval(timer);
        }
      });
    }, { threshold: 0.3 });

    io.observe(player);
  }

  /* ============================================================
     8. CASE STUDY MODAL
     ============================================================ */
  var CASES = {
    tak: {
      company: 'TAK-Umwelt GmbH',
      meta: 'Çevre Teknolojisi · Almanya · Yağ tankı bakımı, separator servisi, endüstriyel hizmetler',
      challenge: 'Servis talepleri telefon, e-posta ve müşteri portalından eş zamanlı geliyor; her birini manuel olarak takibe almak ve belgelendirmek backoffice ekibine büyük iş yükü bindiriyordu. Kim hangi işi üstlendi, hangi talepler bekliyor, hangi belgeler eksik — bunları görmek için birden fazla sistem kontrol etmek gerekiyordu. Özellikle acil çevre müdahalelerinde gecikme hem yasal risk hem müşteri kaybı anlamına geliyordu.',
      solution: [
        'Chief tüm giriş kanallarından gelen servis taleplerini tek bir iş akışına topluyor; hiçbir talep kaybolmuyor.',
        'Her talep müşteri ve ekipman bilgisiyle otomatik eşleştirilip önceliğine göre sıralandı.',
        'Servis ekibine görev atandı; ilgili belgeler kontrol listesiyle birlikte göreve bağlandı.',
        'Yönetici ekranında açık işler, bekleyen onaylar ve geciken talepler tek ekranda görünür hale geldi.'
      ],
      results: [
        { n: '-%65', l: 'Manuel veri girişi süresi' },
        { n: '%100', l: 'Talep takip görünürlüğü' },
        { n: '-%70', l: 'Kaçan / yanıtsız talep' },
        { n: '2x', l: 'Backoffice kapasitesi' }
      ]
    },
    termo: {
      company: 'Termo İndüksiyon',
      meta: 'Endüstriyel Isıl İşlem · 1981\'den beri · Otomotiv, savunma, enerji sektörü',
      challenge: 'Satış ekibinin müşteri ziyaretleri ve toplantı notları farklı kişisel dosyalara dağılmış, CRM\'e düzenli girilmiyordu. Yönetim "bu müşteride ne durumda?" diye sorduğunda doğru yanıtı bulmak zaman alıyordu. Hangi teklifin nerede olduğu, kimin ne kararlaştırdığı her seferinde temsilciye sormayı gerektiriyordu. Satış hattının bütünü hiçbir zaman tek ekranda görünmüyordu.',
      solution: [
        'Satış temsilcileri ziyaret ve toplantı notlarını WhatsApp üzerinden Chief\'e bildiriyor; Chief bunları yapılandırılmış kayda dönüştürüyor.',
        'Her müşteri için açık teklifler, son ziyaret tarihi ve takip gerektiren aksiyonlar tek ekranda görünür.',
        'Yönetim istediği anda satış hattının tamamını, fırsat bazında durumu ve geciken takipleri anlık olarak görebiliyor.',
        'Toplantı çıktıları ve kararlar otomatik olarak ilgili müşteri dosyasına bağlanıyor.'
      ],
      results: [
        { n: '%98', l: 'Ziyaret notu kayıt oranı' },
        { n: '<2dk', l: 'Notun sisteme giriş süresi' },
        { n: '7/24', l: 'Satış hattı görünürlüğü' },
        { n: '-%80', l: '"Veri nerede?" sorusu' }
      ]
    },
    ikon: {
      company: 'İkon Araştırma',
      meta: 'Pazar Araştırması & Danışmanlık · İstanbul · Saha ve online araştırma hizmetleri',
      challenge: 'Saha araştırmacıları farklı anket projelerinde eş zamanlı çalışıyor; hangi ekibin nerede olduğu, kaç anketin tamamlandığı ve proje ilerleme durumu merkezi olarak görünmüyordu. Müşterilere verilen tekliflerin hangi aşamada olduğu ve saha koordinasyonu çok sayıda e-posta ve WhatsApp mesajıyla yürütülüyordu. Proje yöneticileri zamanlarının büyük bölümünü durum sormakla geçiriyordu.',
      solution: [
        'Chief her proje için saha ekiplerinin konum ve anket tamamlama durumunu gerçek zamanlı gösteriyor.',
        'Anket projesinin ilerlemesi, ekip başına tamamlanan kota ve gecikme riskleri yönetici paneline anlık düşüyor.',
        'Müşteri teklifleri oluşturulduğu andan itibaren Chief tarafından takip ediliyor; onay ve revizyon adımları otomatik yönetiliyor.',
        'Saha-ofis koordinasyonu WhatsApp dağınıklığından çıkıp yapılandırılmış bir akışa geçti.'
      ],
      results: [
        { n: '7/24', l: 'Saha ekibi görünürlüğü' },
        { n: '-%75', l: 'Koordinasyon için harcanan süre' },
        { n: '%100', l: 'Teklif takip oranı' },
        { n: '2x', l: 'Proje koordinasyon kapasitesi' }
      ]
    }
  };

  function initCaseStudyModal() {
    var overlay = document.createElement('div');
    overlay.className = 'cs-overlay';
    overlay.innerHTML = '<div class="cs-panel" style="position:relative"><button class="cs-close" id="csClose">✕</button><div id="csPanelBody"></div></div>';
    document.body.appendChild(overlay);

    document.getElementById('csClose').addEventListener('click', closeModal);
    overlay.addEventListener('click', function(e) { if (e.target === overlay) closeModal(); });
    document.addEventListener('keydown', function(e) { if (e.key === 'Escape') closeModal(); });

    function closeModal() { overlay.classList.remove('open'); document.body.style.overflow = ''; }

    document.addEventListener('click', function(e) {
      var btn = e.target.closest('.sp-read-btn');
      if (!btn) return;
      var key = btn.getAttribute('data-case');
      var c = CASES[key]; if (!c) return;

      var body = document.getElementById('csPanelBody');
      body.innerHTML =
        '<h2>' + c.company + '</h2>' +
        '<div class="cs-meta">' + c.meta + '</div>' +
        '<div class="cs-section"><h4>Zorluk</h4><p>' + c.challenge + '</p></div>' +
        '<div class="cs-section"><h4>Chief ile yapılanlar</h4><ul>' +
          c.solution.map(function(s) { return '<li>' + s + '</li>'; }).join('') +
        '</ul></div>' +
        '<div class="cs-section"><h4>Sonuçlar</h4><div class="cs-results">' +
          c.results.map(function(r) {
            return '<div class="cs-result"><div class="cs-result-n">' + r.n + '</div><div class="cs-result-l">' + r.l + '</div></div>';
          }).join('') +
        '</div></div>';

      overlay.classList.add('open');
      document.body.style.overflow = 'hidden';
      overlay.scrollTop = 0;
    });
  }

  /* ============================================================
     9. CALENDAR MODAL — Keşif Görüşmesi slot picker
     ============================================================ */
  function initCalendar() {
    var overlay = document.getElementById('calOverlay');
    if (!overlay) return;

    var today = new Date(); today.setHours(0,0,0,0);
    var viewYear = today.getFullYear();
    var viewMonth = today.getMonth();
    var selDate = null;
    var selTime = null;

    var TR_MONTHS = ['Ocak','Şubat','Mart','Nisan','Mayıs','Haziran','Temmuz','Ağustos','Eylül','Ekim','Kasım','Aralık'];
    var TR_DAYS   = ['Pazartesi','Salı','Çarşamba','Perşembe','Cuma','Cumartesi','Pazar'];
    var ALL_SLOTS = ['09:00','09:30','10:00','10:30','11:00','14:00','14:30','15:00','15:30','16:00'];

    function dayAvail(d) {
      var wd = d.getDay();
      if (wd === 0 || wd === 6) return false;
      if (d.getTime() <= today.getTime()) return false;
      var n = d.getDate() + d.getMonth() * 31;
      return n % 13 !== 5 && n % 17 !== 4;
    }

    function slotsFor(d) {
      var n = d.getDate() * 7 + d.getMonth() * 31;
      return ALL_SLOTS.filter(function(_,i){ return (n+i*13)%5!==0 && (n+i*7)%9!==2; });
    }

    function fmtDate(d) {
      return TR_DAYS[(d.getDay()+6)%7] + ', ' + d.getDate() + ' ' + TR_MONTHS[d.getMonth()] + ' ' + d.getFullYear();
    }

    function renderMonth() {
      var label = document.getElementById('calMonthLabel');
      var grid  = document.getElementById('calDays');
      if (!label || !grid) return;
      label.textContent = TR_MONTHS[viewMonth] + ' ' + viewYear;

      var firstWd = (new Date(viewYear, viewMonth, 1).getDay() + 6) % 7;
      var total   = new Date(viewYear, viewMonth + 1, 0).getDate();
      var html = '';
      for (var i=0; i<firstWd; i++) html += '<div class="cal-day empty"></div>';
      for (var d=1; d<=total; d++) {
        var date  = new Date(viewYear, viewMonth, d);
        var avail = dayAvail(date);
        var past  = date.getTime() <= today.getTime();
        var isTod = date.toDateString() === today.toDateString();
        var isSel = selDate && date.toDateString() === selDate.toDateString();
        var cls   = 'cal-day' + (isTod?' today':'') + (isSel?' selected':(avail?' available':(past?' past':' unavailable')));
        html += '<div class="'+cls+'" data-y="'+viewYear+'" data-m="'+viewMonth+'" data-d="'+d+'">'+d+'</div>';
      }
      grid.innerHTML = html;

      var prev = document.getElementById('calPrev');
      if (prev) prev.disabled = (viewYear===today.getFullYear() && viewMonth===today.getMonth());

      grid.querySelectorAll('.cal-day.available').forEach(function(el) {
        el.addEventListener('click', function() {
          selDate = new Date(parseInt(el.getAttribute('data-y')), parseInt(el.getAttribute('data-m')), parseInt(el.getAttribute('data-d')));
          selTime = null;
          renderMonth();
          renderSlots();
        });
      });
    }

    function renderSlots() {
      var wrap  = document.getElementById('calTimes');
      var lbl   = document.getElementById('calTimesLabel');
      var tgrid = document.getElementById('calTimeGrid');
      if (!wrap) return;
      if (!selDate) { wrap.style.display='none'; return; }
      lbl.textContent = fmtDate(selDate) + ' — müsait saatler';
      tgrid.innerHTML = slotsFor(selDate).map(function(t) {
        return '<button class="cal-time-btn'+(t===selTime?' selected':'')+'" data-time="'+t+'">'+t+'</button>';
      }).join('');
      wrap.style.display = 'block';
      tgrid.querySelectorAll('.cal-time-btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
          selTime = btn.getAttribute('data-time');
          showStep(2);
          var slot = document.getElementById('calSelectedSlot');
          if (slot) slot.innerHTML = '<div class="slot-date">'+fmtDate(selDate)+'</div><div class="slot-time">&#x23F1; '+selTime+' &middot; 30 dakika &middot; Video görüşme</div>';
        });
      });
    }

    function showStep(n) {
      [1,2,3].forEach(function(i) {
        var el = document.getElementById('calStep'+i);
        if (el) el.style.display = i===n ? 'block' : 'none';
      });
    }

    function openCal() {
      selDate=null; selTime=null;
      viewYear=today.getFullYear(); viewMonth=today.getMonth();
      showStep(1);
      var t=document.getElementById('calTimes'); if(t) t.style.display='none';
      var f=document.getElementById('calForm'); if(f) f.reset();
      renderMonth();
      overlay.classList.add('open');
      document.body.style.overflow='hidden';
    }

    function closeCal() {
      overlay.classList.remove('open');
      document.body.style.overflow='';
    }

    document.getElementById('calClose').addEventListener('click', closeCal);
    overlay.addEventListener('click', function(e){ if(e.target===overlay) closeCal(); });
    document.addEventListener('keydown', function(e){ if(e.key==='Escape' && overlay.classList.contains('open')) closeCal(); });

    document.getElementById('calPrev').addEventListener('click', function() {
      if (this.disabled) return;
      if (--viewMonth < 0) { viewMonth=11; viewYear--; }
      selDate=null; selTime=null;
      var t=document.getElementById('calTimes'); if(t) t.style.display='none';
      renderMonth();
    });

    document.getElementById('calNext').addEventListener('click', function() {
      if (++viewMonth > 11) { viewMonth=0; viewYear++; }
      selDate=null; selTime=null;
      var t=document.getElementById('calTimes'); if(t) t.style.display='none';
      renderMonth();
    });

    document.getElementById('calBack').addEventListener('click', function() { showStep(1); });

    document.getElementById('calForm').addEventListener('submit', function(e) {
      e.preventDefault();
      var name = this.querySelector('[name="name"]').value || 'Ziyaretçi';
      var info = document.getElementById('calConfirmedInfo');
      if (info) info.textContent = fmtDate(selDate) + ', saat ' + selTime + ' için görüşmeniz planlandı.';
      showStep(3);
    });

    document.addEventListener('click', function(e) {
      if (e.target.closest('[data-cal="open"]')) {
        e.preventDefault();
        openCal();
      }
    });
  }

  window.initReveal = initReveal;
  window.initCounters = initCounters;
  window.startSignalFeed = startSignalFeed;
  window.initFlowPlayer = initFlowPlayer;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      initReveal(); initCounters(); startSignalFeed(); initFlowPlayer(); initCaseStudyModal(); initCalendar();
    });
  } else {
    initReveal(); initCounters(); startSignalFeed(); initFlowPlayer(); initCaseStudyModal(); initCalendar();
  }

}());
