function towns(data) {
    let result = []

    for(let townArr of data) {
    
        let tokens = townArr.split(' | ');
        let city = {
            'town': tokens[0],
            'latitude': Number(tokens[1]).toFixed(2),
            'longitude': Number(tokens[2]).toFixed(2)

        }
        result.push(city)
    }

    for (let town of result) {
        console.log(town)
    }

}
towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']);
//{ town: 'Sofia', latitude: '42.70', longitude: '23.33' }
//{ town: 'Beijing', latitude: '39.91', longitude: '116.36' }