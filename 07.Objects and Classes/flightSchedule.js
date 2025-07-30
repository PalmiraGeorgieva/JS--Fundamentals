function schedule(data){
    let flights = data[0];
    let statuses = data[1];
    let searchStatus = data[2][0];

    let statusMap = {};

    for(let entry of statuses) {
        let [fligthCode, status] = entry.split(' ');
        statusMap[fligthCode] = status
    }

    for(let flight of flights) {
         let parts = flight.split(' ');
         let flightCode = parts.shift();
         let destination = parts.join(' ');
         let currentStatus = statusMap[flightCode] || 'Ready to fly';

        if(currentStatus === searchStatus) {
            let flightObj = {
                destination: destination,
                status: currentStatus
            }
            console.log(`{ Destination: '${flightObj.destination}', Status: '${flightObj.status}' }`)
        }

    }

}
schedule([['WN269 Delaware',
   'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania'],
    ['DL2120 Cancelled',
	'WN612 Cancelled',
	'WN1173 Cancelled',
	'SK330 Cancelled'],
	['Ready to fly']
]
)