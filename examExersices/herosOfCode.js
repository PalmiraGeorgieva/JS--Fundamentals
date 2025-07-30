
function herosOfCode(data) {
    let numHero = Number(data.shift());
    let heroInfo = {};

    for(let i = 0; i < numHero; i++) {
        let [heroName, hp, mp] = data.shift().split(' ');
        heroInfo[heroName] ={
            hp: Number(hp),
            mp: Number(mp)
        }
    }

    let commands = data.shift();

    while(commands !== "End") {
        let tokens = commands.split(' - ');
        let action = tokens.shift();
        let heroName = tokens.shift();
        let currentHero = heroInfo[heroName]
        

        switch(action) {
            case 'CastSpell':
                let mpNeeded = Number(tokens.shift());
                let spellName = tokens.shift();
                
                if(mpNeeded <= currentHero.mp) {
                    currentHero.mp -= mpNeeded;
                    console.log(`${heroName} has successfully cast ${spellName} and now has ${currentHero.mp} MP!`)
                } else {
                    console.log(`${heroName} does not have enough MP to cast ${spellName}!`)
                }

                 break;
            case 'TakeDamage':
                let damage = Number(tokens.shift());
                let attack = tokens.shift();
                
                currentHero.hp -= damage;

                if(currentHero.hp > 0) {
                    console.log(`${heroName} was hit for ${damage} HP by ${attack} and now has ${currentHero.hp} HP left!`)
                } else {
                    delete heroInfo[heroName];
                    console.log(`${heroName} has been killed by ${attack}!`)
                }
                 break;
            case 'Recharge':
               
                let amount = Number(tokens.shift());
                let oldMP = currentHero.mp;
                currentHero.mp += amount;
                if(currentHero.mp > 200) {
                    currentHero.mp = 200;
                    
                } 
                console.log(`${heroName} recharged for ${currentHero.mp - oldMP} MP!`)
                

                 break;
            case 'Heal':
                
                let amountHp = Number(tokens.shift());
                let oldHp = currentHero.hp;
                currentHero.hp += amountHp;
                if(currentHero.hp > 100) {
                    currentHero.hp = 100;
                }
                console.log(`${heroName} healed for ${currentHero.hp - oldHp} HP!`)
                 break;
           
        }
        commands = data.shift();
    }
    for(let [hero, stats] of Object.entries(heroInfo)){
        console.log(hero);
        console.log(`  HP: ${stats.hp}`);
        console.log(`  MP: ${stats.mp}`)

    }

}
herosOfCode([
"2",
"Solmyr 85 120",
"Kyrre 99 50",
"Heal - Solmyr - 10",
"Recharge - Solmyr - 50",
"TakeDamage - Kyrre - 66 - Orc",
"CastSpell - Kyrre - 15 - ViewEarth",
"End"
]
)