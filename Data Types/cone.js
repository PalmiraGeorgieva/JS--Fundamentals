function cone(r, h) {
    // обем на конус 
    let volume = (1/3) * Math.PI * Math.pow(r, 2) * h;
    let s = Math.sqrt(Math.pow(r, 2) + Math.pow(h, 2)) // образуваща височина
    let areaLiteral = Math.PI * r * s  // лице на околна повърхнина
    let baseArea = Math.PI * Math.pow(r, 2) // лице на базата (основата)
    let areaTotal = areaLiteral + baseArea  // общо лице
    console.log(`volume = ${volume.toFixed(4)}`)
    console.log(`area = ${areaTotal.toFixed(4)}`)

}
cone(3, 5)