function shootTheTarget(data) {
    let sequence = data.shift().split(' ').map(Number)

    let command = data.shift();
    while(command !== 'End') {
        let target = Number(command);

        if (target >= 0 && target < sequence.length && sequence[target] !== -1) {
            let shotValue = sequence[target];
            sequence[target] = -1;

            for(let i = 0; i < sequence.length; i++) {
                if(sequence[i] === -1) {
                    continue;
                }

                if(sequence[i] > shotValue) {
                    sequence[i] -= shotValue
                } else {
                    sequence[i] += shotValue
                }
            }
        }

        command = data.shift()
    }
    let shotCount = sequence.filter(t => t === -1).length;
    console.log(`Shot targets: ${shotCount} -> ${sequence.join(' ')}`)
}
shootTheTarget((["30 30 12 60 54 66",
"5",
"2",
"4",
"0",
"End"])

)