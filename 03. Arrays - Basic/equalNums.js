function equalNums(arr) {
    let isFound = false;
    for (let i = 0; i < arr.length; i++) {
        let sumRight = 0;
        let sumLeft = 0;
        

        for (let j = 0; j < i; j++) {
            let numLeft = arr[j];
            sumLeft += numLeft;
        }
        for (let k = i + 1; k < arr.length; k++) {
            let numRight = arr[k];
            sumRight += numRight
        }

        if (sumLeft === sumRight) {
            console.log(i);
            isFound = true;
            break;
        }
    }
    if (!isFound) {
        console.log('no')
    }

}
equalNums()