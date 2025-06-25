function muOnline(data) {
    let rooms = data.split('|');
    let health = 100;
    let coins = 0;

    for(let i = 0; i < rooms.length; i++) {
        let tokens = rooms[i].split(' ');
        let item = tokens[0];
        let value = Number(tokens[1]);

        if(item === 'potion') {
            if(health + value > 100) {
                value = 100 - health
            }
            health += value
            console.log(`You healed for ${value} hp.`)
            console.log(`Current health: ${health} hp.`)

        } else if(item === 'chest') {
            coins += value;
            console.log(`You found ${value} bitcoins.`)

        } else { //monster
            health -= value
            if(health > 0) {
                console.log(`You slayed ${item}.`)

            } else {
                console.log(`You died! Killed by ${item}.`)
                console.log(`Best room: ${i + 1}`);
                return;

            }

        }
    }
    console.log(`You've made it!`);
    console.log(`Bitcoins: ${coins}`);
    console.log(`Health: ${health}`)

}
muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000")