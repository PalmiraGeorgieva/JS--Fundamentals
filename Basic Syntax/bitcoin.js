/* 1 bitcoin = 11949.16 lv.
1g gold = 67.51lv. */

function bitcoin(input) {
    const priceBitcoin = 11949.16;
    const goldPrice = 67.51
   let totalAmount = 0
   let bougthBitcoin = 0;
   let firstDayBitcoin = 0;

   for (let day = 0; day < input.length; day++) {
       let gold = input[day];

       //Ако денят е 3ти се крадат 30%
       if ((day + 1) % 3 === 0){
         gold *= 0.7
       }

       let moneyEarned = gold * goldPrice  //парите от златото за деня
       totalAmount += moneyEarned

       while (totalAmount >= priceBitcoin) {
          bougthBitcoin++
          totalAmount -= priceBitcoin;

          if (bougthBitcoin === 1) {
            firstDayBitcoin = day + 1
          }
       }

       
   }
   console.log(`Bought bitcoins: ${bougthBitcoin}`)
   if (bougthBitcoin > 0) {
    console.log(`Day of the first purchased bitcoin: ${firstDayBitcoin}`)
   }
   console.log(`Left money: ${totalAmount.toFixed(2)} lv.`)
}
bitcoin([100, 200, 300])