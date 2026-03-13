(function () {
  var cfg = window.SITE_CONFIG || {};
  function norm(s) { return (s || '').replace(/\s+/g, ' ').trim().toLowerCase(); }
  function setText(el, text) { if (el && typeof text === 'string') el.textContent = text; }

  var logo = document.querySelector('.site-logo');
  if (logo) {
    setText(logo, cfg.siteName || 'THE AFTERMATH DIARIES');
    logo.setAttribute('aria-label', cfg.ariaHome || 'THE AFTERMATH DIARIES — HOME');
    logo.setAttribute('href', '/');
  }

  var mainNav = document.querySelector('.site-nav ul');
  if (mainNav && Array.isArray(cfg.nav)) {
    mainNav.innerHTML = cfg.nav.map(function (item) {
      return '<li><a href="' + item.href + '">' + item.label + '</a></li>';
    }).join('');
  }

  var footerNav = document.querySelector('.footer-nav ul');
  if (footerNav && Array.isArray(cfg.nav) && Array.isArray(cfg.footerLegal)) {
    var footerItems = cfg.nav.concat(cfg.footerLegal);
    footerNav.innerHTML = footerItems.map(function (item) {
      return '<li><a href="' + item.href + '">' + item.label + '</a></li>';
    }).join('');
  }

  var socialLinks = document.querySelectorAll('.footer-social a');
  if (socialLinks.length && Array.isArray(cfg.social)) {
    socialLinks.forEach(function (a) {
      var key = norm(a.getAttribute('aria-label') || a.textContent || a.getAttribute('href'));
      cfg.social.forEach(function (item) {
        if (key.indexOf(item.match) !== -1) {
          a.textContent = item.label;
          a.setAttribute('aria-label', item.label);
        }
      });
      if ((a.getAttribute('href') || '').indexOf('/rss.xml') !== -1) {
        a.textContent = 'RSS FEED';
        a.setAttribute('aria-label', 'RSS FEED');
      }
    });
  }

  var footerCopy = document.querySelector('.footer-copy');
  if (footerCopy && cfg.footerCopy) footerCopy.textContent = cfg.footerCopy;

  var footerDisc = document.querySelector('.footer-disclaimer strong');
  if (footerDisc && /disclaimer/i.test(footerDisc.textContent)) footerDisc.textContent = 'LEGAL SHIT:';

  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('is-open');
    });
  }

  var pageTitle = document.title;
  if (pageTitle) document.title = pageTitle.toUpperCase();
  document.querySelectorAll('meta[property="og:title"], meta[name="twitter:title"]').forEach(function (m) {
    if (m.content) m.content = m.content.toUpperCase();
  });
}

  // runtime consistency pass
  document.querySelectorAll('.btn, .tag, .category-chip, .section-label, .post-navigation .nav-title').forEach(function (el) {
    if (el && el.textContent) el.textContent = el.textContent.toUpperCase();
  });

  document.querySelectorAll('input[placeholder]').forEach(function (el) {
    var ph = el.getAttribute('placeholder');
    if (ph) el.setAttribute('placeholder', ph.toUpperCase());
  });
})();