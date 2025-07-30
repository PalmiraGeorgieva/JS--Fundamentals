function solve(data) {
    let map = new Map();
    
    for(let el of data) {
        let tokens = el.split(' ');
        let product = tokens[0];
        let price = Number(tokens[1]);

        if(!map.has(product)) {
            map.set(product, +price);
        } else {
            let currPrice = map.get(product);
            let newPrice = currPrice += price;
            map.set(product, newPrice)
        }
    }
    for(let product of map) {
        console.log(`${product[0]} -> ${product[1]}`)
    }

}
solve(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40'])