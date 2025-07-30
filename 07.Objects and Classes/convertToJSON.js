function convertToJSON(firstName, lastName, hairColor) {
    let person = {
        name: firstName,
        lastName,
        hairColor
    }

    let parceToJson = JSON.stringify(person);
    console.log(parceToJson)
}
convertToJSON('George', 'Jones', 'Brown')