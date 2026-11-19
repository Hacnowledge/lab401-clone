# PortaPack H4M Pro — placement sur le VRAI site lab401.com

Recherche en lecture seule, 2026-11-19 ~02:45 EST. Méthode : `curl --compressed -L`,
UA Windows Chrome 120, en-têtes Accept / Accept-Language assorti à la locale /
Sec-Fetch-* complets (script `/tmp/fetch-lab401.sh`, reconstruit — `/tmp` éphémère).
Toutes les URL ont répondu 200 (un 403 transient sur l'accueil EN, réussi au 2e essai).
Prix de base EUR (products.json) ; prix affichés sur l'accueil = USD par défaut
(aucun cookie de pays → marché US).

## 1. Page d'accueil — le PortaPack y figure, dans DEUX sections

Structure identique EN / FR / ES (10 sections produits, dans cet ordre) :
Flipper Zero (8) · Pentesting Hardware (7) · Newest Products (9) · RFID Tools (7) ·
**SubGHz Tools (4)** · **SDR Tools (5)** · Hardware Auditing Tools (8) · Hak5 Products (10) ·
Specialised RFID Badges (16) · Physical Audit Tools (10).

### Section « SubGHz Tools » / « Outils subGHz » / « Herramientas SubGHz » — position 2 / 4

| Pos | Produit (EN) | Prix |
|----:|--------------|------|
| 1 | PandwaRF Rogue Pro | 568,00 € (rég. 732,00 €) |
| **2** | **PortaPack H4M Pro** | **325,00 € (rég. 425,00 €)** |
| 3 | Flux Capacitor | 65,00 € |
| 4 | TinySA Ultra+ | 209,00 € |

Source de la section : collection `rf-tools` (les 4 premiers de ses 8 produits).
Lien de la carte : `/collections/rf-tools/products/portapack-h4m-pro`
(`/fr/…` et `/es/…` en locale).

### Section « SDR Tools » / « Outils SDR » / « Herramientas SDR » — position 3 / 5

| Pos | Produit (EN) | Prix |
|----:|--------------|------|
| 1 | Blade RF 2.0 Micro xA4 | 775,00 € (rég. 995,00 €) |
| 2 | SignalSDR Pro | 1 250,00 € |
| **3** | **PortaPack H4M Pro** | **325,00 € (rég. 425,00 €)** |
| 4 | HackRF Pro | 506,00 € |
| 5 | KrakenSDR | 1 040,00 € |

Source de la section : collection `sdr-1` (les 5 premiers de ses 9 produits).
Lien de la carte : `/collections/sdr-1/products/portapack-h4m-pro`.

### Carte produit sur l'accueil (les 3 locales, prix USD affichés)

- **Titre** : EN « PortaPack H4M Pro » · FR « PortaPack H4M + HackRF All-in-one »
  (2e ligne « HackRF All-in-one ») · ES « PortaPack H4M + HackRF Todo en uno ».
- **Prix affiché : $325.00, barré $425.00, « Save $100.00 »**
  (`data-tax-cents="32500"` / `"42500"`).
- **Glance (descriptif carte)** : EN « PortaPack H4M Pro - All-in-one device:
  the ultimate portable SDR multi-tool. » · FR « PortaPack H4M Pro –
  Appareil tout-en-un : l'outil multifonction SDR portable par excellence.
  Des dizaines de fonctions intégrées pour la capture, l'analyse et la
  relecture de 100 kHz à 6 GHz, grâce à la puissance du HackRF Pro intégré. »
  · ES « PortaPack H4M Pro: dispositivo «todo en uno», la herramienta
  multifuncional SDR portátil definitiva. »
- Image : `PortaPack---H4M-Pro---Front_512x512.png` (variantes 1024 aussi).

## 2. Collection SDR — `lab401.com/collections/sdr-1` (et /fr/, /es/)

**Le PortaPack y est, position 3 / 9, page unique (aucune pagination).**
Titre de page (h1) : « SDR » dans les 3 locales. Ordre identique EN/FR/ES
(vérifié sur la page HTML et sur `products.json?limit=250`) :

| Pos | EN | FR | ES | Prix EUR | Rég. |
|----:|----|----|----|--------:|-----:|
| 1 | Blade RF 2.0 Micro xA4 | idem | idem | 775,00 | 995,00 |
| 2 | SignalSDR Pro | idem | idem | 1 250,00 | — |
| **3** | **PortaPack H4M Pro** | **PortaPack H4M + HackRF All-in-one** | **PortaPack H4M + HackRF Todo en uno** | **325,00** | **425,00** |
| 4 | HackRF Pro | idem | idem | 506,00 | — |
| 5 | KrakenSDR | idem | idem | 1 040,00 | — |
| 6 | NanoVNA-F | NanoVNA | NanoVNA | 140,00 | — |
| 7 | Opera Cake for HackRF | Opera Cake pour HackRF | Opera Cake para HackRF | 195,00 | — |
| 8 | TinySA Ultra+ | TinySA Ultra+ | TinySA Ultra | 209,00 | — |
| 9 | LiteVNA (NanoVNA Compatible) | idem | idem | 195,00 | — |

## 3. Autres collections

- **RF Tools** (`/collections/rf-tools`, EN/FR/ES) : 8 produits,
  **PortaPack en position 2 / 8** (même ordre que la section SubGHz de l'accueil,
  suivie de Flipper Zero, KIISU, PandwaRF Marauder, PandwaRF Kaiju Pro License).
- **All products** (`/collections/all`, EN) : 179 produits,
  **PortaPack en position 136 / 179** (prix 325,00, rég. 425,00).
  (Écart noté : `products.json` global compte 182 produits par locale,
  la collection « all » en liste 179 — 3 produits ne sont pas dans « all ».)

## 4. Écart confirmé dans le clone (vérification lecture seule)

La page produit existe dans le clone EN/FR/ES
(`products/portapack-h4m-pro.html`, `fr/…`, `es/…`), mais le produit est
absent partout ailleurs (0 occurrence de `portapack-h4m-pro`) :

- Accueils `index.html`, `fr/index.html`, `es/index.html` : absent.
- Collections `sdr-1.html` (EN/FR/ES) : absent — il manque en position 3/9.
- Collections `rf-tools.html` (EN/FR/ES) : absent — il manque en position 2/8.
- Toutes les pages `all-products*.html` (EN/FR/ES) : absent.

### Ce que le correctif devra faire (pour l'agent qui l'exécutera)

1. Ajouter la carte PortaPack en **position 3/9** sur `collections/sdr-1.html`
   (+ FR/ES, titres localisés ci-dessus, prix 325,00 € / rég. 425,00 €).
2. Ajouter la carte en **position 2/4** dans la section SubGHz et en
   **position 3/5** dans la section SDR Tools des accueils
   (`index.html`, `fr/index.html`, `es/index.html`), avec titres, glance
   et prix localisés ci-dessus.
3. Ajouter la carte en **position 2/8** sur `collections/rf-tools.html` (+ FR/ES).
4. Idéalement aussi dans `all-products` (position 136/179 EN — positions
   FR/ES à vérifier au moment du correctif).
5. Prix : EUR 325,00 / rég. 425,00 dans les tables ; **prix USD réel
   maintenant connu : $325.00 / rég. $425.00** (voir §5).

## 5. Découverte annexe : le vrai prix USD du PortaPack

Le prix USD du PortaPack n'avait jamais été obtenu (le cookie `country_code=US`
renvoyait les prix EUR ; le repli JS donnait ~357 $). Il est maintenant établi
par la page d'accueil du vrai site (marché US par défaut) : **$325.00 en solde,
$425.00 régulier, économie de $100.00**. La table USD du clone peut être
corrigée : `portapack-h4m-pro: price {"325.00": 325.0}, compare {"425.00": 425.0}`.

## Sources (fichiers de travail, /tmp — éphémères)

- `home-en.html`, `home-fr.html`, `home-es.html` (accueils, ~1,23 Mo chacun
  décompressés) ; `sdr-en/fr/es.html` ; `sdr-en/fr/es.json`,
  `rftools-en/fr/es.json`, `all-en.json` (products.json, `?limit=250`).
- Script de fetch reconstruit : `/tmp/fetch-lab401.sh`.
