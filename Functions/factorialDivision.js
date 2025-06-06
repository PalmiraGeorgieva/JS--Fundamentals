function dividedFact(a, b) {
    function factorial(n) {
        let  result = 1;
        for(let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;

    }
    const result = factorial(a) / factorial(b);
    console.log(result.toFixed(2))

}
dividedFact(5, 2)