function activationKey(data) {
    let index = 0;
    let keys = data[index];
    index++;

    let command = data[index];
    index++;

    while(command !== "Generate"){
        let [action, ...res] = command.split('>>>');

        switch(action){
            case "Contains":
                let substr = res[0];
                if(keys.includes(substr)) {
                    console.log(`${keys} contains ${substr}`)

                }else {
                    console.log(`Substring not found!`)

                }
                break;
            case "Flip":
                let upperOrLower = res[0];
                let firstIndex = Number(res[1]);
                let secondIndex = Number(res[2]);
                let firstPart = keys.substring(0, firstIndex);
                let secondPart = keys.substring(firstIndex, secondIndex);
                let thirdPart = keys.substring(secondIndex);

                let flippedStr = upperOrLower === 'Upper' ? secondPart.toUpperCase() : secondPart.toLowerCase();
                keys = firstPart + flippedStr + thirdPart
                console.log(keys)
                break; 
            case "Slice":
                let start = Number(res[0]);
                let end = Number(res[1]);
                keys = keys.substring(0, start) + keys.substring(end);
                console.log(keys)
                break;       
        }


      command = data[index];
      index++;
    }
    console.log(`Your activation key is: ${keys}`)

}
activationKey((["abcdefghijklmnopqrstuvwxyz", "Slice>>>2>>>6", "Flip>>>Upper>>>3>>>14", "Flip>>>Lower>>>5>>>7", "Contains>>>def", "Contains>>>deF", "Generate"]))