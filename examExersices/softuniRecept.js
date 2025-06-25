function solve(data) {
    let employee1 = Number(data.shift());
    let employee2 = Number(data.shift());
    let employee3 = Number(data.shift());
    let totalStudents = Number(data.shift());
    let sumStudents = employee1 + employee2 + employee3;
    let workingHours = Math.ceil(totalStudents / sumStudents);
    let breakTime = 0

    if(workingHours <= 0) {
        breakTime = 0

    } else {
        breakTime = Math.floor((workingHours - 1)/ 3)
    }
    
    let totalTime = workingHours + breakTime
    console.log(`Time needed: ${totalTime}h.`)


    
}
solve(['5','6','4','20'])
solve(['1','2','3','45'])
solve(['3','2','5','40'])