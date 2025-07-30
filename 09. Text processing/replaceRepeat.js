function replaceRepeatStr(str){
    let result = '';
    for(let i = 0; i < str.length; i++) {
        let x = str[i];
        let y = str[i - 1];
        if (x !== y) {
            result += x;
        }
    }
    console.log(result)

}
replaceRepeatStr('aaaaabbbbbcdddeeeedssaa')