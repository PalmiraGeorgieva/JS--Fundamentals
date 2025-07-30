function solve(data){
    let validEmail = data;
    let pattern = / \b[a-zA-Z0-9]+(?:[._-][a-zA-Z0-9]+)*@[a-zA-Z]+(?:-[a-zA-Z]+)*(?:\.[a-zA-Z]+(?:-[a-zA-Z]+)*)+\b/g
    let match 
    while((match = pattern.exec(validEmail)) !== null){
        console.log(match[0])
    }

}
solve('Just send email to s.miller@mit.edu and --123@gmail.com')