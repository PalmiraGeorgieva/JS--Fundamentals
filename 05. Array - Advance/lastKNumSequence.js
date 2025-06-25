function lastNumSequence(n, k) {
    let firstEl = [1];

    for(let i = 1; i < n; i++) {
        let nextEl = i > k ? k : i;

        let copyArr = firstEl.slice(firstEl.length - nextEl);
        let sum = 0;

        for(let el of copyArr) {
            sum += el
        }
        firstEl.push(sum)

    }
    console.log(firstEl.join(' '))


}
lastNumSequence(6, 3)