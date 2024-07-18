import random
import json
import os

# bafybeieyb62vnkv46zr5mw3nfqlhcxt7v2frd2tu6k3cwgkqfgwmnyflme

# Function to generate a random hex color
def random_hex_color():
    return f"{random.randint(100, 255):02x}{random.randint(100, 255):02x}{random.randint(100, 255):02x}"

# Function to generate a random bg hex color
def random_bg_hex_color():
    return f"{random.randint(0, 20):02x}{random.randint(0, 20):02x}{random.randint(0, 20):02x}"

# Function to generate a random RGB color
def random_rgb_color():
    return f"rgb({random.randint(0, 255)}, {random.randint(0, 255)}, {random.randint(0, 255)})"

# Function to generate random coordinates within the SVG dimensions
def random_position(max_dim):
    return random.randint(0, max_dim)

# Function to generate a random size for the stars
def random_size():
    return random.randint(1000, 5000)

# Function to create a star with radial gradient and blur
def create_star(bg_color):
    size = random_size()
    color = random_rgb_color()
    cx = random_position(10286)
    cy = random_position(10286)
    return f'''
    <radialGradient id="grad{cx}{cy}" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
        <stop offset="0%" style="stop-color:{color}; stop-opacity:0.3" />
        <stop offset="100%" style="stop-color:#{bg_color}; stop-opacity:0" />
    </radialGradient>
    <circle cx="{cx}" cy="{cy}" r="{size}" fill="url(#grad{cx}{cy})" filter="url(#blur)" />
    '''

# Function to create an SVG file with a specific color gradient
def create_svg_with_gradient(file_number):
    color1 = random_hex_color()
    color2 = random_hex_color()
    bg_color = random_bg_hex_color()
    stars = ''.join([create_star(bg_color) for _ in range(10)])  # Generate 10 stars
    svg_content = f"""<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="1000.000000pt" height="1000.000000pt" viewBox="0 0 10286.000000 10286.000000"
 preserveAspectRatio="xMidYMid meet">

  <defs>
    <filter id="blur">
        <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
    </filter>
    <linearGradient id="customGradient" gradientUnits="userSpaceOnUse"
      x1="0" y1="0" x2="35240" y2="35240">
      <stop offset="0%" style="stop-color:#{color1}" /> 
      <stop offset="100%" style="stop-color:#{color2}" />
    </linearGradient>
  </defs>

<rect width="10286" height="10286" fill="#{bg_color}" />
{stars}
<g transform="translate(2000.000000,7800.000000) scale(0.100000,-0.100000)"
fill="url(#customGradient)" stroke="none" fill-opacity="0.8">
<path d="M36560 52537 c-33 -12 -35 -15 -32 -52 6 -71 175 -720 435 -1675 458
-1677 587 -2194 574 -2307 -7 -65 -21 -76 -88 -70 -122 11 -528 200 -979 457
-981 558 -2041 1035 -3245 1460 -1276 450 -2728 828 -3955 1029 -1140 187
-3000 427 -3360 434 -102 2 -110 1 -134 -22 -14 -14 -26 -33 -26 -43 0 -38 93
-201 470 -823 828 -1369 1412 -2400 1529 -2703 37 -96 39 -122 11 -122 -33 0
-300 39 -550 80 -427 70 -635 84 -1530 101 -663 13 -2282 7 -2660 -10 -1414
-62 -2309 -154 -3145 -322 -1538 -310 -4440 -1162 -4808 -1412 -82 -56 -76
-76 56 -178 263 -205 851 -567 2017 -1244 750 -436 1077 -632 1300 -780 218
-145 314 -223 349 -286 23 -42 24 -48 11 -79 -10 -25 -26 -38 -67 -56 -86 -38
-315 -106 -650 -193 -1841 -478 -4454 -1415 -5743 -2060 -1274 -638 -4086
-2409 -4560 -2872 -92 -90 -91 -101 10 -152 171 -85 865 -308 2075 -667 668
-198 1262 -389 1695 -544 234 -85 640 -246 640 -255 0 -7 -190 -100 -1425
-699 -2150 -1043 -3503 -1772 -4405 -2376 -807 -540 -2274 -1758 -3109 -2581
-430 -424 -591 -620 -591 -718 0 -157 422 -242 1735 -347 1051 -84 1649 -152
2065 -236 182 -37 528 -140 514 -153 -30 -27 -239 -175 -500 -353 -837 -572
-1265 -919 -1984 -1609 -1557 -1495 -2832 -3078 -3848 -4775 -220 -368 -652
-1144 -652 -1171 0 -6 7 -13 15 -17 23 -8 272 22 1155 143 2120 290 2490 334
2787 335 111 1 204 -2 208 -6 4 -3 -130 -208 -298 -455 -391 -577 -592 -879
-771 -1156 -882 -1372 -1298 -2261 -1913 -4082 -376 -1116 -464 -1573 -314
-1635 24 -9 63 -11 149 -7 249 13 837 155 2177 526 836 231 1393 377 1695 445
191 43 250 52 250 38 0 -14 -240 -412 -523 -867 -904 -1454 -1201 -1977 -1541
-2707 -612 -1318 -1042 -2763 -1426 -4793 -83 -439 -113 -663 -114 -860 -1
-184 8 -234 48 -278 45 -48 66 -46 200 21 162 82 311 176 896 567 524 350 904
610 1765 1205 1119 773 1347 923 1377 904 30 -19 -13 -229 -157 -769 -217
-817 -288 -1555 -288 -3025 -1 -1848 109 -2699 497 -3845 120 -355 154 -443
175 -454 59 -32 360 164 1276 833 204 148 476 347 605 441 289 211 542 388
664 465 94 59 208 120 225 120 27 0 171 -194 391 -525 269 -404 408 -641 444
-755 28 -86 41 -194 56 -435 24 -385 62 -561 171 -778 85 -167 273 -388 438
-513 123 -94 265 -161 364 -174 355 -45 2290 -50 20172 -50 17862 0 19817 5
20170 50 145 18 323 122 499 290 174 167 260 292 382 553 l75 162 9 2480 c5
1364 14 3983 20 5820 21 6841 33 7191 277 8084 189 695 390 1294 593 1771 559
1311 1347 2358 2676 3557 494 445 1060 909 1864 1528 641 493 1007 787 1395
1120 1215 1040 1979 1954 2664 3185 127 229 429 834 535 1075 495 1121 770
2086 827 2899 15 219 6 785 -15 951 -67 521 -262 999 -562 1375 -94 118 -368
389 -494 490 -218 174 -491 332 -683 395 -138 45 -233 54 -692 64 -683 15
-703 18 -923 97 -753 273 -1745 938 -2403 1611 -200 206 -272 292 -569 688
-713 953 -1908 2676 -3830 5525 -3361 4983 -4861 7001 -5298 7131 -88 26 -109
-17 -182 -381 -118 -589 -266 -1616 -380 -2650 -28 -250 -58 -511 -67 -578
l-16 -124 -31 6 c-95 19 -573 337 -1131 751 -2180 1620 -4743 3068 -7010 3960
-578 228 -1395 516 -1753 620 -130 37 -184 42 -242 22z m-6565 -8188 c193 -19
285 -52 498 -178 223 -132 336 -270 399 -488 20 -67 23 -101 23 -243 -1 -145
-4 -178 -28 -272 -96 -386 -351 -792 -742 -1183 -368 -369 -778 -662 -1275
-910 -589 -295 -1196 -483 -1760 -546 -164 -18 -509 -16 -645 5 -421 63 -705
249 -801 524 -140 403 69 980 575 1590 132 160 428 456 590 591 392 326 803
586 1256 794 434 199 771 294 1166 327 130 11 597 4 744 -11z m-8515 -1374
c269 -47 459 -107 651 -207 231 -120 338 -247 401 -474 29 -107 31 -347 4
-474 -90 -421 -353 -856 -771 -1275 -456 -457 -971 -787 -1640 -1050 -621
-244 -1242 -367 -1773 -352 -301 8 -464 42 -657 136 -235 115 -340 227 -392
421 -14 51 -18 104 -18 245 1 155 4 193 24 275 96 386 348 781 760 1190 776
769 1952 1382 2986 1554 253 43 244 42 425 11z m21160 5 c575 -22 1021 -58
1415 -115 847 -122 1524 -295 2365 -603 1457 -535 2448 -1133 3545 -2136 184
-169 674 -657 889 -886 591 -629 945 -1068 1821 -2261 794 -1083 1520 -1932
2189 -2561 809 -761 1612 -1293 2721 -1803 430 -198 725 -305 955 -349 175
-33 251 -69 295 -140 29 -47 30 -54 30 -160 0 -123 -16 -187 -102 -426 -100
-275 -304 -719 -458 -995 -202 -359 -551 -826 -916 -1225 -621 -678 -1414
-1372 -2739 -2400 -796 -617 -1195 -947 -1620 -1340 -880 -815 -1594 -1616
-2220 -2495 -924 -1297 -1615 -2733 -2064 -4290 -276 -960 -360 -1481 -421
-2605 -39 -745 -47 -1060 -95 -4195 -44 -2845 -109 -8037 -110 -8722 l0 -93
-1303 0 -1303 0 -17 183 c-27 297 -45 1110 -87 3952 -50 3435 -109 4615 -251
5045 -78 237 -321 522 -592 693 -203 129 -483 229 -737 263 -145 19 -552 18
-761 -2 -212 -20 -405 -56 -515 -95 -215 -78 -407 -262 -514 -493 -172 -368
-256 -1240 -300 -3106 -22 -914 -30 -2091 -30 -4228 l0 -2212 -1012 2 -1011 3
-69 195 c-95 272 -151 421 -223 595 -401 965 -963 1757 -1765 2486 -178 162
-425 361 -751 607 l-326 245 -7 811 c-28 3406 -41 3856 -116 4226 -70 341
-260 665 -566 960 -224 216 -377 318 -603 405 -337 128 -639 136 -976 28 -302
-98 -515 -233 -781 -498 -343 -341 -403 -513 -445 -1275 -6 -113 -13 -844 -16
-1736 l-5 -1542 -492 -6 c-270 -3 -806 -8 -1191 -11 -3985 -31 -4819 -59
-5418 -181 -463 -94 -736 -219 -949 -435 -249 -252 -467 -705 -540 -1119 -19
-113 -17 -395 5 -505 70 -348 244 -647 543 -935 212 -205 407 -293 779 -354
350 -58 1627 -112 4100 -176 2417 -62 3092 -106 3589 -231 217 -55 366 -119
596 -257 411 -246 810 -575 1320 -1086 l215 -216 -8968 0 -8967 0 0 48 c0 54
26 813 35 1007 44 995 105 1565 235 2200 203 989 458 1736 882 2585 556 1114
1295 2151 2338 3280 462 501 870 879 1695 1571 1078 904 1824 1500 2985 2384
1182 899 1624 1242 2235 1730 1156 925 1854 1533 2531 2210 481 480 724 752
1145 1285 1578 1996 2633 4022 3233 6206 250 909 458 1967 507 2579 28 347
-21 559 -163 710 -82 88 -165 147 -358 255 -376 210 -692 460 -1071 846 -546
558 -1019 1227 -1254 1779 -353 828 -468 2013 -299 3080 107 671 304 1231 625
1771 756 1273 2114 2388 3369 2767 182 55 333 86 655 132 575 83 697 120 1130
341 811 413 1596 669 2635 858 361 66 1020 161 1240 179 98 8 398 6 650 -3z
m-16396 -5385 c229 -27 365 -67 550 -163 254 -131 426 -330 471 -547 19 -91
19 -242 0 -344 -59 -308 -290 -731 -602 -1098 -122 -144 -408 -425 -563 -553
-802 -665 -1824 -1119 -2704 -1201 -156 -14 -446 -7 -565 15 -194 36 -360 101
-485 190 -118 85 -233 224 -299 364 -32 67 -32 68 -31 222 2 297 77 510 287
825 548 820 1345 1521 2212 1947 346 169 750 304 1010 337 50 6 101 13 115 15
75 11 488 5 604 -9z m-8150 -761 c531 -52 828 -197 965 -471 93 -186 88 -460
-15 -754 -75 -215 -193 -451 -329 -654 -333 -497 -1033 -1065 -1776 -1440
-581 -294 -1169 -482 -1724 -551 -171 -22 -519 -25 -650 -6 -348 50 -589 187
-686 389 -206 432 161 1224 930 2007 547 555 1072 925 1789 1261 190 88 280
125 377 153 285 83 698 107 1119 66z m11696 -5699 c180 -40 397 -132 555 -235
165 -108 288 -267 329 -427 107 -412 -42 -866 -453 -1383 -100 -127 -426 -453
-576 -576 -372 -307 -747 -548 -1225 -788 -546 -273 -835 -369 -1250 -416
-282 -32 -938 -29 -1103 5 -194 40 -288 119 -387 327 -55 116 -71 184 -77 330
-11 266 58 528 229 861 170 330 416 657 742 982 386 385 813 695 1262 915 357
175 956 359 1352 415 135 19 499 13 602 -10z m-7664 -164 c193 -48 453 -192
589 -328 118 -117 177 -241 203 -422 35 -253 -26 -537 -180 -840 -255 -499
-855 -1113 -1498 -1533 -639 -418 -1314 -666 -2025 -745 -209 -23 -619 -23
-775 0 -413 61 -633 190 -703 411 -19 61 -22 92 -21 226 1 254 51 440 195 730
188 377 418 697 728 1014 414 421 874 741 1463 1016 481 225 1121 429 1503
479 44 6 94 13 110 15 76 11 332 -3 411 -23z m-8023 -526 c96 -17 191 -52 329
-121 344 -173 488 -375 519 -731 18 -203 -8 -413 -77 -622 -161 -487 -636
-1058 -1278 -1538 -264 -198 -511 -351 -821 -508 -565 -287 -1189 -481 -1680
-524 -257 -23 -670 -8 -860 30 -230 46 -347 150 -391 348 -21 93 -29 390 -15
536 48 495 257 905 706 1385 360 386 816 750 1315 1050 200 120 597 315 830
407 214 85 604 215 775 258 172 44 485 58 648 30z m11669 -5880 c218 -29 422
-96 575 -190 46 -28 116 -86 169 -140 79 -79 98 -105 143 -195 72 -147 85
-207 78 -355 -6 -125 -14 -165 -74 -354 -215 -680 -1040 -1551 -2008 -2121
-193 -113 -584 -304 -796 -388 -621 -247 -1217 -357 -1609 -297 -330 50 -532
233 -612 553 -19 73 -22 115 -22 262 1 151 4 193 28 303 108 519 402 1036 846
1491 712 730 1737 1290 2588 1415 187 28 183 28 397 29 116 1 232 -4 297 -13z
m-7702 -169 c255 -40 460 -139 590 -283 74 -84 136 -215 156 -333 47 -278 -56
-645 -294 -1048 -442 -745 -1311 -1487 -2347 -2005 -879 -439 -1650 -570
-2085 -355 -96 48 -215 157 -264 240 -61 108 -86 302 -66 528 30 358 123 644
320 985 186 324 402 599 709 905 410 408 857 729 1376 984 493 244 876 360
1300 396 148 12 487 4 605 -14z m-7770 -1021 c124 -17 197 -35 296 -75 137
-54 200 -108 257 -218 94 -181 112 -302 97 -644 -20 -422 -58 -610 -175 -853
-204 -423 -598 -866 -1201 -1349 -814 -652 -1718 -1126 -2379 -1248 -107 -20
-375 -16 -455 5 -152 42 -284 134 -374 261 -53 75 -118 202 -140 276 -42 138
-39 581 4 836 155 911 817 1762 1855 2386 183 110 561 297 750 371 339 133
698 226 985 256 135 13 366 12 480 -4z m10321 -5065 c325 -33 491 -115 618
-305 226 -339 205 -916 -55 -1454 -35 -73 -87 -171 -115 -217 -261 -433 -1007
-1114 -1784 -1629 -557 -370 -940 -536 -1390 -602 -97 -14 -189 -18 -480 -18
-350 0 -362 1 -435 23 -136 43 -320 151 -409 240 -58 58 -106 155 -128 255
-22 107 -12 365 21 513 53 241 175 548 321 811 316 567 745 1042 1360 1505
619 465 1405 820 1941 877 116 12 417 13 535 1z m-7811 -850 c201 -18 356 -70
514 -173 194 -128 300 -270 357 -482 32 -117 32 -346 0 -505 -101 -508 -446
-1147 -929 -1720 -140 -166 -513 -538 -682 -680 -654 -550 -1339 -906 -1955
-1015 -130 -23 -364 -31 -477 -16 -348 47 -572 234 -650 547 -19 75 -22 116
-22 259 0 252 36 423 145 696 383 958 1091 1849 1949 2454 506 355 1086 599
1515 635 50 4 97 8 105 8 8 1 67 -3 130 -8z m-437 -7315 c100 -21 197 -77 294
-169 217 -205 257 -319 257 -746 0 -264 -12 -406 -49 -595 -68 -341 -289 -817
-573 -1235 -180 -265 -370 -489 -667 -785 -869 -869 -1894 -1451 -2359 -1341
-290 69 -491 344 -572 781 -22 118 -30 487 -15 627 89 777 525 1551 1312 2323
327 321 562 517 790 659 393 245 809 442 1010 476 180 31 436 33 572 5z"/>
<path d="M37460 38829 c-513 -50 -959 -230 -1327 -536 -128 -106 -359 -343
-452 -463 -440 -567 -672 -1255 -710 -2102 -18 -427 31 -643 207 -908 139
-209 370 -453 553 -582 509 -362 1056 -361 1393 3 189 203 245 377 291 894 23
254 42 377 76 478 101 304 290 391 969 442 417 32 589 55 720 100 100 34 149
65 237 148 188 179 319 426 375 709 26 133 30 349 9 468 -26 150 -94 326 -169
444 -88 138 -278 341 -417 447 -299 228 -669 389 -1025 444 -125 20 -583 29
-730 14z"/>
<path d="M46075 34989 c-235 -30 -657 -195 -971 -380 -615 -362 -1001 -844
-1284 -1604 -117 -316 -155 -516 -147 -780 9 -301 78 -543 255 -890 233 -456
506 -791 854 -1051 376 -280 813 -451 1303 -509 153 -18 520 -21 674 -5 304
32 541 99 782 221 224 114 397 246 629 478 610 612 892 1264 849 1958 -24 390
-161 826 -366 1171 -169 283 -474 611 -783 839 -476 352 -1083 566 -1588 562
-75 -1 -168 -6 -207 -10z"/>
</g>
</svg>"""
    with open(f"svg/{file_number}.svg", "w") as f:
        f.write(svg_content)

# Function to create JSON metadata
def create_json_metadata(file_number, image_id):
    metadata = {
        "name": f"Staqe.App #{image_id}",
        "description": f"NFT Staqe Protocol #{image_id}",
        "image": f"ipfs://bafybeiggmtgcvkmyw5vcen242xiuqiucjd6ymsgtnfqdojg46tbsb35wve/{image_id}.svg",
        "external_url": "https://staqe.app"
    }
    with open(f"json/{file_number}", "w") as f:
        json.dump(metadata, f, indent=4)

# Create directories for output
os.makedirs("svg", exist_ok=True)
os.makedirs("json", exist_ok=True)

# Main loop to generate files
for i in range(200):
    create_svg_with_gradient(i+1)
    create_json_metadata(i+1, f"{i+1}")