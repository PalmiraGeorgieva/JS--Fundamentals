function sumFirstAndLast(arr1) {
    let firstNum = Number(arr1.shift())
    let lastNum = Number(arr1.pop());
    let sum = firstNum + lastNum;
    console.log(sum)
}
sumFirstAndLast(['20', '30', '40'])
sumFirstAndLast(['5', '10'])