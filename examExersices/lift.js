function lift(arr) {
    let countPeople = Number(arr[0]);
    let freePlace = arr[1].split(' ').map(Number);
    let fullLift = 4

    for (let i = 0; i < freePlace.length; i++) {
    
        while (freePlace[i] < fullLift && countPeople > 0) {
            freePlace[i]++;
            countPeople--
          
        }
        
    }
    let isFull = true;
     for(let i = 0; i < freePlace.length; i++) {
        if(freePlace[i] < fullLift) {
            isFull = false;
            break;
        }
    }

    if (!isFull && countPeople === 0) {
        console.log(`The lift has empty spots!`);
    } else if(countPeople > 0 && isFull) {
         console.log(`There isn't enough space! ${countPeople} people in a queue!`);
    } 
    console.log(freePlace.join(' '))



  
}
lift([
 "15",
 "0 0 0 0 0"
])