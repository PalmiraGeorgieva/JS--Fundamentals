function theBiggestNum3(num1, num2, num3) {
    let a = Number(num1);
    let b = Number(num2);
    let c = Number(num3);

    let max;

    if (a >= b && a >= c) {
        max = a;
    } else if (b >=a && b >= c) {
        max = b;
    } else  if (c >= a && c >= b) {
        max = c
    }
    console.log(max)
}
theBiggestNum3(130,
5,
99

)