function palindrome(input) {
   for(let num of input) {
     let str = String(num);
     let reversedStr = str.split('').reverse().join('');
     console.log(str === reversedStr)
   }

}
palindrome([123,323,421,121])