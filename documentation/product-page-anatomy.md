# Anatomie d'une page produit — clone Lab401

**Date :** 2026-11-19 ~03:40. **Objet :** savoir *exactement* comment est
faite une page produit, pour pouvoir **ajouter des produits** au clone
sans rien deviner. Toutes les affirmations ci-dessous ont été vérifiées
sur des pages réelles du vrai site (téléchargées le 2026-11-19 avec les
en-têtes navigateur complets) et comparées à leurs équivalents du clone.

**Pages étudiées :** `stealth-decoy-reader` (9 variantes, 1 option
« Version », 9 images — le cas le plus complexe), `pandwarf-kaiju-license`
(2 options : « License » + « Duration », 4 variantes, 1 image),
`portapack-h4m-pro` (1 variante, en solde, **indisponible**),
`flipper-zero` (3 variantes, 5 images). Thème Shopify : « Empire »
(`t/60`) — les classes ci-dessous sont celles de ce thème.

---

## 1. Vue d'ensemble : 11 sections

Une page produit = le gabarit du site (en-tête, pied de page) + **11
sections Shopify** (mêmes identifiants dans le clone que sur le vrai
site — la page PortaPack du clone fait 796 450 octets contre 798 367
pour la vraie, ~2 Ko d'écart seulement : le nettoyage) :

| # | Section (`shopify-section-…`) | Contenu |
|---|---|---|
| 1 | `sections--…__utility-bar` | Barre utilitaire (haut de page) |
| 2 | `group-header-group` | Groupe d'en-tête |
| 3 | `sections--…__header` | En-tête : logo, recherche, sélecteurs langue/devise, panier |
| 4 | `sections--…__announcement-bar` | Barre d'annonce |
| 5 | `template--…__main` | **La section produit** (voir § 2) |
| 6 | `template--…__17727435160127e000` | Section personnalisée **vide** (aucun contenu, sur le vrai site aussi) |
| 7 | `template--…__product_reviews` | Avis clients — **vide en statique** (voir § 7) |
| 8 | `template--…__recommendations` | « Vous aimerez aussi » — **vide en statique** (voir § 7) |
| 9 | `template--…__product_recommend_e` | Deuxième bloc de recommandations (même mécanisme) |
| 10 | `sections--…__footer` | Pied de page |
| 11 | `group-footer-group` | Groupe de pied de page |

Le **titre navigateur** (`<title>`) est « Nom du produit | … — Lab401 ».
Exemple : « PortaPack H4M Pro | Standalone 100 kHz-6 GHz SDR » (EN),
« PortaPack H4M Pro | SDR autonome 100 kHz-6 GHz » (FR).

---

## 2. La section produit (`__main`) : les blocs, dans l'ordre

### 2.1 Galerie d'images

- Conteneur `<div class="product-gallery-wrapper">`, variantes de mise
  en page `product-gallery--below` (miniatures sous l'image) ou
  `product-gallery--grid` (grille).
- **Lightbox PhotoSwipe** : la feuille `vendor.photoswipe.css` est
  injectée en ligne dans la page (zoom au clic, plein écran).
- Images : fichiers `cdn/shop/files/<Nom>---<vue>_<largeur>.png` (ou
  `.jpg`/`.webp`), plusieurs largeurs par image (352, 512, 800, 1024,
  1440…) via `srcset`. **Nombre d'images par produit : 1 à 17, moyenne
  2,3** (sur 182 produits EN). Aucun produit sans image.
- **Image de repli `<noscript>`** : chaque carte/image a une version
  `<noscript>` — quand on clone une image, il faut remplacer les deux
  (piège rencontré avec le PortaPack, voir § 9).

### 2.2 Titre, vendeur, prix

- **H1** : `<h1 class="product-title">Nom du produit</h1>`.
- **Vendeur** : nom du vendeur affiché sous le titre (ex. « OpenSource
  SDR », « Mayweather », « Lab401 »). 76 produits sur 182 ont pour
  vendeur « Lab401 » ; autres vendeurs fréquents : ICopyX (20), Hak5
  (18), Mayweather (9), RRG (8), BusPirate (6), Flipper Zero (6).
- **Bloc prix** : `<div class="price product__price">` avec :
  - `span.money[data-price-original]` — prix barré (compare-at) ;
  - `span.money[data-price-compare-min]` / `[data-price-compare-max]`
    — **fourchette de prix** quand les variantes ont des prix différents
    (ex. Stealth Decoy Reader : 125,00 $ – 685,00 $) ;
  - conteneurs cachés (`price__compare-at--hidden`) que le JS remplit
    quand une variante est choisie.
  - **Dans le clone**, chaque montant porte `data-tax-cents` (cents EUR
    hors taxes) pour la conversion de devise en direct par
    `lab401-static.js` (ex. PortaPack : `32500` et `42500`).
  - **19 produits sur 182 sont en solde** (compare-at > prix).

### 2.3 Sélecteur de variantes (options)

Deux mécanismes synchronisés par le JS du thème :

1. **Le `<select>` caché** (la source de vérité du formulaire) :
   ```html
   <select class="variant-selection__variants" name="id"
           style="display: none" data-variants>
     <option value="not-selected" disabled>Choose a variant</option>
     <option selected value="51997339779419">RP40 multiCLASS SE - $375.00</option>
     …
   </select>
   ```
   Chaque `<option>` = une variante, `value` = **l'ID numérique Shopify
   de la variante** (ex. `51997339779419`), libellé « Nom de la variante
   - $prix ». Le formulaire envoie cet ID à `/cart/add`.
2. **Les boutons radio visibles** (ce que voit l'utilisateur) :
   ```html
   <fieldset class="options-selection__radios">
     <legend class="options-selection__option-header">
       <span class="options-selection__option-name"
             data-variant-option-name="Version: <span>RP40 multiCLASS SE</span>">Version: <span>RP40 multiCLASS SE</span></span>
     </legend>
     <div class="options-selection__option-values" data-variant-option
          data-variant-option-index="0"
          data-variant-option-chosen-value="RP40 multiCLASS SE">
       <div class="options-selection__option-value options-selection__option-value--selected"
            data-variant-option-value-wrapper>
         <label class="options-selection__option-value-label">
           <input class="options-selection__option-value-input" type="radio" …>
   ```
   Un `<fieldset>` par option (nom de l'option dans le `<legend>`,
   valeur choisie dans le `<span>`), un bouton radio par valeur.

**Statistiques (182 produits EN) :** 155 produits à **1 variante**
(option unique « Title », valeur « Default Title » — aucun sélecteur
visible) ; 17 à 2 variantes ; 7 à 3 ; 1 à 4 ; **2 à 9 variantes**
(dont `stealth-decoy-reader`). Options réelles rencontrées : `Version`
(3 produits), `Format` (3), `Accessories` (2), `Pack` (2), `Size` (2),
`Color` (2), `License` + `Duration` (1 seul produit à 2 options :
`pandwarf-kaiju-license`, 4 variantes : License × Duration).
**Cas le plus complexe du site : 2 options, 9 variantes, 9 images.**

### 2.4 Quantité et boutons d'achat

- Sélecteur de quantité : `<input name="quantity" type="number" min="1"
  step="1" value="1" class="quantity-selector__input">`.
- **Formulaire** (identique dans le clone et sur le vrai site) :
  ```html
  <form method="post" action="/cart/add" id="product_form_<id-produit>"
        class="option-style-radio" data-product-form="">
    <input type="hidden" name="form_type" value="product">
    <input type="hidden" name="id" value="<id-variante>">
    <input type="hidden" name="product-id" value="<id-produit>">
    <input type="hidden" name="section-id" value="template--…__main">
  ```
  L'ID produit (ex. PortaPack : `9594964967771`) et l'ID variante
  (ex. `49527030743387`) sont des **IDs numériques Shopify** — ils
  doivent être repris tels quels quand on clone une page (ils figurent
  dans le `.js` du produit, voir § 8).
- **Bouton « Add to cart »** : `<button class="product-form--atc-button"
  type="submit" data-product-atc>` avec un `<span class="atc-…">`.
  **Produit indisponible : le bouton est `disabled` et porte la classe
  `disabled`** (le texte devient « Sold out » / « Épuisé »).
  En statique, le formulaire poste vers `/cart/add` (absent de GitHub
  Pages) : l'ajout au panier ne fonctionne pas sans Shopify — le panier
  du clone est une page statique (`cart.html`, 3 articles, sous-total
  359,17 €).

### 2.5 Bloc d'expédition (code personnalisé Lab401)

Juste sous le formulaire, un bloc propre à Lab401 (pas du thème
standard) :

```html
<div class="product-shipping-info" id="product-shipping-info">
  <div id="product-shipping-stock"><span class="green">⬤</span> In Stock (🇪🇺 EU, 🇺🇸 US)</div>
  <div id="product-shipping-date"><span class="green">⬤</span> Dispatched <b><span data-product-shipping-date></span></b></div>
  <div id="product-shipping-warning">⏰ Order within <i><span data-product-shipping-remaining></span></i> for <i>same day shipping</i></div>
</div>
```

- **La ligne de stock est un texte statique**, identique pour tous les
  produits : « In Stock (🇪🇺 EU, 🇺🇸 US) » en EN, « En stock (🇪🇺 EU,
  🇺🇸 US) » en FR. Elle **ne reflète pas la disponibilité réelle** : la
  page du PortaPack (indisponible, `available: false`) l'affiche quand
  même. Elle vient des étiquettes (tags) `EU Warehouse` (180 produits)
  et `US Warehouse` (174 produits) — presque tous les produits portent
  ces deux étiquettes.
- **Produit indisponible : tout le bloc est masqué** par une ligne
  ajoutée dans le script qui précède (voir § 2.6) — c'est le seul lien
  entre ce bloc et la disponibilité réelle.
- La date d'expédition et le compte à rebours « same day shipping »
  sont calculés **en direct par le JS** (`ShippingScheduler`, voir § 2.6).

### 2.6 Le script `ShippingScheduler`

Juste avant le bloc d'expédition, un `<script>` en ligne :

```js
document.addEventListener("DOMContentLoaded", function() {
  var scheduler = new ShippingScheduler("eu");
  var clientTime = new Date();
  var locale = "en";   // "fr" / "es" selon la locale
  var dateEl = document.querySelector("[data-product-shipping-date]");
  if (dateEl) { dateEl.textContent = scheduler.getShippingTime(clientTime, 'standard', locale); }
  var remainingTime = scheduler.timeRemaining(clientTime, 'standard', locale);
  var warningEl = document.getElementById("product-shipping-warning");
  if (warningEl) {
    if (remainingTime !== null) {
      warningEl.style.display = 'block';
      var remainEl = document.querySelector("[data-product-shipping-remaining]");
      if (remainEl) remainEl.textContent = remainingTime;
    } else { warningEl.style.display = 'none'; }
  }
  // UNIQUEMENT sur les pages de produits indisponibles :
  var infoEl = document.getElementById("product-shipping-info");
  if (infoEl) infoEl.style.display = 'none';
});
```

- `ShippingScheduler` est défini dans un fichier JS du thème (classe
  personnalisée Lab401, fuseau « eu »).
- **La ligne qui masque le bloc n'existe que sur les pages de produits
  indisponibles** (PortaPack EN/FR : présente ; Stealth Decoy Reader :
  absente). Quand on clone une page produit, cette ligne vient
  automatiquement avec la page — il ne faut pas l'ajouter ni la retirer
  à la main.

### 2.7 Description

- `<div class="product-description rte" data-product-description>` —
  c'est là que va le `body_html` du produit (voir § 8).
- **Aucun produit n'a de description vide** (208 à 34 523 caractères).
- Le HTML des descriptions est riche : paragraphes, listes, tableaux,
  `<strong>`, liens, et parfois des **vidéos YouTube intégrées**
  (`<figure><video lite-youtube videoid="…">`, ex. PortaPack :
  `n-khaJyY50Y`).
- **Disponibilité (8 produits indisponibles sur 182)** : le bouton est
  désactivé, le bloc d'expédition est masqué, mais le reste de la page
  (titre, prix, description, galerie) est identique.

---

## 3. Les données du produit : le fichier `.js`

Chaque produit a un fichier JSON Shopify à côté de sa page :
`products/<handle>.js` (ex. `products/portapack-h4m-pro.js`, 4 956
octets). C'est la **source de vérité** pour cloner un produit :

| Champ | Contenu |
|---|---|
| `id` | ID numérique Shopify du produit (ex. `9594964967771`) |
| `title` | Titre du produit |
| `handle` | Handle (slug) |
| `description` | Le `body_html` complet (HTML, avec `\u003c` pour `<`) |
| `vendor` | Vendeur |
| `type` | Type de produit (68 produits n'en ont pas ; sinon « Pen Testing » 29, « RFID Tags » 28, « Tools » 18, « RFID » 12, « Proxmark » 8, « RF » 7, « SDR » 6…) |
| `tags` | Étiquettes (ex. `EU Warehouse`, `US Warehouse`, `public`, `Hak5`, `13.56MHz (HF)`…) |
| `variants[]` | Par variante : `id`, `title`, `price` (**en cents**, ex. `32500`), `compare_at_price`, `sku`, `available` (booléen), `option1/2/3`, `featured_image` |
| `images[]` | Par image : `src` (URL CDN), `alt`, `width`, `height` |
| `options[]` | Par option : `name`, `values[]` |
| `price_min` / `price_max` | Fourchette de prix (cents) |
| `available` | Disponibilité globale du produit |

**La page HTML embarque aussi un objet `product` en JavaScript** (dans
un `<script>` de la page) avec les mêmes données (`tags`, `variants`,
`price`, `price_min`, `price_max`, `available`, `price_varies`).

**Pour ajouter un produit, il faut donc 2 fichiers par locale :**
la page `.html` (capturée du vrai site puis nettoyée) **et** le `.js`
(récupéré à `https://lab401.com/products/<handle>.js` — ou
`/fr/products/<handle>.js` pour la version localisée).

---

## 4. Ce qui est dynamique (absent du clone statique)

| Fonction | Mécanisme sur le vrai site | Dans le clone |
|---|---|---|
| **Recommandations** (« Vous aimerez aussi ») | Section vide dans le HTML + `<script type="application/json" data-section-type="static-product-recommendations">` (`limit: 5`, `productId`) ; le contenu est chargé par AJAX depuis `/recommendations/products` | **Section vide** (le conteneur `data-product-recommendations` ne contient que des espaces) |
| **Avis clients** | `<div data-product-reviews data-product-id="…" data-max-reviews="20">` vide ; chargé par JS (application d'avis Shopify) | **Section vide** (titre « Customer Reviews » + grille vide) |
| **Ajout au panier** | POST `/cart/add` (Shopify) | Formulaire présent mais sans backend ; panier = page statique |
| **Stock en direct** | La ligne « In Stock » est statique (voir § 2.5) ; seule la disponibilité de la variante (`available`) est réelle dans le `.js` | Identique (copie fidèle) |
| **Date d'expédition** | Calculée par `ShippingScheduler` en JS | Fonctionne (JS local) |

---

## 5. Pages de collection (listes de produits)

Une collection = une page avec un titre (`<h1>`), des contrôles
**Trier** (« Sort by ») et **Filtrer** (« Filter », 20 occurrences de
`filter` dans `sdr-1.html`), puis une **grille de cartes produit**.

### 5.1 La carte produit

Structure d'une carte (`productitem__container`) :

```
productitem__container
├── image (img + srcset 512/1024/1198 + <noscript> de repli)
├── productitem--info
│   ├── productitem--title-price-row (h2 + prix)
│   │   ├── h2 (titre, parfois 2 lignes : h2 + line2)
│   │   └── prix : span.money[data-price-…] + compare-at
│   ├── [line2] (2e ligne de titre, ex. « HackRF All-in-one »)
│   └── glance (descriptif court, 1-2 paragraphes)
└── badge « Save » / « Économisez » / « Ahorre » (si solde)
    ├── span.money[data-price-money-saved] — montant STATIQUE (ex. €100.00),
    │   SANS data-tax-cents → NON converti par lab401-static.js
    │   (écart connu : la pastille reste en € quand les prix sont en $ CAD)
    └── span caché « single » (toujours €0.00, comme sur le vrai site)
```

- **Attributs de prix d'une carte** : `item-price="32500"` et
  `item-compare_at_price="42500"` (cents EUR) sur le conteneur ;
  `data-tax-cents` sur les montants affichés.
- **Montant d'économie du badge = compare − prix** (ex. 42500 − 32500
  = 10000 cents = 100,00 €). Quand on clone une carte, le badge du
  modèle doit être corrigé (montant + visibilité : retirer
  `style="display: none;"` du conteneur du badge si le modèle n'était
  pas en solde).
- **Classes de solde** : `productitem--sale` et
  `price__current--on-sale` sur les cartes en solde.
- **Nom accessible** : un `<span class="visually-hidden">` porte le nom
  complet du produit (ex. FR « PortaPack H4M + HackRF All-in-one ») —
  à adapter aussi quand on clone une carte (piège rencontré).
- Les cartes ne contiennent **aucun ID produit/variante** : le
  quickshop (aperçu rapide) fonctionne par URL.

### 5.2 Pagination

- **36 produits par page.** Liens de pagination réécrits par la phase C
  en `collections/<handle>-page-N.html` (ex. `all-products-page-2.html`).
- Collections paginées dans le clone : `all-products` (p. 2–6),
  `all-products-no-flipper` (p. 2–5),
  `all-products-no-flipper-copy` (p. 2–5), `hardware` (p. 2–3),
  `pentesting` (p. 2), `pentesting-red-team-equipment` (p. 2).
- **La collection `all` n'a que sa page 1 dans le clone** (36/179) :
  pas de fichiers `all-page-2…` (voir `audit-exhaustivite-2026-11-19.md`).
- **Cas `rfid-badges` :** la page du vrai site affiche elle-même
  « No products » (0 carte) alors que son `products.json` liste 27
  produits — le clone est fidèle (page vide aussi). Ce n'est pas un
  défaut du clone.

### 5.3 Tri et filtres

- Le tri (`?sort_by=`) et les filtres (`?filter.*`) sont des fonctions
  Shopify : l'interface est affichée mais ne fonctionne pas en
  statique (listé dans les limites, `site-comprehension.md` § 6).

---

## 6. Les autres types de pages (repères rapides)

| Page | Structure |
|---|---|
| **Accueil** (`index.html`) | 10 sections produits (Flipper Zero 8 · Pentesting Hardware 7 · Newest Products 9 · RFID Tools 7 · SubGHz Tools 4 · SDR Tools 5 · Hardware Auditing Tools 8 · Hak5 Products 10 · Specialised RFID Badges 16 · Physical Audit Tools 10 — le clone affiche 15 dans la dernière, écart de capture préexistant), puis articles Academy, actualités du blog, pied de page. Chaque section affiche les N premiers produits de sa collection source. |
| **Panier** (`cart.html`) | Page statique (instantané du 2026-11-18, 3 articles, sous-total 359,17 €). Checkout et compte non reproductibles. |
| **Recherche** (`search.html`) | Index local `lab401-search-index.json` (552 produits : titre, handle, URL, prix cents EUR, image). Recherche insensible à la casse/accents, par mots. Recherche prédictive interceptée en local (max 6 résultats). |
| **Blog** | 4 blogs (academy, news, announcements, links), 140 articles + 169 pages de tags. Article FR sans fichier local : `/fr/blogs/news/construire-le-digilab-en-coulisses` (existe sous handle anglais). |
| **Pages** (`pages/`) | 26 pages (aide, politiques, à propos…) avec noms localisés en FR/ES. |

---

## 7. Comment ajouter un produit (recette)

C'est la procédure à suivre quand Pierre-Luc donnera un nouveau produit
à ajouter (elle reprend la méthode qui a servi pour le PortaPack et
`rfid-field-detector` le 2026-11-18) :

1. **Récupérer les données du vrai site** (en-têtes navigateur complets,
   `Accept-Language` assorti à la locale, `--compressed -L`) :
   - la page HTML : `https://lab401.com/products/<handle>` (+ `/fr/…`,
     `/es/…`) ;
   - le JSON : `https://lab401.com/products/<handle>.js` (mêmes locales) ;
   - les prix CAD/USD exacts (page d'accueil marché US, ou cookie
     `country_code`, ou tables existantes).
2. **Nettoyer la page** comme les autres (phase B/C de `clean-lab401.py`,
   puis `fix-locale-links.py`, puis `inject-localization.py` avec la
   version `?v=` courante).
3. **Vérifier les points suivants sur la page** (liste de contrôle) :
   - titre navigateur, H1, vendeur, prix + compare-at (`data-tax-cents`) ;
   - variantes : le `<select>` caché (IDs Shopify) **et** les radios
     visibles (fieldset par option) ;
   - bouton « Add to cart » désactivé si indisponible ;
   - bloc d'expédition : présent, ou **masqué par le script** si le
     produit est indisponible (la ligne `infoEl.style.display = 'none'`
     doit être là) ;
   - description complète (y compris les vidéos `lite-youtube`) ;
   - images : toutes les largeurs + la version `<noscript>`.
4. **Ajouter la carte** dans chaque collection qui doit contenir le
   produit (voir `categories.md` + `audit-exhaustivite-2026-11-19.md`
   pour la liste des collections concernées) en clonant une carte
   mono-variante de la même page, puis en adaptant : handle, vendeur,
   titres (h2 + line2), glance, image (+ noscript), prix
   (`item-price`, `item-compare_at_price`, `data-tax-cents`), badge
   « Save » (montant = compare − prix, conteneur visible), nom
   accessible (visually-hidden), classes de solde.
5. **Mettre à jour** : l'index de recherche (`lab401-search-index.json`,
   552 → N), les tables CAD/USD (`lab401-cad-prices.json`,
   `lab401-usd-prices.json`), les sections d'accueil concernées (remettre
   le nombre de cartes au nombre du vrai site), et les pages de
   pagination si la collection dépasse 36 produits.
6. **Pousser groupé** (sur son go) et **vérifier en vrai navigateur**
   (page produit + une collection + l'accueil, avec `?country=ca`).

---

## 8. Pièges connus (ne pas les réapprendre)

- **Faux 404 anti-bot :** `curl` seul donne des 404 pour des produits
  qui existent. Toujours les en-têtes navigateur complets.
- **Le sitemap (181) et `products.json` (182) ne sont pas exhaustifs :**
  voir `audit-exhaustivite-2026-11-19.md` — le PortaPack n'est pas dans
  le sitemap, `rfid-field-detector` n'est ni dans le sitemap ni dans
  `products.json` (page live quand même).
- **Badge « Save » statique** (montant en €, non converti) et **image
  `<noscript>`** à adapter quand on clone une carte.
- **Nom accessible** (visually-hidden) qui garde le nom du modèle.
- **La ligne de stock est statique** (« In Stock » même pour un produit
  indisponible) — c'est le script qui masque le bloc, pas le texte qui
  change.
- **Handles traduits FR/ES :** le handle anglais redirige (302) vers le
  traduit (`bus-pirate-5-auxiliary-cable` → `bus-pirate-5-cable-auxiliaire`,
  `cable-auxiliar-bus-pirate-5` en ES…) — les deux pages existent dans le
  clone.
- **Image générique de l'index :** `Hamster-Transparent_w600.gif` sert
  d'illustration à 223 des 552 entrées de l'index (40 %) — c'est l'image
  fournie par `products.json`, pas une erreur de construction.
