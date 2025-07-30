function piccolo(data) {
    let parkingLot = new Set();

    for(let entry of data) {
        let [command, carNumber] = entry.split(', ');

        switch(command) {
            case 'IN':
                parkingLot.add(carNumber)
                break;
            case 'OUT':
                parkingLot.delete(carNumber)
                break;    
        }
    }

    if(parkingLot.size === 0) {
        console.log(`Parking Lot is Empty`)
    } else {
        let sorted = Array.from(parkingLot).sort();
        for(let car of sorted) {
            console.log(car)
        }
    }

}
piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU'])