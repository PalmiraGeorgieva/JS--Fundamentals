function round(number, precision) {
    if (precision > 15) {
        precision = 15;
    }
    let result = number.toFixed(precision);
    result = parseFloat(result);
    console.log(result)

}
round(3.1415926535897932384626433832795,2)