function train(arr){
    let wagons = arr.shift().split(" ").map(Number);
    let cappacity = Number(arr.shift())
    
    for(let command of arr) {
        if (command.includes('Add')) {
            let tokens = command.split(" ");
            let peopleCount = Number(tokens[1]);
            wagons.push(peopleCount)

        } else {
            let peopleCount = Number(command);

            for(let index in wagons) {
                if (wagons[index] + peopleCount <= cappacity) {
                    wagons[index] += peopleCount;
                    break;
                }
            }

        }
    }
    console.log(wagons.join(' '))

}
train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']	
)