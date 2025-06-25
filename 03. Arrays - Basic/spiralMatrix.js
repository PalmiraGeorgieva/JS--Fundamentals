function spiralMatrix(num1, num2) {
    let row = num1;
    let col = num2;

    let matrix = [];

    for(let i = 0; i < row; i++) {
        matrix.push([])
        for(let j = 0; j < col; j++) {
            matrix[i][j] = 0

        }
    }
    let num = 1;
    let startRow = 0;
    let endRow = row - 1;
    let startCol = 0;
    let endCol = col - 1;
    
    while(startRow <= endRow && startCol <= endCol) {
        for(let cols = startCol; cols <= endCol; cols++) {
            matrix[startRow][cols] = num++;
        }
        startRow++;

        for(let rows = startRow; rows <= endRow; rows++) {
            matrix[rows][endCol] = num++
        }
        endCol--;

        for(let cols = endCol; cols >= startCol; cols--) {
            matrix[endRow][cols] = num++;
        }
        endRow--;

        for(let rows = endRow; rows >= startRow; rows--) {
            matrix[rows][startCol] = num++;
        }
        startCol++;
    }
    matrix.map(row => console.log(row.join(' ')));

}
spiralMatrix(5, 5)