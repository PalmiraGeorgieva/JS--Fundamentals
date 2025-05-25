function stringReverce(str) {
    let currStr = String(str);
    let result = ''

    for(let i = currStr.length - 1; i >= 0; i--) {
        let revertStr = currStr[i];
        result += revertStr + '';

    }
    console.log(result)

}
stringReverce('Hello')