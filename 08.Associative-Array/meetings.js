function solve(data) {
    let meetings = {};
    for(let el of data) {
        let tokens = el.split(' ');
        let dayOfWeek = tokens[0];
        let name = tokens[1];

        if(meetings.hasOwnProperty(dayOfWeek)) {
            console.log(`Conflict on ${dayOfWeek}!`)
        } else {
            meetings[dayOfWeek] = name
            console.log(`Scheduled for ${dayOfWeek}`)
        }
    }

    for(let dayOfWeek in meetings) {
        console.log(`${dayOfWeek} -> ${meetings[dayOfWeek]}`)
    }


}
solve(['Monday Peter',
 'Wednesday Bill',
 'Monday Tim',
 'Friday Tim'])