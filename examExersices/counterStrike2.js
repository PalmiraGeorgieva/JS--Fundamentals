function counterStrike(data) {
    let startEnergy = Number(data.shift());
    let countWin = 0;
    let isNotEnougthEnergy = false

    for(let i = 0; i < data.length; i++) {
        let command = data[i];

        if(command === 'End of battle') {
            break;
        }

        let enemyDistance = Number(command);
        
        if(startEnergy < enemyDistance) {
            isNotEnougthEnergy = true
            console.log(`Not enough energy! Game ends with ${countWin} won battles and ${startEnergy} energy`);
            break;
            
        } 
        countWin++
        startEnergy -= enemyDistance

        if(countWin % 3 === 0) {
            startEnergy += countWin
        }

    }
    if(!isNotEnougthEnergy) {
        console.log(`Won battles: ${countWin}. Energy left: ${startEnergy} `)
    }

}
counterStrike(
(["100",
"10",
"10",
"10",
"1",
"2",
"3",
"73",
"10"])
)
counterStrike((["200",
"54",
"14",
"28",
"13",
"End of battle"]))