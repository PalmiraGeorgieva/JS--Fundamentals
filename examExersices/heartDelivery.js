function heartDelivery(data) {
    let neighbordhood = data.shift().split('@').map(Number);
    let command = data.shift();
    let position = 0;

    while(command !== "Love!") {
        let tokens = command.split(' ');
        let index = Number(tokens[1]);
        position += index;

        if(position >= neighbordhood.length) {
             position = 0
        }

        if(neighbordhood[position] === 0) {
            console.log(`Place ${position} already had Valentine's day`)

        } else {
            neighbordhood[position] -= 2;

           if(neighbordhood[position] === 0) {
            console.log(`Place ${position} has Valentine's day.`)

           }
        }


        command = data.shift()
    }
    console.log(`Cupid's last position was ${position}`)

    let failedPlace = neighbordhood.filter(x => x > 0).length;

    if(failedPlace === 0) {
        console.log('Mission was successful')
    } else {
        console.log(`Cupid has failed ${failedPlace} places`)

    }

}
heartDelivery((["10@10@10@2",
"Jump 1",
"Jump 2",
"Love!"]))