function extractFile(str){
    let subtrFile = str.split('\\').pop();
    let splitedFile = subtrFile.lastIndexOf('.')
    let nameFile = subtrFile.substring(0, splitedFile);
    let extention = subtrFile.substring(splitedFile + 1);
    console.log(`File name: ${nameFile}`);
    console.log(`File extension: ${extention}`)

}
extractFile('C:\\Internal\\training-internal\\Template.pptx');
extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs')
extractFile('C:\\Projects\\Data-Structures\\template.bak.cs')