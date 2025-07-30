function hardWordReg(data){
    let text = data[0];
    let words = data[1];
    let pattern = /(_+)/g;

    let repalcedText = text.replace(pattern, (match) => {
        let correctWord = words.find(w => match.length === w.length);
        if(correctWord) {
            words.splice(words.indexOf(correctWord), 1);
            return correctWord;

        }
        return match;
    })
    console.log(repalcedText)
    


}
hardWordReg(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']])