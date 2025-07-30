function solve(data) {
    let passwordReset = data.shift();

    for(let line of data) {

        if(line === 'Done') break;

        let tokens = line.split(' ');
        let commands = tokens[0];

        if(commands === 'TakeOdd') {
            let oddIndexes = '';
            for(let i = 0; i < passwordReset.length; i++) {
               if(i % 2 !== 0) {
                   oddIndexes += passwordReset[i];
               }
            }
            passwordReset = oddIndexes;
            console.log(passwordReset)

        } else if(commands === 'Cut') {
            let index = Number(tokens[1]);
            let length = Number(tokens[2]);

            let substr = passwordReset.slice(index, index + length);
            passwordReset = passwordReset.replace(substr, '')
            console.log(passwordReset)

        } else if(commands === 'Substitute') {
            let substring = tokens[1];
            let subStitude = tokens[2];
            if(passwordReset.includes(substring)) {
                passwordReset = passwordReset.split(substring).join(subStitude);
                console.log(passwordReset)
            } else {
                console.log('Nothing to replace!')
            }

        }
    }
    console.log(`Your password is: ${passwordReset}`)

}
solve((["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
"TakeOdd",
"Cut 18 2",
"Substitute ! ***",
"Substitute ? .!.",
"Done"]))