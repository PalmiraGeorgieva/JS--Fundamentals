/*while('End of battle') 
няма достатъчно енергия = 'No enought energy!'
всяка 3та спечелена битка - increase energy*/
function counterStrike(data) {
    let startEnergy = Number(data.shift());
    let index = 0;
    let command = data[index];
    index++;

    let count = 0;
    let isNotEnougthEnergy = false;

    while(command !== "End of battle") {
        let enemy = Number(command);

        if(enemy > startEnergy) {
            isNotEnougthEnergy = true;
            console.log(`Not enough energy! Game ends with ${count} won battles and ${startEnergy} energy`)
            break;
        }
        count++;
        startEnergy -= enemy;

        if(count % 3 === 0) {
            startEnergy += count;
        }

        command = data[index];
        index++;

    }
    if(!isNotEnougthEnergy) {
        console.log(`Won battles: ${count}. Energy left: ${startEnergy}`)
    }

}
counterStrike((["100",
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
"End of battle"])
)