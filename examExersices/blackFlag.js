function blackFlag(data) {
    //Read input 
    let totalDays = Number(data.shift())
    let dailyPlunder = Number(data.shift());
    let expetedPlunder = Number(data.shift());

    //Logic...
    let count = 0;
    for(let i = 1; i <= totalDays; i++) {
        count += dailyPlunder;

        if(i % 3 === 0) {
            count += 0.5 * dailyPlunder
        }

        if(i % 5 === 0) {
            count -= 0.3 * count

        }

    }

    // Output

    if(count >= expetedPlunder) {
        console.log(`Ahoy! ${count.toFixed(2)} plunder gained.`)
    } else {
        let collectedPercent = (count / expetedPlunder) * 100;
        console.log(`Collected only ${collectedPercent.toFixed(2)}% of the plunder.`)
    }

}
blackFlag((["10", "20", "380"])) //Ahoy! 154.00 plunder gained.