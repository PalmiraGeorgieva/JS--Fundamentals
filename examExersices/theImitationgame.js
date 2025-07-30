function theImitation(data) {
    let encryptMessg = data.shift();

    for(let line of data) {
        if(line === 'Decode') {
            break;
        }

        let tokens = line.split('|');
        let command = tokens[0];

        switch(command) {
            case 'Move':
                let num = Number(tokens[1]);
                let move = encryptMessg.slice(0, num);
                let res = encryptMessg.slice(num)
                encryptMessg = res + move
                break;
            case 'Insert':
                let index = Number(tokens[1]);
                let value = tokens[2];
                encryptMessg = encryptMessg.slice(0, index) + value + encryptMessg.slice(index)
                break;
            case 'ChangeAll':
                let currLetter = tokens[1];
                let newLetter = tokens[2];
                encryptMessg = encryptMessg.split(currLetter).join(newLetter)
                
                break;      

        }
    }
    console.log(`The decrypted message is: ${encryptMessg}`)

}
theImitation([
  'zzHe',
  'ChangeAll|z|l',
  'Insert|2|o',
  'Move|3',
  'Decode',
])