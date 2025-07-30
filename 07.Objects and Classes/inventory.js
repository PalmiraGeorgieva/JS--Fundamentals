function solve(data) {
    let heros = [];

    for(let line of data) {
        let tokens = line.split(' / ');
        let heroName = tokens[0];
        let heroLevel = Number(tokens[1]);
        let item = tokens[2] ? tokens[2].split(', ').filter(i => i) : [];
        heros.push({heroName, heroLevel, item})
    }
    heros.sort((a, b) => a.heroLevel - b.heroLevel);
    for(let hero of heros) {
        console.log(`Hero: ${hero.heroName}`);
        console.log(`level => ${hero.heroLevel}`);
        console.log(`items => ${hero.item.join(', ')}`)
    }

}
solve([
'Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara'
])