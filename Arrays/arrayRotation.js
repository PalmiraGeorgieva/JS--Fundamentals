function arrayRotation(arr){
    let countRotation = Number(arr.pop()) % arr.length;
    

    for (let i = 0; i < countRotation; i++) {
        let lastEl = arr.pop();
        arr.unshift(lastEl)

    
        
    
    }
    console.log(arr.join(' '))
}
arrayRotation(['Banana', 'Orange', 'Coconut', 'Apple', '15'])