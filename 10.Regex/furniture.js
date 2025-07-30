function furnitur(input){
    let pattern = />>([A-Z][A-Za-z\s]*)<<(\d+(\.\d+)?)!(\d+)/;
    let furniture = [];
    let total = 0;

    for(let line of input) {
        if(line === 'Purchase') break;

        let match = line.match(pattern);
        if(match) {
            let item = match[1];
            let price = Number(match[2]);
            let quantity = Number(match[4]);
            furniture.push(item);
            total += price * quantity


        }
    }
    console.log('Bought furniture:')
    furniture.forEach(i => console.log(i))
    console.log(`Total money spend: ${total.toFixed(2)}`)

}
furnitur(['>>Sofa<<312.23!3',
'>>TV<<300!5',
'>Invalid<<!5',
'Purchase'])