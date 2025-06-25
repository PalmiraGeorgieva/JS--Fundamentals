function characterInRange(char1, char2) {
    let startChar = char1.charCodeAt(0);
    let endChar = char2.charCodeAt(0);

    let start = Math.min(startChar, endChar);
    let end = Math.max(startChar, endChar);

    let result = '';
    for (let i = start + 1; i < end; i++) {
        result += String.fromCharCode(i) + ' ';
    }
    console.log(result)
}