function evenOddNum(num) {
    let digit = String(num) 
    let sumEven = 0;
    let sumOdd = 0;
    for (let i = 0; i < digit.length; i++) {
        let currEl = Number(digit[i]);
        if(currEl % 2 === 0) {
            sumEven += currEl
        } else {
            sumOdd += currEl;
        }


    }
    console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`)

    
}
evenOddNum(1000435)