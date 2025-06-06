/*Последният елемен е степента на числата от масива */
function printNElement(arr1) {
   let step = Number(arr1[arr1.length - 1]);
   let result = [];
   for (let i = 0; i < arr1.length - 1; i += step) {
       result.push(arr1[i])
   }
   console.log(result.join(' '))

}
printNElement(['5', '20', '31', '4', '20', '2'])