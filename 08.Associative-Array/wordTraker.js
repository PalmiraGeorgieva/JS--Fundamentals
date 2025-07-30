function solve (data){
    let wordCount = {}
    let searchedWord = data.shift().split(' ')
    

    for (let word of searchedWord) {
        wordCount[word] = 0;
       
    }

    for(let word of data) {
        if(wordCount.hasOwnProperty(word)) {
            wordCount[word]++
        }
    }

    let sortedWords = Object.entries(wordCount).sort((a, b) => b[1] - a[1]);

    for(let [word, count] of sortedWords) {
        console.log(`${word} - ${count}`)
    }

}
solve([
'this sentence', 
'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
])