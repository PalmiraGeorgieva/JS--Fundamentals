function addAndRemove(commands) {
    let newArr = [];
    let number = 1;

    for (let command of commands) {
        if (command === "add") {
            newArr.push(number)
        } else if (command === "remove") {
            newArr.pop()

        }
        number++
    }
    if (newArr.length === 0) {
        console.log('Empty')
    } else {
        console.log(newArr.join(' '))
    }



}
addAndRemove(['add', 'add', 'add', 'add'])