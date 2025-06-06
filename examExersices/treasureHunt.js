function treasureHunt(data) {
    let state = data.shift().split('|');
    let index = 0;
    let command = data[index];
    index++;

    while (command !== 'Yohoho!') {
        let currentAction = command.split(" ");
        let action = currentAction.shift();

        switch(action) {
            case "Loot":
                for(let el of currentAction) {
                    if(!state.includes(el)) {
                        state.unshift(el)
                    }
                }
                break;
            case "Drop":
                let position = Number(currentAction[0]);
                if(position < 0 || position > state.length) {
                    command = data[index];
                    index++;
                    continue;
                    
                }

                let elements = state.splice(position, 1);
                state.push(elements)
                break;
            case "Steal":
                let count = Number(currentAction[0])
                let item = state.splice(-count);
                console.log(item.join(', '))
                break;        
        }
        command = data[index];
        index++;
    }
    if(state.length > 0) {
        let sum = 0;
        for(let el of state) {
            sum += el.length
        }
        let avg = sum / state.length

        console.log(`Average treasure gain: ${avg.toFixed(2)} pirate credits.`)

    } else {
        console.log(`Failed treasure hunt.`)
    }


}
treasureHunt((["Gold|Silver|Bronze|Medallion|Cup",
"Loot Wood Gold Coins",
"Loot Silver Pistol",
"Drop 3",
"Steal 3",
"Yohoho!"])
)
treasureHunt((["Diamonds|Silver|Shotgun|Gold",
"Loot Silver Medals Coal",
"Drop -1",
"Drop 1",
"Steal 6",
"Yohoho!"])
)