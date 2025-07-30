function solve(data) {
    let password = data.shift();
    let command = data.shift();

    while(command !== 'Done') {
        let tokens = command.split(' ');
        let action = tokens.shift();

        switch(action) {
            case 'TakeOdd':
                let newPassword = ""
                for(let i = 0; i < password.length; i++) {
                    if(i % 2 !== 0) {
                        newPassword += password[i]
                    }
                }
                password = newPassword;
                console.log(password)
                 break;
            case 'Cut':
                let index = Number(tokens.shift());
                let length = Number(tokens.shift())
                let cuttedStr = password.slice(index, index + length)
                password = password.replace(cuttedStr, '')
                console.log(password)
                break; 
            case 'Substitute':
                let subString = tokens.shift();
                let subStitude = tokens.shift();
                if(password.includes(subString)) {
                    password = password.split(subString).join(subStitude)
                    console.log(password)
                }  else {
                    console.log(`Nothing to replace!`)
                }

                break;        
        }
        

      command = data.shift()
    }
    console.log(`Your password is: ${password}`)



}
solve((["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr", 
"TakeOdd",
"Cut 15 3",
"Substitute :: -",
"Substitute | ^",
"Done"]))