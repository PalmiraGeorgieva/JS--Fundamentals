function bombNum(sequence, bomb) {
    let [numBomb, power] = bomb;

    while(sequence.includes(numBomb)) {
        let index = sequence.indexOf(numBomb);
        let start = index - power;

        if(start  < 0) {
            start = 0;
        }

        let end = index + power;

        if(end > sequence.length - 1) {
            end = sequence.length - 1
        }
        sequence.splice(start, end - start + 1)

    }
    function sumArr(arr) {
        let result = 0;
        for(let el of arr) {
            result += el
        }
        return result;
    }
    console.log(sumArr(sequence))

}
bombNum([1, 2, 2, 4, 2, 2, 2, 9],
[4, 2])