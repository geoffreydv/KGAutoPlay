(function (gamePage) {

    var unicornBuildings = [
        {
            name: "unicornPasture",
            label: "Unic. Pasture",
            prices: [
                {name: "unicorns", val: 2}
            ],
            priceRatio: 1.75,
            effects: {
                "unicornsPerTickBase": 0.001
            }
        },
        {
            name: "unicornTomb",
            label: "Unicorn Tomb",
            prices: [
                {name: "ivory", val: 500},
                {name: "tears", val: 5}
            ],
            effects: {
                "unicornsRatioReligion": 0.05
            }
        }, {
            name: "ivoryTower",
            label: "Ivory Tower",
            prices: [
                {name: "ivory", val: 25000},
                {name: "tears", val: 25}
            ],
            effects: {
                "unicornsRatioReligion": 0.1,
                "riftChance": 5
            }
        }, {
            name: "ivoryCitadel",
            label: "Ivory Citadel",
            prices: [
                {name: "ivory", val: 50000},
                {name: "tears", val: 50}
            ],
            effects: {
                "unicornsRatioReligion": 0.25,
                "ivoryMeteorChance": 5
            }
        }, {
            name: "skyPalace",
            label: "Sky Palace",
            prices: [
                {name: "ivory", val: 125000},
                {name: "megalith", val: 5},
                {name: "tears", val: 500}
            ],
            effects: {
                "unicornsRatioReligion": 0.5,
                "ivoryMeteorRatio": 0.05,
                // "goldMaxRatio":          0.01,
                "alicornChance": 10,
                "alicornPerTick": 0.00002
            }
        }, {
            name: "unicornUtopia",
            label: "Unicorn Utopia",
            prices: [
                {name: "ivory", val: 1000000},
                {name: "gold", val: 500},
                {name: "tears", val: 5000}
            ],
            effects: {
                "unicornsRatioReligion": 2.5,
                "ivoryMeteorRatio": 0.15,
                "alicornChance": 15,
                "alicornPerTick": 0.000025,
                "tcRefineRatio": 0.05
            }
        }, {
            name: "sunspire",
            label: "Sunspire",
            prices: [
                {name: "ivory", val: 750000},
                {name: "gold", val: 1250},
                {name: "tears", val: 25000}
            ],
            effects: {
                "unicornsRatioReligion": 5,
                "ivoryMeteorRatio": 0.5,
                "alicornChance": 30,
                "alicornPerTick": 0.00005,
                "tcRefineRatio": 0.1
            }
        }
    ]

    unicornBuildings.forEach(function (bld) {

        bld.ups = calcGains(bld);

        var psGain = (bld.ups.unicornsPerTickEffective - currentUps.unicornsPerTickEffective) * ticksPerSecond;

        bld.amortTime = Number.MAX_VALUE;
        if (psGain > 0) {
            bld.amortTime = Math.ceil(Math.max(bld.pricePriority / psGain, 1));
        }
    })

    var unicornBuildingsSorted = [];

    unicornBuildingsSorted.sort(function (a, b) {
        return (b.enabled - a.enabled)
            || (a.amortTime - b.amortTime)
            || (a.pricePriority - b.pricePriority)
            || (a.order - b.order);
    });

})(gamePage);