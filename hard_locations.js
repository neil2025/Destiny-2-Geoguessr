const hardLocations = [
    //EDZ locations
    {
        name: 'EDZ5',
        image: 'edz5.png',
        coordinates: [831.08, 1823.00],
        map: 'EDZ'
    },
    {
        name: 'EDZ11',
        image: 'edz11.png',
        coordinates: [744.98, 2088.50],
        map: 'EDZ'
    },
    {
        name: 'EDZ16',
        image: 'edz16.png',
        coordinates: [892.50, 1931.75],
        map: 'EDZ'
    },
    {
        name: 'EDZ25',
        image: 'edz25.png',
        coordinates: [722.00, 1260.00],
        map: 'EDZ'
    },
    {
        name: 'EDZ34',
        image: 'edz34.png',
        coordinates: [435.51, 1557.00],
        map: 'EDZ'
    },
    {
        name: 'EDZ35',
        image: 'edz35.png',
        coordinates: [451.01, 1840.00],
        map: 'EDZ'
    },
    {
        name: 'EDZ36',
        image: 'edz36.png',
        coordinates: [401.50, 1748.75],
        map: 'EDZ'
    },
    {
        name: 'EDZ38',
        image: 'edz38.png',
        coordinates: [115.04, 1836.00],
        map: 'EDZ'
    },
    {
        name: 'EDZ40',
        image: 'edz40.png',
        coordinates: [1746.04, 850.00],
        map: 'EDZ'
    },
    {
        name: 'EDZ41',
        image: 'edz41.png',
        coordinates: [1083.53, 816.00],
        map: 'EDZ'
    },
    {
        name: 'EDZ44',
        image: 'edz44.png',
        coordinates: [935.00, 2102.50],
        map: 'EDZ'
    },
    {
        name: 'EDZ46',
        image: 'edz46.png',
        coordinates: [549.73, 1516.25],
        map: 'EDZ'
    },
    {
        name: 'EDZ49',
        image: 'edz49.png',
        coordinates: [942.02, 2059.50],
        map: 'EDZ'
    },
    {
        name: 'EDZ50',
        image: 'edz50.png',
        coordinates: [562.98, 2070.00],
        map: 'EDZ'
    },
    {
        name: 'EDZ52',
        image: 'edz52.png',
        coordinates: [545.49, 1856.50],
        map: 'EDZ'
    },
    {
        name: 'EDZ55',
        image: 'edz55.png',
        coordinates: [502.89, 1314.50],
        map: 'EDZ'
    },
    {
        name: 'EDZ56',
        image: 'edz56.png',
        coordinates: [551.86, 1518.00],
        map: 'EDZ'
    },
    {
        name: 'EDZ58',
        image: 'edz58.png',
        coordinates: [577.34, 1954.00],
        map: 'EDZ'
    },
    {
        name: 'EDZ59',
        image: 'edz59.png',
        coordinates: [901.49, 1903.50],
        map: 'EDZ'
    },

    //Cosmodrome locations
    {
        name: 'Cosmodrome1',
        image: 'cosmodrome1.png',
        coordinates: [113.13, 1307.38],
        map: 'Cosmodrome'
    },
    {
        name: 'Cosmodrome20',
        image: 'cosmodrome20.png',
        coordinates: [683.87, 1425.50],
        map: 'Cosmodrome'
    },
    {
        name: 'Cosmodrome22',
        image: 'cosmodrome22.png',
        coordinates: [856.77, 1387.50],
        map: 'Cosmodrome'
    },
    {
        name: 'Cosmodrome23',
        image: 'cosmodrome23.png',
        coordinates: [990.74, 1425.50],
        map: 'Cosmodrome'
    },
    {
        name: 'Cosmodrome41',
        image: 'cosmodrome41.png',
        coordinates: [1283.98, 2511.50],
        map: 'Cosmodrome'
    },
    {
        name: 'Cosmodrome42',
        image: 'cosmodrome42.png',
        coordinates: [294.99, 1054.00],
        map: 'Cosmodrome'
    },

    //Moon locations
    {
        name: 'Moon24',
        image: 'moon24.png',
        coordinates: [586.45, 1741.00],
        map: 'Moon'
    },
    {
        name: 'Moon25',
        image: 'moon25.png',
        coordinates: [804.91, 1660.50],
        map: 'Moon'
    },
    {
        name: 'Moon26',
        image: 'moon26.png',
        coordinates: [781.93, 1820.50],
        map: 'Moon'
    },
    {
        name: 'Moon28',
        image: 'moon28.png',
        coordinates: [1145.48, 1803.00],
        map: 'Moon'
    },
    {
        name: 'Moon29',
        image: 'moon29.png',
        coordinates: [943.54, 1548.50],
        map: 'Moon'
    },
    {
        name: 'Moon30',
        image: 'moon30.png',
        coordinates: [983.52, 1552.50],
        map: 'Moon'
    },
    {
        name: 'Moon31',
        image: 'moon31.png',
        coordinates: [868.09, 1159.15],
        map: 'Moon'
    },

    //Nessus locations
    {
        name: 'Nessus2',
        image: 'nessus2.png',
        coordinates: [905.55, 2921.00],
        map: 'Nessus'
    },
    {
        name: 'Nessus8',
        image: 'nessus8.png',
        coordinates: [1144.36, 1983.00],
        map: 'Nessus'
    },
    {
        name: 'Nessus10',
        image: 'nessus10.png',
        coordinates: [1000.00, 1950.00],
        map: 'Nessus'
    },
    {
        name: 'Nessus22',
        image: 'nessus22.png',
        coordinates: [483.00, 2521.75],
        map: 'Nessus'
    },
    {
        name: 'Nessus23',
        image: 'nessus23.png',
        coordinates: [583.99, 2365.50],
        map: 'Nessus'
    },
    {
        name: 'Nessus25',
        image: 'nessus25.png',
        coordinates: [987.63, 1946.00],
        map: 'Nessus'
    },
    {
        name: 'Nessus33',
        image: 'nessus33.png',
        coordinates: [1382.41, 1848.00],
        map: 'Nessus'
    },
    {
        name: 'Nessus38',
        image: 'nessus38.png',
        coordinates: [1672.05, 2415.00],
        map: 'Nessus'
    },
    {
        name: 'Nessus40',
        image: 'nessus40.png',
        coordinates: [1456.53, 2538.00],
        map: 'Nessus'
    },
    {
        name: 'Nessus42',
        image: 'nessus42.png',
        coordinates: [1226.02, 2802.00],
        map: 'Nessus'
    },
    {
        name: 'Nessus43',
        image: 'nessus43.png',
        coordinates: [1244.00, 2634.00],
        map: 'Nessus'
    },
    {
        name: 'Nessus48',
        image: 'nessus48.png',
        coordinates: [1122.74, 2854.50],
        map: 'Nessus'
    },
    {
        name: 'Nessus50',
        image: 'nessus50.png',
        coordinates: [614.04, 2668.00],
        map: 'Nessus'
    },
    {
        name: 'Nessus52',
        image: 'nessus52.png',
        coordinates: [609.97, 2437.00],
        map: 'Nessus'
    },
    {
        name: 'Nessus53',
        image: 'nessus53.png',
        coordinates: [632.95, 2258.73],
        map: 'Nessus'
    },
    {
        name: 'Nessus54',
        image: 'nessus54.png',
        coordinates: [640.95, 2257.23],
        map: 'Nessus'
    },
    {
        name: 'Nessus55',
        image: 'nessus55.png',
        coordinates: [647.44, 2183.73],
        map: 'Nessus'
    },
    {
        name: 'Nessus56',
        image: 'nessus56.png',
        coordinates: [1031.98, 1958.50],
        map: 'Nessus'
    },
    {
        name: 'Nessus57',
        image: 'nessus57.png',
        coordinates: [1127.42, 2029.50],
        map: 'Nessus'
    },
    {
        name: 'Nessus58',
        image: 'nessus58.png',
        coordinates: [1308.46, 2002.50],
        map: 'Nessus'
    },
    {
        name: 'Nessus60',
        image: 'nessus60.png',
        coordinates: [1660.35, 2042.00],
        map: 'Nessus'
    },
    {
        name: 'Nessus61',
        image: 'nessus61.png',
        coordinates: [1556.53, 2235.50],
        map: 'Nessus'
    },
    {
        name: 'Nessus62',
        image: 'nessus62.png',
        coordinates: [1486.53, 2515.50],
        map: 'Nessus'
    },
    {
        name: 'Nessus63',
        image: 'nessus63.png',
        coordinates: [1245.49, 2632.00],
        map: 'Nessus'
    },
    {
        name: 'Nessus64',
        image: 'nessus64.png',
        coordinates: [1184.53, 2604.00],
        map: 'Nessus'
    },
    {
        name: 'Nessus65',
        image: 'nessus65.png',
        coordinates: [1134.06, 2591.50],
        map: 'Nessus'
    },
    {
        name: 'Nessus66',
        image: 'nessus66.png',
        coordinates: [1035.62, 2656.00],
        map: 'Nessus'
    },
    {
        name: 'Nessus67',
        image: 'nessus67.png',
        coordinates: [949.17, 2621.00],
        map: 'Nessus'
    },
    {
        name: 'Nessus68',
        image: 'nessus68.png',
        coordinates: [1122.50, 2295.50],
        map: 'Nessus'
    },

    //Dreaming City locations
    {
        name: 'DreamingCity12',
        image: 'dreamingcity12.png',
        coordinates: [1513.49, 1758.75],
        map: 'DreamingCity'
    },
    {
        name: 'DreamingCity13',
        image: 'dreamingcity13.png',
        coordinates: [542.48, 1516.38],
        map: 'DreamingCity'
    },
    {
        name: 'DreamingCity15',
        image: 'dreamingcity15.png',
        coordinates: [865.93, 957.50],
        map: 'DreamingCity'
    },
    {
        name: 'DreamingCity17',
        image: 'dreamingcity17.png',
        coordinates: [977.36, 954.50],
        map: 'DreamingCity'
    },
    {
        name: 'DreamingCity27',
        image: 'dreamingcity27.png',
        coordinates: [1068.06, 1539.50],
        map: 'DreamingCity'
    },
    {
        name: 'DreamingCity33',
        image: 'dreamingcity33.png',
        coordinates: [646.02, 1305.50],
        map: 'DreamingCity'
    },
    {
        name: 'DreamingCity36',
        image: 'dreamingcity36.png',
        coordinates: [319.28, 1372.75],
        map: 'DreamingCity'
    },
    {
        name: 'DreamingCity37',
        image: 'dreamingcity37.png',
        coordinates: [270.30, 1203.00],
        map: 'DreamingCity'
    },
    {
        name: 'DreamingCity44',
        image: 'dreamingcity44.png',
        coordinates: [725.99, 956.50],
        map: 'DreamingCity'
    },
    {
        name: 'DreamingCity45',
        image: 'dreamingcity45.png',
        coordinates: [746.97, 644.00],
        map: 'DreamingCity'
    },

    //Europa locations
    {
        name: 'Europa5',
        image: 'europa5.png',
        coordinates: [847.73, 2438.75],
        map: 'Europa'
    },
    {
        name: 'Europa6',
        image: 'europa6.png',
        coordinates: [2289.25, 1968.00],
        map: 'Europa'
    },
    {
        name: 'Europa10',
        image: 'europa10.png',
        coordinates: [1169.74, 2549.00],
        map: 'Europa'
    },

    //Neomuna locatoins
    {
        name: 'Neomuna6',
        image: 'neomuna6.png',
        coordinates: [1278.76, 2762.33],
        map: 'Neomuna'
    },
    {
        name: 'Neomuna10',
        image: 'neomuna10.png',
        coordinates: [1736.00, 2479.00],
        map: 'Neomuna'
    },
    {
        name: 'Neomuna22',
        image: 'neomuna22.png',
        coordinates: [1196.91, 1834.50],
        map: 'Neomuna'
    },
    {
        name: 'Neomuna26',
        image: 'neomuna26.png',
        coordinates: [1468.00, 2847.00],
        map: 'Neomuna'
    },

    //Savathun's Throne World locations
    {
        name: 'STW3',
        image: 'stw3.png',
        coordinates: [1066.52, 2039.00],
        map: 'STW'
    },

    //The Pale Heart locations
    {
        name: 'TPH2',
        image: 'tph2.png',
        coordinates: [497.39, 2048.88],
        map: 'TPH'
    },
    {
        name: 'TPH22',
        image: 'tph22.png',
        coordinates: [1106.49, 4020.50],
        map: 'TPH'
    },
    {
        name: 'TPH27',
        image: 'tph27.png',
        coordinates: [922.50, 5002.50],
        map: 'TPH'
    },
    {
        name: 'TPH33',
        image: 'tph33.png',
        coordinates: [748.60, 1947.88],
        map: 'TPH'
    },
    {
        name: 'TPH35',
        image: 'tph35.png',
        coordinates: [738.00, 2540.00],
        map: 'TPH'
    },
    {
        name: 'TPH36',
        image: 'tph36.png',
        coordinates: [818.98, 3501.00],
        map: 'TPH'
    },
    {
        name: 'TPH38',
        image: 'tph38.png',
        coordinates: [351.56, 3773.50],
        map: 'TPH'
    },
    {
        name: 'TPH39',
        image: 'tph39.png',
        coordinates: [367.05, 3718.50],
        map: 'TPH'
    },
    {
        name: 'TPH40',
        image: 'tph40.png',
        coordinates: [406.53, 3789.50],
        map: 'TPH'
    },
    {
        name: 'TPH41',
        image: 'tph41.png',
        coordinates: [477.98, 3897.50],
        map: 'TPH'
    },
    {
        name: 'TPH43',
        image: 'tph43.png',
        coordinates: [953.50, 5270.50],
        map: 'TPH'
    },

]