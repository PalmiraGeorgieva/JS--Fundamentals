function equalArrays(arr1, arr2) {
    let sum = 0
    let isEqual = true
    for (let i = 0; i < arr1.length; i++) {
        let currNums = Number(arr1[i])
        let currNums2 = Number(arr2[i])

        if(currNums === currNums2) {
            sum += currNums
        } else {
            isEqual = false;
            console.log(`Arrays are not identical. Found difference at ${i} index`)
            break;
        }
    }
    if (isEqual) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}
equalArrays(['1','2','3','4','5'], ['1','2','4','4','5'])