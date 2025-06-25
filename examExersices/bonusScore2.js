function bonusSystem(data) {
    let workingArr = data.slice().map(Number)
    workingArr.shift();
    let lectures = workingArr.shift();
    let bonus = workingArr.shift();

    workingArr.sort((a, b) => b - a);
    let maxStudentAtt = 0
    let maxBonus = 0;
    if(workingArr.length > 0 && lectures > 0) {
        maxStudentAtt = workingArr[0];
        maxBonus = maxStudentAtt / lectures * (5 + bonus)

    }
    
    
    console.log(`Max Bonus: ${Math.round(maxBonus)}.`);
    console.log(`The student has attended ${maxStudentAtt} lectures.`)

}
bonusSystem([
'5', '25', '30',
'12', '19', '24',
'16', '20'

])