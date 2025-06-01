/* 
вход - поле;
индекс - калинка;
посоката на полета (command 0 right 1);
0 индекс няма калинка;
1 - има;
Полета е + 1, ако има калинка полта продължава + 1, ако е повече от поляната остава празно.*/

function ladybug(input) {
    let fieldSize = Number(input[0]);
    let ladybugsInd = input[1].split(' ').map(Number);
    let field = [];

    for(let i = 0; i < fieldSize; i++) {
        field[i] = 0;
    }

    for (let i = 0; i < ladybugsInd.length; i++) {
        let index = ladybugsInd[i];
        if (index >= 0 && index < fieldSize) {
            field[index] = 1;
        }
    }

    for (let i = 2; i < input.length; i++) {
        let command = input[i].split(' ');
        let ladybugIndex = Number(command[0]);
        let direction = command[1];
        let flyLength = Number(command[2]);

        if (ladybugIndex < 0 || ladybugIndex >= fieldSize || field[ladybugIndex] !== 1) {
            continue;
        }
        if (flyLength < 0) {
           flyLength = Math.abs(flyLength);
           direction = direction === 'left' ? 'right' : 'left';
        }

        field[ladybugIndex] = 0;
        let position = ladybugIndex

        while(true) {
            position = direction === "right"
              ? position + flyLength
              : position - flyLength;
            
            if (position < 0 || position >= fieldSize) {
                break
            }  

            if (field[position] === 0) {
                field[position] = 1;
                break;
            }
        }
            
    }
    console.log(field.join(' '))
}
ladybug([ 3, '0 1',
'0 right 1',
'2 right 1' ])
ladybug([ 5, '3',
'3 left 2',
'1 left -2'])