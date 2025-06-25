function gladiatorInventory(data) {
    let inventory = data.shift().split(' ');

    for(let command of data) {
        let tokens = command.split(' ');
        let commands = tokens.shift();
        let newItem = tokens.shift();

        if(commands === "Buy") {
            if(!inventory.includes(newItem)){
                inventory.push(newItem)
            }

        } else if(commands === "Trash") {
            let index = inventory.indexOf(newItem)
            if(index !== -1) {
                inventory.splice(index, 1)
            }

        } else if(commands === "Repair") {
            let index = inventory.indexOf(newItem);
            if(index !== -1) {
                inventory.splice(index, 1);
                inventory.push(newItem)
            }
        } else if (commands === "Upgrade") {
            let currItem = newItem.split('-');
            let equipment = currItem.shift();
            let upgrade = currItem.shift();

            let newUpgrade = `${equipment}:${upgrade}`
            let index = inventory.indexOf(equipment);
            if(index !== -1) {
                inventory.splice(index + 1, 0, newUpgrade)
            }
            

        }
    }

    console.log(inventory.join(' '))
}
gladiatorInventory(['SWORD Shield Spear',
'Buy Bag',
'Trash Shield',
'Repair Spear',
'Upgrade SWORD-Steel'])