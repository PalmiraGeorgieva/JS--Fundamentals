function echo(data) {
    if (typeof data === "string" || typeof data === "number"){
        console.log(typeof data)
        console.log(data)
    } else {
        console.log(typeof data)
        console.log(`Parameter is not suitable for printing`)
    }
}         
echo(null)