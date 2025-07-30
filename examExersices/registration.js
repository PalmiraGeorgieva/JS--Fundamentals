function registration(data){
    let username = data.shift();

    for(let line of data) {
        if(line === 'Registration') {
            break;

        }

        let tokens = line.split(' ');
        let command = tokens.shift();


        switch(command) {
            case 'Letters': 
               let lowerOrUpper = tokens.shift() 
               if(lowerOrUpper === 'Lower') {
                username = username.toLowerCase();
                console.log(username)
                

               } else if(lowerOrUpper === 'Upper') {
                username = username.toUpperCase();
                console.log(username)
                

               }

              break;
            case 'Reverse':
                let startIndex = Number(tokens.shift());
                let endIndex = Number(tokens.shift())

                if(startIndex >= 0 && startIndex < username.length 
                    && endIndex >= 0 && endIndex < username.length 
                    && startIndex <= endIndex
                ){
                    let substr = username.substring(startIndex, endIndex + 1);
                    let reversedName = substr.split('').reverse().join('');
                   
                    console.log(reversedName)
                    
                } else {
                    continue;
                }
                 break;
            case 'Substring':
                let substr = tokens.shift()
                if(!username.includes(substr)) {
                    console.log(`The username ${username} doesn't contain ${substr}.`)
                } else {
                    username = username.replace(substr, '');
                    console.log(username)
                    
                }
                
              break;

            case 'Replace': 
              let givenChar = tokens.shift()
              username = username.split(givenChar).join('-')
              console.log(username)
              
              break;

            case 'IsValid':
                let validChar = tokens.shift();
                if(username.includes(validChar)) {
                    console.log(`Valid username.`)
                } else {
                    console.log(`${validChar} must be contained in your username.`)

                }
                 break;
        }
       
    }
    

}
registration(['ThisIsSoftUni',
'Reverse 1 3',
'Replace S',
'Substring hi',
'Registration'])