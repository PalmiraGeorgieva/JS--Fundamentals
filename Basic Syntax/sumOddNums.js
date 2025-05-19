function sumOddNums(n) {
    let sum = 0
    let count = 1
   for (let i = 0; i < n; i++) {
      console.log(count);
      sum += count;
      count += 2
   }
   console.log(`Sum: ${sum}`)
}
sumOddNums(5)