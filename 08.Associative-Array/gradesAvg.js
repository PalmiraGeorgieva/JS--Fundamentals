function solve(data) {
    let map = new Map();

    for(let elem of data) {
        let [name, ...grades] = elem.split(' ')

        grades = grades.map(Number);

        if(map.has(name)) {
            let currGrade = map.get(name);

            for(let grade of grades){
                currGrade.push(grade)
            }

            map.set(name, currGrade)
        } else {
            map.set(name, grades)
        }
    }
    let avgGrades = new Map()
    

    for(let [name, grades] of map) {
        let sum = 0;
        for(let grade of grades) {
            sum += grade
        }

        let average = sum / grades.length;
        avgGrades.set(name, average.toFixed(2))


    }
    let nameSort = Array.from(avgGrades).sort((a, b) => a[0].localeCompare(b[0]));
    for(let [name, avgGrades] of nameSort) {
        console.log(`${name}: ${avgGrades}`)
    }
}
solve(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6'])