function computerStore(input) {
    let index = 0;
    let command = input[index];
    let taxes = 0.20
    let totalWithoutTax = 0;


    while(command !== "special" && command !== "regular") {
        let price = Number(command)

        if (price < 0) {
            console.log(`Invalid price!`)
        
        } else {
            totalWithoutTax += price;  

        }
        index++;
        command = input[index];
        
    } 
    let totalTaxes = totalWithoutTax * taxes;
    let totalPriceWithTax = totalWithoutTax + totalTaxes;

    if (totalWithoutTax == 0) {
        console.log(`Invalid order!`);
        return;
    }
     
    if(command === "special"){ 
        totalPriceWithTax *= 0.90
    } 

    console.log("Congratulations you've just bought a new computer!")
    console.log(`Price without taxes: ${totalWithoutTax.toFixed(2)}$`)
    console.log(`Taxes: ${totalTaxes.toFixed(2)}$`)
    console.log(`-----------`)
    console.log(`Total price: ${totalPriceWithTax.toFixed(2)}$`)
    

}
computerStore(['1050',
'200',
'450',
'2',
'18.50',
'16.86',
'special']
)