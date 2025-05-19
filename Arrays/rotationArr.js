function rotationArr(arr1, rotation) {

    for (let currRotation = 1; currRotation <= rotation; currRotation++) {
        let currEl = arr1.shift()
        arr1.push(currEl)
    }
    console.log(arr1.join(' '))
}
rotationArr([51, 47, 32, 61, 21], 2)