function solve(data) {
    let resourcesArr = {};

    for(let i = 0; i < data.length; i += 2) {
        let resource = data[i];
        let qty = Number(data[i + 1]);
        resourcesArr[resource] = resourcesArr[resource] || 0;
        resourcesArr[resource] += qty

    }

    for(let res in resourcesArr) {
        console.log(`${res} -> ${resourcesArr[res]}`)
    }

}
solve([
'Gold',
'155',
'Silver',
'10',
'Copper',
'17'
])