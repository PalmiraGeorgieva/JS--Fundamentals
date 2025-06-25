function firstKAndLastK(arr1) {
    let k = arr1.shift()
    let firstPart = arr1.slice(0, k)
    let lastPart = arr1.slice(arr1.length - k);
    console.log(firstPart.join(' '));
    console.log(lastPart.join(' '))
  
}
firstKAndLastK([2, 
7, 8, 9])