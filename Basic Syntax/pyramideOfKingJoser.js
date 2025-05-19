/*основата е квадрат, която спада с 2
ширина и височина(Increment)
всяко 5то стъпало от долу на горе е от Лапис
Търси се: Количество камък, марбъл, лапис и злато */

function thePyramidKingJosep(base, increment){
   let stone = 0;
   let marble = 0;
   let lapis = 0;
   let gold = 0;

   let height = 0;
   let floor = 1;
   for(let currSize = base; currSize > 0; currSize -= 2) {
       height += increment
       let totalArea = currSize ** 2;

       if (currSize <= 2) {
         gold = totalArea * increment
       } else {
         let stoneArea = (currSize -2) ** 2;
         stone += stoneArea * increment;

         if (floor % 5 === 0) {
            let lapisArea = totalArea - stoneArea;
            lapis += lapisArea * increment
         } else {
            let marbleArea = totalArea - stoneArea;
           marble += marbleArea * increment;

         }

          
       }
       floor++
      
      

      

   }
   console.log(`Stone required: ${Math.ceil(stone)}`)
   console.log(`Marble required: ${Math.ceil(marble)}`)
   console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`)
   console.log(`Gold required: ${Math.ceil(gold)}`)
   console.log(`Final pyramid height: ${Math.floor(height)}`)

}
thePyramidKingJosep(11, 1)