function numbers(data) {
    let sequence = data.split(' ').map(Number)
    let sum = 0;
    for (let i = 0; i < sequence.length; i++) {
        sum += sequence[i]
        
        

    }
    let avg = sum / sequence.length;
    
    let allAbove = [];

    for(let i = 0; i < sequence.length; i++) {
        if(sequence[i] > avg) {
            allAbove.push(sequence[i])
        }
    }
    allAbove.sort((a, b) => b - a)

    let top5 = allAbove.slice(0, 5);

    if(top5.length === 0) {
        console.log(`No`)
    } else {
        console.log(top5.join(' '))
    }


    
}
numbers('10 20 30 40 50')
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51')