function arrayModifier(data) {
    let initialArray = data.shift().split(' ').map(Number);

    let commands = data.shift()
    while (commands !== 'end') {
        let tokens = commands.split(' ');
        let action = tokens.shift();
        

        if(action === "swap") {
            let firstIndex = Number(tokens.shift());
            let secondIndex = Number(tokens.shift());
            let temp = initialArray[firstIndex];
            initialArray[firstIndex] = initialArray[secondIndex];
            initialArray[secondIndex] = temp
                

        } else if (action === "multiply") {
            let firstIndex = Number(tokens.shift());
            let secondIndex = Number(tokens.shift());
            initialArray[firstIndex] = initialArray[firstIndex] * initialArray[secondIndex]

        } else if (action === "decrease") {
            for (let i = 0; i < initialArray.length; i++) {
                initialArray[i] -= 1;
            }

        }


        commands = data.shift()
    
    }
    console.log(initialArray.join(', '))

}
arrayModifier( [
  '23 -2 321 87 42 90 -123',
  'swap 1 3',
  'swap 3 6',
  'swap 1 0',
  'multiply 1 2',
  'multiply 2 1',
  'decrease',
  'end'
])