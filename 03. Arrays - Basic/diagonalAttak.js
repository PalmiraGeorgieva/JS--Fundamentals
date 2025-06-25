function diagonalAttack(data) {
    let matrix = data.map(row => row.split(' ').map(Number));
    let size = matrix.length;

    let firstDiagonalSum = 0;
    let secondDiagonalSum = 0;

    for(let i = 0; i < size ; i++) {
        firstDiagonalSum += matrix[i][i];
        secondDiagonalSum += matrix[i][size - 1 -i];

    }

    if(firstDiagonalSum === secondDiagonalSum) {
        for(let row = 0; row < size; row++) {
            for(let col = 0; col < size; col++) {
                if(row !== col && col !== size - 1- row) {
                    matrix[row][col] = firstDiagonalSum
                }
            }
        }
    }
    matrix.map(row => console.log(row.join(' ')));

}
diagonalAttack(['5 3 12 3 1',
'11 4 23 2 5',
'101 12 3 21 10',
'1 4 5 2 2',
'5 22 33 11 1'])