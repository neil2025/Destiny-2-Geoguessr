const locations = [
    {
        name: 'EDZ1',
        image: 'edz1.png',
        coordinates: [1310.95, 1544.50],
        map: 'EDZ'
    },
    {
        name: 'EDZ2',
        image: 'edz2.png',
        coordinates: [1429.38, 1484.5],
        map: 'EDZ'
    },
    {
        name: 'EDZ3',
        image: 'edz3.png',
        coordinates: [1866.37, 929.50], 
        map: 'EDZ'
    },
    {
        name: 'EDZ4',
        image: 'edz4.png',
        coordinates: [1834.01, 1269.51], 
        map: 'EDZ'
    },
    {
        name: 'EDZ5',
        image: 'edz5.png',
        coordinates: [1156.11, 1640.13], 
        map: 'EDZ'
    },
    {
        name: 'EDZ6',
        image: 'edz6.png',
        coordinates: [329.05, 1577.00], 
        map: 'EDZ'
    },
    {
        name: 'EDZ7',
        image: 'edz7.png',
        coordinates: [690.84, 1769.00], 
        map: 'EDZ'
    },
    {
        name: 'EDZ8',
        image: 'edz8.png',
        coordinates: [859.24, 1808.00], 
        map: 'EDZ'
    },
    {
        name: 'EDZ9',
        image: 'edz9.png',
        coordinates: [1027.99, 2194.00], 
        map: 'EDZ'
    },
    {
        name: 'EDZ10',
        image: 'edz10.png',
        coordinates: [1027.98, 1984.00], 
        map: 'EDZ'
    },
    {
        name: 'EDZ11',
        image: 'edz11.png',
        coordinates: [1064.46, 1904.00], 
        map: 'EDZ'
    },
    {
        name: 'Cosmodrome1',
        image: 'cosmodrome1.png',
        coordinates: [127.57, 639.00], 
        map: 'Cosmodrome'
    },
    {
        name: 'Cosmodrome2',
        image: 'cosmodrome2.png',
        coordinates: [242.03, 701.00], 
        map: 'Cosmodrome'
    },
    {
        name: 'Cosmodrome3',
        image: 'cosmodrome3.png',
        coordinates: [316.00, 743.25], 
        map: 'Cosmodrome'
    },
    {
        name: 'Cosmodrome4',
        image: 'cosmodrome4.png',
        coordinates: [316.76, 827.50], 
        map: 'Cosmodrome'
    },
    {
        name: 'Cosmodrome5',
        image: 'cosmodrome5.png',
        coordinates: [626.72, 640.00], 
        map: 'Cosmodrome'
    },
    {
        name: 'Cosmodrome6',
        image: 'cosmodrome6.png',
        coordinates: [946.98, 630.75], 
        map: 'Cosmodrome'
    },
    {
        name: 'Cosmodrome7',
        image: 'cosmodrome7.png',
        coordinates: [970.91, 1116.50], 
        map: 'Cosmodrome'
    },
    {
        name: 'Moon1',
        image: 'moon1.png',
        coordinates: [1286.76, 1484.75], 
        map: 'Moon'
    },
    {
        name: 'Moon2',
        image: 'moon2.png',
        coordinates: [1140.00, 1224.50], 
        map: 'Moon'
    },
    {
        name: 'Moon3',
        image: 'moon3.png',
        coordinates: [805.71, 693.00], 
        map: 'Moon'
    },
    {
        name: 'Moon4',
        image: 'moon4.png',
        coordinates: [599.52, 1167.00], 
        map: 'Moon'
    },
    {
        name: 'Nessus1',
        image: 'nessus1.png',
        coordinates: [820.98, 2399.75], 
        map: 'Nessus'
    },
    {
        name: 'Nessus2',
        image: 'nessus2.png',
        coordinates: [674.51, 2465.25], 
        map: 'Nessus'
    },
    {
        name: 'Nessus3',
        image: 'nessus3.png',
        coordinates: [601.75, 2382.75], 
        map: 'Nessus'
    },
    {
        name: 'Nessus4',
        image: 'nessus4.png',
        coordinates: [509.48, 2286.50], 
        map: 'Nessus'
    },
    {
        name: 'Nessus5',
        image: 'nessus5.png',
        coordinates: [449.51, 2023.50], 
        map: 'Nessus'
    },
    {
        name: 'Nessus6',
        image: 'nessus6.png',
        coordinates: [515.52, 1880.50], 
        map: 'Nessus'
    },
    {
        name: 'Nessus7',
        image: 'nessus7.png',
        coordinates: [797.46, 1717.00], 
        map: 'Nessus'
    },
    {
        name: 'Nessus8',
        image: 'nessus8.png',
        coordinates: [843.22, 1806.25], 
        map: 'Nessus'
    },
    {
        name: 'Nessus9',
        image: 'nessus9.png',
        coordinates: [1087.47, 1636.25], 
        map: 'Nessus'
    },
    {
        name: 'Nessus10',
        image: 'nessus10.png',
        coordinates: [1287.45, 1872.00], 
        map: 'Nessus'
    },
    {
        name: 'Nessus11',
        image: 'nessus11.png',
        coordinates: [1241.54, 2070.50], 
        map: 'Nessus'
    },
    {
        name: 'Nessus12',
        image: 'nessus12.png',
        coordinates: [1093.06, 1946.50], 
        map: 'Nessus'
    },
    {
        name: 'Nessus13',
        image: 'nessus13.png',
        coordinates: [918.48, 2231.50], 
        map: 'Nessus'
    },
    {
        name: 'Nessus14',
        image: 'nessus14.png',
        coordinates: [899.24, 2035.00], 
        map: 'Nessus'
    },
    {
        name: 'DreamingCity1',
        image: 'dc1.png',
        coordinates: [718.99, 952.00], 
        map: 'DreamingCity'
    },
    {
        name: 'DreamingCity2',
        image: 'dc2.png',
        coordinates: [907.50, 948.00], 
        map: 'DreamingCity'
    },
    {
        name: 'DreamingCity3',
        image: 'dc3.png',
        coordinates: [982.93, 764.50], 
        map: 'DreamingCity'
    },
    {
        name: 'DreamingCity4',
        image: 'dc4.png',
        coordinates: [761.48, 1311.25], 
        map: 'DreamingCity'
    },
    {
        name: 'DreamingCity5',
        image: 'dc5.png',
        coordinates: [1017.48, 1285.00], 
        map: 'DreamingCity'
    },
    {
        name: 'DreamingCity6',
        image: 'dc6.png',
        coordinates: [1240.01, 1612.00], 
        map: 'DreamingCity'
    },
    {
        name: 'DreamingCity7',
        image: 'dc7.png',
        coordinates: [1366.47, 1695.75], 
        map: 'DreamingCity'
    },
    {
        name: 'DreamingCity8',
        image: 'dc8.png',
        coordinates: [585.02, 1319.25], 
        map: 'DreamingCity'
    },
    {
        name: 'DreamingCity9',
        image: 'dc9.png',
        coordinates: [614.25, 1423.00], 
        map: 'DreamingCity'
    },
    {
        name: 'DreamingCity10',
        image: 'dc10.png',
        coordinates: [232.29, 1378.00], 
        map: 'DreamingCity'
    },
    {
        name: 'DreamingCity11',
        image: 'dc11.png',
        coordinates: [433.24, 1294.00], 
        map: 'DreamingCity'
    },
    {
        name: 'STW1',
        image: 'stw1.png',
        coordinates: [681.50, 1393.75], 
        map: 'STW'
    },
    {
        name: 'STW2',
        image: 'stw2.png',
        coordinates: [851.51, 1956.75], 
        map: 'STW'
    },
    {
        name: 'Europa1',
        image: 'europa1.png',
        coordinates: [645.97, 1623.00], 
        map: 'Europa'
    },
    {
        name: 'Europa2',
        image: 'europa2.png',
        coordinates: [1164.45, 1600.00], 
        map: 'Europa'
    },
    {
        name: 'Europa3',
        image: 'europa3.png',
        coordinates: [2123.77, 1384.00], 
        map: 'Europa'
    },
    {
        name: 'Europa4',
        image: 'europa4.png',
        coordinates: [1761.00, 1848.75], 
        map: 'Europa'
    },
    {
        name: 'Neomuna1',
        image: 'neomuna1.png',
        coordinates: [1409.46, 1199.00], 
        map: 'Neomuna'
    },
    {
        name: 'Neomuna2',
        image: 'neomuna2.png',
        coordinates: [1531.39, 1164.50], 
        map: 'Neomuna'
    },
    {
        name: 'Neomuna3',
        image: 'neomuna3.png',
        coordinates: [1184.95, 1619.00], 
        map: 'Neomuna'
    },
    {
        name: 'Neomuna4',
        image: 'neomuna4.png',
        coordinates: [1209.94, 1641.00], 
        map: 'Neomuna'
    },
    {
        name: 'Neomuna5',
        image: 'neomuna5.png',
        coordinates: [1291.39, 1818.00], 
        map: 'Neomuna'
    },
    {
        name: 'Neomuna6',
        image: 'neomuna6.png',
        coordinates: [994.50, 1661.00], 
        map: 'Neomuna'
    },
    {
        name: 'Neomuna7',
        image: 'neomuna7.png',
        coordinates: [711.23, 1645.25], 
        map: 'Neomuna'
    },
    {
        name: 'Neomuna8',
        image: 'neomuna8.png',
        coordinates: [725.98, 1505.25], 
        map: 'Neomuna'
    },
    {
        name: 'Neomuna9',
        image: 'neomuna9.png',
        coordinates: [977.93, 1263.25],
        map: 'Neomuna'
    },
    {
        name: 'TPH1',
        image: 'tph1.png',
        coordinates: [386.05, 531.00],
        map: 'TPH'
    },
    {
        name: 'TPH2',
        image: 'tph2.png',
        coordinates: [285.31, 462.75],
        map: 'TPH'
    },
    {
        name: 'TPH3',
        image: 'tph3.png',
        coordinates: [442.77, 354.75],
        map: 'TPH'
    },
    {
        name: 'TPH4',
        image: 'tph4.png',
        coordinates: [386.26, 438.00],
        map: 'TPH'
    },
    {
        name: 'TPH5',
        image: 'tph5.png',
        coordinates: [339.01, 370.75],
        map: 'TPH'
    },
    {
        name: 'TPH6',
        image: 'tph6.png',
        coordinates: [340.50, 287.75],
        map: 'TPH'
    },
    {
        name: 'TPH7',
        image: 'tph7.png',
        coordinates: [310.27, 203.75],
        map: 'TPH'
    },
    {
        name: 'TPH8',
        image: 'tph8.png',
        coordinates: [381.48, 159.50],
        map: 'TPH'
    },
    {
        name: 'TPH9',
        image: 'tph9.png',
        coordinates: [458.18, 148.75],
        map: 'TPH'
    },
    {
        name: 'TPH10',
        image: 'tph10.png',
        coordinates: [304.23, 556.50],
        map: 'TPH'
    },
    {
        name: 'TPH11',
        image: 'tph11.png',
        coordinates: [444.23, 751.75],
        map: 'TPH'
    },
    {
        name: 'TPH12',
        image: 'tph12.png',
        coordinates: [432.99, 856.50],
        map: 'TPH'
    },
    {
        name: 'TPH13',
        image: 'tph13.png',
        coordinates: [421.99, 882.75],
        map: 'TPH'
    },
    {
        name: 'TPH14',
        image: 'tph14.png',
        coordinates: [480.71, 976.00],
        map: 'TPH'
    },
    {
        name: 'TPH15',
        image: 'tph15.png',
        coordinates: [500.74, 1496.50],
        map: 'TPH'
    },
    {
        name: 'TPH16',
        image: 'tph16.png',
        coordinates: [242.76, 1655.00],
        map: 'TPH'
    },
    {
        name: 'TPH17',
        image: 'tph17.png',
        coordinates: [167.76, 1734.75],
        map: 'TPH'
    },
    {
        name: 'TPH18',
        image: 'tph18.png',
        coordinates: [245.21, 1902.75],
        map: 'TPH'
    },
    {
        name: 'TPH19',
        image: 'tph19.png',
        coordinates: [315.17, 1899.00],
        map: 'TPH'
    },
    {
        name: 'TPH20',
        image: 'tph20.png',
        coordinates: [467.23, 1854.75],
        map: 'TPH'
    },
    {
        name: 'TPH21',
        image: 'tph21.png',
        coordinates: [501.71, 1838.75],
        map: 'TPH'
    },
    {
        name: 'TPH22',
        image: 'tph22.png',
        coordinates: [717.19, 1853.00],
        map: 'TPH'
    },
    {
        name: 'TPH23',
        image: 'tph23.png',
        coordinates: [628.69, 2015.00],
        map: 'TPH'
    },
    {
        name: 'TPH24',
        image: 'tph24.png',
        coordinates: [659.89, 2127.50],
        map: 'TPH'
    },
    {
        name: 'TPH25',
        image: 'tph25.png',
        coordinates: [680.88, 2158.00],
        map: 'TPH'
    },
    {
        name: 'TPH26',
        image: 'tph26.png',
        coordinates: [616.41, 2379.00],
        map: 'TPH'
    },
    {
        name: 'TPH27',
        image: 'tph27.png',
        coordinates: [584.43, 2553.50],
        map: 'TPH'
    },
    {
        name: 'TPH28',
        image: 'tph28.png',
        coordinates: [596.43, 2610.00],
        map: 'TPH'
    },
    {
        name: 'TPH29',
        image: 'tph29.png',
        coordinates: [602.42, 2670.50],
        map: 'TPH'
    },
    {
        name: 'TPH30',
        image: 'tph30.png',
        coordinates: [579.44, 2703.00],
        map: 'TPH'
    },
    {
        name: 'TPH31',
        image: 'tph31.png',
        coordinates: [562.95, 2735.50],
        map: 'TPH'
    },
    {
        name: 'TPH32',
        image: 'tph32.png',
        coordinates: [564.25, 2788.00],
        map: 'TPH'
    }
    
];
