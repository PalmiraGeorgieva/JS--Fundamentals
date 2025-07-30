function censoredWord(text, word) {
    let replacement = word.length;
    let replacedWord = '*'.repeat(replacement)

    
    while(text.includes(word)) {
        text = text.replace(word, replacedWord)
    }
    console.log(text)

}
censoredWord('A small sentence with some words', 'small')