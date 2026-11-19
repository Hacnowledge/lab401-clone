# Compréhension du site — clone Lab401 (lab401.com)

**Date :** 2026-11-19 ~02:45, mise à jour ~03:45 (audit d'exhaustivité
+ anatomie des pages produits). **Objet :** comprendre le clone statique de
lab401.com pour continuer son développement. **Clone :**
`~/workspace/lab401-clone/site-clean/`, déployé sur
https://hacnowledge.github.io/lab401-clone/ (dépôt
`Hacnowledge/lab401-clone`, branche `main`).

## 1. Ce qu'est le site

Lab401 (https://lab401.com) est une boutique Shopify (thème « Empire »,
`t/60`) qui vend du matériel de pentest et de recherche RFID / SDR / radio :
Flipper Zero, Proxmark, HackRF, PortaPack, Hak5, badges RFID, outils
d'audit physique, etc. Le clone est une **copie statique fidèle** :
mêmes pages, mêmes textes, mêmes images, mêmes prix — sans le backend
Shopify (voir § 6, limites).

## 2. Structure du site

### Locales

Trois locales déployées : **EN** (racine), **FR** (`fr/`), **ES** (`es/`).
Le HTML contient aussi des options `de` / `it`, **retirées par le JS** ;
ne pas les activer sans demande de l'utilisateur.

| Contenu | EN | FR | ES |
|---|---|---|---|
| Pages produit (HTML) | 183 | 186 | 183 |
| Collections (pages HTML, pagination comprise) | 106 fichiers | 106 | 106 |
| Pages (`pages/`) | 26 | 26 (noms localisés) | 26 (noms localisés) |
| Blogs (academy, news, announcements, links) | 4 index + 140 articles + 169 pages de tags | idem (traduits) | idem (traduits) |
| Accueil | `index.html` | `fr/index.html` | `es/index.html` |
| Panier (statique, ajouté 2026-11-18) | `cart.html` | `fr/cart.html` | `es/cart.html` |
| Recherche | `search.html` | `fr/search.html` | `es/search.html` |

**Différence FR (186 vs 183) :** 3 produits existent en FR sous des
handles **traduits** en plus des handles anglais :
`bus-pirate-5-cable-auxiliaire`, `digilab-pour-flipperzero`,
`kit-de-modules-digilab` (voir `products.md`).

### En-tête (bannière)

De gauche à droite : logo « Lab401 » (lien vers l'accueil), barre de
recherche, sélecteur de langue (EN/FR/ES), sélecteur de devise
(« $ CAD », 71 pays), panier. Sur mobile : menu hamburger, mêmes
sélecteurs en bas du menu.

**Drapeaux :** depuis la v12 (déployée et vérifiée 2026-11-19 03:24),
**aucun drapeau à côté du logo** ; les sélecteurs de langue et de devise
affichent de nouveau leurs drapeaux (voir § 7, saga des drapeaux).
**Le 2026-11-19 ~03:28, l'utilisateur confirme que les drapeaux sont
corrects en ce moment : ne plus rien y toucher.**

### Pied de page

Liens (boutique, aide, politiques), newsletter, réseaux, icônes de
paiement. **En suspens :** 4 icônes de paiement s'affichent en rectangles
blancs (Bancontact, BLIK, Cartes Bancaires, MobilePay) — cause non
vérifiée.

### Accueil

10 sections produits (vrai site, ordre vérifié 2026-11-19) : Flipper Zero
(8) · Pentesting Hardware (7) · Newest Products (9) · RFID Tools (7) ·
SubGHz Tools (4) · SDR Tools (5) · Hardware Auditing Tools (8) ·
Hak5 Products (10) · Specialised RFID Badges (16) · Physical Audit Tools
(10). Puis articles Academy, actualités du blog, pied de page. **Dans le
clone (v13, 2026-11-19) : le PortaPack H4M Pro a été ajouté aux sections
SubGHz Tools (2/4) et SDR Tools (3/5)** — vérifié en navigateur. Voir
`categories.md` et `portapack-placement-research.md`.

## 3. Comment le clone est construit

Dossier de travail : `~/workspace/lab401-clone/`. `site-raw/` est le miroir
brut (intact, jamais modifié) ; `site-clean/` est la copie nettoyée et
déployée.

### Téléchargement initial (2026-11-17)

`wget --page-requisites` sur les 441 URLs du sitemap EN (100 %), puis
compléments par curl (403 transitoires, 46 produits en HTML seul,
pagination, tags, flux Atom). Conversion des liens absolus → relatifs
par `convert-links.py` (~175 000 liens).

### Scripts principaux

| Script | Rôle |
|---|---|
| `clean-lab401.py` | Nettoyage de la copie : renommage des fichiers avec `?` dans le nom (2 106 fichiers), réécriture des liens (phase C), téléchargement des actifs CDN manquants (phases B / B2). **Attention :** ne jamais le lancer avec `--help` ni sans argument pour l'inspecter — un lancement nu démarre le nettoyage complet ; lire le code avec `grep`/`sed`. La phase C **retire les `?v=`** des URLs d'actifs (réappliquer la version courante ensuite) et **laisse absolus les chemins commençant par `fr/de/es/it`** (corriger ensuite avec `fix-locale-links.py`). |
| `build-static-js.py` | Génère `site-clean/lab401-static.js` : toute la localisation statique (devises, TVA UE, `?country=XX`, recherche, sélecteurs). Dépend de `/tmp/countries.json` et `/tmp/rates_eur.json` (**éphémères** : perdus à chaque redémarrage de la VM — restaurer `countries.json` depuis le dossier de travail et re-télécharger les taux). |
| `inject-localization.py` | Injecte dans chaque page : `window.LAB401_STATIC={base:"/lab401-clone",locale:"…"}`, le `<script src="…/lab401-static.js?v=N">` et les squelettes des sélecteurs. **Idempotent** (ne réinjecte pas si déjà présent) et **la version `?v=N` y est codée en dur** (ligne ~140) — pour changer de version, mettre à jour le script **et** faire une passe `sed` sur les HTML déjà injectés. |
| `fix-locale-links.py` | Convertit les liens absolus de locale (`/fr/…`, `/es/…`) en chemins relatifs après une phase C (14 601 liens corrigés le 2026-11-18). Idempotent. |
| `upload_blobs.py` | Téléverse les fichiers modifiés de `site-clean/` vers GitHub (API Git, 6 workers, checkpoint `upload_blobs_fix.json`, reprend là où il s'était arrêté). **Ne jamais modifier `site-clean/` pendant un envoi.** |
| `push_fr_batched.py` | Crée les commits par lots de ~450 fichiers (un arbre Git unique > ~1 000 entrées est refusé) et met à jour `main`. Le **message de commit y est codé en dur** — le modifier avant chaque push. Les erreurs 502/422/504 transitoires avec réessais sont normales. |
| `fetch-product-json.py`, `fetch-cad-prices.py`, `fetch-usd-prices.py` | Récupèrent `products.json` par locale et les prix exacts CAD/USD du vrai site (voir § 4). |

### Règle de déploiement

Un envoi = `upload_blobs.py` puis `push_fr_batched.py`, puis attendre
**3 à 6 minutes** (build GitHub Pages) avant de tester sur l'adresse
publique. Ne jamais annoncer « en ligne » avant la vérification live
complète.

## 4. Devises et prix

- **Prix de base : EUR**, `data-tax-cents` = prix en cents **hors taxes**.
- **Les prix CAD/USD ne suivent pas un taux unique** (tarification par
  marché) : tables exactes `lab401-cad-prices.json` (180 produits) et
  `lab401-usd-prices.json` (179 produits), appariées par handle et par
  prix EUR (`{handle: {"price": {"<EUR>": <montant local>}, "compare": {...}}}`).
  Exemple Flipper Zero : EUR 149,17/186,67/236,00 → CAD 247/302/439 →
  USD 169/206,50/300,50.
- **Repli JS** (produit absent des tables) : CAD taux 1,66 arrondi au
  dollar, USD taux du marché arrondi. Taux (open.er-api.com, 2026-11-19) :
  EUR→CAD 1,571655, EUR→USD 1,097391, EUR→GBP 0,833994.
- **Pays : 71**, sélection par `?country=XX` dans l'URL (prioritaire),
  puis session, puis géolocalisation IP (`geoip.lab401.workers.dev`),
  repli `US`. Le `MutationObserver` de `lab401-static.js` (déclenchement
  débouncé 120 ms) convertit tout prix rendu dynamiquement avec
  `data-tax-cents`.
- **TVA UE :** appliquée pour les pays de l'UE (table `EU_VAT` dans le JS),
  avec interrupteur « prix TTC/HT ».

## 5. Recherche

- **Index local** `lab401-search-index.json` : **552 produits**
  (183 EN, 186 FR, 183 ES — titre, handle, URL, prix en cents EUR,
  image). Chargé à l'exécution par `search.html` (EN/FR/ES).
- **Recherche par formulaire :** le formulaire du thème
  (`action="/search"`, backend Shopify absent) est intercepté par
  `lab401-static.js` et redirige vers `search.html?q=…`. Recherche
  insensible à la casse et aux accents, par mots (tous les mots doivent
  être présents dans le titre ou le handle).
- **Recherche prédictive (suggestions en direct) :** le thème fait
  `fetch(…/search/suggest…)` ; en statique cela répond 404 et les
  squelettes de chargement restaient figés. Depuis la v8,
  `lab401-static.js` enveloppe `window.fetch` et répond localement
  depuis l'index (max 6 résultats, prix convertis par l'observateur).
  Vérifié : « flipper » = 6 résultats lisibles.

## 6. Limites connues (normal pour un clone statique Shopify)

- **Checkout et compte client : non reproductibles.** Le paiement est une
  page Shopify hébergée (session) ; le compte redirige vers
  `account.lab401.com`. Aucun compte créé, aucune connexion faite.
- **Panier :** page statique avec 3 articles (instantané du 2026-11-18,
  sous-total 359,17 €) ; quantités, suppression et passage en caisse ne
  fonctionnent pas sans Shopify.
- **Formulaires** (contact, newsletter, avis) : affichés, sans soumission.
- **Fonctions dynamiques absentes :** stocks en direct, recommandations
  (« Vous aimerez aussi » : section vide, contenu chargé par AJAX depuis
  `/recommendations/products`), avis vérifiés (grille vide, chargée par
  JS), filtres de collection (`?filter.*`, `?sort_by=`),
  bannières de consentement / portefeuilles.
- **Pagination des collections : 36 produits par page**
  (`collections/<handle>-page-N.html`). La collection `all` n'a que sa
  page 1 dans le clone (36/179) ; `all-products` EN a une page 5 vide
  (capture ratée, 34 produits non listés) alors que FR/ES sont complètes
  (181 cartes). Voir `audit-exhaustivite-2026-11-19.md`.
- **Écarts préexistants :** `collections/all-products-page-5.html` n'a pas
  de `</body>` (seule page sans `lab401-static.js`) ; **3 produits
  « orphelins »** (`hak5-network-mitm-lan-turtle`,
  `proxmark-3-rdv4-flash-support`, `usb-bluetooth-adaptor-hc-06`) : leurs
  pages répondent **200** sur le vrai site (correction d'une erreur
  antérieure qui les disait 404) mais ils ne sont dans **aucune
  collection** — tous les 3 indisponibles ; l'article FR
  `/fr/blogs/news/construire-le-digilab-en-coulisses` n'a pas de fichier
  local (existe sous handle anglais).
- **`rfid-badges` : page vide des deux côtés.** La page du vrai site
  affiche elle-même « No products » (0 carte) alors que son
  `products.json` liste 27 produits — le clone est fidèle, ce n'est pas
  un défaut du clone.
- **Défaut d'index connu :** l'entrée EN de `rfid-field-detector` utilise
  une mauvaise image (image du pied de page) — non corrigée.
- **Taille :** ~1,2 Go / ~4 985 fichiers, au-dessus de la recommandation
  GitHub de 1 Go par dépôt — le push reste possible (plus gros fichier
  ~17 Mo < 100 Mo).

## 7. Saga des drapeaux (v8 → v12)

- **Signalement (2026-11-18 23:58) :** sur la page PortaPack, deux
  drapeaux se chevauchent à droite du logo — américain devant, canadien
  derrière (nom accessible du lien : « Lab401 🇺🇸 »).
- **v8 (5691c76c) :** `updateLogoFlag` ne retirait que les `<img>` — échec,
  le drapeau US n'est pas un `<img>`.
- **v9 (f4cd0dde) :** nettoyage de tous les enfants du lien logo — échec
  en contrôle frais.
- **v10 (9c2c87af) :** observateur permanent + diagnostic dans le titre
  de l'onglet — l'observateur ne s'est jamais déclenché : rien n'est
  ajouté au DOM après le chargement.
- **Cause racine (2026-11-19 ~02:00) :** le drapeau US n'est pas dans le
  DOM. C'est le badge animé du vrai site, dans sa feuille
  `cdn/shop/t/60/assets/market-us.css` :
  `.site-logo::after{content:"\1f1fa\1f1f8"; … font-size:24px;
  animation:heartbeat…, gentle-sway…}` — un emoji 🇺🇸 en pseudo-élément,
  flottant et animé, chargé sur 9 pages (dont les pages produits). Le
  drapeau canadien, lui, était ajouté par notre code. Aucun nettoyage DOM
  ne pouvait retirer un `::after`.
- **v11 (2e2d1819, ~02:33) :** sur la décision de l'utilisateur « plus du
  tout de drapeau », retrait de TOUS les drapeaux de l'en-tête (logo,
  sélecteurs de langue/devise). Vérifié en navigateur 02:38 : aucun
  drapeau. **Mais** l'utilisateur a signalé que la sélection de langue
  semblait avoir disparu avec les drapeaux.
- **v12 (déployée ~03:02, commit e90d969f, vérifiée en navigateur
  03:24–03:25) :** correction ciblée — **seul le drapeau à côté du logo
  est retiré** (badge US masqué, aucun drapeau ajouté au logo) ; les
  drapeaux des sélecteurs de langue et de devise sont **restaurés**.
  Vérifié : page PortaPack sans drapeau à côté du logo, drapeaux
  présents sur les sélecteurs (France à côté de « Français », Canada à
  côté de « $ CAD »), prix 474,00 $ (rég. 620,00 $), collection SDR et
  accueil conformes. **Le 2026-11-19 ~03:28, l'utilisateur confirme que
  les drapeaux sont corrects : ne plus rien y toucher.**

## 8. Pour continuer le développement

- **Ne jamais modifier `site-clean/` pendant un envoi GitHub** (les
  scripts lisent tout le contenu au démarrage).
- **Ne jamais pousser sans le « go » explicite de l'utilisateur** pour
  chaque chantier ; les poussées sont groupées pour limiter les
  validations.
- **Prochaines étapes convenues (sur son go) :** le PortaPack est ajouté
  à la collection SDR, à l'accueil et à RF Tools (v13, fait) — il reste
  à l'ajouter à **15 autres collections**, à re-capturer
  `all-products-page-5.html` (EN) et les pages 2–5 de la collection
  `all` (voir `audit-exhaustivite-2026-11-19.md` § 5) ; ensuite fork +
  Supabase (comptes + vrai panier), Stripe en étape séparée.
- **Fichiers de référence :** `INVENTORY.md` (inventaire complet),
  `portapack-placement-research.md` (placement PortaPack sur le vrai
  site), `product-page-anatomy.md` (anatomie complète d'une page produit
  + recette pour ajouter un produit),
  `audit-exhaustivite-2026-11-19.md` (audit complet 2026-11-19 : 0
  produit oublié, écarts de collections),
  `lab401-search-index.json` (552 produits), `README.md` dans
  `site-clean/` (limites du statique).
