function chessBoard(num) {
    console.log(`<div class="chessboard">`)

    for (let i = 0; i < num; i++) {
        console.log(`  <div>`)

        for (let j = 0; j < num; j++) {
            let isBlack = (i + j) % 2 === 0;
            let color = isBlack ? "black" : "white";
            console.log(`    <span class="${color}"></span>`)
        }
        console.log(`  </div>`)
    }
    console.log(`</div>`)
    
} 
chessBoard(3)