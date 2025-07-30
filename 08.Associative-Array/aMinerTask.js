function minerTask(data) {
    let resourcesQty = {};

    for(let i = 0; i < data.length; i += 2) {
        let resource = data[i];
        let qty = Number(data[i + 1]);


        // in - проверява елемент дали го има вече
        if(resource in resourcesQty){
            resourcesQty[resource] += qty;
        } else {
            resourcesQty[resource] = qty;
        }
    }
    let resourceEntry = Object.entries(resourcesQty);
    for(let [resource, qty] of resourceEntry) {
        console.log(`${resource} -> ${qty}`)
    }

}
minerTask([
'Gold',
'155',
'Silver',
'10',
'Copper',
'17'
])