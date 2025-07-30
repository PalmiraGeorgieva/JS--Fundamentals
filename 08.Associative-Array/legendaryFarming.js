function legendaryFarming(data) {
    let legendaryKeys = {
        'shards': 0,
        'fragments': 0,
        'motes': 0

    }

    let junkMaterials = {}
    let obtained = false;
    let legendary = '';

    let inputData = data.toLowerCase().split(' ');

    for(let i = 0; i < inputData.length; i += 2) {
        let qty = Number(inputData[i]);
        let materials = inputData[i + 1];

        if(materials in legendaryKeys) {
            legendaryKeys[materials] += qty

            if(legendaryKeys[materials] >= 250) {
                legendaryKeys[materials] -= 250;
                obtained = true;

                switch(materials) {
                    case 'shards': legendary = 'Shadowmourne'; break;
                    case 'fragments': legendary = 'Valanyr'; break;
                    case 'motes': legendary = 'Dragonwrath'; break;
                }

              break;
            } 

        }else {
            if(!junkMaterials[materials]) {
                junkMaterials[materials] = 0;
            }

            junkMaterials[materials] += qty;
        }
    }
    console.log(`${legendary} obtained!`);

    Object.entries(legendaryKeys).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
      .forEach(([mat, qty]) => console.log(`${mat}: ${qty}`));

    Object.entries(junkMaterials).sort((a, b) => a[0].localeCompare(b[0]))
      .forEach(([mat, qty]) => console.log(`${mat}: ${qty}`))

}
legendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards')