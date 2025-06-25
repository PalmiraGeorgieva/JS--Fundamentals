function shoppingList(data) {
    let list = data.shift().split('!');

    let command = data.shift();

    while (command !== "Go Shopping!") {
        let tokens = command.split(' ');
        let commands = tokens.shift();
        let item = tokens.shift();


        switch(commands) {
            case "Urgent": 
             if(!list.includes(item)) {
             list.unshift(item)

           }
           break;
           case "Unnecessary":
            let index = list.indexOf(item);
            if(index !== -1) {
                list.splice(index, 1)
            }
             
            break;
          case "Correct": 
          let newItem = tokens.shift();

          let indexNew = list.indexOf(item)

          if(indexNew !== -1) {
            list.splice(indexNew, 1, newItem)
          }
          
          break;
          case "Rearrange":
            let newIndex = list.indexOf(item);

            if(newIndex !== -1) {
                list.splice(newIndex, 1);
                list.push(item)
            }

           break;
        }


        command = data.shift()
    }
    console.log(list.join(', '))


    
}
shoppingList(["Tomatoes!Potatoes!Bread",
"Unnecessary Milk",
"Urgent Tomatoes",
"Go Shopping!"])
console.log(`-----------`)
shoppingList((["Milk!Pepper!Salt!Water!Banana",
"Urgent Salt",
"Unnecessary Grapes",
"Correct Pepper Onion",
"Rearrange Grapes",
"Correct Tomatoes Potatoes",
"Go Shopping!"]))