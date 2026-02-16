export const SWMM5_CUSTOM_INP: Record<string, string> = {
  'ottoman-kirkcesme': `[TITLE]
Ottoman Kirkcesme Water Supply System - Mimar Sinan (1554 CE)
55 km aqueduct from Belgrade Forest to Istanbul
33 water bridges, 4 taksim terminals, hundreds of sebils
Istanbul, Turkey - Greatest Ottoman hydraulic achievement
Model by Robert Dickinson, PE

[OPTIONS]
FLOW_UNITS           CMS
FLOW_ROUTING         DYNWAVE
LINK_OFFSETS          DEPTH
START_DATE           01/01/2024
START_TIME           00:00:00
END_DATE             01/02/2024
END_TIME             00:00:00
REPORT_STEP          00:05:00
WET_STEP             00:01:00
DRY_STEP             01:00:00
ROUTING_STEP         0:00:30
INERTIAL_DAMPING     PARTIAL

[JUNCTIONS]
;;Name              Elev     MaxDepth  InitDepth  SurDepth  Aponded
BELGRADE_FOREST     180.0    3.0       0          0         0
SPRING_COLLECTION   178.0    2.5       0          0         0
BEND_EMIR_1         175.0    2.0       0          0         0
LONG_BRIDGE_1       170.0    2.5       0          0         0
MAGLOVA_KEMER       165.0    3.0       0          0         0
BEND_EMIR_2         160.0    2.0       0          0         0
UZUN_KEMER          155.0    3.0       0          0         0
GUZELCE_KEMER       150.0    2.5       0          0         0
EGRI_KEMER          145.0    2.5       0          0         0
KOVUK_KEMER         140.0    2.0       0          0         0
SETTLING_BASIN      138.0    3.0       0          0         0
TAKSIM_MAIN         135.0    4.0       0          0         0
TAKSIM_BEYOGLU      133.0    2.0       0          0         0
TAKSIM_GALATA       132.0    2.0       0          0         0
TAKSIM_USKUDAR      133.0    2.0       0          0         0
SULEYMANIYE_FEED    131.0    2.0       0          0         0
SULEYMANIYE_CMPLX   130.0    2.5       0          0         0
SEBIL_SULTANAHMET   129.0    1.5       0          0         0
SEBIL_GRAND_BAZAAR  128.0    1.5       0          0         0
HAMMAM_CEMBERLITAS  129.0    2.0       0          0         0
HAMMAM_CAGALOGLU    128.0    2.0       0          0         0
TOPKAPI_PALACE      130.0    2.0       0          0         0
MOSQUE_FOUNTAIN_1   128.0    1.0       0          0         0
MOSQUE_FOUNTAIN_2   127.0    1.0       0          0         0

[OUTFALLS]
;;Name              Elev     Type       Stage
GOLDEN_HORN         120.0    FREE
BOSPHORUS           120.0    FREE
MARMARA_SEA         120.0    FREE

[CONDUITS]
;;Name              From                To                  Length   Manning  InOff  OutOff  InitFlow  MaxFlow
FOREST_COLLECT      BELGRADE_FOREST     SPRING_COLLECTION   2000     0.018    0      0       0         0
MAIN_AQUE_1         SPRING_COLLECTION   BEND_EMIR_1         5000     0.015    0      0       0         0
MAIN_AQUE_2         BEND_EMIR_1         LONG_BRIDGE_1       6000     0.015    0      0       0         0
MAGLOVA_CROSS       LONG_BRIDGE_1       MAGLOVA_KEMER       3000     0.015    0      0       0         0
MAIN_AQUE_3         MAGLOVA_KEMER       BEND_EMIR_2         5000     0.015    0      0       0         0
UZUN_CROSS          BEND_EMIR_2         UZUN_KEMER          4000     0.015    0      0       0         0
MAIN_AQUE_4         UZUN_KEMER          GUZELCE_KEMER       3000     0.015    0      0       0         0
GUZELCE_CROSS       GUZELCE_KEMER       EGRI_KEMER          4000     0.015    0      0       0         0
EGRI_CROSS          EGRI_KEMER          KOVUK_KEMER         3000     0.015    0      0       0         0
MAIN_AQUE_5         KOVUK_KEMER         SETTLING_BASIN      5000     0.015    0      0       0         0
SETTLE_TO_TAKSIM    SETTLING_BASIN      TAKSIM_MAIN         3000     0.013    0      0       0         0
BEYOGLU_PIPE        TAKSIM_MAIN         TAKSIM_BEYOGLU      1000     0.012    0      0       0         0
GALATA_PIPE         TAKSIM_MAIN         TAKSIM_GALATA       1500     0.012    0      0       0         0
USKUDAR_PIPE        TAKSIM_MAIN         TAKSIM_USKUDAR      2000     0.012    0      0       0         0
SULEY_FEED          TAKSIM_MAIN         SULEYMANIYE_FEED    800      0.012    0      0       0         0
SULEY_COMPLEX       SULEYMANIYE_FEED    SULEYMANIYE_CMPLX   200      0.012    0      0       0         0
SULTANAHMET_PIPE    TAKSIM_GALATA       SEBIL_SULTANAHMET   1000     0.012    0      0       0         0
BAZAAR_PIPE         TAKSIM_GALATA       SEBIL_GRAND_BAZAAR  1200     0.012    0      0       0         0
HAMMAM_1_PIPE       SULEYMANIYE_FEED    HAMMAM_CEMBERLITAS  500      0.012    0      0       0         0
HAMMAM_2_PIPE       TAKSIM_BEYOGLU      HAMMAM_CAGALOGLU    800      0.012    0      0       0         0
TOPKAPI_PIPE        TAKSIM_MAIN         TOPKAPI_PALACE      2000     0.012    0      0       0         0
MOSQUE_1_PIPE       SULEYMANIYE_CMPLX   MOSQUE_FOUNTAIN_1   300      0.012    0      0       0         0
MOSQUE_2_PIPE       SEBIL_SULTANAHMET   MOSQUE_FOUNTAIN_2   200      0.012    0      0       0         0
GOLDEN_DRAIN        TAKSIM_GALATA       GOLDEN_HORN         2000     0.015    0      0       0         0
BOSPHORUS_DRAIN     TOPKAPI_PALACE      BOSPHORUS           1500     0.015    0      0       0         0
MARMARA_DRAIN       SEBIL_GRAND_BAZAAR  MARMARA_SEA         2000     0.015    0      0       0         0

[XSECTIONS]
;;Link              Shape       Geom1  Geom2  Geom3  Geom4  Barrels
FOREST_COLLECT      TRAPEZOIDAL 0.8    2.0    1.0    1.0    1
MAIN_AQUE_1         RECT_OPEN   0.6    0.8    0      0      1
MAIN_AQUE_2         RECT_OPEN   0.6    0.8    0      0      1
MAGLOVA_CROSS       RECT_OPEN   0.6    0.8    0      0      1
MAIN_AQUE_3         RECT_OPEN   0.6    0.8    0      0      1
UZUN_CROSS          RECT_OPEN   0.6    0.8    0      0      1
MAIN_AQUE_4         RECT_OPEN   0.6    0.8    0      0      1
GUZELCE_CROSS       RECT_OPEN   0.6    0.8    0      0      1
EGRI_CROSS          RECT_OPEN   0.6    0.8    0      0      1
MAIN_AQUE_5         RECT_OPEN   0.6    0.8    0      0      1
SETTLE_TO_TAKSIM    CIRCULAR    0.40   0      0      0      1
BEYOGLU_PIPE        CIRCULAR    0.20   0      0      0      2
GALATA_PIPE         CIRCULAR    0.20   0      0      0      2
USKUDAR_PIPE        CIRCULAR    0.20   0      0      0      2
SULEY_FEED          CIRCULAR    0.25   0      0      0      1
SULEY_COMPLEX       CIRCULAR    0.20   0      0      0      1
SULTANAHMET_PIPE    CIRCULAR    0.15   0      0      0      1
BAZAAR_PIPE         CIRCULAR    0.15   0      0      0      1
HAMMAM_1_PIPE       CIRCULAR    0.15   0      0      0      1
HAMMAM_2_PIPE       CIRCULAR    0.15   0      0      0      1
TOPKAPI_PIPE        CIRCULAR    0.20   0      0      0      1
MOSQUE_1_PIPE       CIRCULAR    0.10   0      0      0      1
MOSQUE_2_PIPE       CIRCULAR    0.10   0      0      0      1
GOLDEN_DRAIN        CIRCULAR    0.25   0      0      0      1
BOSPHORUS_DRAIN     CIRCULAR    0.20   0      0      0      1
MARMARA_DRAIN       CIRCULAR    0.20   0      0      0      1

[INFLOWS]
;;Node              Constituent  TimeSeries  Type  Mfactor  Sfactor  Baseline  Pattern
BELGRADE_FOREST     FLOW         FOREST_SPR  FLOW  1.0      1.0      0.15

[TIMESERIES]
;;Name              Date       Time   Value
FOREST_SPR          01/01/2024 00:00  0.15
FOREST_SPR          01/01/2024 06:00  0.18
FOREST_SPR          01/01/2024 12:00  0.15
FOREST_SPR          01/01/2024 18:00  0.18
FOREST_SPR          01/02/2024 00:00  0.15

[COORDINATES]
;;Node              X-Coord    Y-Coord
BELGRADE_FOREST     1000       9000
SPRING_COLLECTION   1200       8800
BEND_EMIR_1         1800       8200
LONG_BRIDGE_1       2500       7600
MAGLOVA_KEMER       3000       7200
BEND_EMIR_2         3500       6600
UZUN_KEMER          4000       6000
GUZELCE_KEMER       4500       5500
EGRI_KEMER          5000       5000
KOVUK_KEMER         5500       4500
SETTLING_BASIN      6000       4000
TAKSIM_MAIN         6500       3500
TAKSIM_BEYOGLU      6200       3200
TAKSIM_GALATA       6800       3200
TAKSIM_USKUDAR      7200       3500
SULEYMANIYE_FEED    6500       3000
SULEYMANIYE_CMPLX   6500       2800
SEBIL_SULTANAHMET   7000       2800
SEBIL_GRAND_BAZAAR  6800       2600
HAMMAM_CEMBERLITAS  6600       2700
HAMMAM_CAGALOGLU    6300       2900
TOPKAPI_PALACE      7500       3200
MOSQUE_FOUNTAIN_1   6500       2600
MOSQUE_FOUNTAIN_2   7100       2600
GOLDEN_HORN         7000       3500
BOSPHORUS           8000       3200
MARMARA_SEA         7000       2200

[REPORT]
SUBCATCHMENTS    ALL
NODES            ALL
LINKS            ALL`,

  'angkor-integrated': `[TITLE]
Angkor Integrated Hydraulic System - Khmer Empire (9th-13th c. CE)
Most sophisticated pre-modern urban water system on Earth
Barays, channels, moats, and rice paddies covering 1000+ sq km
Siem Reap, Cambodia - UNESCO World Heritage
Model by Robert Dickinson, PE

[OPTIONS]
FLOW_UNITS           CMS
FLOW_ROUTING         DYNWAVE
LINK_OFFSETS          DEPTH
START_DATE           01/01/2024
START_TIME           00:00:00
END_DATE             01/03/2024
END_TIME             00:00:00
REPORT_STEP          00:15:00
WET_STEP             00:05:00
DRY_STEP             01:00:00
ROUTING_STEP         0:00:30
INERTIAL_DAMPING     PARTIAL

[JUNCTIONS]
;;Name              Elev     MaxDepth  InitDepth  SurDepth  Aponded
KULEN_HILLS         80.0     4.0       0          0         0
SIEM_REAP_RIVER     70.0     4.0       0          0         0
PUOK_RIVER          72.0     3.0       0          0         0
ROLUOS_RIVER        68.0     3.0       0          0         0
INDRATATAKA         65.0     5.0       0          0         0
EAST_BARAY_IN       62.0     6.0       0          0         0
EAST_BARAY_CENTER   60.0     8.0       0          0         0
EAST_BARAY_OUT      58.0     6.0       0          0         0
WEST_BARAY_IN       55.0     8.0       0          0         0
WEST_BARAY_CENTER   52.0     10.0      0          0         0
WEST_BARAY_OUT      50.0     8.0       0          0         0
ANGKOR_WAT_MOAT     48.0     4.0       0          0         0
ANGKOR_THOM_MOAT    50.0     5.0       0          0         0
BAYON_CENTER        49.0     3.0       0          0         0
NEAK_POAN           51.0     3.0       0          0         0
PREAH_KHAN_BARAY    53.0     5.0       0          0         0
NORTH_CANAL         56.0     3.0       0          0         0
SOUTH_CANAL         46.0     3.0       0          0         0
RICE_PADDY_N        45.0     2.0       0          0         0
RICE_PADDY_S        42.0     2.0       0          0         0
RICE_PADDY_E        43.0     2.0       0          0         0
SPILLWAY_EAST       44.0     3.0       0          0         0
SPILLWAY_WEST       40.0     3.0       0          0         0
COLLECTION_SOUTH    38.0     3.0       0          0         0

[OUTFALLS]
;;Name              Elev     Type       Stage
TONLE_SAP_LAKE      35.0     FREE

[CONDUITS]
;;Name              From                To                  Length   Manning  InOff  OutOff  InitFlow  MaxFlow
KULEN_SIEM_REAP     KULEN_HILLS         SIEM_REAP_RIVER     15000    0.030    0      0       0         0
PUOK_FEED           PUOK_RIVER          WEST_BARAY_IN        8000     0.025    0      0       0         0
ROLUOS_FEED         ROLUOS_RIVER        INDRATATAKA          5000     0.025    0      0       0         0
INDRA_TO_EAST       INDRATATAKA         EAST_BARAY_IN        3000     0.020    0      0       0         0
EAST_BARAY_FLOW     EAST_BARAY_IN       EAST_BARAY_CENTER    3500     0.015    0      0       0         0
EAST_BARAY_EXIT     EAST_BARAY_CENTER   EAST_BARAY_OUT       3500     0.015    0      0       0         0
SIEM_REAP_WEST      SIEM_REAP_RIVER     WEST_BARAY_IN        10000    0.025    0      0       0         0
WEST_BARAY_FLOW     WEST_BARAY_IN       WEST_BARAY_CENTER    4000     0.012    0      0       0         0
WEST_BARAY_EXIT     WEST_BARAY_CENTER   WEST_BARAY_OUT       4000     0.012    0      0       0         0
WEST_TO_THOM        WEST_BARAY_OUT      ANGKOR_THOM_MOAT     5000     0.018    0      0       0         0
THOM_TO_BAYON       ANGKOR_THOM_MOAT    BAYON_CENTER         1500     0.015    0      0       0         0
EAST_TO_WAT         EAST_BARAY_OUT      ANGKOR_WAT_MOAT      6000     0.018    0      0       0         0
NORTH_CANAL_CH      WEST_BARAY_OUT      NORTH_CANAL          4000     0.020    0      0       0         0
NORTH_TO_PK         NORTH_CANAL         PREAH_KHAN_BARAY     3000     0.020    0      0       0         0
PK_TO_NEAK          PREAH_KHAN_BARAY    NEAK_POAN            1000     0.015    0      0       0         0
NEAK_TO_EAST        NEAK_POAN           EAST_BARAY_IN        2000     0.018    0      0       0         0
THOM_TO_SOUTH       ANGKOR_THOM_MOAT    SOUTH_CANAL          3000     0.020    0      0       0         0
WAT_TO_SOUTH        ANGKOR_WAT_MOAT     SOUTH_CANAL          2000     0.020    0      0       0         0
SOUTH_TO_RICE_N     SOUTH_CANAL         RICE_PADDY_N         4000     0.025    0      0       0         0
SOUTH_TO_RICE_S     SOUTH_CANAL         RICE_PADDY_S         5000     0.025    0      0       0         0
EAST_TO_RICE_E      EAST_BARAY_OUT      RICE_PADDY_E         6000     0.025    0      0       0         0
SPILL_EAST          EAST_BARAY_CENTER   SPILLWAY_EAST        2000     0.020    0      0       0         0
SPILL_WEST          WEST_BARAY_CENTER   SPILLWAY_WEST        3000     0.020    0      0       0         0
RICE_N_COLLECT      RICE_PADDY_N        COLLECTION_SOUTH     5000     0.030    0      0       0         0
RICE_S_COLLECT      RICE_PADDY_S        COLLECTION_SOUTH     3000     0.030    0      0       0         0
RICE_E_COLLECT      RICE_PADDY_E        COLLECTION_SOUTH     4000     0.030    0      0       0         0
SPILL_E_COLLECT     SPILLWAY_EAST       COLLECTION_SOUTH     5000     0.025    0      0       0         0
SPILL_W_COLLECT     SPILLWAY_WEST       COLLECTION_SOUTH     6000     0.025    0      0       0         0
FINAL_TO_LAKE       COLLECTION_SOUTH    TONLE_SAP_LAKE       10000    0.025    0      0       0         0

[XSECTIONS]
;;Link              Shape       Geom1  Geom2  Geom3  Geom4  Barrels
KULEN_SIEM_REAP     TRAPEZOIDAL 2.0    8.0    2.0    2.0    1
PUOK_FEED           TRAPEZOIDAL 1.5    6.0    2.0    2.0    1
ROLUOS_FEED         TRAPEZOIDAL 1.5    5.0    1.5    1.5    1
INDRA_TO_EAST       TRAPEZOIDAL 2.0    8.0    2.0    2.0    1
EAST_BARAY_FLOW     RECT_OPEN   3.0    100.0  0      0      1
EAST_BARAY_EXIT     RECT_OPEN   3.0    100.0  0      0      1
SIEM_REAP_WEST      TRAPEZOIDAL 2.0    8.0    2.0    2.0    1
WEST_BARAY_FLOW     RECT_OPEN   4.0    200.0  0      0      1
WEST_BARAY_EXIT     RECT_OPEN   4.0    200.0  0      0      1
WEST_TO_THOM        TRAPEZOIDAL 2.0    10.0   2.0    2.0    1
THOM_TO_BAYON       RECT_OPEN   3.0    100.0  0      0      1
EAST_TO_WAT         TRAPEZOIDAL 2.0    8.0    2.0    2.0    1
NORTH_CANAL_CH      TRAPEZOIDAL 1.5    6.0    1.5    1.5    1
NORTH_TO_PK         TRAPEZOIDAL 1.5    6.0    1.5    1.5    1
PK_TO_NEAK          RECT_OPEN   2.0    30.0   0      0      1
NEAK_TO_EAST        TRAPEZOIDAL 1.5    5.0    1.5    1.5    1
THOM_TO_SOUTH       TRAPEZOIDAL 1.5    6.0    1.5    1.5    1
WAT_TO_SOUTH        TRAPEZOIDAL 1.5    6.0    1.5    1.5    1
SOUTH_TO_RICE_N     TRAPEZOIDAL 1.0    4.0    1.0    1.0    1
SOUTH_TO_RICE_S     TRAPEZOIDAL 1.0    4.0    1.0    1.0    1
EAST_TO_RICE_E      TRAPEZOIDAL 1.0    4.0    1.0    1.0    1
SPILL_EAST          TRAPEZOIDAL 1.5    5.0    1.5    1.5    1
SPILL_WEST          TRAPEZOIDAL 1.5    5.0    1.5    1.5    1
RICE_N_COLLECT      TRAPEZOIDAL 0.6    3.0    1.0    1.0    1
RICE_S_COLLECT      TRAPEZOIDAL 0.6    3.0    1.0    1.0    1
RICE_E_COLLECT      TRAPEZOIDAL 0.6    3.0    1.0    1.0    1
SPILL_E_COLLECT     TRAPEZOIDAL 1.0    4.0    1.0    1.0    1
SPILL_W_COLLECT     TRAPEZOIDAL 1.0    4.0    1.0    1.0    1
FINAL_TO_LAKE       TRAPEZOIDAL 2.5    12.0   3.0    3.0    1

[INFLOWS]
;;Node              Constituent  TimeSeries  Type  Mfactor  Sfactor  Baseline  Pattern
KULEN_HILLS         FLOW         MONSOON_Q   FLOW  1.0      1.0      5.0
PUOK_RIVER          FLOW         MONSOON_Q   FLOW  1.0      1.0      3.0
ROLUOS_RIVER        FLOW         MONSOON_Q   FLOW  1.0      1.0      2.0

[TIMESERIES]
;;Name              Date       Time   Value
MONSOON_Q           01/01/2024 00:00  1.0
MONSOON_Q           01/01/2024 06:00  1.0
MONSOON_Q           01/01/2024 12:00  3.0
MONSOON_Q           01/01/2024 14:00  8.0
MONSOON_Q           01/01/2024 16:00  15.0
MONSOON_Q           01/01/2024 18:00  10.0
MONSOON_Q           01/01/2024 20:00  5.0
MONSOON_Q           01/02/2024 00:00  2.0
MONSOON_Q           01/02/2024 12:00  1.0
MONSOON_Q           01/03/2024 00:00  1.0

[COORDINATES]
;;Node              X-Coord    Y-Coord
KULEN_HILLS         8000       10000
SIEM_REAP_RIVER     6000       8000
PUOK_RIVER          3000       9000
ROLUOS_RIVER        9000       7000
INDRATATAKA         8500       6500
EAST_BARAY_IN       7500       6000
EAST_BARAY_CENTER   7000       5800
EAST_BARAY_OUT      6500       5600
WEST_BARAY_IN       3500       6500
WEST_BARAY_CENTER   3000       6000
WEST_BARAY_OUT      2500       5500
ANGKOR_WAT_MOAT     5500       4500
ANGKOR_THOM_MOAT    4500       5000
BAYON_CENTER        4500       4800
NEAK_POAN           5500       6000
PREAH_KHAN_BARAY    5000       6500
NORTH_CANAL         3500       7000
SOUTH_CANAL         5000       3500
RICE_PADDY_N        4000       3000
RICE_PADDY_S        5000       2500
RICE_PADDY_E        7000       3000
SPILLWAY_EAST       7500       4500
SPILLWAY_WEST       2000       4500
COLLECTION_SOUTH    5000       2000
TONLE_SAP_LAKE      5000       1000

[REPORT]
SUBCATCHMENTS    ALL
NODES            ALL
LINKS            ALL`,

  'bazalgette-sewers': `[TITLE]
Bazalgette London Sewer System - Victorian Engineering (1858-1875)
2100 km of sewers with 6 intercepting sewers serving 4 million
Built after the Great Stink - foundation of modern urban sanitation
London, England
Model by Robert Dickinson, PE

[OPTIONS]
FLOW_UNITS           CMS
FLOW_ROUTING         DYNWAVE
LINK_OFFSETS          DEPTH
START_DATE           01/01/2024
START_TIME           00:00:00
END_DATE             01/02/2024
END_TIME             00:00:00
REPORT_STEP          00:05:00
WET_STEP             00:01:00
DRY_STEP             01:00:00
ROUTING_STEP         0:00:30
INERTIAL_DAMPING     PARTIAL

[JUNCTIONS]
;;Name              Elev     MaxDepth  InitDepth  SurDepth  Aponded
HAMPSTEAD           60.0     4.0       0          0         0
HIGHGATE            55.0     4.0       0          0         0
ISLINGTON           40.0     5.0       0          0         0
CITY_OF_LONDON      25.0     6.0       0          0         0
WESTMINSTER         20.0     6.0       0          0         0
CHELSEA             18.0     5.0       0          0         0
BATTERSEA           16.0     5.0       0          0         0
LAMBETH             15.0     5.0       0          0         0
BERMONDSEY          12.0     5.0       0          0         0
DEPTFORD            10.0     5.0       0          0         0
N_HIGH_INTERCEPT    35.0     6.0       0          0         0
N_MID_INTERCEPT     25.0     6.0       0          0         0
N_LOW_INTERCEPT     15.0     7.0       0          0         0
S_HIGH_INTERCEPT    20.0     6.0       0          0         0
S_LOW_INTERCEPT     10.0     7.0       0          0         0
ABBEY_MILLS_PS      8.0      8.0       0          0         0
CROSSNESS_PS        5.0      8.0       0          0         0
N_OUTFALL_SEWER     3.0      8.0       0          0         0
S_OUTFALL_SEWER     3.0      8.0       0          0         0
VICTORIA_EMBANK     18.0     6.0       0          0         0
ALBERT_EMBANK       16.0     5.0       0          0         0
CHELSEA_EMBANK      17.0     5.0       0          0         0

[OUTFALLS]
;;Name              Elev     Type       Stage
BECKTON_OUT         0.0      FREE
CROSSNESS_OUT       0.0      FREE

[CONDUITS]
;;Name              From                To                  Length  Manning  InOff  OutOff  InitFlow  MaxFlow
HAMP_LOCAL          HAMPSTEAD           N_HIGH_INTERCEPT    3000     0.013    0      0       0         0
HIGH_LOCAL          HIGHGATE            N_HIGH_INTERCEPT    2500     0.013    0      0       0         0
ISL_LOCAL           ISLINGTON           N_MID_INTERCEPT     2000     0.013    0      0       0         0
CITY_LOCAL          CITY_OF_LONDON      N_LOW_INTERCEPT     1500     0.013    0      0       0         0
WEST_LOCAL          WESTMINSTER         VICTORIA_EMBANK     1000     0.013    0      0       0         0
CHEL_LOCAL          CHELSEA             CHELSEA_EMBANK      1500     0.013    0      0       0         0
BATT_LOCAL          BATTERSEA           S_HIGH_INTERCEPT    2000     0.013    0      0       0         0
LAMB_LOCAL          LAMBETH             S_LOW_INTERCEPT     2500     0.013    0      0       0         0
BERM_LOCAL          BERMONDSEY          S_LOW_INTERCEPT     2000     0.013    0      0       0         0
DEPT_LOCAL          DEPTFORD            S_LOW_INTERCEPT     3000     0.013    0      0       0         0
N_HIGH_INT          N_HIGH_INTERCEPT    N_MID_INTERCEPT     5000     0.012    0      0       0         0
N_MID_INT           N_MID_INTERCEPT     N_LOW_INTERCEPT     4000     0.012    0      0       0         0
VICTORIA_INT        VICTORIA_EMBANK     N_LOW_INTERCEPT     3000     0.012    0      0       0         0
CHELSEA_INT         CHELSEA_EMBANK      ALBERT_EMBANK       3000     0.012    0      0       0         0
ALBERT_INT          ALBERT_EMBANK       S_HIGH_INTERCEPT    2000     0.012    0      0       0         0
N_LOW_TO_ABBEY      N_LOW_INTERCEPT     ABBEY_MILLS_PS      8000     0.012    0      0       0         0
ABBEY_TO_OUTFALL    ABBEY_MILLS_PS      N_OUTFALL_SEWER     5000     0.012    0      0       0         0
N_OUTFALL           N_OUTFALL_SEWER     BECKTON_OUT         8000     0.012    0      0       0         0
S_HIGH_INT          S_HIGH_INTERCEPT    S_LOW_INTERCEPT     4000     0.012    0      0       0         0
S_LOW_TO_CROSS      S_LOW_INTERCEPT     CROSSNESS_PS        8000     0.012    0      0       0         0
CROSS_TO_OUTFALL    CROSSNESS_PS        S_OUTFALL_SEWER     3000     0.012    0      0       0         0
S_OUTFALL           S_OUTFALL_SEWER     CROSSNESS_OUT       5000     0.012    0      0       0         0

[XSECTIONS]
;;Link              Shape       Geom1  Geom2  Geom3  Geom4  Barrels
HAMP_LOCAL          CIRCULAR    1.2    0      0      0      1
HIGH_LOCAL          CIRCULAR    1.0    0      0      0      1
ISL_LOCAL           CIRCULAR    1.5    0      0      0      1
CITY_LOCAL          CIRCULAR    1.8    0      0      0      1
WEST_LOCAL          CIRCULAR    1.5    0      0      0      1
CHEL_LOCAL          CIRCULAR    1.2    0      0      0      1
BATT_LOCAL          CIRCULAR    1.0    0      0      0      1
LAMB_LOCAL          CIRCULAR    1.5    0      0      0      1
BERM_LOCAL          CIRCULAR    1.2    0      0      0      1
DEPT_LOCAL          CIRCULAR    1.0    0      0      0      1
N_HIGH_INT          EGG         2.5    0      0      0      1
N_MID_INT           EGG         3.0    0      0      0      1
VICTORIA_INT        RECT_OPEN   2.0    3.5    0      0      1
CHELSEA_INT         EGG         2.0    0      0      0      1
ALBERT_INT          EGG         2.5    0      0      0      1
N_LOW_TO_ABBEY      EGG         3.5    0      0      0      1
ABBEY_TO_OUTFALL    CIRCULAR    2.7    0      0      0      2
N_OUTFALL           CIRCULAR    2.7    0      0      0      2
S_HIGH_INT          EGG         2.5    0      0      0      1
S_LOW_TO_CROSS      EGG         3.5    0      0      0      1
CROSS_TO_OUTFALL    CIRCULAR    2.5    0      0      0      2
S_OUTFALL           CIRCULAR    2.5    0      0      0      2

[INFLOWS]
;;Node              Constituent  TimeSeries  Type  Mfactor  Sfactor  Baseline  Pattern
HAMPSTEAD           FLOW         DWF_RAIN    FLOW  1.0      1.0      0.5
HIGHGATE            FLOW         DWF_RAIN    FLOW  1.0      1.0      0.4
ISLINGTON           FLOW         DWF_RAIN    FLOW  1.0      1.0      0.8
CITY_OF_LONDON      FLOW         DWF_RAIN    FLOW  1.0      1.0      1.0
WESTMINSTER         FLOW         DWF_RAIN    FLOW  1.0      1.0      0.7
CHELSEA             FLOW         DWF_RAIN    FLOW  1.0      1.0      0.5
BATTERSEA           FLOW         DWF_RAIN    FLOW  1.0      1.0      0.4
LAMBETH             FLOW         DWF_RAIN    FLOW  1.0      1.0      0.6
BERMONDSEY          FLOW         DWF_RAIN    FLOW  1.0      1.0      0.5
DEPTFORD            FLOW         DWF_RAIN    FLOW  1.0      1.0      0.3

[TIMESERIES]
;;Name              Date       Time   Value
DWF_RAIN            01/01/2024 00:00  1.0
DWF_RAIN            01/01/2024 06:00  1.5
DWF_RAIN            01/01/2024 08:00  2.0
DWF_RAIN            01/01/2024 10:00  1.8
DWF_RAIN            01/01/2024 12:00  2.5
DWF_RAIN            01/01/2024 14:00  3.5
DWF_RAIN            01/01/2024 15:00  5.0
DWF_RAIN            01/01/2024 16:00  3.0
DWF_RAIN            01/01/2024 18:00  2.0
DWF_RAIN            01/01/2024 20:00  1.5
DWF_RAIN            01/02/2024 00:00  1.0

[COORDINATES]
;;Node              X-Coord    Y-Coord
HAMPSTEAD           3000       8000
HIGHGATE            4000       8500
ISLINGTON           4500       7000
CITY_OF_LONDON      5000       5500
WESTMINSTER         4000       5000
CHELSEA             3000       4500
BATTERSEA           3500       4000
LAMBETH             4500       4500
BERMONDSEY          5500       4500
DEPTFORD            6500       4000
N_HIGH_INTERCEPT    3500       7000
N_MID_INTERCEPT     4500       6000
N_LOW_INTERCEPT     5000       5000
S_HIGH_INTERCEPT    4000       4000
S_LOW_INTERCEPT     5500       3500
ABBEY_MILLS_PS      7000       5000
CROSSNESS_PS        8000       3000
N_OUTFALL_SEWER     8000       5500
S_OUTFALL_SEWER     8500       2500
VICTORIA_EMBANK     4500       5000
ALBERT_EMBANK       4000       4200
CHELSEA_EMBANK      3200       4300
BECKTON_OUT         9000       5500
CROSSNESS_OUT       9000       2500

[REPORT]
SUBCATCHMENTS    ALL
NODES            ALL
LINKS            ALL`,

  'forbidden-city-drainage': `[TITLE]
Forbidden City Drainage System - Ming Dynasty (1420 CE)
Most sophisticated palace drainage in the world
72 drainage outlets, Golden Water River, monsoon-proof design
Beijing, China - UNESCO World Heritage
Model by Robert Dickinson, PE

[OPTIONS]
FLOW_UNITS           CMS
FLOW_ROUTING         DYNWAVE
LINK_OFFSETS          DEPTH
START_DATE           01/01/2024
START_TIME           00:00:00
END_DATE             01/02/2024
END_TIME             00:00:00
REPORT_STEP          00:05:00
WET_STEP             00:01:00
DRY_STEP             01:00:00
ROUTING_STEP         0:00:15
INERTIAL_DAMPING     PARTIAL

[JUNCTIONS]
;;Name              Elev     MaxDepth  InitDepth  SurDepth  Aponded
JINSHUI_RIVER_IN    48.0     2.0       0          0         0
MERIDIAN_GATE       47.5     2.0       0          0         0
GOLDEN_WATER_BR     47.0     2.0       0          0         0
OUTER_COURT         46.5     2.5       0          0         0
HALL_SUPREME_HARM   46.0     2.0       0          0         0
HALL_CENTRAL_HARM   45.5     2.0       0          0         0
HALL_PRESERV_HARM   45.0     2.0       0          0         0
INNER_COURT         44.5     2.0       0          0         0
PALACE_HEAVENLY     44.0     2.0       0          0         0
PALACE_EARTHLY      43.5     2.0       0          0         0
PALACE_UNION        43.5     2.0       0          0         0
IMPERIAL_GARDEN     43.0     2.5       0          0         0
EAST_GALLERY        45.0     2.0       0          0         0
WEST_GALLERY        45.0     2.0       0          0         0
DRAIN_EAST_1        44.0     2.0       0          0         0
DRAIN_EAST_2        43.0     2.0       0          0         0
DRAIN_WEST_1        44.0     2.0       0          0         0
DRAIN_WEST_2        43.0     2.0       0          0         0
COLLECT_EAST        42.0     3.0       0          0         0
COLLECT_WEST        42.0     3.0       0          0         0
DIVINE_MIGHT_GATE   42.5     2.0       0          0         0

[OUTFALLS]
;;Name              Elev     Type       Stage
MOAT_EAST           40.0     FREE
MOAT_WEST           40.0     FREE
TONGZI_RIVER        40.0     FREE

[CONDUITS]
;;Name              From                To                  Length  Manning  InOff  OutOff  InitFlow  MaxFlow
JINSHUI_ENTRY       JINSHUI_RIVER_IN    MERIDIAN_GATE       200     0.013    0      0       0         0
GOLDEN_WATER        MERIDIAN_GATE       GOLDEN_WATER_BR     150     0.013    0      0       0         0
GW_TO_OUTER         GOLDEN_WATER_BR     OUTER_COURT         100     0.015    0      0       0         0
OUTER_TO_SUPREME    OUTER_COURT         HALL_SUPREME_HARM   200     0.015    0      0       0         0
SUPREME_TO_CENTRAL  HALL_SUPREME_HARM   HALL_CENTRAL_HARM   100     0.015    0      0       0         0
CENTRAL_TO_PRESERV  HALL_CENTRAL_HARM   HALL_PRESERV_HARM   100     0.015    0      0       0         0
PRESERV_TO_INNER    HALL_PRESERV_HARM   INNER_COURT         150     0.015    0      0       0         0
INNER_TO_HEAVENLY   INNER_COURT         PALACE_HEAVENLY     100     0.015    0      0       0         0
HEAVENLY_TO_UNION   PALACE_HEAVENLY     PALACE_UNION        80      0.015    0      0       0         0
HEAVENLY_TO_EARTH   PALACE_HEAVENLY     PALACE_EARTHLY      80      0.015    0      0       0         0
UNION_TO_GARDEN     PALACE_UNION        IMPERIAL_GARDEN     100     0.015    0      0       0         0
EARTH_TO_GARDEN     PALACE_EARTHLY      IMPERIAL_GARDEN     100     0.015    0      0       0         0
EAST_GAL_1          OUTER_COURT         EAST_GALLERY        300     0.015    0      0       0         0
WEST_GAL_1          OUTER_COURT         WEST_GALLERY        300     0.015    0      0       0         0
EAST_GAL_DRAIN_1    EAST_GALLERY        DRAIN_EAST_1        200     0.015    0      0       0         0
EAST_GAL_DRAIN_2    DRAIN_EAST_1        DRAIN_EAST_2        200     0.015    0      0       0         0
WEST_GAL_DRAIN_1    WEST_GALLERY        DRAIN_WEST_1        200     0.015    0      0       0         0
WEST_GAL_DRAIN_2    DRAIN_WEST_1        DRAIN_WEST_2        200     0.015    0      0       0         0
EAST_COLLECT        DRAIN_EAST_2        COLLECT_EAST        200     0.015    0      0       0         0
WEST_COLLECT        DRAIN_WEST_2        COLLECT_WEST        200     0.015    0      0       0         0
GARDEN_TO_DIVINE    IMPERIAL_GARDEN     DIVINE_MIGHT_GATE   200     0.015    0      0       0         0
DIVINE_TO_TONGZI    DIVINE_MIGHT_GATE   TONGZI_RIVER        300     0.015    0      0       0         0
EAST_TO_MOAT        COLLECT_EAST        MOAT_EAST           400     0.015    0      0       0         0
WEST_TO_MOAT        COLLECT_WEST        MOAT_WEST           400     0.015    0      0       0         0

[XSECTIONS]
;;Link              Shape       Geom1  Geom2  Geom3  Geom4  Barrels
JINSHUI_ENTRY       RECT_OPEN   1.0    3.0    0      0      1
GOLDEN_WATER        RECT_OPEN   0.8    4.0    0      0      1
GW_TO_OUTER         RECT_OPEN   0.6    2.0    0      0      1
OUTER_TO_SUPREME    RECT_OPEN   0.4    1.5    0      0      1
SUPREME_TO_CENTRAL  RECT_OPEN   0.4    1.5    0      0      1
CENTRAL_TO_PRESERV  RECT_OPEN   0.4    1.5    0      0      1
PRESERV_TO_INNER    RECT_OPEN   0.4    1.5    0      0      1
INNER_TO_HEAVENLY   RECT_OPEN   0.3    1.0    0      0      1
HEAVENLY_TO_UNION   RECT_OPEN   0.3    0.8    0      0      1
HEAVENLY_TO_EARTH   RECT_OPEN   0.3    0.8    0      0      1
UNION_TO_GARDEN     RECT_OPEN   0.3    0.8    0      0      1
EARTH_TO_GARDEN     RECT_OPEN   0.3    0.8    0      0      1
EAST_GAL_1          RECT_OPEN   0.4    1.0    0      0      1
WEST_GAL_1          RECT_OPEN   0.4    1.0    0      0      1
EAST_GAL_DRAIN_1    RECT_OPEN   0.3    0.8    0      0      1
EAST_GAL_DRAIN_2    RECT_OPEN   0.3    0.8    0      0      1
WEST_GAL_DRAIN_1    RECT_OPEN   0.3    0.8    0      0      1
WEST_GAL_DRAIN_2    RECT_OPEN   0.3    0.8    0      0      1
EAST_COLLECT        RECT_OPEN   0.5    1.5    0      0      1
WEST_COLLECT        RECT_OPEN   0.5    1.5    0      0      1
GARDEN_TO_DIVINE    RECT_OPEN   0.4    1.2    0      0      1
DIVINE_TO_TONGZI    RECT_OPEN   0.6    2.0    0      0      1
EAST_TO_MOAT        RECT_OPEN   0.5    1.5    0      0      1
WEST_TO_MOAT        RECT_OPEN   0.5    1.5    0      0      1

[INFLOWS]
;;Node              Constituent  TimeSeries  Type  Mfactor  Sfactor  Baseline  Pattern
JINSHUI_RIVER_IN    FLOW         JINSHUI     FLOW  1.0      1.0      0.10
OUTER_COURT         FLOW         MONSOON_R   FLOW  1.0      1.0      0.0
INNER_COURT         FLOW         MONSOON_R   FLOW  1.0      1.0      0.0
EAST_GALLERY        FLOW         MONSOON_R   FLOW  1.0      1.0      0.0
WEST_GALLERY        FLOW         MONSOON_R   FLOW  1.0      1.0      0.0

[TIMESERIES]
;;Name              Date       Time   Value
JINSHUI             01/01/2024 00:00  0.10
JINSHUI             01/01/2024 12:00  0.10
JINSHUI             01/02/2024 00:00  0.10
MONSOON_R           01/01/2024 00:00  0.000
MONSOON_R           01/01/2024 13:00  0.005
MONSOON_R           01/01/2024 14:00  0.030
MONSOON_R           01/01/2024 14:30  0.080
MONSOON_R           01/01/2024 15:00  0.120
MONSOON_R           01/01/2024 15:30  0.080
MONSOON_R           01/01/2024 16:00  0.040
MONSOON_R           01/01/2024 17:00  0.010
MONSOON_R           01/01/2024 18:00  0.000
MONSOON_R           01/02/2024 00:00  0.000

[COORDINATES]
;;Node              X-Coord    Y-Coord
JINSHUI_RIVER_IN    2500       8000
MERIDIAN_GATE       2500       7500
GOLDEN_WATER_BR     2500       7200
OUTER_COURT         2500       6800
HALL_SUPREME_HARM   2500       6400
HALL_CENTRAL_HARM   2500       6200
HALL_PRESERV_HARM   2500       6000
INNER_COURT         2500       5600
PALACE_HEAVENLY     2500       5200
PALACE_EARTHLY      2800       5000
PALACE_UNION        2200       5000
IMPERIAL_GARDEN     2500       4600
EAST_GALLERY        3200       6500
WEST_GALLERY        1800       6500
DRAIN_EAST_1        3400       6000
DRAIN_EAST_2        3500       5500
DRAIN_WEST_1        1600       6000
DRAIN_WEST_2        1500       5500
COLLECT_EAST        3600       5000
COLLECT_WEST        1400       5000
DIVINE_MIGHT_GATE   2500       4200
MOAT_EAST           3800       5000
MOAT_WEST           1200       5000
TONGZI_RIVER        2500       3800

[REPORT]
SUBCATCHMENTS    ALL
NODES            ALL
LINKS            ALL`,

  'augsburg-three-level': `[TITLE]
Augsburg Three-Level Water Management System - Germany (1412-Present)
UNESCO World Heritage (2019) - Separated drinking, craft, and power water
Three canals at different elevations serving different purposes
Augsburg, Bavaria, Germany
Model by Robert Dickinson, PE

[OPTIONS]
FLOW_UNITS           CMS
FLOW_ROUTING         DYNWAVE
LINK_OFFSETS          DEPTH
START_DATE           01/01/2024
START_TIME           00:00:00
END_DATE             01/02/2024
END_TIME             00:00:00
REPORT_STEP          00:05:00
WET_STEP             00:01:00
DRY_STEP             01:00:00
ROUTING_STEP         0:00:30
INERTIAL_DAMPING     PARTIAL

[JUNCTIONS]
;;Name              Elev     MaxDepth  InitDepth  SurDepth  Aponded
LECH_RIVER          490.0    4.0       0          0         0
UPPER_DIVERSION     488.0    3.0       0          0         0
DRINKING_CANAL      486.0    2.0       0          0         0
CRAFT_CANAL         484.0    2.5       0          0         0
POWER_CANAL         482.0    3.0       0          0         0
WATER_TOWER_1       487.0    3.0       0          0         0
WATER_TOWER_2       486.0    3.0       0          0         0
WATER_TOWER_3       485.0    3.0       0          0         0
DRINK_DIST_N        485.0    2.0       0          0         0
DRINK_DIST_S        484.0    2.0       0          0         0
CRAFT_TANNER        483.0    2.0       0          0         0
CRAFT_DYER          482.5    2.0       0          0         0
CRAFT_BLEACHER      482.0    2.0       0          0         0
MILL_1              481.0    3.0       0          0         0
MILL_2              480.0    3.0       0          0         0
FOUNTAIN_AUGUSTUS    485.0    1.5       0          0         0
FOUNTAIN_MERCURY    484.5    1.5       0          0         0
FOUNTAIN_HERCULES   484.0    1.5       0          0         0
REUNION             478.0    3.0       0          0         0

[OUTFALLS]
;;Name              Elev     Type       Stage
WERTACH_RIVER       476.0    FREE

[CONDUITS]
;;Name              From                To                  Length  Manning  InOff  OutOff  InitFlow  MaxFlow
LECH_DIVERT         LECH_RIVER          UPPER_DIVERSION     500     0.020    0      0       0         0
DRINK_HEAD          UPPER_DIVERSION     DRINKING_CANAL      300     0.015    0      0       0         0
CRAFT_HEAD          UPPER_DIVERSION     CRAFT_CANAL         400     0.018    0      0       0         0
POWER_HEAD          UPPER_DIVERSION     POWER_CANAL         500     0.018    0      0       0         0
TOWER_1_FEED        DRINKING_CANAL      WATER_TOWER_1       200     0.012    0      0       0         0
TOWER_2_FEED        DRINKING_CANAL      WATER_TOWER_2       250     0.012    0      0       0         0
TOWER_3_FEED        DRINKING_CANAL      WATER_TOWER_3       300     0.012    0      0       0         0
DRINK_N             WATER_TOWER_1       DRINK_DIST_N        500     0.012    0      0       0         0
DRINK_S             WATER_TOWER_2       DRINK_DIST_S        600     0.012    0      0       0         0
AUGUSTUS_FEED        WATER_TOWER_3       FOUNTAIN_AUGUSTUS    200     0.012    0      0       0         0
MERCURY_FEED        DRINK_DIST_N        FOUNTAIN_MERCURY    300     0.012    0      0       0         0
HERCULES_FEED       DRINK_DIST_S        FOUNTAIN_HERCULES   300     0.012    0      0       0         0
TANNER_FEED         CRAFT_CANAL         CRAFT_TANNER        400     0.018    0      0       0         0
DYER_FEED           CRAFT_TANNER        CRAFT_DYER          300     0.018    0      0       0         0
BLEACHER_FEED       CRAFT_DYER          CRAFT_BLEACHER      300     0.018    0      0       0         0
MILL_1_FEED         POWER_CANAL         MILL_1              500     0.018    0      0       0         0
MILL_2_FEED         MILL_1              MILL_2              400     0.018    0      0       0         0
DRINK_REUNION       FOUNTAIN_HERCULES   REUNION             500     0.015    0      0       0         0
CRAFT_REUNION       CRAFT_BLEACHER      REUNION             400     0.018    0      0       0         0
POWER_REUNION       MILL_2              REUNION             300     0.018    0      0       0         0
FOUNT_AUG_DRAIN     FOUNTAIN_AUGUSTUS    REUNION             600     0.015    0      0       0         0
FOUNT_MER_DRAIN     FOUNTAIN_MERCURY    REUNION             500     0.015    0      0       0         0
FINAL_DRAIN         REUNION             WERTACH_RIVER       800     0.020    0      0       0         0

[XSECTIONS]
;;Link              Shape       Geom1  Geom2  Geom3  Geom4  Barrels
LECH_DIVERT         TRAPEZOIDAL 2.0    8.0    2.0    2.0    1
DRINK_HEAD          RECT_OPEN   0.8    2.0    0      0      1
CRAFT_HEAD          RECT_OPEN   1.0    3.0    0      0      1
POWER_HEAD          RECT_OPEN   1.5    4.0    0      0      1
TOWER_1_FEED        CIRCULAR    0.30   0      0      0      1
TOWER_2_FEED        CIRCULAR    0.30   0      0      0      1
TOWER_3_FEED        CIRCULAR    0.30   0      0      0      1
DRINK_N             CIRCULAR    0.20   0      0      0      2
DRINK_S             CIRCULAR    0.20   0      0      0      2
AUGUSTUS_FEED        CIRCULAR    0.15   0      0      0      1
MERCURY_FEED        CIRCULAR    0.12   0      0      0      1
HERCULES_FEED       CIRCULAR    0.12   0      0      0      1
TANNER_FEED         RECT_OPEN   0.8    2.5    0      0      1
DYER_FEED           RECT_OPEN   0.8    2.0    0      0      1
BLEACHER_FEED       RECT_OPEN   0.6    2.0    0      0      1
MILL_1_FEED         RECT_OPEN   1.2    3.0    0      0      1
MILL_2_FEED         RECT_OPEN   1.0    3.0    0      0      1
DRINK_REUNION       CIRCULAR    0.20   0      0      0      1
CRAFT_REUNION       RECT_OPEN   0.8    2.0    0      0      1
POWER_REUNION       RECT_OPEN   1.0    3.0    0      0      1
FOUNT_AUG_DRAIN     CIRCULAR    0.15   0      0      0      1
FOUNT_MER_DRAIN     CIRCULAR    0.12   0      0      0      1
FINAL_DRAIN         TRAPEZOIDAL 1.5    6.0    1.5    1.5    1

[INFLOWS]
;;Node              Constituent  TimeSeries  Type  Mfactor  Sfactor  Baseline  Pattern
LECH_RIVER          FLOW         LECH_Q      FLOW  1.0      1.0      5.0

[TIMESERIES]
;;Name              Date       Time   Value
LECH_Q              01/01/2024 00:00  5.0
LECH_Q              01/01/2024 06:00  5.5
LECH_Q              01/01/2024 12:00  6.0
LECH_Q              01/01/2024 18:00  5.5
LECH_Q              01/02/2024 00:00  5.0

[COORDINATES]
;;Node              X-Coord    Y-Coord
LECH_RIVER          1000       7000
UPPER_DIVERSION     1200       6800
DRINKING_CANAL      1000       6500
CRAFT_CANAL         1400       6400
POWER_CANAL         1700       6300
WATER_TOWER_1       1000       6000
WATER_TOWER_2       1100       5800
WATER_TOWER_3       1200       5600
DRINK_DIST_N        800        5500
DRINK_DIST_S        900        5200
CRAFT_TANNER        1500       5800
CRAFT_DYER          1600       5500
CRAFT_BLEACHER      1700       5200
MILL_1              1900       5600
MILL_2              2000       5300
FOUNTAIN_AUGUSTUS    1300       5400
FOUNTAIN_MERCURY    900        5000
FOUNTAIN_HERCULES   1000       4800
REUNION             1500       4500
WERTACH_RIVER       1500       4000

[REPORT]
SUBCATCHMENTS    ALL
NODES            ALL
LINKS            ALL`,

  'aswan-high-dam': `[TITLE]
Aswan High Dam and Lake Nasser - Egypt (1960-1970)
Most consequential dam in African history
Ended 5000 years of Nile flooding - 111 m tall
Created Lake Nasser (550 km long)
Model by Robert Dickinson, PE

[OPTIONS]
FLOW_UNITS           CMS
FLOW_ROUTING         DYNWAVE
LINK_OFFSETS          DEPTH
START_DATE           01/01/2024
START_TIME           00:00:00
END_DATE             01/03/2024
END_TIME             00:00:00
REPORT_STEP          00:15:00
WET_STEP             00:05:00
DRY_STEP             01:00:00
ROUTING_STEP         0:00:30
INERTIAL_DAMPING     PARTIAL

[JUNCTIONS]
;;Name              Elev     MaxDepth  InitDepth  SurDepth  Aponded
NILE_UPSTREAM       185.0    6.0       0          0         0
LAKE_NASSER_HEAD    183.0    60.0      0          0         0
LAKE_NASSER_MID     180.0    70.0      0          0         0
LAKE_NASSER_DAM     178.0    80.0      0          0         0
HIGH_DAM_CREST      175.0    5.0       0          0         0
TURBINE_INTAKE      140.0    8.0       0          0         0
POWERHOUSE          100.0    10.0      0          0         0
OLD_ASWAN_DAM       98.0     5.0       0          0         0
NILE_BELOW_DAM      95.0     5.0       0          0         0
ESNA_BARRAGE        90.0     4.0       0          0         0
NAG_HAMMADI_BAR     85.0     4.0       0          0         0
ASYUT_BARRAGE       80.0     4.0       0          0         0
IBRAHIMIYA_CANAL    82.0     3.0       0          0         0
DELTA_BARRAGE       20.0     5.0       0          0         0
ROSETTA_BRANCH      18.0     4.0       0          0         0
DAMIETTA_BRANCH     18.0     4.0       0          0         0
TOSHKA_SPILLWAY     178.0    5.0       0          0         0

[OUTFALLS]
;;Name              Elev     Type       Stage
MEDITERRANEAN       0.0      FREE
TOSHKA_LAKES        170.0    FREE

[CONDUITS]
;;Name              From                To                  Length   Manning  InOff  OutOff  InitFlow  MaxFlow
NILE_TO_LAKE        NILE_UPSTREAM       LAKE_NASSER_HEAD    50000    0.025    0      0       0         0
LAKE_HEAD_MID       LAKE_NASSER_HEAD    LAKE_NASSER_MID     200000   0.015    0      0       0         0
LAKE_MID_DAM        LAKE_NASSER_MID     LAKE_NASSER_DAM     200000   0.015    0      0       0         0
DAM_TO_INTAKE       LAKE_NASSER_DAM     TURBINE_INTAKE      500      0.013    0      0       0         0
TURBINE_DROP        TURBINE_INTAKE      POWERHOUSE          200      0.012    0      0       0         0
POWER_TO_OLD        POWERHOUSE          OLD_ASWAN_DAM       5000     0.018    0      0       0         0
OLD_DAM_RELEASE     OLD_ASWAN_DAM       NILE_BELOW_DAM      1000     0.018    0      0       0         0
NILE_TO_ESNA        NILE_BELOW_DAM      ESNA_BARRAGE        150000   0.020    0      0       0         0
ESNA_TO_NAG         ESNA_BARRAGE        NAG_HAMMADI_BAR     100000   0.020    0      0       0         0
NAG_TO_ASYUT        NAG_HAMMADI_BAR     ASYUT_BARRAGE       200000   0.020    0      0       0         0
IBRAHIMIYA_FEED     ASYUT_BARRAGE       IBRAHIMIYA_CANAL    1000     0.018    0      0       0         0
ASYUT_TO_DELTA      ASYUT_BARRAGE       DELTA_BARRAGE       350000   0.020    0      0       0         0
ROSETTA_FEED        DELTA_BARRAGE       ROSETTA_BRANCH      200000   0.020    0      0       0         0
DAMIETTA_FEED       DELTA_BARRAGE       DAMIETTA_BRANCH     200000   0.020    0      0       0         0
ROSETTA_OUT         ROSETTA_BRANCH      MEDITERRANEAN       50000    0.025    0      0       0         0
DAMIETTA_OUT        DAMIETTA_BRANCH     MEDITERRANEAN       50000    0.025    0      0       0         0
TOSHKA_SPILL        LAKE_NASSER_DAM     TOSHKA_SPILLWAY     5000     0.020    0      0       0         0
TOSHKA_OUT          TOSHKA_SPILLWAY     TOSHKA_LAKES        30000    0.025    0      0       0         0

[XSECTIONS]
;;Link              Shape       Geom1  Geom2  Geom3  Geom4  Barrels
NILE_TO_LAKE        TRAPEZOIDAL 5.0    300.0  3.0    3.0    1
LAKE_HEAD_MID       TRAPEZOIDAL 10.0   2000.0 5.0    5.0    1
LAKE_MID_DAM        TRAPEZOIDAL 15.0   3000.0 5.0    5.0    1
DAM_TO_INTAKE       CIRCULAR    8.0    0      0      0      6
TURBINE_DROP        CIRCULAR    5.0    0      0      0      12
POWER_TO_OLD        TRAPEZOIDAL 5.0    200.0  3.0    3.0    1
OLD_DAM_RELEASE     TRAPEZOIDAL 4.0    150.0  3.0    3.0    1
NILE_TO_ESNA        TRAPEZOIDAL 4.0    400.0  3.0    3.0    1
ESNA_TO_NAG         TRAPEZOIDAL 4.0    350.0  3.0    3.0    1
NAG_TO_ASYUT        TRAPEZOIDAL 3.5    300.0  3.0    3.0    1
IBRAHIMIYA_FEED     TRAPEZOIDAL 2.0    30.0   2.0    2.0    1
ASYUT_TO_DELTA      TRAPEZOIDAL 3.0    250.0  3.0    3.0    1
ROSETTA_FEED        TRAPEZOIDAL 3.0    200.0  3.0    3.0    1
DAMIETTA_FEED       TRAPEZOIDAL 3.0    200.0  3.0    3.0    1
ROSETTA_OUT         TRAPEZOIDAL 2.5    150.0  3.0    3.0    1
DAMIETTA_OUT        TRAPEZOIDAL 2.5    150.0  3.0    3.0    1
TOSHKA_SPILL        RECT_OPEN   5.0    50.0   0      0      1
TOSHKA_OUT          TRAPEZOIDAL 3.0    100.0  3.0    3.0    1

[INFLOWS]
;;Node              Constituent  TimeSeries  Type  Mfactor  Sfactor  Baseline  Pattern
NILE_UPSTREAM       FLOW         NILE_FLOOD  FLOW  1.0      1.0      2500.0

[TIMESERIES]
;;Name              Date       Time   Value
NILE_FLOOD          01/01/2024 00:00  2500
NILE_FLOOD          01/01/2024 06:00  3000
NILE_FLOOD          01/01/2024 12:00  4000
NILE_FLOOD          01/01/2024 18:00  5000
NILE_FLOOD          01/02/2024 00:00  4500
NILE_FLOOD          01/02/2024 12:00  3500
NILE_FLOOD          01/03/2024 00:00  2500

[COORDINATES]
;;Node              X-Coord    Y-Coord
NILE_UPSTREAM       5000       10000
LAKE_NASSER_HEAD    4800       9000
LAKE_NASSER_MID     4600       7500
LAKE_NASSER_DAM     4500       6000
HIGH_DAM_CREST      4500       5900
TURBINE_INTAKE      4500       5800
POWERHOUSE          4500       5600
OLD_ASWAN_DAM       4500       5400
NILE_BELOW_DAM      4500       5200
ESNA_BARRAGE        4300       4000
NAG_HAMMADI_BAR     4100       3000
ASYUT_BARRAGE       3800       2000
IBRAHIMIYA_CANAL    4200       1800
DELTA_BARRAGE       3000       800
ROSETTA_BRANCH      2500       500
DAMIETTA_BRANCH     3500       500
TOSHKA_SPILLWAY     3500       6000
MEDITERRANEAN       3000       200
TOSHKA_LAKES        2500       5500

[REPORT]
SUBCATCHMENTS    ALL
NODES            ALL
LINKS            ALL`,

  'baghdad-round-city': `[TITLE]
Baghdad Round City Water System - Abbasid Caliphate (762 CE)
Water supply for the largest city in the medieval world
Caliph al-Mansur's circular capital between Tigris and Euphrates
Population 1 million+ at peak
Model by Robert Dickinson, PE

[OPTIONS]
FLOW_UNITS           CMS
FLOW_ROUTING         DYNWAVE
LINK_OFFSETS          DEPTH
START_DATE           01/01/2024
START_TIME           00:00:00
END_DATE             01/02/2024
END_TIME             00:00:00
REPORT_STEP          00:05:00
ROUTING_STEP         0:00:30
INERTIAL_DAMPING     PARTIAL

[JUNCTIONS]
;;Name              Elev     MaxDepth  InitDepth  SurDepth  Aponded
TIGRIS_INTAKE_N     35.0     4.0       0          0         0
TIGRIS_INTAKE_S     34.0     4.0       0          0         0
NAHR_ISA_CANAL      33.0     3.0       0          0         0
ROUND_CITY_MOAT     32.0     3.0       0          0         0
GATE_KUFA           31.5     2.0       0          0         0
GATE_BASRA          31.5     2.0       0          0         0
GATE_KHORASAN       31.5     2.0       0          0         0
GATE_SYRIA          31.5     2.0       0          0         0
PALACE_GREEN_DOME   31.0     3.0       0          0         0
GREAT_MOSQUE        30.5     2.0       0          0         0
KARKH_MARKET        30.0     2.5       0          0         0
RUSAFA_QUARTER      30.0     2.5       0          0         0
HAMMAM_QUARTER_N    30.0     2.0       0          0         0
HAMMAM_QUARTER_S    29.5     2.0       0          0         0
BIMARISTAN          30.0     2.0       0          0         0
GARDEN_DISTRICT     29.0     2.0       0          0         0
COLLECT_SOUTH       28.0     3.0       0          0         0

[OUTFALLS]
;;Name              Elev     Type       Stage
TIGRIS_RETURN       27.0     FREE

[CONDUITS]
;;Name              From                To                  Length  Manning  InOff  OutOff  InitFlow  MaxFlow
TIGRIS_N_CANAL      TIGRIS_INTAKE_N     NAHR_ISA_CANAL      2000    0.018    0      0       0         0
TIGRIS_S_CANAL      TIGRIS_INTAKE_S     ROUND_CITY_MOAT     1500    0.018    0      0       0         0
ISA_TO_MOAT         NAHR_ISA_CANAL      ROUND_CITY_MOAT     1000    0.018    0      0       0         0
MOAT_TO_KUFA        ROUND_CITY_MOAT     GATE_KUFA           500     0.015    0      0       0         0
MOAT_TO_BASRA       ROUND_CITY_MOAT     GATE_BASRA          500     0.015    0      0       0         0
MOAT_TO_KHORASAN    ROUND_CITY_MOAT     GATE_KHORASAN       500     0.015    0      0       0         0
MOAT_TO_SYRIA       ROUND_CITY_MOAT     GATE_SYRIA          500     0.015    0      0       0         0
KUFA_TO_PALACE      GATE_KUFA           PALACE_GREEN_DOME   400     0.013    0      0       0         0
BASRA_TO_PALACE     GATE_BASRA          PALACE_GREEN_DOME   400     0.013    0      0       0         0
PALACE_TO_MOSQUE    PALACE_GREEN_DOME   GREAT_MOSQUE        200     0.013    0      0       0         0
KHORASAN_MARKET     GATE_KHORASAN       KARKH_MARKET        600     0.015    0      0       0         0
SYRIA_RUSAFA        GATE_SYRIA          RUSAFA_QUARTER      800     0.015    0      0       0         0
HAMMAM_N_FEED       NAHR_ISA_CANAL      HAMMAM_QUARTER_N    500     0.015    0      0       0         0
HAMMAM_S_FEED       ROUND_CITY_MOAT     HAMMAM_QUARTER_S    600     0.015    0      0       0         0
BIMAR_FEED          PALACE_GREEN_DOME   BIMARISTAN          300     0.013    0      0       0         0
GARDEN_FEED         RUSAFA_QUARTER      GARDEN_DISTRICT     500     0.018    0      0       0         0
MOSQUE_DRAIN        GREAT_MOSQUE        COLLECT_SOUTH       400     0.015    0      0       0         0
MARKET_DRAIN        KARKH_MARKET        COLLECT_SOUTH       500     0.018    0      0       0         0
RUSAFA_DRAIN        RUSAFA_QUARTER      COLLECT_SOUTH       600     0.018    0      0       0         0
HAMMAM_N_DRAIN      HAMMAM_QUARTER_N    COLLECT_SOUTH       500     0.015    0      0       0         0
HAMMAM_S_DRAIN      HAMMAM_QUARTER_S    COLLECT_SOUTH       400     0.015    0      0       0         0
BIMAR_DRAIN         BIMARISTAN          COLLECT_SOUTH       300     0.015    0      0       0         0
GARDEN_DRAIN        GARDEN_DISTRICT     COLLECT_SOUTH       400     0.018    0      0       0         0
FINAL_RETURN        COLLECT_SOUTH       TIGRIS_RETURN       1000    0.020    0      0       0         0

[XSECTIONS]
;;Link              Shape       Geom1  Geom2  Geom3  Geom4  Barrels
TIGRIS_N_CANAL      TRAPEZOIDAL 2.0    10.0   2.0    2.0    1
TIGRIS_S_CANAL      TRAPEZOIDAL 2.0    8.0    2.0    2.0    1
ISA_TO_MOAT         TRAPEZOIDAL 1.5    6.0    1.5    1.5    1
MOAT_TO_KUFA        RECT_OPEN   2.0    15.0   0      0      1
MOAT_TO_BASRA       RECT_OPEN   2.0    15.0   0      0      1
MOAT_TO_KHORASAN    RECT_OPEN   2.0    15.0   0      0      1
MOAT_TO_SYRIA       RECT_OPEN   2.0    15.0   0      0      1
KUFA_TO_PALACE      CIRCULAR    0.50   0      0      0      2
BASRA_TO_PALACE     CIRCULAR    0.50   0      0      0      2
PALACE_TO_MOSQUE    CIRCULAR    0.40   0      0      0      1
KHORASAN_MARKET     TRAPEZOIDAL 1.0    4.0    1.0    1.0    1
SYRIA_RUSAFA        TRAPEZOIDAL 1.0    4.0    1.0    1.0    1
HAMMAM_N_FEED       CIRCULAR    0.30   0      0      0      1
HAMMAM_S_FEED       CIRCULAR    0.30   0      0      0      1
BIMAR_FEED          CIRCULAR    0.25   0      0      0      1
GARDEN_FEED         TRAPEZOIDAL 0.5    2.0    0.5    0.5    1
MOSQUE_DRAIN        CIRCULAR    0.30   0      0      0      1
MARKET_DRAIN        TRAPEZOIDAL 0.6    2.0    0.5    0.5    1
RUSAFA_DRAIN        TRAPEZOIDAL 0.6    2.0    0.5    0.5    1
HAMMAM_N_DRAIN      CIRCULAR    0.25   0      0      0      1
HAMMAM_S_DRAIN      CIRCULAR    0.25   0      0      0      1
BIMAR_DRAIN         CIRCULAR    0.20   0      0      0      1
GARDEN_DRAIN        TRAPEZOIDAL 0.4    1.5    0.5    0.5    1
FINAL_RETURN        TRAPEZOIDAL 2.0    8.0    2.0    2.0    1

[INFLOWS]
;;Node              Constituent  TimeSeries  Type  Mfactor  Sfactor  Baseline  Pattern
TIGRIS_INTAKE_N     FLOW         TIGRIS_Q    FLOW  1.0      1.0      15.0
TIGRIS_INTAKE_S     FLOW         TIGRIS_Q    FLOW  1.0      1.0      10.0

[TIMESERIES]
;;Name              Date       Time   Value
TIGRIS_Q            01/01/2024 00:00  1.0
TIGRIS_Q            01/01/2024 06:00  1.0
TIGRIS_Q            01/01/2024 12:00  1.2
TIGRIS_Q            01/01/2024 18:00  1.0
TIGRIS_Q            01/02/2024 00:00  1.0

[COORDINATES]
;;Node              X-Coord    Y-Coord
TIGRIS_INTAKE_N     5000       7000
TIGRIS_INTAKE_S     5200       5000
NAHR_ISA_CANAL      4000       6500
ROUND_CITY_MOAT     3500       5500
GATE_KUFA           3000       5500
GATE_BASRA          3500       5000
GATE_KHORASAN       4000       5500
GATE_SYRIA          3500       6000
PALACE_GREEN_DOME   3500       5500
GREAT_MOSQUE        3400       5400
KARKH_MARKET        4200       5200
RUSAFA_QUARTER      4500       5800
HAMMAM_QUARTER_N    3800       6200
HAMMAM_QUARTER_S    3200       5000
BIMARISTAN          3600       5300
GARDEN_DISTRICT     4800       5500
COLLECT_SOUTH       4000       4500
TIGRIS_RETURN       5000       4000

[REPORT]
SUBCATCHMENTS    ALL
NODES            ALL
LINKS            ALL`,

  'parakrama-samudra': `[TITLE]
Parakrama Samudra (Sea of Parakrama) - Sri Lanka (1153 CE)
One of the largest pre-modern reservoirs in the world (22.6 sq km)
King Parakramabahu I - Let not even a small quantity go to sea
Polonnaruwa, Sri Lanka
Model by Robert Dickinson, PE

[OPTIONS]
FLOW_UNITS           CMS
FLOW_ROUTING         DYNWAVE
LINK_OFFSETS          DEPTH
START_DATE           01/01/2024
START_TIME           00:00:00
END_DATE             01/03/2024
END_TIME             00:00:00
REPORT_STEP          00:15:00
ROUTING_STEP         0:00:30
INERTIAL_DAMPING     PARTIAL

[JUNCTIONS]
;;Name              Elev     MaxDepth  InitDepth  SurDepth  Aponded
AMBAN_GANGA         65.0     4.0       0          0         0
ANGAMEDILLA_FEED    63.0     3.0       0          0         0
GIRITALE_TANK       60.0     5.0       0          0         0
TOPA_WEWA           58.0     5.0       0          0         0
PARAKRAMA_NORTH     55.0     8.0       0          0         0
PARAKRAMA_CENTER    52.0     10.0      0          0         0
PARAKRAMA_SOUTH     50.0     8.0       0          0         0
BISO_KOTUWA_1       48.0     5.0       0          0         0
BISO_KOTUWA_2       47.0     5.0       0          0         0
MAIN_CANAL_N        48.0     3.0       0          0         0
MAIN_CANAL_S        46.0     3.0       0          0         0
PADDY_NORTH_1       45.0     2.0       0          0         0
PADDY_NORTH_2       43.0     2.0       0          0         0
PADDY_SOUTH_1       44.0     2.0       0          0         0
PADDY_SOUTH_2       42.0     2.0       0          0         0
POLONNARUWA_CITY    47.0     3.0       0          0         0
SPILLWAY            53.0     3.0       0          0         0
COLLECTION          40.0     3.0       0          0         0

[OUTFALLS]
;;Name              Elev     Type       Stage
DOWNSTREAM_TANK     38.0     FREE

[CONDUITS]
;;Name              From                To                  Length   Manning  InOff  OutOff  InitFlow  MaxFlow
AMBAN_FEED          AMBAN_GANGA         ANGAMEDILLA_FEED    5000     0.025    0      0       0         0
ANGAMEDILLA_CH      ANGAMEDILLA_FEED    GIRITALE_TANK       8000     0.020    0      0       0         0
GIRITALE_TO_TOPA    GIRITALE_TANK       TOPA_WEWA           5000     0.020    0      0       0         0
TOPA_TO_PARAKRAMA   TOPA_WEWA           PARAKRAMA_NORTH     3000     0.018    0      0       0         0
PARAKRAMA_N_C       PARAKRAMA_NORTH     PARAKRAMA_CENTER    3000     0.012    0      0       0         0
PARAKRAMA_C_S       PARAKRAMA_CENTER    PARAKRAMA_SOUTH     3000     0.012    0      0       0         0
BISO_1_OUTLET       PARAKRAMA_CENTER    BISO_KOTUWA_1       200      0.013    0      0       0         0
BISO_2_OUTLET       PARAKRAMA_SOUTH     BISO_KOTUWA_2       200      0.013    0      0       0         0
N_CANAL             BISO_KOTUWA_1       MAIN_CANAL_N        500      0.015    0      0       0         0
S_CANAL             BISO_KOTUWA_2       MAIN_CANAL_S        500      0.015    0      0       0         0
PADDY_N1_FEED       MAIN_CANAL_N        PADDY_NORTH_1       3000     0.020    0      0       0         0
PADDY_N2_FEED       PADDY_NORTH_1       PADDY_NORTH_2       4000     0.020    0      0       0         0
PADDY_S1_FEED       MAIN_CANAL_S        PADDY_SOUTH_1       3000     0.020    0      0       0         0
PADDY_S2_FEED       PADDY_SOUTH_1       PADDY_SOUTH_2       4000     0.020    0      0       0         0
CITY_FEED           BISO_KOTUWA_1       POLONNARUWA_CITY    1000     0.015    0      0       0         0
SPILLWAY_CH         PARAKRAMA_CENTER    SPILLWAY            300      0.018    0      0       0         0
SPILL_TO_COLLECT    SPILLWAY            COLLECTION          5000     0.025    0      0       0         0
PADDY_N_DRAIN       PADDY_NORTH_2       COLLECTION          5000     0.025    0      0       0         0
PADDY_S_DRAIN       PADDY_SOUTH_2       COLLECTION          4000     0.025    0      0       0         0
CITY_DRAIN          POLONNARUWA_CITY    COLLECTION          3000     0.020    0      0       0         0
FINAL_OUT           COLLECTION          DOWNSTREAM_TANK     3000     0.020    0      0       0         0

[XSECTIONS]
;;Link              Shape       Geom1  Geom2  Geom3  Geom4  Barrels
AMBAN_FEED          TRAPEZOIDAL 2.0    10.0   2.0    2.0    1
ANGAMEDILLA_CH      TRAPEZOIDAL 1.5    6.0    1.5    1.5    1
GIRITALE_TO_TOPA    TRAPEZOIDAL 1.5    6.0    1.5    1.5    1
TOPA_TO_PARAKRAMA   TRAPEZOIDAL 2.0    8.0    2.0    2.0    1
PARAKRAMA_N_C       RECT_OPEN   4.0    500.0  0      0      1
PARAKRAMA_C_S       RECT_OPEN   5.0    600.0  0      0      1
BISO_1_OUTLET       CIRCULAR    1.0    0      0      0      1
BISO_2_OUTLET       CIRCULAR    1.0    0      0      0      1
N_CANAL             TRAPEZOIDAL 1.5    5.0    1.0    1.0    1
S_CANAL             TRAPEZOIDAL 1.5    5.0    1.0    1.0    1
PADDY_N1_FEED       TRAPEZOIDAL 0.8    3.0    0.5    0.5    1
PADDY_N2_FEED       TRAPEZOIDAL 0.6    2.0    0.5    0.5    1
PADDY_S1_FEED       TRAPEZOIDAL 0.8    3.0    0.5    0.5    1
PADDY_S2_FEED       TRAPEZOIDAL 0.6    2.0    0.5    0.5    1
CITY_FEED           TRAPEZOIDAL 1.0    3.0    0.5    0.5    1
SPILLWAY_CH         RECT_OPEN   2.0    10.0   0      0      1
SPILL_TO_COLLECT    TRAPEZOIDAL 1.5    6.0    1.5    1.5    1
PADDY_N_DRAIN       TRAPEZOIDAL 0.5    2.0    0.5    0.5    1
PADDY_S_DRAIN       TRAPEZOIDAL 0.5    2.0    0.5    0.5    1
CITY_DRAIN          TRAPEZOIDAL 0.8    3.0    0.5    0.5    1
FINAL_OUT           TRAPEZOIDAL 1.5    6.0    1.5    1.5    1

[INFLOWS]
;;Node              Constituent  TimeSeries  Type  Mfactor  Sfactor  Baseline  Pattern
AMBAN_GANGA         FLOW         MONSOON_SL  FLOW  1.0      1.0      5.0

[TIMESERIES]
;;Name              Date       Time   Value
MONSOON_SL          01/01/2024 00:00  5.0
MONSOON_SL          01/01/2024 06:00  8.0
MONSOON_SL          01/01/2024 12:00  15.0
MONSOON_SL          01/01/2024 14:00  25.0
MONSOON_SL          01/01/2024 16:00  20.0
MONSOON_SL          01/01/2024 18:00  12.0
MONSOON_SL          01/01/2024 22:00  7.0
MONSOON_SL          01/02/2024 06:00  5.0
MONSOON_SL          01/02/2024 12:00  10.0
MONSOON_SL          01/02/2024 18:00  5.0
MONSOON_SL          01/03/2024 00:00  5.0

[COORDINATES]
;;Node              X-Coord    Y-Coord
AMBAN_GANGA         1000       8000
ANGAMEDILLA_FEED    1500       7500
GIRITALE_TANK       2000       7000
TOPA_WEWA           2500       6500
PARAKRAMA_NORTH     3000       6000
PARAKRAMA_CENTER    3200       5500
PARAKRAMA_SOUTH     3400       5000
BISO_KOTUWA_1       3500       5400
BISO_KOTUWA_2       3600       4800
MAIN_CANAL_N        3800       5200
MAIN_CANAL_S        3800       4500
PADDY_NORTH_1       4500       5400
PADDY_NORTH_2       5200       5600
PADDY_SOUTH_1       4500       4200
PADDY_SOUTH_2       5200       4000
POLONNARUWA_CITY    3800       5800
SPILLWAY            2800       5300
COLLECTION          5500       4800
DOWNSTREAM_TANK     6000       4500

[REPORT]
SUBCATCHMENTS    ALL
NODES            ALL
LINKS            ALL`,

};
