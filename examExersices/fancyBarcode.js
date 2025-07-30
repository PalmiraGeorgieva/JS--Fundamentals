function solve(data){
    let countBarcode = Number(data.shift());
    let pattern = /@#+[A-Z][a-zA-Z0-9]{4,}[A-Z]@#+/
    let digits = /\d/g
    for (let i = 0; i < countBarcode; i++){
        let barcode = data[i]
       

        if(pattern.test(barcode)) {
            let allDigitMatches = barcode.match(digits);
            let result = 'Product group: ';
            if(allDigitMatches !== null){
                result += allDigitMatches.join('')
            } else {
                result += '00'
            }
            console.log(result)

        } else {
            console.log('Invalid barcode')

        }

    }

}
solve(["3",

"@#FreshFisH@#",

"@###Brea0D@###",

"@##Che4s6E@##"])