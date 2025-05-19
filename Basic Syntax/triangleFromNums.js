function triangleFromNums(n) {
    
    for (let row = 0; row <= n; row++) {
        let line = "";

        for(let col = 1; col <= row; col++) {
            line += row + " ";
        }
        console.log(line)

    }
    

}
triangleFromNums(3)