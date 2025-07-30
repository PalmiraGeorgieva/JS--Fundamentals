function solve(arr) {
    let startMessg = arr.shift();

    for(let line of arr){

        if(line === 'Reveal') break;

        let tokens = line.split(':|:');
        let commands = tokens.shift();

        switch(commands) {
            case "InsertSpace":
                let index = Number(tokens.shift())
                let startIndex = startMessg.slice(0, index);
                let endIndex = startMessg.slice(index)
                startMessg = startIndex + ' ' + endIndex
                
                break;
            case "Reverse":
                let substr = tokens.shift()
                if(!startMessg.includes(substr)){
                    console.log('error');
                    continue;
                } else {
                    startMessg = startMessg.replace(substr, '')
                    let reverseMessg = substr.split('').reverse().join('') 
                    startMessg += reverseMessg
                    

                }

                break;
            case "ChangeAll":
                let subIndex = tokens.shift();
                let replacemet = tokens.shift();
                startMessg = startMessg.split(subIndex).join(replacemet);
                
                break;        
        }
        console.log(startMessg)
    }
    console.log(`You have a new text message: ${startMessg}`)


}
solve([
'heVVodar!gniV',
'ChangeAll:|:V:|:l',
'Reverse:|:!gnil',
'InsertSpace:|:5',
'Reveal'
])