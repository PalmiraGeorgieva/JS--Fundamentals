function employee(input) {
    let result = [];
    for(let worker of input ) {
        let employeeObj = {
            'name': worker,
            'personalNumber': worker.length
        }
        result.push(employeeObj)
    }
    result.forEach((em) => {
        console.log(`Name: ${em.name} -- Personal Number: ${em.personalNumber}`)
    })

}
employee([
'Silas Butler',
'Adnaan Buckley',
'Juan Peterson',
'Brendan Villarreal'
])