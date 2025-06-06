function nonDecreasing(arr1) {
    let result = [];
    let maxNum = arr1[0]
    result.push(maxNum);

    for(let i = 1; i < arr1.length; i++) {
        let curNum = arr1[i];
        if (curNum >= maxNum) {
            result.push(curNum);
            maxNum = curNum
        }
    }
    console.log(result.join(' '))
   
   
    
}
nonDecreasing([ 1, 3, 8, 4, 10, 12, 3, 2, 24])