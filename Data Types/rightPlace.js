function rightPlace(word, symbol, secondWord) {
    let result = '';
   for (let i = 0; i < word.length; i++) {
    
      if (word[i] === "_") {
         result += symbol
      } else {
        result += word[i]
      }
   }

   if (result === secondWord) {
       console.log(`Matched`);
       
   } else {
      console.log(`Not Matched`);
      
   }
}
rightPlace('Str_ng', 'I', 'Strong')