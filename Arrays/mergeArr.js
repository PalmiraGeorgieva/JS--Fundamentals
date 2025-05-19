function mergeArr(arr1, arr2) {
    let arr3 = [];

    for(let i = 0; i < arr1.length; i++) {
        let firstEl = arr1[i];
        let secEl = arr2[i];

        if (i % 2 === 0) {
            let sum = Number(firstEl) + Number(secEl)
            arr3.push(sum)

        } else {
            let conctenate = firstEl + secEl
            arr3.push(conctenate)
        }
    }
    console.log(arr3.join(' - '))
}
mergeArr(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']
    )