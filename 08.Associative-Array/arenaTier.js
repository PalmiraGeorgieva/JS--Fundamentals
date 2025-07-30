function arenaTier(data) {
  let gladiatorMap = new Map()

  for(let entry of data) {
    if(entry === 'Ave Cesar') {
        break;
    }

    if(entry.includes('->')) {
        let[gladiator, technique, skillStr] = entry.split(' -> ')
        let skill = Number(skillStr);

        if(!gladiatorMap.has(gladiator)) {
            gladiatorMap.set(gladiator, new Map())
        }

        let techniques = gladiatorMap.get(gladiator);

        if(!techniques.has(technique) || techniques.get(technique) < skill) {
            techniques.set(technique, skill);
        }


    } else if(entry.includes('vs')) {
        let [firstGladiator, secondGladiator] = entry.split(' vs ')

        if(gladiatorMap.has(firstGladiator) && gladiatorMap.get(secondGladiator)) {
            let technique1 = gladiatorMap.get(firstGladiator);
            let technique2 = gladiatorMap.get(secondGladiator);

            let hasCommon = false;

            for(let tech of technique1.keys()) {
                if(technique2.has(tech)) {
                    hasCommon = true;
                    break;
                }
            }

            if(hasCommon) {
                let total1 = Array.from(technique1.values()).reduce((a, b) => a + b, 0);
                let total2 = Array.from(technique2.values()).reduce((a, b) => a + b, 0);

                if(total1 > total2) {
                    gladiatorMap.delete(secondGladiator);
                } else if (total1 < total2) {
                    gladiatorMap.delete(firstGladiator);

                }
            }
        }

     }
  }

  let sorted = Array.from(gladiatorMap.entries()).sort((a, b) => {
    let totalA = Array.from(a[1].values()).reduce((x, y) => x + y, 0);
    let totalB = Array.from(b[1].values()).reduce((x, y) => x + y, 0);

    return totalB - totalA || a[0].localeCompare(b[0]);
  })

  for(let [gladiator, technique] of sorted) {
    let totalSkill = Array.from(technique.values()).reduce((a, b) => a + b, 0);
    console.log(`${gladiator}: ${totalSkill} skill`);

    let sortedTechniques = Array.from(technique.entries()).sort((a, b) => {
        return b[1] - a[1] || a[0].localeCompare(b[0])
    })

    for (let [tech, skill] of sortedTechniques) {
        console.log(`- ${tech} <!> ${skill}`)
    }
  }

}

arenaTier([
'Peter -> Duck -> 400',
'Julius -> Shield -> 150',
'Gladius -> Heal -> 200',
'Gladius -> Support -> 250',
'Gladius -> Shield -> 250',
'Peter vs Gladius',
'Gladius vs Julius',
'Gladius vs Maximilian',
'Ave Cesar'
])