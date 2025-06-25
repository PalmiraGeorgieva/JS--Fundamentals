// {total bonus} = {student attendances} / {course lectures} * (5 + {additional bonus})
function bonusScore(data) {
    let countStudents = Number(data.shift());
    let totalLectures = Number(data.shift());
    let additionalScores = Number(data.shift());
    let maxBonus = 0;
    let maxAttendanse = 0;
    

    for(let i = 0; i < countStudents; i++) {
        let attendances = Number(data[i]);
        let bonus = (attendances / totalLectures) * (5 + additionalScores);
        
        
       if(bonus > maxBonus) {
         maxBonus = bonus
         maxAttendanse = attendances
       }

        
    }
    console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`)
    console.log(`The student has attended ${maxAttendanse} lectures.`) 

}
bonusScore([
  '5',  '25', '30',
  '12', '19', '24',
  '16', '20'
])
bonusScore(
[
  '10', '30', '14', '8',
  '23', '27', '28', '15',
  '17', '25', '26', '5',
  '18'
]	
)