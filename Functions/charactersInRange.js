function characterInRange(char1, char2) {
   function findBiggerChar(c1, c2) {
      let char1 = c1.charCodeAt(0);
      let char2 = c2.charCodeAt(0);

      if(char1 < char2) {
        return [char1, char2]
      } else {
        return [char2, char1]
      }
   }
   let sortedChar = findBiggerChar(char1, char2);
   let start = sortedChar[0];
   let end = sortedChar[1];
   let result = ''
   for (let i = start + 1; i < end; i++) {
      result += String.fromCharCode(i) + ' ';
      
   }
   console.log(result)
}
characterInRange('a', 'd')