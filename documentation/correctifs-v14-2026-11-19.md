# Correctifs v14 — collections, stock, panier (2026-11-19)

**Date :** 2026-11-19 ~04:00–05:00. **Objet :** les 3 demandes du matin —
(1) corriger les écarts de collections relevés dans l'audit d'exhaustivité,
(2) afficher **tous** les produits comme disponibles en stock,
(3) réparer le panier (ajout, quantité, suppression, sous-total).
Commit v14 : final `b6bef7870ebe867dae175061f04c7d6491f4c6e3` (5 lots :
26b4599b, 7ea2d82f, 5c023532, 8c5b00da, b6bef787 ; 1 995 fichiers).

---

## 1. Collections — écarts corrigés

### 1.1 Carte PortaPack ajoutée aux 15 collections où elle manquait

Positions relevées sur les **vraies pages** de collection (EN, 2026-11-19 ~04:07 ;
l'ordre de tri Shopify est identique en FR/ES — l'ordre des pages est la vérité,
`products.json` peut différer) :

| Collection | Position du PortaPack | Cartes (vrai site) |
|---|---|---|
| frontpage (accueil) | 3 / 35 | 35 |
| publica | 2 / 33 | 33 |
| hardware | 3 (p. 1 de 75) | 36 / page |
| pentesting | 10 (p. 1 de 61) | 36 / page |
| pentesting-implants | 4 / 8 | 8 |
| pentesting-iot | 3 / 5 | 5 |
| pentesting-red-team-equipment | 7 (p. 1 de 39) | 36 / page |
| ppb-sdr-devices | 2 / 4 | 4 |
| ppb-subghz-devices | 2 / 3 | 3 |
| **sdr** | **1 / 8** | 8 |
| sdr-portable-devices | 1 / 2 | 2 |
| sdr-spectrum-analysers | 2 / 3 | 3 |
| subghz-capture-sniff-replay | 2 / 6 | 6 |
| subghz-tools-remote-control-cloning | 3 / 6 | 6 |
| subghz-tools-spectrum-analysers | 2 / 3 | 3 |
| all-products p. 3 | 8e carte (position 80) | 36 / page |
| all p. 4 | position 136 | 36 / page |

**48 fichiers modifiés** (16 pages × 3 locales : 15 collections + `all-products-page-3`).
Méthode : découper la page en cartes par le wrapper
`<div class="productgrid--item ... data-product-item ...>` (PAS par
`productitem__container` — la carte = le wrapper externe, qui porte
`data-product-quickshop-url` et `data-vendor`), compteur de `<div>` équilibrés
pour la fin de bloc ; carte modèle = la carte PP du `sdr-1.html` de la même
locale ; insertion à l'index voulu. URL quickshop de chaque carte insérée
corrigée au format de la page : `/<locale>/collections/<handle>/products/portapack-h4m-pro`
(pour SDR le handle est `sdr-1`, pas `sdr` — imperfection v13 corrigée aussi
dans `sdr-1.html` ×3).

**Découverte SDR** : le vrai SDR a changé depuis v13 — 8 cartes (plus 9),
PortaPack **1er** (plus 3e) ; **LiteVNA a quitté la collection SDR**.
Décision : carte PP déplacée en position 1 dans le clone (EN/FR/ES) ;
LiteVNA LAISSÉ dans le clone (retrait non autorisé, même catégorie que les
orphelins, § 4) → SDR du clone = 9 cartes dont les 8 premières correspondent
au vrai site.

### 1.2 Captures fraîches et pagination

- **15 fichiers re-capturés** : `collections/all-page-2..5.html` (×3 locales)
  + `collections/all-products-page-5.html` (×3 locales, écrase l'ancien, qui
  était revenu vide à la capture initiale). Comptes vérifiés : all p. 2/3/4 =
  36 cartes, p. 5 = 35 ; PortaPack présent sur all p. 4 ; all-products p. 5 =
  35 cartes (positions 145–179).
- **Extension de portée** : la p. 5 FR/ES a aussi été re-capturée (le go ne
  nommait que EN, mais les FR/ES étaient périmées : 36 cartes dont les
  2 orphelins lan-turtle + proxmark-flash, et leur p. 6 était un doublon).
- **`all-products-page-6.html` SUPPRIMÉ (×3 locales)** : le vrai site n'a
  plus que 179 produits = 5 pages ; la carte de la p. 6
  (`mifare-compatible-1k-uid-modifiable`) est déjà dans la vraie p. 5 → doublon.
  Suppression incluse dans le push v14 (sha:null dans l'arbre).
- **Pagination corrigée manuellement** : les URLs réelles sont
  `?page=N&grid_list`, que le resolver de la phase C ne convertit PAS (il
  retombe sur la page 1) — ne pas compter sur la phase C pour la pagination.
  `all.html` ×3 ([2→all-page-2, 3→all-page-3, 6→5 (href+aria-label+texte),
  Next→all-page-2]) ; `all-products.html` p. 1 ×3 (lien « 6 » → « 5 ») ;
  `all-products-page-4.html` ×3 (`<li>` « 6 » retiré au complet) ; les 15
  pages capturées ont leurs href `?page=N&grid_list` convertis en fichiers
  relatifs (p. 1 → `<coll>.html`, p. N → `<coll>-page-N.html`).
- **Nettoyage des 15 pages** : phase C site-wide (1 938 HTML, 5 828 liens
  réécrits), `fix-locale-links.py`, `inject-localization.py`. Attributs
  `data-rimg*` retirés des nouvelles pages pour correspondre aux pages
  existantes, **SAUF** `data-rimg="noscript"` restauré sur les `<img>` des
  `<noscript data-rimg-noscript>` (32 par page de 36 cartes, 31 par page de 35).
  Liens `.atom` rendus relatifs.
- **Version JS** : `lab401-static.js?v=13` partout (1 938 références normalisées ;
  la phase C retire les `?v=`, d'où la normalisation après coup).

### 1.3 Comptes résultants (écarts restants = hors go)

| Page | Clone | Vrai site | Écart restant |
|---|---|---|---|
| hardware / pentesting / pentesting-red-team-equipment p. 1 | 37 cartes | 36 | cartes orphelines non retirées (§ 4) |
| publica | 35 | 33 | idem |
| SDR | 9 | 8 | LiteVNA non retiré (§ 4) |
| all-products p. 4 | 36 | 36 | contenu différent : le clone a `usb-bluetooth-adaptor-hc-06`, le vrai a `rfid-pentester-tag-pack` |
| all-products p. 3 | 36 (hors PP) | 35 | 1 carte en trop, même catégorie |

---

## 2. Stock — tous les produits affichés disponibles

**Demande :** « toutes les produits s'affichent comme étant disponibles en stock ».

### 2.1 Diagnostic

Les pages du clone sont des instantanés — plusieurs produits indisponibles
sur le vrai site AUJOURD'HUI s'affichent DÉJÀ disponibles dans le clone
(capture plus ancienne) : `kiisu`, `proxmark-3-rdv4-flash-support`,
`usb-bluetooth-adaptor-hc-06`, `o-mg-cable-pack` et les 5 partiellement
indisponibles (`lab401-hacker-stickers`, `inputstick-rat`, `usbkill-v4-pro-kit`,
`rfid-antenna-extender`, `o-mg-cable`) n'ont nécessité AUCUN changement.
Les cartes de collection n'affichent aucun marqueur sold-out ; l'index de
recherche n'a pas de champ disponibilité.

### 2.2 Premier passage (11 produits)

Corrigés : EN cynthion, hak5-network-mitm-lan-turtle, rfid-field-detector
(+ PortaPack déjà fait) ; FR/ES : portapack-h4m-pro, cynthion,
hak5-network-mitm-lan-turtle, rfid-field-detector. Pour chaque page : tous
les `"available":false` → `true` (JSON embarqué, 3 occurrences/page), bouton
ATC réactivé (`disabled` + classe `disabled` retirés, texte
« Sold out »/« Épuisé »/« Agotado » → « Add to cart »/« Ajouter au panier »/«
Añadir al carrito »), ligne de masquage du bloc expédition retirée.

### 2.3 Second passage — 14 produits manqués par le premier (vérification globale)

Un balayage complet du site (tous les HTML + `.js`, 3 locales) a révélé
**14 produits supplémentaires** avec `"available":false` :

| Produit | Variantes | État avant |
|---|---|---|
| bladerf-sdr-2-micro-xa4 | 2 (toutes indisponibles) | bouton désactivé |
| bus-pirate-5-auxilary-probe-kit | 1 | bouton désactivé |
| bus-pirate-5-flash-adaptors | 1 | bouton désactivé |
| bus-pirate-v5 | 2 (toutes indisponibles) | bouton désactivé |
| hackrf-pro | 1 | bouton désactivé |
| ics-decoder-iclass-se-seos-cloner-decoder | 1 | bouton désactivé |
| ir-blaster | 1 | bouton désactivé |
| long-range-maxiprox-5375-125khz-capture-system | 1 | bouton désactivé |
| nanovna | 1 | bouton désactivé |
| opera-cake-for-hackrf | 1 | bouton désactivé |
| ppe-extra-stealth-decoy-reader-battery | 1 | bouton désactivé |
| proxmark-5 | 1 | bouton désactivé |
| shark-jack-display | 1 | bouton désactivé |
| uhfkill | 2 (seule « Embedded » indisponible) | bouton déjà actif |

**Correctif global appliqué :** `"available":false` → `true` PARTOUT
(233 occurrences, 87 fichiers, HTML + `.js`, 3 locales), **y compris** le
JSON embarqué des pages de collection `pentester-pack` (×3 locales), qui
contient les données produits (variantes + disponibilité) utilisées par le
thème. 39 boutons ATC réactivés, 39 lignes de masquage du bloc expédition
retirées (la ligne est sur 2 lignes dans le fichier, guillemets simples
sans antislash — la première tentative de regex, sur une ligne, n'avait
rien retiré).

**Vérification finale (balayage complet) : 0 `"available":false`,
0 `clx-sold-out`, 0 `data-clx-available="false"`, 0 bouton ATC désactivé,
0 ligne de masquage restante sur tout le site.**

### 2.4 Tableaux clx (vue liste étendue)

299 pages ont un tableau `.clx-table-wrapper` : toutes les lignes corrigées —
`data-clx-available="false"` → `"true"` (y compris les lignes
`clx-row--featured`, que le premier regex ratait) et TOUTES les cellules Qty
`<span class="clx-sold-out">…</span>` remplacées par le bouton `+ Add` +
contrôles quantité. Modèle de cellule :
`<button class="clx-add-btn" data-clx-add="{vid}">+ Add</button>` +
`<div class="clx-qty-controls" style="display:none">` (− / qty / +).

---

## 3. Panier local (localStorage)

**Problème :** `cart.html` (710 Ko) est un instantané statique de 3 articles ;
les liens X pointent vers `/cart/change?line=N&quantity=0` (404 sur GitHub
Pages) et le JS du thème fait des appels AJAX `/cart/change`, `/cart/add`,
`/cart.js` qui échouent — rien ne se met à jour. Pas d'état « panier vide »
dans le HTML, pas de tiroir panier. Le quickshop n'a ni formulaire `/cart/add`
ni bouton quick-add visible sur les cartes. Les libellés du panier sont en
ANGLAIS dans les 3 locales — un seul gabarit suffit.

### 3.1 Design

- `localStorage`, clé `lab401-cart-v1`, articles = `[{id (variant_id), qty}]`.
- **Graine initiale** (premier chargement seulement) : les 3 articles de
  l'instantané — 46760484700507 (Lab401 Pentest Sticker Pack, « 10 Stickers »,
  800 ¢), 47111127204187 (O.MG Cable, 21 000 ¢), 42927883452646 (Flipper Zero
  « Basic », 14 917 ¢).
- **Sous-total recalculé aux vrais prix : 36 717 ¢ (367,17 €)** au lieu de
  35 917 ¢, parce que l'instantané avait les stickers à 0,00 € (rabais non
  reproductible). L'ancien `data-cartitem-price="16900"` du Flipper était
  aussi périmé (le total ligne affiché était bien 14 917 ¢).
- **Fichier de données `lab401-cart-data.json`** (104 903 octets) :
  **233 variantes uniques** (702 lectures sur 552 fichiers `.js` ; 155 produits
  ×1 variante, 17 ×2, 7 ×3, 1 ×4, 2 ×9 = 232 + fantôme),
  format `variant_id → {price (¢ EUR), compare (¢ ou null), thumb: {120, 240,
  360, 480 → chemin local}, en/fr/es: {title, handle, options: [[nom, valeur],
  …]}}`. Toutes les 233 variantes ont une miniature locale.
- **Fichier `lab401-cart.js`** (racine de site-clean, chargé par
  `lab401-static.js` — chargeur ajouté au gabarit `build-static-js.py`,
  pas à la main, car le fichier est généré) : interception en phase CAPTURE
  (les gestionnaires du thème sont en phase bulle) des submits de formulaires
  `form[action="/cart/add"]`, des clics `[data-cartitem-remove]`, des boutons
  quantité de la page panier, des boutons clx `[data-clx-add]` /
  `[data-clx-inc]` / `[data-clx-dec]` ; enveloppe `window.fetch` pour les
  POST `/cart/add(.js)` (chaînée sur celle de lab401-static.js, qui répond
  déjà localement à `/search/suggest`) ; mise à jour du compteur
  `[data-header-cart-count]` ; re-rendu de la page panier (articles,
  sous-total `data-cart-total`, état vide créé : message + lien
  « Continue shopping ») ; toast « Ajouté au panier » + lien « Voir le panier »
  après un ajout (pas de redirection forcée). Les prix rendus portent
  `data-tax-cents` → l'observateur de `lab401-static.js` les convertit dans
  la devise du visiteur. API de dépannage : `window.Lab401Cart`
  (load/addVariant/setQty/removeVariant/renderCart…).
- **Tests de logique (Node, DOM simulé) :** graine 3 articles / 36 717 ¢ ✓,
  ajout PortaPack ✓, doubler Flipper ✓, quantité 3 ✓, suppression O.MG ✓,
  sous-total final 64 734 ¢ = attendu ✓, setQty 0 supprime ✓, persistance ✓.
  Vérification en vrai navigateur : voir § 5.

### 3.2 Ce qui ne fonctionne toujours pas (statique)

- **Le bouton Checkout reste non fonctionnel** — impossible en statique
  (pas de serveur Shopify). Ne pas y toucher sans le fork Supabase.
- Le tiroir panier n'existe pas (le thème n'en a pas sur ce site) ; l'ajout
  affiche un toast, pas de redirection.

---

## 4. Écarts restants — décision en attente (hors go v14)

**Ne pas faire sans un go qui les nomme.** Les cartes des produits orphelins
ou retirés sont TOUJOURS dans les collections du clone (capture plus ancienne) :

- Les 3 orphelins (`hak5-network-mitm-lan-turtle`, `proxmark-3-rdv4-flash-support`,
  `usb-bluetooth-adaptor-hc-06`) dans publica / hardware / pentesting /
  all-products p. 4.
- `atlas-1-year-licence` dans pentesting-red-team-equipment.
- LiteVNA dans SDR.
- `keysy-lf-rfid-emulator-duplicator` retiré de 2 collections seulement
  (`rfid-badges-lf`, `tags`).
- 1 carte en trop dans all-products p. 3.

**Effet si retirés :** hardware / pentesting repasseraient à 36 cartes comme
le vrai site et `rfid-pentester-tag-pack` retrouverait sa place en p. 4 de
all-products.

**Question toujours sans réponse :** les pastilles « Économisez » en euros
(badges des cartes en solde : « ÉCONOMISEZ €100.00 » alors que les prix sont
convertis en $ CAD ; même phénomène pour les pastilles `clx-save-pill`
« Save up to €… » — le span `data-price-money-saved` n'a pas de
`data-tax-cents`, donc `lab401-static.js` ne le convertit pas). Correctif
possible : étendre la conversion JS à ces spans (montant EUR en cents =
compare − price de la carte), bump de version, push, vérification navigateur.

---

## 5. Vérification

**Vérification en vrai navigateur (2026-11-19 05:05–05:08, v14) : points 1–7
et 10 conformes ; points 8–9 avec problèmes de montants (mécanismes OK).**

- Collections : FR hardware — PortaPack 3e carte, 474,00 $ ✓ ; SDR — PP 1er ✓ ;
  all-products p. 5 — 35 cartes, p. 6 en 404 ✓ ; all p. 4 — PP présent ✓ ;
  pagination all p. 1 → p. 2 ✓.
- Pages produit : PortaPack FR — « Ajouter au panier » actif, bloc expédition
  visible, 474,00 $ (rég. 620,00 $) ✓ ; HackRF Pro — « Add to cart » actif,
  bloc expédition visible ✓ (prix affiché 664,00 $ — voir § 5.1).
- Vue liste : tableau étendu, 36 lignes, boutons « + Add », aucun « Sold out » ✓.
- Panier : les 3 articles affichés, compteur 3, ajout (toast + compteur 4),
  +/− et X fonctionnent (quantités et compteur se mettent à jour) ✓.
- **Problèmes de montants (v14) :** sous-total haut 610,00 $ vs bas 596,00 $
  (figé) vs somme des lignes 569,00 $ ; Flipper ×2 : ligne 495,00 $ au lieu de
  494,00 $ ; Stickers ×2 : ligne 27,00 $ au lieu de 30,00 $ ; sous-total haut
  +13,00 $ au lieu de +15,00 $ (ajout sticker), −26,00 $ au lieu de −27,00 $
  (suppression). Flipper affiché 248,00 $ sur sa page produit contre 247,00 $
  dans le panier et les collections. HackRF Pro affiché 840,00 $ en vue liste
  contre 664,00 $ sur sa page produit (à éclaircir).

### 5.1 Causes (diagnostiquées sur le code, confirmées par les tables)

- **Totaux du panier :** `lab401-static.js` convertit avec la table exacte
  CAD/USD pour les prix unitaires (clé = montant EUR du produit), mais un
  total (ligne, sous-total) n'est pas une clé de la table → il retombe sur
  le taux de repli 1,66 arrondi au dollar. Ex. : Flipper ×2 = 298,34 € × 1,66
  = 495,00 $ (au lieu de 2 × 247,00 $) ; sous-total 367,17 € × 1,66 = 610,00 $
  (au lieu de 15 + 307 + 247 = 569,00 $). Le sous-total du bas n'était jamais
  mis à jour (un seul `[data-cart-total]` traité au lieu des deux).
- **Pages produit :** `handleFor()` ne trouvait pas le handle sur les pages
  produit — le canonical y est relatif (`hackrf-pro.html`), résolu il contient
  la base `/lab401-clone` (la regex ne la prévoyait pas) et le `.html` n'était
  pas retiré. D'où le taux de repli sur les pages produit (HackRF Pro 664,00 $
  au lieu de 704,00 $ ; Flipper 248,00 $ au lieu de 247,00 $), alors que les
  collections utilisent la table.
- **Correctif v14.1 (commit 19ae6ad4, poussé 2026-11-19 ~05:10) :**
  `lab401-static.js` — `handleFor` retire la base et le `.html` ;
  expose `Lab401_priceValue` / `Lab401_formatPrice` / `Lab401_currency` et
  l'événement `lab401:prices` (devise changée, tables chargées).
  `lab401-cart.js` — totaux de ligne et sous-total calculés dans la devise
  courante à partir du prix unitaire affiché (table ou repli), sans
  `data-tax-cents` sur les totaux ; les DEUX sous-totaux mis à jour ;
  re-rendu sur `lab401:prices`. Tests Node (table CAD réelle) : graine
  15/307/247 $ et sous-total 569,00 $ ✓ ; Flipper ×2 = 494,00 $, sous-total
  816,00 $ ✓ ; Stickers ×2 = 30,00 $, sous-total 831,00 $ ✓ ; suppression →
  801,00 $ ✓.
- **À re-vérifier en navigateur (v14.1) :** sous-total du panier (haut ET bas)
  = 569,00 $, lignes et totaux après +/−/X, prix HackRF Pro sur sa page
  (704,00 $ attendu) et en vue liste (éclaircir le 840,00 $), prix Flipper
  sur sa page (247,00 $ attendu).

**Vérification v14.1 en vrai navigateur (2026-11-19 05:17–05:20) : points 1–4
conformes, point 5 persistant.**

- Panier : graine 15/307/247 $, sous-total 569,00 $ haut ET bas ✓ ; Flipper ×2
  → ligne 494,00 $, sous-total 816,00 $ ✓ ; Stickers ×2 → ligne 30,00 $,
  sous-total 831,00 $ ✓ ; suppression → 801,00 $ haut et bas ✓. (Le panier
  persistait d'une session précédente dans le profil du navigateur de test —
  le testeur l'a remis à l'état initial avant de refaire le test.)
- HackRF Pro sur sa page : 704,00 $ ✓ ; Flipper sur sa page : 247,00 $ ✓.
- **Point 5 persistant :** HackRF Pro affiché 840,00 $ en vue liste ET en vue
  grille sur `all-page-2.html`, et d'autres prix de liste supérieurs aux
  pages produit (Prototyping Boards 17 $ vs 15 $, Silicone Case 25 $ vs
  22 $, Wifi Devboard 58 $ vs 54 $, microSD 32 $ vs 28 $, Sticker Pack
  « FROM $18.00 » vs 15 $).
- Observation annexe : un tiroir latéral de panier (créé par JS, absent du
  HTML statique) affiche des prix USD (O.MG 210 $, Flipper 169 $, total
  379 $) et « YOUR CART IS EMPTY » sur les pages produit — le bouton panier
  de l'en-tête est un lien direct vers cart.html, le tiroir n'est pas
  déclenché par le site statique ; à investiguer séparément si besoin.

### 5.2 Prix USD des 15 pages re-capturées (diagnostic + correctif v14.2)

- **Cause :** les 15 pages re-capturées en v14 (`all-page-2..5`,
  `all-products-page-5`, ×3 locales) ont été servies en **USD** par Shopify
  (curl avec Accept-Language en-US) : leurs `data-tax-cents` / `item-price` /
  textes sont des cents USD. L'observateur les traite comme des EUR et
  sur-convertit (HackRF Pro : 506 $ × 1,66 = 840 $ CAD au lieu de 704 $).
  Vérifié : 30 lignes clx sur 36 en USD sur `all-page-2.html` (FR/ES
  idem), 0 sur les anciennes pages (`hardware`, `sdr-1`, `all`, `frontpage`
  toutes en EUR).
- **Correctif v14.2 (commit b53e3ee8, poussé 2026-11-19 ~05:30, 15 fichiers,
  script `fix-usd-prices.py`) :** prix remis en EUR d'après le `.js` du
  produit (table USD inverse pour la correspondance) — `item-price`,
  `item-compare_at_price`, `data-tax-cents` (prix et compare), textes
  affichés, badges d'économie, pastilles `clx-save-pill`. Vérifié par
  script : clx 36/36 EUR, 0 `item-price`/`compare`/`badge` erroné, 0 prix
  « $X.XX » restant sur les 15 pages. Piège rencontré : la première version
  du script a corrompu les badges (attribut `data-price-money-saved`
  supprimé, texte « €0.00$0.00 ») — réparés par regex ciblée (72 badges
  par page de 36 cartes) et le script corrigé (le montant est le groupe 2,
  pas le groupe 1).
- **À re-vérifier en navigateur (v14.2) :** HackRF Pro à 704,00 $ en vue
  liste et en vue grille sur `all-page-2.html`, et les autres prix de liste
  alignés sur les pages produit.

**Vérification v14.2 en vrai navigateur (2026-11-19 05:38–05:39) : conforme.**

- Vue grille `all-page-2.html` : HackRF Pro 704,00 $ ✓, Prototyping Boards
  15,00 $ ✓, Silicone Case 22,00 $ ✓.
- Vue liste : HackRF Pro 704,00 $ ✓, Prototyping Boards 15,00 $ ✓, Wifi
  Devboard 52,00 $ ✓, Sticker Pack « FROM $15.00 » ✓, microSD 27,00 $ ✓.
- **microSD (27,00 $ et non 28,00 $) :** ce n'est PAS un écart — le 28,00 $
  venait de l'ancien bug v14 (taux de repli 16,67 € × 1,66 = 27,67 → 28 $) ;
  la table exacte dit 16,67 € → 27,00 $, et la page produit affiche
  désormais 27,00 $ aussi (vérifié 05:39). Collection et page produit sont
  alignées.
- **Panier affiché à 801,00 $ lors de ce test :** ce n'est PAS un bug — le
  profil du navigateur de test gardait l'état final du test v14.1 (O.MG ×1
  + Flipper ×2, stickers supprimés) ; 307 + 494 = 801,00 $, les deux
  sous-totaux concordent. L'état graine (569,00 $) avait été vérifié en
  v14.1 après remise à zéro du panier.

## v14.3 — Pastilles « Économisez » converties + liste des devises réduite (2026-11-19, commits e6663d1b, 1ee78060, 27c4706a)

### Diagnostic du « bug euro » (signalé par l'utilisateur le 2026-11-19 13:25)

L'utilisateur voyait « plein de pays qui n'utilisent pas l'euro qui
affichent en ce moment euro » et trouvait la liste des devises trop longue.
Diagnostic en navigateur (2026-11-19 13:27–13:31) : **la conversion des
devises fonctionnait** (Canada, Australie, Japon, Royaume-Uni, France tous
corrects ; les 27 entrées « € EUR » de la liste correspondent bien aux pays
qui utilisent l'euro, Bulgarie incluse depuis 2026). L'impression « tout en
euros » venait de deux choses :
- **les pastilles de rabais restaient figées en euros dans toutes les
  devises** (« SAVE €100.00 » sur le PortaPack même au Canada, « SAVE UP TO
  €50.00 » sur le Proxmark 3, etc.) — c'est le bug principal ;
- **la liste avait 71 pays, avec 27 entrées « € EUR » identiques** et
  seulement un drapeau (pas de nom de pays), donc difficile à parcourir.

### Correctif — pastilles converties dans la devise du visiteur

`lab401-static.js` : nouvelle fonction `updateSavingsBadges()`, appelée dans
`processPrices()` (donc à chaque changement de devise et après le chargement
des tables). Pour chaque badge de carte (`[data-price-money-saved]`) et
chaque pastille de vue liste (`.clx-save-pill`), l'économie est calculée
comme **compare converti − prix converti**, en repartant des attributs EUR
statiques (`item-price` / `item-compare_at_price` de la carte,
`data-clx-price` de la ligne clx) — donc idempotent à chaque changement de
devise. Ex. PortaPack en CAD : 620 − 474 = **146 $**.

- **Économie jamais négative** (suite 1ee78060) : quand le compare exact
  n'existe pas dans la table CAD/USD, l'économie est calculée sur
  l'économie EUR convertie au taux, au lieu de mélanger un compare au taux
  et un prix de table exacte. Cas trouvé par la vérification : USBKill V4 en
  CAD affichait « $-6.00 » (compare au taux 232 $ − prix table 238 $) ; il
  affiche maintenant **8,00 $** (4,95 € × 1,66).
- **Format** (suite 27c4706a) : les badges utilisent `formatMajor`, le même
  format que les prix (« $146.00 »), et non le format français (« 146,00 $ »).
  Une première version utilisait le format français, mais la vérification a
  montré que les prix du site sont affichés en format anglais par le JS —
  les badges doivent suivre le même format pour rester cohérents.
- **Pourquoi les économies varient d'un produit à l'autre** (ex. 10,00 € →
  16,00 $ ; 100,00 € → 112,00 $ ou 146,00 $) : ce n'est PAS un bug — les
  prix CAD/USD sont fixés par produit dans les tables exactes du vrai site,
  pas par un taux unique. L'économie est donc (compare table − prix table)
  par produit.

### Correctif — liste des devises réduite (71 → 17 pays)

`build-static-js.py` : nouvelle constante `SELECTOR_COUNTRIES` (FR, DE, ES,
IT, NL, BE, US, CA, GB, CH, JP, AU, SE, NO, DK, PL, CZ). Le sélecteur
n'affiche plus que ces 17 pays ; **la géolocalisation accepte toujours les
71 pays** de `countries.json` (devise + TVA correctes pour tous) et le pays
courant reste épinglé en tête de liste (ex. un visiteur autrichien garde
l'Autriche en tête, en EUR).

### Correctif — data-clx-price restés en USD

21 lignes `data-clx-price` étaient restées en USD sur les 5 pages fraîches
(`all-page-2..5`, `all-products-page-5`) : la regex de v14.2 ne capturait
pas les variantes dont l'objet JSON contient un `featured_image` imbriqué.
Corrigées par `fix-clx-price-pill.py` (appariement par `json.loads` des
`.js`, robuste aux objets imbriqués) — 1 549 lignes vérifiées, 0 encore
fausse — ainsi que les montants EUR des pastilles sur 31 pages de
collections. Leçon : pour les `.js` de produits, toujours parser le JSON,
jamais une regex `[^}]*?`.

### Vérification v14.3 en vrai navigateur

- **2026-11-19 13:38–13:49** (commit e6663d1b) : badge PortaPack FR/CAD
  « ÉCONOMISEZ $146.00 » ✓ ; en EUR « ÉCONOMISEZ €100.00 » ✓ ; liste de
  17 entrées exactement ✓ (Canada épinglé en tête, puis 6 pays € EUR,
  US, GB, CH, JP, AU, SE, NO, DK, PL, CZ) ; prix CAD corrects (Flipper
  247 $, PortaPack 474 $, HackRF Pro 704 $) ✓ ; pastilles en vue liste en
  $ ✓ (« ÉCONOMISEZ JUSQU'À $16.00 » Proxmark 3, « $112.00 » Blade RF,
  « $4.00 » NFCKill). Anomalies trouvées : USBKill V4 « $-6.00 » (négatif)
  et badge en format « $146.00 » au lieu du format français des prix
  (les rapports précédents avaient normalisé les prix en « 247,00 $ »).
- **2026-11-19 13:53–14:03** (commit 1ee78060) : badge PortaPack
  « ÉCONOMISEZ 146,00 $ » ✓ (format français) ; USBKill V4
  « ÉCONOMISEZ JUSQU'À 8,00 $ » ✓ (positif). Précision : les prix
  eux-mêmes sont en format anglais (« $247.00 », « $474.00 ») — seuls les
  badges utilisaient alors le format français.
- **Suite 27c4706a** : badges remis en `formatMajor` (« $146.00 ») pour
  correspondre aux prix. **Vérifié en navigateur 2026-11-19 14:06–14:15 :**
  badge PortaPack « ÉCONOMISEZ $146.00 » ✓, prix PortaPack $474.00 ✓, les
  deux formats correspondent (symbole avant, point décimal) ; autres badges
  confirmés (« ÉCONOMISEZ JUSQU'À $17.00 »). Le déploiement GitHub Pages a
  pris ~9 minutes cette fois (l'ancien format « 146,00 $ » persistait
  jusqu'à 14:15).

### Note — PortaPack et Proxmark 5 au même prix

Ce n'est PAS un bug : les deux coûtent 325,00 €. Ils diffèrent en CAD
(474 $ contre 511 $) et en USD (325 $ contre 350 $) parce que le vrai site
les prix différemment par marché (tables exactes).
