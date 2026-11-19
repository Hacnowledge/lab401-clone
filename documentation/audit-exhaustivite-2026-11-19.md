# Audit d'exhaustivité — clone Lab401 (2026-11-19)

**Date :** 2026-11-19 ~03:30–03:45. **Objet :** vérifier qu'**aucun
produit n'a été oublié** dans le clone, et que chaque collection du clone
contient les mêmes produits que le vrai site. Méthode : comparaison
automatisée, sources du vrai site récupérées le jour même avec les
en-têtes navigateur complets (anti-bot Shopify).

**Conclusion en une phrase : aucune page produit ne manque (0 produit
oublié dans les 3 locales) ; les écarts sont dans les LISTES
(collections), pas dans les produits.**

---

## 1. Méthode et sources

| Source (vrai site) | Ce qu'elle liste | Résultat 2026-11-19 |
|---|---|---|
| `products.json?limit=250` (+ `page=2` = 0 produit) | Produits de la boutique | **182** par locale |
| `sitemap_products_1.xml` (EN/FR/ES) | Produits indexés | **181** par locale |
| `collections/<handle>/products.json?limit=250` (89 collections × 3 locales) | Produits de chaque collection | 89 collections/locale |
| Pages produit directes (`/products/<handle>`, code HTTP) | Existence réelle de la page | 200 pour tous les cas testés |
| Pages de collection directes (`/collections/<handle>`, cartes comptées) | Ce que la page affiche vraiment | voir § 4 |

**Leçons de méthode (déjà connues, confirmées) :**
- `curl` sans en-têtes navigateur donne des **faux 404** — toutes les
  requêtes de cet audit utilisent UA Windows Chrome 120 + `Accept` +
  `Accept-Language` assorti à la locale + `--compressed -L`.
- **Aucune source n'est exhaustive seule** : le sitemap rate le
  PortaPack, `products.json` rate `rfid-field-detector`, la collection
  « all » rate 3 produits. Il faut croiser les sources.
- Premier passage de l'audit des collections : 85 erreurs par locale
  (réponses gzip non décompressées — en-tête `Accept-Encoding: gzip`
  envoyé sans décompression). Corrigé en retirant l'en-tête : 0 erreur
  au second passage. Les chiffres ci-dessous viennent du passage corrigé
  (agrégation de toutes les pages de pagination + filtrage du bruit
  d'extraction : `i`, `1`, `4`, `tag-corrected`…).

---

## 2. Produits : 0 oublié

| Locale | Vrai site (`products.json`) | Clone (pages `.html`) | Manquant | En trop dans le clone |
|---|---|---|---|---|
| EN | 182 | **183** | **0** | `rfid-field-detector` |
| FR | 182 | **186** | **0** | `rfid-field-detector` + 3 pages FR à handle anglais (voir § 3) |
| ES | 182 | **183** | **0** | `rfid-field-detector` |
| Sitemap | 181 | — | — | — |

**Union des sources (vrai site) : 183 produits distincts par locale**
(182 de `products.json` + `rfid-field-detector`). Le clone les a tous.

### 2.1 Le produit fantôme : `rfid-field-detector`

- Page live : **200** sur le vrai site (EN/FR/ES), prix **16,99 €**
  (`data-tax-cents="1699"`, `.js` : prix 1699 cents, indisponible).
- **Absent de `products.json` (182) ET du sitemap (181)** dans les 3
  locales, et d'aucune collection. C'est le seul produit dans ce cas.
- Le clone l'a (pages EN/FR/ES + `.js`) — bien. Son entrée EN dans
  l'index de recherche utilise l'image générique
  `Hamster-Transparent_w600.gif` (défaut connu, voir `products.md`).

### 2.2 Le sitemap a un produit de retard

`products.json` − sitemap = exactement **`portapack-h4m-pro`** dans les
3 locales. Le PortaPack (ajouté à la boutique le 2026-11-18) n'est pas
encore dans le sitemap. Le sitemap ne peut donc pas servir de référence
d'exhaustivité pour les produits récents.

### 2.3 Les 3 produits « orphelins »

Trois produits ont une **page live (200)**, sont dans `products.json`
(182), mais ne sont **dans AUCUNE collection** du vrai site (ni « all »
179, ni aucune des 89 collections) :

| Produit | Prix EUR | Disponibilité | Statut |
|---|---|---|---|
| `hak5-network-mitm-lan-turtle` | 136,00 € | **indisponible** | Orphelin |
| `proxmark-3-rdv4-flash-support` | 34,00 € | **indisponible** | Orphelin |
| `usb-bluetooth-adaptor-hc-06` | 33,00 € | **indisponible** | Orphelin |

- Les 3 sont indisponibles. Ils ont été **retirés des collections** par
  la boutique (probablement abandonnés), mais leurs pages restent en
  ligne et `products.json` les liste toujours.
- **Correction d'une erreur antérieure :** ces 3 produits avaient été
  notés « 404 sur le vrai site (retirés) » dans la documentation — c'est
  **faux** : ils répondent 200 (vérifié le 2026-11-19 avec les bons
  en-têtes ; les 404 d'avant étaient des faux négatifs anti-bot). Leurs
  pages sont conservées dans le clone, et le clone les garde aussi dans
  les collections (capture plus ancienne) — c'est le seul écart de ce
  type qui va dans ce sens (voir § 4.4).
- 4e cas voisin : `keysy-lf-rfid-emulator-duplicator` (64,95 €,
  **disponible**) a été retiré de 2 collections seulement
  (`rfid-badges-lf`, `tags`) mais reste dans « all » et dans
  `products.json`.

---

## 3. Cas particuliers des handles (FR/ES)

- **FR : 3 pages en trop** (186 au lieu de 183) : les pages FR sous
  handles **anglais** (`bus-pirate-5-auxiliary-cable`,
  `digilab-for-flipperzero`, `digilab-module-kit`) sont conservées dans
  le clone **en plus** des pages sous handles français. Sur le vrai site,
  le handle anglais **redirige (302)** vers le français
  (`bus-pirate-5-auxiliary-cable` → `bus-pirate-5-cable-auxiliaire`,
  etc.). Doublons inoffensifs en statique (pas de redirection possible
  sur GitHub Pages), mais à connaître.
- **ES : 2 handles traduits** (`cable-auxiliar-bus-pirate-5`,
  `rubber-ducky-guia-de-bolsillos`) — pages présentes, handles canoniques
  en ES (200, pas de redirection).
- **Écart de prix FR non résolu** (voir `products.md` § 5) : le même
  produit affiche 15,00 € / 62,00 € / 19,00 € sous handle français
  contre 9,95 € / 49,00 € / 14,95 € sous handle anglais dans l'index FR.
  À confirmer sur le vrai site avant d'y toucher.

---

## 4. Collections : les écarts (listes, pas produits)

89 collections par locale. **57 sans écart, 32 avec écart** (EN ; FR/ES
quasi identiques). Les chiffres bruts (« 222 manquants » en EN) sont
trompeurs : la plupart sont des artefacts de pagination. Voici les
**vrais écarts**, classés par cause :

### 4.1 PortaPack absent de 15 collections (à corriger)

La v13 (commit 5b0df951) a ajouté le PortaPack à `sdr-1`, `rf-tools` et
à l'accueil — mais il manque encore dans **15 autres collections**
(dans les 3 locales) :

`frontpage` · `publica` · `hardware` · `pentesting` ·
`pentesting-implants` · `pentesting-iot` ·
`pentesting-red-team-equipment` · `ppb-sdr-devices` ·
`ppb-subghz-devices` · `sdr` · `sdr-portable-devices` ·
`sdr-spectrum-analysers` · `subghz-capture-sniff-replay` ·
`subghz-tools-remote-control-cloning` ·
`subghz-tools-spectrum-analysers` · + `all` et `all-products`
(voir § 4.2–4.3).

C'est le **reste à faire le plus visible** de l'audit : la même opération
que la v13 (cloner la carte, l'adapter, l'insérer à la bonne position),
répétée pour ces collections. Positions exactes à relever sur le vrai
site avant d'insérer (la recherche de placement ne les a pas relevées).

### 4.2 Collection `all` : seulement la page 1 dans le clone

- Vrai site : 179 produits, 5 pages de 36.
- Clone : **36 produits (page 1 seulement)**, aucun fichier
  `all-page-2…`. La pagination existe dans le HTML mais sans liens
  fonctionnels.
- 143 produits « manquants » dans le chiffre brut — leurs pages
  existent, c'est la **liste** qui est incomplète.

### 4.3 `all-products` EN : la page 5 est vide (capture ratée)

- Vrai site : 179 produits, 5 pages (36, 36, 36, 36, 35).
- Clone FR/ES : **181 cartes** (complet : 179 − PortaPack + 3 orphelins
  retirés depuis = 181) — rien à faire.
- Clone EN : **145 cartes** (p.1–4 : 36 chacune, **p.5 : 0 carte**,
  p.6 : 1 carte). La page 5 est revenue vide à la capture (sans même le
  message « No products ») ; la page 6 ne contient que le dernier
  produit. **34 produits ne sont pas listés** en EN (tous ont leur page).
  À re-capturer : `all-products-page-5.html` (36 cartes attendues).
- Note : au moment de la capture, `all-products` comptait 181 produits
  (6 pages : 36×5 + 1) — les 3 orphelins y étaient encore, le PortaPack
  pas encore. 181 − 145 = 36 = exactement la page 5. Le compte est bon.

### 4.4 Produits retirés du vrai site depuis la capture (extras du clone)

Le clone liste dans certaines collections des produits que le vrai site
n'y met plus (capture plus ancienne). Ce ne sont pas des erreurs du
clone, mais un **décalage temporel** :

| Produit | Collections du clone où il est en trop |
|---|---|
| `hak5-network-mitm-lan-turtle` (orphelin) | `hak5`, `hardware`, `pentesting`, `pentesting-computer`, `pentesting-implants-1`, `pentesting-network`, `publica`, `all-products-no-flipper` (+ copie) |
| `proxmark-3-rdv4-flash-support` (orphelin) | `development-tools`, `debug-development-tools-…` (×2), `hardware`, `proxmark`, `publica`, `all-products-no-flipper` (+ copie) |
| `usb-bluetooth-adaptor-hc-06` (orphelin) | `hardware`, `proxmark`, `rfid-tools`, `rfid-tools-accessories`, `all-products` (EN) |
| `keysy-lf-rfid-emulator-duplicator` | `rfid-badges-lf`, `tags` |

Pour une fidélité stricte au site actuel, il faudrait retirer ces
cartes des collections concernées. Leurs **pages produit doivent être
conservées** (elles existent sur le vrai site, 200).

### 4.5 Ce qui N'EST PAS un écart (fausses alertes écartées)

- **`rfid-badges` : page vide des deux côtés.** Le clone affiche 0
  carte (et « No products ») — mais **la page du vrai site affiche
  elle aussi « No products » (0 carte, vérifié le 2026-11-19)** alors
  que son `products.json` liste 27 produits. Particularité du vrai
  site (collection probablement décorative / règles non affichées),
  pas un défaut du clone. Les 26 produits « manquants » du chiffre
  brut sont donc une fausse alerte : leurs pages existent et la page
  de collection est fidèle.
- **4 collections vides dans le clone** (`chameleon-mini`,
  `enterprise-tools`, `lea-tools`, `restricted-products`) : vides aussi
  sur le vrai site (message « collection is empty »).
- **FR/ES `all-products` à 181 cartes** : ce n'est pas une erreur,
  c'est 179 − PortaPack (pas encore ajouté) + 3 orphelins (retirés
  depuis).

---

## 5. Récapitulatif des restes à faire (ordre suggéré)

| # | Correctif | Portée | Effort |
|---|---|---|---|
| 1 | Ajouter la carte PortaPack aux 15 collections du § 4.1 | 15 collections × 3 locales | Moyen (même méthode que v13) |
| 2 | Re-capturer `all-products-page-5.html` (EN) | 1 fichier, 36 cartes | Faible |
| 3 | Capturer les pages 2–5 de la collection `all` | 4 fichiers × 3 locales | Faible |
| 4 | Retirer les cartes des produits orphelins / retirés (§ 4.4) | ~20 collections | Faible (suppressions) |
| 5 | Confirmer l'écart de prix FR des handles traduits (§ 3) | 3 produits | Vérification sur le vrai site |

**Aucun de ces correctifs ne touche aux drapeaux** (gelés depuis la
v12 — voir `recap-discussion.md`).

---

## 6. Fichiers de l'audit (locaux, non poussés)

- `/tmp/products-en.json`, `products-fr.json`, `products-es.json`
  (182 produits/locale, 2026-11-19 03:28) — `/tmp` est éphémère.
- `/tmp/sitemap-products-en/fr/es.xml` (181/locale).
- `/tmp/audit-collections.py` (v1, avec le bug gzip) et
  `/tmp/audit-collections.json` (données brutes réelles).
- `/tmp/audit-collections-v2.py` et `/tmp/audit-collections-v2.json`
  (comparaison corrigée : pagination agrégée, bruit filtré).
- `/tmp/all-products-real.json` (collection « all », 179 produits).
- Pages réelles téléchargées pour l'anatomie :
  `/tmp/real-stealth-decoy-reader.html`,
  `/tmp/real-pandwarf-kaiju-license.html`,
  `/tmp/real-portapack-h4m-pro.html`,
  `/tmp/real-flipper-zero.html`, `/tmp/real-fr-portapack.html`,
  `/tmp/real-rfid-badges.html`, `/tmp/real-all.html`,
  `/tmp/real-all-products.html`.
