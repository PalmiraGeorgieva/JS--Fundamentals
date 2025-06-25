function searchNumber(arr1, arr2) {
    let workArray = arr1.slice();
    let end = arr2[0];
    let slicedArr = workArray.splice(0, end);
    end = arr2[1];
    slicedArr.splice(0, end);
    let n = arr2[2];
    resultArr = slicedArr.filter(x => x === n);
    console.log(`Number ${n} occurs ${resultArr.length} times.`)
}
searchNumber([5, 2, 3, 4, 1, 6],
[5, 2, 3])