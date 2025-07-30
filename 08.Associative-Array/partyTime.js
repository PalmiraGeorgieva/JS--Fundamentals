function party(data){
    let partyIndex = data.indexOf('PARTY');
    let invitedGuests = data.slice(0, partyIndex);
    let arrivedGuests = data.slice(partyIndex + 1);

    let vip = [];
    let regular = [];

    function isVip(str) {
        return str.charCodeAt(0) >= 48 && str.charCodeAt(0) <= 57
    }

    for(let guest of invitedGuests) {
        if(isVip(guest)) {
            vip.push(guest)
        } else {
            regular.push(guest)
        }

    }

    for(let guest of arrivedGuests) {
        if(vip.includes(guest)) {
            vip.splice(vip.indexOf(guest), 1);
        }
        if(regular.includes(guest)) {
            regular.splice(regular.indexOf(guest), 1)
        }
    }
    let totalGuests = vip.length + regular.length;
    console.log(totalGuests);

    vip.forEach(g => console.log(g));
    regular.forEach(g => console.log(g));

}
party(['7IK9Yo0h',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc',
'tSzE5t0p',
'PARTY',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc'
])