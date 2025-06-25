function heartDelivery(data) {
    let neigborhood = data.shift().split('@').map(Number);
    let lastIndex = 0
    for (let i = 0; i < data.length; i++) {
        let command = data[i];

        if(command === 'Love!') {
            console.log(`Cupid's last position was ${lastIndex}.`)
            let unhappyHouse = neigborhood.filter(x => x > 0);
            if(unhappyHouse.length > 0) {
                console.log(`Cupid has failed ${unhappyHouse.length} places.`)
            } else {
                console.log(`Mission was successful.`)
            }
            break;
        }

        let jumpParams = command.split(' ');
        let jumpValue = Number(jumpParams[1])

        lastIndex += jumpValue;
        if(lastIndex >= neigborhood.length) {
            lastIndex = 0
        }

        if(neigborhood[lastIndex] === 0) {
            console.log(`Place ${lastIndex} already had Valentine's day.`)
        } else {
            neigborhood[lastIndex] -= 2
            if(neigborhood[lastIndex] === 0) {
                console.log(`Place ${lastIndex} has Valentine's day.`)
            }

        }

        
        
    }

}
heartDelivery((["10@10@10@2",
"Jump 1",
"Jump 2",
"Love!"]))