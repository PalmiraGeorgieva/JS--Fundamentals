function solve(arr) {
    let text = arr.shift()
    let pattern = /(::|\*\*)(?<word>[A-Z][a-z]{2,})\1/g;
    let digits = text.match(/\d/g);
    let coolThreshold = 1;

    for(let digit of digits) {
        digit = Number(digit);
        coolThreshold *= digit
    }
    console.log(`Cool threshold: ${coolThreshold}`);

    let validEmojies = Array.from(text.matchAll(pattern));
    console.log(`${validEmojies.length} emojis found in the text. The cool ones are:`)

    for(let validEmojie of validEmojies) {
        let emojieWord = validEmojie.groups.word;
        let coolness = 0

        for(let emojie of emojieWord) {
            let ascii = emojie.charCodeAt();
            coolness += ascii
        }

        if(coolness >= coolThreshold) {
            console.log(`${validEmojie[0]}`)
        }
    }

}
solve((["In the Sofia Zoo there are 311 animals in total!::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:,12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21different types of :Snak::Es::. ::Mooning:: **Shy**"]))