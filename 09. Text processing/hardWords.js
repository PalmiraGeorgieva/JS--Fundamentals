function hardWord(data){
    let textStr = data[0];
    let wordArr = data[1];

    let textArr = textStr.split(' ')
    for(let i = 0; i < textArr.length; i++) {
        let currWord = textArr[i]

        let wordOnly = currWord;
        let punctuation = '';

        if(currWord.endsWith('.') || currWord.endsWith(',') || currWord.endsWith('!')) {
            punctuation = currWord.slice(-1);
            wordOnly = currWord.slice(0, -1)
        }

        if(wordOnly.includes('_')) {
            let correctWord = wordArr.find(w => w.length === wordOnly.length);
            textArr[i] = correctWord + punctuation;

            wordArr.splice(wordArr.indexOf(correctWord), 1)
        }
    
    }
    console.log(textArr.join(' '))
    
}
hardWord(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']])