function reverseArray(n, arr) {
    let newArr = [];
    for (let i = 0; i < n; i++) {
        newArr[i] = arr[i]

    }
    let reversedArr = []
    for (let i = newArr.length - 1; i >= 0;  i--) {
       reversedArr[reversedArr.length] = newArr[i]
    }
    console.log(reversedArr.join(" "))
    
}
reverseArray(3, [10, 20, 30, 40, 50])