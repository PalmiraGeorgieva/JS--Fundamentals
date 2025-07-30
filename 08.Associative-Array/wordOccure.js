function solve(data) {
    let map = new Map();

    for(let elm of data) {

        if(map.has(elm)) {
            let currentCount = map.get(elm);
            currentCount++;

            map.set(elm, currentCount);
        } else {
            map.set(elm, 1);
        }
    }
    let sortedArray = Array.from(map).sort((a, b) => b[1] - a[1]);

    for(let [key, value] of sortedArray) {
        console.log(`${key} -> ${value} times`)
    }
}
solve(["Here", "is", "the", "first", "sentence",
    "Here", "is", "another", "sentence",
    "And", "finally", "the", "third", "sentence"])