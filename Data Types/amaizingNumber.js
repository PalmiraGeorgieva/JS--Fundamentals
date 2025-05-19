function amazingNumber(num) {
   const stringNumber = `${num}`;

   let sum = 0;
   for (let i = 0; i < stringNumber.length; i++) {
      sum += Number(stringNumber[i]);
   }

   let isAmazing = "False";
   let stringifideSum = `${sum}`
   for (let i = 0; i < stringifideSum.length; i++) {
    if (stringifideSum[i] === '9') {
        isAmazing = "True";
        break
    }
    
 }

   console.log(`${num} Amazing? ${isAmazing}`)
}
amazingNumber(1233)