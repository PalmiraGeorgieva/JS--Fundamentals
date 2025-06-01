function solve(arr) {
    if(arr.length === 1) {
        console.log(arr[0]);
        return
    }
    let condensed = []
    while(true){
        for(let i = 0; i < arr.length - 1; i++) {
        let numsFirst = Number(arr[i])
        let last = Number(arr[i + 1])
        let sum = numsFirst + last;

        condensed.push(sum)
        
      }
      if (condensed.length === 1) {
        break;
      }
      arr = condensed;
      condensed = []


    }
    console.log(condensed[0])
   
    

}
solve([2,10,3])
solve([5,0,4,1,2])
solve([1])