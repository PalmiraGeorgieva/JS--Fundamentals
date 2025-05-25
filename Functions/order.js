/*  • coffee - 1.50
    • water - 1.00
    • coke - 1.40
    • snacks - 2.00 */
function order(snack, count) {
    const multiply = (x, y) => x * y
    switch(snack){
        case "coffee":
            console.log(multiply(1.50, count).toFixed(2));
            break;
        case "water":
            console.log(multiply(1.00, count).toFixed(2));
            break;
        case "coke":
            console.log(multiply(1.40, count).toFixed(2));
            break;
        case "snacks":
            console.log(multiply(2.00, count).toFixed(2));
            break;            
    }

}
order("water", 5)