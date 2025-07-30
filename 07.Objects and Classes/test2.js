function towns(data) {
    

    for(let entry of data) {
        let tokens = entry.split(' | ');
        let townName = tokens[0];
        let lat = Number(tokens[1]).toFixed(2);
        let long = Number(tokens[2]).toFixed(2);

        let townInfo = {
            town: townName,
            latitude: lat,
            longitude: long
        };

        console.log(townInfo)

    }
  


}
towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625'])