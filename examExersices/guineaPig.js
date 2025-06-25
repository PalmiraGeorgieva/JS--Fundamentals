/*On the first line – quantity food in kilograms - a floating-point number in the range [0.0 – 10000.0].
· On the second line – quantity hay in kilograms - a floating-point number in the range [0.0 – 10000.0].
· On the third line – quantity cover in kilograms - a floating-point number in the range [0.0 – 10000.0].
· On the fourth line – guinea's weight in kilograms - */

function guineaPig(data) {
    let foodGr = Number(data.shift())* 1000;
    let hay = Number(data.shift()) * 1000;
    let cover = Number(data.shift())* 1000;
    let guineaGr = Number(data.shift())* 1000;
    
    for (let day = 1; day <= 30; day++) {
        foodGr -= 300;

        if(day % 2 === 0) {
            hay -= 0.05 * foodGr;
        }

        if(day % 3 === 0) {
            cover -= (1/3) * guineaGr
        }

        if(foodGr <= 0 || hay <= 0 || cover <= 0) {
            console.log("Merry must go to the pet store!");
            return;
        }
    }
    let foodKg = foodGr / 1000;
    let hayKg = hay / 1000;
    let coverKg = cover / 1000;


    console.log(`Everything is fine! Puppy is happy! Food: ${foodKg.toFixed(2)}, Hay: ${hayKg.toFixed(2)}, Cover: ${coverKg.toFixed(2)}.`)

}
guineaPig((["10", 
"5", 
"5.2", 
"1"])
)