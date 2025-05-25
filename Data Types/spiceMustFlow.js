function spiceMust(startYield) {
    let day = 0;
    let spiceExtracted = 0
    

    while (startYield >= 100) {
        day ++
        spiceExtracted += startYield
        startYield -= 10
        if (spiceExtracted >= 26) {
           spiceExtracted -= 26
        }
        
    }
    if(spiceExtracted >= 26) {
        spiceExtracted -= 26
    }
    console.log(day);
    console.log(spiceExtracted)
}
spiceMust(111)