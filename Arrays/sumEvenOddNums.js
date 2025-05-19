function sumEvenOddNums(input) {
    let sumEven = 0
    let sumOdd = 0
    let difference = 0
    for(let i = 0; i < input.length; i++) {
        let currNum = Number(input[i]);

        if (currNum % 2 === 0) {
            sumEven += currNum

        }
        
        if(currNum % 2 !== 0) {
            sumOdd += currNum
        }

        difference = sumEven - sumOdd
    }
    console.log(difference)
}
sumEvenOddNums([1,2,3,4,5,6])