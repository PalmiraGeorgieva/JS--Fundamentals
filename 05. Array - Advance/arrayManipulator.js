function arrManipulator(nums, commands) {
    for(let command of commands) {
        let tokens = command.split(' ');
        let action = tokens.shift();

        if(action === "add") {
            let index = Number(tokens.shift());
            let element = Number(tokens.shift())
            nums.splice(index, 0, element)

        }else if(action === "addMany") {
            let index = Number(tokens.shift());
            let elements = tokens;

            for(let el of elements) {
                el = Number(el)
                nums.splice(index, 0, el);
                index++;
            }

        } else if(action === "contains") {
            let element = Number(tokens.shift());
            let index = nums.indexOf(element)
            console.log(index)

        } else if(action === 'remove') {
            let index = Number(tokens.shift());
            nums.splice(index, 1)

        } else if(action === 'shift') {
            let rotations = Number(tokens.shift());
            for(let currRotataion = 1; currRotataion <= rotations; currRotataion++) {
                let currNum = nums.shift();
                nums.push(currNum)
            }

        } else if(action === 'sumPairs') {
            let pairedNums = [];

            for(let i = 0; i < nums.length; i += 2) {
                let currentNum = nums[i];

                if(i + 1 < nums.length) {
                    let nextNum = nums[i + 1]
                    pairedNums.push(currentNum + nextNum)
                } else {
                    pairedNums.push(currentNum)
                }
                
            }
            nums = pairedNums

        } else if(action === 'print') {
            console.log(`[ ${nums.join(', ')} ]`)

        }
    }
}
arrManipulator([1, 2, 4, 5, 6, 7],
['add 1 8', 'contains 1', 'contains 3', 'print'])