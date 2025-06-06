function maxNum(arr) {
    let arr2 = []

    for (let i = 0; i < arr.length; i++) {
       let currNum = arr[i]
       let isTop = true;
        
        for (let j = i + 1; j < arr.length; j++) {
            let rightNum = arr[j]

            if (rightNum >= currNum) {
                isTop = false;
                break;
            }

        }

        if(isTop) {
            arr2.push(currNum)
        }
    }
    console.log(arr2.join(' '))
}
maxNum([1, 4, 3, 2])