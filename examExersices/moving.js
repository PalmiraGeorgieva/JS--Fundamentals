function movingTarget(data) {
    let targets = data.shift().split(" ").map(Number);

    let command = data.shift();

    while (command !== "End") {
        let tokens = command.split(' ');
        let action = tokens.shift();
        let index1 = Number(tokens.shift());
        let index2 = Number(tokens.shift());

        switch(action) {
            case 'Shoot':
                let power = index2;

                if(index1 >= 0 && index1 < targets.length) {
                    targets[index1] -= power

                    if(targets[index1] <= 0) {
                        //Already shot -> Remove
                        targets.splice(index1, 1);
                    }
                }

                break;
            case 'Add':
                let value = index2
                if(index1 >= 0 && index1 < targets.length) {
                    targets.splice(index1, 0, value)
                    
                } else {
                    console.log(`Invalid placement!`);
                   
                }
                break;
            case "Strike":
                let radius = index2;
                let left = index1 - radius;
                let rigth = index1 + radius;
                
                if(left >= 0 && rigth < targets.length) {
                     let targetsToRemove = rigth - left + 1;
                     targets.splice(left, targetsToRemove)
                } else {
                    console.log(`Strike missed!`)
                }

                
                break;
        }

        command = data.shift()
    }
    console.log(targets.join('|'))


  
}
movingTarget((["52 74 23 44 96 110",
"Shoot 5 10",
"Shoot 1 80",
"Strike 2 1",
"Add 22 3",
"End"]))