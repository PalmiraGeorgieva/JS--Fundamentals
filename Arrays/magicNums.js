function magicSum(arr1, num) {
    for (let i = 0; i < arr1.length; i++) {
        for (let j = i + 1; j < arr1.length; j++) {
            let sum = arr1[i] + arr1[j];
            if (sum === num) {
                console.log(`${arr1[i]} ${arr1[j]}`)
            }
        }
    }
}
magicSum([1, 7, 6, 2, 19, 23],
8
)