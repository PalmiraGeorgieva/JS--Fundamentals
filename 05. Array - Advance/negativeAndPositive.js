function negativeAndPositive(arr1) {
    let newArr = [];

    for(let i = 0; i < arr1.length; i++) {
        let currEl = arr1[i];
        if(currEl < 0) {
            newArr.unshift(currEl)
        } else {
            newArr.push(currEl)
        }
    }
    console.log(newArr.join('\n'))

}
negativeAndPositive(['7', '-2', '8', '9'])