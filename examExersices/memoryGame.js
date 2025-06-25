function memoryGame(data) {
    let sequence = data.shift().split(' ');
    let moveCounts = 1;

    let  command = data.shift();

    while(command !== 'end') {
        let tokens = command.split(' ');

        let index1 = Number(tokens.shift());
        let index2 = Number(tokens.shift());

        if(
            index1 === index2 ||
            (index1 < 0 || index1 >= sequence.length) ||
            (index2 < 0 || index2 >= sequence.length)
        ) {
            let newItem = `-${moveCounts}a`;
            let middleIndex = Math.floor(sequence.length / 2);
            sequence.splice(middleIndex, 0, newItem, newItem)


            console.log(`Invalid input! Adding additional elements to the board`)
        } else {
            if(sequence[index1] === sequence[index2]) {
                console.log(`Congrats! You have found matching elements - ${sequence[index1]}!`);

                let minIndex = Math.min(index1, index2);
                let maxIndex = Math.max(index1, index2);

                sequence.splice(maxIndex, 1);
                sequence.splice(minIndex, 1);
            } else {
                console.log("Try again!")
            }
        }
        if(sequence.length === 0) {
            console.log(`You have won in ${moveCounts} turns!`);
            return;
        }
        moveCounts++
       command = data.shift() 

    }
    console.log(`Sorry you lose :(`);
    console.log(sequence.join(' '))


}
memoryGame([
"1 1 2 2 3 3 4 4 5 5", 
"1 0",
"-1 0",
"1 0", 
"1 0", 
"1 0", 
"end"
])
memoryGame([
"a 2 4 a 2 4", 
"0 3", 
"0 2",
"0 1",
"0 1", 
"end"
])