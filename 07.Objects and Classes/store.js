function store(arr1, arr2) {
    let storeObj = {};
    for(let i = 0; i < arr1.length; i += 2) {
        let product = arr1[i];
        let qty = Number(arr1[i + 1]);
        storeObj[product] = qty
    }

    for (let i = 0; i < arr2.length; i += 2) {
        let  product = arr2[i];
        let qty = Number(arr2[i + 1])

        if(storeObj.hasOwnProperty(product)) {
            storeObj[product] += qty;
        } else {
            storeObj[product] = qty
        }
    
    }

    for(let product in storeObj) {
        console.log(`${product} -> ${storeObj[product]}`)
    }

}
store([
'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
[
'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
])