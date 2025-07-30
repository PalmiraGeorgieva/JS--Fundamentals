function pascalCase(str) {
    let result = [];
    let wordsStart = 0;

    for(let i = 1; i < str.length; i++) {
        if(str[i] >= 'A' && str[i] <= 'Z') {
            result.push(str.slice(wordsStart, i))
            wordsStart = i;
        }

    }
    result.push(str.slice(wordsStart))
    console.log(result.join(', '))

}
pascalCase('SplitMeIfYouCanHaHaYouCantOrYouCan')