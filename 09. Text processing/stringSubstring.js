function stringSubs(search, sentence) {
    let words = sentence.toLowerCase().split(' ');

    if(words.includes(search)) {
        console.log(search)
    } else {
        console.log(`${search} not found!`)
    }

}
stringSubs('javascript',
'JavaScript is the best programming language')
stringSubs('python',
'JavaScript is the best programming language')