function printAndSum(startNum, endNum) {
    let sum = 0
    let result = ""

    for (let i = startNum; i <= endNum;i++) {
        result += i + " "
        sum += i 

    }
    console.log(result)
    console.group(`Sum: ${sum}`)
}
printAndSum(5, 10)