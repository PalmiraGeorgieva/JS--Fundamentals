function sumEvenNums(input) {
    let sum = 0
    for (let i = 0; i < input.length; i++) {
        let currNums = Number(input[i]);

        if(currNums % 2 === 0) {
            sum += currNums

        }
    }
    console.log(sum)

}
sumEvenNums(['1','2','3','4','5','6'])
