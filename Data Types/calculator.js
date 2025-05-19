function calculator(num1, operator, num2) {
    let firstNum = Number(num1);
    let secondNum = Number(num2);
    let result = 0;

    switch(operator) {
        case '+':
            result = firstNum + secondNum
            break;
        case '-':
            result = firstNum - secondNum;
            break;
        case '*': 
           result = firstNum * secondNum;
           break;
        case '/':
            result = firstNum / secondNum;
            break;           
    }
    console.log(result.toFixed(2))

}
calculator(25.5,
    '-',
    3
    )