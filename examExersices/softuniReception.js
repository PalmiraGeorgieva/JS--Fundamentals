function softuniReception(data) {
    let firstEmployee = Number(data[0]);
    let secondEmployee = Number(data[1]);
    let thirdEmployee = Number(data[2]);
    let totalStudents = Number(data[3]);
    let studentPerHour = firstEmployee + secondEmployee + thirdEmployee;
    let hour =0;
    while (totalStudents > 0) {
        hour++;

        if(hour % 4 === 0) {
            continue;
        } 
        totalStudents -= studentPerHour
    }
    console.log(`Time needed: ${hour}h.`)

}
softuniReception(['5','6','4','20'])
softuniReception(['1','2','3','45'])