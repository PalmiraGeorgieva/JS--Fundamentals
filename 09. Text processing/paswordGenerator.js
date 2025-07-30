function passwordGenerator(data) {
    let firstWord = data[0];
    let secondWord = data[1];
    let thirdStr = data[2];

    let concatenatedWord = (firstWord + secondWord).toLowerCase();
    let replaced = '';
    let thirdInd = 0;

    for(let i = 0; i < concatenatedWord.length; i++) {
        let currLetter = concatenatedWord[i];

        if(currLetter === 'a' || currLetter === 'o' || currLetter === 'i'
             || currLetter ==='e' || currLetter === 'u') {
                let replacement = thirdStr[thirdInd % thirdStr.length].toUpperCase();
                replaced += replacement;
                thirdInd++;

        } else {
            replaced += currLetter;
        }
    }
    let password = replaced.split('').reverse().join('');
    console.log(`Your generated password is ${password}`)

}
passwordGenerator([
'ilovepizza', 'ihatevegetables',
'orange'
])