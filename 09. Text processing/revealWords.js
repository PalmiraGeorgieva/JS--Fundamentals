function revealWords(text, template){
    let searchedWordStr = text.split(', ');
    let searchedWord = {};

    for (let word of searchedWordStr) {
        let key = '*'.repeat(word.length);
        searchedWord[key] = word;
    }
    let sentence = template.split(' ');
    for(let i = 0; i < sentence.length; i++) {
        let currWord = sentence[i];
        if(searchedWord.hasOwnProperty(currWord)) {
            sentence[i] = searchedWord[currWord]
        }
    }
    console.log(sentence.join(' '))

}
revealWords('great',
'softuni is ***** place for learning new programming languages')