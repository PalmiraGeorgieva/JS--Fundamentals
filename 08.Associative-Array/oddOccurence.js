function solve(data) {
    let words = data.split(' ');
    let map = new Map();

    for(let word of words){
        let lowerWords = word.toLowerCase()
        map.set(lowerWords, (map.get(lowerWords) || 0) + 1)
    }
    let result = [];

    for(let [key, value] of map.entries()) {
        if(value % 2 !== 0) {
            result.push(key)
        }
    }
    console.log(result.join(' '))


}
solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')