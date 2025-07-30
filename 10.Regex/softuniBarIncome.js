function softuniBar(input) {
    let pattern = /%([A-Z][a-z]+)%[^|$%.]*<(\w+)>[^|$%.]*\|(\d+)\|[^|$%.]*?(\d+(\.\d+)?)\$/;
    let totalIncome = 0;

    for(let line of input) {
        if(line === 'end of shift') break;

        let match = pattern.exec(line);
        if(match) {
            let customer = match[1];
            let product = match[2];
            let count = Number(match[3]);
            let price = Number(match[4]);
            let totalPrice = count * price;
            console.log(`${customer}: ${product} - ${totalPrice.toFixed(2)}`);
            totalIncome += totalPrice
        }
    }
    console.log(`Total income: ${totalIncome.toFixed(2)}`)
     

}
softuniBar(['%George%<Croissant>|2|10.3$',
'%Peter%<Gum>|1|1.3$',
'%Maria%<Cola>|1|2.4$',
'end of shift'])
softuniBar(['%InvalidName%<Croissant>|2|10.3$',
'%Peter%<Gum>1.3$',
'%Maria%<Cola>|1|2.4',
'%Valid%<Valid>valid|10|valid20$',
'end of shift'])