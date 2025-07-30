/*
First, you start with the letter before the number:
    • If it's uppercase you divide the number by the letter's position in the alphabet
    • If it's lowercase you multiply the number with the letter's position in the alphabet
Then you move to the letter after the number:
    • If it's uppercase you subtract its position from the resulted number
    • If it's lowercase you add its position to the resulted number */

function letterChange(str) {
    let words = str.split(' ').filter(word => word !== '');
    let totalSum = 0;

    for(let word of words) {
        let firstLetter = word[0];
        let lastLetter = word[word.length - 1];
        let number = Number(word.slice(1, -1));


        let firstInd = firstLetter.toLowerCase().charCodeAt(0) - 96;
        let lastInd = lastLetter.toLowerCase().charCodeAt(0) - 96;

        if(firstLetter === firstLetter.toUpperCase()) {
            Math.trunc(number /= firstInd);
        } else  {
            number *= firstInd;
        }

        if(lastLetter === lastLetter.toUpperCase()) {
            number -= lastInd;
        }else {
            number += lastInd;
        }
        totalSum += number
    }
    console.log(totalSum.toFixed(2))

}
letterChange('P34562Z q2576f   H456z')