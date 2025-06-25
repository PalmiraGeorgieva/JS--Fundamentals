function carWash(arr) {
    let count = 0;
    for(let i = 0; i < arr.length; i++) {
        let command = arr[i];

        switch(command) {
            case 'soap':
                count += 10;
                break;
            case 'water':
                count *= 1.20
                break;
            case 'vacuum cleaner':
                count *= 1.25
                break;
            case 'mud':
                count *= 0.90
                break;        

        }
    }
    console.log(`The car is ${count.toFixed(2)}% clean.`)

}
carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water'])
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"])