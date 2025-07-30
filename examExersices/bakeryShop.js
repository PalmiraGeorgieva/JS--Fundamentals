function solve(data) {
    let command = data.shift();
    let bakeryFood = {};
    let totalSold = 0;

    while(command !== 'Complete') {
        let tokens = command.split(' ');
        let action = tokens.shift();
        let foodQuantity = Number(tokens.shift());
        let food = tokens.shift();

        switch(action){
            case 'Receive':
                if(foodQuantity <= 0) {
                    return;
                }

                if(!bakeryFood.hasOwnProperty(food)) {
                    bakeryFood[food] = foodQuantity;

                } else {
                    bakeryFood[food] += foodQuantity
                }
                
                 break;
            case 'Sell':
                if(!bakeryFood.hasOwnProperty(food)) {
                    console.log(`You do not have any ${food}.`)
                } else if(bakeryFood[food] < foodQuantity) {
                    let sold = bakeryFood[food];
                    totalSold += sold;
                    delete bakeryFood[food];
                    console.log(`There aren't enough ${food}. You sold the last ${sold} of them.`)
                } else {
                    bakeryFood[food] -= foodQuantity;
                    totalSold += foodQuantity;
                    console.log(`You sold ${foodQuantity} ${food}.`);
                    
                    if(bakeryFood[food] === 0) {
                        delete bakeryFood[food];
                    }

                }
                 break;      
        }
        command = data.shift()

    }
   

    for(let [food, quantity] of Object.entries(bakeryFood)) {
        console.log(`${food}: ${quantity}`);
        
    }
    console.log(`All sold: ${totalSold} goods`)

}
solve(['Receive 105 cookies',
'Receive 10 donuts',
'Sell 10 donuts',
'Sell 1 bread',
'Complete'])