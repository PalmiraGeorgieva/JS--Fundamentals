function matchPhoneNumber(data) {
    let pattern = /\+359([ -])2\1\d{3}\1\d{4}\b/g;
    let phoneNums = []

    for(let i = 0; i < data.length; i++){
        let text = data[i];
        let currMatch = pattern.exec(text);
        while(currMatch !== null) {
            phoneNums.push(currMatch[0]);
            currMatch = pattern.exec(text)
        }
        

    }
    console.log(phoneNums.join(', '))
    

}
matchPhoneNumber(['+359 2 222 2222,359-2-222-2222,+359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222'])
     