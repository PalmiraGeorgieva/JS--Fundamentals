function manipulateArr(commands) {
    let arr = commands.shift().split(' ').map(Number);
    for(let commsndLine of commands) {
        let [command, num1, num2] = commsndLine.split(' ');

        let firstNum = Number(num1);
        let indexNum = Number(num2);

        switch(command) {
            case "Add":
                 arr.push(firstNum);
                break;
            case "Remove":
                arr = arr.filter(el => el !== firstNum);
                break;
            case "RemoveAt":
                arr.splice(firstNum, 1);
                break;
            case "Insert":
                arr.splice(indexNum, 0, firstNum);
                break;            
        }

    }
    console.log(arr.join(' '))
}
manipulateArr(['4 19 2 53 6 43',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3'])