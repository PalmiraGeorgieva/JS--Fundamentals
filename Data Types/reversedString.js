function reversedString(text) {
    let currText = ''
    for (let i = text.length - 1; i >= 0; i--) {
        let reversedText = text[i]
        currText += reversedText + ''
        
    }
    console.log(currText)
}
reversedString('Information')