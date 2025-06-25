function taxCalculator(data) {
    let startArr = data[0].split(">>");
    let totalTax = 0;
    
    
    for(let i = 0; i < startArr.length; i++) {
        let tokens = startArr[i].split(' ')
        let typeCar = tokens[0];
        let yearCar = Number(tokens[1]);
        let kmCar = Number(tokens[2]);
        let tax = 0;

        if(typeCar === "family") {
             tax = Math.floor((kmCar / 3000)) * 12 + (50 - yearCar * 5)
        } else if (typeCar === "heavyDuty") {
            tax = Math.floor((kmCar / 9000)) * 14 + (80 - yearCar * 8)
                
        } else if(typeCar === "sports") {
            tax = Math.floor((kmCar / 2000)) * 18 + (100 - yearCar * 9)

        } else {
            console.log(`Invalid car type.`);
            continue;
        }
        

        console.log(`A ${typeCar} car will pay ${tax.toFixed(2)} euros in taxes.`)
        totalTax += Number(tax)
    }
    console.log(`The National Revenue Agency will collect ${totalTax.toFixed(2)} euros in taxes.`)

}
taxCalculator(([ 
    'family 3 7210>>van 4 2345>>heavyDuty 9 31000>>sports 4 7410' 
]))