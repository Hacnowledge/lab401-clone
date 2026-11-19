# Catégories (collections) — clone Lab401

**Date :** 2026-11-19, mise à jour ~03:45 (audit d'exhaustivité).
**Source des listes : le clone** (`site-clean/collections/`, locale EN), sauf mention contraire. Les prix sont les **prix EUR affichés** (première variante, `price_cents` de `lab401-search-index.json`) ; les prix barrés (compare-at) ne figurent pas dans l'index et ne sont donc pas reproduits ici, sauf pour le PortaPack (voir § SDR et RF Tools).

**Audit du 2026-11-19** (voir `audit-exhaustivite-2026-11-19.md`) : les
listes ci-dessous viennent du clone ; elles diffèrent du vrai site dans
32 collections sur 89. Les écarts principaux : le **PortaPack manque
encore dans 15 collections** (v13 ne l'a ajouté qu'à `sdr-1`, `rf-tools`
et à l'accueil) ; la collection `all` n'a que sa page 1 dans le clone
(36/179) ; `all-products` EN a une page 5 vide (34 produits non listés,
FR/ES complètes) ; les 3 produits orphelins
(`hak5-network-mitm-lan-turtle`, `proxmark-3-rdv4-flash-support`,
`usb-bluetooth-adaptor-hc-06`) sont encore listés dans certaines
collections du clone alors que le vrai site les en a retirés. **La
collection `rfid-badges` est vide dans le clone — mais aussi sur le vrai
site** (« No products »), ce n'est pas un défaut du clone.

**Lecture :** 89 collections EN dans le clone (même nombre en FR et en ES : 89 fichiers chacune). 4 collections sont vides dans le clone (message « collection is empty » sur la page) : `chameleon-mini`, `enterprise-tools`, `lea-tools`, `restricted-products`. Les doublons entre collections sont normaux : un même produit appartient à plusieurs collections (955 entrées produits au total sur la page 1 des collections, 1 408 en comptant toutes les pages de pagination).

**FR / ES :** les collections existent dans les 3 locales avec les mêmes produits, sauf 3 handles traduits en FR (voir `products.md`) : les pages FR des collections lient vers `bus-pirate-5-cable-auxiliaire`, `digilab-pour-flipperzero` et `kit-de-modules-digilab` au lieu des handles anglais.

---

## Collections détaillées : SDR et RF Tools (cas PortaPack)

Ces deux collections sont détaillées parce que le PortaPack H4M Pro doit y être ajouté (il est absent du clone, voir `portapack-placement-research.md`, recherche du 2026-11-19 sur le vrai site). Les listes « vrai site » viennent de cette recherche (pages `collections/sdr-1` et `collections/rf-tools` du vrai site + `products.json?limit=250`) ; les listes « clone » viennent des fichiers `site-clean/collections/sdr-1.html` et `rf-tools.html`.

### SDR — collection `sdr-1` (titre de page : « SDR »)

| | Vrai site (2026-11-19) | Clone (2026-11-19) |
|---|---|---|
| Nombre de produits | **9** | **9** (PortaPack ajouté en v13, commit 5b0df951) |
| Position du PortaPack | **3 / 9** | **3 / 9** ✓ |

**Vrai site — ordre complet :**

| Pos | Produit (EN) | Prix EUR | Rég. |
|----:|--------------|--------:|-----:|
| 1 | Blade RF 2.0 Micro xA4 | 775,00 | 995,00 |
| 2 | SignalSDR Pro | 1 250,00 | — |
| **3** | **PortaPack H4M Pro** | **325,00** | **425,00** |
| 4 | HackRF Pro | 506,00 | — |
| 5 | KrakenSDR | 1 040,00 | — |
| 6 | NanoVNA-F | 140,00 | — |
| 7 | Opera Cake for HackRF | 195,00 | — |
| 8 | TinySA Ultra+ | 209,00 | — |
| 9 | LiteVNA (NanoVNA Compatible) | 195,00 | — |

Titres FR : PortaPack = « PortaPack H4M + HackRF All-in-one », NanoVNA-F = « NanoVNA », Opera Cake = « Opera Cake pour HackRF », TinySA Ultra+ = « TinySA Ultra » (les autres titres sont identiques). Titres ES : PortaPack = « PortaPack H4M + HackRF Todo en uno », NanoVNA-F = « NanoVNA », Opera Cake = « Opera Cake para HackRF », TinySA Ultra+ = « TinySA Ultra ».

**Clone — les 8 produits présents (PortaPack à ajouter en position 3) :**

| Pos | Produit | Handle | Prix EUR |
|----:|---------|--------|--------:|
| 1 | Blade RF 2.0 Micro xA4 / Full-Duplex 2x2 MIMO SDR | `bladerf-sdr-2-micro-xa4` | 749,00 € |
| 2 | SignalSDR Pro / Full-Duplex SDR for 5G Security Research | `signalsdr-pro` | 1100,00 € |
| 3 | HackRF Pro / 100 kHz-6 GHz Software Defined Radio | `hackrf-pro` | 400,00 € |
| 4 | KrakenSDR / Five-Receiver Radio Direction Finding Kit | `krakensdr` | 1020,00 € |
| 5 | NanoVNA-F / 10 kHz-1.5 GHz Vector Network Analyser | `nanovna` | 110,00 € |
| 6 | Opera Cake for HackRF / Automatic RF Antenna Switching | `opera-cake-for-hackrf` | 190,00 € |
| 7 | TinySA Ultra+ / Spectrum Analyser with 5.4 GHz Ultra Mode | `tinysa-ultra` | 163,00 € |
| 8 | LiteVNA (NanoVNA Compatible) / 50 kHz-6.3 GHz Analyser | `litevna` | 192,00 € |

### RF Tools — collection `rf-tools` (titre de page : « SubGHz Tools »)

| | Vrai site (2026-11-19) | Clone (2026-11-19) |
|---|---|---|
| Nombre de produits | **8** | **7** (PortaPack manquant) |
| Position du PortaPack | **2 / 8** | absent |

**Vrai site — ordre :** 1. PandwaRF Rogue Pro · **2. PortaPack H4M Pro (325,00 € / rég. 425,00 €)** · 3. Flux Capacitor · 4. TinySA Ultra+ · 5. Flipper Zero · 6. KIISU · 7. PandwaRF Marauder · 8. PandwaRF Kaiju Pro License. (Ordre confirmé par `products.json` de la collection ; les prix des positions 1 et 4 à 8 sont ceux de l'index du clone, voir tableau ci-dessous. La section « SubGHz Tools » de l'accueil du vrai site reprend les 4 premiers de cette collection, dans le même ordre.)

**Clone — les 7 produits présents (PortaPack à ajouter en position 2) :**

| Pos | Produit | Handle | Prix EUR |
|----:|---------|--------|--------:|
| 1 | PandwaRF Rogue Pro / RF Remote Capture and Analysis | `pandwarf-rogue-pro` | 579,00 € |
| 2 | Flux Capacitor / Flipper Zero CC1101 Radio Amplifier | `flux-capacitor` | 65,00 € |
| 3 | TinySA Ultra+ / Spectrum Analyser with 5.4 GHz Ultra Mode | `tinysa-ultra` | 163,00 € |
| 4 | Flipper Zero / Portable RFID, Sub-GHz & Hardware Multitool | `flipper-zero` | 149,17 € |
| 5 | KIISU - Compact Flipper alternative / RFID & NFC Tool | `kiisu` | 79,00 € |
| 6 | PandwaRF Marauder / Autonomous Dual-Frequency RF Capture | `pandwarf-marauder` | 979,00 € |
| 7 | PandwaRF Kaiju Pro License / Rolling-Code Analysis | `pandwarf-kaiju-license` | 290,00 € |

---

## Toutes les collections (clone, locale EN, ordre alphabétique)

Nombre de produits = produits listés dans le clone. Pour les 6 collections paginées, le total fusionne toutes les pages ; le détail page par page est indiqué. L'ordre des produits est l'ordre d'affichage sur la page (page 1 puis pages suivantes).

### _Lab401 Flipper Accessories (`_lab401-flipper-accessories`) — 3 produit(s)

| Pos | Produit | Handle | Prix EUR |
|----:|---------|--------|--------:|
| 1 | Lab401 HardShell for Flipper Zero / Case & GPIO Guards | `lab401-hardshell-for-flipper-zero` | 29,95 € |
| 2 | Light Messenger - POV Light Painter for Flipper Zero | `light-messenger` | 29,00 € |
| 3 | DigiLab for FlipperZero / SPI, I2C & Signal Probing | `digilab-for-flipperzero` | 49,00 € |

### All Products (`all-products`) — 145 produit(s)

Collection paginée — total fusionné : **145** produits (all-products-page-2.html : 36, all-products-page-3.html : 36, all-products-page-4.html : 36, all-products-page-5.html : 0, all-products-page-6.html : 1, all-products.html : 36).
**Anomalie :** la page 5 (`all-products-page-5.html`) est vide (capture partielle, 197 Ko) et la page 6 ne contient qu'1 produit ; le total du clone (145) est inférieur aux 179 produits de la collection « all » sur le vrai site (mesuré 2026-11-19). Écart à vérifier.

| Pos | Produit | Handle | Prix EUR |
|----:|---------|--------|--------:|
| 1 | Lab401 HardShell for Flipper Zero / Case & GPIO Guards | `lab401-hardshell-for-flipper-zero` | 29,95 € |
| 2 | O.MG Plug / Wireless USB Keystroke Injection Platform | `o-mg-plug-elite` | 120,00 € |
| 3 | O.MG Adapter Elite / USB-C Payloads and Wireless Control | `o-mg-adapter-elite` | 295,00 € |
| 4 | O.MG Unblocker / WiFi-Controlled USB Payload Device | `o-mg-unblocker` | 210,00 € |
| 5 | KIISU - Compact Flipper alternative / RFID & NFC Tool | `kiisu` | 79,00 € |
| 6 | AWOK GPS Antenna AD-301 / Active Multi-System Antenna | `awok-gps-antenna-ad-301` | 45,00 € |
| 7 | MIFARE Classic® Compatible 1K Gen1a FPC UID Tags / 5 Pack | `mifare-classic-compatible-1k-uid-modifiable-gen1a-tiny-fpc-tags-pack-of-5` | 4,95 € |
| 8 | 13.56MHZ RFID Field Strength Meter / Passive NFC Testing | `13-56mhz-rfid-field-strength-meter` | 80,00 € |
| 9 | SkimmerGuard / ATM & Payment Card Skimmer Detector | `skimmerguard` | 49,00 € |
| 10 | PPE Stealth Decoy Reader Spare Battery / 3.7V 1800mAh | `ppe-extra-stealth-decoy-reader-battery` | 15,00 € |
| 11 | Doppelgänger Core RFID Dev Board / Wiegand and PIN Capture | `doppelganger-core-rfid-dev-board` | 60,00 € |
| 12 | PPE 2-in-1 Fast USB-C Battery Charger / Dual LiPo | `ppe-2-in-1-fast-usb-c-battery-charger` | 30,00 € |
| 13 | PPE Long Range Reader Power Supply / 25,600mAh Battery | `ppe-long-range-reader-power-supply` | 255,00 € |
| 14 | Stealth Decoy Reader / RFID and PIN Audit Capture | `stealth-decoy-reader` | 375,00 € |
| 15 | Dual Mode Paxton Long Range / Stealth Decoy Reader | `dual-mode-paxton-long-range-stealth-decoy-reader` | 475,00 € |
| 16 | Long-range MaxiProx 5375 125KHz Capture System | `long-range-maxiprox-5375-125khz-capture-system` | 995,00 € |
| 17 | Long-range iCLASS RFID Capture System / Up to 45 cm | `ppe-iclass-longrange-rfid-capture-system` | 895,00 € |
| 18 | MIFARE Classic® Compatible 4K Gen3 / Lockable UID Card | `mifare-classic-compatible-4k-gen3` | 9,95 € |
| 19 | WHIDBoard Pro / Hardware Auditing & Firmware Toolkit | `whidboard-pro` | 295,00 € |
| 20 | CANBus Module for Flipper Zero / CAN & OBD-II Diagnostics | `ec-canbus` | 39,00 € |
| 21 | PandwaRF Kaiju Pro License / Rolling-Code Analysis | `pandwarf-kaiju-license` | 290,00 € |
| 22 | Alfa AWUS036ACHM / Dual-Band WiFi Pentesting Adapter | `alpha-awus036achm` | 59,00 € |
| 23 | PandwaRF Rogue Pro / RF Remote Capture and Analysis | `pandwarf-rogue-pro` | 579,00 € |
| 24 | Tiny NTAG® 213 LED Detector Tags / 13.56MHz, 10 Pack | `tiny-detector-led-ntag213-10p` | 19,95 € |
| 25 | MIFARE Classic® Compatible 1K Gen2a FPC UID Tags / 5 Pack | `tiny-mf-gen2a-one-time-write` | 9,95 € |
| 26 | MIFARE Classic® Compatible 1K Gen2 FPC UID Tags / 5 Pack | `tiny-mf-gen1a-5pc` | 4,95 € |
| 27 | TermDriver 2 / USB Serial Adapter & Standalone Monitor | `termdriver2` | 29,00 € |
| 28 | I2CDriver / USB I2C Control, Capture & Logic Analysis | `i2c-driver` | 35,00 € |
| 29 | SPIDriver / USB SPI Debugging & Flash Programming Tool | `spi-driver` | 35,00 € |
| 30 | LAB401 Pin / Gold-Plated Badge for Shirts & Bags | `lab401-pin` | 3,95 € |
| 31 | PandwaRF Marauder / Autonomous Dual-Frequency RF Capture | `pandwarf-marauder` | 979,00 € |
| 32 | Digilab Module Kit / BMP280 & LM75A I2C Sensor Pack | `digilab-module-kit` | 14,95 € |
| 33 | HackRF Pro / 100 kHz-6 GHz Software Defined Radio | `hackrf-pro` | 400,00 € |
| 34 | DigiLab for FlipperZero / SPI, I2C & Signal Probing | `digilab-for-flipperzero` | 49,00 € |
| 35 | RFID Field Detector Ultra - LF/HF/UHF / Passive Detection | `rfid-field-detector-ultra` | 24,95 € |
| 36 | MACOBOX - Hardware Pentest Platform / Firmware Analysis | `macobox-hardware-pentest-platform` | 9700,00 € |
| 37 | SignalSDR Pro / Full-Duplex SDR for 5G Security Research | `signalsdr-pro` | 1100,00 € |
| 38 | iCODE SLI Gen2 UID Changeable ISO15693 / 8-byte UID Card | `icode-sli-gen2-uid-changeable-iso15693` | 29,95 € |
| 39 | MIFARE Classic® Compatible 1K Gen2a One-Time UID Coins, 5 | `mifare-classic-compatible-1k-one-time-write-uid-modifiable-coin-tag-gen2a` | 15,00 € |
| 40 | Light Messenger - POV Light Painter for Flipper Zero | `light-messenger` | 29,00 € |
| 41 | Flux Capacitor / Flipper Zero CC1101 Radio Amplifier | `flux-capacitor` | 65,00 € |
| 42 | IR Blaster / Rabbit Labs Infrared for Flipper Zero | `ir-blaster` | 34,95 € |
| 43 | TinySA Ultra+ / Spectrum Analyser with 5.4 GHz Ultra Mode | `tinysa-ultra` | 163,00 € |
| 44 | NanoVNA-F / 10 kHz-1.5 GHz Vector Network Analyser | `nanovna` | 110,00 € |
| 45 | PiKVM v4 Plus - Hardware RAT / Remote Computer Control | `pikvm-v4-plus-hardware-rat` | 359,00 € |
| 46 | KrakenSDR / Five-Receiver Radio Direction Finding Kit | `krakensdr` | 1020,00 € |
| 47 | ESP RFID Tool / WiFi Wiegand Capture and Replay Tool | `wiegand-sniffer-esp-rfid-tool` | 30,00 € |
| 48 | Cynthion / USB Protocol Analysis & Device Development | `cynthion` | 209,00 € |
| 49 | Bus Pirate 5 SIM & Smart IC Adapter / Card Interface | `bus-pirate-5-sim-smart-ic-adapter` | 14,95 € |
| 50 | Bus Pirate 5 Flash Adapters / DIP8, SOP8 & WSON8 Kit | `bus-pirate-5-flash-adaptors` | 34,95 € |
| 51 | Packet Squirrel Textbook / Network Capture and Payloads | `packet-squirrel-textbook` | 49,00 € |
| 52 | Rubber Ducky Textbook / HID Injection and DuckyScript | `rubber-ducky-textbook` | 60,00 € |
| 53 | Rubber Ducky Pocket Guide / DuckyScript Payload Manual | `rubber-ducky-pocket-guide` | 19,95 € |
| 54 | Packet Squirrel Pocket Guide / Mark II Payload Scripting | `packet-squirrel-pocket-guide` | 19,95 € |
| 55 | Packet Squirrel (Mark II) / Ethernet Network Testing | `packet-squirrel-mark-ii` | 180,00 € |
| 56 | Opera Cake for HackRF / Automatic RF Antenna Switching | `opera-cake-for-hackrf` | 190,00 € |
| 57 | Bus Pirate 5 Raspberry Pi Pico Headers / Right-Angle | `bus-pirate-5-raspberry-pi-pico-headers` | 5,95 € |
| 58 | Bus Pirate 5 KF141 Quick Connect / Spring-Clamp Adapter | `bus-pirate-5-kf141-quick-connect` | 6,95 € |
| 59 | Bus Pirate 5 Auxiliary Cable / Logic Analyzer Connection | `bus-pirate-5-auxiliary-cable` | 9,95 € |
| 60 | Bus Pirate 5 Auxiliary Cable Set / Jumpers & Splitters | `bus-pirate-5-coloured-auxiliary-cable` | 11,95 € |
| 61 | Bus Pirate 5 Probe Kit / Hooks & Breadboard Connections | `bus-pirate-5-auxilary-probe-kit` | 11,95 € |
| 62 | Bus Pirate 5 / Hardware Debugging & Protocol Interface | `bus-pirate-v5` | 89,00 € |
| 63 | Flipper Zero Video Game Module / RP2040 & Video Output | `flipper-zero-video-game-module` | 45,85 € |
| 64 | GreatFET One - Daffodil / Breadboard Prototyping Shield | `greatfet-one-daffodil` | 35,00 € |
| 65 | GreatFET One / Open-Source Hardware Debugging Platform | `greatfet` | 125,00 € |
| 66 | Chameleon Ultra DevKit / LF and HF RFID Development | `chameleon-ultra-devkit` | 129,00 € |
| 67 | Chameleon Lite / 13.56MHz and 125KHz RFID Emulator | `chameleon-lite` | 59,00 € |
| 68 | Chameleon Ultra / Wireless LF and HF RFID Emulator | `chameleon-ultra` | 129,00 € |
| 69 | Lab401 Pentest Sticker Pack / Packs of 10, 20 or 50 | `lab401-hacker-stickers` | 8,00 € |
| 70 | BugBlat miniSniffer 2 / USB Traffic Capture & Analysis | `bugblat-minisniffer-v2` | 149,00 € |
| 71 | MIFARE DESFire® Compatible UID/ATQA/SAK/ATS/APDU Card | `mifare-desfire-ev2-compatible-modifiable-uid-atqa-sak-ats-apdu` | 29,99 € |
| 72 | RFID Pentester Tag Pack / Basic, Standard and Complete | `rfid-pentester-tag-pack` | 90,00 € |
| 73 | Ultimate Magic Card (Gen4) / Configurable NFC Emulation | `ultimate-magic-card-gen4` | 29,00 € |
| 74 | Flipper Zero Screen Protectors / Three-Pack Screen Care | `flipper-zero-screen-protectors` | 7,50 € |
| 75 | O.MG Cable Pack / USB Payload Cables and Programming Tools | `o-mg-cable-pack` | 1190,00 € |
| 76 | O.MG Malicious Cable Detector / USB Testing and Blocking | `o-mg-malicious-cable-detector` | 69,00 € |
| 77 | O.MG Cable Programmer (USB A+C) / Setup and Flashing | `o-mg-cable-programmer-usb-a` | 49,00 € |
| 78 | O.MG Cable / Wireless USB Keystroke Injection Platform | `o-mg-cable` | 295,00 € |
| 79 | Flipper Zero Wifi Devboard / ESP32-S2 WiFi & Debugging | `flipper-zero-wifi-devboard` | 32,50 € |
| 80 | Flipper Zero Prototyping Boards / Custom GPIO Modules | `flipper-zero-prototyping-boards` | 9,08 € |
| 81 | Flipper Zero Silicone Case / Soft-Touch Port Access | `flipper-zero-silicon-case` | 13,33 € |
| 82 | Flipper Zero / Portable RFID, Sub-GHz & Hardware Multitool | `flipper-zero` | 149,17 € |
| 83 | UHFKill / Permanent UHF RFID Tag Deactivation Tool | `uhfkill` | 1495,00 € |
| 84 | MIFARE Classic® Compatible 1K 4-byte Gen1 Blank Tag | `mifare-classic-1k-4-byte-compatible` | 2,50 € |
| 85 | MIFARE Classic® Compatible 1K 4-byte Gen2 Blank Tag | `mifare-classic-1k-4-byte-compatible-gen2` | 2,50 € |
| 86 | MIFARE Classic® Compatible 1K 4-byte Gen2a Blank Tag | `mifare-classic-1k-4-byte-compatible-gen2a` | 2,95 € |
| 87 | MIFARE Classic® Compatible 1K 7-byte Gen2 Blank Tag | `mifare-classic-1k-7-byte-uid-compatible-gen2` | 21,95 € |
| 88 | MIFARE Classic® Compatible 4K 7-byte Gen2 Blank Tag | `mifare-classic-4k-7-byte-uid-compatible-gen2` | 21,95 € |
| 89 | MIFARE Classic® Compatible 4K 4-byte Gen2 Blank Tag | `mifare-classic-4k-4-byte-uid-compatible-gen2` | 21,95 € |
| 90 | MIFARE Ultralight® Compatible Blank Tag / iCopy-X UL | `mifare-ultralight-compatible` | 21,95 € |
| 91 | MIFARE Ultralight® C Compatible Blank Tag / iCopy-X | `mifare-ultralight-c-compatible` | 21,95 € |
| 92 | MIFARE Ultralight® EV1 Compatible Blank Tag / iCopy-X | `mifare-ultralight-c-compatible-1` | 21,95 € |
| 93 | MIFARE NTAG® Compatible Blank Tag / iCopy-X NTAG 21x | `mifare-ntag-compatible` | 21,95 € |
| 94 | ICODE® Compatible Blank Tag / SLI/SLIX for iCopy-X | `icode-compatible` | 21,95 € |
| 95 | iCLASS® Legacy Compatible Blank Tag / iCopy-X iCL | `iclass-legacy-compatible` | 24,95 € |
| 96 | iCLASS® Elite Compatible Blank Tag / iCopy-X iCE | `iclass-elite-compatible` | 29,95 € |
| 97 | iCLASS® SE/SEOS Compatible Blank Tag / iCopy-X | `iclass-se-seos-compatible` | 29,95 € |
| 98 | T5577 Low Frequency Blank Tag / iCopy-X ID1 RFID Blank | `t5577-low-frequency-blank` | 2,50 € |
| 99 | iCopy-X Basic Tag Pack / 16 LF and HF RFID Blanks | `icopy-x-basic-tag-pack` | 19,95 € |
| 100 | iCopy-X Intermediate Tag Pack / 16 RFID Blank Cards | `icopy-x-intermediate-tag-pack` | 129,95 € |
| 101 | iCopy-X Advanced Tag Pack / 16 LF and HF Blank Cards | `icopy-x-advanced-tag-pack` | 189,95 € |
| 102 | iCS Decoder / iCLASS® SE / SEOS Accessory for iCopy-X | `ics-decoder-iclass-se-seos-cloner-decoder` | 425,00 € |
| 103 | ICopy-XS / Portable LF and HF RFID Cloning Device | `icopy-x` | 375,00 € |
| 104 | Multi-RFID Keyfob / Six Passive LF and HF Blank Tags | `multi-rfid-keyfob` | 49,00 € |
| 105 | RFID Range Extenders / Passive 13.56MHz Antennas | `rfid-antenna-extender` | 35,00 € |
| 106 | USB Bluetooth Adaptor HC-06 / Proxmark 3 RDV4.01 | `usb-bluetooth-adaptor-hc-06` | 29,00 € |
| 107 | ProxRF 125KHz Biochip Antenna / Proxmark RFID Accessory | `proxrf-125khz-biochip-antenna` | 29,99 € |
| 108 | MIFARE Mini® Compatible 0.3K Gen2 Direct Write UID Card | `mifare-mini-compatible-uid-modifable-direct-write` | 29,95 € |
| 109 | MIFARE Classic® Compatible 1K Gen1a UID Tags / Pack of 5 | `mifare-compatible-1k-uid-modifiable` | 24,99 € |
| 110 | Phantom Drive / AES-256 USB Storage with Hidden Partition | `phantom-drive` | 49,95 € |
| 111 | Proxmark 5 - Wireless + Battery Module / Mobile RFID | `proxmark-5-wireless-battery-module` | 99,00 € |
| 112 | Proxmark 5 / LF and HF RFID Research and Emulation | `proxmark-5` | 325,00 € |
| 113 | Industrial Handheld UHF Reader / Tag Deactivation Checks | `industrial-handheld-uhf-reader` | 975,00 € |
| 114 | UHFKill - Tag Testing Service / UHF Compatibility Reports | `uhfkill-tag-testing-service` | 250,00 € |
| 115 | SilverBullet 2 / Disc-Detainer Lock Pick & Decoder | `silver-bullet-2` | 600,00 € |
| 116 | Project Reboot: Hardware Audit Training Target | `project-reboot-hardware-target` | 102,50 € |
| 117 | Shark Jack Display / Interactive Ethernet Auditing Tool | `shark-jack-display` | 185,00 € |
| 118 | US Bump Key Kit / Six CNC-Cut North American Profiles | `us-bump-key-kit` | 36,00 € |
| 119 | Bump Key Hammer / Sparrows Semi-Rigid Percussive Tool | `bump-key-hammer` | 16,95 € |
| 120 | "Under-the-door" Bypass Tool / Lever-Handle Audit Tool | `under-the-door-bypass-tool` | 55,00 € |
| 121 | Cutaway Practice Cylinder / Re-Pinnable 6-Pin Euro Lock | `6-pin-cutaway-training-cylinder` | 60,00 € |
| 122 | Replacement Electric Pick Blades / Kronos Pack of 10 | `replacement-electric-pick-blades` | 30,00 € |
| 123 | Key Molding Kit / Metal Key Duplication in the Field | `key-molding-kit` | 129,00 € |
| 124 | Creeper Case / Lockpick Storage with Luminous Backing | `creeper-case` | 15,95 € |
| 125 | Kronos Electric Pick / Adjustable Pin-Tumbler Pick Gun | `kronos-electric-pick` | 215,00 € |
| 126 | Lockpick Kit / Hooks, Rakes & Six Tension Wrenches | `lockpick-kit` | 49,95 € |
| 127 | EU Bump Key Kit / Six CNC-Cut European Lock Profiles | `european-bump-key-kit` | 36,00 € |
| 128 | Lock Bypass Kit / Door, Padlock & Combination-Lock Tools | `lock-bypass-kit` | 110,00 € |
| 129 | LIFT'D: Door Bypass Tools / Door-Mounted Pack of 10 | `liftd-door-bypass-tools` | 20,00 € |
| 130 | FIT'D: Door Bypass Tools / Door-Frame Audit Pack of 10 | `fitd-door-bypass-tools` | 20,00 € |
| 131 | ChipWhisperer - HuskyPlus / Side-Channel & Glitching | `chipwhisperer-huskyplus` | 1195,00 € |
| 132 | ATLAS: Standard Licence / 1-Year Android Audit Platform | `atlas-1-year-licence` | 120,00 € |
| 133 | Glytch Ethernet Module for Pineapple Pager / 10/100 LAN | `glytch-ethernet-module-for-pineapple-pager` | 59,00 € |
| 134 | Glytch Mesh Module for Pineapple Pager / LoRa Messaging | `glytch-mesh-module-for-pineapple-pager` | 79,00 € |
| 135 | Glytch GPS Module for Pineapple Pager / GPS Wardriving | `glytch-gps-module-for-pineapple-pager` | 79,00 € |
| 136 | USBKill Logo Pin / Gold-Plated Hardened Brass Badge | `usbkill-invader-pin-copy` | 12,00 € |
| 137 | USBKill Invader Pin / Decorative Shirt & Bag Badge | `usbkill-invader-pin` | 15,00 € |
| 138 | LiteVNA (NanoVNA Compatible) / 50 kHz-6.3 GHz Analyser | `litevna` | 192,00 € |
| 139 | Slim Shady - IR Blaster / Flipper Zero Wide-Angle IR | `slim-shady-ir-blaster` | 68,00 € |
| 140 | MastaBlasta - IR Blaster / Flipper Zero Focused Infrared | `masta-blasta-ir-blaster` | 52,00 € |
| 141 | Lab401 microSD Card for Flipper Zero / 8GB Storage | `lab401-microsd-card-for-flipper-zero` | 16,67 € |
| 142 | Faulty Cat / Portable EMFI & Voltage Glitching Tool | `faultycat` | 165,00 € |
| 143 | NFC Booster Antenna for Flipper Zero / Passive NFC Boost | `nfc-booster-antenna-for-flipper-zero` | 10,00 € |
| 144 | 13.56MHz RFID Range Boosters / Passive NFC Antennas | `13-56mhz-rfid-range-boosters` | 10,00 € |
| 145 | NFC Range Extender for Flipper Zero / Passive Antennas | `nfc-range-extender-for-flipper-zero` | 75,00 € |

### All Products / No Flipper (`all-products-no-flipper`) — 174 produit(s)

Collection paginée — total fusionné : **174** produits (all-products-no-flipper-page-2.html : 36, all-products-no-flipper-page-3.html : 36, all-products-no-flipper-page-4.html : 36, all-products-no-flipper-page-5.html : 30, all-products-no-flipper.html : 36).

| Pos | Produit | Handle | Prix EUR |
|----:|---------|--------|--------:|
| 1 | Lab401 HardShell for Flipper Zero / Case & GPIO Guards | `lab401-hardshell-for-flipper-zero` | 29,95 € |
| 2 | O.MG Plug / Wireless USB Keystroke Injection Platform | `o-mg-plug-elite` | 120,00 € |
| 3 | O.MG Adapter Elite / USB-C Payloads and Wireless Control | `o-mg-adapter-elite` | 295,00 € |
| 4 | O.MG Unblocker / WiFi-Controlled USB Payload Device | `o-mg-unblocker` | 210,00 € |
| 5 | KIISU - Compact Flipper alternative / RFID & NFC Tool | `kiisu` | 79,00 € |
| 6 | AWOK GPS Antenna AD-301 / Active Multi-System Antenna | `awok-gps-antenna-ad-301` | 45,00 € |
| 7 | MIFARE Classic® Compatible 1K Gen1a FPC UID Tags / 5 Pack | `mifare-classic-compatible-1k-uid-modifiable-gen1a-tiny-fpc-tags-pack-of-5` | 4,95 € |
| 8 | 13.56MHZ RFID Field Strength Meter / Passive NFC Testing | `13-56mhz-rfid-field-strength-meter` | 80,00 € |
| 9 | SkimmerGuard / ATM & Payment Card Skimmer Detector | `skimmerguard` | 49,00 € |
| 10 | PPE Stealth Decoy Reader Spare Battery / 3.7V 1800mAh | `ppe-extra-stealth-decoy-reader-battery` | 15,00 € |
| 11 | Doppelgänger Core RFID Dev Board / Wiegand and PIN Capture | `doppelganger-core-rfid-dev-board` | 60,00 € |
| 12 | PPE 2-in-1 Fast USB-C Battery Charger / Dual LiPo | `ppe-2-in-1-fast-usb-c-battery-charger` | 30,00 € |
| 13 | PPE Long Range Reader Power Supply / 25,600mAh Battery | `ppe-long-range-reader-power-supply` | 255,00 € |
| 14 | Stealth Decoy Reader / RFID and PIN Audit Capture | `stealth-decoy-reader` | 375,00 € |
| 15 | Dual Mode Paxton Long Range / Stealth Decoy Reader | `dual-mode-paxton-long-range-stealth-decoy-reader` | 475,00 € |
| 16 | Long-range MaxiProx 5375 125KHz Capture System | `long-range-maxiprox-5375-125khz-capture-system` | 995,00 € |
| 17 | Long-range iCLASS RFID Capture System / Up to 45 cm | `ppe-iclass-longrange-rfid-capture-system` | 895,00 € |
| 18 | MIFARE Classic® Compatible 4K Gen3 / Lockable UID Card | `mifare-classic-compatible-4k-gen3` | 9,95 € |
| 19 | WHIDBoard Pro / Hardware Auditing & Firmware Toolkit | `whidboard-pro` | 295,00 € |
| 20 | CANBus Module for Flipper Zero / CAN & OBD-II Diagnostics | `ec-canbus` | 39,00 € |
| 21 | PandwaRF Kaiju Pro License / Rolling-Code Analysis | `pandwarf-kaiju-license` | 290,00 € |
| 22 | Alfa AWUS036ACHM / Dual-Band WiFi Pentesting Adapter | `alpha-awus036achm` | 59,00 € |
| 23 | PandwaRF Rogue Pro / RF Remote Capture and Analysis | `pandwarf-rogue-pro` | 579,00 € |
| 24 | Tiny NTAG® 213 LED Detector Tags / 13.56MHz, 10 Pack | `tiny-detector-led-ntag213-10p` | 19,95 € |
| 25 | MIFARE Classic® Compatible 1K Gen2a FPC UID Tags / 5 Pack | `tiny-mf-gen2a-one-time-write` | 9,95 € |
| 26 | MIFARE Classic® Compatible 1K Gen2 FPC UID Tags / 5 Pack | `tiny-mf-gen1a-5pc` | 4,95 € |
| 27 | TermDriver 2 / USB Serial Adapter & Standalone Monitor | `termdriver2` | 29,00 € |
| 28 | I2CDriver / USB I2C Control, Capture & Logic Analysis | `i2c-driver` | 35,00 € |
| 29 | SPIDriver / USB SPI Debugging & Flash Programming Tool | `spi-driver` | 35,00 € |
| 30 | LAB401 Pin / Gold-Plated Badge for Shirts & Bags | `lab401-pin` | 3,95 € |
| 31 | PandwaRF Marauder / Autonomous Dual-Frequency RF Capture | `pandwarf-marauder` | 979,00 € |
| 32 | Digilab Module Kit / BMP280 & LM75A I2C Sensor Pack | `digilab-module-kit` | 14,95 € |
| 33 | HackRF Pro / 100 kHz-6 GHz Software Defined Radio | `hackrf-pro` | 400,00 € |
| 34 | DigiLab for FlipperZero / SPI, I2C & Signal Probing | `digilab-for-flipperzero` | 49,00 € |
| 35 | RFID Field Detector Ultra - LF/HF/UHF / Passive Detection | `rfid-field-detector-ultra` | 24,95 € |
| 36 | MACOBOX - Hardware Pentest Platform / Firmware Analysis | `macobox-hardware-pentest-platform` | 9700,00 € |
| 37 | SignalSDR Pro / Full-Duplex SDR for 5G Security Research | `signalsdr-pro` | 1100,00 € |
| 38 | iCODE SLI Gen2 UID Changeable ISO15693 / 8-byte UID Card | `icode-sli-gen2-uid-changeable-iso15693` | 29,95 € |
| 39 | MIFARE Classic® Compatible 1K Gen2a One-Time UID Coins, 5 | `mifare-classic-compatible-1k-one-time-write-uid-modifiable-coin-tag-gen2a` | 15,00 € |
| 40 | Light Messenger - POV Light Painter for Flipper Zero | `light-messenger` | 29,00 € |
| 41 | Flux Capacitor / Flipper Zero CC1101 Radio Amplifier | `flux-capacitor` | 65,00 € |
| 42 | IR Blaster / Rabbit Labs Infrared for Flipper Zero | `ir-blaster` | 34,95 € |
| 43 | TinySA Ultra+ / Spectrum Analyser with 5.4 GHz Ultra Mode | `tinysa-ultra` | 163,00 € |
| 44 | NanoVNA-F / 10 kHz-1.5 GHz Vector Network Analyser | `nanovna` | 110,00 € |
| 45 | PiKVM v4 Plus - Hardware RAT / Remote Computer Control | `pikvm-v4-plus-hardware-rat` | 359,00 € |
| 46 | ESP RFID Tool / WiFi Wiegand Capture and Replay Tool | `wiegand-sniffer-esp-rfid-tool` | 30,00 € |
| 47 | Cynthion / USB Protocol Analysis & Device Development | `cynthion` | 209,00 € |
| 48 | Bus Pirate 5 SIM & Smart IC Adapter / Card Interface | `bus-pirate-5-sim-smart-ic-adapter` | 14,95 € |
| 49 | Bus Pirate 5 Flash Adapters / DIP8, SOP8 & WSON8 Kit | `bus-pirate-5-flash-adaptors` | 34,95 € |
| 50 | Packet Squirrel Textbook / Network Capture and Payloads | `packet-squirrel-textbook` | 49,00 € |
| 51 | Rubber Ducky Textbook / HID Injection and DuckyScript | `rubber-ducky-textbook` | 60,00 € |
| 52 | Rubber Ducky Pocket Guide / DuckyScript Payload Manual | `rubber-ducky-pocket-guide` | 19,95 € |
| 53 | Packet Squirrel Pocket Guide / Mark II Payload Scripting | `packet-squirrel-pocket-guide` | 19,95 € |
| 54 | Packet Squirrel (Mark II) / Ethernet Network Testing | `packet-squirrel-mark-ii` | 180,00 € |
| 55 | Opera Cake for HackRF / Automatic RF Antenna Switching | `opera-cake-for-hackrf` | 190,00 € |
| 56 | Bus Pirate 5 Raspberry Pi Pico Headers / Right-Angle | `bus-pirate-5-raspberry-pi-pico-headers` | 5,95 € |
| 57 | Bus Pirate 5 KF141 Quick Connect / Spring-Clamp Adapter | `bus-pirate-5-kf141-quick-connect` | 6,95 € |
| 58 | Bus Pirate 5 Auxiliary Cable / Logic Analyzer Connection | `bus-pirate-5-auxiliary-cable` | 9,95 € |
| 59 | Bus Pirate 5 Auxiliary Cable Set / Jumpers & Splitters | `bus-pirate-5-coloured-auxiliary-cable` | 11,95 € |
| 60 | Bus Pirate 5 Probe Kit / Hooks & Breadboard Connections | `bus-pirate-5-auxilary-probe-kit` | 11,95 € |
| 61 | Bus Pirate 5 / Hardware Debugging & Protocol Interface | `bus-pirate-v5` | 89,00 € |
| 62 | GreatFET One - Daffodil / Breadboard Prototyping Shield | `greatfet-one-daffodil` | 35,00 € |
| 63 | GreatFET One / Open-Source Hardware Debugging Platform | `greatfet` | 125,00 € |
| 64 | Chameleon Ultra DevKit / LF and HF RFID Development | `chameleon-ultra-devkit` | 129,00 € |
| 65 | Chameleon Lite / 13.56MHz and 125KHz RFID Emulator | `chameleon-lite` | 59,00 € |
| 66 | Chameleon Ultra / Wireless LF and HF RFID Emulator | `chameleon-ultra` | 129,00 € |
| 67 | Lab401 Pentest Sticker Pack / Packs of 10, 20 or 50 | `lab401-hacker-stickers` | 8,00 € |
| 68 | BugBlat miniSniffer 2 / USB Traffic Capture & Analysis | `bugblat-minisniffer-v2` | 149,00 € |
| 69 | MIFARE DESFire® Compatible UID/ATQA/SAK/ATS/APDU Card | `mifare-desfire-ev2-compatible-modifiable-uid-atqa-sak-ats-apdu` | 29,99 € |
| 70 | RFID Pentester Tag Pack / Basic, Standard and Complete | `rfid-pentester-tag-pack` | 90,00 € |
| 71 | Ultimate Magic Card (Gen4) / Configurable NFC Emulation | `ultimate-magic-card-gen4` | 29,00 € |
| 72 | O.MG Cable Pack / USB Payload Cables and Programming Tools | `o-mg-cable-pack` | 1190,00 € |
| 73 | O.MG Malicious Cable Detector / USB Testing and Blocking | `o-mg-malicious-cable-detector` | 69,00 € |
| 74 | O.MG Cable Programmer (USB A+C) / Setup and Flashing | `o-mg-cable-programmer-usb-a` | 49,00 € |
| 75 | O.MG Cable / Wireless USB Keystroke Injection Platform | `o-mg-cable` | 295,00 € |
| 76 | UHFKill / Permanent UHF RFID Tag Deactivation Tool | `uhfkill` | 1495,00 € |
| 77 | MIFARE Classic® Compatible 1K 4-byte Gen1 Blank Tag | `mifare-classic-1k-4-byte-compatible` | 2,50 € |
| 78 | MIFARE Classic® Compatible 1K 4-byte Gen2 Blank Tag | `mifare-classic-1k-4-byte-compatible-gen2` | 2,50 € |
| 79 | MIFARE Classic® Compatible 1K 4-byte Gen2a Blank Tag | `mifare-classic-1k-4-byte-compatible-gen2a` | 2,95 € |
| 80 | MIFARE Classic® Compatible 1K 7-byte Gen2 Blank Tag | `mifare-classic-1k-7-byte-uid-compatible-gen2` | 21,95 € |
| 81 | MIFARE Classic® Compatible 4K 7-byte Gen2 Blank Tag | `mifare-classic-4k-7-byte-uid-compatible-gen2` | 21,95 € |
| 82 | MIFARE Classic® Compatible 4K 4-byte Gen2 Blank Tag | `mifare-classic-4k-4-byte-uid-compatible-gen2` | 21,95 € |
| 83 | MIFARE Ultralight® Compatible Blank Tag / iCopy-X UL | `mifare-ultralight-compatible` | 21,95 € |
| 84 | MIFARE Ultralight® C Compatible Blank Tag / iCopy-X | `mifare-ultralight-c-compatible` | 21,95 € |
| 85 | MIFARE Ultralight® EV1 Compatible Blank Tag / iCopy-X | `mifare-ultralight-c-compatible-1` | 21,95 € |
| 86 | MIFARE NTAG® Compatible Blank Tag / iCopy-X NTAG 21x | `mifare-ntag-compatible` | 21,95 € |
| 87 | ICODE® Compatible Blank Tag / SLI/SLIX for iCopy-X | `icode-compatible` | 21,95 € |
| 88 | iCLASS® Legacy Compatible Blank Tag / iCopy-X iCL | `iclass-legacy-compatible` | 24,95 € |
| 89 | iCLASS® Elite Compatible Blank Tag / iCopy-X iCE | `iclass-elite-compatible` | 29,95 € |
| 90 | iCLASS® SE/SEOS Compatible Blank Tag / iCopy-X | `iclass-se-seos-compatible` | 29,95 € |
| 91 | T5577 Low Frequency Blank Tag / iCopy-X ID1 RFID Blank | `t5577-low-frequency-blank` | 2,50 € |
| 92 | iCopy-X Basic Tag Pack / 16 LF and HF RFID Blanks | `icopy-x-basic-tag-pack` | 19,95 € |
| 93 | iCopy-X Intermediate Tag Pack / 16 RFID Blank Cards | `icopy-x-intermediate-tag-pack` | 129,95 € |
| 94 | iCopy-X Advanced Tag Pack / 16 LF and HF Blank Cards | `icopy-x-advanced-tag-pack` | 189,95 € |
| 95 | iCS Decoder / iCLASS® SE / SEOS Accessory for iCopy-X | `ics-decoder-iclass-se-seos-cloner-decoder` | 425,00 € |
| 96 | ICopy-XS / Portable LF and HF RFID Cloning Device | `icopy-x` | 375,00 € |
| 97 | Multi-RFID Keyfob / Six Passive LF and HF Blank Tags | `multi-rfid-keyfob` | 49,00 € |
| 98 | RFID Range Extenders / Passive 13.56MHz Antennas | `rfid-antenna-extender` | 35,00 € |
| 99 | USB Bluetooth Adaptor HC-06 / Proxmark 3 RDV4.01 | `usb-bluetooth-adaptor-hc-06` | 29,00 € |
| 100 | ProxRF 125KHz Biochip Antenna / Proxmark RFID Accessory | `proxrf-125khz-biochip-antenna` | 29,99 € |
| 101 | MIFARE Mini® Compatible 0.3K Gen2 Direct Write UID Card | `mifare-mini-compatible-uid-modifable-direct-write` | 29,95 € |
| 102 | MIFARE Classic® Compatible 1K Gen2 7-byte Direct Write | `mifare-classic-compatible-1k-7-byte-direct-write-uid` | 29,99 € |
| 103 | MIFARE Classic® Compatible 4K Gen2 7-byte DirectWrite Card | `mifare-classic-compatible-4k-7-byte-uid-modifiable-by-directwrite` | 29,99 € |
| 104 | USBKill V4 / USB Hardware Surge Stress-Testing Kits | `usbkill-v4-pro-kit` | 139,95 € |
| 105 | 125KHz T5577 Keyfobs / Rewritable LF RFID Tags, 5 Pack | `125khz-t5577-keyfobs-pack-of-5` | 19,99 € |
| 106 | Pocket USB Power Supply / Adjustable 0-30V Output | `pocket-usb-power-supply` | 19,99 € |
| 107 | ICODE SLI/SLIX Compatible UID Card / ISO15693, 28 Blocks | `icode-sli-slix-compatible-uid-modifiable` | 29,99 € |
| 108 | Screen Crab / HDMI Capture and Remote Video Monitoring | `hak5-screen-crab` | 400,00 € |
| 109 | Blade RF 2.0 Micro xA4 / Full-Duplex 2x2 MIMO SDR | `bladerf-sdr-2-micro-xa4` | 749,00 € |
| 110 | Shark Jack / Portable Ethernet Network Auditing Tool | `shark-jack` | 160,00 € |
| 111 | Proxmark 3 RDV4.01 / Upgrade and Replacement Antennas | `proxmark-3-rdv4-01-upgraded-replacement-antenna` | 24,99 € |
| 112 | Proxmark 3 RDV4.01 / Long Range LF Antenna Pack | `proxmark-3-rdv4-01-long-range-lf-antenna-pack` | 89,95 € |
| 113 | DL533N XL / Long Range HF RFID Reader / Writer | `long-range-rfid-reader-writer-dl533n-xl` | 129,00 € |
| 114 | USB RFID Reader/Writer DL533N / 13.56MHz LibNFC Tool | `usb-rfid-reader-writer-dl533n` | 55,00 € |
| 115 | Rubber Ducky / USB-A and USB-C Keystroke Injection Tool | `rubber-ducky` | 150,00 € |
| 116 | Bash Bunny Mark II / USB Device Emulation and Payloads | `hid-emulator-bash-bunny` | 355,00 € |
| 117 | LAN Turtle / Ethernet Auditing and Remote Network Access | `hak5-network-mitm-lan-turtle` | 120,00 € |
| 118 | Plunder Bug / USB-C Ethernet Tap for Packet Capture | `hak5-plunder-bug-lan-sniffer` | 195,00 € |
| 119 | Proxmark 3 RDV4 / BlueShark Standalone Module | `proxmark-3-rdv4-standalone-kit` | 99,00 € |
| 120 | NFCKill (Professional Version) / RFID Deactivation Tool | `nfckill-professional-version` | 265,00 € |
| 121 | Keysy Blank LF Tag / RFID Cloner Blank Badges, 5 Pack | `keysy-blank-lf-tag-pack-of-5` | 24,99 € |
| 122 | Keysy LF RFID Duplicator & Emulator / 125KHz, 4 Slots | `keysy-lf-rfid-emulator-duplicator` | 65,00 € |
| 123 | Proxmark 3 RDV4 - SIM/SAM Extension / Debug and Program | `proxmark-3-rdv4-sim-sam-extension` | 19,95 € |
| 124 | Lab401 Flashing Multi-tool for Proxmark & Chameleon | `proxmark-3-rdv4-flash-support` | 34,95 € |
| 125 | Proxmark 3 RDV4.01 / Long Range HF Antenna Pack | `proxmark-3-rdv4-long-range-hf-antenna-1` | 89,95 € |
| 126 | Proxmark 3 RDV4.01 / LF and HF RFID Research Multi-tool | `proxmark-3-rdv4` | 339,00 € |
| 127 | MIFARE DESFire® Compatible EV1/EV2 UID Emulator Card | `desfire-compatible-emulator-uid-modifiable` | 29,99 € |
| 128 | NTAG® 213 Compatible Gen2 Direct Write UID Card | `ntag-compatible-213-direct-write-uid` | 14,99 € |
| 129 | MIFARE Ultralight® Compatible Gen2 Direct Write UID Card | `ultralight-compatiblr-direct-write-uid` | 4,99 € |
| 130 | MIFARE Classic® Compatible 1K Gen2 Direct Write UID Card | `mifare-compatible-1k-direct-write-uid` | 12,99 € |
| 131 | MIFARE Classic® Compatible 4K Gen2 Direct Write UID Card | `mifare-compatible-4k-direct-write-uid` | 29,99 € |
| 132 | InputStick RAT / Bluetooth USB Keyboard & Mouse Control | `inputstick-rat` | 44,99 € |
| 133 | MIFARE Classic® Compatible 1K Gen2a One-Time UID Tag | `undetectable-mifare-compatible-1k-one-time-write-uid` | 4,99 € |
| 134 | Magic NTAG® 21x / NTAG® I2C / MIFARE Ultralight® EV1 Tag | `ntag-compatible-21x` | 29,99 € |
| 135 | MIFARE Ultralight-C® Compatible Gen1a UID Card | `ultralight-c-compatible-uid-modifiable` | 29,99 € |
| 136 | MIFARE Classic® Compatible 1K Gen1a Coin Tags / 5 Pack | `mifare-compatible-1k-uid-modifiable-pack-of-5` | 4,99 € |
| 137 | MIFARE Ultralight® Compatible Gen1a UID Changeable Card | `ultralight-compatible-uid-modifiable` | 4,99 € |
| 138 | MIFARE Classic® Compatible 1K Gen1a UID Tags / Pack of 5 | `mifare-compatible-1k-uid-modifiable` | 24,99 € |
| 139 | Phantom Drive / AES-256 USB Storage with Hidden Partition | `phantom-drive` | 49,95 € |
| 140 | Proxmark 5 - Wireless + Battery Module / Mobile RFID | `proxmark-5-wireless-battery-module` | 99,00 € |
| 141 | Proxmark 5 / LF and HF RFID Research and Emulation | `proxmark-5` | 325,00 € |
| 142 | Industrial Handheld UHF Reader / Tag Deactivation Checks | `industrial-handheld-uhf-reader` | 975,00 € |
| 143 | UHFKill - Tag Testing Service / UHF Compatibility Reports | `uhfkill-tag-testing-service` | 250,00 € |
| 144 | SilverBullet 2 / Disc-Detainer Lock Pick & Decoder | `silver-bullet-2` | 600,00 € |
| 145 | Project Reboot: Hardware Audit Training Target | `project-reboot-hardware-target` | 102,50 € |
| 146 | Shark Jack Display / Interactive Ethernet Auditing Tool | `shark-jack-display` | 185,00 € |
| 147 | US Bump Key Kit / Six CNC-Cut North American Profiles | `us-bump-key-kit` | 36,00 € |
| 148 | Bump Key Hammer / Sparrows Semi-Rigid Percussive Tool | `bump-key-hammer` | 16,95 € |
| 149 | "Under-the-door" Bypass Tool / Lever-Handle Audit Tool | `under-the-door-bypass-tool` | 55,00 € |
| 150 | Cutaway Practice Cylinder / Re-Pinnable 6-Pin Euro Lock | `6-pin-cutaway-training-cylinder` | 60,00 € |
| 151 | Replacement Electric Pick Blades / Kronos Pack of 10 | `replacement-electric-pick-blades` | 30,00 € |
| 152 | Key Molding Kit / Metal Key Duplication in the Field | `key-molding-kit` | 129,00 € |
| 153 | Creeper Case / Lockpick Storage with Luminous Backing | `creeper-case` | 15,95 € |
| 154 | Kronos Electric Pick / Adjustable Pin-Tumbler Pick Gun | `kronos-electric-pick` | 215,00 € |
| 155 | Lockpick Kit / Hooks, Rakes & Six Tension Wrenches | `lockpick-kit` | 49,95 € |
| 156 | EU Bump Key Kit / Six CNC-Cut European Lock Profiles | `european-bump-key-kit` | 36,00 € |
| 157 | Lock Bypass Kit / Door, Padlock & Combination-Lock Tools | `lock-bypass-kit` | 110,00 € |
| 158 | LIFT'D: Door Bypass Tools / Door-Mounted Pack of 10 | `liftd-door-bypass-tools` | 20,00 € |
| 159 | FIT'D: Door Bypass Tools / Door-Frame Audit Pack of 10 | `fitd-door-bypass-tools` | 20,00 € |
| 160 | ChipWhisperer - HuskyPlus / Side-Channel & Glitching | `chipwhisperer-huskyplus` | 1195,00 € |
| 161 | ATLAS: Standard Licence / 1-Year Android Audit Platform | `atlas-1-year-licence` | 120,00 € |
| 162 | Glytch Ethernet Module for Pineapple Pager / 10/100 LAN | `glytch-ethernet-module-for-pineapple-pager` | 59,00 € |
| 163 | Glytch Mesh Module for Pineapple Pager / LoRa Messaging | `glytch-mesh-module-for-pineapple-pager` | 79,00 € |
| 164 | Glytch GPS Module for Pineapple Pager / GPS Wardriving | `glytch-gps-module-for-pineapple-pager` | 79,00 € |
| 165 | USBKill Logo Pin / Gold-Plated Hardened Brass Badge | `usbkill-invader-pin-copy` | 12,00 € |
| 166 | USBKill Invader Pin / Decorative Shirt & Bag Badge | `usbkill-invader-pin` | 15,00 € |
| 167 | LiteVNA (NanoVNA Compatible) / 50 kHz-6.3 GHz Analyser | `litevna` | 192,00 € |
| 168 | Slim Shady - IR Blaster / Flipper Zero Wide-Angle IR | `slim-shady-ir-blaster` | 68,00 € |
| 169 | MastaBlasta - IR Blaster / Flipper Zero Focused Infrared | `masta-blasta-ir-blaster` | 52,00 € |
| 170 | Lab401 microSD Card for Flipper Zero / 8GB Storage | `lab401-microsd-card-for-flipper-zero` | 16,67 € |
| 171 | Faulty Cat / Portable EMFI & Voltage Glitching Tool | `faultycat` | 165,00 € |
| 172 | NFC Booster Antenna for Flipper Zero / Passive NFC Boost | `nfc-booster-antenna-for-flipper-zero` | 10,00 € |
| 173 | 13.56MHz RFID Range Boosters / Passive NFC Antennas | `13-56mhz-rfid-range-boosters` | 10,00 € |
| 174 | NFC Range Extender for Flipper Zero / Passive Antennas | `nfc-range-extender-for-flipper-zero` | 75,00 € |

### Chameleon Mini (`chameleon-mini`) — 0 produit(s)

Collection vide dans le clone (la page affiche « collection is empty »). À confirmer si elle est vide aussi sur le vrai site.

### Debug & Development (`development-tools`) — 22 produit(s)

| Pos | Produit | Handle | Prix EUR |
|----:|---------|--------|--------:|
| 1 | WHIDBoard Pro / Hardware Auditing & Firmware Toolkit | `whidboard-pro` | 295,00 € |
| 2 | MACOBOX - Hardware Pentest Platform / Firmware Analysis | `macobox-hardware-pentest-platform` | 9700,00 € |
| 3 | Cynthion / USB Protocol Analysis & Device Development | `cynthion` | 209,00 € |
| 4 | Bus Pirate 5 / Hardware Debugging & Protocol Interface | `bus-pirate-v5` | 89,00 € |
| 5 | TermDriver 2 / USB Serial Adapter & Standalone Monitor | `termdriver2` | 29,00 € |
| 6 | SPIDriver / USB SPI Debugging & Flash Programming Tool | `spi-driver` | 35,00 € |
| 7 | I2CDriver / USB I2C Control, Capture & Logic Analysis | `i2c-driver` | 35,00 € |
| 8 | Pocket USB Power Supply / Adjustable 0-30V Output | `pocket-usb-power-supply` | 19,99 € |
| 9 | GreatFET One / Open-Source Hardware Debugging Platform | `greatfet` | 125,00 € |
| 10 | GreatFET One - Daffodil / Breadboard Prototyping Shield | `greatfet-one-daffodil` | 35,00 € |
| 11 | BugBlat miniSniffer 2 / USB Traffic Capture & Analysis | `bugblat-minisniffer-v2` | 149,00 € |
| 12 | DigiLab for FlipperZero / SPI, I2C & Signal Probing | `digilab-for-flipperzero` | 49,00 € |
| 13 | Bus Pirate 5 Raspberry Pi Pico Headers / Right-Angle | `bus-pirate-5-raspberry-pi-pico-headers` | 5,95 € |
| 14 | Bus Pirate 5 KF141 Quick Connect / Spring-Clamp Adapter | `bus-pirate-5-kf141-quick-connect` | 6,95 € |
| 15 | Bus Pirate 5 Auxiliary Cable / Logic Analyzer Connection | `bus-pirate-5-auxiliary-cable` | 9,95 € |
| 16 | Bus Pirate 5 Auxiliary Cable Set / Jumpers & Splitters | `bus-pirate-5-coloured-auxiliary-cable` | 11,95 € |
| 17 | Bus Pirate 5 Probe Kit / Hooks & Breadboard Connections | `bus-pirate-5-auxilary-probe-kit` | 11,95 € |
| 18 | Bus Pirate 5 Flash Adapters / DIP8, SOP8 & WSON8 Kit | `bus-pirate-5-flash-adaptors` | 34,95 € |
| 19 | Bus Pirate 5 SIM & Smart IC Adapter / Card Interface | `bus-pirate-5-sim-smart-ic-adapter` | 14,95 € |
| 20 | KIISU - Compact Flipper alternative / RFID & NFC Tool | `kiisu` | 79,00 € |
| 21 | Digilab Module Kit / BMP280 & LM75A I2C Sensor Pack | `digilab-module-kit` | 14,95 € |
| 22 | Lab401 Flashing Multi-tool for Proxmark & Chameleon | `proxmark-3-rdv4-flash-support` | 34,95 € |

### Debug & Development Tools: Debugging Tools (`debug-development-tools-debugging-tools`) — 20 produit(s)

| Pos | Produit | Handle | Prix EUR |
|----:|---------|--------|--------:|
| 1 | Bus Pirate 5 / Hardware Debugging & Protocol Interface | `bus-pirate-v5` | 89,00 € |
| 2 | Pocket USB Power Supply / Adjustable 0-30V Output | `pocket-usb-power-supply` | 19,99 € |
| 3 | DigiLab for FlipperZero / SPI, I2C & Signal Probing | `digilab-for-flipperzero` | 49,00 € |
| 4 | Bus Pirate 5 SIM & Smart IC Adapter / Card Interface | `bus-pirate-5-sim-smart-ic-adapter` | 14,95 € |
| 5 | Bus Pirate 5 Flash Adapters / DIP8, SOP8 & WSON8 Kit | `bus-pirate-5-flash-adaptors` | 34,95 € |
| 6 | Bus Pirate 5 Probe Kit / Hooks & Breadboard Connections | `bus-pirate-5-auxilary-probe-kit` | 11,95 € |
| 7 | Cynthion / USB Protocol Analysis & Device Development | `cynthion` | 209,00 € |
| 8 | Bus Pirate 5 Auxiliary Cable Set / Jumpers & Splitters | `bus-pirate-5-coloured-auxiliary-cable` | 11,95 € |
| 9 | Bus Pirate 5 KF141 Quick Connect / Spring-Clamp Adapter | `bus-pirate-5-kf141-quick-connect` | 6,95 € |
| 10 | Lab401 Flashing Multi-tool for Proxmark & Chameleon | `proxmark-3-rdv4-flash-support` | 34,95 € |
| 11 | TermDriver 2 / USB Serial Adapter & Standalone Monitor | `termdriver2` | 29,00 € |
| 12 | Digilab Module Kit / BMP280 & LM75A I2C Sensor Pack | `digilab-module-kit` | 14,95 € |
| 13 | GreatFET One / Open-Source Hardware Debugging Platform | `greatfet` | 125,00 € |
| 14 | Bus Pirate 5 Auxiliary Cable / Logic Analyzer Connection | `bus-pirate-5-auxiliary-cable` | 9,95 € |
| 15 | Bus Pirate 5 Raspberry Pi Pico Headers / Right-Angle | `bus-pirate-5-raspberry-pi-pico-headers` | 5,95 € |
| 16 | SPIDriver / USB SPI Debugging & Flash Programming Tool | `spi-driver` | 35,00 € |
| 17 | I2CDriver / USB I2C Control, Capture & Logic Analysis | `i2c-driver` | 35,00 € |
| 18 | BugBlat miniSniffer 2 / USB Traffic Capture & Analysis | `bugblat-minisniffer-v2` | 149,00 € |
| 19 | GreatFET One - Daffodil / Breadboard Prototyping Shield | `greatfet-one-daffodil` | 35,00 € |
| 20 | MACOBOX - Hardware Pentest Platform / Firmware Analysis | `macobox-hardware-pentest-platform` | 9700,00 € |

### Debug & Development Tools: Development Tools (`debug-development-tools-development-tools`) — 13 produit(s)

| Pos | Produit | Handle | Prix EUR |
|----:|---------|--------|--------:|
| 1 | Bus Pirate 5 / Hardware Debugging & Protocol Interface | `bus-pirate-v5` | 89,00 € |
| 2 | Pocket USB Power Supply / Adjustable 0-30V Output | `pocket-usb-power-supply` | 19,99 € |
| 3 | DigiLab for FlipperZero / SPI, I2C & Signal Probing | `digilab-for-flipperzero` | 49,00 € |
| 4 | Bus Pirate 5 Probe Kit / Hooks & Breadboard Connections | `bus-pirate-5-auxilary-probe-kit` | 11,95 € |
| 5 | Cynthion / USB Protocol Analysis & Device Development | `cynthion` | 209,00 € |
| 6 | Bus Pirate 5 Auxiliary Cable Set / Jumpers & Splitters | `bus-pirate-5-coloured-auxiliary-cable` | 11,95 € |
| 7 | Bus Pirate 5 KF141 Quick Connect / Spring-Clamp Adapter | `bus-pirate-5-kf141-quick-connect` | 6,95 € |
| 8 | Lab401 Flashing Multi-tool for Proxmark & Chameleon | `proxmark-3-rdv4-flash-support` | 34,95 € |
| 9 | GreatFET One / Open-Source Hardware Debugging Platform | `greatfet` | 125,00 € |
| 10 | Bus Pirate 5 Auxiliary Cable / Logic Analyzer Connection | `bus-pirate-5-auxiliary-cable` | 9,95 € |
| 11 | Bus Pirate 5 Raspberry Pi Pico Headers / Right-Angle | `bus-pirate-5-raspberry-pi-pico-headers` | 5,95 € |
| 12 | BugBlat miniSniffer 2 / USB Traffic Capture & Analysis | `bugblat-minisniffer-v2` | 149,00 € |
| 13 | GreatFET One - Daffodil / Breadboard Prototyping Shield | `greatfet-one-daffodil` | 35,00 € |

### Discount Eligible Products (`all-products-no-flipper-copy`) — 174 produit(s)

Collection paginée — total fusionné : **174** produits (all-products-no-flipper-copy-page-2.html : 36, all-products-no-flipper-copy-page-3.html : 36, all-products-no-flipper-copy-page-4.html : 36, all-products-no-flipper-copy-page-5.html : 30, all-products-no-flipper-copy.html : 36).

| Pos | Produit | Handle | Prix EUR |
|----:|---------|--------|--------:|
| 1 | Lab401 HardShell for Flipper Zero / Case & GPIO Guards | `lab401-hardshell-for-flipper-zero` | 29,95 € |
| 2 | O.MG Plug / Wireless USB Keystroke Injection Platform | `o-mg-plug-elite` | 120,00 € |
| 3 | O.MG Adapter Elite / USB-C Payloads and Wireless Control | `o-mg-adapter-elite` | 295,00 € |
| 4 | O.MG Unblocker / WiFi-Controlled USB Payload Device | `o-mg-unblocker` | 210,00 € |
| 5 | KIISU - Compact Flipper alternative / RFID & NFC Tool | `kiisu` | 79,00 € |
| 6 | AWOK GPS Antenna AD-301 / Active Multi-System Antenna | `awok-gps-antenna-ad-301` | 45,00 € |
| 7 | MIFARE Classic® Compatible 1K Gen1a FPC UID Tags / 5 Pack | `mifare-classic-compatible-1k-uid-modifiable-gen1a-tiny-fpc-tags-pack-of-5` | 4,95 € |
| 8 | 13.56MHZ RFID Field Strength Meter / Passive NFC Testing | `13-56mhz-rfid-field-strength-meter` | 80,00 € |
| 9 | SkimmerGuard / ATM & Payment Card Skimmer Detector | `skimmerguard` | 49,00 € |
| 10 | PPE Stealth Decoy Reader Spare Battery / 3.7V 1800mAh | `ppe-extra-stealth-decoy-reader-battery` | 15,00 € |
| 11 | Doppelgänger Core RFID Dev Board / Wiegand and PIN Capture | `doppelganger-core-rfid-dev-board` | 60,00 € |
| 12 | PPE 2-in-1 Fast USB-C Battery Charger / Dual LiPo | `ppe-2-in-1-fast-usb-c-battery-charger` | 30,00 € |
| 13 | PPE Long Range Reader Power Supply / 25,600mAh Battery | `ppe-long-range-reader-power-supply` | 255,00 € |
| 14 | Stealth Decoy Reader / RFID and PIN Audit Capture | `stealth-decoy-reader` | 375,00 € |
| 15 | Dual Mode Paxton Long Range / Stealth Decoy Reader | `dual-mode-paxton-long-range-stealth-decoy-reader` | 475,00 € |
| 16 | Long-range MaxiProx 5375 125KHz Capture System | `long-range-maxiprox-5375-125khz-capture-system` | 995,00 € |
| 17 | Long-range iCLASS RFID Capture System / Up to 45 cm | `ppe-iclass-longrange-rfid-capture-system` | 895,00 € |
| 18 | MIFARE Classic® Compatible 4K Gen3 / Lockable UID Card | `mifare-classic-compatible-4k-gen3` | 9,95 € |
| 19 | WHIDBoard Pro / Hardware Auditing & Firmware Toolkit | `whidboard-pro` | 295,00 € |
| 20 | CANBus Module for Flipper Zero / CAN & OBD-II Diagnostics | `ec-canbus` | 39,00 € |
| 21 | PandwaRF Kaiju Pro License / Rolling-Code Analysis | `pandwarf-kaiju-license` | 290,00 € |
| 22 | Alfa AWUS036ACHM / Dual-Band WiFi Pentesting Adapter | `alpha-awus036achm` | 59,00 € |
| 23 | PandwaRF Rogue Pro / RF Remote Capture and Analysis | `pandwarf-rogue-pro` | 579,00 € |
| 24 | Tiny NTAG® 213 LED Detector Tags / 13.56MHz, 10 Pack | `tiny-detector-led-ntag213-10p` | 19,95 € |
| 25 | MIFARE Classic® Compatible 1K Gen2a FPC UID Tags / 5 Pack | `tiny-mf-gen2a-one-time-write` | 9,95 € |
| 26 | MIFARE Classic® Compatible 1K Gen2 FPC UID Tags / 5 Pack | `tiny-mf-gen1a-5pc` | 4,95 € |
| 27 | TermDriver 2 / USB Serial Adapter & Standalone Monitor | `termdriver2` | 29,00 € |
| 28 | I2CDriver / USB I2C Control, Capture & Logic Analysis | `i2c-driver` | 35,00 € |
| 29 | SPIDriver / USB SPI Debugging & Flash Programming Tool | `spi-driver` | 35,00 € |
| 30 | LAB401 Pin / Gold-Plated Badge for Shirts & Bags | `lab401-pin` | 3,95 € |
| 31 | PandwaRF Marauder / Autonomous Dual-Frequency RF Capture | `pandwarf-marauder` | 979,00 € |
| 32 | Digilab Module Kit / BMP280 & LM75A I2C Sensor Pack | `digilab-module-kit` | 14,95 € |
| 33 | HackRF Pro / 100 kHz-6 GHz Software Defined Radio | `hackrf-pro` | 400,00 € |
| 34 | DigiLab for FlipperZero / SPI, I2C & Signal Probing | `digilab-for-flipperzero` | 49,00 € |
| 35 | RFID Field Detector Ultra - LF/HF/UHF / Passive Detection | `rfid-field-detector-ultra` | 24,95 € |
| 36 | MACOBOX - Hardware Pentest Platform / Firmware Analysis | `macobox-hardware-pentest-platform` | 9700,00 € |
| 37 | SignalSDR Pro / Full-Duplex SDR for 5G Security Research | `signalsdr-pro` | 1100,00 € |
| 38 | iCODE SLI Gen2 UID Changeable ISO15693 / 8-byte UID Card | `icode-sli-gen2-uid-changeable-iso15693` | 29,95 € |
| 39 | MIFARE Classic® Compatible 1K Gen2a One-Time UID Coins, 5 | `mifare-classic-compatible-1k-one-time-write-uid-modifiable-coin-tag-gen2a` | 15,00 € |
| 40 | Light Messenger - POV Light Painter for Flipper Zero | `light-messenger` | 29,00 € |
| 41 | Flux Capacitor / Flipper Zero CC1101 Radio Amplifier | `flux-capacitor` | 65,00 € |
| 42 | IR Blaster / Rabbit Labs Infrared for Flipper Zero | `ir-blaster` | 34,95 € |
| 43 | TinySA Ultra+ / Spectrum Analyser with 5.4 GHz Ultra Mode | `tinysa-ultra` | 163,00 € |
| 44 | NanoVNA-F / 10 kHz-1.5 GHz Vector Network Analyser | `nanovna` | 110,00 € |
| 45 | PiKVM v4 Plus - Hardware RAT / Remote Computer Control | `pikvm-v4-plus-hardware-rat` | 359,00 € |
| 46 | ESP RFID Tool / WiFi Wiegand Capture and Replay Tool | `wiegand-sniffer-esp-rfid-tool` | 30,00 € |
| 47 | Cynthion / USB Protocol Analysis & Device Development | `cynthion` | 209,00 € |
| 48 | Bus Pirate 5 SIM & Smart IC Adapter / Card Interface | `bus-pirate-5-sim-smart-ic-adapter` | 14,95 € |
| 49 | Bus Pirate 5 Flash Adapters / DIP8, SOP8 & WSON8 Kit | `bus-pirate-5-flash-adaptors` | 34,95 € |
| 50 | Packet Squirrel Textbook / Network Capture and Payloads | `packet-squirrel-textbook` | 49,00 € |
| 51 | Rubber Ducky Textbook / HID Injection and DuckyScript | `rubber-ducky-textbook` | 60,00 € |
| 52 | Rubber Ducky Pocket Guide / DuckyScript Payload Manual | `rubber-ducky-pocket-guide` | 19,95 € |
| 53 | Packet Squirrel Pocket Guide / Mark II Payload Scripting | `packet-squirrel-pocket-guide` | 19,95 € |
| 54 | Packet Squirrel (Mark II) / Ethernet Network Testing | `packet-squirrel-mark-ii` | 180,00 € |
| 55 | Opera Cake for HackRF / Automatic RF Antenna Switching | `opera-cake-for-hackrf` | 190,00 € |
| 56 | Bus Pirate 5 Raspberry Pi Pico Headers / Right-Angle | `bus-pirate-5-raspberry-pi-pico-headers` | 5,95 € |
| 57 | Bus Pirate 5 KF141 Quick Connect / Spring-Clamp Adapter | `bus-pirate-5-kf141-quick-connect` | 6,95 € |
| 58 | Bus Pirate 5 Auxiliary Cable / Logic Analyzer Connection | `bus-pirate-5-auxiliary-cable` | 9,95 € |
| 59 | Bus Pirate 5 Auxiliary Cable Set / Jumpers & Splitters | `bus-pirate-5-coloured-auxiliary-cable` | 11,95 € |
| 60 | Bus Pirate 5 Probe Kit / Hooks & Breadboard Connections | `bus-pirate-5-auxilary-probe-kit` | 11,95 € |
| 61 | Bus Pirate 5 / Hardware Debugging & Protocol Interface | `bus-pirate-v5` | 89,00 € |
| 62 | GreatFET One - Daffodil / Breadboard Prototyping Shield | `greatfet-one-daffodil` | 35,00 € |
| 63 | GreatFET One / Open-Source Hardware Debugging Platform | `greatfet` | 125,00 € |
| 64 | Chameleon Ultra DevKit / LF and HF RFID Development | `chameleon-ultra-devkit` | 129,00 € |
| 65 | Chameleon Lite / 13.56MHz and 125KHz RFID Emulator | `chameleon-lite` | 59,00 € |
| 66 | Chameleon Ultra / Wireless LF and HF RFID Emulator | `chameleon-ultra` | 129,00 € |
| 67 | Lab401 Pentest Sticker Pack / Packs of 10, 20 or 50 | `lab401-hacker-stickers` | 8,00 € |
| 68 | BugBlat miniSniffer 2 / USB Traffic Capture & Analysis | `bugblat-minisniffer-v2` | 149,00 € |
| 69 | MIFARE DESFire® Compatible UID/ATQA/SAK/ATS/APDU Card | `mifare-desfire-ev2-compatible-modifiable-uid-atqa-sak-ats-apdu` | 29,99 € |
| 70 | RFID Pentester Tag Pack / Basic, Standard and Complete | `rfid-pentester-tag-pack` | 90,00 € |
| 71 | Ultimate Magic Card (Gen4) / Configurable NFC Emulation | `ultimate-magic-card-gen4` | 29,00 € |
| 72 | O.MG Cable Pack / USB Payload Cables and Programming Tools | `o-mg-cable-pack` | 1190,00 € |
| 73 | O.MG Malicious Cable Detector / USB Testing and Blocking | `o-mg-malicious-cable-detector` | 69,00 € |
| 74 | O.MG Cable Programmer (USB A+C) / Setup and Flashing | `o-mg-cable-programmer-usb-a` | 49,00 € |
| 75 | O.MG Cable / Wireless USB Keystroke Injection Platform | `o-mg-cable` | 295,00 € |
| 76 | UHFKill / Permanent UHF RFID Tag Deactivation Tool | `uhfkill` | 1495,00 € |
| 77 | MIFARE Classic® Compatible 1K 4-byte Gen1 Blank Tag | `mifare-classic-1k-4-byte-compatible` | 2,50 € |
| 78 | MIFARE Classic® Compatible 1K 4-byte Gen2 Blank Tag | `mifare-classic-1k-4-byte-compatible-gen2` | 2,50 € |
| 79 | MIFARE Classic® Compatible 1K 4-byte Gen2a Blank Tag | `mifare-classic-1k-4-byte-compatible-gen2a` | 2,95 € |
| 80 | MIFARE Classic® Compatible 1K 7-byte Gen2 Blank Tag | `mifare-classic-1k-7-byte-uid-compatible-gen2` | 21,95 € |
| 81 | MIFARE Classic® Compatible 4K 7-byte Gen2 Blank Tag | `mifare-classic-4k-7-byte-uid-compatible-gen2` | 21,95 € |
| 82 | MIFARE Classic® Compatible 4K 4-byte Gen2 Blank Tag | `mifare-classic-4k-4-byte-uid-compatible-gen2` | 21,95 € |
| 83 | MIFARE Ultralight® Compatible Blank Tag / iCopy-X UL | `mifare-ultralight-compatible` | 21,95 € |
| 84 | MIFARE Ultralight® C Compatible Blank Tag / iCopy-X | `mifare-ultralight-c-compatible` | 21,95 € |
| 85 | MIFARE Ultralight® EV1 Compatible Blank Tag / iCopy-X | `mifare-ultralight-c-compatible-1` | 21,95 € |
| 86 | MIFARE NTAG® Compatible Blank Tag / iCopy-X NTAG 21x | `mifare-ntag-compatible` | 21,95 € |
| 87 | ICODE® Compatible Blank Tag / SLI/SLIX for iCopy-X | `icode-compatible` | 21,95 € |
| 88 | iCLASS® Legacy Compatible Blank Tag / iCopy-X iCL | `iclass-legacy-compatible` | 24,95 € |
| 89 | iCLASS® Elite Compatible Blank Tag / iCopy-X iCE | `iclass-elite-compatible` | 29,95 € |
| 90 | iCLASS® SE/SEOS Compatible Blank Tag / iCopy-X | `iclass-se-seos-compatible` | 29,95 € |
| 91 | T5577 Low Frequency Blank Tag / iCopy-X ID1 RFID Blank | `t5577-low-frequency-blank` | 2,50 € |
| 92 | iCopy-X Basic Tag Pack / 16 LF and HF RFID Blanks | `icopy-x-basic-tag-pack` | 19,95 € |
| 93 | iCopy-X Intermediate Tag Pack / 16 RFID Blank Cards | `icopy-x-intermediate-tag-pack` | 129,95 € |
| 94 | iCopy-X Advanced Tag Pack / 16 LF and HF Blank Cards | `icopy-x-advanced-tag-pack` | 189,95 € |
| 95 | iCS Decoder / iCLASS® SE / SEOS Accessory for iCopy-X | `ics-decoder-iclass-se-seos-cloner-decoder` | 425,00 € |
| 96 | ICopy-XS / Portable LF and HF RFID Cloning Device | `icopy-x` | 375,00 € |
| 97 | Multi-RFID Keyfob / Six Passive LF and HF Blank Tags | `multi-rfid-keyfob` | 49,00 € |
| 98 | RFID Range Extenders / Passive 13.56MHz Antennas | `rfid-antenna-extender` | 35,00 € |
| 99 | USB Bluetooth Adaptor HC-06 / Proxmark 3 RDV4.01 | `usb-bluetooth-adaptor-hc-06` | 29,00 € |
| 100 | ProxRF 125KHz Biochip Antenna / Proxmark RFID Accessory | `proxrf-125khz-biochip-antenna` | 29,99 € |
| 101 | MIFARE Mini® Compatible 0.3K Gen2 Direct Write UID Card | `mifare-mini-compatible-uid-modifable-direct-write` | 29,95 € |
| 102 | MIFARE Classic® Compatible 1K Gen2 7-byte Direct Write | `mifare-classic-compatible-1k-7-byte-direct-write-uid` | 29,99 € |
| 103 | MIFARE Classic® Compatible 4K Gen2 7-byte DirectWrite Card | `mifare-classic-compatible-4k-7-byte-uid-modifiable-by-directwrite` | 29,99 € |
| 104 | USBKill V4 / USB Hardware Surge Stress-Testing Kits | `usbkill-v4-pro-kit` | 139,95 € |
| 105 | 125KHz T5577 Keyfobs / Rewritable LF RFID Tags, 5 Pack | `125khz-t5577-keyfobs-pack-of-5` | 19,99 € |
| 106 | Pocket USB Power Supply / Adjustable 0-30V Output | `pocket-usb-power-supply` | 19,99 € |
| 107 | ICODE SLI/SLIX Compatible UID Card / ISO15693, 28 Blocks | `icode-sli-slix-compatible-uid-modifiable` | 29,99 € |
| 108 | Screen Crab / HDMI Capture and Remote Video Monitoring | `hak5-screen-crab` | 400,00 € |
| 109 | Blade RF 2.0 Micro xA4 / Full-Duplex 2x2 MIMO SDR | `bladerf-sdr-2-micro-xa4` | 749,00 € |
| 110 | Shark Jack / Portable Ethernet Network Auditing Tool | `shark-jack` | 160,00 € |
| 111 | Proxmark 3 RDV4.01 / Upgrade and Replacement Antennas | `proxmark-3-rdv4-01-upgraded-replacement-antenna` | 24,99 € |
| 112 | Proxmark 3 RDV4.01 / Long Range LF Antenna Pack | `proxmark-3-rdv4-01-long-range-lf-antenna-pack` | 89,95 € |
| 113 | DL533N XL / Long Range HF RFID Reader / Writer | `long-range-rfid-reader-writer-dl533n-xl` | 129,00 € |
| 114 | USB RFID Reader/Writer DL533N / 13.56MHz LibNFC Tool | `usb-rfid-reader-writer-dl533n` | 55,00 € |
| 115 | Rubber Ducky / USB-A and USB-C Keystroke Injection Tool | `rubber-ducky` | 150,00 € |
| 116 | Bash Bunny Mark II / USB Device Emulation and Payloads | `hid-emulator-bash-bunny` | 355,00 € |
| 117 | LAN Turtle / Ethernet Auditing and Remote Network Access | `hak5-network-mitm-lan-turtle` | 120,00 € |
| 118 | Plunder Bug / USB-C Ethernet Tap for Packet Capture | `hak5-plunder-bug-lan-sniffer` | 195,00 € |
| 119 | Proxmark 3 RDV4 / BlueShark Standalone Module | `proxmark-3-rdv4-standalone-kit` | 99,00 € |
| 120 | NFCKill (Professional Version) / RFID Deactivation Tool | `nfckill-professional-version` | 265,00 € |
| 121 | Keysy Blank LF Tag / RFID Cloner Blank Badges, 5 Pack | `keysy-blank-lf-tag-pack-of-5` | 24,99 € |
| 122 | Keysy LF RFID Duplicator & Emulator / 125KHz, 4 Slots | `keysy-lf-rfid-emulator-duplicator` | 65,00 € |
| 123 | Proxmark 3 RDV4 - SIM/SAM Extension / Debug and Program | `proxmark-3-rdv4-sim-sam-extension` | 19,95 € |
| 124 | Lab401 Flashing Multi-tool for Proxmark & Chameleon | `proxmark-3-rdv4-flash-support` | 34,95 € |
| 125 | Proxmark 3 RDV4.01 / Long Range HF Antenna Pack | `proxmark-3-rdv4-long-range-hf-antenna-1` | 89,95 € |
| 126 | Proxmark 3 RDV4.01 / LF and HF RFID Research Multi-tool | `proxmark-3-rdv4` | 339,00 € |
| 127 | MIFARE DESFire® Compatible EV1/EV2 UID Emulator Card | `desfire-compatible-emulator-uid-modifiable` | 29,99 € |
| 128 | NTAG® 213 Compatible Gen2 Direct Write UID Card | `ntag-compatible-213-direct-write-uid` | 14,99 € |
| 129 | MIFARE Ultralight® Compatible Gen2 Direct Write UID Card | `ultralight-compatiblr-direct-write-uid` | 4,99 € |
| 130 | MIFARE Classic® Compatible 1K Gen2 Direct Write UID Card | `mifare-compatible-1k-direct-write-uid` | 12,99 € |
| 131 | MIFARE Classic® Compatible 4K Gen2 Direct Write UID Card | `mifare-compatible-4k-direct-write-uid` | 29,99 € |
| 132 | InputStick RAT / Bluetooth USB Keyboard & Mouse Control | `inputstick-rat` | 44,99 € |
| 133 | MIFARE Classic® Compatible 1K Gen2a One-Time UID Tag | `undetectable-mifare-compatible-1k-one-time-write-uid` | 4,99 € |
| 134 | Magic NTAG® 21x / NTAG® I2C / MIFARE Ultralight® EV1 Tag | `ntag-compatible-21x` | 29,99 € |
| 135 | MIFARE Ultralight-C® Compatible Gen1a UID Card | `ultralight-c-compatible-uid-modifiable` | 29,99 € |
| 136 | MIFARE Classic® Compatible 1K Gen1a Coin Tags / 5 Pack | `mifare-compatible-1k-uid-modifiable-pack-of-5` | 4,99 € |
| 137 | MIFARE Ultralight® Compatible Gen1a UID Changeable Card | `ultralight-compatible-uid-modifiable` | 4,99 € |
| 138 | MIFARE Classic® Compatible 1K Gen1a UID Tags / Pack of 5 | `mifare-compatible-1k-uid-modifiable` | 24,99 € |
| 139 | Phantom Drive / AES-256 USB Storage with Hidden Partition | `phantom-drive` | 49,95 € |
| 140 | Proxmark 5 - Wireless + Battery Module / Mobile RFID | `proxmark-5-wireless-battery-module` | 99,00 € |
| 141 | Proxmark 5 / LF and HF RFID Research and Emulation | `proxmark-5` | 325,00 € |
| 142 | Industrial Handheld UHF Reader / Tag Deactivation Checks | `industrial-handheld-uhf-reader` | 975,00 € |
| 143 | UHFKill - Tag Testing Service / UHF Compatibility Reports | `uhfkill-tag-testing-service` | 250,00 € |
| 144 | SilverBullet 2 / Disc-Detainer Lock Pick & Decoder | `silver-bullet-2` | 600,00 € |
| 145 | Project Reboot: Hardware Audit Training Target | `project-reboot-hardware-target` | 102,50 € |
| 146 | Shark Jack Display / Interactive Ethernet Auditing Tool | `shark-jack-display` | 185,00 € |
| 147 | US Bump Key Kit / Six CNC-Cut North American Profiles | `us-bump-key-kit` | 36,00 € |
| 148 | Bump Key Hammer / Sparrows Semi-Rigid Percussive Tool | `bump-key-hammer` | 16,95 € |
| 149 | "Under-the-door" Bypass Tool / Lever-Handle Audit Tool | `under-the-door-bypass-tool` | 55,00 € |
| 150 | Cutaway Practice Cylinder / Re-Pinnable 6-Pin Euro Lock | `6-pin-cutaway-training-cylinder` | 60,00 € |
| 151 | Replacement Electric Pick Blades / Kronos Pack of 10 | `replacement-electric-pick-blades` | 30,00 € |
| 152 | Key Molding Kit / Metal Key Duplication in the Field | `key-molding-kit` | 129,00 € |
| 153 | Creeper Case / Lockpick Storage with Luminous Backing | `creeper-case` | 15,95 € |
| 154 | Kronos Electric Pick / Adjustable Pin-Tumbler Pick Gun | `kronos-electric-pick` | 215,00 € |
| 155 | Lockpick Kit / Hooks, Rakes & Six Tension Wrenches | `lockpick-kit` | 49,95 € |
| 156 | EU Bump Key Kit / Six CNC-Cut European Lock Profiles | `european-bump-key-kit` | 36,00 € |
| 157 | Lock Bypass Kit / Door, Padlock & Combination-Lock Tools | `lock-bypass-kit` | 110,00 € |
| 158 | LIFT'D: Door Bypass Tools / Door-Mounted Pack of 10 | `liftd-door-bypass-tools` | 20,00 € |
| 159 | FIT'D: Door Bypass Tools / Door-Frame Audit Pack of 10 | `fitd-door-bypass-tools` | 20,00 € |
| 160 | ChipWhisperer - HuskyPlus / Side-Channel & Glitching | `chipwhisperer-huskyplus` | 1195,00 € |
| 161 | ATLAS: Standard Licence / 1-Year Android Audit Platform | `atlas-1-year-licence` | 120,00 € |
| 162 | Glytch Ethernet Module for Pineapple Pager / 10/100 LAN | `glytch-ethernet-module-for-pineapple-pager` | 59,00 € |
| 163 | Glytch Mesh Module for Pineapple Pager / LoRa Messaging | `glytch-mesh-module-for-pineapple-pager` | 79,00 € |
| 164 | Glytch GPS Module for Pineapple Pager / GPS Wardriving | `glytch-gps-module-for-pineapple-pager` | 79,00 € |
| 165 | USBKill Logo Pin / Gold-Plated Hardened Brass Badge | `usbkill-invader-pin-copy` | 12,00 € |
| 166 | USBKill Invader Pin / Decorative Shirt & Bag Badge | `usbkill-invader-pin` | 15,00 € |
| 167 | LiteVNA (NanoVNA Compatible) / 50 kHz-6.3 GHz Analyser | `litevna` | 192,00 € |
| 168 | Slim Shady - IR Blaster / Flipper Zero Wide-Angle IR | `slim-shady-ir-blaster` | 68,00 € |
| 169 | MastaBlasta - IR Blaster / Flipper Zero Focused Infrared | `masta-blasta-ir-blaster` | 52,00 € |
| 170 | Lab401 microSD Card for Flipper Zero / 8GB Storage | `lab401-microsd-card-for-flipper-zero` | 16,67 € |
| 171 | Faulty Cat / Portable EMFI & Voltage Glitching Tool | `faultycat` | 165,00 € |
| 172 | NFC Booster Antenna for Flipper Zero / Passive NFC Boost | `nfc-booster-antenna-for-flipper-zero` | 10,00 € |
| 173 | 13.56MHz RFID Range Boosters / Passive NFC Antennas | `13-56mhz-rfid-range-boosters` | 10,00 € |
| 174 | NFC Range Extender for Flipper Zero / Passive Antennas | `nfc-range-extender-for-flipper-zero` | 75,00 € |

### Enterprise Tools (`enterprise-tools`) — 0 produit(s)

Collection vide dans le clone (la page affiche « collection is empty »). À confirmer si elle est vide aussi sur le vrai site.

### Flashing Tools (`flashing-tools`) — 14 produit(s)

| Pos | Produit | Handle | Prix EUR |
|----:|---------|--------|--------:|
| 1 | Flipper Zero / Portable RFID, Sub-GHz & Hardware Multitool | `flipper-zero` | 149,17 € |
| 2 | Bus Pirate 5 / Hardware Debugging & Protocol Interface | `bus-pirate-v5` | 89,00 € |
| 3 | Bus Pirate 5 SIM & Smart IC Adapter / Card Interface | `bus-pirate-5-sim-smart-ic-adapter` | 14,95 € |
| 4 | Bus Pirate 5 Flash Adapters / DIP8, SOP8 & WSON8 Kit | `bus-pirate-5-flash-adaptors` | 34,95 € |
| 5 | Bus Pirate 5 Probe Kit / Hooks & Breadboard Connections | `bus-pirate-5-auxilary-probe-kit` | 11,95 € |
| 6 | Cynthion / USB Protocol Analysis & Device Development | `cynthion` | 209,00 € |
| 7 | Bus Pirate 5 Auxiliary Cable Set / Jumpers & Splitters | `bus-pirate-5-coloured-auxiliary-cable` | 11,95 € |
| 8 | Bus Pirate 5 KF141 Quick Connect / Spring-Clamp Adapter | `bus-pirate-5-kf141-quick-connect` | 6,95 € |
| 9 | TermDriver 2 / USB Serial Adapter & Standalone Monitor | `termdriver2` | 29,00 € |
| 10 | WHIDBoard Pro / Hardware Auditing & Firmware Toolkit | `whidboard-pro` | 295,00 € |
| 11 | Bus Pirate 5 Auxiliary Cable / Logic Analyzer Connection | `bus-pirate-5-auxiliary-cable` | 9,95 € |
| 12 | Bus Pirate 5 Raspberry Pi Pico Headers / Right-Angle | `bus-pirate-5-raspberry-pi-pico-headers` | 5,95 € |
| 13 | SPIDriver / USB SPI Debugging & Flash Programming Tool | `spi-driver` | 35,00 € |
| 14 | I2CDriver / USB I2C Control, Capture & Logic Analysis | `i2c-driver` | 35,00 € |

### Flipper Zero (`flipper-zero`) — 20 produit(s)

| Pos | Produit | Handle | Prix EUR |
|----:|---------|--------|--------:|
| 1 | Flipper Zero / Portable RFID, Sub-GHz & Hardware Multitool | `flipper-zero` | 149,17 € |
| 2 | Lab401 HardShell for Flipper Zero / Case & GPIO Guards | `lab401-hardshell-for-flipper-zero` | 29,95 € |
| 3 | Light Messenger - POV Light Painter for Flipper Zero | `light-messenger` | 29,00 € |
| 4 | Flipper Zero Wifi Devboard / ESP32-S2 WiFi & Debugging | `flipper-zero-wifi-devboard` | 32,50 € |
| 5 | KIISU - Compact Flipper alternative / RFID & NFC Tool | `kiisu` | 79,00 € |
| 6 | Flux Capacitor / Flipper Zero CC1101 Radio Amplifier | `flux-capacitor` | 65,00 € |
| 7 | IR Blaster / Rabbit Labs Infrared for Flipper Zero | `ir-blaster` | 34,95 € |
| 8 | Flipper Zero Silicone Case / Soft-Touch Port Access | `flipper-zero-silicon-case` | 13,33 € |
| 9 | CANBus Module for Flipper Zero / CAN & OBD-II Diagnostics | `ec-canbus` | 39,00 € |
| 10 | DigiLab for FlipperZero / SPI, I2C & Signal Probing | `digilab-for-flipperzero` | 49,00 € |
| 11 | Flipper Zero Video Game Module / RP2040 & Video Output | `flipper-zero-video-game-module` | 45,85 € |
| 12 | Flipper Zero Prototyping Boards / Custom GPIO Modules | `flipper-zero-prototyping-boards` | 9,08 € |
| 13 | Flipper Zero Screen Protectors / Three-Pack Screen Care | `flipper-zero-screen-protectors` | 7,50 € |
| 14 | AWOK GPS Antenna AD-301 / Active Multi-System Antenna | `awok-gps-antenna-ad-301` | 45,00 € |
| 15 | 13.56MHz RFID Range Boosters / Passive NFC Antennas | `13-56mhz-rfid-range-boosters` | 10,00 € |
| 16 | NFC Booster Antenna for Flipper Zero / Passive NFC Boost | `nfc-booster-antenna-for-flipper-zero` | 10,00 € |
| 17 | NFC Range Extender for Flipper Zero / Passive Antennas | `nfc-range-extender-for-flipper-zero` | 75,00 € |
| 18 | Lab401 microSD Card for Flipper Zero / 8GB Storage | `lab401-microsd-card-for-flipper-zero` | 16,67 € |
| 19 | MastaBlasta - IR Blaster / Flipper Zero Focused Infrared | `masta-blasta-ir-blaster` | 52,00 € |
| 20 | Slim Shady - IR Blaster / Flipper Zero Wide-Angle IR | `slim-shady-ir-blaster` | 68,00 € |

### Flipper Zero / Accessories (`flipper-zero-accessories`) — 13 produit(s)

| Pos | Produit | Handle | Prix EUR |
|----:|---------|--------|--------:|
| 1 | Lab401 HardShell for Flipper Zero / Case & GPIO Guards | `lab401-hardshell-for-flipper-zero` | 29,95 € |
| 2 | Light Messenger - POV Light Painter for Flipper Zero | `light-messenger` | 29,00 € |
| 3 | KIISU - Compact Flipper alternative / RFID & NFC Tool | `kiisu` | 79,00 € |
| 4 | Flux Capacitor / Flipper Zero CC1101 Radio Amplifier | `flux-capacitor` | 65,00 € |
| 5 | Slim Shady - IR Blaster / Flipper Zero Wide-Angle IR | `slim-shady-ir-blaster` | 68,00 € |
| 6 | MastaBlasta - IR Blaster / Flipper Zero Focused Infrared | `masta-blasta-ir-blaster` | 52,00 € |
| 7 | IR Blaster / Rabbit Labs Infrared for Flipper Zero | `ir-blaster` | 34,95 € |
| 8 | CANBus Module for Flipper Zero / CAN & OBD-II Diagnostics | `ec-canbus` | 39,00 € |
| 9 | DigiLab for FlipperZero / SPI, I2C & Signal Probing | `digilab-for-flipperzero` | 49,00 € |
| 10 | NFC Booster Antenna for Flipper Zero / Passive NFC Boost | `nfc-booster-antenna-for-flipper-zero` | 10,00 € |
| 11 | NFC Range Extender for Flipper Zero / Passive Antennas | `nfc-range-extender-for-flipper-zero` | 75,00 € |
| 12 | AWOK GPS Antenna AD-301 / Active Multi-System Antenna | `awok-gps-antenna-ad-301` | 45,00 € |
| 13 | Lab401 microSD Card for Flipper Zero / 8GB Storage | `lab401-microsd-card-for-flipper-zero` | 16,67 € |

### Flipper Zero / Official (`flipper-zero-official`) — 6 produit(s)

| Pos | Produit | Handle | Prix EUR |
|----:|---------|--------|--------:|
| 1 | Flipper Zero / Portable RFID, Sub-GHz & Hardware Multitool | `flipper-zero` | 149,17 € |
| 2 | Flipper Zero Wifi Devboard / ESP32-S2 WiFi & Debugging | `flipper-zero-wifi-devboard` | 32,50 € |
| 3 | Flipper Zero Silicone Case / Soft-Touch Port Access | `flipper-zero-silicon-case` | 13,33 € |
| 4 | Flipper Zero Screen Protectors / Three-Pack Screen Care | `flipper-zero-screen-protectors` | 7,50 € |
| 5 | Flipper Zero Prototyping Boards / Custom GPIO Modules | `flipper-zero-prototyping-boards` | 9,08 € |
| 6 | Flipper Zero Video Game Module / RP2040 & Video Output | `flipper-zero-video-game-module` | 45,85 € |

### Hak5 (`hak5`) — 19 produit(s)

| Pos | Produit | Handle | Prix EUR |
|----:|---------|--------|--------:|
| 1 | Shark Jack Display / Interactive Ethernet Auditing Tool | `shark-jack-display` | 185,00 € |
| 2 | Rubber Ducky / USB-A and USB-C Keystroke Injection Tool | `rubber-ducky` | 150,00 € |
| 3 | Packet Squirrel (Mark II) / Ethernet Network Testing | `packet-squirrel-mark-ii` | 180,00 € |
| 4 | O.MG Cable / Wireless USB Keystroke Injection Platform | `o-mg-cable` | 295,00 € |
| 5 | Shark Jack / Portable Ethernet Network Auditing Tool | `shark-jack` | 160,00 € |
| 6 | Bash Bunny Mark II / USB Device Emulation and Payloads | `hid-emulator-bash-bunny` | 355,00 € |
| 7 | LAN Turtle / Ethernet Auditing and Remote Network Access | `hak5-network-mitm-lan-turtle` | 120,00 € |
| 8 | O.MG Cable Pack / USB Payload Cables and Programming Tools | `o-mg-cable-pack` | 1190,00 € |
| 9 | O.MG Malicious Cable Detector / USB Testing and Blocking | `o-mg-malicious-cable-detector` | 69,00 € |
| 10 | O.MG Cable Programmer (USB A+C) / Setup and Flashing | `o-mg-cable-programmer-usb-a` | 49,00 € |
| 11 | Plunder Bug / USB-C Ethernet Tap for Packet Capture | `hak5-plunder-bug-lan-sniffer` | 195,00 € |
| 12 | Screen Crab / HDMI Capture and Remote Video Monitoring | `hak5-screen-crab` | 400,00 € |
| 13 | Packet Squirrel Pocket Guide / Mark II Payload Scripting | `packet-squirrel-pocket-guide` | 19,95 € |
| 14 | Rubber Ducky Pocket Guide / DuckyScript Payload Manual | `rubber-ducky-pocket-guide` | 19,95 € |
| 15 | Rubber Ducky Textbook / HID Injection and DuckyScript | `rubber-ducky-textbook` | 60,00 € |
| 16 | Packet Squirrel Textbook / Network Capture and Payloads | `packet-squirrel-textbook` | 49,00 € |
| 17 | O.MG Adapter Elite / USB-C Payloads and Wireless Control | `o-mg-adapter-elite` | 295,00 € |
| 18 | O.MG Unblocker / WiFi-Controlled USB Payload Device | `o-mg-unblocker` | 210,00 € |
| 19 | O.MG Plug / Wireless USB Keystroke Injection Platform | `o-mg-plug-elite` | 120,00 € |

### Hardware (`hardware`) — 77 produit(s)

Collection paginée — total fusionné : **77** produits (hardware-page-2.html : 36, hardware-page-3.html : 5, hardware.html : 36).

| Pos | Produit | Handle | Prix EUR |
|----:|---------|--------|--------:|
| 1 | O.MG Cable Pack / USB Payload Cables and Programming Tools | `o-mg-cable-pack` | 1190,00 € |
| 2 | O.MG Malicious Cable Detector / USB Testing and Blocking | `o-mg-malicious-cable-detector` | 69,00 € |
| 3 | BugBlat miniSniffer 2 / USB Traffic Capture & Analysis | `bugblat-minisniffer-v2` | 149,00 € |
| 4 | Chameleon Lite / 13.56MHz and 125KHz RFID Emulator | `chameleon-lite` | 59,00 € |
| 5 | Chameleon Ultra DevKit / LF and HF RFID Development | `chameleon-ultra-devkit` | 129,00 € |
| 6 | GreatFET One / Open-Source Hardware Debugging Platform | `greatfet` | 125,00 € |
| 7 | GreatFET One - Daffodil / Breadboard Prototyping Shield | `greatfet-one-daffodil` | 35,00 € |
| 8 | Flipper Zero Video Game Module / RP2040 & Video Output | `flipper-zero-video-game-module` | 45,85 € |
| 9 | Bus Pirate 5 Probe Kit / Hooks & Breadboard Connections | `bus-pirate-5-auxilary-probe-kit` | 11,95 € |
| 10 | Bus Pirate 5 Auxiliary Cable Set / Jumpers & Splitters | `bus-pirate-5-coloured-auxiliary-cable` | 11,95 € |
| 11 | Bus Pirate 5 Auxiliary Cable / Logic Analyzer Connection | `bus-pirate-5-auxiliary-cable` | 9,95 € |
| 12 | Bus Pirate 5 KF141 Quick Connect / Spring-Clamp Adapter | `bus-pirate-5-kf141-quick-connect` | 6,95 € |
| 13 | Bus Pirate 5 Raspberry Pi Pico Headers / Right-Angle | `bus-pirate-5-raspberry-pi-pico-headers` | 5,95 € |
| 14 | Packet Squirrel (Mark II) / Ethernet Network Testing | `packet-squirrel-mark-ii` | 180,00 € |
| 15 | Rubber Ducky Pocket Guide / DuckyScript Payload Manual | `rubber-ducky-pocket-guide` | 19,95 € |
| 16 | Bus Pirate 5 Flash Adapters / DIP8, SOP8 & WSON8 Kit | `bus-pirate-5-flash-adaptors` | 34,95 € |
| 17 | Bus Pirate 5 SIM & Smart IC Adapter / Card Interface | `bus-pirate-5-sim-smart-ic-adapter` | 14,95 € |
| 18 | Cynthion / USB Protocol Analysis & Device Development | `cynthion` | 209,00 € |
| 19 | ESP RFID Tool / WiFi Wiegand Capture and Replay Tool | `wiegand-sniffer-esp-rfid-tool` | 30,00 € |
| 20 | PiKVM v4 Plus - Hardware RAT / Remote Computer Control | `pikvm-v4-plus-hardware-rat` | 359,00 € |
| 21 | NanoVNA-F / 10 kHz-1.5 GHz Vector Network Analyser | `nanovna` | 110,00 € |
| 22 | TinySA Ultra+ / Spectrum Analyser with 5.4 GHz Ultra Mode | `tinysa-ultra` | 163,00 € |
| 23 | PandwaRF Rogue Pro / RF Remote Capture and Analysis | `pandwarf-rogue-pro` | 579,00 € |
| 24 | DigiLab for FlipperZero / SPI, I2C & Signal Probing | `digilab-for-flipperzero` | 49,00 € |
| 25 | SPIDriver / USB SPI Debugging & Flash Programming Tool | `spi-driver` | 35,00 € |
| 26 | I2CDriver / USB I2C Control, Capture & Logic Analysis | `i2c-driver` | 35,00 € |
| 27 | PandwaRF Kaiju Pro License / Rolling-Code Analysis | `pandwarf-kaiju-license` | 290,00 € |
| 28 | 13.56MHZ RFID Field Strength Meter / Passive NFC Testing | `13-56mhz-rfid-field-strength-meter` | 80,00 € |
| 29 | WHIDBoard Pro / Hardware Auditing & Firmware Toolkit | `whidboard-pro` | 295,00 € |
| 30 | SkimmerGuard / ATM & Payment Card Skimmer Detector | `skimmerguard` | 49,00 € |
| 31 | AWOK GPS Antenna AD-301 / Active Multi-System Antenna | `awok-gps-antenna-ad-301` | 45,00 € |
| 32 | KIISU - Compact Flipper alternative / RFID & NFC Tool | `kiisu` | 79,00 € |
| 33 | O.MG Adapter Elite / USB-C Payloads and Wireless Control | `o-mg-adapter-elite` | 295,00 € |
| 34 | O.MG Plug / Wireless USB Keystroke Injection Platform | `o-mg-plug-elite` | 120,00 € |
| 35 | O.MG Unblocker / WiFi-Controlled USB Payload Device | `o-mg-unblocker` | 210,00 € |
| 36 | NFC Range Extender for Flipper Zero / Passive Antennas | `nfc-range-extender-for-flipper-zero` | 75,00 € |
| 37 | 13.56MHz RFID Range Boosters / Passive NFC Antennas | `13-56mhz-rfid-range-boosters` | 10,00 € |
| 38 | NFC Booster Antenna for Flipper Zero / Passive NFC Boost | `nfc-booster-antenna-for-flipper-zero` | 10,00 € |
| 39 | LiteVNA (NanoVNA Compatible) / 50 kHz-6.3 GHz Analyser | `litevna` | 192,00 € |
| 40 | ChipWhisperer - HuskyPlus / Side-Channel & Glitching | `chipwhisperer-huskyplus` | 1195,00 € |
| 41 | Shark Jack Display / Interactive Ethernet Auditing Tool | `shark-jack-display` | 185,00 € |
| 42 | Flipper Zero / Portable RFID, Sub-GHz & Hardware Multitool | `flipper-zero` | 149,17 € |
| 43 | ICopy-XS / Portable LF and HF RFID Cloning Device | `icopy-x` | 375,00 € |
| 44 | MACOBOX - Hardware Pentest Platform / Firmware Analysis | `macobox-hardware-pentest-platform` | 9700,00 € |
| 45 | Chameleon Ultra / Wireless LF and HF RFID Emulator | `chameleon-ultra` | 129,00 € |
| 46 | RFID Field Detector Ultra - LF/HF/UHF / Passive Detection | `rfid-field-detector-ultra` | 24,95 € |
| 47 | Proxmark 3 RDV4.01 / LF and HF RFID Research Multi-tool | `proxmark-3-rdv4` | 339,00 € |
| 48 | Bus Pirate 5 / Hardware Debugging & Protocol Interface | `bus-pirate-v5` | 89,00 € |
| 49 | UHFKill / Permanent UHF RFID Tag Deactivation Tool | `uhfkill` | 1495,00 € |
| 50 | KrakenSDR / Five-Receiver Radio Direction Finding Kit | `krakensdr` | 1020,00 € |
| 51 | Blade RF 2.0 Micro xA4 / Full-Duplex 2x2 MIMO SDR | `bladerf-sdr-2-micro-xa4` | 749,00 € |
| 52 | TermDriver 2 / USB Serial Adapter & Standalone Monitor | `termdriver2` | 29,00 € |
| 53 | NFCKill (Professional Version) / RFID Deactivation Tool | `nfckill-professional-version` | 265,00 € |
| 54 | O.MG Cable / Wireless USB Keystroke Injection Platform | `o-mg-cable` | 295,00 € |
| 55 | Alfa AWUS036ACHM / Dual-Band WiFi Pentesting Adapter | `alpha-awus036achm` | 59,00 € |
| 56 | DL533N XL / Long Range HF RFID Reader / Writer | `long-range-rfid-reader-writer-dl533n-xl` | 129,00 € |
| 57 | USBKill V4 / USB Hardware Surge Stress-Testing Kits | `usbkill-v4-pro-kit` | 139,95 € |
| 58 | Shark Jack / Portable Ethernet Network Auditing Tool | `shark-jack` | 160,00 € |
| 59 | Bash Bunny Mark II / USB Device Emulation and Payloads | `hid-emulator-bash-bunny` | 355,00 € |
| 60 | Rubber Ducky / USB-A and USB-C Keystroke Injection Tool | `rubber-ducky` | 150,00 € |
| 61 | Proxmark 3 RDV4.01 / Long Range HF Antenna Pack | `proxmark-3-rdv4-long-range-hf-antenna-1` | 89,95 € |
| 62 | InputStick RAT / Bluetooth USB Keyboard & Mouse Control | `inputstick-rat` | 44,99 € |
| 63 | USB RFID Reader/Writer DL533N / 13.56MHz LibNFC Tool | `usb-rfid-reader-writer-dl533n` | 55,00 € |
| 64 | Lab401 Flashing Multi-tool for Proxmark & Chameleon | `proxmark-3-rdv4-flash-support` | 34,95 € |
| 65 | LAN Turtle / Ethernet Auditing and Remote Network Access | `hak5-network-mitm-lan-turtle` | 120,00 € |
| 66 | Plunder Bug / USB-C Ethernet Tap for Packet Capture | `hak5-plunder-bug-lan-sniffer` | 195,00 € |
| 67 | Proxmark 3 RDV4 - SIM/SAM Extension / Debug and Program | `proxmark-3-rdv4-sim-sam-extension` | 19,95 € |
| 68 | RFID Range Extenders / Passive 13.56MHz Antennas | `rfid-antenna-extender` | 35,00 € |
| 69 | Pocket USB Power Supply / Adjustable 0-30V Output | `pocket-usb-power-supply` | 19,99 € |
| 70 | iCS Decoder / iCLASS® SE / SEOS Accessory for iCopy-X | `ics-decoder-iclass-se-seos-cloner-decoder` | 425,00 € |
| 71 | Proxmark 3 RDV4.01 / Long Range LF Antenna Pack | `proxmark-3-rdv4-01-long-range-lf-antenna-pack` | 89,95 € |
| 72 | Proxmark 3 RDV4.01 / Upgrade and Replacement Antennas | `proxmark-3-rdv4-01-upgraded-replacement-antenna` | 24,99 € |
| 73 | Screen Crab / HDMI Capture and Remote Video Monitoring | `hak5-screen-crab` | 400,00 € |
| 74 | ProxRF 125KHz Biochip Antenna / Proxmark RFID Accessory | `proxrf-125khz-biochip-antenna` | 29,99 € |
| 75 | Proxmark 3 RDV4 / BlueShark Standalone Module | `proxmark-3-rdv4-standalone-kit` | 99,00 € |
| 76 | USB Bluetooth Adaptor HC-06 / Proxmark 3 RDV4.01 | `usb-bluetooth-adaptor-hc-06` | 29,00 € |
| 77 | O.MG Cable Programmer (USB A+C) / Setup and Flashing | `o-mg-cable-programmer-usb-a` | 49,00 € |

### Hardware Audit (`hardware-audit`) — 21 produit(s)

| Pos | Produit | Handle | Prix EUR |
|----:|---------|--------|--------:|
| 1 | ChipWhisperer - HuskyPlus / Side-Channel & Glitching | `chipwhisperer-huskyplus` | 1195,00 € |
| 2 | WHIDBoard Pro / Hardware Auditing & Firmware Toolkit | `whidboard-pro` | 295,00 € |
| 3 | MACOBOX - Hardware Pentest Platform / Firmware Analysis | `macobox-hardware-pentest-platform` | 9700,00 € |
| 4 | Bus Pirate 5 / Hardware Debugging & Protocol Interface | `bus-pirate-v5` | 89,00 € |
| 5 | TermDriver 2 / USB Serial Adapter & Standalone Monitor | `termdriver2` | 29,00 € |
| 6 | Faulty Cat / Portable EMFI & Voltage Glitching Tool | `faultycat` | 165,00 € |
| 7 | I2CDriver / USB I2C Control, Capture & Logic Analysis | `i2c-driver` | 35,00 € |
| 8 | Cynthion / USB Protocol Analysis & Device Development | `cynthion` | 209,00 € |
| 9 | SPIDriver / USB SPI Debugging & Flash Programming Tool | `spi-driver` | 35,00 € |
| 10 | GreatFET One / Open-Source Hardware Debugging Platform | `greatfet` | 125,00 € |
| 11 | BugBlat miniSniffer 2 / USB Traffic Capture & Analysis | `bugblat-minisniffer-v2` | 149,00 € |
| 12 | GreatFET One - Daffodil / Breadboard Prototyping Shield | `greatfet-one-daffodil` | 35,00 € |
| 13 | CANBus Module for Flipper Zero / CAN & OBD-II Diagnostics | `ec-canbus` | 39,00 € |
| 14 | Bus Pirate 5 SIM & Smart IC Adapter / Card Interface | `bus-pirate-5-sim-smart-ic-adapter` | 14,95 € |
| 15 | Bus Pirate 5 Flash Adapters / DIP8, SOP8 & WSON8 Kit | `bus-pirate-5-flash-adaptors` | 34,95 € |
| 16 | Bus Pirate 5 Probe Kit / Hooks & Breadboard Connections | `bus-pirate-5-auxilary-probe-kit` | 11,95 € |
| 17 | Bus Pirate 5 Auxiliary Cable Set / Jumpers & Splitters | `bus-pirate-5-coloured-auxiliary-cable` | 11,95 € |
| 18 | Bus Pirate 5 KF141 Quick Connect / Spring-Clamp Adapter | `bus-pirate-5-kf141-quick-connect` | 6,95 € |
| 19 | Bus Pirate 5 Raspberry Pi Pico Headers / Right-Angle | `bus-pirate-5-raspberry-pi-pico-headers` | 5,95 € |
| 20 | Bus Pirate 5 Auxiliary Cable / Logic Analyzer Connection | `bus-pirate-5-auxiliary-cable` | 9,95 € |
| 21 | Project Reboot: Hardware Audit Training Target | `project-reboot-hardware-target` | 102,50 € |

### Hardware Audit: Accessories (`hardware-audit-accessories`) — 10 produit(s)

| Pos | Produit | Handle | Prix EUR |
|----:|---------|--------|--------:|
| 1 | Bus Pirate 5 SIM & Smart IC Adapter / Card Interface | `bus-pirate-5-sim-smart-ic-adapter` | 14,95 € |
| 2 | Bus Pirate 5 Flash Adapters / DIP8, SOP8 & WSON8 Kit | `bus-pirate-5-flash-adaptors` | 34,95 € |
| 3 | Bus Pirate 5 Probe Kit / Hooks & Breadboard Connections | `bus-pirate-5-auxilary-probe-kit` | 11,95 € |
| 4 | CANBus Module for Flipper Zero / CAN & OBD-II Diagnostics | `ec-canbus` | 39,00 € |
| 5 | Bus Pirate 5 Auxiliary Cable Set / Jumpers & Splitters | `bus-pirate-5-coloured-auxiliary-cable` | 11,95 € |
| 6 | Bus Pirate 5 KF141 Quick Connect / Spring-Clamp Adapter | `bus-pirate-5-kf141-quick-connect` | 6,95 € |
| 7 | Project Reboot: Hardware Audit Training Target | `project-reboot-hardware-target` | 102,50 € |
| 8 | Bus Pirate 5 Auxiliary Cable / Logic Analyzer Connection | `bus-pirate-5-auxiliary-cable` | 9,95 € |
| 9 | Bus Pirate 5 Raspberry Pi Pico Headers / Right-Angle | `bus-pirate-5-raspberry-pi-pico-headers` | 5,95 € |
| 10 | GreatFET One - Daffodil / Breadboard Prototyping Shield | `greatfet-one-daffodil` | 35,00 € |

### Hardware Audit: Debugging (`hardware-audit-debugging`) — 10 produit(s)

| Pos | Produit | Handle | Prix EUR |
|----:|---------|--------|--------:|
| 1 | WHIDBoard Pro / Hardware Auditing & Firmware Toolkit | `whidboard-pro` | 295,00 € |
| 2 | Bus Pirate 5 / Hardware Debugging & Protocol Interface | `bus-pirate-v5` | 89,00 € |
| 3 | Cynthion / USB Protocol Analysis & Device Development | `cynthion` | 209,00 € |
| 4 | GreatFET One / Open-Source Hardware Debugging Platform | `greatfet` | 125,00 € |
| 5 | TermDriver 2 / USB Serial Adapter & Standalone Monitor | `termdriver2` | 29,00 € |
| 6 | I2CDriver / USB I2C Control, Capture & Logic Analysis | `i2c-driver` | 35,00 € |
| 7 | SPIDriver / USB SPI Debugging & Flash Programming Tool | `spi-driver` | 35,00 € |
| 8 | BugBlat miniSniffer 2 / USB Traffic Capture & Analysis | `bugblat-minisniffer-v2` | 149,00 € |
| 9 | CANBus Module for Flipper Zero / CAN & OBD-II Diagnostics | `ec-canbus` | 39,00 € |
| 10 | ChipWhisperer - HuskyPlus / Side-Channel & Glitching | `chipwhisperer-huskyplus` | 1195,00 € |

### Hardware Audit: Hardware Audit Tools (`hardware-audit-hardware-audit-tools`) — 5 produit(s)

| Pos | Produit | Handle | Prix EUR |
|----:|---------|--------|--------:|
| 1 | MACOBOX - Hardware Pentest Platform / Firmware Analysis | `macobox-hardware-pentest-platform` | 9700,00 € |
| 2 | WHIDBoard Pro / Hardware Auditing & Firmware Toolkit | `whidboard-pro` | 295,00 € |
| 3 | Bus Pirate 5 / Hardware Debugging & Protocol Interface | `bus-pirate-v5` | 89,00 € |
| 4 | Faulty Cat / Portable EMFI & Voltage Glitching Tool | `faultycat` | 165,00 € |
| 5 | ChipWhisperer - HuskyPlus / Side-Channel & Glitching | `chipwhisperer-huskyplus` | 1195,00 € |

### Hardware Audit: Side Channel & Power Analysis (`hardware-audit-side-channel-power-analysis`) — 2 produit(s)

| Pos | Produit | Handle | Prix EUR |
|----:|---------|--------|--------:|
| 1 | Faulty Cat / Portable EMFI & Voltage Glitching Tool | `faultycat` | 165,00 € |
| 2 | ChipWhisperer - HuskyPlus / Side-Channel & Glitching | `chipwhisperer-huskyplus` | 1195,00 € |

### Home page (`frontpage`) — 34 produit(s)

| Pos | Produit | Handle | Prix EUR |
|----:|---------|--------|--------:|
| 1 | Lab401 Pentest Sticker Pack / Packs of 10, 20 or 50 | `lab401-hacker-stickers` | 8,00 € |
| 2 | Proxmark 3 RDV4.01 / LF and HF RFID Research Multi-tool | `proxmark-3-rdv4` | 339,00 € |
| 3 | ICopy-XS / Portable LF and HF RFID Cloning Device | `icopy-x` | 375,00 € |
| 4 | O.MG Cable / Wireless USB Keystroke Injection Platform | `o-mg-cable` | 295,00 € |
| 5 | NFC Booster Antenna for Flipper Zero / Passive NFC Boost | `nfc-booster-antenna-for-flipper-zero` | 10,00 € |
| 6 | O.MG Cable Programmer (USB A+C) / Setup and Flashing | `o-mg-cable-programmer-usb-a` | 49,00 € |
| 7 | DigiLab for FlipperZero / SPI, I2C & Signal Probing | `digilab-for-flipperzero` | 49,00 € |
| 8 | RFID Field Detector Ultra - LF/HF/UHF / Passive Detection | `rfid-field-detector-ultra` | 24,95 € |
| 9 | Blade RF 2.0 Micro xA4 / Full-Duplex 2x2 MIMO SDR | `bladerf-sdr-2-micro-xa4` | 749,00 € |
| 10 | NFCKill (Professional Version) / RFID Deactivation Tool | `nfckill-professional-version` | 265,00 € |
| 11 | KIISU - Compact Flipper alternative / RFID & NFC Tool | `kiisu` | 79,00 € |
| 12 | iCS Decoder / iCLASS® SE / SEOS Accessory for iCopy-X | `ics-decoder-iclass-se-seos-cloner-decoder` | 425,00 € |
| 13 | O.MG Malicious Cable Detector / USB Testing and Blocking | `o-mg-malicious-cable-detector` | 69,00 € |
| 14 | 13.56MHz RFID Range Boosters / Passive NFC Antennas | `13-56mhz-rfid-range-boosters` | 10,00 € |
| 15 | UHFKill / Permanent UHF RFID Tag Deactivation Tool | `uhfkill` | 1495,00 € |
| 16 | Alfa AWUS036ACHM / Dual-Band WiFi Pentesting Adapter | `alpha-awus036achm` | 59,00 € |
| 17 | ESP RFID Tool / WiFi Wiegand Capture and Replay Tool | `wiegand-sniffer-esp-rfid-tool` | 30,00 € |
| 18 | TinySA Ultra+ / Spectrum Analyser with 5.4 GHz Ultra Mode | `tinysa-ultra` | 163,00 € |
| 19 | NFC Range Extender for Flipper Zero / Passive Antennas | `nfc-range-extender-for-flipper-zero` | 75,00 € |
| 20 | PiKVM v4 Plus - Hardware RAT / Remote Computer Control | `pikvm-v4-plus-hardware-rat` | 359,00 € |
| 21 | WHIDBoard Pro / Hardware Auditing & Firmware Toolkit | `whidboard-pro` | 295,00 € |
| 22 | SkimmerGuard / ATM & Payment Card Skimmer Detector | `skimmerguard` | 49,00 € |
| 23 | O.MG Cable Pack / USB Payload Cables and Programming Tools | `o-mg-cable-pack` | 1190,00 € |
| 24 | PandwaRF Rogue Pro / RF Remote Capture and Analysis | `pandwarf-rogue-pro` | 579,00 € |
| 25 | NanoVNA-F / 10 kHz-1.5 GHz Vector Network Analyser | `nanovna` | 110,00 € |
| 26 | KrakenSDR / Five-Receiver Radio Direction Finding Kit | `krakensdr` | 1020,00 € |
| 27 | 13.56MHZ RFID Field Strength Meter / Passive NFC Testing | `13-56mhz-rfid-field-strength-meter` | 80,00 € |
| 28 | O.MG Plug / Wireless USB Keystroke Injection Platform | `o-mg-plug-elite` | 120,00 € |
| 29 | PandwaRF Marauder / Autonomous Dual-Frequency RF Capture | `pandwarf-marauder` | 979,00 € |
| 30 | LiteVNA (NanoVNA Compatible) / 50 kHz-6.3 GHz Analyser | `litevna` | 192,00 € |
| 31 | O.MG Unblocker / WiFi-Controlled USB Payload Device | `o-mg-unblocker` | 210,00 € |
| 32 | MACOBOX - Hardware Pentest Platform / Firmware Analysis | `macobox-hardware-pentest-platform` | 9700,00 € |
| 33 | PandwaRF Kaiju Pro License / Rolling-Code Analysis | `pandwarf-kaiju-license` | 290,00 € |
| 34 | O.MG Adapter Elite / USB-C Payloads and Wireless Control | `o-mg-adapter-elite` | 295,00 € |

### iCopy-X (`icopy-x`) — 2 produit(s)

| Pos | Produit | Handle | Prix EUR |
|----:|---------|--------|--------:|
| 1 | ICopy-XS / Portable LF and HF RFID Cloning Device | `icopy-x` | 375,00 € |
| 2 | iCS Decoder / iCLASS® SE / SEOS Accessory for iCopy-X | `ics-decoder-iclass-se-seos-cloner-decoder` | 425,00 € |

### iCopy-X Tags (`icopy-x-tags`) — 18 produit(s)

| Pos | Produit | Handle | Prix EUR |
|----:|---------|--------|--------:|
| 1 | iCopy-X Basic Tag Pack / 16 LF and HF RFID Blanks | `icopy-x-basic-tag-pack` | 19,95 € |
| 2 | iCopy-X Intermediate Tag Pack / 16 RFID Blank Cards | `icopy-x-intermediate-tag-pack` | 129,95 € |
| 3 | iCopy-X Advanced Tag Pack / 16 LF and HF Blank Cards | `icopy-x-advanced-tag-pack` | 189,95 € |
| 4 | MIFARE Classic® Compatible 1K 4-byte Gen1 Blank Tag | `mifare-classic-1k-4-byte-compatible` | 2,50 € |
| 5 | MIFARE Classic® Compatible 1K 4-byte Gen2 Blank Tag | `mifare-classic-1k-4-byte-compatible-gen2` | 2,50 € |
| 6 | MIFARE Classic® Compatible 1K 4-byte Gen2a Blank Tag | `mifare-classic-1k-4-byte-compatible-gen2a` | 2,95 € |
| 7 | MIFARE Classic® Compatible 1K 7-byte Gen2 Blank Tag | `mifare-classic-1k-7-byte-uid-compatible-gen2` | 21,95 € |
| 8 | MIFARE Classic® Compatible 4K 7-byte Gen2 Blank Tag | `mifare-classic-4k-7-byte-uid-compatible-gen2` | 21,95 € |
| 9 | MIFARE Classic® Compatible 4K 4-byte Gen2 Blank Tag | `mifare-classic-4k-4-byte-uid-compatible-gen2` | 21,95 € |
| 10 | MIFARE Ultralight® Compatible Blank Tag / iCopy-X UL | `mifare-ultralight-compatible` | 21,95 € |
| 11 | MIFARE Ultralight® C Compatible Blank Tag / iCopy-X | `mifare-ultralight-c-compatible` | 21,95 € |
| 12 | MIFARE Ultralight® EV1 Compatible Blank Tag / iCopy-X | `mifare-ultralight-c-compatible-1` | 21,95 € |
| 13 | MIFARE NTAG® Compatible Blank Tag / iCopy-X NTAG 21x | `mifare-ntag-compatible` | 21,95 € |
| 14 | ICODE® Compatible Blank Tag / SLI/SLIX for iCopy-X | `icode-compatible` | 21,95 € |
| 15 | iCLASS® Legacy Compatible Blank Tag / iCopy-X iCL | `iclass-legacy-compatible` | 24,95 € |
| 16 | iCLASS® Elite Compatible Blank Tag / iCopy-X iCE | `iclass-elite-compatible` | 29,95 € |
| 17 | iCLASS® SE/SEOS Compatible Blank Tag / iCopy-X | `iclass-se-seos-compatible` | 29,95 € |
| 18 | T5577 Low Frequency Blank Tag / iCopy-X ID1 RFID Blank | `t5577-low-frequency-blank` | 2,50 € |

### LEA Tools (`lea-tools`) — 0 produit(s)

Collection vide dans le clone (la page affiche « collection is empty »). À confirmer si elle est vide aussi sur le vrai site.

### Manuals & Guides (`manuals-guides`) — 4 produit(s)

| Pos | Produit | Handle | Prix EUR |
|----:|---------|--------|--------:|
| 1 | Rubber Ducky Textbook / HID Injection and DuckyScript | `rubber-ducky-textbook` | 60,00 € |
| 2 | Rubber Ducky Pocket Guide / DuckyScript Payload Manual | `rubber-ducky-pocket-guide` | 19,95 € |
| 3 | Packet Squirrel Textbook / Network Capture and Payloads | `packet-squirrel-textbook` | 49,00 € |
| 4 | Packet Squirrel Pocket Guide / Mark II Payload Scripting | `packet-squirrel-pocket-guide` | 19,95 € |

### Pentester Pack Builder (`pentester-pack`) — 35 produit(s)

| Pos | Produit | Handle | Prix EUR |
|----:|---------|--------|--------:|
| 1 | USB RFID Reader/Writer DL533N / 13.56MHz LibNFC Tool | `usb-rfid-reader-writer-dl533n` | 55,00 € |
| 2 | Chameleon Ultra / Wireless LF and HF RFID Emulator | `chameleon-ultra` | 129,00 € |
| 3 | Flipper Zero / Portable RFID, Sub-GHz & Hardware Multitool | `flipper-zero` | 149,17 € |
| 4 | Proxmark 3 RDV4.01 / LF and HF RFID Research Multi-tool | `proxmark-3-rdv4` | 339,00 € |
| 5 | ICopy-XS / Portable LF and HF RFID Cloning Device | `icopy-x` | 375,00 € |
| 6 | RFID Pentester Tag Pack / Basic, Standard and Complete | `rfid-pentester-tag-pack` | 90,00 € |
| 7 | RFID Field Detector Ultra - LF/HF/UHF / Passive Detection | `rfid-field-detector-ultra` | 24,95 € |
| 8 | 13.56MHZ RFID Field Strength Meter / Passive NFC Testing | `13-56mhz-rfid-field-strength-meter` | 80,00 € |
| 9 | Stealth Decoy Reader / RFID and PIN Audit Capture | `stealth-decoy-reader` | 375,00 € |
| 10 | Long-range MaxiProx 5375 125KHz Capture System | `long-range-maxiprox-5375-125khz-capture-system` | 995,00 € |
| 11 | Long-range iCLASS RFID Capture System / Up to 45 cm | `ppe-iclass-longrange-rfid-capture-system` | 895,00 € |
| 12 | Alfa AWUS036ACHM / Dual-Band WiFi Pentesting Adapter | `alpha-awus036achm` | 59,00 € |
| 13 | Shark Jack Display / Interactive Ethernet Auditing Tool | `shark-jack-display` | 185,00 € |
| 14 | PiKVM v4 Plus - Hardware RAT / Remote Computer Control | `pikvm-v4-plus-hardware-rat` | 359,00 € |
| 15 | Rubber Ducky / USB-A and USB-C Keystroke Injection Tool | `rubber-ducky` | 150,00 € |
| 16 | O.MG Plug / Wireless USB Keystroke Injection Platform | `o-mg-plug-elite` | 120,00 € |
| 17 | O.MG Adapter Elite / USB-C Payloads and Wireless Control | `o-mg-adapter-elite` | 295,00 € |
| 18 | O.MG Cable / Wireless USB Keystroke Injection Platform | `o-mg-cable` | 295,00 € |
| 19 | O.MG Cable Programmer (USB A+C) / Setup and Flashing | `o-mg-cable-programmer-usb-a` | 49,00 € |
| 20 | PandwaRF Rogue Pro / RF Remote Capture and Analysis | `pandwarf-rogue-pro` | 579,00 € |
| 21 | PortaPack H4M Pro / Standalone 100 kHz-6 GHz SDR | `portapack-h4m-pro` | 325,00 € |
| 22 | HackRF Pro / 100 kHz-6 GHz Software Defined Radio | `hackrf-pro` | 400,00 € |
| 23 | Blade RF 2.0 Micro xA4 / Full-Duplex 2x2 MIMO SDR | `bladerf-sdr-2-micro-xa4` | 749,00 € |
| 24 | SignalSDR Pro / Full-Duplex SDR for 5G Security Research | `signalsdr-pro` | 1100,00 € |
| 25 | KrakenSDR / Five-Receiver Radio Direction Finding Kit | `krakensdr` | 1020,00 € |
| 26 | TinySA Ultra+ / Spectrum Analyser with 5.4 GHz Ultra Mode | `tinysa-ultra` | 163,00 € |
| 27 | LiteVNA (NanoVNA Compatible) / 50 kHz-6.3 GHz Analyser | `litevna` | 192,00 € |
| 28 | Lab401 HardShell for Flipper Zero / Case & GPIO Guards | `lab401-hardshell-for-flipper-zero` | 29,95 € |
| 29 | Flux Capacitor / Flipper Zero CC1101 Radio Amplifier | `flux-capacitor` | 65,00 € |
| 30 | Bus Pirate 5 / Hardware Debugging & Protocol Interface | `bus-pirate-v5` | 89,00 € |
| 31 | WHIDBoard Pro / Hardware Auditing & Firmware Toolkit | `whidboard-pro` | 295,00 € |
| 32 | Project Reboot: Hardware Audit Training Target | `project-reboot-hardware-target` | 102,50 € |
| 33 | Lockpick Kit / Hooks, Rakes & Six Tension Wrenches | `lockpick-kit` | 49,95 € |
| 34 | Lock Bypass Kit / Door, Padlock & Combination-Lock Tools | `lock-bypass-kit` | 110,00 € |
| 35 | Key Molding Kit / Metal Key Duplication in the Field | `key-molding-kit` | 129,00 € |

### Pentesting (`pentesting`) — 61 produit(s)

Collection paginée — total fusionné : **61** produits (pentesting-page-2.html : 25, pentesting.html : 36).

| Pos | Produit | Handle | Prix EUR |
|----:|---------|--------|--------:|
| 1 | Screen Crab / HDMI Capture and Remote Video Monitoring | `hak5-screen-crab` | 400,00 € |
| 2 | UHFKill / Permanent UHF RFID Tag Deactivation Tool | `uhfkill` | 1495,00 € |
| 3 | Chameleon Ultra DevKit / LF and HF RFID Development | `chameleon-ultra-devkit` | 129,00 € |
| 4 | ESP RFID Tool / WiFi Wiegand Capture and Replay Tool | `wiegand-sniffer-esp-rfid-tool` | 30,00 € |
| 5 | KIISU - Compact Flipper alternative / RFID & NFC Tool | `kiisu` | 79,00 € |
| 6 | Chameleon Lite / 13.56MHz and 125KHz RFID Emulator | `chameleon-lite` | 59,00 € |
| 7 | TinySA Ultra+ / Spectrum Analyser with 5.4 GHz Ultra Mode | `tinysa-ultra` | 163,00 € |
| 8 | Alfa AWUS036ACHM / Dual-Band WiFi Pentesting Adapter | `alpha-awus036achm` | 59,00 € |
| 9 | PiKVM v4 Plus - Hardware RAT / Remote Computer Control | `pikvm-v4-plus-hardware-rat` | 359,00 € |
| 10 | TermDriver 2 / USB Serial Adapter & Standalone Monitor | `termdriver2` | 29,00 € |
| 11 | O.MG Cable Pack / USB Payload Cables and Programming Tools | `o-mg-cable-pack` | 1190,00 € |
| 12 | BugBlat miniSniffer 2 / USB Traffic Capture & Analysis | `bugblat-minisniffer-v2` | 149,00 € |
| 13 | HackRF Pro / 100 kHz-6 GHz Software Defined Radio | `hackrf-pro` | 400,00 € |
| 14 | I2CDriver / USB I2C Control, Capture & Logic Analysis | `i2c-driver` | 35,00 € |
| 15 | SPIDriver / USB SPI Debugging & Flash Programming Tool | `spi-driver` | 35,00 € |
| 16 | SignalSDR Pro / Full-Duplex SDR for 5G Security Research | `signalsdr-pro` | 1100,00 € |
| 17 | WHIDBoard Pro / Hardware Auditing & Firmware Toolkit | `whidboard-pro` | 295,00 € |
| 18 | SkimmerGuard / ATM & Payment Card Skimmer Detector | `skimmerguard` | 49,00 € |
| 19 | PandwaRF Rogue Pro / RF Remote Capture and Analysis | `pandwarf-rogue-pro` | 579,00 € |
| 20 | PandwaRF Kaiju Pro License / Rolling-Code Analysis | `pandwarf-kaiju-license` | 290,00 € |
| 21 | ATLAS: Standard Licence / 1-Year Android Audit Platform | `atlas-1-year-licence` | 120,00 € |
| 22 | Shark Jack Display / Interactive Ethernet Auditing Tool | `shark-jack-display` | 185,00 € |
| 23 | UHFKill - Tag Testing Service / UHF Compatibility Reports | `uhfkill-tag-testing-service` | 250,00 € |
| 24 | Industrial Handheld UHF Reader / Tag Deactivation Checks | `industrial-handheld-uhf-reader` | 975,00 € |
| 25 | Phantom Drive / AES-256 USB Storage with Hidden Partition | `phantom-drive` | 49,95 € |
| 26 | ICopy-XS / Portable LF and HF RFID Cloning Device | `icopy-x` | 375,00 € |
| 27 | Proxmark 5 / LF and HF RFID Research and Emulation | `proxmark-5` | 325,00 € |
| 28 | Flipper Zero / Portable RFID, Sub-GHz & Hardware Multitool | `flipper-zero` | 149,17 € |
| 29 | O.MG Cable / Wireless USB Keystroke Injection Platform | `o-mg-cable` | 295,00 € |
| 30 | Proxmark 3 RDV4.01 / LF and HF RFID Research Multi-tool | `proxmark-3-rdv4` | 339,00 € |
| 31 | Rubber Ducky / USB-A and USB-C Keystroke Injection Tool | `rubber-ducky` | 150,00 € |
| 32 | Chameleon Ultra / Wireless LF and HF RFID Emulator | `chameleon-ultra` | 129,00 € |
| 33 | PandwaRF Marauder / Autonomous Dual-Frequency RF Capture | `pandwarf-marauder` | 979,00 € |
| 34 | Lab401 Pentest Sticker Pack / Packs of 10, 20 or 50 | `lab401-hacker-stickers` | 8,00 € |
| 35 | Long-range MaxiProx 5375 125KHz Capture System | `long-range-maxiprox-5375-125khz-capture-system` | 995,00 € |
| 36 | Dual Mode Paxton Long Range / Stealth Decoy Reader | `dual-mode-paxton-long-range-stealth-decoy-reader` | 475,00 € |
| 37 | Long-range iCLASS RFID Capture System / Up to 45 cm | `ppe-iclass-longrange-rfid-capture-system` | 895,00 € |
| 38 | Stealth Decoy Reader / RFID and PIN Audit Capture | `stealth-decoy-reader` | 375,00 € |
| 39 | Proxmark 3 RDV4 / BlueShark Standalone Module | `proxmark-3-rdv4-standalone-kit` | 99,00 € |
| 40 | Bash Bunny Mark II / USB Device Emulation and Payloads | `hid-emulator-bash-bunny` | 355,00 € |
| 41 | Keysy LF RFID Duplicator & Emulator / 125KHz, 4 Slots | `keysy-lf-rfid-emulator-duplicator` | 65,00 € |
| 42 | USBKill V4 / USB Hardware Surge Stress-Testing Kits | `usbkill-v4-pro-kit` | 139,95 € |
| 43 | Multi-RFID Keyfob / Six Passive LF and HF Blank Tags | `multi-rfid-keyfob` | 49,00 € |
| 44 | MACOBOX - Hardware Pentest Platform / Firmware Analysis | `macobox-hardware-pentest-platform` | 9700,00 € |
| 45 | InputStick RAT / Bluetooth USB Keyboard & Mouse Control | `inputstick-rat` | 44,99 € |
| 46 | Flux Capacitor / Flipper Zero CC1101 Radio Amplifier | `flux-capacitor` | 65,00 € |
| 47 | USB RFID Reader/Writer DL533N / 13.56MHz LibNFC Tool | `usb-rfid-reader-writer-dl533n` | 55,00 € |
| 48 | O.MG Unblocker / WiFi-Controlled USB Payload Device | `o-mg-unblocker` | 210,00 € |
| 49 | Shark Jack / Portable Ethernet Network Auditing Tool | `shark-jack` | 160,00 € |
| 50 | O.MG Plug / Wireless USB Keystroke Injection Platform | `o-mg-plug-elite` | 120,00 € |
| 51 | O.MG Cable Programmer (USB A+C) / Setup and Flashing | `o-mg-cable-programmer-usb-a` | 49,00 € |
| 52 | IR Blaster / Rabbit Labs Infrared for Flipper Zero | `ir-blaster` | 34,95 € |
| 53 | O.MG Adapter Elite / USB-C Payloads and Wireless Control | `o-mg-adapter-elite` | 295,00 € |
| 54 | DL533N XL / Long Range HF RFID Reader / Writer | `long-range-rfid-reader-writer-dl533n-xl` | 129,00 € |
| 55 | NFCKill (Professional Version) / RFID Deactivation Tool | `nfckill-professional-version` | 265,00 € |
| 56 | Blade RF 2.0 Micro xA4 / Full-Duplex 2x2 MIMO SDR | `bladerf-sdr-2-micro-xa4` | 749,00 € |
| 57 | RFID Field Detector Ultra - LF/HF/UHF / Passive Detection | `rfid-field-detector-ultra` | 24,95 € |
| 58 | LAN Turtle / Ethernet Auditing and Remote Network Access | `hak5-network-mitm-lan-turtle` | 120,00 € |
| 59 | Plunder Bug / USB-C Ethernet Tap for Packet Capture | `hak5-plunder-bug-lan-sniffer` | 195,00 € |
| 60 | O.MG Malicious Cable Detector / USB Testing and Blocking | `o-mg-malicious-cable-detector` | 69,00 € |
| 61 | Packet Squirrel (Mark II) / Ethernet Network Testing | `packet-squirrel-mark-ii` | 180,00 € |

### Pentesting: Computer (`pentesting-computer`) — 19 produit(s)

| Pos | Produit | Handle | Prix EUR |
|----:|---------|--------|--------:|
| 1 | Rubber Ducky / USB-A and USB-C Keystroke Injection Tool | `rubber-ducky` | 150,00 € |
| 2 | InputStick RAT / Bluetooth USB Keyboard & Mouse Control | `inputstick-rat` | 44,99 € |
| 3 | PiKVM v4 Plus - Hardware RAT / Remote Computer Control | `pikvm-v4-plus-hardware-rat` | 359,00 € |
| 4 | Screen Crab / HDMI Capture and Remote Video Monitoring | `hak5-screen-crab` | 400,00 € |
| 5 | Bash Bunny Mark II / USB Device Emulation and Payloads | `hid-emulator-bash-bunny` | 355,00 € |
| 6 | Shark Jack / Portable Ethernet Network Auditing Tool | `shark-jack` | 160,00 € |
| 7 | LAN Turtle / Ethernet Auditing and Remote Network Access | `hak5-network-mitm-lan-turtle` | 120,00 € |
| 8 | Plunder Bug / USB-C Ethernet Tap for Packet Capture | `hak5-plunder-bug-lan-sniffer` | 195,00 € |
| 9 | USBKill V4 / USB Hardware Surge Stress-Testing Kits | `usbkill-v4-pro-kit` | 139,95 € |
| 10 | O.MG Adapter Elite / USB-C Payloads and Wireless Control | `o-mg-adapter-elite` | 295,00 € |
| 11 | O.MG Plug / Wireless USB Keystroke Injection Platform | `o-mg-plug-elite` | 120,00 € |
| 12 | O.MG Unblocker / WiFi-Controlled USB Payload Device | `o-mg-unblocker` | 210,00 € |
| 13 | Flipper Zero / Portable RFID, Sub-GHz & Hardware Multitool | `flipper-zero` | 149,17 € |
| 14 | Alfa AWUS036ACHM / Dual-Band WiFi Pentesting Adapter | `alpha-awus036achm` | 59,00 € |
| 15 | Glytch GPS Module for Pineapple Pager / GPS Wardriving | `glytch-gps-module-for-pineapple-pager` | 79,00 € |
| 16 | Glytch Mesh Module for Pineapple Pager / LoRa Messaging | `glytch-mesh-module-for-pineapple-pager` | 79,00 € |
| 17 | Glytch Ethernet Module for Pineapple Pager / 10/100 LAN | `glytch-ethernet-module-for-pineapple-pager` | 59,00 € |
| 18 | Shark Jack Display / Interactive Ethernet Auditing Tool | `shark-jack-display` | 185,00 € |
| 19 | Phantom Drive / AES-256 USB Storage with Hidden Partition | `phantom-drive` | 49,95 € |

### Pentesting: Debug / Development (`pentesting-debug-development`) — 9 produit(s)

| Pos | Produit | Handle | Prix EUR |
|----:|---------|--------|--------:|
| 1 | MACOBOX - Hardware Pentest Platform / Firmware Analysis | `macobox-hardware-pentest-platform` | 9700,00 € |
| 2 | WHIDBoard Pro / Hardware Auditing & Firmware Toolkit | `whidboard-pro` | 295,00 € |
| 3 | BugBlat miniSniffer 2 / USB Traffic Capture & Analysis | `bugblat-minisniffer-v2` | 149,00 € |
| 4 | GreatFET One / Open-Source Hardware Debugging Platform | `greatfet` | 125,00 € |
| 5 | GreatFET One - Daffodil / Breadboard Prototyping Shield | `greatfet-one-daffodil` | 35,00 € |
| 6 | SPIDriver / USB SPI Debugging & Flash Programming Tool | `spi-driver` | 35,00 € |
| 7 | I2CDriver / USB I2C Control, Capture & Logic Analysis | `i2c-driver` | 35,00 € |
| 8 | TermDriver 2 / USB Serial Adapter & Standalone Monitor | `termdriver2` | 29,00 € |
| 9 | Bus Pirate 5 SIM & Smart IC Adapter / Card Interface | `bus-pirate-5-sim-smart-ic-adapter` | 14,95 € |

### Pentesting: Implants (`pentesting-implants-1`) — 21 produit(s)

| Pos | Produit | Handle | Prix EUR |
|----:|---------|--------|--------:|
| 1 | Stealth Decoy Reader / RFID and PIN Audit Capture | `stealth-decoy-reader` | 375,00 € |
| 2 | PiKVM v4 Plus - Hardware RAT / Remote Computer Control | `pikvm-v4-plus-hardware-rat` | 359,00 € |
| 3 | InputStick RAT / Bluetooth USB Keyboard & Mouse Control | `inputstick-rat` | 44,99 € |
| 4 | O.MG Cable / Wireless USB Keystroke Injection Platform | `o-mg-cable` | 295,00 € |
| 5 | O.MG Plug / Wireless USB Keystroke Injection Platform | `o-mg-plug-elite` | 120,00 € |
| 6 | O.MG Unblocker / WiFi-Controlled USB Payload Device | `o-mg-unblocker` | 210,00 € |
| 7 | O.MG Adapter Elite / USB-C Payloads and Wireless Control | `o-mg-adapter-elite` | 295,00 € |
| 8 | Rubber Ducky / USB-A and USB-C Keystroke Injection Tool | `rubber-ducky` | 150,00 € |
| 9 | Screen Crab / HDMI Capture and Remote Video Monitoring | `hak5-screen-crab` | 400,00 € |
| 10 | ESP RFID Tool / WiFi Wiegand Capture and Replay Tool | `wiegand-sniffer-esp-rfid-tool` | 30,00 € |
| 11 | Packet Squirrel (Mark II) / Ethernet Network Testing | `packet-squirrel-mark-ii` | 180,00 € |
| 12 | Bash Bunny Mark II / USB Device Emulation and Payloads | `hid-emulator-bash-bunny` | 355,00 € |
| 13 | USBKill V4 / USB Hardware Surge Stress-Testing Kits | `usbkill-v4-pro-kit` | 139,95 € |
| 14 | Shark Jack / Portable Ethernet Network Auditing Tool | `shark-jack` | 160,00 € |
| 15 | O.MG Cable Programmer (USB A+C) / Setup and Flashing | `o-mg-cable-programmer-usb-a` | 49,00 € |
| 16 | LAN Turtle / Ethernet Auditing and Remote Network Access | `hak5-network-mitm-lan-turtle` | 120,00 € |
| 17 | Plunder Bug / USB-C Ethernet Tap for Packet Capture | `hak5-plunder-bug-lan-sniffer` | 195,00 € |
| 18 | O.MG Malicious Cable Detector / USB Testing and Blocking | `o-mg-malicious-cable-detector` | 69,00 € |
| 19 | O.MG Cable Pack / USB Payload Cables and Programming Tools | `o-mg-cable-pack` | 1190,00 € |
| 20 | SkimmerGuard / ATM & Payment Card Skimmer Detector | `skimmerguard` | 49,00 € |
| 21 | Shark Jack Display / Interactive Ethernet Auditing Tool | `shark-jack-display` | 185,00 € |

### Pentesting: IoT (`pentesting-iot`) — 4 produit(s)

| Pos | Produit | Handle | Prix EUR |
|----:|---------|--------|--------:|
| 1 | MACOBOX - Hardware Pentest Platform / Firmware Analysis | `macobox-hardware-pentest-platform` | 9700,00 € |
| 2 | WHIDBoard Pro / Hardware Auditing & Firmware Toolkit | `whidboard-pro` | 295,00 € |
| 3 | TinySA Ultra+ / Spectrum Analyser with 5.4 GHz Ultra Mode | `tinysa-ultra` | 163,00 € |
| 4 | Flipper Zero / Portable RFID, Sub-GHz & Hardware Multitool | `flipper-zero` | 149,17 € |

### Pentesting: Network (`pentesting-network`) — 13 produit(s)

| Pos | Produit | Handle | Prix EUR |
|----:|---------|--------|--------:|
| 1 | Alfa AWUS036ACHM / Dual-Band WiFi Pentesting Adapter | `alpha-awus036achm` | 59,00 € |
| 2 | Plunder Bug / USB-C Ethernet Tap for Packet Capture | `hak5-plunder-bug-lan-sniffer` | 195,00 € |
| 3 | Shark Jack / Portable Ethernet Network Auditing Tool | `shark-jack` | 160,00 € |
| 4 | PiKVM v4 Plus - Hardware RAT / Remote Computer Control | `pikvm-v4-plus-hardware-rat` | 359,00 € |
| 5 | Packet Squirrel (Mark II) / Ethernet Network Testing | `packet-squirrel-mark-ii` | 180,00 € |
| 6 | Flipper Zero Wifi Devboard / ESP32-S2 WiFi & Debugging | `flipper-zero-wifi-devboard` | 32,50 € |
| 7 | Blade RF 2.0 Micro xA4 / Full-Duplex 2x2 MIMO SDR | `bladerf-sdr-2-micro-xa4` | 749,00 € |
| 8 | LAN Turtle / Ethernet Auditing and Remote Network Access | `hak5-network-mitm-lan-turtle` | 120,00 € |
| 9 | SignalSDR Pro / Full-Duplex SDR for 5G Security Research | `signalsdr-pro` | 1100,00 € |
| 10 | Glytch GPS Module for Pineapple Pager / GPS Wardriving | `glytch-gps-module-for-pineapple-pager` | 79,00 € |
| 11 | Glytch Mesh Module for Pineapple Pager / LoRa Messaging | `glytch-mesh-module-for-pineapple-pager` | 79,00 € |
| 12 | Glytch Ethernet Module for Pineapple Pager / 10/100 LAN | `glytch-ethernet-module-for-pineapple-pager` | 59,00 € |
| 13 | Shark Jack Display / Interactive Ethernet Auditing Tool | `shark-jack-display` | 185,00 € |

### Pentesting: Red-team Equipment (`pentesting-red-team-equipment`) — 38 produit(s)

Collection paginée — total fusionné : **38** produits (pentesting-red-team-equipment-page-2.html : 2, pentesting-red-team-equipment.html : 36).

| Pos | Produit | Handle | Prix EUR |
|----:|---------|--------|--------:|
| 1 | Shark Jack Display / Interactive Ethernet Auditing Tool | `shark-jack-display` | 185,00 € |
| 2 | Phantom Drive / AES-256 USB Storage with Hidden Partition | `phantom-drive` | 49,95 € |
| 3 | Flipper Zero / Portable RFID, Sub-GHz & Hardware Multitool | `flipper-zero` | 149,17 € |
| 4 | Proxmark 5 / LF and HF RFID Research and Emulation | `proxmark-5` | 325,00 € |
| 5 | Proxmark 3 RDV4.01 / LF and HF RFID Research Multi-tool | `proxmark-3-rdv4` | 339,00 € |
| 6 | RFID Field Detector Ultra - LF/HF/UHF / Passive Detection | `rfid-field-detector-ultra` | 24,95 € |
| 7 | Chameleon Ultra / Wireless LF and HF RFID Emulator | `chameleon-ultra` | 129,00 € |
| 8 | ICopy-XS / Portable LF and HF RFID Cloning Device | `icopy-x` | 375,00 € |
| 9 | PandwaRF Rogue Pro / RF Remote Capture and Analysis | `pandwarf-rogue-pro` | 579,00 € |
| 10 | Rubber Ducky / USB-A and USB-C Keystroke Injection Tool | `rubber-ducky` | 150,00 € |
| 11 | PiKVM v4 Plus - Hardware RAT / Remote Computer Control | `pikvm-v4-plus-hardware-rat` | 359,00 € |
| 12 | O.MG Cable / Wireless USB Keystroke Injection Platform | `o-mg-cable` | 295,00 € |
| 13 | InputStick RAT / Bluetooth USB Keyboard & Mouse Control | `inputstick-rat` | 44,99 € |
| 14 | Plunder Bug / USB-C Ethernet Tap for Packet Capture | `hak5-plunder-bug-lan-sniffer` | 195,00 € |
| 15 | Bash Bunny Mark II / USB Device Emulation and Payloads | `hid-emulator-bash-bunny` | 355,00 € |
| 16 | Shark Jack / Portable Ethernet Network Auditing Tool | `shark-jack` | 160,00 € |
| 17 | O.MG Unblocker / WiFi-Controlled USB Payload Device | `o-mg-unblocker` | 210,00 € |
| 18 | O.MG Adapter Elite / USB-C Payloads and Wireless Control | `o-mg-adapter-elite` | 295,00 € |
| 19 | O.MG Plug / Wireless USB Keystroke Injection Platform | `o-mg-plug-elite` | 120,00 € |
| 20 | Keysy LF RFID Duplicator & Emulator / 125KHz, 4 Slots | `keysy-lf-rfid-emulator-duplicator` | 65,00 € |
| 21 | Alfa AWUS036ACHM / Dual-Band WiFi Pentesting Adapter | `alpha-awus036achm` | 59,00 € |
| 22 | USBKill V4 / USB Hardware Surge Stress-Testing Kits | `usbkill-v4-pro-kit` | 139,95 € |
| 23 | Flux Capacitor / Flipper Zero CC1101 Radio Amplifier | `flux-capacitor` | 65,00 € |
| 24 | USB RFID Reader/Writer DL533N / 13.56MHz LibNFC Tool | `usb-rfid-reader-writer-dl533n` | 55,00 € |
| 25 | Blade RF 2.0 Micro xA4 / Full-Duplex 2x2 MIMO SDR | `bladerf-sdr-2-micro-xa4` | 749,00 € |
| 26 | iCS Decoder / iCLASS® SE / SEOS Accessory for iCopy-X | `ics-decoder-iclass-se-seos-cloner-decoder` | 425,00 € |
| 27 | Screen Crab / HDMI Capture and Remote Video Monitoring | `hak5-screen-crab` | 400,00 € |
| 28 | KIISU - Compact Flipper alternative / RFID & NFC Tool | `kiisu` | 79,00 € |
| 29 | O.MG Cable Pack / USB Payload Cables and Programming Tools | `o-mg-cable-pack` | 1190,00 € |
| 30 | HackRF Pro / 100 kHz-6 GHz Software Defined Radio | `hackrf-pro` | 400,00 € |
| 31 | PandwaRF Marauder / Autonomous Dual-Frequency RF Capture | `pandwarf-marauder` | 979,00 € |
| 32 | Stealth Decoy Reader / RFID and PIN Audit Capture | `stealth-decoy-reader` | 375,00 € |
| 33 | Dual Mode Paxton Long Range / Stealth Decoy Reader | `dual-mode-paxton-long-range-stealth-decoy-reader` | 475,00 € |
| 34 | Long-range MaxiProx 5375 125KHz Capture System | `long-range-maxiprox-5375-125khz-capture-system` | 995,00 € |
| 35 | Glytch GPS Module for Pineapple Pager / GPS Wardriving | `glytch-gps-module-for-pineapple-pager` | 79,00 € |
| 36 | Glytch Mesh Module for Pineapple Pager / LoRa Messaging | `glytch-mesh-module-for-pineapple-pager` | 79,00 € |
| 37 | Glytch Ethernet Module for Pineapple Pager / 10/100 LAN | `glytch-ethernet-module-for-pineapple-pager` | 59,00 € |
| 38 | ATLAS: Standard Licence / 1-Year Android Audit Platform | `atlas-1-year-licence` | 120,00 € |

### Pentesting: RF / Remotes (`pentesting-implants`) — 7 produit(s)

| Pos | Produit | Handle | Prix EUR |
|----:|---------|--------|--------:|
| 1 | PandwaRF Rogue Pro / RF Remote Capture and Analysis | `pandwarf-rogue-pro` | 579,00 € |
| 2 | Flipper Zero / Portable RFID, Sub-GHz & Hardware Multitool | `flipper-zero` | 149,17 € |
| 3 | Flux Capacitor / Flipper Zero CC1101 Radio Amplifier | `flux-capacitor` | 65,00 € |
| 4 | PandwaRF Marauder / Autonomous Dual-Frequency RF Capture | `pandwarf-marauder` | 979,00 € |
| 5 | HackRF Pro / 100 kHz-6 GHz Software Defined Radio | `hackrf-pro` | 400,00 € |
| 6 | PandwaRF Kaiju Pro License / Rolling-Code Analysis | `pandwarf-kaiju-license` | 290,00 € |
| 7 | KIISU - Compact Flipper alternative / RFID & NFC Tool | `kiisu` | 79,00 € |

### Pentesting: RFID (`pentesting-rfid`) — 32 produit(s)

| Pos | Produit | Handle | Prix EUR |
|----:|---------|--------|--------:|
| 1 | RFID Pentester Tag Pack / Basic, Standard and Complete | `rfid-pentester-tag-pack` | 90,00 € |
| 2 | Proxmark 5 / LF and HF RFID Research and Emulation | `proxmark-5` | 325,00 € |
| 3 | Flipper Zero / Portable RFID, Sub-GHz & Hardware Multitool | `flipper-zero` | 149,17 € |
| 4 | Proxmark 3 RDV4.01 / LF and HF RFID Research Multi-tool | `proxmark-3-rdv4` | 339,00 € |
| 5 | ICopy-XS / Portable LF and HF RFID Cloning Device | `icopy-x` | 375,00 € |
| 6 | Stealth Decoy Reader / RFID and PIN Audit Capture | `stealth-decoy-reader` | 375,00 € |
| 7 | USB RFID Reader/Writer DL533N / 13.56MHz LibNFC Tool | `usb-rfid-reader-writer-dl533n` | 55,00 € |
| 8 | Chameleon Ultra / Wireless LF and HF RFID Emulator | `chameleon-ultra` | 129,00 € |
| 9 | RFID Field Detector Ultra - LF/HF/UHF / Passive Detection | `rfid-field-detector-ultra` | 24,95 € |
| 10 | Keysy LF RFID Duplicator & Emulator / 125KHz, 4 Slots | `keysy-lf-rfid-emulator-duplicator` | 65,00 € |
| 11 | Long-range iCLASS RFID Capture System / Up to 45 cm | `ppe-iclass-longrange-rfid-capture-system` | 895,00 € |
| 12 | Long-range MaxiProx 5375 125KHz Capture System | `long-range-maxiprox-5375-125khz-capture-system` | 995,00 € |
| 13 | Dual Mode Paxton Long Range / Stealth Decoy Reader | `dual-mode-paxton-long-range-stealth-decoy-reader` | 475,00 € |
| 14 | Doppelgänger Core RFID Dev Board / Wiegand and PIN Capture | `doppelganger-core-rfid-dev-board` | 60,00 € |
| 15 | KIISU - Compact Flipper alternative / RFID & NFC Tool | `kiisu` | 79,00 € |
| 16 | ESP RFID Tool / WiFi Wiegand Capture and Replay Tool | `wiegand-sniffer-esp-rfid-tool` | 30,00 € |
| 17 | iCS Decoder / iCLASS® SE / SEOS Accessory for iCopy-X | `ics-decoder-iclass-se-seos-cloner-decoder` | 425,00 € |
| 18 | UHFKill / Permanent UHF RFID Tag Deactivation Tool | `uhfkill` | 1495,00 € |
| 19 | NFCKill (Professional Version) / RFID Deactivation Tool | `nfckill-professional-version` | 265,00 € |
| 20 | Proxmark 3 RDV4.01 / Long Range HF Antenna Pack | `proxmark-3-rdv4-long-range-hf-antenna-1` | 89,95 € |
| 21 | Proxmark 3 RDV4 / BlueShark Standalone Module | `proxmark-3-rdv4-standalone-kit` | 99,00 € |
| 22 | Proxmark 3 RDV4.01 / Long Range LF Antenna Pack | `proxmark-3-rdv4-01-long-range-lf-antenna-pack` | 89,95 € |
| 23 | Chameleon Lite / 13.56MHz and 125KHz RFID Emulator | `chameleon-lite` | 59,00 € |
| 24 | Chameleon Ultra DevKit / LF and HF RFID Development | `chameleon-ultra-devkit` | 129,00 € |
| 25 | PPE Long Range Reader Power Supply / 25,600mAh Battery | `ppe-long-range-reader-power-supply` | 255,00 € |
| 26 | NFC Range Extender for Flipper Zero / Passive Antennas | `nfc-range-extender-for-flipper-zero` | 75,00 € |
| 27 | 13.56MHz RFID Range Boosters / Passive NFC Antennas | `13-56mhz-rfid-range-boosters` | 10,00 € |
| 28 | Multi-RFID Keyfob / Six Passive LF and HF Blank Tags | `multi-rfid-keyfob` | 49,00 € |
| 29 | ATLAS: Standard Licence / 1-Year Android Audit Platform | `atlas-1-year-licence` | 120,00 € |
| 30 | UHFKill - Tag Testing Service / UHF Compatibility Reports | `uhfkill-tag-testing-service` | 250,00 € |
| 31 | Industrial Handheld UHF Reader / Tag Deactivation Checks | `industrial-handheld-uhf-reader` | 975,00 € |
| 32 | Proxmark 5 - Wireless + Battery Module / Mobile RFID | `proxmark-5-wireless-battery-module` | 99,00 € |

### Physical Audit Tools (`physical-audit-tools`) — 14 produit(s)

| Pos | Produit | Handle | Prix EUR |
|----:|---------|--------|--------:|
| 1 | Lockpick Kit / Hooks, Rakes & Six Tension Wrenches | `lockpick-kit` | 49,95 € |
| 2 | Lock Bypass Kit / Door, Padlock & Combination-Lock Tools | `lock-bypass-kit` | 110,00 € |
| 3 | Kronos Electric Pick / Adjustable Pin-Tumbler Pick Gun | `kronos-electric-pick` | 215,00 € |
| 4 | Cutaway Practice Cylinder / Re-Pinnable 6-Pin Euro Lock | `6-pin-cutaway-training-cylinder` | 60,00 € |
| 5 | Key Molding Kit / Metal Key Duplication in the Field | `key-molding-kit` | 129,00 € |
| 6 | "Under-the-door" Bypass Tool / Lever-Handle Audit Tool | `under-the-door-bypass-tool` | 55,00 € |
| 7 | SilverBullet 2 / Disc-Detainer Lock Pick & Decoder | `silver-bullet-2` | 600,00 € |
| 8 | FIT'D: Door Bypass Tools / Door-Frame Audit Pack of 10 | `fitd-door-bypass-tools` | 20,00 € |
| 9 | LIFT'D: Door Bypass Tools / Door-Mounted Pack of 10 | `liftd-door-bypass-tools` | 20,00 € |
| 10 | Bump Key Hammer / Sparrows Semi-Rigid Percussive Tool | `bump-key-hammer` | 16,95 € |
| 11 | EU Bump Key Kit / Six CNC-Cut European Lock Profiles | `european-bump-key-kit` | 36,00 € |
| 12 | US Bump Key Kit / Six CNC-Cut North American Profiles | `us-bump-key-kit` | 36,00 € |
| 13 | Creeper Case / Lockpick Storage with Luminous Backing | `creeper-case` | 15,95 € |
| 14 | Replacement Electric Pick Blades / Kronos Pack of 10 | `replacement-electric-pick-blades` | 30,00 € |

### Physical Audit Tools: Accessories (`physical-audit-tools-accessories`) — 2 produit(s)

| Pos | Produit | Handle | Prix EUR |
|----:|---------|--------|--------:|
| 1 | Replacement Electric Pick Blades / Kronos Pack of 10 | `replacement-electric-pick-blades` | 30,00 € |
| 2 | Creeper Case / Lockpick Storage with Luminous Backing | `creeper-case` | 15,95 € |

### Physical Audit Tools: Bypass Sets (`physical-audit-tools-bypass-sets`) — 8 produit(s)

| Pos | Produit | Handle | Prix EUR |
|----:|---------|--------|--------:|
| 1 | Lock Bypass Kit / Door, Padlock & Combination-Lock Tools | `lock-bypass-kit` | 110,00 € |
| 2 | Key Molding Kit / Metal Key Duplication in the Field | `key-molding-kit` | 129,00 € |
| 3 | US Bump Key Kit / Six CNC-Cut North American Profiles | `us-bump-key-kit` | 36,00 € |
| 4 | EU Bump Key Kit / Six CNC-Cut European Lock Profiles | `european-bump-key-kit` | 36,00 € |
| 5 | "Under-the-door" Bypass Tool / Lever-Handle Audit Tool | `under-the-door-bypass-tool` | 55,00 € |
| 6 | FIT'D: Door Bypass Tools / Door-Frame Audit Pack of 10 | `fitd-door-bypass-tools` | 20,00 € |
| 7 | LIFT'D: Door Bypass Tools / Door-Mounted Pack of 10 | `liftd-door-bypass-tools` | 20,00 € |
| 8 | Bump Key Hammer / Sparrows Semi-Rigid Percussive Tool | `bump-key-hammer` | 16,95 € |

### Physical Audit Tools: Lockpick Sets (`physical-audit-tools-lockpick-sets`) — 4 produit(s)

| Pos | Produit | Handle | Prix EUR |
|----:|---------|--------|--------:|
| 1 | Lockpick Kit / Hooks, Rakes & Six Tension Wrenches | `lockpick-kit` | 49,95 € |
| 2 | Cutaway Practice Cylinder / Re-Pinnable 6-Pin Euro Lock | `6-pin-cutaway-training-cylinder` | 60,00 € |
| 3 | Kronos Electric Pick / Adjustable Pin-Tumbler Pick Gun | `kronos-electric-pick` | 215,00 € |
| 4 | SilverBullet 2 / Disc-Detainer Lock Pick & Decoder | `silver-bullet-2` | 600,00 € |

### PPB — Flipper Zero — Accessories (`ppb-flipper-accessories`) — 2 produit(s)

| Pos | Produit | Handle | Prix EUR |
|----:|---------|--------|--------:|
| 1 | Lab401 HardShell for Flipper Zero / Case & GPIO Guards | `lab401-hardshell-for-flipper-zero` | 29,95 € |
| 2 | Flux Capacitor / Flipper Zero CC1101 Radio Amplifier | `flux-capacitor` | 65,00 € |

### PPB — Flipper Zero — Flipper Zero (`ppb-flipper-device`) — 1 produit(s)

| Pos | Produit | Handle | Prix EUR |
|----:|---------|--------|--------:|
| 1 | Flipper Zero / Portable RFID, Sub-GHz & Hardware Multitool | `flipper-zero` | 149,17 € |

### PPB — Hardware Auditing — Audit platforms (`ppb-hardware-devices`) — 2 produit(s)

| Pos | Produit | Handle | Prix EUR |
|----:|---------|--------|--------:|
| 1 | Bus Pirate 5 / Hardware Debugging & Protocol Interface | `bus-pirate-v5` | 89,00 € |
| 2 | WHIDBoard Pro / Hardware Auditing & Firmware Toolkit | `whidboard-pro` | 295,00 € |

### PPB — Hardware Auditing — Training targets (`ppb-hardware-extras`) — 1 produit(s)

| Pos | Produit | Handle | Prix EUR |
|----:|---------|--------|--------:|
| 1 | Project Reboot: Hardware Audit Training Target | `project-reboot-hardware-target` | 102,50 € |

### PPB — Lockpicks / Bypass — Lockpicks & bypass (`ppb-physical-kits`) — 3 produit(s)

| Pos | Produit | Handle | Prix EUR |
|----:|---------|--------|--------:|
| 1 | Lockpick Kit / Hooks, Rakes & Six Tension Wrenches | `lockpick-kit` | 49,95 € |
| 2 | Lock Bypass Kit / Door, Padlock & Combination-Lock Tools | `lock-bypass-kit` | 110,00 € |
| 3 | Key Molding Kit / Metal Key Duplication in the Field | `key-molding-kit` | 129,00 € |

### PPB — Red-Team — BadUSB Cables & Plugs (`ppb-usb`) — 4 produit(s)

| Pos | Produit | Handle | Prix EUR |
|----:|---------|--------|--------:|
| 1 | Rubber Ducky / USB-A and USB-C Keystroke Injection Tool | `rubber-ducky` | 150,00 € |
| 2 | O.MG Plug / Wireless USB Keystroke Injection Platform | `o-mg-plug-elite` | 120,00 € |
| 3 | O.MG Adapter Elite / USB-C Payloads and Wireless Control | `o-mg-adapter-elite` | 295,00 € |
| 4 | O.MG Cable / Wireless USB Keystroke Injection Platform | `o-mg-cable` | 295,00 € |

### PPB — Red-Team — Network (`ppb-network`) — 2 produit(s)

| Pos | Produit | Handle | Prix EUR |
|----:|---------|--------|--------:|
| 1 | Shark Jack Display / Interactive Ethernet Auditing Tool | `shark-jack-display` | 185,00 € |
| 2 | PiKVM v4 Plus - Hardware RAT / Remote Computer Control | `pikvm-v4-plus-hardware-rat` | 359,00 € |

### PPB — Red-Team — O.MG accessories (`ppb-usb-extras`) — 1 produit(s)

| Pos | Produit | Handle | Prix EUR |
|----:|---------|--------|--------:|
| 1 | O.MG Cable Programmer (USB A+C) / Setup and Flashing | `o-mg-cable-programmer-usb-a` | 49,00 € |

### PPB — Red-Team — Wi-Fi (`ppb-wifi`) — 1 produit(s)

| Pos | Produit | Handle | Prix EUR |
|----:|---------|--------|--------:|
| 1 | Alfa AWUS036ACHM / Dual-Band WiFi Pentesting Adapter | `alpha-awus036achm` | 59,00 € |

### PPB — RFID — Accessories (`ppb-rfid-extras`) — 2 produit(s)

| Pos | Produit | Handle | Prix EUR |
|----:|---------|--------|--------:|
| 1 | RFID Field Detector Ultra - LF/HF/UHF / Passive Detection | `rfid-field-detector-ultra` | 24,95 € |
| 2 | 13.56MHZ RFID Field Strength Meter / Passive NFC Testing | `13-56mhz-rfid-field-strength-meter` | 80,00 € |

### PPB — RFID — Badges (`ppb-rfid-tags`) — 1 produit(s)

| Pos | Produit | Handle | Prix EUR |
|----:|---------|--------|--------:|
| 1 | RFID Pentester Tag Pack / Basic, Standard and Complete | `rfid-pentester-tag-pack` | 90,00 € |

### PPB — RFID — Long-Range Capture (`ppb-rfid-long-range`) — 3 produit(s)

| Pos | Produit | Handle | Prix EUR |
|----:|---------|--------|--------:|
| 1 | Stealth Decoy Reader / RFID and PIN Audit Capture | `stealth-decoy-reader` | 375,00 € |
| 2 | Long-range MaxiProx 5375 125KHz Capture System | `long-range-maxiprox-5375-125khz-capture-system` | 995,00 € |
| 3 | Long-range iCLASS RFID Capture System / Up to 45 cm | `ppe-iclass-longrange-rfid-capture-system` | 895,00 € |

### PPB — RFID — RFID Devices (`ppb-rfid-devices`) — 5 produit(s)

| Pos | Produit | Handle | Prix EUR |
|----:|---------|--------|--------:|
| 1 | USB RFID Reader/Writer DL533N / 13.56MHz LibNFC Tool | `usb-rfid-reader-writer-dl533n` | 55,00 € |
| 2 | Chameleon Ultra / Wireless LF and HF RFID Emulator | `chameleon-ultra` | 129,00 € |
| 3 | Flipper Zero / Portable RFID, Sub-GHz & Hardware Multitool | `flipper-zero` | 149,17 € |
| 4 | Proxmark 3 RDV4.01 / LF and HF RFID Research Multi-tool | `proxmark-3-rdv4` | 339,00 € |
| 5 | ICopy-XS / Portable LF and HF RFID Cloning Device | `icopy-x` | 375,00 € |

### PPB — SDR — Antenna analysis (`ppb-sdr-antenna`) — 1 produit(s)

| Pos | Produit | Handle | Prix EUR |
|----:|---------|--------|--------:|
| 1 | LiteVNA (NanoVNA Compatible) / 50 kHz-6.3 GHz Analyser | `litevna` | 192,00 € |

### PPB — SDR — SDR devices (`ppb-sdr-devices`) — 3 produit(s)

| Pos | Produit | Handle | Prix EUR |
|----:|---------|--------|--------:|
| 1 | HackRF Pro / 100 kHz-6 GHz Software Defined Radio | `hackrf-pro` | 400,00 € |
| 2 | Blade RF 2.0 Micro xA4 / Full-Duplex 2x2 MIMO SDR | `bladerf-sdr-2-micro-xa4` | 749,00 € |
| 3 | SignalSDR Pro / Full-Duplex SDR for 5G Security Research | `signalsdr-pro` | 1100,00 € |

### PPB — SDR — Signal tracking (`ppb-sdr-tracking`) — 1 produit(s)

| Pos | Produit | Handle | Prix EUR |
|----:|---------|--------|--------:|
| 1 | KrakenSDR / Five-Receiver Radio Direction Finding Kit | `krakensdr` | 1020,00 € |

### PPB — SDR — Spectrum analysis (`ppb-sdr-spectrum`) — 1 produit(s)

| Pos | Produit | Handle | Prix EUR |
|----:|---------|--------|--------:|
| 1 | TinySA Ultra+ / Spectrum Analyser with 5.4 GHz Ultra Mode | `tinysa-ultra` | 163,00 € |

### PPB — SubGHz — SubGHz devices (`ppb-subghz-devices`) — 2 produit(s)

| Pos | Produit | Handle | Prix EUR |
|----:|---------|--------|--------:|
| 1 | Flipper Zero / Portable RFID, Sub-GHz & Hardware Multitool | `flipper-zero` | 149,17 € |
| 2 | PandwaRF Rogue Pro / RF Remote Capture and Analysis | `pandwarf-rogue-pro` | 579,00 € |

### PPE RFID Tools (`ppe-rfid-tools`) — 9 produit(s)

| Pos | Produit | Handle | Prix EUR |
|----:|---------|--------|--------:|
| 1 | Doppelgänger Core RFID Dev Board / Wiegand and PIN Capture | `doppelganger-core-rfid-dev-board` | 60,00 € |
| 2 | Stealth Decoy Reader / RFID and PIN Audit Capture | `stealth-decoy-reader` | 375,00 € |
| 3 | ATLAS: Standard Licence / 1-Year Android Audit Platform | `atlas-1-year-licence` | 120,00 € |
| 4 | Long-range iCLASS RFID Capture System / Up to 45 cm | `ppe-iclass-longrange-rfid-capture-system` | 895,00 € |
| 5 | Long-range MaxiProx 5375 125KHz Capture System | `long-range-maxiprox-5375-125khz-capture-system` | 995,00 € |
| 6 | PPE Long Range Reader Power Supply / 25,600mAh Battery | `ppe-long-range-reader-power-supply` | 255,00 € |
| 7 | PPE 2-in-1 Fast USB-C Battery Charger / Dual LiPo | `ppe-2-in-1-fast-usb-c-battery-charger` | 30,00 € |
| 8 | PPE Stealth Decoy Reader Spare Battery / 3.7V 1800mAh | `ppe-extra-stealth-decoy-reader-battery` | 15,00 € |
| 9 | Dual Mode Paxton Long Range / Stealth Decoy Reader | `dual-mode-paxton-long-range-stealth-decoy-reader` | 475,00 € |

### Products (`all`) — 36 produit(s)

| Pos | Produit | Handle | Prix EUR |
|----:|---------|--------|--------:|
| 1 | "Under-the-door" Bypass Tool / Lever-Handle Audit Tool | `under-the-door-bypass-tool` | 55,00 € |
| 2 | 125KHz T5577 Keyfobs / Rewritable LF RFID Tags, 5 Pack | `125khz-t5577-keyfobs-pack-of-5` | 19,99 € |
| 3 | 13.56MHZ RFID Field Strength Meter / Passive NFC Testing | `13-56mhz-rfid-field-strength-meter` | 80,00 € |
| 4 | 13.56MHz RFID Range Boosters / Passive NFC Antennas | `13-56mhz-rfid-range-boosters` | 10,00 € |
| 5 | Alfa AWUS036ACHM / Dual-Band WiFi Pentesting Adapter | `alpha-awus036achm` | 59,00 € |
| 6 | ATLAS: Standard Licence / 1-Year Android Audit Platform | `atlas-1-year-licence` | 120,00 € |
| 7 | AWOK GPS Antenna AD-301 / Active Multi-System Antenna | `awok-gps-antenna-ad-301` | 45,00 € |
| 8 | Bash Bunny Mark II / USB Device Emulation and Payloads | `hid-emulator-bash-bunny` | 355,00 € |
| 9 | Blade RF 2.0 Micro xA4 / Full-Duplex 2x2 MIMO SDR | `bladerf-sdr-2-micro-xa4` | 749,00 € |
| 10 | BugBlat miniSniffer 2 / USB Traffic Capture & Analysis | `bugblat-minisniffer-v2` | 149,00 € |
| 11 | Bump Key Hammer / Sparrows Semi-Rigid Percussive Tool | `bump-key-hammer` | 16,95 € |
| 12 | Bus Pirate 5 / Hardware Debugging & Protocol Interface | `bus-pirate-v5` | 89,00 € |
| 13 | Bus Pirate 5 Auxiliary Cable / Logic Analyzer Connection | `bus-pirate-5-auxiliary-cable` | 9,95 € |
| 14 | Bus Pirate 5 Auxiliary Cable Set / Jumpers & Splitters | `bus-pirate-5-coloured-auxiliary-cable` | 11,95 € |
| 15 | Bus Pirate 5 Flash Adapters / DIP8, SOP8 & WSON8 Kit | `bus-pirate-5-flash-adaptors` | 34,95 € |
| 16 | Bus Pirate 5 KF141 Quick Connect / Spring-Clamp Adapter | `bus-pirate-5-kf141-quick-connect` | 6,95 € |
| 17 | Bus Pirate 5 Probe Kit / Hooks & Breadboard Connections | `bus-pirate-5-auxilary-probe-kit` | 11,95 € |
| 18 | Bus Pirate 5 Raspberry Pi Pico Headers / Right-Angle | `bus-pirate-5-raspberry-pi-pico-headers` | 5,95 € |
| 19 | Bus Pirate 5 SIM & Smart IC Adapter / Card Interface | `bus-pirate-5-sim-smart-ic-adapter` | 14,95 € |
| 20 | CANBus Module for Flipper Zero / CAN & OBD-II Diagnostics | `ec-canbus` | 39,00 € |
| 21 | Chameleon Lite / 13.56MHz and 125KHz RFID Emulator | `chameleon-lite` | 59,00 € |
| 22 | Chameleon Ultra / Wireless LF and HF RFID Emulator | `chameleon-ultra` | 129,00 € |
| 23 | Chameleon Ultra DevKit / LF and HF RFID Development | `chameleon-ultra-devkit` | 129,00 € |
| 24 | ChipWhisperer - HuskyPlus / Side-Channel & Glitching | `chipwhisperer-huskyplus` | 1195,00 € |
| 25 | Creeper Case / Lockpick Storage with Luminous Backing | `creeper-case` | 15,95 € |
| 26 | Cutaway Practice Cylinder / Re-Pinnable 6-Pin Euro Lock | `6-pin-cutaway-training-cylinder` | 60,00 € |
| 27 | Cynthion / USB Protocol Analysis & Device Development | `cynthion` | 209,00 € |
| 28 | DigiLab for FlipperZero / SPI, I2C & Signal Probing | `digilab-for-flipperzero` | 49,00 € |
| 29 | Digilab Module Kit / BMP280 & LM75A I2C Sensor Pack | `digilab-module-kit` | 14,95 € |
| 30 | Doppelgänger Core RFID Dev Board / Wiegand and PIN Capture | `doppelganger-core-rfid-dev-board` | 60,00 € |
| 31 | Dual Mode Paxton Long Range / Stealth Decoy Reader | `dual-mode-paxton-long-range-stealth-decoy-reader` | 475,00 € |
| 32 | ESP RFID Tool / WiFi Wiegand Capture and Replay Tool | `wiegand-sniffer-esp-rfid-tool` | 30,00 € |
| 33 | EU Bump Key Kit / Six CNC-Cut European Lock Profiles | `european-bump-key-kit` | 36,00 € |
| 34 | Faulty Cat / Portable EMFI & Voltage Glitching Tool | `faultycat` | 165,00 € |
| 35 | FIT'D: Door Bypass Tools / Door-Frame Audit Pack of 10 | `fitd-door-bypass-tools` | 20,00 € |
| 36 | Flipper Zero / Portable RFID, Sub-GHz & Hardware Multitool | `flipper-zero` | 149,17 € |

### Proxmark (`proxmark`) — 9 produit(s)

| Pos | Produit | Handle | Prix EUR |
|----:|---------|--------|--------:|
| 1 | Proxmark 3 RDV4.01 / LF and HF RFID Research Multi-tool | `proxmark-3-rdv4` | 339,00 € |
| 2 | Proxmark 3 RDV4 / BlueShark Standalone Module | `proxmark-3-rdv4-standalone-kit` | 99,00 € |
| 3 | Proxmark 3 RDV4.01 / Long Range HF Antenna Pack | `proxmark-3-rdv4-long-range-hf-antenna-1` | 89,95 € |
| 4 | Proxmark 3 RDV4.01 / Long Range LF Antenna Pack | `proxmark-3-rdv4-01-long-range-lf-antenna-pack` | 89,95 € |
| 5 | ProxRF 125KHz Biochip Antenna / Proxmark RFID Accessory | `proxrf-125khz-biochip-antenna` | 29,99 € |
| 6 | Lab401 Flashing Multi-tool for Proxmark & Chameleon | `proxmark-3-rdv4-flash-support` | 34,95 € |
| 7 | Proxmark 3 RDV4 - SIM/SAM Extension / Debug and Program | `proxmark-3-rdv4-sim-sam-extension` | 19,95 € |
| 8 | Proxmark 3 RDV4.01 / Upgrade and Replacement Antennas | `proxmark-3-rdv4-01-upgraded-replacement-antenna` | 24,99 € |
| 9 | USB Bluetooth Adaptor HC-06 / Proxmark 3 RDV4.01 | `usb-bluetooth-adaptor-hc-06` | 29,00 € |

### Public (`publica`) — 34 produit(s)

| Pos | Produit | Handle | Prix EUR |
|----:|---------|--------|--------:|
| 1 | Proxmark 3 RDV4.01 / LF and HF RFID Research Multi-tool | `proxmark-3-rdv4` | 339,00 € |
| 2 | Rubber Ducky / USB-A and USB-C Keystroke Injection Tool | `rubber-ducky` | 150,00 € |
| 3 | Proxmark 3 RDV4 / BlueShark Standalone Module | `proxmark-3-rdv4-standalone-kit` | 99,00 € |
| 4 | O.MG Cable / Wireless USB Keystroke Injection Platform | `o-mg-cable` | 295,00 € |
| 5 | USBKill V4 / USB Hardware Surge Stress-Testing Kits | `usbkill-v4-pro-kit` | 139,95 € |
| 6 | Bash Bunny Mark II / USB Device Emulation and Payloads | `hid-emulator-bash-bunny` | 355,00 € |
| 7 | Keysy LF RFID Duplicator & Emulator / 125KHz, 4 Slots | `keysy-lf-rfid-emulator-duplicator` | 65,00 € |
| 8 | Pocket USB Power Supply / Adjustable 0-30V Output | `pocket-usb-power-supply` | 19,99 € |
| 9 | Multi-RFID Keyfob / Six Passive LF and HF Blank Tags | `multi-rfid-keyfob` | 49,00 € |
| 10 | InputStick RAT / Bluetooth USB Keyboard & Mouse Control | `inputstick-rat` | 44,99 € |
| 11 | O.MG Cable Programmer (USB A+C) / Setup and Flashing | `o-mg-cable-programmer-usb-a` | 49,00 € |
| 12 | USB RFID Reader/Writer DL533N / 13.56MHz LibNFC Tool | `usb-rfid-reader-writer-dl533n` | 55,00 € |
| 13 | Shark Jack / Portable Ethernet Network Auditing Tool | `shark-jack` | 160,00 € |
| 14 | Blade RF 2.0 Micro xA4 / Full-Duplex 2x2 MIMO SDR | `bladerf-sdr-2-micro-xa4` | 749,00 € |
| 15 | RFID Range Extenders / Passive 13.56MHz Antennas | `rfid-antenna-extender` | 35,00 € |
| 16 | NFCKill (Professional Version) / RFID Deactivation Tool | `nfckill-professional-version` | 265,00 € |
| 17 | DL533N XL / Long Range HF RFID Reader / Writer | `long-range-rfid-reader-writer-dl533n-xl` | 129,00 € |
| 18 | Proxmark 3 RDV4.01 / Long Range HF Antenna Pack | `proxmark-3-rdv4-long-range-hf-antenna-1` | 89,95 € |
| 19 | O.MG Malicious Cable Detector / USB Testing and Blocking | `o-mg-malicious-cable-detector` | 69,00 € |
| 20 | LAN Turtle / Ethernet Auditing and Remote Network Access | `hak5-network-mitm-lan-turtle` | 120,00 € |
| 21 | Plunder Bug / USB-C Ethernet Tap for Packet Capture | `hak5-plunder-bug-lan-sniffer` | 195,00 € |
| 22 | Packet Squirrel (Mark II) / Ethernet Network Testing | `packet-squirrel-mark-ii` | 180,00 € |
| 23 | Proxmark 3 RDV4.01 / Long Range LF Antenna Pack | `proxmark-3-rdv4-01-long-range-lf-antenna-pack` | 89,95 € |
| 24 | Screen Crab / HDMI Capture and Remote Video Monitoring | `hak5-screen-crab` | 400,00 € |
| 25 | HackRF Pro / 100 kHz-6 GHz Software Defined Radio | `hackrf-pro` | 400,00 € |
| 26 | ProxRF 125KHz Biochip Antenna / Proxmark RFID Accessory | `proxrf-125khz-biochip-antenna` | 29,99 € |
| 27 | Lab401 Flashing Multi-tool for Proxmark & Chameleon | `proxmark-3-rdv4-flash-support` | 34,95 € |
| 28 | Proxmark 3 RDV4 - SIM/SAM Extension / Debug and Program | `proxmark-3-rdv4-sim-sam-extension` | 19,95 € |
| 29 | Proxmark 3 RDV4.01 / Upgrade and Replacement Antennas | `proxmark-3-rdv4-01-upgraded-replacement-antenna` | 24,99 € |
| 30 | Rubber Ducky Textbook / HID Injection and DuckyScript | `rubber-ducky-textbook` | 60,00 € |
| 31 | Rubber Ducky Pocket Guide / DuckyScript Payload Manual | `rubber-ducky-pocket-guide` | 19,95 € |
| 32 | O.MG Cable Pack / USB Payload Cables and Programming Tools | `o-mg-cable-pack` | 1190,00 € |
| 33 | Packet Squirrel Textbook / Network Capture and Payloads | `packet-squirrel-textbook` | 49,00 € |
| 34 | Packet Squirrel Pocket Guide / Mark II Payload Scripting | `packet-squirrel-pocket-guide` | 19,95 € |

### Restricted Products (`restricted-products`) — 0 produit(s)

Collection vide dans le clone (la page affiche « collection is empty »). À confirmer si elle est vide aussi sur le vrai site.

### RFID Badges (`rfid-badges`) — 1 produit(s)

| Pos | Produit | Handle | Prix EUR |
|----:|---------|--------|--------:|
| 1 | RFID Pentester Tag Pack / Basic, Standard and Complete | `rfid-pentester-tag-pack` | 90,00 € |

### RFID Badges: Detection & Diagnostics (`rfid-badges-detection-diagnostics`) — 2 produit(s)

| Pos | Produit | Handle | Prix EUR |
|----:|---------|--------|--------:|
| 1 | RFID Field Detector Ultra - LF/HF/UHF / Passive Detection | `rfid-field-detector-ultra` | 24,95 € |
| 2 | 13.56MHZ RFID Field Strength Meter / Passive NFC Testing | `13-56mhz-rfid-field-strength-meter` | 80,00 € |

### RFID Badges: Emulators (`rfid-badges-emulators`) — 6 produit(s)

| Pos | Produit | Handle | Prix EUR |
|----:|---------|--------|--------:|
| 1 | Chameleon Ultra / Wireless LF and HF RFID Emulator | `chameleon-ultra` | 129,00 € |
| 2 | Flipper Zero / Portable RFID, Sub-GHz & Hardware Multitool | `flipper-zero` | 149,17 € |
| 3 | Keysy LF RFID Duplicator & Emulator / 125KHz, 4 Slots | `keysy-lf-rfid-emulator-duplicator` | 65,00 € |
| 4 | KIISU - Compact Flipper alternative / RFID & NFC Tool | `kiisu` | 79,00 € |
| 5 | Chameleon Lite / 13.56MHz and 125KHz RFID Emulator | `chameleon-lite` | 59,00 € |
| 6 | Chameleon Ultra DevKit / LF and HF RFID Development | `chameleon-ultra-devkit` | 129,00 € |

### RFID Badges: HF (13.56MHz) (`rfid-badges-hf`) — 26 produit(s)

| Pos | Produit | Handle | Prix EUR |
|----:|---------|--------|--------:|
| 1 | RFID Pentester Tag Pack / Basic, Standard and Complete | `rfid-pentester-tag-pack` | 90,00 € |
| 2 | MIFARE Classic® Compatible 1K Gen1a Coin Tags / 5 Pack | `mifare-compatible-1k-uid-modifiable-pack-of-5` | 4,99 € |
| 3 | MIFARE Classic® Compatible 1K Gen2a One-Time UID Tag | `undetectable-mifare-compatible-1k-one-time-write-uid` | 4,99 € |
| 4 | MIFARE DESFire® Compatible EV1/EV2 UID Emulator Card | `desfire-compatible-emulator-uid-modifiable` | 29,99 € |
| 5 | MIFARE Classic® Compatible 1K Gen2 Direct Write UID Card | `mifare-compatible-1k-direct-write-uid` | 12,99 € |
| 6 | MIFARE Ultralight® Compatible Gen1a UID Changeable Card | `ultralight-compatible-uid-modifiable` | 4,99 € |
| 7 | MIFARE Classic® Compatible 1K Gen1a UID Tags / Pack of 5 | `mifare-compatible-1k-uid-modifiable` | 24,99 € |
| 8 | Multi-RFID Keyfob / Six Passive LF and HF Blank Tags | `multi-rfid-keyfob` | 49,00 € |
| 9 | Magic NTAG® 21x / NTAG® I2C / MIFARE Ultralight® EV1 Tag | `ntag-compatible-21x` | 29,99 € |
| 10 | Ultimate Magic Card (Gen4) / Configurable NFC Emulation | `ultimate-magic-card-gen4` | 29,00 € |
| 11 | MIFARE Ultralight-C® Compatible Gen1a UID Card | `ultralight-c-compatible-uid-modifiable` | 29,99 € |
| 12 | MIFARE Ultralight® Compatible Gen2 Direct Write UID Card | `ultralight-compatiblr-direct-write-uid` | 4,99 € |
| 13 | MIFARE Classic® Compatible 4K Gen2 Direct Write UID Card | `mifare-compatible-4k-direct-write-uid` | 29,99 € |
| 14 | MIFARE Classic® Compatible 1K Gen2 7-byte Direct Write | `mifare-classic-compatible-1k-7-byte-direct-write-uid` | 29,99 € |
| 15 | ICODE SLI/SLIX Compatible UID Card / ISO15693, 28 Blocks | `icode-sli-slix-compatible-uid-modifiable` | 29,99 € |
| 16 | NTAG® 213 Compatible Gen2 Direct Write UID Card | `ntag-compatible-213-direct-write-uid` | 14,99 € |
| 17 | MIFARE Classic® Compatible 4K Gen2 7-byte DirectWrite Card | `mifare-classic-compatible-4k-7-byte-uid-modifiable-by-directwrite` | 29,99 € |
| 18 | MIFARE Mini® Compatible 0.3K Gen2 Direct Write UID Card | `mifare-mini-compatible-uid-modifable-direct-write` | 29,95 € |
| 19 | MIFARE DESFire® Compatible UID/ATQA/SAK/ATS/APDU Card | `mifare-desfire-ev2-compatible-modifiable-uid-atqa-sak-ats-apdu` | 29,99 € |
| 20 | MIFARE Classic® Compatible 1K Gen2a One-Time UID Coins, 5 | `mifare-classic-compatible-1k-one-time-write-uid-modifiable-coin-tag-gen2a` | 15,00 € |
| 21 | iCODE SLI Gen2 UID Changeable ISO15693 / 8-byte UID Card | `icode-sli-gen2-uid-changeable-iso15693` | 29,95 € |
| 22 | MIFARE Classic® Compatible 1K Gen2 FPC UID Tags / 5 Pack | `tiny-mf-gen1a-5pc` | 4,95 € |
| 23 | MIFARE Classic® Compatible 1K Gen2a FPC UID Tags / 5 Pack | `tiny-mf-gen2a-one-time-write` | 9,95 € |
| 24 | Tiny NTAG® 213 LED Detector Tags / 13.56MHz, 10 Pack | `tiny-detector-led-ntag213-10p` | 19,95 € |
| 25 | MIFARE Classic® Compatible 4K Gen3 / Lockable UID Card | `mifare-classic-compatible-4k-gen3` | 9,95 € |
| 26 | MIFARE Classic® Compatible 1K Gen1a FPC UID Tags / 5 Pack | `mifare-classic-compatible-1k-uid-modifiable-gen1a-tiny-fpc-tags-pack-of-5` | 4,95 € |

### RFID Badges: LF (125KHz) (`rfid-badges-lf`) — 2 produit(s)

| Pos | Produit | Handle | Prix EUR |
|----:|---------|--------|--------:|
| 1 | 125KHz T5577 Keyfobs / Rewritable LF RFID Tags, 5 Pack | `125khz-t5577-keyfobs-pack-of-5` | 19,99 € |
| 2 | Keysy Blank LF Tag / RFID Cloner Blank Badges, 5 Pack | `keysy-blank-lf-tag-pack-of-5` | 24,99 € |

### RFID Badges: Packs (`rfid-badges-packs`) — 4 produit(s)

| Pos | Produit | Handle | Prix EUR |
|----:|---------|--------|--------:|
| 1 | RFID Pentester Tag Pack / Basic, Standard and Complete | `rfid-pentester-tag-pack` | 90,00 € |
| 2 | iCopy-X Advanced Tag Pack / 16 LF and HF Blank Cards | `icopy-x-advanced-tag-pack` | 189,95 € |
| 3 | iCopy-X Basic Tag Pack / 16 LF and HF RFID Blanks | `icopy-x-basic-tag-pack` | 19,95 € |
| 4 | iCopy-X Intermediate Tag Pack / 16 RFID Blank Cards | `icopy-x-intermediate-tag-pack` | 129,95 € |

### RFID Tools (`rfid-tools`) — 36 produit(s)

| Pos | Produit | Handle | Prix EUR |
|----:|---------|--------|--------:|
| 1 | Proxmark 5 / LF and HF RFID Research and Emulation | `proxmark-5` | 325,00 € |
| 2 | Proxmark 3 RDV4.01 / LF and HF RFID Research Multi-tool | `proxmark-3-rdv4` | 339,00 € |
| 3 | USB RFID Reader/Writer DL533N / 13.56MHz LibNFC Tool | `usb-rfid-reader-writer-dl533n` | 55,00 € |
| 4 | ICopy-XS / Portable LF and HF RFID Cloning Device | `icopy-x` | 375,00 € |
| 5 | Flipper Zero / Portable RFID, Sub-GHz & Hardware Multitool | `flipper-zero` | 149,17 € |
| 6 | RFID Field Detector Ultra - LF/HF/UHF / Passive Detection | `rfid-field-detector-ultra` | 24,95 € |
| 7 | Chameleon Ultra / Wireless LF and HF RFID Emulator | `chameleon-ultra` | 129,00 € |
| 8 | Stealth Decoy Reader / RFID and PIN Audit Capture | `stealth-decoy-reader` | 375,00 € |
| 9 | Long-range iCLASS RFID Capture System / Up to 45 cm | `ppe-iclass-longrange-rfid-capture-system` | 895,00 € |
| 10 | Long-range MaxiProx 5375 125KHz Capture System | `long-range-maxiprox-5375-125khz-capture-system` | 995,00 € |
| 11 | Dual Mode Paxton Long Range / Stealth Decoy Reader | `dual-mode-paxton-long-range-stealth-decoy-reader` | 475,00 € |
| 12 | Keysy LF RFID Duplicator & Emulator / 125KHz, 4 Slots | `keysy-lf-rfid-emulator-duplicator` | 65,00 € |
| 13 | DL533N XL / Long Range HF RFID Reader / Writer | `long-range-rfid-reader-writer-dl533n-xl` | 129,00 € |
| 14 | KIISU - Compact Flipper alternative / RFID & NFC Tool | `kiisu` | 79,00 € |
| 15 | UHFKill / Permanent UHF RFID Tag Deactivation Tool | `uhfkill` | 1495,00 € |
| 16 | ESP RFID Tool / WiFi Wiegand Capture and Replay Tool | `wiegand-sniffer-esp-rfid-tool` | 30,00 € |
| 17 | NFCKill (Professional Version) / RFID Deactivation Tool | `nfckill-professional-version` | 265,00 € |
| 18 | Doppelgänger Core RFID Dev Board / Wiegand and PIN Capture | `doppelganger-core-rfid-dev-board` | 60,00 € |
| 19 | RFID Range Extenders / Passive 13.56MHz Antennas | `rfid-antenna-extender` | 35,00 € |
| 20 | NFC Range Extender for Flipper Zero / Passive Antennas | `nfc-range-extender-for-flipper-zero` | 75,00 € |
| 21 | NFC Booster Antenna for Flipper Zero / Passive NFC Boost | `nfc-booster-antenna-for-flipper-zero` | 10,00 € |
| 22 | 13.56MHz RFID Range Boosters / Passive NFC Antennas | `13-56mhz-rfid-range-boosters` | 10,00 € |
| 23 | 13.56MHZ RFID Field Strength Meter / Passive NFC Testing | `13-56mhz-rfid-field-strength-meter` | 80,00 € |
| 24 | Proxmark 3 RDV4 / BlueShark Standalone Module | `proxmark-3-rdv4-standalone-kit` | 99,00 € |
| 25 | Proxmark 3 RDV4.01 / Long Range HF Antenna Pack | `proxmark-3-rdv4-long-range-hf-antenna-1` | 89,95 € |
| 26 | iCS Decoder / iCLASS® SE / SEOS Accessory for iCopy-X | `ics-decoder-iclass-se-seos-cloner-decoder` | 425,00 € |
| 27 | Proxmark 3 RDV4.01 / Long Range LF Antenna Pack | `proxmark-3-rdv4-01-long-range-lf-antenna-pack` | 89,95 € |
| 28 | ProxRF 125KHz Biochip Antenna / Proxmark RFID Accessory | `proxrf-125khz-biochip-antenna` | 29,99 € |
| 29 | Proxmark 3 RDV4.01 / Upgrade and Replacement Antennas | `proxmark-3-rdv4-01-upgraded-replacement-antenna` | 24,99 € |
| 30 | Chameleon Ultra DevKit / LF and HF RFID Development | `chameleon-ultra-devkit` | 129,00 € |
| 31 | Chameleon Lite / 13.56MHz and 125KHz RFID Emulator | `chameleon-lite` | 59,00 € |
| 32 | PPE Long Range Reader Power Supply / 25,600mAh Battery | `ppe-long-range-reader-power-supply` | 255,00 € |
| 33 | USB Bluetooth Adaptor HC-06 / Proxmark 3 RDV4.01 | `usb-bluetooth-adaptor-hc-06` | 29,00 € |
| 34 | Proxmark 3 RDV4 - SIM/SAM Extension / Debug and Program | `proxmark-3-rdv4-sim-sam-extension` | 19,95 € |
| 35 | Industrial Handheld UHF Reader / Tag Deactivation Checks | `industrial-handheld-uhf-reader` | 975,00 € |
| 36 | Proxmark 5 - Wireless + Battery Module / Mobile RFID | `proxmark-5-wireless-battery-module` | 99,00 € |

### RFID Tools: Accessories (`rfid-tools-accessories`) — 11 produit(s)

| Pos | Produit | Handle | Prix EUR |
|----:|---------|--------|--------:|
| 1 | Proxmark 5 - Wireless + Battery Module / Mobile RFID | `proxmark-5-wireless-battery-module` | 99,00 € |
| 2 | RFID Range Extenders / Passive 13.56MHz Antennas | `rfid-antenna-extender` | 35,00 € |
| 3 | Proxmark 3 RDV4 / BlueShark Standalone Module | `proxmark-3-rdv4-standalone-kit` | 99,00 € |
| 4 | Proxmark 3 RDV4.01 / Long Range HF Antenna Pack | `proxmark-3-rdv4-long-range-hf-antenna-1` | 89,95 € |
| 5 | Proxmark 3 RDV4.01 / Long Range LF Antenna Pack | `proxmark-3-rdv4-01-long-range-lf-antenna-pack` | 89,95 € |
| 6 | Proxmark 3 RDV4 - SIM/SAM Extension / Debug and Program | `proxmark-3-rdv4-sim-sam-extension` | 19,95 € |
| 7 | Proxmark 3 RDV4.01 / Upgrade and Replacement Antennas | `proxmark-3-rdv4-01-upgraded-replacement-antenna` | 24,99 € |
| 8 | USB Bluetooth Adaptor HC-06 / Proxmark 3 RDV4.01 | `usb-bluetooth-adaptor-hc-06` | 29,00 € |
| 9 | PPE Long Range Reader Power Supply / 25,600mAh Battery | `ppe-long-range-reader-power-supply` | 255,00 € |
| 10 | PPE 2-in-1 Fast USB-C Battery Charger / Dual LiPo | `ppe-2-in-1-fast-usb-c-battery-charger` | 30,00 € |
| 11 | PPE Stealth Decoy Reader Spare Battery / 3.7V 1800mAh | `ppe-extra-stealth-decoy-reader-battery` | 15,00 € |

### RFID Tools: Antennas (`rfid-tools-antennas`) — 8 produit(s)

| Pos | Produit | Handle | Prix EUR |
|----:|---------|--------|--------:|
| 1 | NFC Booster Antenna for Flipper Zero / Passive NFC Boost | `nfc-booster-antenna-for-flipper-zero` | 10,00 € |
| 2 | RFID Range Extenders / Passive 13.56MHz Antennas | `rfid-antenna-extender` | 35,00 € |
| 3 | Proxmark 3 RDV4.01 / Long Range HF Antenna Pack | `proxmark-3-rdv4-long-range-hf-antenna-1` | 89,95 € |
| 4 | 13.56MHz RFID Range Boosters / Passive NFC Antennas | `13-56mhz-rfid-range-boosters` | 10,00 € |
| 5 | Proxmark 3 RDV4.01 / Long Range LF Antenna Pack | `proxmark-3-rdv4-01-long-range-lf-antenna-pack` | 89,95 € |
| 6 | ProxRF 125KHz Biochip Antenna / Proxmark RFID Accessory | `proxrf-125khz-biochip-antenna` | 29,99 € |
| 7 | Proxmark 3 RDV4.01 / Upgrade and Replacement Antennas | `proxmark-3-rdv4-01-upgraded-replacement-antenna` | 24,99 € |
| 8 | NFC Range Extender for Flipper Zero / Passive Antennas | `nfc-range-extender-for-flipper-zero` | 75,00 € |

### RFID Tools: Cloning (`rfid-tools-cloning`) — 12 produit(s)

| Pos | Produit | Handle | Prix EUR |
|----:|---------|--------|--------:|
| 1 | ICopy-XS / Portable LF and HF RFID Cloning Device | `icopy-x` | 375,00 € |
| 2 | Flipper Zero / Portable RFID, Sub-GHz & Hardware Multitool | `flipper-zero` | 149,17 € |
| 3 | Proxmark 5 / LF and HF RFID Research and Emulation | `proxmark-5` | 325,00 € |
| 4 | Proxmark 3 RDV4.01 / LF and HF RFID Research Multi-tool | `proxmark-3-rdv4` | 339,00 € |
| 5 | Keysy LF RFID Duplicator & Emulator / 125KHz, 4 Slots | `keysy-lf-rfid-emulator-duplicator` | 65,00 € |
| 6 | USB RFID Reader/Writer DL533N / 13.56MHz LibNFC Tool | `usb-rfid-reader-writer-dl533n` | 55,00 € |
| 7 | iCS Decoder / iCLASS® SE / SEOS Accessory for iCopy-X | `ics-decoder-iclass-se-seos-cloner-decoder` | 425,00 € |
| 8 | KIISU - Compact Flipper alternative / RFID & NFC Tool | `kiisu` | 79,00 € |
| 9 | Long-range iCLASS RFID Capture System / Up to 45 cm | `ppe-iclass-longrange-rfid-capture-system` | 895,00 € |
| 10 | Long-range MaxiProx 5375 125KHz Capture System | `long-range-maxiprox-5375-125khz-capture-system` | 995,00 € |
| 11 | Dual Mode Paxton Long Range / Stealth Decoy Reader | `dual-mode-paxton-long-range-stealth-decoy-reader` | 475,00 € |
| 12 | Stealth Decoy Reader / RFID and PIN Audit Capture | `stealth-decoy-reader` | 375,00 € |

### RFID Tools: Development & Diagnostic (`rfid-tools-development-diagnostic`) — 7 produit(s)

| Pos | Produit | Handle | Prix EUR |
|----:|---------|--------|--------:|
| 1 | Proxmark 3 RDV4.01 / LF and HF RFID Research Multi-tool | `proxmark-3-rdv4` | 339,00 € |
| 2 | RFID Field Detector Ultra - LF/HF/UHF / Passive Detection | `rfid-field-detector-ultra` | 24,95 € |
| 3 | NFCKill (Professional Version) / RFID Deactivation Tool | `nfckill-professional-version` | 265,00 € |
| 4 | Proxmark 5 / LF and HF RFID Research and Emulation | `proxmark-5` | 325,00 € |
| 5 | Chameleon Ultra DevKit / LF and HF RFID Development | `chameleon-ultra-devkit` | 129,00 € |
| 6 | 13.56MHZ RFID Field Strength Meter / Passive NFC Testing | `13-56mhz-rfid-field-strength-meter` | 80,00 € |
| 7 | Industrial Handheld UHF Reader / Tag Deactivation Checks | `industrial-handheld-uhf-reader` | 975,00 € |

### RFID Tools: Emulation (`rfid-tools-emulation`) — 9 produit(s)

| Pos | Produit | Handle | Prix EUR |
|----:|---------|--------|--------:|
| 1 | Proxmark 5 / LF and HF RFID Research and Emulation | `proxmark-5` | 325,00 € |
| 2 | Chameleon Ultra / Wireless LF and HF RFID Emulator | `chameleon-ultra` | 129,00 € |
| 3 | Keysy LF RFID Duplicator & Emulator / 125KHz, 4 Slots | `keysy-lf-rfid-emulator-duplicator` | 65,00 € |
| 4 | Flipper Zero / Portable RFID, Sub-GHz & Hardware Multitool | `flipper-zero` | 149,17 € |
| 5 | Proxmark 3 RDV4.01 / LF and HF RFID Research Multi-tool | `proxmark-3-rdv4` | 339,00 € |
| 6 | KIISU - Compact Flipper alternative / RFID & NFC Tool | `kiisu` | 79,00 € |
| 7 | Chameleon Lite / 13.56MHz and 125KHz RFID Emulator | `chameleon-lite` | 59,00 € |
| 8 | Dual Mode Paxton Long Range / Stealth Decoy Reader | `dual-mode-paxton-long-range-stealth-decoy-reader` | 475,00 € |
| 9 | Long-range iCLASS RFID Capture System / Up to 45 cm | `ppe-iclass-longrange-rfid-capture-system` | 895,00 € |

### RFID Tools: Implants (`rfid-tools-implants`) — 4 produit(s)

| Pos | Produit | Handle | Prix EUR |
|----:|---------|--------|--------:|
| 1 | Stealth Decoy Reader / RFID and PIN Audit Capture | `stealth-decoy-reader` | 375,00 € |
| 2 | Dual Mode Paxton Long Range / Stealth Decoy Reader | `dual-mode-paxton-long-range-stealth-decoy-reader` | 475,00 € |
| 3 | Doppelgänger Core RFID Dev Board / Wiegand and PIN Capture | `doppelganger-core-rfid-dev-board` | 60,00 € |
| 4 | ESP RFID Tool / WiFi Wiegand Capture and Replay Tool | `wiegand-sniffer-esp-rfid-tool` | 30,00 € |

### RFID Tools: Long Range (`rfid-tools-long-range`) — 5 produit(s)

| Pos | Produit | Handle | Prix EUR |
|----:|---------|--------|--------:|
| 1 | Long-range MaxiProx 5375 125KHz Capture System | `long-range-maxiprox-5375-125khz-capture-system` | 995,00 € |
| 2 | Long-range iCLASS RFID Capture System / Up to 45 cm | `ppe-iclass-longrange-rfid-capture-system` | 895,00 € |
| 3 | Dual Mode Paxton Long Range / Stealth Decoy Reader | `dual-mode-paxton-long-range-stealth-decoy-reader` | 475,00 € |
| 4 | DL533N XL / Long Range HF RFID Reader / Writer | `long-range-rfid-reader-writer-dl533n-xl` | 129,00 € |
| 5 | Doppelgänger Core RFID Dev Board / Wiegand and PIN Capture | `doppelganger-core-rfid-dev-board` | 60,00 € |

### RFID Tools: Read/Write (`rfid-tools-read-write`) — 8 produit(s)

| Pos | Produit | Handle | Prix EUR |
|----:|---------|--------|--------:|
| 1 | Proxmark 5 / LF and HF RFID Research and Emulation | `proxmark-5` | 325,00 € |
| 2 | Proxmark 3 RDV4.01 / LF and HF RFID Research Multi-tool | `proxmark-3-rdv4` | 339,00 € |
| 3 | USB RFID Reader/Writer DL533N / 13.56MHz LibNFC Tool | `usb-rfid-reader-writer-dl533n` | 55,00 € |
| 4 | DL533N XL / Long Range HF RFID Reader / Writer | `long-range-rfid-reader-writer-dl533n-xl` | 129,00 € |
| 5 | Flipper Zero / Portable RFID, Sub-GHz & Hardware Multitool | `flipper-zero` | 149,17 € |
| 6 | ICopy-XS / Portable LF and HF RFID Cloning Device | `icopy-x` | 375,00 € |
| 7 | Chameleon Ultra / Wireless LF and HF RFID Emulator | `chameleon-ultra` | 129,00 € |
| 8 | KIISU - Compact Flipper alternative / RFID & NFC Tool | `kiisu` | 79,00 € |

### SDR (`sdr-1`) — 8 produit(s)

| Pos | Produit | Handle | Prix EUR |
|----:|---------|--------|--------:|
| 1 | Blade RF 2.0 Micro xA4 / Full-Duplex 2x2 MIMO SDR | `bladerf-sdr-2-micro-xa4` | 749,00 € |
| 2 | SignalSDR Pro / Full-Duplex SDR for 5G Security Research | `signalsdr-pro` | 1100,00 € |
| 3 | HackRF Pro / 100 kHz-6 GHz Software Defined Radio | `hackrf-pro` | 400,00 € |
| 4 | KrakenSDR / Five-Receiver Radio Direction Finding Kit | `krakensdr` | 1020,00 € |
| 5 | NanoVNA-F / 10 kHz-1.5 GHz Vector Network Analyser | `nanovna` | 110,00 € |
| 6 | Opera Cake for HackRF / Automatic RF Antenna Switching | `opera-cake-for-hackrf` | 190,00 € |
| 7 | TinySA Ultra+ / Spectrum Analyser with 5.4 GHz Ultra Mode | `tinysa-ultra` | 163,00 € |
| 8 | LiteVNA (NanoVNA Compatible) / 50 kHz-6.3 GHz Analyser | `litevna` | 192,00 € |

### SDR (`sdr`) — 7 produit(s)

| Pos | Produit | Handle | Prix EUR |
|----:|---------|--------|--------:|
| 1 | SignalSDR Pro / Full-Duplex SDR for 5G Security Research | `signalsdr-pro` | 1100,00 € |
| 2 | Blade RF 2.0 Micro xA4 / Full-Duplex 2x2 MIMO SDR | `bladerf-sdr-2-micro-xa4` | 749,00 € |
| 3 | HackRF Pro / 100 kHz-6 GHz Software Defined Radio | `hackrf-pro` | 400,00 € |
| 4 | KrakenSDR / Five-Receiver Radio Direction Finding Kit | `krakensdr` | 1020,00 € |
| 5 | TinySA Ultra+ / Spectrum Analyser with 5.4 GHz Ultra Mode | `tinysa-ultra` | 163,00 € |
| 6 | NanoVNA-F / 10 kHz-1.5 GHz Vector Network Analyser | `nanovna` | 110,00 € |
| 7 | Opera Cake for HackRF / Automatic RF Antenna Switching | `opera-cake-for-hackrf` | 190,00 € |

### SDR: Antenna Diagnostics (`sdr-antenna-diagnostics`) — 2 produit(s)

| Pos | Produit | Handle | Prix EUR |
|----:|---------|--------|--------:|
| 1 | NanoVNA-F / 10 kHz-1.5 GHz Vector Network Analyser | `nanovna` | 110,00 € |
| 2 | LiteVNA (NanoVNA Compatible) / 50 kHz-6.3 GHz Analyser | `litevna` | 192,00 € |

### SDR: Desktop & Lab Devices (`sdr-devices`) — 4 produit(s)

| Pos | Produit | Handle | Prix EUR |
|----:|---------|--------|--------:|
| 1 | Blade RF 2.0 Micro xA4 / Full-Duplex 2x2 MIMO SDR | `bladerf-sdr-2-micro-xa4` | 749,00 € |
| 2 | HackRF Pro / 100 kHz-6 GHz Software Defined Radio | `hackrf-pro` | 400,00 € |
| 3 | SignalSDR Pro / Full-Duplex SDR for 5G Security Research | `signalsdr-pro` | 1100,00 € |
| 4 | Opera Cake for HackRF / Automatic RF Antenna Switching | `opera-cake-for-hackrf` | 190,00 € |

### SDR: Portable Devices (`sdr-portable-devices`) — 1 produit(s)

| Pos | Produit | Handle | Prix EUR |
|----:|---------|--------|--------:|
| 1 | KrakenSDR / Five-Receiver Radio Direction Finding Kit | `krakensdr` | 1020,00 € |

### SDR: Spectrum Analysers (`sdr-spectrum-analysers`) — 2 produit(s)

| Pos | Produit | Handle | Prix EUR |
|----:|---------|--------|--------:|
| 1 | TinySA Ultra+ / Spectrum Analyser with 5.4 GHz Ultra Mode | `tinysa-ultra` | 163,00 € |
| 2 | HackRF Pro / 100 kHz-6 GHz Software Defined Radio | `hackrf-pro` | 400,00 € |

### Stickers & Swag (`stickers-swag`) — 4 produit(s)

| Pos | Produit | Handle | Prix EUR |
|----:|---------|--------|--------:|
| 1 | Lab401 Pentest Sticker Pack / Packs of 10, 20 or 50 | `lab401-hacker-stickers` | 8,00 € |
| 2 | LAB401 Pin / Gold-Plated Badge for Shirts & Bags | `lab401-pin` | 3,95 € |
| 3 | USBKill Logo Pin / Gold-Plated Hardened Brass Badge | `usbkill-invader-pin-copy` | 12,00 € |
| 4 | USBKill Invader Pin / Decorative Shirt & Bag Badge | `usbkill-invader-pin` | 15,00 € |

### SubGHz Tools (`rf-tools`) — 7 produit(s)

| Pos | Produit | Handle | Prix EUR |
|----:|---------|--------|--------:|
| 1 | PandwaRF Rogue Pro / RF Remote Capture and Analysis | `pandwarf-rogue-pro` | 579,00 € |
| 2 | Flux Capacitor / Flipper Zero CC1101 Radio Amplifier | `flux-capacitor` | 65,00 € |
| 3 | TinySA Ultra+ / Spectrum Analyser with 5.4 GHz Ultra Mode | `tinysa-ultra` | 163,00 € |
| 4 | Flipper Zero / Portable RFID, Sub-GHz & Hardware Multitool | `flipper-zero` | 149,17 € |
| 5 | KIISU - Compact Flipper alternative / RFID & NFC Tool | `kiisu` | 79,00 € |
| 6 | PandwaRF Marauder / Autonomous Dual-Frequency RF Capture | `pandwarf-marauder` | 979,00 € |
| 7 | PandwaRF Kaiju Pro License / Rolling-Code Analysis | `pandwarf-kaiju-license` | 290,00 € |

### SubGHz Tools: Capture, Sniff, Replay (`subghz-capture-sniff-replay`) — 5 produit(s)

| Pos | Produit | Handle | Prix EUR |
|----:|---------|--------|--------:|
| 1 | PandwaRF Rogue Pro / RF Remote Capture and Analysis | `pandwarf-rogue-pro` | 579,00 € |
| 2 | Flipper Zero / Portable RFID, Sub-GHz & Hardware Multitool | `flipper-zero` | 149,17 € |
| 3 | PandwaRF Marauder / Autonomous Dual-Frequency RF Capture | `pandwarf-marauder` | 979,00 € |
| 4 | Flux Capacitor / Flipper Zero CC1101 Radio Amplifier | `flux-capacitor` | 65,00 € |
| 5 | KIISU - Compact Flipper alternative / RFID & NFC Tool | `kiisu` | 79,00 € |

### SubGHz Tools: Remote Control Cloning (`subghz-tools-remote-control-cloning`) — 5 produit(s)

| Pos | Produit | Handle | Prix EUR |
|----:|---------|--------|--------:|
| 1 | PandwaRF Rogue Pro / RF Remote Capture and Analysis | `pandwarf-rogue-pro` | 579,00 € |
| 2 | Flipper Zero / Portable RFID, Sub-GHz & Hardware Multitool | `flipper-zero` | 149,17 € |
| 3 | PandwaRF Marauder / Autonomous Dual-Frequency RF Capture | `pandwarf-marauder` | 979,00 € |
| 4 | Flux Capacitor / Flipper Zero CC1101 Radio Amplifier | `flux-capacitor` | 65,00 € |
| 5 | PandwaRF Kaiju Pro License / Rolling-Code Analysis | `pandwarf-kaiju-license` | 290,00 € |

### SubGHz Tools: Spectrum Analysers (`subghz-tools-spectrum-analysers`) — 2 produit(s)

| Pos | Produit | Handle | Prix EUR |
|----:|---------|--------|--------:|
| 1 | TinySA Ultra+ / Spectrum Analyser with 5.4 GHz Ultra Mode | `tinysa-ultra` | 163,00 € |
| 2 | Flipper Zero / Portable RFID, Sub-GHz & Hardware Multitool | `flipper-zero` | 149,17 € |

### Tags (`tags`) — 23 produit(s)

| Pos | Produit | Handle | Prix EUR |
|----:|---------|--------|--------:|
| 1 | MIFARE Classic® Compatible 1K Gen2a One-Time UID Tag | `undetectable-mifare-compatible-1k-one-time-write-uid` | 4,99 € |
| 2 | MIFARE Classic® Compatible 1K Gen1a Coin Tags / 5 Pack | `mifare-compatible-1k-uid-modifiable-pack-of-5` | 4,99 € |
| 3 | Magic NTAG® 21x / NTAG® I2C / MIFARE Ultralight® EV1 Tag | `ntag-compatible-21x` | 29,99 € |
| 4 | MIFARE Ultralight® Compatible Gen1a UID Changeable Card | `ultralight-compatible-uid-modifiable` | 4,99 € |
| 5 | MIFARE Ultralight-C® Compatible Gen1a UID Card | `ultralight-c-compatible-uid-modifiable` | 29,99 € |
| 6 | MIFARE Classic® Compatible 4K Gen2 Direct Write UID Card | `mifare-compatible-4k-direct-write-uid` | 29,99 € |
| 7 | MIFARE Classic® Compatible 1K Gen2 Direct Write UID Card | `mifare-compatible-1k-direct-write-uid` | 12,99 € |
| 8 | MIFARE Ultralight® Compatible Gen2 Direct Write UID Card | `ultralight-compatiblr-direct-write-uid` | 4,99 € |
| 9 | NTAG® 213 Compatible Gen2 Direct Write UID Card | `ntag-compatible-213-direct-write-uid` | 14,99 € |
| 10 | MIFARE DESFire® Compatible EV1/EV2 UID Emulator Card | `desfire-compatible-emulator-uid-modifiable` | 29,99 € |
| 11 | MIFARE Classic® Compatible 1K Gen1a UID Tags / Pack of 5 | `mifare-compatible-1k-uid-modifiable` | 24,99 € |
| 12 | Keysy Blank LF Tag / RFID Cloner Blank Badges, 5 Pack | `keysy-blank-lf-tag-pack-of-5` | 24,99 € |
| 13 | ICODE SLI/SLIX Compatible UID Card / ISO15693, 28 Blocks | `icode-sli-slix-compatible-uid-modifiable` | 29,99 € |
| 14 | 125KHz T5577 Keyfobs / Rewritable LF RFID Tags, 5 Pack | `125khz-t5577-keyfobs-pack-of-5` | 19,99 € |
| 15 | MIFARE Classic® Compatible 4K Gen2 7-byte DirectWrite Card | `mifare-classic-compatible-4k-7-byte-uid-modifiable-by-directwrite` | 29,99 € |
| 16 | MIFARE Classic® Compatible 1K Gen2 7-byte Direct Write | `mifare-classic-compatible-1k-7-byte-direct-write-uid` | 29,99 € |
| 17 | MIFARE Mini® Compatible 0.3K Gen2 Direct Write UID Card | `mifare-mini-compatible-uid-modifable-direct-write` | 29,95 € |
| 18 | Ultimate Magic Card (Gen4) / Configurable NFC Emulation | `ultimate-magic-card-gen4` | 29,00 € |
| 19 | RFID Pentester Tag Pack / Basic, Standard and Complete | `rfid-pentester-tag-pack` | 90,00 € |
| 20 | MIFARE DESFire® Compatible UID/ATQA/SAK/ATS/APDU Card | `mifare-desfire-ev2-compatible-modifiable-uid-atqa-sak-ats-apdu` | 29,99 € |
| 21 | MIFARE Classic® Compatible 1K Gen2a One-Time UID Coins, 5 | `mifare-classic-compatible-1k-one-time-write-uid-modifiable-coin-tag-gen2a` | 15,00 € |
| 22 | iCODE SLI Gen2 UID Changeable ISO15693 / 8-byte UID Card | `icode-sli-gen2-uid-changeable-iso15693` | 29,95 € |
| 23 | MIFARE Classic® Compatible 4K Gen3 / Lockable UID Card | `mifare-classic-compatible-4k-gen3` | 9,95 € |

---

## Collections FR et ES (résumé)

- **89 collections** dans chaque locale (`fr/collections/`, `es/collections/`), mêmes handles que EN, mêmes nombres de produits par collection (vérifié pour `sdr-1` : 8 produits en FR et en ES ; `rf-tools` : 7 en FR).
- Titres de page traduits (ex. FR `rf-tools` = « Outils RF », ES = « Herramientas RF » — à confirmer pour ES).
- Les 3 handles FR traduits (`bus-pirate-5-cable-auxiliaire`, `digilab-pour-flipperzero`, `kit-de-modules-digilab`) apparaissent dans les collections FR à la place des handles anglais ; les pages en handle anglais existent aussi en FR.
- Le PortaPack manque aux mêmes endroits en FR et en ES (collections `sdr-1` et `rf-tools`, accueil, `all-products`).

---

## Collections liées à l'accueil (vrai site)

L'accueil du vrai site affiche 10 sections produits, chacune puisant dans une collection (recherche 2026-11-19) : Flipper Zero (8) · Pentesting Hardware (7) · Newest Products (9) · RFID Tools (7) · SubGHz Tools (4, = les 4 premiers de `rf-tools`) · SDR Tools (5, = les 5 premiers de `sdr-1`) · Hardware Auditing Tools (8) · Hak5 Products (10) · Specialised RFID Badges (16) · Physical Audit Tools (10). Dans le clone, ces sections existent mais le PortaPack en est absent (0 occurrence de `portapack-h4m-pro` dans `index.html`, `fr/index.html` et `es/index.html`). Le correctif à venir doit l'ajouter en position 2/4 (SubGHz) et 3/5 (SDR) sur les 3 accueils.
