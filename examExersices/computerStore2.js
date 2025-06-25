function computerStore(data) {
    let totalPrice = 0;
    let taxes = 0;
    let totalPriceWithoutTax = 0
    for (let i = 0; i < data.length; i++) {
        let command = data[i];
        if(command === 'special') {
            totalPrice *= 0.90
        }


        if(command === 'regular' || command === 'special' ) {
            break;
        }

        let priceWithoutTax = Number(command)
        if(priceWithoutTax < 0) {
            console.log(`Invalid price!`)
        } else {
            totalPriceWithoutTax += priceWithoutTax
            taxes += priceWithoutTax * 0.20
            totalPrice = totalPriceWithoutTax + taxes

        }
        
        

        
    }
    if(totalPrice === 0) {
      console.log(`Invalid order!`);
          
    } else {
        console.log(`Congratulations you've just bought a new computer!`);
        console.log(`Price without taxes: ${totalPriceWithoutTax.toFixed(2)}$`)
        console.log(`Taxes: ${taxes.toFixed(2)}$`)
        console.log(`-----------`)
        console.log(`Total price: ${totalPrice.toFixed(2)}$`)
    }
        
    



}
computerStore(([
'1050',
'200',
'450',
'2',
'18.50',
'16.86',
'special'
]));
computerStore(([
'regular'
]))