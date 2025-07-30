function solve(data) {
    let cataloge = {};

    for(let elm of data) {
        let tokens = elm.split(' : ');
        let product = tokens[0];
        let price = tokens[1];
        let firstLetter = product[0]

       if(!cataloge[firstLetter]) {
        cataloge[firstLetter] = []
       }
       cataloge[firstLetter].push({ product, price: Number(price) })
    }

    let sortedLetters = Object.keys(cataloge).sort();

    for(let letter of sortedLetters) {
        console.log(letter);

        let items = cataloge[letter].sort((a, b) => a.product.localeCompare(b.product));

        for(let item of items) {
            console.log(` ${item.product}: ${item.price}`)
        }
    }

}
solve([
'Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10'
])