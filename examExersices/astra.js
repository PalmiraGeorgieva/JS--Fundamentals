function solve(data) {
   
    let pattern = /([#|])(?<item>[A-Za-z\s]+)\1(?<expDate>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d{1,5})\1/g
    let arrData = data[0];
    let matchData = arrData.matchAll(pattern)
    let totalCals = 0
    let results = []

    for(let matches of matchData ) {
        let item = matches.groups.item;
        let expDate = matches.groups.expDate;
        let calories =  Number(matches.groups.calories);
        totalCals += calories
       
    
        results.push(`Item: ${item}, Best before: ${expDate}, Nutrition: ${calories}`)
        
        

    }
    let days = Math.floor(totalCals/2000)
    console.log(`You have food to last you for: ${days} days!`)

    for(let line of results) {
        console.log(line)
    }

}
solve([
'#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
])