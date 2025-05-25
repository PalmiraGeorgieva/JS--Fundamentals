function signChecker(num1, num2, num3) {
  let negatveCount = 0;

  if(num1 < 0) {negatveCount++}
  if(num2 < 0) {negatveCount++}
  if(num3 < 0) {negatveCount++}

  let result = (negatveCount % 2 === 0) ? "Positive" : "Negative";
  console.log(result)
}
signChecker(-6,
-12,
 14)