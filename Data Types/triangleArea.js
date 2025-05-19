function triangleArea(a, b, c) {
    let halfArea = (a + b + c)/2
    let areaTriangle = Math.sqrt(halfArea * (halfArea - a) * (halfArea - b) *(halfArea - c))
    console.log(areaTriangle)
}
triangleArea(2,
3.5,
4
)