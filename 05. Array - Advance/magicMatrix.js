function magicMatrix(matrix) {
    let magicSum = 0;

    for(let col = 0; col < matrix[0].length; col++) {
        magicSum += matrix[0][col];
    }

    for(let row = 0; row < matrix.length; row++) {
        let rowSum = 0;

        for(let col = 0; col < matrix[row].length; col++) {
            rowSum += matrix[row][col]
        }
        if(rowSum !== magicSum) {
            console.log(false);
            return;

        }
    }
    for(let col = 0; col < matrix[0].length; col++) {
        let colSum = 0;

        for(let row = 0; row < matrix.length; row++) {
            colSum += matrix[row][col]
        }
        if(colSum !== magicSum) {
            console.log(false);
            return;

        }
    }
    

    console.log(true)

}
magicMatrix([[4, 5, 6],
 [6, 5, 4],
 [5, 5, 5]])

magicMatrix([[11, 32, 45],
 [21, 0, 1],
 [21, 1, 1]])