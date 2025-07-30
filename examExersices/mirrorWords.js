function mirrorWord(data){
    let text = data[0];
    let pattern = /([@#])(?<wordA>[A-Za-z]{3,})\1\1(?<wordB>[A-Z-a-z]{3,})\1/g;
    let validWords = [];

    let match = pattern.exec(text);
    let pairs = 0;

    while(match !== null){
        pairs++;
        let wordA = match.groups.wordA;
        let wordB = match.groups.wordB;
        let reversedWord = wordB.split('').reverse().join('');

        if(wordA === reversedWord){
            validWords.push(`${wordA} <=> ${wordB}`)
        }
        match = pattern.exec(text)
    }

    if(pairs > 0){
        console.log(`${pairs} word pairs found!`)
    } else {
        console.log(`No word pairs found!`)
    }

    if(validWords.length > 0) {
        console.log(`The mirror words are:`);
        console.log(validWords.join(', '))
    } else {
        console.log(`No mirror words!`)
    }
    
}
mirrorWord([
'@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
])