function travelTime(data) {
    let result = new Map;

    for(let entry of data) {
        let [countryStr, townStr, cost] = entry.split(' > ');
        cost = Number(cost)

         let country = countryStr.toLowerCase();
         let town = townStr.toLowerCase();

        if(!result.has(country)) {
            result.set(country, {
                originalName: countryStr,
                towns: new Map()
            });
        }

        let countryData = result.get(country);
        

        if (!countryData.towns.has(town) || countryData.towns.get(town).cost > cost) {
            countryData.towns.set(town, { originalName: townStr, cost });
        }


    }
    let sortedCountries = Array.from(result.values())
      .sort((a, b) => a.originalName.localeCompare(b.originalName));

    for(let countryData of sortedCountries) {

        let sortedTowns = Array.from(countryData.towns.values())
            .sort((a, b) => a.cost - b.cost)
            .map(t => `${t.originalName} -> ${t.cost}`)
            .join(' ');
        
        console.log(`${countryData.originalName} -> ${sortedTowns}`)
    }

}
travelTime([
"Bulgaria > Sofia > 500",
"Bulgaria > Sopot > 800",
"France > Paris > 2000",
"Albania > Tirana > 1000",
"Bulgaria > Sofia > 200"
])