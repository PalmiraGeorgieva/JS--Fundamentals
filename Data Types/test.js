function specialNumbers(input){
    let number = parseInt(input);
 
    for (let i =1; i <= number;i++){
        let sum = 0;
        let num = i;
 
        while (num >0){
            sum += num %10;
            num = Math.floor(num / 10)
        }
 
        let isSpecial = sum === 5 || sum ===7 || sum ===11;
        if (isSpecial){
            console.log('${i} -> True');
        }else {
            console.log('${i} -> False');
        }
    }
 
}
specialNumbers()