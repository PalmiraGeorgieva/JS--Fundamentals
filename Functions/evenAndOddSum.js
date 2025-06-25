/* function evenOddNum(num) {
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
evenOddNum(1000435) */

function solve(n) {
    function extractEven(num) {
        let result = [];
        do {
           let lastNum = num % 10;
           if(lastNum % 2 === 0) {
            result.push(lastNum);
           }
           num = parseInt(num / 10);
        } while (num > 0);
        return result
    }
    function extractOdd(num) {
        let result = [];
        do {
            let lastNum = num % 10;
            if(lastNum % 2 > 0) {
                result.push(lastNum)
            }
            num = parseInt(num / 10)

        } while(num > 0)
        return result
    }

    function sumArr(arr) {
        let result = 0;
        for (let i = 0; i < arr.length; i++) {
            result += arr[i]
        }
        return result;
    }
    let odd = extractOdd(n);
    let even = extractEven(n);
    let oddSum = sumArr(odd);
    let evenSum = sumArr(even);
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
}    
solve(1000435)