/*Ако числото е четно - добави;
Ако е нечетно - извади */

function addAndSubtract(arr1){
    let newArr = [];
    let sumCurrArr = 0
    let sumNewArr = 0

    for(let i = 0; i < arr1.length; i++) {
        let currNum = arr1[i]
        sumCurrArr += Number(currNum)
        
        let newNum = 0;

        if(currNum % 2 === 0) {
            newNum = currNum + i;
        } else if(currNum % 2 !== 0) {
            newNum = currNum - i;
        }

        newArr.push(newNum)
        sumNewArr += newNum

        
    }
    console.log(newArr)
    console.log(sumCurrArr);
    console.log(sumNewArr)


}
addAndSubtract([5, 15, 23, 56, 35])