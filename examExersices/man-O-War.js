function manOWar(data) {
    let pirateShip = data.shift().split('>').map(Number);
    let warShip = data.shift().split('>').map(Number);
    let maxHealth = Number(data.shift())
    let criticalHealt = maxHealth * 0.2
    let command = data.shift();

    while(command !== "Retire") {
        let tokens = command.split(' ');
        let action = tokens.shift();
        

        switch(action) {
            case "Fire":
                let index = Number(tokens[0]);
                let damage = Number(tokens[1]);

                if(warShip[index]) {
                    if(warShip[index] - damage  < 0) {
                        warShip[index] = 0

                   } else {
                    warShip[index] -= damage
                   }
                }

                if(warShip.includes(0)) {
                    console.log(`You won! The enemy ship has sunken.`);
                    return;
                }
                break;
            case "Defend":
                let startIndex = Number(tokens[0]);
                let endIndex = Number(tokens[1]);
                let pirateShipDmg = Number(tokens[2]);

                if(pirateShip[startIndex] && pirateShip[endIndex]) {
                    for(let i = startIndex; i <= endIndex; i++) {
                        if(pirateShip[i] - pirateShipDmg <= 0) {
                            pirateShip[i] = 0;
                        } else {
                            pirateShip[i] -= pirateShipDmg
                        }
                    }
                }

                if(pirateShip.includes(0)) {
                    console.log("You lost! The pirate ship has sunken.");
                    return
                }
                break;
            case "Repair":
                let repairIndex = Number(tokens[0]);
                let health = Number(tokens[1]);

                if(pirateShip[repairIndex]) {
                    if(pirateShip[repairIndex] + health > maxHealth) {
                        pirateShip[repairIndex] = maxHealth
                    } else {
                        pirateShip[repairIndex] += health
                    }
                }
                break;
            case "Status":
                let allRepairSections = pirateShip.filter(s => s < criticalHealt);

                console.log(`${allRepairSections.length} sections need repair.`)
                break;            
        }

        command = data.shift()
    }
    let pirateShipStatus = 0;
    for(let ship of pirateShip) {
        pirateShipStatus += ship
    }


    let warShipStatus = 0;
    for(let ship of warShip) {
        warShipStatus += ship
    }

    console.log(`Pirate ship status: ${pirateShipStatus}`);
    console.log(`Warship status: ${warShipStatus}`)
}
manOWar((["12>13>11>20>66", 
    "12>22>33>44>55>32>18",
    "70", 
    "Fire 2 11", 
    "Fire 8 100", 
    "Defend 3 6 11", 
    "Defend 0 3 5", 
    "Repair 1 33", 
    "Status", 
    "Retire"]))