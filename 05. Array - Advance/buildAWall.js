function buildAWall(arr) {
    let wall = [];

    for(let i = 0; i < arr.length; i++) {
        wall[i] = Number(arr[i]);


    }

    let concretePerDay = [];
    let concretePerFoot = 195;
    let pricePerYard = 1900;

    while(true) {
        let concreteDay = 0;
        let allDone = true;

        for (let i = 0; i < wall.length; i++) {
            if(wall[i] < 30) {
                wall[i]++;
                concreteDay += concretePerFoot
                allDone = false;
            }
        }
        if(allDone) {
            break;
        }

        concretePerDay.push(concreteDay);
    }
    let output = '';
    for(let i = 0; i < concretePerDay.length; i++) {
        output += concretePerDay[i];
        if(i !== concretePerDay.length - 1) {
            output += ', ';
        }
    }
    console.log(output);

    let totalConcrete = 0;
    for(let i = 0; i < concretePerDay.length; i++) {
        totalConcrete += concretePerDay[i];

    }
    let totalCost = totalConcrete * pricePerYard;
    console.log(totalCost + ` pesos`)


}
buildAWall([21, 25, 28])