function binaryToDecimal(binary) {
    let decimal = 0;
    for (let i = 0; i < binary.length; i++) {
        let bit = Number(binary[binary.length - 1 -i]);
        decimal += bit * Math.pow(2, i);
    }
    console.log(decimal)
    
}
binaryToDecimal('00001001')
