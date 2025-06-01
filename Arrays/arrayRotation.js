function rotationArr(arr1) {
    let rotation = Number(arr1.pop())

    for (let i = 0; i < rotation; i++) {
        let currEl = arr1.pop()
        arr1.unshift(currEl)
    }
    console.log(arr1.join(' '))
}
rotationArr(['Banana', 'Orange', 'Coconut', 'Apple', '15'])