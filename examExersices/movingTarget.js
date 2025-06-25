function movingTarget(data) {
    let targets = data.shift().split(' ').map(Number);
    for(let i= 0; i < data.length; i++) {
        let currComand = data[i];
        if(currComand === 'End') {
            
            break;
        }

        let tokens = currComand.split(' ');
        let command = tokens[0];
       
        switch(command) {
            case "Shoot":
                let index = Number(tokens[1]);
                let power = Number(tokens[2]);
                if(index >= 0 && index < targets.length) {
                    targets[index] -= power

                   if(targets[index] <= 0) {
                     targets.splice(index, 1)
                   }
                }
                
                
                break;
            case "Add": 
                let index1 = Number(tokens[1]);
                let value = Number(tokens[2]);
                if(index1 >= 0 &&  index1 < targets.length) {
                    targets.splice(index1, 0, value)
                } else {
                    console.log(`Invalid placement!`)
                }
                break;
            case "Strike":
                let indexStrike = Number(tokens[1]);
                let radius = Number(tokens[2])
                let start = indexStrike - radius;
                let end = indexStrike + radius;

                if(start >= 0 && end < targets.length) {
                    targets.splice(start, end - start + 1)
                } else {
                    console.log(`Strike missed!`)
                }
                break;    

        }
    }
    console.log(targets.join('|'))

}
movingTarget((["52 74 23 44 96 110",
"Shoot 5 10",
"Shoot 1 80",
"Strike 2 1",
"Add 22 3",
"End"]))