function login(arr) {
    let username = arr[0];
    let password = username.split('').reverse().join('');
    let attempt = 0


    for (let i = 1; i < arr.length; i++) {
        let match = arr[i];

        if (match === password) {
            console.log(`User ${username} logged in. `);
            break;
            

        } else {
            attempt++
        }
        
        if (attempt >= 4){
            console.log(`User ${username} blocked!`)
        } else {
            console.log("Incorrect password. Try again.");
            
        }
    }
    
}
login(['Acer','login','go','let me in','recA'])