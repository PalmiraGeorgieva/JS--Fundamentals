function pianist(data) {
    let pieceCount = Number(data.shift());
    let pieceInfo = {}

    for(let currentPiece = 1; currentPiece <= pieceCount; currentPiece++){
        let [piece, composer, key] = data.shift().split('|');
        pieceInfo[piece] = { composer, key }

    }
    let command = data.shift();

    while(command !== 'Stop') {
        let tokens = command.split('|');
        let action = tokens.shift();
        let piece = tokens.shift();

        switch(action) {
            case "Add":
                let [composer, key] = tokens

                if(piece in pieceInfo) {
                    console.log(`${piece} is already in the collection!`);
                } else {
                    pieceInfo[piece] = { composer, key };
                    console.log(`${piece} by ${composer} in ${key} added to the collection!`)
                }
                 break;
            case "Remove":
                if(piece in pieceInfo) {
                    delete pieceInfo[piece];
                    console.log(`Successfully removed ${piece}!`)
                } else {
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`)
                }
                 break;
            case "ChangeKey":
                let newKey = tokens.shift();

                if(piece in pieceInfo) {
                    pieceInfo[piece].key = newKey;
                    console.log(`Changed the key of ${piece} to ${newKey}!`)
                } else {
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`)
                }
                 break;
        }

        command = data.shift()
    }
    let entries = Object.entries(pieceInfo)
    for(let [pieceTitel, detailsObj] of entries) {
        console.log(`${pieceTitel} -> Composer: ${detailsObj.composer}, Key: ${detailsObj.key}`)

    }

}
pianist([

'3',
'Fur Elise|Beethoven|A Minor',
'Moonlight Sonata|Beethoven|C# Minor',

'Clair de Lune|Debussy|C# Minor',

'Add|Sonata No.2|Chopin|B Minor',

'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',

'Add|Fur Elise|Beethoven|C# Minor',

'Remove|Clair de Lune',

'ChangeKey|Moonlight Sonata|C# Major',

'Stop'

])