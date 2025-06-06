function inventory(data) {
    let myInventory = data.shift().split(', ');
    let index = 0;
    let command = data[index];
    index++;

    while(command !== "Craft!"){
        let element = command.split(" - ");
        let action = element[0];
        let item = element[1]
        switch(action){
            case "Collect":
                if(!myInventory.includes(item)){
                    myInventory.push(item)
                }
                break;
            case "Drop":
                myInventory = myInventory.filter((el) => el !== item)
                break;
            case "Combine Items":
                let [oldItem, newItem] = item.split(":");
                let indexOldItem = myInventory.indexOf(oldItem);

                if(indexOldItem !== -1) {
                    myInventory.splice(indexOldItem + 1, 0, newItem)
                }

                break;
            case "Renew":
                let indexEl = myInventory.indexOf(item);

                if(indexEl !== -1) {
                    let currentItem = myInventory.splice(indexEl, 1);
                    myInventory.push(currentItem[0])
                }
                break;            
        }
        command = data[index];
        index++;
    }
    console.log(myInventory.join(', '))

}
inventory([
  'Iron, Wood, Sword', 
  'Collect - Gold', 
  'Drop - Wood', 
  'Craft!'
]
)
inventory([
  'Iron, Sword',
  'Drop - Bronze',
  'Combine Items - Sword:Bow',
  'Renew - Iron',
  'Craft!'
]
)