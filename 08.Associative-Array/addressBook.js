function solve(data) {
    let addressBook = {};

    for(let el of data) {
        let tokens = el.split(':');
        let name = tokens[0];
        let address = tokens[1];

        addressBook[name] = address;
    }
    let addressBookEntries = Object.entries(addressBook);

    addressBookEntries.sort((first, second) => first[0].localeCompare(second[0]))

    for(let [name, address] of addressBookEntries) {
        console.log(`${name} -> ${address}`)

    }

}
solve(['Tim:Doe Crossing',
 'Bill:Nelson Place',
 'Peter:Carlyle Ave',
 'Bill:Ornery Rd'])