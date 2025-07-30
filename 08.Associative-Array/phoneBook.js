function phoneData(data) {
    let phoneBook = {};

    for(let el of data) {
        let tokens = el.split(' ');

        let phoneName = tokens[0];
        let phoneNumber = tokens[1];

        phoneBook[phoneName] = phoneNumber
    }
    for(let key in phoneBook) {
        console.log(`${key} -> ${phoneBook[key]}`)
    }

}
phoneData(['Tim 0834212554',
 'Peter 0877547887',
 'Bill 0896543112',
 'Tim 0876566344'])