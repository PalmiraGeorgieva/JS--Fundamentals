function addAndSubt(num1, num2, num3) {
    const sum = (x, y) => x + y;
    const subtract = (x, y) => x - y;
    let sumNums = sum(num1, num2);
    let subtractNums = subtract(sumNums, num3);
    console.log(subtractNums)

}
addAndSubt(23,
6,
10
)