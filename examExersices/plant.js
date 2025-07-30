function solve(arr) {
    let plantMap = {}
    let num = Number(arr.shift());

    for(let currPlant = 1; currPlant <= num; currPlant++){
        let[plant, rarity] = arr.shift().split('<->')
        rarity = Number(rarity);

        if(plant in plantMap) {
            plantMap[plant].rarity = rarity
        } else {
            plantMap[plant] = { rarity: rarity, ratings: [] }
        }
    }

    let command = arr.shift();
    while(command !== 'Exhibition') {
        let[action, plantInfo] = command.split(': ');
        let[plantName, value] = plantInfo.split(' - ');

        switch(action) {
            case 'Rate':
                if(plantName in plantMap) {
                    plantMap[plantName].ratings.push(Number(value))

                } else {
                    console.log('error')
                }
               
                break;
            case 'Update':
                 if(plantName in plantMap) {
                    plantMap[plantName].rarity = Number(value)
                } else {
                    console.log(`error`)
                }
                break;    
            case 'Reset':
                if(plantName in plantMap) {
                    plantMap[plantName].ratings = []
                } else {
                    console.log(`error`)
                }

                break;    
        }

        command = arr.shift()
    }
    console.log(`Plants for the exhibition:`)

    let entries = Object.entries(plantMap);

    for(let [plantName, { rarity, ratings }] of entries) {
        let rateSum = 0;
        

        for(let rating of ratings) {
            rateSum += rating;
            
        }
        let avgRate = ratings.length === 0 ? 0 : rateSum / ratings.length


        console.log(`- ${plantName}; Rarity: ${rarity}; Rating: ${avgRate.toFixed(2)}`)

    }

}
solve((["3",
"Arnoldii<->4",
"Woodii<->7",
"Welwitschia<->2",
"Rate: Woodii - 10",
"Rate: Welwitschia - 7",
"Rate: Arnoldii - 3",
"Rate: Woodii - 5",
"Update: Woodii - 5",
"Reset: Arnoldii",
"Exhibition"]))