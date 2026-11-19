# Produits — clone Lab401

**Date :** 2026-11-19 ~02:45. **Source des chiffres : le clone**
(`site-clean/`, `lab401-search-index.json`) et `products.json` par locale
du vrai site. Les prix sont les prix **EUR de base** (première variante),
sauf mention contraire.

## 1. Inventaire

| Locale | Produits | Fichiers (`products/`) |
|---|---|---|
| EN | **183** | 366 (183 `.html` + 183 `.js`) |
| FR | **186** | 372 (186 `.html` + 186 `.js`) |
| ES | **183** | 366 (183 `.html` + 183 `.js`) |
| **Total** | **552** | **1 104** |

**Source d'exhaustivité : `products.json` par locale (182 produits)**,
pas le sitemap (181 — il rate les produits épuisés) ni la collection
« all » (179 sur le vrai site). Après les ajouts du 2026-11-18, plus rien
ne manque d'après `products.json`.

**Audit complet du 2026-11-19** (voir
`audit-exhaustivite-2026-11-19.md`) : **0 produit oublié** dans les 3
locales. Le vrai site compte 183 produits distincts par locale (182 de
`products.json` + `rfid-field-detector`, absent de `products.json` ET du
sitemap mais page live à 200) — le clone les a tous. Le sitemap a un
produit de retard : `products.json` − sitemap = `portapack-h4m-pro`.

**Différence FR (186 vs 183) :** 3 produits existent en FR sous des
handles **traduits** en plus des handles anglais (voir § 5).

**Gamme de prix (EN, prix affichés EUR) :** de **2,50 €**
(`mifare-classic-1k-4-byte-compatible`, tag MIFARE Classic 1K) à
**9 700,00 €** (`macobox-hardware-pentest-platform`, MACOBOX). Aucun
produit sans prix dans l'index.

## 2. Structure d'une page produit

Chaque produit = deux fichiers :

- `products/<handle>.html` — la page (en-tête, galerie d'images, titre,
  prix, variantes, stock, description, infos d'expédition, produits
  recommandés, pied de page).
- `products/<handle>.js` — le JSON Shopify du produit (`id`, `title`,
  `handle`, `description` HTML, variantes avec prix/SKU, images).

Contenu type d'une page (exemple PortaPack, § 4) :

- **Titre navigateur** (`<title>`) : « Nom du produit | … — Lab401 ».
- **H1** : nom du produit.
- **Prix** : montant affiché + prix barré (régulier) quand le produit est
  en solde, portés par `data-tax-cents` (cents EUR hors taxes) pour la
  conversion de devise en direct.
- **Variantes** : options (modèle, couleur, quantité…) avec prix et SKU
  propres ; le prix affiché change selon la variante choisie.
- **Stock** : indicateur (ex. « En stock ») et ligne d'expédition
  (« En stock (🇪🇺 EU, 🇺🇸 US) », « Expédié le … »).
- **Description** : texte HTML du produit (fonctionnalités, contenu de la
  boîte, spécifications).
- **Images** : galerie, fichiers `cdn/shop/files/<Nom>---<vue>_w<largeur>.png`
  (plusieurs largeurs : 352, 512, 800, 1024, 1440…).
- **Recommandations** : section « produits liés » en bas de page.

## 3. Prix : EUR de base, tables CAD/USD

- **Base EUR** (`data-tax-cents`, hors taxes). Les prix CAD/USD ne suivent
  pas un taux unique : **tables exactes** `lab401-cad-prices.json`
  (180 produits) et `lab401-usd-prices.json` (179 produits), appariées par
  handle et par prix EUR.
- **Repli** (produit absent d'une table) : CAD taux 1,66 arrondi au dollar,
  USD taux du marché arrondi.
- **Exemple Flipper Zero** (3 variantes) : EUR 149,17/186,67/236,00 →
  CAD 247/302/439 → USD 169/206,50/300,50.

### Correction du prix USD du PortaPack (2026-11-19)

Le prix USD du PortaPack n'avait jamais été obtenu (le cookie
`country_code=US` renvoyait les prix EUR ; le repli JS donnait ~357 $).
Il est maintenant établi par la **page d'accueil du vrai site** (marché
US par défaut) : **$325.00 en solde, $425.00 régulier, économie de
$100.00** (`data-tax-cents="32500"` / `"42500"`).

**La table USD du clone a été corrigée** (v13, commit 5b0df951,
2026-11-19) :

```json
"portapack-h4m-pro": {"price": {"325.00": 325.0}, "compare": {"425.00": 425.0}}
```

## 4. Fiche détaillée : PortaPack H4M Pro

| | |
|---|---|
| **Handle** | `portapack-h4m-pro` (identique EN/FR/ES) |
| **SKU** | `PORTAPACK-H4M-PRO` |
| **Titre page EN** | PortaPack H4M Pro \| Standalone 100 kHz-6 GHz SDR |
| **Titre page FR** | PortaPack H4M Pro \| SDR autonome 100 kHz-6 GHz |
| **Titre page ES** | PortaPack H4M Pro \| SDR autónomo de 100 kHz a 6 GHz |
| **Titre carte accueil FR** | PortaPack H4M + HackRF All-in-one |
| **Titre carte accueil ES** | PortaPack H4M + HackRF Todo en uno |
| **Prix EUR** | **325,00 €** (rég. 425,00 €) |
| **Prix CAD** | **474,00 $** (rég. 620,00 $) |
| **Prix USD** | **325,00 $** (rég. 425,00 $) — établi 2026-11-19, voir § 3 |
| **Stock** | **Indisponible** (`available: false`, vérifié sur le `.js` du vrai site le 2026-11-19 03:26) — le bouton est « Épuisé » et le bloc d'expédition est masqué par le script de la page. La ligne « En stock (🇪🇺 EU, 🇺🇸 US) » est un texte statique, affichée même pour ce produit (voir `product-page-anatomy.md` § 2.5). |
| **Image principale** | `PortaPack---H4M-Pro---Front.png` (variantes `_w352`, `_512x512`, `_1024`…) |
| **Fichiers clone** | `products/portapack-h4m-pro.html` (796 Ko), `.js`, `fr/…`, `es/…` |

**Description (début, JSON du produit) :** « The **PortaPack H4M Pro**
is a stand-alone, all-in-one portable SDR device based on the latest
HackRF Pro framework. The pre-flashed MAYHEM firmware provides vital
out-of-the-box functionality for pentesters: Receive / Transmit / Replay /
Scan, with dozens of baked in high-level functions: Real-time Spectrum
Monitoring, Key-Fob demodulation, ADS-B/AIS, Bluetooth, and much, much
more. »

**Descriptif carte accueil (glance) :**
- EN : « PortaPack H4M Pro - All-in-one device: the ultimate portable SDR
  multi-tool. »
- FR : « PortaPack H4M Pro – Appareil tout-en-un : l'outil multifonction
  SDR portable par excellence. Des dizaines de fonctions intégrées pour la
  capture, l'analyse et la relecture de 100 kHz à 6 GHz, grâce à la
  puissance du HackRF Pro intégré. »
- ES : « PortaPack H4M Pro: dispositivo «todo en uno», la herramienta
  multifuncional SDR portátil definitiva. »

**Placement (vrai site — voir `categories.md` et
`portapack-placement-research.md`) :** accueil, section SubGHz Tools
(position 2/4) et section SDR Tools (position 3/5) ; collection SDR
(`sdr-1`, position 3/9) ; collection RF Tools (`rf-tools`, position 2/8) ;
collection « all » (position 136/179). **Dans le clone (v13, commit
5b0df951) : ajouté à SDR, RF Tools et à l'accueil — vérifié en navigateur
le 2026-11-19 03:24–03:25. Reste absent de 15 autres collections**
(`frontpage`, `publica`, `hardware`, `pentesting`,
`pentesting-implants`, `pentesting-iot`,
`pentesting-red-team-equipment`, `ppb-sdr-devices`,
`ppb-subghz-devices`, `sdr`, `sdr-portable-devices`,
`sdr-spectrum-analysers`, `subghz-capture-sniff-replay`,
`subghz-tools-remote-control-cloning`,
`subghz-tools-spectrum-analysers`) **et de « all » / « all-products »**
— voir `audit-exhaustivite-2026-11-19.md` § 4.1.

## 5. Les 3 handles FR ajoutés le 2026-11-18

Les collections FR liaient vers ces handles, qui n'existaient qu'en
handle anglais (le vrai site redirige 302 vers le français). Pages
créées sous handles français (+ leurs `.js`) ; les pages FR sous handles
anglais sont conservées en plus. Vérifiées en 200 en direct.

| Handle FR | Handle EN | Produit | Prix EUR (index FR, handle FR) | Prix EUR (index FR, handle EN) |
|---|---|---|---|---|
| `bus-pirate-5-cable-auxiliaire` | `bus-pirate-5-auxiliary-cable` | Bus Pirate 5 Auxiliary Cable | 15,00 € | 9,95 € |
| `digilab-pour-flipperzero` | `digilab-for-flipperzero` | DigiLab for FlipperZero | 62,00 € | 49,00 € |
| `kit-de-modules-digilab` | `digilab-module-kit` | Digilab Module Kit | 19,00 € | 14,95 € |

**Écart à confirmer :** le même produit affiche un prix EUR différent
entre son entrée en handle français et son entrée en handle anglais dans
l'index FR (ex. 15,00 € contre 9,95 €). Il s'agit peut-être de variantes
différentes ou d'un prix de `products.json` FR distinct — à vérifier sur
le vrai site avant d'y toucher.

## 6. Cas particuliers

- **3 produits « orphelins » (correction d'une erreur antérieure) :**
  `hak5-network-mitm-lan-turtle`, `proxmark-3-rdv4-flash-support`,
  `usb-bluetooth-adaptor-hc-06` — ils avaient été notés « 404 sur le
  vrai site (retirés) », c'est **faux** : leurs pages répondent **200**
  (vérifié le 2026-11-19 avec les en-têtes navigateur ; les 404
  d'avant étaient des faux négatifs anti-bot). Ils sont dans
  `products.json` (182) mais **dans AUCUNE collection** du vrai site
  (ni « all », ni les 89 collections) — tous les 3 indisponibles.
  Le clone conserve leurs pages ET les garde dans les collections
  (capture plus ancienne). Voir `audit-exhaustivite-2026-11-19.md`
  § 2.3 et § 4.4. Ils existent en ES aussi.
- **2 handles ES traduits** (même mécanisme qu'en FR) :
  `bus-pirate-5-auxiliary-cable` → `cable-auxiliar-bus-pirate-5`,
  `rubber-ducky-pocket-guide` → `rubber-ducky-guia-de-bolsillos` — pages
  présentes dans le clone, handles canoniques en ES (200).
- **`rfid-field-detector` :** l'entrée EN de l'index utilise une mauvaise
  image (`cdn/shop/files/Hamster-Transparent_w600.gif`, image du pied de
  page) — défaut connu, non corrigé. À noter : cette image sert
  d'illustration générique à **223 des 552 entrées** de l'index (40 %) —
  l'index reprend telle quelle l'image fournie par `products.json`, et
  beaucoup de produits n'y ont pas de visuel propre. À vérifier si c'est
  un repli du vrai site ou de la construction de l'index.
- **Un produit, plusieurs collections :** chaque produit appartient en
  moyenne à ~8 collections (1 408 entrées pour 183 produits EN) — voir
  `categories.md`.
