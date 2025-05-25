function loadingBar(num) {
    let percent = num;
    let percentForLoading = '%'.repeat(percent / 10)
    let waiting = '.'.repeat(10 - percent / 10)
    if (num % 10 === 0) {
        if (percent < 100) {
            console.log(`${percent}% [${percentForLoading}${waiting}]`)
            console.log(`Still loading...`)
        } else  {
            console.log(`${percent}% Complete!`);
            console.log(`[${percentForLoading}]`)
        }
    } 
}
loadingBar(30)