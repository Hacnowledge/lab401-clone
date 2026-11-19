# Récapitulatif — projet Lab401 (clone statique de lab401.com)

**Date du document : 2026-11-19 ~02:45, mis à jour ~03:45.** Ce fichier raconte tout ce qui a
été fait dans ce projet et la discussion avec l'utilisateur (Pierre-Luc),
pour reprendre le développement sans rien réapprendre. **État au moment
de la mise à jour : v12 et v13 déployées et vérifiées en navigateur
(03:24–03:25) ; audit d'exhaustivité complet fait (0 produit oublié) ;
documentation améliorée (anatomie des pages produits + rapport d'audit)
en cours d'envoi sur GitHub. Question en attente : corriger ou non les
pastilles « Économisez » affichées en € quand les prix sont en $ CAD.**

## 1. Demande initiale (2026-11-17)

Pierre-Luc demande de **télécharger au complet le site lab401.com**
(boutique Shopify d'un ami qui l'a mandaté pour faire des modifications),
**à l'identique**, puis de le publier sur GitHub. Réponses en français
(fr-CA). Exigences répétées tout au long du projet :

- copies fidèles **vérifiées visuellement en vrai navigateur** ;
- ne jamais déclarer un correctif bon sur la seule foi d'un test local
  quand un vrai navigateur ou son téléphone dit le contraire ;
- son test sur téléphone Android (Chrome) est la vraie vérification pour
  l'UI mobile ;
- **ne jamais annoncer « en ligne » avant la vérification live complète**
  (build GitHub Pages terminé, ~3 à 6 min après le push) ;
- **pas de déploiement sans son « go » explicite à chaque fois** ;
- poussées GitHub **groupées** (pour limiter les validations) ;
- travail continu, sans arrêts inutiles (« Alors pourquoi tu t'arrêtes ?
  Continue de travailler. », 2026-11-18 00:23) ;
- quand on parle du projet, la conversation se passe **dans le chat du
  projet** (« Cloner le site Lab401.com sur GitHub »), pas dans le chat
  principal (demandé en appel vocal le 2026-11-18).

## 2. Chronologie

### 2026-11-17 — Téléchargement, nettoyage, mise en ligne initiale

- **Téléchargement** (21:20–22:30 EST) : 441/441 URLs du sitemap EN par
  `wget` + compléments curl (403 transitoires, 46 produits en HTML seul,
  pagination, tags, flux Atom). Dossier `site-raw/` (miroir intact).
- **Nettoyage** (`clean-lab401.py`) : 2 106 fichiers avec `?` renommés,
  28 314 liens réécrits, images CDN manquantes récupérées (1 636
  fichiers). Copie nettoyée `site-clean/` : ~1,2 Go / 4 985 fichiers.
  Voir `INVENTORY.md`.
- **Compte Hacnowledge relié** (PAT vérifiée, GitHub App : accès à tous
  les dépôts). Dépôt **`Hacnowledge/lab401-clone`**, GitHub Pages
  https://hacnowledge.github.io/lab401-clone/. Le dépôt
  `Kaliwinki/lab401-clone` ne contient que le README.
- Premiers commits (clone EN, puis FR/ES, localisation) :
  `cd6ab59e`, `0be0fab2`, `e7077f3d`, `c3341842`, `359c49e8`,
  `421196b4`, `e05baa2a`, `895b34a3`, `2ad4ed39`, `804a0dc3`,
  `337f3cc5`, `086c7bce`, `41cde83b`, `2ad8c4de`, `5f579afb`.

### 2026-11-18 — Panier, devise mobile, liens de locale, recherche

- **Panier statique** EN/FR/ES (`f3d896e6`) : capture réelle avec 3
  articles (sous-total 359,17 €). Checkout et compte non reproductibles
  (pages Shopify hébergées).
- **Devise mobile v=6** (`e4db9ad9`) : le bouton Devise mobile re-remplit
  les 71 pays à chaque ouverture.
- **Liens de locale** (`e2262d21`, `fix-locale-links.py`) : 14 601 liens
  absolus `/fr/`, `/es/…` convertis en relatifs (ils donnaient 404 sur
  GitHub Pages en sous-répertoire).
- **Recherche locale v=7** (`744f2129` + correctif visuel `d847fa5`) :
  index `lab401-search-index.json` (544 produits à l'époque), pages
  `search.html` EN/FR/ES, interception du formulaire du thème.
- **Produits manquants** (~23:30, `296b8fbe` + `11fbe3d6`) : signalés par
  l'utilisateur (« Tu as oublié des pages de la boutique, il manque des
  produits », puis lien du PortaPack). Le chat principal avait d'abord
  conclu à tort que le produit n'existait pas (faux 404 anti-bot) —
  l'utilisateur avait raison. Ajouts : `rfid-field-detector` FR/ES,
  **PortaPack H4M Pro EN/FR/ES** (EUR 325 / rég. 425, CAD 474 / rég.
  620, SKU PORTAPACK-H4M-PRO), 3 handles français
  (`bus-pirate-5-cable-auxiliaire`, `digilab-pour-flipperzero`,
  `kit-de-modules-digilab`). Index passé à 552 produits. Vérifiés en
  direct en 200 dans les 3 langues.

### 2026-11-18 23:58 → 2026-11-19 ~02:45 — Saga des drapeaux

- **23:58 — signalement :** « Il y a un petit bug avec le drapeau sur la
  page de ce produit. […] Il y a le drapeau américain et le drapeau
  canadien qui s'affichent. » Puis capture d'écran de la recherche
  prédictive (rectangles gris figés en tapant « Flipper »), et
  « Est-ce que tu as vu ce que je veux dire ? » (01:00).
- **v=8 (`5691c76c`, ~00:40) :** `updateLogoFlag` ne retire que les
  `<img>` de drapeau ; recherche prédictive interceptée en local.
  Vérifié en navigateur 00:47 : recherche corrigée (6 résultats lisibles
  pour « flipper ») mais **toujours 2 drapeaux**.
- **v=9 (`f4cd0dde`) :** nettoyage de tous les enfants du lien logo +
  texte sombre pour la recherche prédictive. Contrôle frais : toujours
  2 drapeaux.
- **v=10 (`9c2c87af`) :** observateur permanent sur le lien logo +
  diagnostic dans le titre de l'onglet. L'observateur ne s'est jamais
  déclenché : rien n'est ajouté au DOM après le chargement.
- **~02:00 — cause racine trouvée :** le drapeau US n'est pas dans le DOM.
  C'est le badge animé du vrai site, dans sa feuille
  `cdn/shop/t/60/assets/market-us.css` (`.site-logo::after`, emoji 🇺🇸
  en pseudo-élément, flottant et animé, 9 pages). Le drapeau canadien
  était ajouté par notre code. Aucun nettoyage DOM ne pouvait retirer un
  `::after`.
- **v=11 (`2e2d1819`, ~02:33) :** sur sa décision « plus du tout de
  drapeau », retrait de **tous** les drapeaux de l'en-tête (logo,
  sélecteurs de langue/devise). Vérifié en navigateur 02:38 : aucun
  drapeau, nom accessible « Lab401 », recherche OK.
- **02:40 — correction de l'utilisateur :** « Merde, tu fais n'importe
  quoi. Tu as même enlevé la sélection de langue dans l'onglet. Je voulais
  simplement que tu enlèves le drapeau dans l'en-tête qui est à côté du
  logo. Lab401. » Il signale aussi qu'il ne voit toujours pas le nouveau
  produit (PortaPack) dans la catégorie SDR ni à l'accueil, comme sur le
  vrai site.
- **v=12 (déployée ~03:02, commit e90d969f, 1 930 fichiers) :**
  correction ciblée — **seul le drapeau à côté du logo est retiré**
  (badge US masqué, aucun drapeau ajouté au logo) ; les drapeaux des
  sélecteurs de langue et de devise sont **restaurés**. Vérification en
  navigateur en cours après le déploiement.
- **v=13 / PortaPack (~03:20, commit 5b0df951, 13 fichiers) :** carte
  PortaPack H4M Pro ajoutée en SDR (position 3/9), RF Tools (2/8) et à
  l'accueil (SubGHz 2/4, SDR 3/5), en EN/FR/ES — titres et descriptifs
  localisés repris du vrai site, prix EUR 325,00 / rég. 425,00, badge
  « Save 100,00 € », images carte 512/1024/1198 téléchargées. Sections
  d'accueil remises à leur nombre de produits du vrai site (SubGHz 4,
  SDR 5). Table USD corrigée et poussée (325,00 $ / rég. 425,00 $).
  Vérification en navigateur en cours après le déploiement.

### 2026-11-19 ~02:45 — Recherche placement PortaPack

Recherche en lecture seule sur le vrai site
(`portapack-placement-research.md`) : le PortaPack figure sur l'accueil
(sections SubGHz Tools position 2/4 et SDR Tools position 3/5), dans la
collection SDR (`sdr-1`, position 3/9), dans RF Tools (position 2/8) et
dans « all » (position 136/179). **Dans le clone, il est absent de tous
ces endroits** (page produit existante, 0 occurrence ailleurs).
Découverte annexe : le vrai prix USD du PortaPack, **$325.00 / rég.
$425.00** (page d'accueil du vrai site, marché US par défaut).

### 2026-11-19 ~02:46 — Fichiers de compréhension

L'utilisateur demande les fichiers pour comprendre le site (structure,
catégories, produits) et un récapitulatif de tout le travail et de la
discussion, à garder sur GitHub dans un dossier à part. Il précise qu'il
va **créer lui-même les fichiers de développement** ensuite. Les 4
fichiers sont rédigés localement dans `documentation/` (ce dossier) et
seront poussés après sa relecture.

### 2026-11-19 03:24–03:27 — Vérification en navigateur (v12 + v13) et question des pastilles

Vérification en vrai navigateur (pages FR, `?country=ca`) : page
PortaPack sans drapeau à côté du logo, drapeaux présents sur les
sélecteurs, prix 474,00 $ (rég. 620,00 $) ; collection SDR : PortaPack
3e ; accueil : SubGHz 2e et SDR 3e. Deux observations rapportées :
(1) le bouton « Épuisé » de la page PortaPack est fidèle au vrai site
(variante indisponible, `available: false` vérifié 03:26) ; (2) les
pastilles « Économisez » affichent le montant en euros (« ÉCONOMISEZ
€100.00 ») alors que les prix sont convertis en $ CAD — préexistant,
toutes les cartes en solde. Question posée à l'utilisateur (choix) :
corriger les pastilles en $ CAD ou les laisser comme ça — **réponse en
attente**.

### 2026-11-19 ~03:28 — Les drapeaux sont corrects, ne plus y toucher

« Pour ce qui est des drapeaux, en ce moment c'est correct. Donc ne
touche plus à rien pour les drapeaux. » Règle enregistrée : **les
drapeaux sont gelés depuis la v12** (seul le drapeau du logo est retiré,
sélecteurs intacts).

### 2026-11-19 ~03:28–03:45 — Tour complet du site, audit d'exhaustivité, anatomie des pages produits

L'utilisateur demande de refaire le tour du site au complet, d'améliorer
encore la documentation et de s'assurer qu'aucun produit n'a été oublié
— parce qu'on va ajouter des produits et qu'il faut savoir parfaitement
comment les pages sont faites. Travail fait :

- **Audit produits : 0 oublié.** `products.json` 182/locale (page 2 =
  0), sitemap 181/locale, clone 183 EN / 186 FR / 183 ES. Le vrai site
  compte 183 produits distincts par locale (182 + `rfid-field-detector`,
  page live à 200 mais absent de `products.json` ET du sitemap).
- **Audit collections (89/locale, comparaison automatisée) :** 57 sans
  écart, 32 avec écart. Vrais écarts : PortaPack absent de 15
  collections ; `all` réduite à sa page 1 (36/179) ; `all-products` EN
  avec une page 5 vide (34 produits non listés, FR/ES complètes) ;
  3 produits orphelins + 1 produit retirés du vrai site depuis la
  capture (encore listés dans le clone). Fausse alerte écartée :
  `rfid-badges` est vide sur le vrai site aussi (« No products »).
- **Correction d'une erreur antérieure :** les 3 produits
  `hak5-network-mitm-lan-turtle`, `proxmark-3-rdv4-flash-support`,
  `usb-bluetooth-adaptor-hc-06` ne sont **pas** des 404 — leurs pages
  répondent 200 ; ce sont des produits orphelins (dans aucune
  collection, tous indisponibles).
- **Anatomie complète d'une page produit** (`product-page-anatomy.md`,
  nouveau fichier) : 11 sections, galerie PhotoSwipe, sélecteur de
  variantes (select caché + radios visibles), bloc prix (fourchette),
  bloc d'expédition personnalisé (`ShippingScheduler`, ligne de stock
  statique, bloc masqué si indisponible), description riche (vidéos
  `lite-youtube`), fichier `.js` (source de vérité), recommandations et
  avis vides en statique, recette complète pour ajouter un produit.
- **Documentation mise à jour** : `products.md`, `site-comprehension.md`,
  `categories.md`, `recap-discussion.md` (ce fichier) corrigés +
  nouveaux fichiers `product-page-anatomy.md` et
  `audit-exhaustivite-2026-11-19.md`. Envoi sur GitHub en cours.

## 3. Décisions de l'utilisateur (à respecter)

- **Clone à l'identique**, publié sur GitHub (dépôt Hacnowledge).
- **Drapeaux :** seul le drapeau à côté du logo doit disparaître ; les
  sélecteurs de langue et de devise gardent leurs drapeaux (v12).
  **Depuis le 2026-11-19 ~03:28 : les drapeaux sont corrects en ce
  moment, ne plus rien y toucher.**
- **Il crée lui-même les fichiers de développement** — les fichiers de
  ce dossier servent uniquement à comprendre le site.
- **Prochaine étape convenue (sur son go seulement) :** fork de la copie
  + Supabase (comptes + vrai panier fonctionnels, comme Plugiz),
  paiement Stripe en étape séparée.
- **Règles permanentes :** pas de déploiement sans son « go » explicite
  à chaque fois ; poussées groupées ; vérification en vrai navigateur
  (son téléphone = référence pour le mobile) ; discussion du projet
  dans le chat du projet.

## 4. Leçons (ne pas les réapprendre)

- **Anti-bot Shopify :** `curl` seul donne des **faux 404**. Utiliser les
  en-têtes navigateur complets (UA Windows Chrome, Accept,
  Accept-Language **assorti à la locale**, Sec-Fetch-*) + `--compressed`
  + `-L` (script `/tmp/fetch-lab401.sh` — `/tmp` est éphémère, à
  reconstruire si perdu).
- **Exhaustivité :** le sitemap (181) et la collection « all » (181)
  ratent les produits épuisés. Source fiable : **`products.json` par
  locale (182)** comparé au clone. **Mais aucune source n'est exhaustive
  seule** (audit 2026-11-19) : le sitemap rate le PortaPack,
  `products.json` rate `rfid-field-detector` (page live, absent des deux
  flux), la collection « all » rate 3 produits — croiser les sources.
- **Audit des collections :** agréger **toutes** les pages de pagination
  du clone avant de comparer (sinon les « manquants » sont gonflés) ;
  filtrer le bruit d'extraction (`/products/1`, `/products/i`… ne sont
  pas des produits) ; vérifier sur la **page réelle** avant de conclure
  qu'une collection du clone est vide (`rfid-badges` est vide sur le
  vrai site aussi).
- **Phase C de `clean-lab401.py` :** retire les `?v=` des URLs d'actifs
  (réappliquer la version courante ensuite) et laisse absolus les
  chemins `fr/de/es/it` (corriger avec `fix-locale-links.py`).
- **Delta de phase C :** ajouter une page qui rend un lien résoluble fait
  convertir ce lien sur tout le site à la phase C suivante (648 fichiers
  pour `cart.html`, 1 924 pour `rfid-field-detector`) — delta correct,
  pas un dommage.
- **Ne jamais lancer `clean-lab401.py` sans argument ni avec `--help`**
  pour l'inspecter : un lancement nu démarre le nettoyage complet.
  Lire le code avec `grep`/`sed`.
- **Push :** `upload_blobs.py` (checkpoint, reprend) puis
  `push_fr_batched.py` (lots de ~450, message de commit codé en dur à
  modifier avant chaque push) ; 502/422/504 transitoires = normaux ;
  **ne jamais modifier `site-clean/` pendant un envoi** ; Pages met
  3 à 6 min après le push.
- **Prix :** base EUR, `data-tax-cents` hors taxes ; prix CAD/USD par
  tables exactes (pas de taux unique) ; repli JS par taux.
- **Drapeaux :** un `::after` CSS n'est pas dans le DOM — aucun nettoyage
  JavaScript ne peut le retirer ; il faut le masquer en CSS.

## 5. Ce qui reste en suspens (2026-11-19 ~03:45)

| Sujet | État |
|---|---|
| **v12** (seul le drapeau du logo retiré) | Déployée (commit e90d969f) ; **vérifiée en navigateur 03:24–03:25**. **Drapeaux gelés depuis ~03:28 (décision de l'utilisateur).** |
| **PortaPack ajouté** (SDR position 3/9, accueil SubGHz 2/4 + SDR 3/5, RF Tools 2/8) | Déployé (commit 5b0df951, « v13 ») ; **vérifié en navigateur 03:24–03:25**. Reste : **15 autres collections** (voir `audit-exhaustivite-2026-11-19.md` § 4.1) + « all » (136/179) non ajoutés. |
| **Pastilles « Économisez » en € quand les prix sont en $ CAD** | Question posée à l'utilisateur le 2026-11-19 ~03:27 (corriger ou laisser) — **réponse en attente**. Correctif possible : étendre la conversion JS aux `span[data-price-money-saved]` (montant = compare − prix), bump de version, push, vérification navigateur. |
| **Table USD du PortaPack** | Corrigée et poussée (commit 5b0df951) : `{"325.00": 325.0}`, `{"425.00": 425.0}` (180 produits, comme la table CAD). |
| **`all-products` EN : page 5 vide** (34 produits non listés) | À re-capturer (FR/ES complètes). |
| **Collection `all` : page 1 seulement** (36/179) | Pages 2–5 à capturer. |
| **Produits orphelins / retirés encore listés dans le clone** (§ 4.4 de l'audit) | Cartes à retirer de ~20 collections (pages produit à conserver). |
| **Fork + Supabase** (comptes + vrai panier), Stripe à part | Sur son go seulement, après vérification de la copie par lui. |
| **Fichier `fth`** (94 octets, ressemble à un jeton GitHub) dans le dépôt privé `Hacnowledge/api` | Feu vert demandé le 2026-11-18 ~09:13, jamais répondu. Supprimer ≠ révoquer. |
| **Icônes de paiement du pied de page** en rectangles blancs (Bancontact, BLIK, Cartes Bancaires, MobilePay) | Cause non vérifiée. |
| **Écart de prix FR** (handles traduits : 15,00 € vs 9,95 €, 62,00 € vs 49,00 €, 19,00 € vs 14,95 €) | À confirmer sur le vrai site (voir `products.md` § 5). |
| **Image de l'entrée EN `rfid-field-detector`** dans l'index (image du pied de page) | Défaut connu, non corrigé. 223 entrées de l'index utilisent cette image générique. |
| **`all-products-page-5.html` sans `</body>`** | Seule page sans `lab401-static.js`. |
| **3 produits orphelins** (`hak5-network-mitm-lan-turtle`, `proxmark-3-rdv4-flash-support`, `usb-bluetooth-adaptor-hc-06`) | Pages live (200), dans `products.json`, dans AUCUNE collection. Pages locales conservées. |
| **Article FR** `/fr/blogs/news/construire-le-digilab-en-coulisses` | Sans fichier local (existe sous handle anglais). |
| **Fichiers `documentation/`** (ce dossier) | Poussés sur GitHub (commit c2d9a0e7, 2026-11-19 ~03:25) ; mise à jour (audit + anatomie) en cours d'envoi. |

## 6. Références

- `INVENTORY.md` — inventaire complet du clone (chiffres, nettoyage,
  vérifications, limites).
- `portapack-placement-research.md` — placement du PortaPack sur le vrai
  site (accueil, SDR, RF Tools, « all ») et prix USD.
- `product-page-anatomy.md` — anatomie complète d'une page produit et
  recette pour ajouter un produit (nouveau, 2026-11-19).
- `audit-exhaustivite-2026-11-19.md` — audit complet (0 produit oublié,
  écarts de collections, restes à faire) (nouveau, 2026-11-19).
- `lab401-search-index.json` — index de recherche, 552 produits.
- `site-clean/README.md` — ce qui ne fonctionne pas en statique.
- `site-comprehension.md`, `categories.md`, `products.md` — dans ce
  dossier.
- Dépôt : https://github.com/Hacnowledge/lab401-clone — Pages :
  https://hacnowledge.github.io/lab401-clone/
