function solve(str){
    let middle = Math.floor(str.length / 2);
    let firstHalf = str.substring(0, middle);
    let secondHalf = str.substring(middle);

    let reversedFirst = firstHalf.split('').reverse().join('');
    let reversedSecond = secondHalf.split('').reverse().join('');

    console.log(reversedFirst);
    console.log(reversedSecond)

}
solve('tluciffiDsIsihTgnizamAoSsIsihT')