function sumDigits(num) {
    let sum = 0;
    let numStr = num + '';

    for (let i = 0; i < numStr.length; i++) {
       let currDig = Number(numStr[i]);
       sum += currDig
    }
    console.log(sum)
}
sumDigits(245678)