function processOddNums(arr){
  let doubleArr = arr.map((el) => el * 2);
  let filterArr = doubleArr.filter((_, i) => i % 2 !== 0 );
  let reversedArr = filterArr.reverse()
  console.log(reversedArr.join(' '))
}
processOddNums([10, 15, 20, 25])