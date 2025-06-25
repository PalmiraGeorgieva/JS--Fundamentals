function experienceGaining(data) {
    let amountExperience = Number(data.shift())
    let battles = Number(data.shift());
    let countBattle = 0
    let totalExperience = 0; 

    for(let i = 0; i < data.length; i++) {
        let experience = Number(data[i])
        
        countBattle++;

        if(countBattle % 3 === 0) {
            experience *= 1.15

        }

        if(countBattle % 5 === 0) {
            experience *= 0.90

        }

        if(countBattle % 15 === 0) {
            experience *= 1.05

        }
        totalExperience += experience;
        if(totalExperience >= amountExperience) {
            break;
        }

        if(countBattle === battles) {
            break;
        }
    }
    if(totalExperience >= amountExperience) {
        console.log(`Player successfully collected his needed experience for ${countBattle} battles.`)
    } else {
        let neededExperience = amountExperience - totalExperience;
        console.log(`Player was not able to collect the needed experience, ${neededExperience.toFixed(2)} more needed.`)
    }

}
experienceGaining(([500,
5,
50,
100,
200,
100,
30]))
experienceGaining(([500,
5,
50,
100,
200,
100,
20]))