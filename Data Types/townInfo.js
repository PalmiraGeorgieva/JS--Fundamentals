function townInfo(town, population, area) {
    let populationCount = Number(population);
    let areaCount = Number(area);
    let hasError = false;

    if (town.length < 3) {
        console.log(`Town name must be at least 3 characters!`);
        hasError = true
         
    } 

    
    if (populationCount < 0) {
        console.log(`Population must be a positive number!`);
        hasError = true
        

    } 
    if(areaCount < 0) {
        console.log(`Area must be a positive number!`);
        hasError = true
        
    } 

    if(!hasError) {
        console.log(`Town ${town} has population of ${populationCount} and area ${areaCount} square km.`)

    }


}
townInfo('LA',
1481353,
-512

)