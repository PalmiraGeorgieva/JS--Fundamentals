function currentElements(arr1, arr2) {

    for (let i = 0; i < arr1.length; i++) {
        let currEl = arr1[i];

        if (arr2.includes(currEl)) {
            console.log(currEl)
        }
    }
}
currentElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2']
    )