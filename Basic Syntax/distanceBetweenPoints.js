function distanceBetweenPoints(x1, y1, x2, y2) {
    let distance1 = x2 - x1;
    let distance2 = y2 - y1;
    let totalDistance = Math.sqrt(distance1 * distance1 + distance2 * distance2)
    console.log(`${totalDistance}`)

}
distanceBetweenPoints(2, 4, 5, 0)