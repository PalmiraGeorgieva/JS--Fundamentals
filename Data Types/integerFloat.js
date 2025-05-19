function integerFloat(num1, num2, num3) {
    let sum = num1 + num2 + num3
    let sumString = `${sum}`;

    let isFloat = false;
    for (let i = 0; i < sumString.length; i++) {
        if (sumString[i] === ".") {
            isFloat = true;
            break;
        }
    }

    const output = isFloat ? "Float" : "Integer";
    console.log(`${sum} - ${output}`)

}
integerFloat(9, 100, 1.1)