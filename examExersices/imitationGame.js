function solve(data) {
    let encryptMessg = data.shift();

    for(let line of data){

        if(line === 'Decode') break;

        let tokens = line.split('|');
        let commands = tokens[0];

        if(commands === 'Move') {
            let numLetter = Number(tokens[1]);
            encryptMessg =  encryptMessg.slice(numLetter) + encryptMessg.slice(0, numLetter)


        } else if (commands === 'Insert') {
            let index = Number(tokens[1]);
            let value = tokens[2];
            encryptMessg = encryptMessg.slice(0, index) + value + encryptMessg.slice(index)

        }else if('ChangeAll') {
            let substring = tokens[1];
            let replacement = tokens[2];
            encryptMessg = encryptMessg.split(substring).join(replacement)


        }
    }
    console.log(`The decrypted message is: ${encryptMessg}`)

}
solve([

'zzHe',

'ChangeAll|z|l',

'Insert|2|o',

'Move|3',

'Decode',

])