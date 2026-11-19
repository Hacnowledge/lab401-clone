/* lab401-static.js — localisation statique du clone Lab401 (langue + pays/devise).
   Remplace le serveur Shopify (/localization, conversion des prix) et le
   script tax.js du theme (retire des pages lors de l'injection).
   - Langue : navigation vers les pages /<loc>/... (fichiers locaux).
   - Pays/devise : prix convertis (table CAD exacte dans lab401-cad-prices.json,
     taux du marche sinon), TVA europeenne appliquee comme sur le vrai site,
     drapeau canadien a cote du logo quand le pays est le Canada, libelles des
     selecteurs mis a jour.
   Le pays est resolu comme sur le vrai site (Lab401Country : choix memorise en
   sessionStorage, sinon geolocalisation IP). Les prix de base sont les
   attributs data-tax-cents (EUR hors taxes) deja presents dans les pages. */
(function () {
  'use strict';
  var SCRIPT_URL = (document.currentScript && document.currentScript.src) || '';
  var CFG = window.LAB401_STATIC || { base: '', locale: 'en' };
  var STORE_COUNTRY = 'lab401_selected_country';
  var STORE_CHANGED = 'lab401_country_changed';
  var LS_TAX_PREF = 'tax_preference';
  var LS_TAX_RATE = 'tax_rate';
  var COUNTRIES = {"AD": {"name": "Andorre", "currency": "EUR", "symbol": "€"}, "AE": {"name": "Émirats arabes unis", "currency": "AED", "symbol": "د.إ"}, "AL": {"name": "Albanie", "currency": "ALL", "symbol": "L"}, "AT": {"name": "Autriche", "currency": "EUR", "symbol": "€"}, "AU": {"name": "Australie", "currency": "AUD", "symbol": "$"}, "BA": {"name": "Bosnie-Herzégovine", "currency": "BAM", "symbol": "КМ"}, "BE": {"name": "Belgique", "currency": "EUR", "symbol": "€"}, "BG": {"name": "Bulgarie", "currency": "EUR", "symbol": "€"}, "BQ": {"name": "Pays-Bas caribéens", "currency": "USD", "symbol": "$"}, "CA": {"name": "Canada", "currency": "CAD", "symbol": "$"}, "CH": {"name": "Suisse", "currency": "CHF", "symbol": "CHF"}, "CN": {"name": "Chine", "currency": "CNY", "symbol": "¥"}, "CY": {"name": "Chypre", "currency": "EUR", "symbol": "€"}, "CZ": {"name": "Tchéquie", "currency": "CZK", "symbol": "Kč"}, "DE": {"name": "Allemagne", "currency": "EUR", "symbol": "€"}, "DK": {"name": "Danemark", "currency": "DKK", "symbol": "kr."}, "DO": {"name": "République dominicaine", "currency": "DOP", "symbol": "$"}, "EE": {"name": "Estonie", "currency": "EUR", "symbol": "€"}, "ES": {"name": "Espagne", "currency": "EUR", "symbol": "€"}, "FI": {"name": "Finlande", "currency": "EUR", "symbol": "€"}, "FR": {"name": "France", "currency": "EUR", "symbol": "€"}, "GB": {"name": "Royaume-Uni", "currency": "GBP", "symbol": "£"}, "GG": {"name": "Guernesey", "currency": "GBP", "symbol": "£"}, "GI": {"name": "Gibraltar", "currency": "GBP", "symbol": "£"}, "GL": {"name": "Groenland", "currency": "DKK", "symbol": "kr."}, "GR": {"name": "Grèce", "currency": "EUR", "symbol": "€"}, "HK": {"name": "R.A.S. chinoise de Hong Kong", "currency": "HKD", "symbol": "$"}, "HR": {"name": "Croatie", "currency": "EUR", "symbol": "€"}, "HU": {"name": "Hongrie", "currency": "HUF", "symbol": "Ft"}, "IE": {"name": "Irlande", "currency": "EUR", "symbol": "€"}, "IS": {"name": "Islande", "currency": "ISK", "symbol": "kr"}, "IT": {"name": "Italie", "currency": "EUR", "symbol": "€"}, "JE": {"name": "Jersey", "currency": "GBP", "symbol": "£"}, "JO": {"name": "Jordanie", "currency": "JOD", "symbol": "د.ا"}, "JP": {"name": "Japon", "currency": "JPY", "symbol": "¥"}, "KR": {"name": "Corée du Sud", "currency": "KRW", "symbol": "₩"}, "KW": {"name": "Koweït", "currency": "KWD", "symbol": "د.ك"}, "LI": {"name": "Liechtenstein", "currency": "CHF", "symbol": "CHF"}, "LT": {"name": "Lituanie", "currency": "EUR", "symbol": "€"}, "LU": {"name": "Luxembourg", "currency": "EUR", "symbol": "€"}, "LV": {"name": "Lettonie", "currency": "EUR", "symbol": "€"}, "MC": {"name": "Monaco", "currency": "EUR", "symbol": "€"}, "MD": {"name": "Moldavie", "currency": "MDL", "symbol": "L"}, "ME": {"name": "Monténégro", "currency": "EUR", "symbol": "€"}, "MK": {"name": "Macédoine du Nord", "currency": "MKD", "symbol": "ден"}, "MO": {"name": "R.A.S. chinoise de Macao", "currency": "MOP", "symbol": "MOP$"}, "MT": {"name": "Malte", "currency": "EUR", "symbol": "€"}, "MX": {"name": "Mexique", "currency": "MXN", "symbol": "$"}, "NC": {"name": "Nouvelle-Calédonie", "currency": "XPF", "symbol": "₣"}, "NL": {"name": "Pays-Bas", "currency": "EUR", "symbol": "€"}, "NO": {"name": "Norvège", "currency": "NOK", "symbol": "kr"}, "NZ": {"name": "Nouvelle-Zélande", "currency": "NZD", "symbol": "$"}, "OM": {"name": "Oman", "currency": "OMR", "symbol": "ر.ع."}, "PH": {"name": "Philippines", "currency": "PHP", "symbol": "₱"}, "PL": {"name": "Pologne", "currency": "PLN", "symbol": "zł"}, "PT": {"name": "Portugal", "currency": "EUR", "symbol": "€"}, "QA": {"name": "Qatar", "currency": "QAR", "symbol": "ر.ق"}, "RO": {"name": "Roumanie", "currency": "RON", "symbol": "Lei"}, "RS": {"name": "Serbie", "currency": "RSD", "symbol": "РСД"}, "SE": {"name": "Suède", "currency": "SEK", "symbol": "kr"}, "SG": {"name": "Singapour", "currency": "SGD", "symbol": "$"}, "SI": {"name": "Slovénie", "currency": "EUR", "symbol": "€"}, "SK": {"name": "Slovaquie", "currency": "EUR", "symbol": "€"}, "SM": {"name": "Saint-Marin", "currency": "EUR", "symbol": "€"}, "TH": {"name": "Thaïlande", "currency": "THB", "symbol": "฿"}, "TW": {"name": "Taïwan", "currency": "TWD", "symbol": "$"}, "UA": {"name": "Ukraine", "currency": "UAH", "symbol": "₴"}, "US": {"name": "États-Unis", "currency": "USD", "symbol": "$"}, "VA": {"name": "État de la Cité du Vatican", "currency": "EUR", "symbol": "€"}, "XK": {"name": "Kosovo", "currency": "EUR", "symbol": "€"}, "ZA": {"name": "Afrique du Sud", "currency": "ZAR", "symbol": "R"}};
  var RATES = {"EUR": 1, "AED": 4.030196, "AFN": 71.802419, "ALL": 90.285973, "AMD": 395.691992, "ANG": 1.964343, "AOA": 1056.620265, "ARS": 1710.013269, "AUD": 1.632877, "AWG": 1.964343, "AZN": 1.865592, "BAM": 1.95583, "BBD": 2.194797, "BDT": 136.744467, "BGN": 1.95583, "BHD": 0.412622, "BIF": 3303.72894, "BMD": 1.097399, "BND": 1.414895, "BOB": 12.837158, "BRL": 6.363359, "BSD": 1.097399, "BTN": 102.511227, "BWP": 15.967963, "BYN": 3.295085, "BZD": 2.194797, "CAD": 1.571655, "CDF": 2551.56391, "CHF": 0.924889, "CLF": 0.027585, "CLP": 1090.321297, "CNH": 7.316315, "CNY": 7.328059, "COP": 3634.795118, "CRC": 488.317114, "CUP": 26.337565, "CVE": 110.265, "CZK": 24.390586, "DJF": 195.030767, "DKK": 7.47476, "DOP": 66.403357, "DZD": 150.540411, "EGP": 58.979171, "ERN": 16.460978, "ETB": 185.048525, "FJD": 2.52292, "FKP": 0.834, "FOK": 7.47476, "GBP": 0.833994, "GEL": 2.845824, "GGP": 0.834, "GHS": 12.929598, "GIP": 0.834, "GMD": 82.107963, "GNF": 9715.36801, "GTQ": 8.384974, "GYD": 229.761679, "HKD": 8.608297, "HNL": 29.502028, "HRK": 7.5345, "HTG": 144.101062, "HUF": 368.385489, "IDR": 19999.752795, "ILS": 3.588437, "IMP": 0.834, "INR": 102.501162, "IQD": 1663.519608, "IRR": 2119295.852443, "ISK": 136.945263, "JEP": 0.834, "JMD": 173.935739, "JOD": 0.778056, "JPY": 174.886879, "KES": 142.782084, "KGS": 96.003861, "KHR": 4465.236842, "KID": 1.63283, "KMF": 491.96775, "KRW": 1461.528828, "KWD": 0.341086, "KYD": 0.914498, "KZT": 487.772164, "LAK": 24534.980649, "LBP": 98217.16963, "LKR": 365.075057, "LRD": 184.326371, "LSL": 18.917292, "LYD": 7.097164, "MAD": 10.933703, "MDL": 20.081594, "MGA": 4996.265011, "MKD": 61.497, "MMK": 2305.434092, "MNT": 3948.061818, "MOP": 8.866578, "MRU": 44.776092, "MUR": 52.347717, "MVR": 16.954968, "MWK": 1915.439726, "MXN": 20.545781, "MYR": 4.515598, "MZN": 70.027708, "NAD": 18.917292, "NGN": 1471.730955, "NIO": 40.379953, "NOK": 10.633253, "NPR": 164.017963, "NZD": 1.998382, "OMR": 0.421946, "PAB": 1.097399, "PEN": 3.754368, "PGK": 4.934389, "PHP": 69.836265, "PKR": 303.628595, "PLN": 4.411999, "PYG": 6866.279646, "QAR": 3.994531, "RON": 5.347767, "RSD": 117.624908, "RUB": 90.370338, "RWF": 1626.816573, "SAR": 4.115245, "SBD": 8.807604, "SCR": 16.073072, "SDG": 491.111433, "SEK": 11.154081, "SGD": 1.414851, "SHP": 0.834, "SLE": 25.162655, "SLL": 25162.914459, "SOS": 628.440741, "SRD": 41.254316, "SSP": 6309.218669, "STN": 24.5, "SYP": 133.569088, "SZL": 18.917292, "THB": 37.269354, "TJS": 10.103339, "TMT": 3.839634, "TND": 3.350605, "TOP": 2.628365, "TRY": 55.391918, "TTD": 7.886542, "TVD": 1.63283, "TWD": 36.151043, "TZS": 2890.861781, "UAH": 49.666392, "UGX": 4470.683293, "USD": 1.097391, "UYU": 44.577422, "UZS": 13137.318384, "VES": 1007.395839, "VND": 28223.512458, "VUV": 133.058915, "WST": 3.05682, "XAF": 655.957, "XCD": 2.962976, "XCG": 1.964343, "XDR": 0.81649, "XOF": 655.957, "XPF": 119.332, "YER": 259.606199, "ZAR": 18.917365, "ZMW": 22.650832, "ZWG": 29.1924, "ZWL": 29.1924};
  var FORMATS = {"EUR": {"sym": "€", "pre": true, "dec": 2}, "AED": {"sym": "د.إ", "pre": false, "dec": 2}, "ALL": {"sym": "L", "pre": false, "dec": 2}, "AUD": {"sym": "$", "pre": true, "dec": 2}, "BAM": {"sym": "КМ", "pre": false, "dec": 2}, "USD": {"sym": "$", "pre": true, "dec": 2}, "CAD": {"sym": "$", "pre": true, "dec": 2}, "CHF": {"sym": "CHF", "pre": true, "dec": 2}, "CNY": {"sym": "¥", "pre": true, "dec": 2}, "CZK": {"sym": "Kč", "pre": false, "dec": 2}, "DKK": {"sym": "kr.", "pre": false, "dec": 2}, "DOP": {"sym": "$", "pre": true, "dec": 2}, "GBP": {"sym": "£", "pre": true, "dec": 2}, "HKD": {"sym": "$", "pre": true, "dec": 2}, "HUF": {"sym": "Ft", "pre": false, "dec": 2}, "ISK": {"sym": "kr", "pre": false, "dec": 2}, "JOD": {"sym": "د.ا", "pre": false, "dec": 2}, "JPY": {"sym": "¥", "pre": true, "dec": 0}, "KRW": {"sym": "₩", "pre": true, "dec": 0}, "KWD": {"sym": "د.ك", "pre": false, "dec": 2}, "MDL": {"sym": "L", "pre": false, "dec": 2}, "MKD": {"sym": "ден", "pre": false, "dec": 2}, "MOP": {"sym": "MOP$", "pre": false, "dec": 2}, "MXN": {"sym": "$", "pre": true, "dec": 2}, "XPF": {"sym": "₣", "pre": false, "dec": 2}, "NOK": {"sym": "kr", "pre": false, "dec": 2}, "NZD": {"sym": "$", "pre": true, "dec": 2}, "OMR": {"sym": "ر.ع.", "pre": false, "dec": 2}, "PHP": {"sym": "₱", "pre": true, "dec": 2}, "PLN": {"sym": "zł", "pre": false, "dec": 2}, "QAR": {"sym": "ر.ق", "pre": false, "dec": 2}, "RON": {"sym": "Lei", "pre": false, "dec": 2}, "RSD": {"sym": "РСД", "pre": false, "dec": 2}, "SEK": {"sym": "kr", "pre": false, "dec": 2}, "SGD": {"sym": "$", "pre": true, "dec": 2}, "THB": {"sym": "฿", "pre": true, "dec": 2}, "TWD": {"sym": "$", "pre": true, "dec": 2}, "UAH": {"sym": "₴", "pre": false, "dec": 2}, "ZAR": {"sym": "R", "pre": false, "dec": 2}};
  var EU_VAT = { AT: 1.2, BE: 1.21, BG: 1.2, HR: 1.25, CY: 1.19, CZ: 1.21, DK: 1.25, EE: 1.22, FI: 1.255, FR: 1.2, DE: 1.19, GR: 1.24, HU: 1.27, IE: 1.23, IT: 1.22, LV: 1.21, LT: 1.21, LU: 1.17, MT: 1.18, NL: 1.21, PL: 1.23, PT: 1.23, RO: 1.19, SK: 1.23, SI: 1.22, ES: 1.21, SE: 1.25 };
  var CAD_FALLBACK_RATE = 1.66;
  var CAD_MAP = null;
  var USD_MAP = null;
  var LOCALE_ALIASES = { 'policies/privacy-policy': 'pages/privacy-policy', 'policies/terms-of-service': 'pages/terms-and-conditions', 'policies/refund-policy': 'pages/returns-policy' };
  var state = { country: null, currency: 'EUR', taxPref: false, taxRate: 1 };
  var updating = false;

  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function norm(code) {
    if (typeof code !== 'string') return null;
    code = code.trim().toUpperCase();
    if (code === 'UK') code = 'GB';
    if (code === 'EL') code = 'GR';
    return /^[A-Z]{2}$/.test(code) && code !== 'XX' ? code : null;
  }
  function flagUrl(code) { return (CFG.base || '') + '/cdn/shop/t/60/assets/flag-' + code.toLowerCase() + '.svg'; }

  /* ---------------- chemins et langue ---------------- */
  function canonicalPath() {
    var link = $('link[rel="canonical"]');
    if (link && link.href) { try { return new URL(link.href).pathname; } catch (e) {} }
    return null;
  }
  function logicalPath() {
    var cp = canonicalPath();
    if (cp) {
      /* Le canonical des pages EN est relatif ("index.html") : une fois
         resolu, son chemin contient la base /lab401-clone. Il faut la
         retirer ici, sinon le changement de langue construit une URL
         cassee (/lab401-clone/fr/lab401-clone/index.html.html). */
      if (CFG.base && cp.indexOf(CFG.base) === 0) cp = cp.slice(CFG.base.length);
      cp = cp.replace(/^\/(fr|it|es|de)(\/|$)/, '/').replace(/\.html$/, '').replace(/\/index$/, '/');
      return cp === '' ? '/' : cp;
    }
    var p = window.location.pathname;
    if (CFG.base && p.indexOf(CFG.base) === 0) p = p.slice(CFG.base.length);
    p = p.replace(/^\/(fr|it|es|de)(\/|$)/, '/').replace(/\.html$/, '').replace(/\/index$/, '/');
    return p === '' ? '/' : p;
  }
  function targetForLocale(code) {
    var path = logicalPath();
    var page = 1, pm = window.location.search.match(/[?&]page=(\d+)/);
    if (pm) page = parseInt(pm[1], 10);
    for (var k in LOCALE_ALIASES) { if (path === '/' + k) { path = '/' + LOCALE_ALIASES[k]; break; } }
    var cm = path.match(/^\/collections\/[^\/]+\/products\/(.+)$/);
    if (cm) path = '/products/' + cm[1];
    if (page > 1) path = path + '-page-' + page;
    var target = (CFG.base || '') + (code === 'en' ? '' : '/' + code) + path;
    if (path !== '/') target += '.html';
    return target;
  }
  window.Lab401_switchLocale = function (code) {
    code = (code || '').toLowerCase();
    if (['en', 'fr', 'es'].indexOf(code) === -1) return;
    window.location.href = targetForLocale(code);
  };
  window.Lab401_switchCountry = function (code) {
    code = norm(code);
    if (!code || !COUNTRIES[code]) return;
    try {
      sessionStorage.setItem(STORE_COUNTRY, code);
      sessionStorage.setItem(STORE_CHANGED, '1');
    } catch (e) {}
    applyCountry(code, 'selected country');
  };

  /* ---------------- prix ---------------- */
  function fmt(cur) { return FORMATS[cur] || { sym: cur, pre: true, dec: 2 }; }
  function formatMajor(major, cur) {
    var f = fmt(cur);
    var num = major.toFixed(f.dec).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return f.pre ? f.sym + num : num + ' ' + f.sym;
  }
  function eurCents(el) {
    var v = parseFloat(el.getAttribute('data-tax-cents'));
    return isNaN(v) ? null : v;
  }
  function handleFor(el) {
    var a = el.closest ? el.closest('a[href*="products/"]') : null;
    if (a) {
      var m = (a.getAttribute('href') || '').match(/products\/([^\/\?\#]+)/);
      if (m) return m[1].replace(/\.html$/, '');
    }
    /* Sur les listes (accueil, collections), le prix n'est PAS dans le lien
       produit : le lien est ferme avant le prix, mais la carte (.productitem)
       contient le lien (image ou titre) et/ou data-product-quickshop-url.
       On remonte les ancetres (max 7) et on prend le premier lien produit
       trouve dans l'ancetre : c'est celui de la carte, pas de la grille. */
    var node = el;
    for (var depth = 0; depth < 7 && node; depth++) {
      node = node.parentElement;
      if (!node) break;
      var q = node.getAttribute && node.getAttribute('data-product-quickshop-url');
      if (q) {
        var mq = q.match(/products\/([^\/\?\#]+)/);
        if (mq) return mq[1];
      }
      var link = node.querySelector ? node.querySelector('a[href*="products/"]') : null;
      if (link) {
        var ml = (link.getAttribute('href') || '').match(/products\/([^\/\?\#]+)/);
        if (ml) return ml[1].replace(/\.html$/, '');
      }
    }
    var cp = canonicalPath();
    if (cp) {
      var m2 = cp.match(/^\/(?:fr|it|es|de)?\/?products\/([^\/\?]+)/);
      if (m2) return m2[1];
    }
    return null;
  }
  function isCompare(el) {
    return !!(el.closest && (el.closest('s') || el.closest('del') ||
      el.closest('[class*="compare"]') || el.closest('[data-compare-price], [data-price-compare]')));
  }
  function isHiddenTemplate(el) {
    return !!(el.closest && el.closest('[data-current-price-hidden],[data-current-price-range-hidden],[data-compare-price-hidden],[data-compare-price-range-hidden]'));
  }
  function convertMajor(cents, handle, isCmp) {
    var cur = state.currency;
    if (cur === 'EUR') return cents / 100;
    var eurMajor = cents / 100;
    var exactMap = cur === 'CAD' ? CAD_MAP : (cur === 'USD' ? USD_MAP : null);
    if (exactMap && handle && exactMap[handle]) {
      var table = (isCmp && exactMap[handle].compare) ? exactMap[handle].compare : exactMap[handle].price;
      var key = eurMajor.toFixed(2);
      if (table && table[key] != null) return table[key];
    }
    var rate = cur === 'CAD' ? CAD_FALLBACK_RATE : (RATES[cur] || 1);
    var val = eurMajor * rate;
    if (cur === 'CAD' || cur === 'USD' || fmt(cur).dec === 0) val = Math.round(val);
    return val;
  }
  function setPrice(el, text) {
    if (el.classList.contains('element-text--price-superscript')) {
      var parts = text.split('.');
      while (el.firstChild) el.removeChild(el.firstChild);
      if (parts.length === 2) {
        var span = document.createElement('span'); span.textContent = parts[0];
        var sup = document.createElement('sup'); sup.textContent = parts[1];
        el.appendChild(span); el.appendChild(sup);
      } else el.textContent = text;
    } else el.textContent = text;
  }
  function processPrices() {
    updating = true;
    $$('[data-tax-cents]').forEach(function (el) {
      var cents = eurCents(el);
      if (cents == null) return;
      var major = convertMajor(cents, handleFor(el), isCompare(el));
      if (state.taxPref && state.taxRate !== 1) major = major * state.taxRate;
      setPrice(el, formatMajor(major, state.currency));
    });
    updating = false;
  }
  function parseEurText(text) {
    var m = text.match(/€\s*([\d,]+\.\d{2})/);
    if (!m) return null;
    var v = parseFloat(m[1].replace(/,/g, ''));
    return isNaN(v) ? null : Math.round(v * 100);
  }
  function detectVariantPriceChanges() {
    var changed = false;
    $$('[data-product-pricing] [data-price], [data-product-pricing] [data-price-min], [data-product-pricing] [data-price-max], [data-product-pricing] [data-price-compare], [data-product-pricing] [data-price-compare-min], [data-product-pricing] [data-price-compare-max], [data-product-wrapper] [data-price], [data-product-wrapper] [data-price-min], [data-product-wrapper] [data-price-max], [data-product-wrapper] [data-price-compare], [data-product-wrapper] [data-price-compare-min], [data-product-wrapper] [data-price-compare-max]').forEach(function (el) {
      /* Ne jamais ecrire data-tax-cents sur un element qui n'en a pas
         (ex. [data-price-money-saved] : c'est une economie, pas un prix). */
      if (!el.hasAttribute('data-tax-cents')) return;
      var text = (el.textContent || '').trim();
      if (!text) return;
      var cents = parseEurText(text);
      if (cents == null) return;
      if (eurCents(el) === cents) return;
      /* Valider : le prix EUR lu doit etre une variante connue du produit
         (present dans la table exacte CAD ou USD). Sinon c'est un prix
         compare, une economie ou un texte parasite : l'ecrire corromprait
         data-tax-cents et fausserait tous les changements de devise
         suivants (la table ne contient pas la cle, donc le taux de
         repli s'applique au lieu du prix exact). */
      var handle = handleFor(el);
      var key = (cents / 100).toFixed(2);
      var known = false;
      [CAD_MAP, USD_MAP].forEach(function (map) {
        if (map && handle && map[handle]) {
          var t = map[handle].price, c = map[handle].compare;
          if ((t && t[key] != null) || (c && c[key] != null)) known = true;
        }
      });
      if (!known) return;
      el.setAttribute('data-tax-cents', String(cents));
      changed = true;
    });
    if (changed) processPrices();
  }

  /* ---------------- TVA (remplace tax.js) ---------------- */
  function setTaxPref(v) {
    state.taxPref = !!v;
    try { localStorage.setItem(LS_TAX_PREF, String(state.taxPref)); } catch (e) {}
  }
  function setTaxRate(r) {
    state.taxRate = r;
    try { localStorage.setItem(LS_TAX_RATE, String(r)); } catch (e) {}
  }
  function syncCheckboxes() {
    $$('[data-tax-preference]').forEach(function (cb) { cb.checked = state.taxPref; });
  }
  function setToggleVisibility(visible) {
    $$('.vatToggle').forEach(function (t) { t.style.display = visible ? 'flex' : 'none'; });
  }
  window.taxHandler = {
    getTaxPreference: function () { return state.taxPref; },
    setTaxPreference: function (v) { setTaxPref(v); syncCheckboxes(); processPrices(); },
    getTaxRate: function () { return state.taxRate; },
    setTaxRate: function (r) { setTaxRate(r); processPrices(); },
    refresh: processPrices
  };

  /* ---------------- selecteurs de devise ---------------- */
  function setFlagImg(span, code) {
    if (!span) return;
    var img = span.querySelector('img');
    if (img) { img.src = flagUrl(code); return; }
    img = document.createElement('img');
    img.className = 'flag-icon flag-icon--country';
    img.src = flagUrl(code); img.width = 20; img.height = 15;
    img.alt = ''; img.setAttribute('aria-hidden', 'true');
    span.appendChild(img);
  }
  function headerOption(c) {
    var info = COUNTRIES[c];
    var li = document.createElement('li');
    var a = document.createElement('a');
    a.className = 'disclosure-list__item' + (c === state.country ? ' disclosure-list__item--current' : '');
    a.href = '#'; a.setAttribute('data-value', c); a.setAttribute('data-disclosure-option', '');
    if (c === state.country) a.setAttribute('aria-current', 'true');
    a.innerHTML = '<span class="header-currency-selector__dropdown-flag"><img class="flag-icon flag-icon--country" src="' + flagUrl(c) + '" width="20" height="15" loading="lazy" alt="" aria-hidden="true"></span> <span class="disclosure-list__option">' + info.symbol + ' ' + info.currency + '</span>';
    li.appendChild(a);
    return li;
  }
  function mobileOption(c) {
    var info = COUNTRIES[c];
    var li = document.createElement('li');
    var a = document.createElement('a');
    a.className = 'mobile-currency__option' + (c === state.country ? ' mobile-currency__option--current' : '');
    a.href = '#'; a.setAttribute('data-value', c); a.setAttribute('data-mobile-currency-option', '');
    if (c === state.country) a.setAttribute('aria-current', 'true');
    a.innerHTML = '<span class="mobile-currency__option-flag"><img class="flag-icon flag-icon--country" src="' + flagUrl(c) + '" width="20" height="15" loading="lazy" alt="" aria-hidden="true"></span> <span>' + info.symbol + ' ' + info.currency + '</span>';
    li.appendChild(a);
    return li;
  }
  function populateCurrencyLists() {
    var order = [];
    if (state.country) order.push(state.country);
    Object.keys(COUNTRIES).forEach(function (c) { if (c !== state.country) order.push(c); });
    var hl = $('.header-currency-selector__list');
    if (hl) { hl.innerHTML = ''; order.forEach(function (c) { hl.appendChild(headerOption(c)); }); }
    /* Remplir TOUTES les listes mobiles (pas seulement la premiere) : le
       theme peut recreer le menu mobile, et la liste visible n'est alors
       plus celle remplie a l'initialisation (elle reste vide -> le bouton
       ouvre un mince espace blanc). */
    $$('.mobile-currency__list').forEach(function (ml) {
      ml.innerHTML = '';
      order.forEach(function (c) { ml.appendChild(mobileOption(c)); });
    });
  }
  function updateCurrencyButtons(code, info) {
    var shortLabel = info.symbol + ' ' + info.currency;
    var longLabel = info.name + ' (' + info.currency + ' ' + info.symbol + ')';
    $$('.header-currency-selector__toggle').forEach(function (btn) {
      setFlagImg(btn.querySelector('.header-currency-selector__flag'), code);
      var lab = btn.querySelector('.header-currency-selector__label');
      if (lab) lab.textContent = ' ' + shortLabel + ' ';
    });
    $$('.mobile-currency__toggle').forEach(function (btn) {
      setFlagImg(btn.querySelector('.mobile-currency__flag'), code);
      var nm = btn.querySelector('.mobile-currency__name');
      if (nm) nm.textContent = shortLabel;
    });
    $$('[data-disclosure-country]').forEach(function (box) {
      var toggle = box.querySelector('[data-disclosure-toggle]');
      if (toggle) {
        setFlagImg(toggle.querySelector('[class*="__flag"]'), code);
        /* Le bouton contient un noeud texte (nom du pays) ET un span
           .disclosure-list__option-code (" (EUR \u20ac)") : il faut mettre
           a jour les deux, sinon on obtient "Canada (CAD $) (EUR \u20ac)". */
        var done = false;
        Array.prototype.slice.call(toggle.childNodes).forEach(function (n) {
          if (!done && n.nodeType === 3 && n.textContent.trim()) { n.textContent = ' ' + info.name + ' '; done = true; }
        });
        var codeSpan = toggle.querySelector('.disclosure-list__option-code');
        if (codeSpan) codeSpan.textContent = ' (' + info.currency + ' ' + info.symbol + ')';
        if (!done && !codeSpan) {
          var lab = toggle.querySelector('[class*="__label"], [class*="__name"], .disclosure-list__option');
          if (lab) lab.textContent = longLabel;
        }
      }
      $$('[data-disclosure-option]', box).forEach(function (opt) {
        var cur = opt.getAttribute('data-value') === code;
        opt.classList.toggle('disclosure-list__item--current', cur);
        if (cur) opt.setAttribute('aria-current', 'true'); else opt.removeAttribute('aria-current');
      });
      var radio = box.querySelector('input[name="country_code"][value="' + code + '"]');
      if (radio) radio.checked = true;
    });
    $$('.header-currency-selector__list [data-disclosure-option], .mobile-currency__list [data-mobile-currency-option]').forEach(function (opt) {
      var cur = opt.getAttribute('data-value') === code;
      opt.classList.toggle('disclosure-list__item--current', cur);
      opt.classList.toggle('mobile-currency__option--current', cur);
      if (cur) opt.setAttribute('aria-current', 'true'); else opt.removeAttribute('aria-current');
    });
  }
  function updateLogoFlag(code) {
    /* Le drapeau du pays choisi apparait a cote du logo, pour TOUS les pays
       (modele .ca porte a toutes les devises) : le drapeau du theme
       flag-xx.svg, 20x15, colle a droite du logo.
       IMPORTANT : retirer d'abord TOUS les drapeaux deja presents dans le
       lien du logo (pas seulement le notre). Un drapeau d'une autre source
       (ex. US par defaut, ou un clone de l'en-tete fixe) resterait sinon
       colle a cote du notre, les deux se chevauchant (bug signale 2026-11-18 :
       drapeaux US + CA affiches ensemble). Traiter tous les liens .site-logo
       (en-tete fixe clone l'en-tete), pas seulement le premier. */
    var links = document.querySelectorAll('a.site-logo');
    if (!links.length) return;
    for (var li = 0; li < links.length; li++) {
      var link = links[li];
      var stale = link.querySelectorAll('img[src*="flag-"]');
      for (var i = 0; i < stale.length; i++) stale[i].remove();
      if (code && COUNTRIES[code]) {
        var img = document.createElement('img');
        img.className = 'flag-icon flag-icon--country lab401-country-flag';
        img.src = flagUrl(code); img.width = 20; img.height = 15;
        img.alt = ''; img.setAttribute('aria-hidden', 'true');
        img.style.cssText = 'margin-left:6px;vertical-align:middle;flex-shrink:0;';
        link.appendChild(img);
        link.style.display = 'inline-flex';
        link.style.alignItems = 'center';
      }
    }
  }

  /* ---------------- application du pays ---------------- */
  function wireDisclosure(wrapperSel, toggleSel, listSel) {
    /* Reproduit le mecanisme du selecteur de langue (script inline du theme)
       : clic sur le bouton -> ouvre/ferme la liste, clic ailleurs -> ferme.
       Ne cible que les selecteurs de DEVISE/PAYS (la langue a deja son
       propre script inline : la rebrancher ferait basculer deux fois).
       La devise mobile utilise ses propres attributs
       (data-mobile-currency-toggle / data-mobile-currency-list) et non
       data-disclosure-toggle / data-disclosure-list : sans les bons
       selecteurs, le bouton ne faisait rien. */
    toggleSel = toggleSel || '[data-disclosure-toggle]';
    listSel = listSel || '[data-disclosure-list]';
    var wrapper = document.querySelector(wrapperSel);
    if (!wrapper || wrapper.getAttribute('data-lab401-wired')) return;
    var toggle = wrapper.querySelector(toggleSel);
    var list = wrapper.querySelector(listSel);
    if (!toggle || !list) return;
    wrapper.setAttribute('data-lab401-wired', '1');
    function open() { list.style.display = 'block'; toggle.setAttribute('aria-expanded', 'true'); }
    function close() { list.style.display = 'none'; toggle.setAttribute('aria-expanded', 'false'); }
    toggle.addEventListener('click', function (e) {
      e.preventDefault();
      if (list.style.display === 'block') close(); else open();
    });
    document.addEventListener('click', function (e) { if (!wrapper.contains(e.target)) close(); });
  }
  function wireCurrencyDisclosures() {
    wireDisclosure('[data-header-currency-selector]');
    wireDisclosure('[data-disclosure-country]');
    /* La devise MOBILE n'est pas branchee ici : son bouton est gere par
       delegation sur document (gestionnaire de clics ci-dessous), pour
       survivre a une re-creation du menu mobile par le theme, et sa liste
       s'ouvre VERS LE HAUT (CSS injecte) car elle est en bas du menu. */
  }
  /* La liste devise mobile s'ouvrait vers le BAS depuis la derniere rangee
     du menu : 71 options hors ecran, invisibles (« rien ne se passe » au
     tap). On l'ouvre VERS LE HAUT, avec defilement et fond blanc. */
  function injectMobileCurrencyCSS() {
    if (document.getElementById('lab401-mobile-currency-css')) return;
    var st = document.createElement('style');
    st.id = 'lab401-mobile-currency-css';
    st.textContent = '.mobile-currency{position:relative}'
      + '.mobile-currency__list{position:absolute;bottom:calc(100% + 6px);left:0;right:0;max-height:45vh;overflow-y:auto;background:#fff;border:1px solid #ddd;border-radius:4px;box-shadow:0 -4px 18px rgba(0,0,0,.2);z-index:80;margin:0;padding:4px 0;list-style:none}'
      + '.mobile-currency__list .mobile-currency__option{display:flex;align-items:center;gap:8px;padding:8px 12px;color:#111;text-decoration:none;white-space:nowrap}'
      + '.mobile-currency__list .mobile-currency__option--current{font-weight:700}';
    document.head.appendChild(st);
  }
  function applyCountry(code, source) {
    if (!code || !COUNTRIES[code]) code = 'US';
    var info = COUNTRIES[code];
    state.country = code;
    state.currency = info.currency;
    if (code in EU_VAT) {
      setTaxRate(EU_VAT[code]);
      setToggleVisibility(true);
      if (localStorage.getItem(LS_TAX_PREF) === null) setTaxPref(true);
    } else {
      setTaxRate(1);
      setToggleVisibility(false);
      if (localStorage.getItem(LS_TAX_PREF) === null) setTaxPref(false);
    }
    state.taxPref = localStorage.getItem(LS_TAX_PREF) === 'true';
    syncCheckboxes();
    var ship = document.getElementById('shipping-country');
    if (ship && !ship.value && source !== 'fallback') {
      ship.value = code === 'GB' ? 'uk' : code.toLowerCase();
      ship.dispatchEvent(new Event('change'));
    }
    populateCurrencyLists();
  wireCurrencyDisclosures();
    updateCurrencyButtons(code, info);
    updateLogoFlag(code);
    /* Ne PAS appeler detectVariantPriceChanges() ici : un changement de
       pays/devise ne change pas la variante. Le texte affiche est alors
       dans l'ancienne devise ; le relire comme un prix EUR corromprait
       data-tax-cents et faussait les prix apres un aller-retour de devise
       (ex. CAD -> USD -> CAD : 50 $ au lieu de 51 $, 47 $ au lieu de 52 $).
       La detection des variantes reste active via l'observateur (ligne
       variantTimer), qui se declenche quand le theme met a jour les prix. */
    processPrices();
  }
  function loadCadMap() {
    var url = SCRIPT_URL ? SCRIPT_URL.slice(0, SCRIPT_URL.lastIndexOf('/') + 1) + 'lab401-cad-prices.json' : (CFG.base || '') + '/lab401-cad-prices.json';
    return fetch(url).then(function (r) {
      if (!r.ok) throw new Error('cad map ' + r.status);
      return r.json();
    }).then(function (j) { CAD_MAP = j; });
  }
  function loadUsdMap() {
    var url = SCRIPT_URL ? SCRIPT_URL.slice(0, SCRIPT_URL.lastIndexOf('/') + 1) + 'lab401-usd-prices.json' : (CFG.base || '') + '/lab401-usd-prices.json';
    return fetch(url).then(function (r) {
      if (!r.ok) throw new Error('usd map ' + r.status);
      return r.json();
    }).then(function (j) { USD_MAP = j; });
  }

  /* ---------------- interceptions ---------------- */
  /* Recherche predictive (suggestions en direct) : le theme (LiveSearch)
     charge les suggestions depuis /<loc>/search/suggest (backend Shopify,
     absent du clone statique -> 404). Le fetch echoue alors et les squelettes
     de chargement restent affiches indefiniment (bug signale 2026-11-18 :
     la barre de recherche ne montre jamais les produits).
     On intercepte ce fetch et on repond avec les produits de l'index local,
     dans le meme format HTML que la section predictive-search du theme. */
  var searchIndexCache = null;
  function loadSearchIndex() {
    if (searchIndexCache) return Promise.resolve(searchIndexCache);
    var url = (CFG.base || '') + '/lab401-search-index.json';
    return fetch(url).then(function (r) {
      if (!r.ok) throw new Error('search index ' + r.status);
      return r.json();
    }).then(function (j) { searchIndexCache = j; return j; });
  }
  function normQ(s) { return (s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''); }
  function escHtml(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
  function predictiveSearchHTML(q) {
    var loc = CFG.locale || 'en';
    var base = CFG.base || '';
    return loadSearchIndex().then(function (all) {
      var nq = normQ(q);
      var words = nq.split(/\s+/).filter(Boolean);
      if (!words.length) return '';
      var hits = all.filter(function (p) {
        if (p.locale !== loc) return false;
        var hay = normQ(p.title + ' ' + p.handle);
        return words.every(function (w) { return hay.indexOf(w) !== -1; });
      }).slice(0, 6);
      if (!hits.length) {
        return '<div class="search-flydown--no-results" data-live-search-no-products><p>Aucun r\u00e9sultat pour &ldquo;' + escHtml(q) + '&rdquo;</p></div>';
      }
      var items = hits.map(function (p) {
        var url = base + '/' + p.url;
        var img = p.image ? (base + '/' + p.image) : '';
        var price = p.price_cents != null ? '<span data-tax-cents="' + p.price_cents + '">\u20AC' + (p.price_cents / 100).toFixed(2) + '</span>' : '';
        return '<a class="search-flydown--product" href="' + escHtml(url) + '">'
          + '<div class="search-flydown--product-image">' + (img ? '<img src="' + escHtml(img) + '" alt="" loading="lazy">' : '') + '</div>'
          + '<div class="search-flydown--product-text">'
          + '<span class="search-flydown--product-title">' + escHtml(p.title) + '</span>'
          + '<span class="search-flydown--product-price">' + price + '</span>'
          + '</div></a>';
      }).join('');
      return '<div class="search-flydown--product-items">' + items + '</div>';
    });
  }
  var nativeFetch = window.fetch && window.fetch.bind(window);
  if (nativeFetch) {
    window.fetch = function (input, init) {
      var url = typeof input === 'string' ? input : (input && input.url) || '';
      if (url.indexOf('/search/suggest') !== -1) {
        var m = /[?&]q=([^&]*)/.exec(url);
        var q = m ? decodeURIComponent(m[1].replace(/\+/g, ' ')) : '';
        return predictiveSearchHTML(q).then(function (html) {
          return new Response(html, { status: 200, headers: { 'Content-Type': 'text/html' } });
        }).catch(function () {
          return new Response('', { status: 200, headers: { 'Content-Type': 'text/html' } });
        });
      }
      return nativeFetch(input, init);
    };
  }
  function closeOpenDisclosures() {
    $$('[data-disclosure-toggle][aria-expanded="true"], [data-mobile-currency-toggle][aria-expanded="true"], [data-mobile-lang-toggle][aria-expanded="true"]').forEach(function (t) {
      try { t.click(); } catch (e) {}
    });
  }
  document.addEventListener('click', function (e) {
    if (!e.target || !e.target.closest) return;
    /* Devise mobile : bascule de la liste par delegation (survit a une
       re-creation du menu par le theme ; ne pas rebrancher en direct). */
    var mct = e.target.closest('[data-mobile-currency-toggle]');
    if (mct) {
      e.preventDefault();
      var mwrap = mct.closest('[data-mobile-currency]');
      var mlist = mwrap && mwrap.querySelector('[data-mobile-currency-list]');
      if (mlist) {
        var isOpen = mlist.style.display === 'block';
        /* Re-remplir la liste a chaque ouverture : si le theme a recree le
           menu mobile depuis l'initialisation, la liste visible est vide
           (le bouton n'ouvrait qu'un mince espace blanc). */
        if (!isOpen) populateCurrencyLists();
        mlist.style.display = isOpen ? 'none' : 'block';
        mct.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
      }
      return;
    }
    /* Fermer la liste devise mobile sur clic ailleurs. */
    var mcList = document.querySelector('[data-mobile-currency-list]');
    if (mcList && mcList.style.display === 'block' && !e.target.closest('[data-mobile-currency]')) {
      mcList.style.display = 'none';
      var mct2 = document.querySelector('[data-mobile-currency-toggle]');
      if (mct2) mct2.setAttribute('aria-expanded', 'false');
    }
    var ly = e.target.closest('.ly-languages-switcher-link, [data-language-code]');
    if (ly && ly.getAttribute('data-language-code')) {
      e.preventDefault(); e.stopPropagation();
      window.Lab401_switchLocale(ly.getAttribute('data-language-code'));
      return;
    }
    var ml = e.target.closest('[data-mobile-lang-option]');
    if (ml && ml.getAttribute('data-value')) {
      e.preventDefault(); e.stopPropagation();
      window.Lab401_switchLocale(ml.getAttribute('data-value'));
      return;
    }
    var co = e.target.closest('[data-disclosure-country] [data-disclosure-option][data-value], .header-currency-selector__list [data-disclosure-option][data-value], [data-mobile-currency-option][data-value]');
    if (co) {
      e.preventDefault(); e.stopPropagation();
      closeOpenDisclosures();
      window.Lab401_switchCountry(co.getAttribute('data-value'));
      return;
    }
    var lo = e.target.closest('[data-disclosure-locale] [data-disclosure-option][data-value], .header-lang-selector__list [data-disclosure-option][data-value]');
    if (lo && lo.getAttribute('data-value')) {
      e.preventDefault(); e.stopPropagation();
      window.Lab401_switchLocale(lo.getAttribute('data-value'));
      return;
    }
  }, true);
  document.addEventListener('submit', function (e) {
    var form = e.target;
    if (!form || form.tagName !== 'FORM') return;
    var cc = form.querySelector('input[name="country_code"]');
    if (cc && cc.value) { e.preventDefault(); window.Lab401_switchCountry(cc.value); return; }
    var loc = form.querySelector('input[name="locale_code"]');
    if (loc && loc.value) { e.preventDefault(); window.Lab401_switchLocale(loc.value); }
    /* Recherche : le formulaire du theme envoie vers /search (backend Shopify,
       absent du clone statique -> 404). Rediriger vers la page de recherche
       locale, qui cherche dans l'index local des produits (lab401-search-index.json). */
    var act = form.getAttribute('action') || '';
    if (act === '/search' || form.hasAttribute('data-live-search-form')) {
      var qi = form.querySelector('input[name="q"]');
      var q = qi ? qi.value.trim() : '';
      if (q) {
        e.preventDefault();
        var loc2 = (CFG.locale || 'en');
        var page = loc2 === 'en' ? 'search.html' : loc2 + '/search.html';
        window.location.href = (CFG.base || '') + '/' + page + '?q=' + encodeURIComponent(q);
      } else {
        e.preventDefault();
      }
    }
  }, true);

  /* ---------------- observation des prix (variantes, contenu dynamique) ---------------- */
  var variantTimer = null;
  function setupObserver() {
    if (!document.body || !window.MutationObserver) return;
    var observer = new MutationObserver(function (mutations) {
      if (updating) return;
      var hit = false;
      for (var i = 0; i < mutations.length; i++) {
        var mut = mutations[i];
        var t = mut.target.nodeType === 1 ? mut.target : mut.target.parentElement;
        if (t && t.matches && (t.matches('[data-price], [data-price-min], [data-price-max], [data-price-compare], [data-price-compare-min], [data-price-compare-max], [data-price-money-saved]') || (t.closest && t.closest('[data-price], [data-price-min], [data-price-max], [data-price-compare], [data-price-compare-min], [data-price-compare-max], [data-price-money-saved]')))) { hit = true; break; }
        for (var j = 0; j < mut.addedNodes.length; j++) {
          var n = mut.addedNodes[j];
          if (n.nodeType === 1 && ((n.hasAttribute && n.hasAttribute('data-tax-cents')) || (n.querySelectorAll && n.querySelectorAll('[data-tax-cents]').length))) { hit = true; break; }
        }
        if (hit) break;
      }
      if (hit) {
        if (variantTimer) clearTimeout(variantTimer);
        variantTimer = setTimeout(function () { variantTimer = null; detectVariantPriceChanges(); processPrices(); }, 120);
      }
    });
    observer.observe(document.body, { childList: true, subtree: true, characterData: true });
    var pollCount = 0;
    var poller = setInterval(function () {
      pollCount++;
      if (pollCount > 20) { clearInterval(poller); return; }
      var late = $$('[data-recently-viewed-container] [data-tax-cents]:not([data-lab401-done]), [data-product-recommendations] [data-tax-cents]:not([data-lab401-done])');
      if (late.length) {
        clearInterval(poller);
        late.forEach(function (el) { el.setAttribute('data-lab401-done', '1'); });
        processPrices();
      }
    }, 1000);
  }

  /* ---------------- demarrage ---------------- */
  function init() {
    /* Version EN+FR+ES : retirer les options de langue IT/DE seulement.
       L'espagnol est garde (demande de l'utilisateur, 2026-11-18).
       (Les pays IT/ES/DE restent disponibles comme devises.) */
    ['it', 'de'].forEach(function (l) {
      $$('[data-disclosure-locale] [data-disclosure-option][data-value="' + l + '"], .header-lang-selector__list [data-disclosure-option][data-value="' + l + '"], [data-mobile-lang-option][data-value="' + l + '"], .ly-languages-switcher-link[data-language-code="' + l + '"]').forEach(function (el) {
        var li = el.closest ? el.closest('li') : null;
        if (li) li.remove(); else el.remove();
      });
    });
    state.taxPref = localStorage.getItem(LS_TAX_PREF) === 'true';
    $$('[data-tax-preference]').forEach(function (cb) {
      cb.addEventListener('change', function () { setTaxPref(cb.checked); syncCheckboxes(); processPrices(); });
    });
    populateCurrencyLists();
    injectMobileCurrencyCSS();
    updateCurrencyButtons('FR', COUNTRIES['FR']);
    updateLogoFlag(null);
    Promise.all([loadCadMap().catch(function () {}), loadUsdMap().catch(function () {})]).then(function () { processPrices(); });
    /* ?country=XX dans l'URL : force le pays (comme le vrai site) et le
       memorise, pour que les pages .ca / .us du clone fonctionnent. */
    var urlCountry = null;
    try {
      var m = /[?&]country=([A-Za-z]{2})/.exec(location.search);
      if (m) urlCountry = norm(m[1]);
    } catch (e) {}
    if (urlCountry && COUNTRIES[urlCountry]) {
      try { sessionStorage.setItem(STORE_COUNTRY, urlCountry); sessionStorage.setItem(STORE_CHANGED, '1'); } catch (e) {}
    } else {
      urlCountry = null;
    }
    var done = false;
    function resolve(code, source) {
      if (done) return;
      done = true;
      applyCountry(urlCountry || code || 'US', urlCountry ? 'url' : (source || 'fallback'));
    }
    if (window.Lab401Country && window.Lab401Country.ready) {
      window.Lab401Country.ready.then(function (loc) { resolve(loc && loc.code, loc && loc.source); });
      setTimeout(function () { resolve(null, 'timeout'); }, 9000);
    } else {
      var stored = null;
      try { stored = sessionStorage.getItem(STORE_COUNTRY); } catch (e) {}
      resolve(norm(stored), 'session');
    }
    setupObserver();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true });
  else init();
})();
