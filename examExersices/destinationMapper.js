function solve(data) {
    let destinationStr = data;
    let pattern = /([=\/])([A-Z][a-zA-Z]{2,})\1/g
    let matched = [];
    let match;

    while((match = pattern.exec(destinationStr)) !== null) {
        matched.push(match[2])
    }

    let travelPoints = 0;
    for(let i = 0; i < matched.length; i++) {
        travelPoints += matched[i].length;
    }

    console.log(`Destinations: ${matched.join(', ')}`);
    console.log(`Travel Points: ${travelPoints}`)
}
solve(['=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i='])