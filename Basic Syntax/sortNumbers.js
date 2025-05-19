function sortNumbers(num1, num2, num3) {
    let numbers = [num1, num2, num3];
    numbers.sort((x, y) => y -x);

    for(let num of numbers) {
        console.log(num)
    }

}
sortNumbers(2, 1, 3)