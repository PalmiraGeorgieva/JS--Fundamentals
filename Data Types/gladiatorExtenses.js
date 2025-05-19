function gladiatorExpenses(lostFight, helmet, sword, shield, armor) {
    let lostFightCount = Number(lostFight);
    let trashedShield = 0;
    let totalExpences = 0
    

    for (let fight = 1; fight <= lostFightCount; fight++) {
        let brokenHelmet = fight % 2 === 0;
        let brokenSword = fight % 3 === 0;

        if(brokenHelmet) {
            totalExpences += helmet;
        }

        if (brokenSword) {
            totalExpences += sword
        }
        if(brokenHelmet && brokenSword) {
            totalExpences += shield
            trashedShield++;

            if(trashedShield % 2 === 0) {
                totalExpences += armor
            }
        }
    }
    console.log(`Gladiator expenses: ${totalExpences.toFixed(2)} aureus`)

}
gladiatorExpenses(7,
    2,
    3,
    4,
    5
    )