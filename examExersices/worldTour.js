function solve(data) {
    let destinationStr = data.shift();
    let command = data.shift();

    while(command !== 'Travel'){
        let tokens = command.split(':');
        let action = tokens.shift();

        switch(action) {
            case "Add Stop":
                let index = Number(tokens.shift());
                let string = tokens.shift();

                if(index >= 0 && index <= destinationStr.length) {
                    destinationStr = destinationStr.slice(0, index) + string + destinationStr.slice(index)
                    
                } 
                break;
            case "Remove Stop":
                let startIndex = Number(tokens.shift());
                let endIndex = Number(tokens.shift());
                if(startIndex >= 0 && startIndex < destinationStr.length 
                    && endIndex >= 0 && endIndex < destinationStr.length 
                    && startIndex <= endIndex){
                        destinationStr = destinationStr.substring(0, startIndex) + destinationStr.substring(endIndex + 1);
                      

                    } 

                break;
            case "Switch":
                let oldString = tokens.shift();
                let newString = tokens.shift();

                if(destinationStr.includes(oldString)) {
                    destinationStr = destinationStr.replace(oldString, newString);
                    
                } 
                break;        
        }
        console.log(destinationStr)


        command = data.shift()
    }
    console.log(`Ready for world tour! Planned stops: ${destinationStr}`)

}
solve((["Albania:Bulgaria:Cyprus:Deuchland",
"Add Stop:3:Nigeria",
"Remove Stop:4:8",
"Switch:Albania: Azərbaycan",
"Travel"]))