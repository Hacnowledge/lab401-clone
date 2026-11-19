/* Lab401 — Panier local (statique, localStorage).
 * Le site est statique (GitHub Pages) : /cart/add et /cart/change n'existent pas.
 * Ce script remplace le panier Shopify par un panier local :
 *  - ajout depuis les pages produit (formulaire) et depuis la vue liste (clx)
 *  - quantites + / -, suppression (X), sous-total, compteur de l'en-tete
 *  - persistance dans localStorage (panier conserve entre les visites)
 * Les prix sont en cents EUR (data-tax-cents) : lab401-static.js les convertit
 * dans la devise du visiteur comme pour le reste du site.
 */
(function () {
  'use strict';
  var BASE = (window.LAB401_STATIC && window.LAB401_STATIC.base) || '/lab401-clone';
  var LOCALE = (window.LAB401_STATIC && window.LAB401_STATIC.locale) || 'en';
  var KEY = 'lab401-cart-v1';
  var SEED = [
    { id: 46760484700507, qty: 1 }, // Lab401 Pentest Sticker Pack (10 Stickers)
    { id: 47111127204187, qty: 1 }, // O.MG Cable
    { id: 42927883452646, qty: 1 }  // Flipper Zero (Basic)
  ];
  var data = null;
  var dataPromise = null;

  /* ---------- stockage ---------- */
  function load() {
    try {
      var raw = localStorage.getItem(KEY);
      if (raw) {
        var c = JSON.parse(raw);
        if (c && Array.isArray(c.items)) return c;
      }
    } catch (e) {}
    var seed = { items: SEED.map(function (it) { return { id: it.id, qty: it.qty }; }) };
    save(seed);
    return seed;
  }
  function save(cart) {
    try { localStorage.setItem(KEY, JSON.stringify(cart)); } catch (e) {}
  }
  function totalQty(cart) {
    var n = 0;
    cart.items.forEach(function (it) { n += it.qty; });
    return n;
  }
  function findItem(cart, vid) {
    for (var i = 0; i < cart.items.length; i++) {
      if (String(cart.items[i].id) === String(vid)) return cart.items[i];
    }
    return null;
  }

  /* ---------- compteur de l'en-tete ---------- */
  function updateCount() {
    var n = totalQty(load());
    var els = document.querySelectorAll('[data-header-cart-count]');
    for (var i = 0; i < els.length; i++) {
      els[i].setAttribute('data-header-cart-count', String(n));
      els[i].textContent = String(n);
      if (n > 0) els[i].classList.add('visible');
      else els[i].classList.remove('visible');
    }
  }

  /* ---------- donnees produits (paresseux) ---------- */
  function getData() {
    if (!dataPromise) {
      dataPromise = fetch(BASE + '/lab401-cart-data.json')
        .then(function (r) { return r.json(); })
        .then(function (j) { data = j; return j; })
        .catch(function () { return null; });
    }
    return dataPromise;
  }

  /* ---------- operations ---------- */
  function addVariant(vid, qty) {
    qty = Math.max(1, qty || 1);
    var cart = load();
    var it = findItem(cart, vid);
    if (it) it.qty += qty;
    else cart.items.push({ id: Number(vid), qty: qty });
    save(cart);
    updateCount();
    return cart;
  }
  function setQty(vid, qty) {
    var cart = load();
    var it = findItem(cart, vid);
    if (!it) return cart;
    if (qty <= 0) cart.items = cart.items.filter(function (x) { return String(x.id) !== String(vid); });
    else it.qty = qty;
    save(cart);
    updateCount();
    return cart;
  }
  function removeVariant(vid) { return setQty(vid, 0); }

  /* ---------- toast de confirmation ---------- */
  var toastEl = null;
  function cartUrl() {
    var a = document.querySelector('.site-header-cart--button[href]');
    if (a) return a.getAttribute('href');
    return (LOCALE === 'en' ? '' : '../') + 'cart.html';
  }
  function toast() {
    if (!toastEl) {
      toastEl = document.createElement('div');
      toastEl.setAttribute('role', 'status');
      toastEl.style.cssText = 'position:fixed;left:50%;bottom:24px;transform:translateX(-50%);z-index:9999;' +
        'background:#111;color:#fff;padding:12px 16px;border-radius:8px;font-size:15px;line-height:1.4;' +
        'box-shadow:0 4px 24px rgba(0,0,0,.35);display:flex;gap:16px;align-items:center;max-width:92vw;';
      toastEl.innerHTML = '<span></span><a href="#" style="color:#fff;font-weight:700;white-space:nowrap;"></a>';
      document.body.appendChild(toastEl);
    }
    var msg = LOCALE === 'fr' ? 'Ajouté au panier' : (LOCALE === 'es' ? 'Añadido al carrito' : 'Added to cart');
    var view = LOCALE === 'fr' ? 'Voir le panier' : (LOCALE === 'es' ? 'Ver el carrito' : 'View cart');
    toastEl.querySelector('span').textContent = msg;
    var a = toastEl.querySelector('a');
    a.textContent = view;
    a.setAttribute('href', cartUrl());
    toastEl.style.display = 'flex';
    clearTimeout(toastEl._t);
    toastEl._t = setTimeout(function () { toastEl.style.display = 'none'; }, 3500);
  }

  /* ---------- interception : ajout depuis une page produit ---------- */
  document.addEventListener('submit', function (e) {
    var f = e.target;
    if (!f || f.tagName !== 'FORM') return;
    var action = f.getAttribute('action') || '';
    if (action.indexOf('/cart/add') === -1) return;
    var idEl = f.querySelector('select[name="id"], input[name="id"]');
    if (!idEl || !idEl.value || idEl.value === 'not-selected') return;
    e.preventDefault();
    e.stopPropagation();
    var qEl = f.querySelector('input[name="quantity"]');
    var qty = qEl ? (parseInt(qEl.value, 10) || 1) : 1;
    addVariant(idEl.value, qty);
    toast();
    if (isCartPage()) renderCart();
  }, true);

  /* ---------- interception : fetch /cart/add (quickshop, theme) ---------- */
  if (window.fetch) {
    var origFetch = window.fetch;
    window.fetch = function (url, opts) {
      var u = '';
      try { u = String((url && url.url) || url || ''); } catch (e) {}
      var method = (opts && opts.method) ? String(opts.method).toUpperCase() : 'GET';
      if (method === 'POST' && u.indexOf('/cart/add') !== -1) {
        var vid = null, qty = 1;
        try {
          var body = opts && opts.body;
          if (body instanceof FormData) {
            vid = body.get('id');
            qty = parseInt(body.get('quantity') || '1', 10) || 1;
          } else if (typeof body === 'string') {
            if (body.charAt(0) === '{') {
              var j = JSON.parse(body);
              vid = j.id; qty = parseInt(j.quantity || '1', 10) || 1;
            } else {
              var p = new URLSearchParams(body);
              vid = p.get('id');
              qty = parseInt(p.get('quantity') || '1', 10) || 1;
            }
          }
        } catch (e) {}
        if (vid && String(vid) !== 'not-selected') {
          addVariant(vid, qty);
          toast();
          if (isCartPage()) renderCart();
          return Promise.resolve(new Response(JSON.stringify({ ok: true }), {
            status: 200, headers: { 'Content-Type': 'application/json' }
          }));
        }
      }
      return origFetch.apply(this, arguments);
    };
  }

  /* ---------- vue liste (clx) : + Add / + / - ---------- */
  function clxQty(vid) {
    var it = findItem(load(), vid);
    return it ? it.qty : 0;
  }
  function syncClxRow(row) {
    if (!row) return;
    var vid = row.getAttribute('data-clx-variant');
    if (!vid) return;
    var q = clxQty(vid);
    var val = row.querySelector('.clx-qty-val');
    var ctrls = row.querySelector('.clx-qty-controls');
    var btn = row.querySelector('.clx-add-btn');
    if (val) val.textContent = String(q);
    if (ctrls) ctrls.style.display = q > 0 ? '' : 'none';
    if (btn) btn.style.display = q > 0 ? 'none' : '';
  }
  function syncAllClx() {
    var rows = document.querySelectorAll('tr.clx-row[data-clx-variant]');
    for (var i = 0; i < rows.length; i++) syncClxRow(rows[i]);
  }
  document.addEventListener('click', function (e) {
    var t = e.target;
    if (!t || !t.closest) return;
    var addBtn = t.closest('[data-clx-add]');
    if (addBtn) {
      e.preventDefault(); e.stopPropagation();
      addVariant(addBtn.getAttribute('data-clx-add'), 1);
      syncClxRow(addBtn.closest('tr'));
      toast();
      return;
    }
    var inc = t.closest('[data-clx-inc]');
    if (inc) {
      e.preventDefault(); e.stopPropagation();
      var vid = inc.getAttribute('data-clx-inc');
      addVariant(vid, 1);
      syncClxRow(inc.closest('tr'));
      return;
    }
    var dec = t.closest('[data-clx-dec]');
    if (dec) {
      e.preventDefault(); e.stopPropagation();
      var vid2 = dec.getAttribute('data-clx-dec');
      var cur = clxQty(vid2);
      setQty(vid2, cur - 1);
      syncClxRow(dec.closest('tr'));
      return;
    }
  }, true);

  /* ---------- page panier ---------- */
  function isCartPage() {
    return !!document.querySelector('[data-cart-item-list]');
  }
  function relPrefix() {
    // la page panier est a la racine (EN) ou dans fr/ / es/
    var p = location.pathname || '';
    if (/(^|\/)(fr|es)\/cart\.html/.test(p)) return '../';
    return '';
  }
  function eur(cents) {
    return '€' + (cents / 100).toFixed(2);
  }
  function esc(s) {
    return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  function optionsHtml(options) {
    if (!options || !options.length) return '';
    var out = '<div class="cart-item-product-options">';
    options.forEach(function (o) {
      out += '<dl class="cart-item-product-options__option">' +
        '<dt class="cart-item-product-options__option-key">' + esc(o[0]) + ':</dt>' +
        '<dd class="cart-item-product-options__option-value">' + esc(o[1]) + '</dd></dl>';
    });
    return out + '</div>';
  }
  function itemHtml(it, info, line, rel) {
    var vid = it.id;
    var price = info.price || 0;
    var compare = info.compare;
    var lineTotal = price * it.qty;
    var opts = info[LOCALE] ? info[LOCALE].options : [];
    var title = info[LOCALE] ? info[LOCALE].title : '';
    var handle = info[LOCALE] ? info[LOCALE].handle : '';
    var url = rel + 'products/' + handle + '.html';
    var alt = title + (opts.length ? ' - ' + opts.map(function (o) { return o[1]; }).join(' / ') : '');
    var thumb = info.thumb || {};
    var imgSrc = thumb['120'] ? rel + thumb['120'] : '';
    var srcset = '';
    var parts = [];
    [['120', '1x'], ['240', '2x'], ['360', '3x'], ['480', '4x']].forEach(function (pair) {
      if (thumb[pair[0]]) parts.push(rel + thumb[pair[0]] + ' ' + pair[1]);
    });
    if (parts.length) srcset = ' srcset="' + parts.join(', ') + '"';
    var priceHtml = '';
    if (compare && compare > price) {
      priceHtml += '<span class="visually-hidden">Original price</span>' +
        '<s class="cart-item--sale-price money" data-tax-cents="' + compare + '">' + eur(compare) + '</s>';
    }
    priceHtml += '<span class="visually-hidden">Current price</span>' +
      '<span class="money ' + (compare && compare > price ? 'cart-item--discount-price' : '') + '" data-tax-cents="' + price + '">' + eur(price) + '</span>';
    var imgHtml = imgSrc
      ? '<figure class="cart-item--image-wrapper"><a href="' + url + '">' +
        '<img src="' + imgSrc + '" alt="' + esc(alt) + '" data-rimg' + srcset + '></a></figure>'
      : '';
    return '<li class="cart-item" data-cartitem data-cartitem-id="' + vid + '" data-cartitem-key="' + vid + ':local" data-cartitem-price="' + lineTotal + '">' +
      imgHtml +
      '<div class="cart-item--inner"><div class="cart-item--content">' +
      '<h2 class="cart-item--content-title"><a href="' + url + '">' + esc(title) + '</a></h2>' +
      optionsHtml(opts) +
      '<div class="cart-item--content-price"><span class="cart-item--price-title">Price</span>' + priceHtml + '</div>' +
      '</div><div class="cart-item__info">' +
      '<div class="cart-item__quantity"><quantity-selector class="quantity-selector" data-quantity-selector>' +
      '<label class="quantity-selector__label" for="updates_' + vid + ':local">Quantity</label>' +
      '<div class="quantity-selector__wrapper">' +
      '<div class="quantity-selector__button-wrapper quantity-selector__button-wrapper--minus' + (it.qty <= 1 ? ' quantity-selector__button-wrapper--disabled' : '') + '" data-button-wrapper data-button-wrapper-minus>' +
      '<button class="quantity-selector__button quantity-selector__button--minus" type="button" name="minus" aria-label="Decrease quantity by 1" data-quantity-minus data-vid="' + vid + '">' +
      '<svg width="10" height="2" viewBox="0 0 10 2" fill="none"><rect width="10" height="2" fill="currentColor"/></svg></button></div>' +
      '<input class="quantity-selector__input" id="updates_' + vid + ':local" aria-label="Quantity" name="updates[]" type="number" min="1" step="1" value="' + it.qty + '" data-quantity-input data-increment-value="1" data-vid="' + vid + '">' +
      '<div class="quantity-selector__button-wrapper--plus quantity-selector__button-wrapper" data-button-wrapper data-button-wrapper-plus>' +
      '<button class="quantity-selector__button quantity-selector__button--plus" type="button" name="plus" aria-label="Increase quantity by 1" data-quantity-plus data-vid="' + vid + '">' +
      '<svg class="icon-plus" aria-hidden="true" focusable="false" role="presentation" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 6L4 10H6V6H10V4H6V0H4L4 4H0V6H4Z" fill="currentColor"/></svg></button></div>' +
      '</div></quantity-selector></div>' +
      '<div class="cart-item__total"><span class="visually-hidden">Line total</span>' +
      '<div class="money" aria-live="polite" data-cartitem-total data-default-price="' + price + '" data-tax-cents="' + lineTotal + '">' + eur(lineTotal) + '</div></div>' +
      '<div class="cart-item__remove"><a class="cart-item__remove-link" href="/cart/change?line=' + line + '&amp;quantity=0" aria-label="remove ' + esc(title) + '" data-cartitem-remove data-no-instant data-vid="' + vid + '">' +
      '<svg class="icon-remove" aria-hidden="true" focusable="false" role="presentation" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10"><path fill="currentColor" d="M6.08785659,5 L9.77469752,1.31315906 L8.68684094,0.225302476 L5,3.91214341 L1.31315906,0.225302476 L0.225302476,1.31315906 L3.91214341,5 L0.225302476,8.68684094 L1.31315906,9.77469752 L5,6.08785659 L8.68684094,9.77469752 L9.77469752,8.68684094 L6.08785659,5 Z"/></svg></a></div>' +
      '</div></div></li>';
  }
  function emptyHtml(rel) {
    var msg = LOCALE === 'fr' ? 'Votre panier est vide.' : (LOCALE === 'es' ? 'Tu carrito está vacío.' : 'Your cart is empty.');
    var shop = LOCALE === 'fr' ? 'Continuer vos achats' : (LOCALE === 'es' ? 'Seguir comprando' : 'Continue shopping');
    return '<li class="cart-item cart-item--empty" style="list-style:none;padding:32px 0;text-align:center;">' +
      '<p style="font-size:18px;margin:0 0 16px;">' + msg + '</p>' +
      '<a class="button-primary" href="' + rel + 'index.html">' + shop + '</a></li>';
  }
  function setSubtotal(cents) {
    var el = document.querySelector('[data-cart-total]');
    if (!el) return;
    // remplacer le noeud pour que l'observateur de conversion le reprenne
    var repl = el.cloneNode(false);
    repl.setAttribute('data-tax-cents', String(cents));
    repl.textContent = eur(cents);
    el.parentNode.replaceChild(repl, el);
  }
  function setFooterVisible(show) {
    var right = document.querySelector('.cart-title-right');
    if (right) right.style.display = show ? '' : 'none';
  }
  function renderCart() {
    var list = document.querySelector('[data-cart-item-list]');
    if (!list) return;
    var cart = load();
    var rel = relPrefix();
    getData().then(function (d) {
      if (!d) return; // donnees indisponibles : garder le contenu statique
      var subtotal = 0;
      var html = '';
      if (!cart.items.length) {
        html = emptyHtml(rel);
        setFooterVisible(false);
      } else {
        setFooterVisible(true);
        cart.items.forEach(function (it, i) {
          var info = d[String(it.id)];
          if (!info) return; // variante inconnue : ignoree
          subtotal += (info.price || 0) * it.qty;
          html += itemHtml(it, info, i + 1, rel);
        });
      }
      list.innerHTML = html;
      setSubtotal(subtotal);
      updateCount();
    });
  }
  // actions dans la page panier (delegation, phase de capture)
  document.addEventListener('click', function (e) {
    var t = e.target;
    if (!t || !t.closest || !isCartPage()) return;
    var minus = t.closest('[data-quantity-minus]');
    if (minus) {
      e.preventDefault(); e.stopPropagation();
      var vid = minus.getAttribute('data-vid');
      if (vid) { setQty(vid, clxQty(vid) - 1); renderCart(); }
      return;
    }
    var plus = t.closest('[data-quantity-plus]');
    if (plus) {
      e.preventDefault(); e.stopPropagation();
      var vid2 = plus.getAttribute('data-vid');
      if (vid2) { addVariant(vid2, 1); renderCart(); }
      return;
    }
    var rem = t.closest('[data-cartitem-remove]');
    if (rem) {
      e.preventDefault(); e.stopPropagation();
      var vid3 = rem.getAttribute('data-vid');
      if (vid3) { removeVariant(vid3); renderCart(); }
      return;
    }
  }, true);
  document.addEventListener('change', function (e) {
    var t = e.target;
    if (!t || !isCartPage()) return;
    if (t.matches && t.matches('input[data-quantity-input][data-vid]')) {
      var vid = t.getAttribute('data-vid');
      var q = parseInt(t.value, 10);
      if (!isNaN(q) && vid) { setQty(vid, Math.max(1, q)); renderCart(); }
    }
  }, true);

  /* ---------- init ---------- */
  updateCount();
  syncAllClx();
  if (isCartPage()) renderCart();

  /* API de depannage (console du navigateur) */
  window.Lab401Cart = {
    load: load, save: save, addVariant: addVariant, setQty: setQty,
    removeVariant: removeVariant, updateCount: updateCount,
    renderCart: renderCart, syncAllClx: syncAllClx, getData: getData
  };
})();
