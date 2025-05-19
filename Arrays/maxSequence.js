function maxSequence(arr1) {
    let longestSequence = [];
    let currSequence = [arr1[0]];

    for (let i = 1; i < arr1.length; i++) {
        let curNum = arr1[i];

        if(curNum === currSequence[0]) {
            currSequence.push(curNum);

            if(currSequence.length > longestSequence.length) {
                longestSequence = currSequence
            }
        } else {
            currSequence = [curNum]
        }
    }
    console.log(longestSequence.join(' '))
}
maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])