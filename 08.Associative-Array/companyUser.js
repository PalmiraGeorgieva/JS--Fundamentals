function solve(data){
    let companyMap = new Map();

    for(let entry of data) {
        let[companyName, employeeId] = entry.split(' -> ');
        if(!companyMap.has(companyName)) {
            companyMap.set(companyName, new Set());
        }

        let em = companyMap.get(companyName)
        em.add(employeeId)
    }

    let sorted = [...companyMap.entries()].sort((a, b) => a[0].localeCompare(b[0]));

    for(let [company, employee] of sorted) {
        console.log(company);
        for(let id of employee) {
            console.log(`-- ${id}`)
        }
    }

}
solve([
'SoftUni -> AA12345',
'SoftUni -> BB12345',
'Microsoft -> CC12345',
'HP -> BB12345'
])