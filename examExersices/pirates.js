function solve(data) {
    let sail = 0;
    let cities = {}

    for(let i = 0; i < data.length; i++){
        let entry = data[i]

        if(entry === 'Sail') {
            sail = i
            break;
        }

        let firstTokens = entry.split('||');
        let cityName = firstTokens[0];
        let population = Number(firstTokens[1]);
        let gold = Number(firstTokens[2]);

        if(cities[cityName]) {
            cities[cityName].population += population;
            cities[cityName].gold += gold
        } else {
            cities[cityName] = {
                population,
                gold
            };
        }

    }

    for(let i = sail; i < data.length; i++) {
        let command = data[i]
        if (command === 'End') {
            break;
        }

        let secondTokes = command.split('=>');

        let commandName = secondTokes[0];

        switch(commandName) {
            case 'Plunder':
                let town = secondTokes[1];
                let people = Number(secondTokes[2])
                let gold = Number(secondTokes[3])

                console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`);

                let city = cities[town];
                city.population -= people;
                city.gold -= gold;

                if(city.population === 0 || city.gold === 0){
                    console.log(`${town} has been wiped off the map!`)

                    delete cities[town]
                }
                 break;
            case 'Prosper':
                let cityName = secondTokes[1];
                let goldStolen = Number(secondTokes[2]);

                if(goldStolen < 0) {
                    console.log(`Gold added cannot be a negative number!`);
                    continue;
                } 
                cities[cityName].gold += goldStolen
                let totalGold = cities[cityName].gold


                console.log(`${goldStolen} gold added to the city treasury. ${cityName} now has ${totalGold} gold.`)
                 break;
        }

    }
    let cityNames = Object.keys(cities);
    if(cityNames.length === 0) {
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`)
    } else {
        console.log(`Ahoy, Captain! There are ${cityNames.length} wealthy settlements to go to:`);
        for(let city of cityNames) {
            let towns = cities[city]
            console.log(`${city} -> Population: ${towns.population} citizens, Gold: ${towns.gold} kg`)
        }
    }

}  
solve(
(["Tortuga||345000||1250",

"Santo Domingo||240000||630",

"Havana||410000||1100",

"Sail",

"Plunder=>Tortuga=>75000=>380",

"Prosper=>Santo Domingo=>180",

"End"])
)