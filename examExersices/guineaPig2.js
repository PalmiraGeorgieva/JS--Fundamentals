function guineaPig(input) {
    let qntyFood = Number(input.shift());
    let qntyHay = Number(input.shift());
    let qtyCover = Number(input.shift());
    let weight = Number(input.shift())

    for(let day = 1; day <= 30; day++) {
        qntyFood -= 300;

        if(day % 2 === 0) {
            qntyHay -= qntyFood * 0.05

        }

        if(day % 3 === 0) {
            qtyCover -= (weight / 3)

        }
    }


}
guineaPig((["10",
"5",
"5.2",
"1"]))