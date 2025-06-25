function arrayModify(data) {
    let workingArr = data.shift().split(' ').map(Number)

    for(let i = 0; i < data.length; i++) {
        let currComand = data[i]

        if(currComand === 'end') {
            break;
        }

        let tokens = currComand.split(' ');
        let command = tokens[0];

        switch(command) {
            case "swap":
                let index1 = Number(tokens[1]);
                let index2 = Number(tokens[2]);
                [workingArr[index1], workingArr[index2]] = [workingArr[index2], workingArr[index1]]
                break;

            case 'multiply':
                let multiply1 = Number(tokens[1]);
                let multiply2 = Number(tokens[2]);
                workingArr[multiply1] *= workingArr[multiply2]
                break;
            case 'decrease':
                workingArr = workingArr.map(x => x - 1)
                break;        
        }
    }
    console.log(workingArr.join(', '))


}
arrayModify([ '23 -2 321 87 42 90 -123',
     'swap 1 3', 
     'swap 3 6', 
     'swap 1 0', 
     'multiply 1 2', 
     'multiply 2 1', 
     'decrease', 
     'end' ])