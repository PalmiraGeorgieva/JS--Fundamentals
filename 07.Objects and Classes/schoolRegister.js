function schoolRegister(data) {
    let schoolGrades = {};
    for(let entry of data) {
        let [studentName, grade, averageScore] = entry.split(', ');
        let nameStudent = studentName.split(': ');
        let name = nameStudent[1];
        let gradeStr = grade.split(': ');
        let gradeValue = Number(gradeStr[1]);
        let avgStr = averageScore.split(': ');
        let avgScore = Number(avgStr[1]);

        
        if(avgScore >= 3) {
            let nextGrade = gradeValue + 1

            if(!schoolGrades[nextGrade]) {
                schoolGrades[nextGrade] = []
            }


            schoolGrades[nextGrade].push({ name, avgScore })
        } 
        
    }
    let sorted = Object.keys(schoolGrades).sort((a, b) => a - b);

    for(let grade of sorted) {
        console.log(`${grade} Grade`);
        let students = schoolGrades[grade];
        let names = students.map(s => s.name).join(', ');
        let average = students.reduce((sum, s) => sum + s.avgScore, 0) / students.length;

        console.log(`List of students: ${names}`);
        console.log(`Average annual score from last year: ${average.toFixed(2)}`);
        console.log('')
    }

}
schoolRegister([
"Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
    "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
    "Student name: George, Grade: 8, Graduated with an average score: 2.83",
    "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
    "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
    "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
    "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
    "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
    "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
    "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
    "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
    "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
]
)