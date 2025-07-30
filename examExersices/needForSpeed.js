function solve(data) {
    let n = Number(data.shift());
    let cars = {};

    for(let i = 0; i < n; i++){
        let [carModel, miliage, fuel] = data[i].split('|');
        cars[carModel] = {
            miliage: Number(miliage),
            fuel: Number(fuel)
        }
    }

    data = data.splice(n);

    for(let entry of data) {
        if(entry === 'Stop') break;

        let tokens = entry.split(' : ');
        let command = tokens.shift();
        let carModel = tokens.shift();

        switch(command) {
            case 'Drive':
                let distance = Number(tokens.shift());
                let fuelNum = Number(tokens.shift());

                if(cars[carModel].fuel < fuelNum) {
                    console.log(`Not enough fuel to make that ride`)
                } else {
                    cars[carModel].miliage += distance;
                    cars[carModel].fuel -= fuelNum;
                    console.log(`${carModel} driven for ${distance} kilometers. ${fuelNum} liters of fuel consumed.`)

                    if(cars[carModel].miliage >= 100000) {
                        delete cars[carModel]

                        console.log(`Time to sell the ${carModel}!`)

                    }
                }
                 break;
            case 'Refuel':
                let fuelToAdd = Number(tokens.shift());
                let currFuel = cars[carModel].fuel;
                let addedFuel = Math.min(75 - currFuel, fuelToAdd);
                cars[carModel].fuel += addedFuel;
                console.log(`${carModel} refueled with ${addedFuel} liters`)
                break;
            case 'Revert':
                let kilometers = Number(tokens.shift());
                cars[carModel].miliage -= kilometers;

                if(cars[carModel].miliage < 10000) {
                    cars[carModel].miliage = 10000;

                } else {
                    console.log(`${carModel} mileage decreased by ${kilometers} kilometers`)
                }
                break;         
        }
    }
    for(let car in cars){
        console.log(`${car} -> Mileage: ${cars[car].miliage} kms, Fuel in the tank: ${cars[car].fuel} lt.`)
    }


}
solve([
'3',
'Audi A6|38000|62',
'Mercedes CLS|11000|35',
'Volkswagen Passat CC|45678|5',
'Drive : Audi A6 : 543 : 47',
'Drive : Mercedes CLS : 94 : 11',
'Drive : Volkswagen Passat CC : 69 : 8',
'Refuel : Audi A6 : 50',
'Revert : Mercedes CLS : 500',
'Revert : Audi A6 : 30000',
'Stop'
])