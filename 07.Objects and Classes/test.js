function employee(data) {

    for(let entry of data) {
        let employeeName = entry;
        let employeeNumber = employeeName.length;
        console.log(`Name: ${employeeName} -- Personal Number: ${employeeNumber}`)
    }

}
employee([
'Silas Butler',
'Adnaan Buckley',
'Juan Peterson',
'Brendan Villarreal'
])